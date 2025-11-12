// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterAddNodeV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#cluster_ext_id ClusterAddNodeV2#cluster_ext_id}
  */
  readonly clusterExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#id ClusterAddNodeV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_add_node ClusterAddNodeV2#should_skip_add_node}
  */
  readonly shouldSkipAddNode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_pre_expand_checks ClusterAddNodeV2#should_skip_pre_expand_checks}
  */
  readonly shouldSkipPreExpandChecks?: boolean | cdktf.IResolvable;
  /**
  * config_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#config_params ClusterAddNodeV2#config_params}
  */
  readonly configParams?: ClusterAddNodeV2ConfigParams[] | cdktf.IResolvable;
  /**
  * node_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#node_params ClusterAddNodeV2#node_params}
  */
  readonly nodeParams: ClusterAddNodeV2NodeParams[] | cdktf.IResolvable;
  /**
  * remove_node_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#remove_node_params ClusterAddNodeV2#remove_node_params}
  */
  readonly removeNodeParams?: ClusterAddNodeV2RemoveNodeParams[] | cdktf.IResolvable;
}
export interface ClusterAddNodeV2ConfigParamsHipervDomainDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#cluster_name ClusterAddNodeV2#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#password ClusterAddNodeV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#username ClusterAddNodeV2#username}
  */
  readonly username?: string;
}

export function clusterAddNodeV2ConfigParamsHipervDomainDetailsToTerraform(struct?: ClusterAddNodeV2ConfigParamsHipervDomainDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterAddNodeV2ConfigParamsHipervDomainDetailsToHclTerraform(struct?: ClusterAddNodeV2ConfigParamsHipervDomainDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2ConfigParamsHipervDomainDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2ConfigParamsHipervDomainDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2ConfigParamsHipervDomainDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // password - computed: true, optional: true, required: false
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
}

export class ClusterAddNodeV2ConfigParamsHipervDomainDetailsList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2ConfigParamsHipervDomainDetails[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2ConfigParamsHipervDomainDetailsOutputReference {
    return new ClusterAddNodeV2ConfigParamsHipervDomainDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#cluster_name ClusterAddNodeV2#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#password ClusterAddNodeV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#username ClusterAddNodeV2#username}
  */
  readonly username?: string;
}

export function clusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsToTerraform(struct?: ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsToHclTerraform(struct?: ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // password - computed: true, optional: true, required: false
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
}

export class ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsOutputReference {
    return new ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2ConfigParamsHiperv {
  /**
  * domain_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#domain_details ClusterAddNodeV2#domain_details}
  */
  readonly domainDetails?: ClusterAddNodeV2ConfigParamsHipervDomainDetails[] | cdktf.IResolvable;
  /**
  * failover_cluster_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#failover_cluster_details ClusterAddNodeV2#failover_cluster_details}
  */
  readonly failoverClusterDetails?: ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails[] | cdktf.IResolvable;
}

export function clusterAddNodeV2ConfigParamsHipervToTerraform(struct?: ClusterAddNodeV2ConfigParamsHiperv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_details: cdktf.listMapper(clusterAddNodeV2ConfigParamsHipervDomainDetailsToTerraform, true)(struct!.domainDetails),
    failover_cluster_details: cdktf.listMapper(clusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsToTerraform, true)(struct!.failoverClusterDetails),
  }
}


export function clusterAddNodeV2ConfigParamsHipervToHclTerraform(struct?: ClusterAddNodeV2ConfigParamsHiperv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_details: {
      value: cdktf.listMapperHcl(clusterAddNodeV2ConfigParamsHipervDomainDetailsToHclTerraform, true)(struct!.domainDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2ConfigParamsHipervDomainDetailsList",
    },
    failover_cluster_details: {
      value: cdktf.listMapperHcl(clusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsToHclTerraform, true)(struct!.failoverClusterDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2ConfigParamsHipervOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2ConfigParamsHiperv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainDetails = this._domainDetails?.internalValue;
    }
    if (this._failoverClusterDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverClusterDetails = this._failoverClusterDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2ConfigParamsHiperv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainDetails.internalValue = undefined;
      this._failoverClusterDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainDetails.internalValue = value.domainDetails;
      this._failoverClusterDetails.internalValue = value.failoverClusterDetails;
    }
  }

  // domain_details - computed: false, optional: true, required: false
  private _domainDetails = new ClusterAddNodeV2ConfigParamsHipervDomainDetailsList(this, "domain_details", false);
  public get domainDetails() {
    return this._domainDetails;
  }
  public putDomainDetails(value: ClusterAddNodeV2ConfigParamsHipervDomainDetails[] | cdktf.IResolvable) {
    this._domainDetails.internalValue = value;
  }
  public resetDomainDetails() {
    this._domainDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDetailsInput() {
    return this._domainDetails.internalValue;
  }

  // failover_cluster_details - computed: false, optional: true, required: false
  private _failoverClusterDetails = new ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetailsList(this, "failover_cluster_details", false);
  public get failoverClusterDetails() {
    return this._failoverClusterDetails;
  }
  public putFailoverClusterDetails(value: ClusterAddNodeV2ConfigParamsHipervFailoverClusterDetails[] | cdktf.IResolvable) {
    this._failoverClusterDetails.internalValue = value;
  }
  public resetFailoverClusterDetails() {
    this._failoverClusterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverClusterDetailsInput() {
    return this._failoverClusterDetails.internalValue;
  }
}

export class ClusterAddNodeV2ConfigParamsHipervList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2ConfigParamsHiperv[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2ConfigParamsHipervOutputReference {
    return new ClusterAddNodeV2ConfigParamsHipervOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2ConfigParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#is_compute_only ClusterAddNodeV2#is_compute_only}
  */
  readonly isComputeOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#is_never_schedulable ClusterAddNodeV2#is_never_schedulable}
  */
  readonly isNeverSchedulable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#is_nos_compatible ClusterAddNodeV2#is_nos_compatible}
  */
  readonly isNosCompatible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_discovery ClusterAddNodeV2#should_skip_discovery}
  */
  readonly shouldSkipDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_imaging ClusterAddNodeV2#should_skip_imaging}
  */
  readonly shouldSkipImaging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_validate_rack_awareness ClusterAddNodeV2#should_validate_rack_awareness}
  */
  readonly shouldValidateRackAwareness?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#target_hypervisor ClusterAddNodeV2#target_hypervisor}
  */
  readonly targetHypervisor?: string;
  /**
  * hiperv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hiperv ClusterAddNodeV2#hiperv}
  */
  readonly hiperv?: ClusterAddNodeV2ConfigParamsHiperv[] | cdktf.IResolvable;
}

export function clusterAddNodeV2ConfigParamsToTerraform(struct?: ClusterAddNodeV2ConfigParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_compute_only: cdktf.booleanToTerraform(struct!.isComputeOnly),
    is_never_schedulable: cdktf.booleanToTerraform(struct!.isNeverSchedulable),
    is_nos_compatible: cdktf.booleanToTerraform(struct!.isNosCompatible),
    should_skip_discovery: cdktf.booleanToTerraform(struct!.shouldSkipDiscovery),
    should_skip_imaging: cdktf.booleanToTerraform(struct!.shouldSkipImaging),
    should_validate_rack_awareness: cdktf.booleanToTerraform(struct!.shouldValidateRackAwareness),
    target_hypervisor: cdktf.stringToTerraform(struct!.targetHypervisor),
    hiperv: cdktf.listMapper(clusterAddNodeV2ConfigParamsHipervToTerraform, true)(struct!.hiperv),
  }
}


export function clusterAddNodeV2ConfigParamsToHclTerraform(struct?: ClusterAddNodeV2ConfigParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_compute_only: {
      value: cdktf.booleanToHclTerraform(struct!.isComputeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_never_schedulable: {
      value: cdktf.booleanToHclTerraform(struct!.isNeverSchedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_nos_compatible: {
      value: cdktf.booleanToHclTerraform(struct!.isNosCompatible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_skip_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_skip_imaging: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipImaging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_validate_rack_awareness: {
      value: cdktf.booleanToHclTerraform(struct!.shouldValidateRackAwareness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_hypervisor: {
      value: cdktf.stringToHclTerraform(struct!.targetHypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hiperv: {
      value: cdktf.listMapperHcl(clusterAddNodeV2ConfigParamsHipervToHclTerraform, true)(struct!.hiperv),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2ConfigParamsHipervList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2ConfigParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2ConfigParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isComputeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isComputeOnly = this._isComputeOnly;
    }
    if (this._isNeverSchedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNeverSchedulable = this._isNeverSchedulable;
    }
    if (this._isNosCompatible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNosCompatible = this._isNosCompatible;
    }
    if (this._shouldSkipDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipDiscovery = this._shouldSkipDiscovery;
    }
    if (this._shouldSkipImaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipImaging = this._shouldSkipImaging;
    }
    if (this._shouldValidateRackAwareness !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldValidateRackAwareness = this._shouldValidateRackAwareness;
    }
    if (this._targetHypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetHypervisor = this._targetHypervisor;
    }
    if (this._hiperv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiperv = this._hiperv?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2ConfigParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isComputeOnly = undefined;
      this._isNeverSchedulable = undefined;
      this._isNosCompatible = undefined;
      this._shouldSkipDiscovery = undefined;
      this._shouldSkipImaging = undefined;
      this._shouldValidateRackAwareness = undefined;
      this._targetHypervisor = undefined;
      this._hiperv.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isComputeOnly = value.isComputeOnly;
      this._isNeverSchedulable = value.isNeverSchedulable;
      this._isNosCompatible = value.isNosCompatible;
      this._shouldSkipDiscovery = value.shouldSkipDiscovery;
      this._shouldSkipImaging = value.shouldSkipImaging;
      this._shouldValidateRackAwareness = value.shouldValidateRackAwareness;
      this._targetHypervisor = value.targetHypervisor;
      this._hiperv.internalValue = value.hiperv;
    }
  }

  // is_compute_only - computed: true, optional: true, required: false
  private _isComputeOnly?: boolean | cdktf.IResolvable; 
  public get isComputeOnly() {
    return this.getBooleanAttribute('is_compute_only');
  }
  public set isComputeOnly(value: boolean | cdktf.IResolvable) {
    this._isComputeOnly = value;
  }
  public resetIsComputeOnly() {
    this._isComputeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isComputeOnlyInput() {
    return this._isComputeOnly;
  }

  // is_never_schedulable - computed: true, optional: true, required: false
  private _isNeverSchedulable?: boolean | cdktf.IResolvable; 
  public get isNeverSchedulable() {
    return this.getBooleanAttribute('is_never_schedulable');
  }
  public set isNeverSchedulable(value: boolean | cdktf.IResolvable) {
    this._isNeverSchedulable = value;
  }
  public resetIsNeverSchedulable() {
    this._isNeverSchedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNeverSchedulableInput() {
    return this._isNeverSchedulable;
  }

  // is_nos_compatible - computed: true, optional: true, required: false
  private _isNosCompatible?: boolean | cdktf.IResolvable; 
  public get isNosCompatible() {
    return this.getBooleanAttribute('is_nos_compatible');
  }
  public set isNosCompatible(value: boolean | cdktf.IResolvable) {
    this._isNosCompatible = value;
  }
  public resetIsNosCompatible() {
    this._isNosCompatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNosCompatibleInput() {
    return this._isNosCompatible;
  }

  // should_skip_discovery - computed: true, optional: true, required: false
  private _shouldSkipDiscovery?: boolean | cdktf.IResolvable; 
  public get shouldSkipDiscovery() {
    return this.getBooleanAttribute('should_skip_discovery');
  }
  public set shouldSkipDiscovery(value: boolean | cdktf.IResolvable) {
    this._shouldSkipDiscovery = value;
  }
  public resetShouldSkipDiscovery() {
    this._shouldSkipDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipDiscoveryInput() {
    return this._shouldSkipDiscovery;
  }

  // should_skip_imaging - computed: true, optional: true, required: false
  private _shouldSkipImaging?: boolean | cdktf.IResolvable; 
  public get shouldSkipImaging() {
    return this.getBooleanAttribute('should_skip_imaging');
  }
  public set shouldSkipImaging(value: boolean | cdktf.IResolvable) {
    this._shouldSkipImaging = value;
  }
  public resetShouldSkipImaging() {
    this._shouldSkipImaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldSkipImagingInput() {
    return this._shouldSkipImaging;
  }

  // should_validate_rack_awareness - computed: true, optional: true, required: false
  private _shouldValidateRackAwareness?: boolean | cdktf.IResolvable; 
  public get shouldValidateRackAwareness() {
    return this.getBooleanAttribute('should_validate_rack_awareness');
  }
  public set shouldValidateRackAwareness(value: boolean | cdktf.IResolvable) {
    this._shouldValidateRackAwareness = value;
  }
  public resetShouldValidateRackAwareness() {
    this._shouldValidateRackAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldValidateRackAwarenessInput() {
    return this._shouldValidateRackAwareness;
  }

  // target_hypervisor - computed: true, optional: true, required: false
  private _targetHypervisor?: string; 
  public get targetHypervisor() {
    return this.getStringAttribute('target_hypervisor');
  }
  public set targetHypervisor(value: string) {
    this._targetHypervisor = value;
  }
  public resetTargetHypervisor() {
    this._targetHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHypervisorInput() {
    return this._targetHypervisor;
  }

  // hiperv - computed: false, optional: true, required: false
  private _hiperv = new ClusterAddNodeV2ConfigParamsHipervList(this, "hiperv", false);
  public get hiperv() {
    return this._hiperv;
  }
  public putHiperv(value: ClusterAddNodeV2ConfigParamsHiperv[] | cdktf.IResolvable) {
    this._hiperv.internalValue = value;
  }
  public resetHiperv() {
    this._hiperv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipervInput() {
    return this._hiperv.internalValue;
  }
}

export class ClusterAddNodeV2ConfigParamsList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2ConfigParams[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2ConfigParamsOutputReference {
    return new ClusterAddNodeV2ConfigParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsBlockListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#block_id ClusterAddNodeV2#block_id}
  */
  readonly blockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#rack_name ClusterAddNodeV2#rack_name}
  */
  readonly rackName?: string;
}

export function clusterAddNodeV2NodeParamsBlockListStructToTerraform(struct?: ClusterAddNodeV2NodeParamsBlockListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_id: cdktf.stringToTerraform(struct!.blockId),
    rack_name: cdktf.stringToTerraform(struct!.rackName),
  }
}


export function clusterAddNodeV2NodeParamsBlockListStructToHclTerraform(struct?: ClusterAddNodeV2NodeParamsBlockListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_id: {
      value: cdktf.stringToHclTerraform(struct!.blockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack_name: {
      value: cdktf.stringToHclTerraform(struct!.rackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsBlockListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsBlockListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockId = this._blockId;
    }
    if (this._rackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rackName = this._rackName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsBlockListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockId = undefined;
      this._rackName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockId = value.blockId;
      this._rackName = value.rackName;
    }
  }

  // block_id - computed: true, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // rack_name - computed: true, optional: true, required: false
  private _rackName?: string; 
  public get rackName() {
    return this.getStringAttribute('rack_name');
  }
  public set rackName(value: string) {
    this._rackName = value;
  }
  public resetRackName() {
    this._rackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackNameInput() {
    return this._rackName;
  }
}

export class ClusterAddNodeV2NodeParamsBlockListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsBlockListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsBlockListStructOutputReference {
    return new ClusterAddNodeV2NodeParamsBlockListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsBundleInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#name ClusterAddNodeV2#name}
  */
  readonly name?: string;
}

export function clusterAddNodeV2NodeParamsBundleInfoToTerraform(struct?: ClusterAddNodeV2NodeParamsBundleInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterAddNodeV2NodeParamsBundleInfoToHclTerraform(struct?: ClusterAddNodeV2NodeParamsBundleInfo | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsBundleInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsBundleInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsBundleInfo | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsBundleInfoList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsBundleInfo[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsBundleInfoOutputReference {
    return new ClusterAddNodeV2NodeParamsBundleInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#key ClusterAddNodeV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value?: string;
}

export function clusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructOutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4ToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4OutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6ToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6OutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv4 ClusterAddNodeV2#ipv4}
  */
  readonly ipv4?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv6 ClusterAddNodeV2#ipv6}
  */
  readonly ipv6?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv4[] | cdktf.IResolvable) {
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
  private _ipv6 = new ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpIpv6[] | cdktf.IResolvable) {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpOutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4ToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4OutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6ToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6OutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv4 ClusterAddNodeV2#ipv4}
  */
  readonly ipv4?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv6 ClusterAddNodeV2#ipv6}
  */
  readonly ipv6?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsComputeNodeListIpmiIpToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListIpmiIpToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv4[] | cdktf.IResolvable) {
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
  private _ipv6 = new ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpIpv6[] | cdktf.IResolvable) {
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

export class ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpOutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsComputeNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#block_id ClusterAddNodeV2#block_id}
  */
  readonly blockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_hostname ClusterAddNodeV2#hypervisor_hostname}
  */
  readonly hypervisorHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#model ClusterAddNodeV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#node_position ClusterAddNodeV2#node_position}
  */
  readonly nodePosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#node_uuid ClusterAddNodeV2#node_uuid}
  */
  readonly nodeUuid?: string;
  /**
  * digital_certificate_map_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#digital_certificate_map_list ClusterAddNodeV2#digital_certificate_map_list}
  */
  readonly digitalCertificateMapList?: ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable;
  /**
  * hypervisor_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_ip ClusterAddNodeV2#hypervisor_ip}
  */
  readonly hypervisorIp?: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp[] | cdktf.IResolvable;
  /**
  * ipmi_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipmi_ip ClusterAddNodeV2#ipmi_ip}
  */
  readonly ipmiIp?: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsComputeNodeListStructToTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_id: cdktf.stringToTerraform(struct!.blockId),
    hypervisor_hostname: cdktf.stringToTerraform(struct!.hypervisorHostname),
    model: cdktf.stringToTerraform(struct!.model),
    node_position: cdktf.stringToTerraform(struct!.nodePosition),
    node_uuid: cdktf.stringToTerraform(struct!.nodeUuid),
    digital_certificate_map_list: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructToTerraform, true)(struct!.digitalCertificateMapList),
    hypervisor_ip: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpToTerraform, true)(struct!.hypervisorIp),
    ipmi_ip: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListIpmiIpToTerraform, true)(struct!.ipmiIp),
  }
}


export function clusterAddNodeV2NodeParamsComputeNodeListStructToHclTerraform(struct?: ClusterAddNodeV2NodeParamsComputeNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_id: {
      value: cdktf.stringToHclTerraform(struct!.blockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_hostname: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_position: {
      value: cdktf.stringToHclTerraform(struct!.nodePosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_uuid: {
      value: cdktf.stringToHclTerraform(struct!.nodeUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digital_certificate_map_list: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructToHclTerraform, true)(struct!.digitalCertificateMapList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructList",
    },
    hypervisor_ip: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListHypervisorIpToHclTerraform, true)(struct!.hypervisorIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpList",
    },
    ipmi_ip: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListIpmiIpToHclTerraform, true)(struct!.ipmiIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsComputeNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsComputeNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockId = this._blockId;
    }
    if (this._hypervisorHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorHostname = this._hypervisorHostname;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nodePosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePosition = this._nodePosition;
    }
    if (this._nodeUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUuid = this._nodeUuid;
    }
    if (this._digitalCertificateMapList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalCertificateMapList = this._digitalCertificateMapList?.internalValue;
    }
    if (this._hypervisorIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorIp = this._hypervisorIp?.internalValue;
    }
    if (this._ipmiIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiIp = this._ipmiIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsComputeNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockId = undefined;
      this._hypervisorHostname = undefined;
      this._model = undefined;
      this._nodePosition = undefined;
      this._nodeUuid = undefined;
      this._digitalCertificateMapList.internalValue = undefined;
      this._hypervisorIp.internalValue = undefined;
      this._ipmiIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockId = value.blockId;
      this._hypervisorHostname = value.hypervisorHostname;
      this._model = value.model;
      this._nodePosition = value.nodePosition;
      this._nodeUuid = value.nodeUuid;
      this._digitalCertificateMapList.internalValue = value.digitalCertificateMapList;
      this._hypervisorIp.internalValue = value.hypervisorIp;
      this._ipmiIp.internalValue = value.ipmiIp;
    }
  }

  // block_id - computed: true, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // hypervisor_hostname - computed: false, optional: true, required: false
  private _hypervisorHostname?: string; 
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }
  public set hypervisorHostname(value: string) {
    this._hypervisorHostname = value;
  }
  public resetHypervisorHostname() {
    this._hypervisorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorHostnameInput() {
    return this._hypervisorHostname;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // node_position - computed: true, optional: true, required: false
  private _nodePosition?: string; 
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }
  public set nodePosition(value: string) {
    this._nodePosition = value;
  }
  public resetNodePosition() {
    this._nodePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePositionInput() {
    return this._nodePosition;
  }

  // node_uuid - computed: true, optional: true, required: false
  private _nodeUuid?: string; 
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }
  public set nodeUuid(value: string) {
    this._nodeUuid = value;
  }
  public resetNodeUuid() {
    this._nodeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUuidInput() {
    return this._nodeUuid;
  }

  // digital_certificate_map_list - computed: false, optional: true, required: false
  private _digitalCertificateMapList = new ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStructList(this, "digital_certificate_map_list", false);
  public get digitalCertificateMapList() {
    return this._digitalCertificateMapList;
  }
  public putDigitalCertificateMapList(value: ClusterAddNodeV2NodeParamsComputeNodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable) {
    this._digitalCertificateMapList.internalValue = value;
  }
  public resetDigitalCertificateMapList() {
    this._digitalCertificateMapList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalCertificateMapListInput() {
    return this._digitalCertificateMapList.internalValue;
  }

  // hypervisor_ip - computed: false, optional: true, required: false
  private _hypervisorIp = new ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIpList(this, "hypervisor_ip", false);
  public get hypervisorIp() {
    return this._hypervisorIp;
  }
  public putHypervisorIp(value: ClusterAddNodeV2NodeParamsComputeNodeListHypervisorIp[] | cdktf.IResolvable) {
    this._hypervisorIp.internalValue = value;
  }
  public resetHypervisorIp() {
    this._hypervisorIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIpInput() {
    return this._hypervisorIp.internalValue;
  }

  // ipmi_ip - computed: false, optional: true, required: false
  private _ipmiIp = new ClusterAddNodeV2NodeParamsComputeNodeListIpmiIpList(this, "ipmi_ip", false);
  public get ipmiIp() {
    return this._ipmiIp;
  }
  public putIpmiIp(value: ClusterAddNodeV2NodeParamsComputeNodeListIpmiIp[] | cdktf.IResolvable) {
    this._ipmiIp.internalValue = value;
  }
  public resetIpmiIp() {
    this._ipmiIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp.internalValue;
  }
}

export class ClusterAddNodeV2NodeParamsComputeNodeListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsComputeNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsComputeNodeListStructOutputReference {
    return new ClusterAddNodeV2NodeParamsComputeNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsHypervisorIsos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#md5_sum ClusterAddNodeV2#md5_sum}
  */
  readonly md5Sum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#type ClusterAddNodeV2#type}
  */
  readonly type?: string;
}

export function clusterAddNodeV2NodeParamsHypervisorIsosToTerraform(struct?: ClusterAddNodeV2NodeParamsHypervisorIsos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_sum: cdktf.stringToTerraform(struct!.md5Sum),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function clusterAddNodeV2NodeParamsHypervisorIsosToHclTerraform(struct?: ClusterAddNodeV2NodeParamsHypervisorIsos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_sum: {
      value: cdktf.stringToHclTerraform(struct!.md5Sum),
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

export class ClusterAddNodeV2NodeParamsHypervisorIsosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsHypervisorIsos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Sum !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Sum = this._md5Sum;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsHypervisorIsos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5Sum = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5Sum = value.md5Sum;
      this._type = value.type;
    }
  }

  // md5_sum - computed: true, optional: true, required: false
  private _md5Sum?: string; 
  public get md5Sum() {
    return this.getStringAttribute('md5_sum');
  }
  public set md5Sum(value: string) {
    this._md5Sum = value;
  }
  public resetMd5Sum() {
    this._md5Sum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5SumInput() {
    return this._md5Sum;
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
}

export class ClusterAddNodeV2NodeParamsHypervisorIsosList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsHypervisorIsos[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsHypervisorIsosOutputReference {
    return new ClusterAddNodeV2NodeParamsHypervisorIsosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsNodeListCvmIpIpv4ToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListCvmIpIpv4ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4OutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsNodeListCvmIpIpv6ToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListCvmIpIpv6ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6OutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListCvmIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv4 ClusterAddNodeV2#ipv4}
  */
  readonly ipv4?: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv6 ClusterAddNodeV2#ipv6}
  */
  readonly ipv6?: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsNodeListCvmIpToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListCvmIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListCvmIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListCvmIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterAddNodeV2NodeParamsNodeListCvmIpToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListCvmIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListCvmIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListCvmIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsNodeListCvmIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListCvmIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListCvmIp | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv4[] | cdktf.IResolvable) {
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
  private _ipv6 = new ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterAddNodeV2NodeParamsNodeListCvmIpIpv6[] | cdktf.IResolvable) {
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

export class ClusterAddNodeV2NodeParamsNodeListCvmIpList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListCvmIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListCvmIpOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListCvmIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#key ClusterAddNodeV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value?: string;
}

export function clusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4ToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4OutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6ToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6OutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListHypervisorIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv4 ClusterAddNodeV2#ipv4}
  */
  readonly ipv4?: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv6 ClusterAddNodeV2#ipv6}
  */
  readonly ipv6?: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsNodeListHypervisorIpToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListHypervisorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterAddNodeV2NodeParamsNodeListHypervisorIpToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListHypervisorIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsNodeListHypervisorIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListHypervisorIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListHypervisorIp | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv4[] | cdktf.IResolvable) {
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
  private _ipv6 = new ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterAddNodeV2NodeParamsNodeListHypervisorIpIpv6[] | cdktf.IResolvable) {
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

export class ClusterAddNodeV2NodeParamsNodeListHypervisorIpList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListHypervisorIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListHypervisorIpOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListHypervisorIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsNodeListIpmiIpIpv4ToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListIpmiIpIpv4ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4OutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#prefix_length ClusterAddNodeV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value: string;
}

export function clusterAddNodeV2NodeParamsNodeListIpmiIpIpv6ToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListIpmiIpIpv6ToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6 | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6 | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6List extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6OutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListIpmiIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv4 ClusterAddNodeV2#ipv4}
  */
  readonly ipv4?: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipv6 ClusterAddNodeV2#ipv6}
  */
  readonly ipv6?: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsNodeListIpmiIpToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListIpmiIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListIpmiIpIpv4ToTerraform, true)(struct!.ipv4),
    ipv6: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListIpmiIpIpv6ToTerraform, true)(struct!.ipv6),
  }
}


export function clusterAddNodeV2NodeParamsNodeListIpmiIpToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListIpmiIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListIpmiIpIpv4ToHclTerraform, true)(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4List",
    },
    ipv6: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListIpmiIpIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsNodeListIpmiIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListIpmiIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListIpmiIp | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv4[] | cdktf.IResolvable) {
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
  private _ipv6 = new ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ClusterAddNodeV2NodeParamsNodeListIpmiIpIpv6[] | cdktf.IResolvable) {
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

export class ClusterAddNodeV2NodeParamsNodeListIpmiIpList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListIpmiIp[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListIpmiIpOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListIpmiIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#mac ClusterAddNodeV2#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#name ClusterAddNodeV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value?: string;
}

export function clusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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

export class ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mac = value.mac;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // value - computed: false, optional: true, required: false
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

export class ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#mac ClusterAddNodeV2#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#name ClusterAddNodeV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#value ClusterAddNodeV2#value}
  */
  readonly value?: string;
}

export function clusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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

export class ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mac = value.mac;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
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

  // value - computed: false, optional: true, required: false
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

export class ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListNetworksUplinks {
  /**
  * active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#active ClusterAddNodeV2#active}
  */
  readonly active?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive[] | cdktf.IResolvable;
  /**
  * standby block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#standby ClusterAddNodeV2#standby}
  */
  readonly standby?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsNodeListNetworksUplinksToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveToTerraform, true)(struct!.active),
    standby: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyToTerraform, true)(struct!.standby),
  }
}


export function clusterAddNodeV2NodeParamsNodeListNetworksUplinksToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveToHclTerraform, true)(struct!.active),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveList",
    },
    standby: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyToHclTerraform, true)(struct!.standby),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsNodeListNetworksUplinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListNetworksUplinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._standby?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListNetworksUplinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active.internalValue = undefined;
      this._standby.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active.internalValue = value.active;
      this._standby.internalValue = value.standby;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active = new ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActiveList(this, "active", false);
  public get active() {
    return this._active;
  }
  public putActive(value: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksActive[] | cdktf.IResolvable) {
    this._active.internalValue = value;
  }
  public resetActive() {
    this._active.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandbyList(this, "standby", false);
  public get standby() {
    return this._standby;
  }
  public putStandby(value: ClusterAddNodeV2NodeParamsNodeListNetworksUplinksStandby[] | cdktf.IResolvable) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
  }
}

export class ClusterAddNodeV2NodeParamsNodeListNetworksUplinksList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListNetworksUplinks[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListNetworksUplinksOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListNetworksUplinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#name ClusterAddNodeV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#networks ClusterAddNodeV2#networks}
  */
  readonly networks?: string[];
  /**
  * uplinks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#uplinks ClusterAddNodeV2#uplinks}
  */
  readonly uplinks?: ClusterAddNodeV2NodeParamsNodeListNetworksUplinks[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsNodeListNetworksToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    uplinks: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListNetworksUplinksToTerraform, true)(struct!.uplinks),
  }
}


export function clusterAddNodeV2NodeParamsNodeListNetworksToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListNetworks | cdktf.IResolvable): any {
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
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uplinks: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListNetworksUplinksToHclTerraform, true)(struct!.uplinks),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListNetworksUplinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsNodeListNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._uplinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinks = this._uplinks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._networks = undefined;
      this._uplinks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._networks = value.networks;
      this._uplinks.internalValue = value.uplinks;
    }
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

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // uplinks - computed: false, optional: true, required: false
  private _uplinks = new ClusterAddNodeV2NodeParamsNodeListNetworksUplinksList(this, "uplinks", false);
  public get uplinks() {
    return this._uplinks;
  }
  public putUplinks(value: ClusterAddNodeV2NodeParamsNodeListNetworksUplinks[] | cdktf.IResolvable) {
    this._uplinks.internalValue = value;
  }
  public resetUplinks() {
    this._uplinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinksInput() {
    return this._uplinks.internalValue;
  }
}

export class ClusterAddNodeV2NodeParamsNodeListNetworksList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListNetworks[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListNetworksOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParamsNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#block_id ClusterAddNodeV2#block_id}
  */
  readonly blockId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#current_network_interface ClusterAddNodeV2#current_network_interface}
  */
  readonly currentNetworkInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_hostname ClusterAddNodeV2#hypervisor_hostname}
  */
  readonly hypervisorHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_type ClusterAddNodeV2#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_version ClusterAddNodeV2#hypervisor_version}
  */
  readonly hypervisorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#is_light_compute ClusterAddNodeV2#is_light_compute}
  */
  readonly isLightCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#is_robo_mixed_hypervisor ClusterAddNodeV2#is_robo_mixed_hypervisor}
  */
  readonly isRoboMixedHypervisor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#model ClusterAddNodeV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#node_position ClusterAddNodeV2#node_position}
  */
  readonly nodePosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#node_uuid ClusterAddNodeV2#node_uuid}
  */
  readonly nodeUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#nos_version ClusterAddNodeV2#nos_version}
  */
  readonly nosVersion?: string;
  /**
  * cvm_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#cvm_ip ClusterAddNodeV2#cvm_ip}
  */
  readonly cvmIp?: ClusterAddNodeV2NodeParamsNodeListCvmIp[] | cdktf.IResolvable;
  /**
  * digital_certificate_map_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#digital_certificate_map_list ClusterAddNodeV2#digital_certificate_map_list}
  */
  readonly digitalCertificateMapList?: ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable;
  /**
  * hypervisor_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_ip ClusterAddNodeV2#hypervisor_ip}
  */
  readonly hypervisorIp?: ClusterAddNodeV2NodeParamsNodeListHypervisorIp[] | cdktf.IResolvable;
  /**
  * ipmi_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#ipmi_ip ClusterAddNodeV2#ipmi_ip}
  */
  readonly ipmiIp?: ClusterAddNodeV2NodeParamsNodeListIpmiIp[] | cdktf.IResolvable;
  /**
  * networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#networks ClusterAddNodeV2#networks}
  */
  readonly networks?: ClusterAddNodeV2NodeParamsNodeListNetworks[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsNodeListStructToTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_id: cdktf.stringToTerraform(struct!.blockId),
    current_network_interface: cdktf.stringToTerraform(struct!.currentNetworkInterface),
    hypervisor_hostname: cdktf.stringToTerraform(struct!.hypervisorHostname),
    hypervisor_type: cdktf.stringToTerraform(struct!.hypervisorType),
    hypervisor_version: cdktf.stringToTerraform(struct!.hypervisorVersion),
    is_light_compute: cdktf.booleanToTerraform(struct!.isLightCompute),
    is_robo_mixed_hypervisor: cdktf.booleanToTerraform(struct!.isRoboMixedHypervisor),
    model: cdktf.stringToTerraform(struct!.model),
    node_position: cdktf.stringToTerraform(struct!.nodePosition),
    node_uuid: cdktf.stringToTerraform(struct!.nodeUuid),
    nos_version: cdktf.stringToTerraform(struct!.nosVersion),
    cvm_ip: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListCvmIpToTerraform, true)(struct!.cvmIp),
    digital_certificate_map_list: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructToTerraform, true)(struct!.digitalCertificateMapList),
    hypervisor_ip: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListHypervisorIpToTerraform, true)(struct!.hypervisorIp),
    ipmi_ip: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListIpmiIpToTerraform, true)(struct!.ipmiIp),
    networks: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListNetworksToTerraform, true)(struct!.networks),
  }
}


export function clusterAddNodeV2NodeParamsNodeListStructToHclTerraform(struct?: ClusterAddNodeV2NodeParamsNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_id: {
      value: cdktf.stringToHclTerraform(struct!.blockId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_network_interface: {
      value: cdktf.stringToHclTerraform(struct!.currentNetworkInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_hostname: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_type: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hypervisor_version: {
      value: cdktf.stringToHclTerraform(struct!.hypervisorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_light_compute: {
      value: cdktf.booleanToHclTerraform(struct!.isLightCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_robo_mixed_hypervisor: {
      value: cdktf.booleanToHclTerraform(struct!.isRoboMixedHypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_position: {
      value: cdktf.stringToHclTerraform(struct!.nodePosition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_uuid: {
      value: cdktf.stringToHclTerraform(struct!.nodeUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nos_version: {
      value: cdktf.stringToHclTerraform(struct!.nosVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_ip: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListCvmIpToHclTerraform, true)(struct!.cvmIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListCvmIpList",
    },
    digital_certificate_map_list: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructToHclTerraform, true)(struct!.digitalCertificateMapList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructList",
    },
    hypervisor_ip: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListHypervisorIpToHclTerraform, true)(struct!.hypervisorIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListHypervisorIpList",
    },
    ipmi_ip: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListIpmiIpToHclTerraform, true)(struct!.ipmiIp),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListIpmiIpList",
    },
    networks: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListNetworksToHclTerraform, true)(struct!.networks),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParamsNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockId !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockId = this._blockId;
    }
    if (this._currentNetworkInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentNetworkInterface = this._currentNetworkInterface;
    }
    if (this._hypervisorHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorHostname = this._hypervisorHostname;
    }
    if (this._hypervisorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorType = this._hypervisorType;
    }
    if (this._hypervisorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorVersion = this._hypervisorVersion;
    }
    if (this._isLightCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLightCompute = this._isLightCompute;
    }
    if (this._isRoboMixedHypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRoboMixedHypervisor = this._isRoboMixedHypervisor;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nodePosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePosition = this._nodePosition;
    }
    if (this._nodeUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUuid = this._nodeUuid;
    }
    if (this._nosVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosVersion = this._nosVersion;
    }
    if (this._cvmIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmIp = this._cvmIp?.internalValue;
    }
    if (this._digitalCertificateMapList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalCertificateMapList = this._digitalCertificateMapList?.internalValue;
    }
    if (this._hypervisorIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorIp = this._hypervisorIp?.internalValue;
    }
    if (this._ipmiIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmiIp = this._ipmiIp?.internalValue;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParamsNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockId = undefined;
      this._currentNetworkInterface = undefined;
      this._hypervisorHostname = undefined;
      this._hypervisorType = undefined;
      this._hypervisorVersion = undefined;
      this._isLightCompute = undefined;
      this._isRoboMixedHypervisor = undefined;
      this._model = undefined;
      this._nodePosition = undefined;
      this._nodeUuid = undefined;
      this._nosVersion = undefined;
      this._cvmIp.internalValue = undefined;
      this._digitalCertificateMapList.internalValue = undefined;
      this._hypervisorIp.internalValue = undefined;
      this._ipmiIp.internalValue = undefined;
      this._networks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockId = value.blockId;
      this._currentNetworkInterface = value.currentNetworkInterface;
      this._hypervisorHostname = value.hypervisorHostname;
      this._hypervisorType = value.hypervisorType;
      this._hypervisorVersion = value.hypervisorVersion;
      this._isLightCompute = value.isLightCompute;
      this._isRoboMixedHypervisor = value.isRoboMixedHypervisor;
      this._model = value.model;
      this._nodePosition = value.nodePosition;
      this._nodeUuid = value.nodeUuid;
      this._nosVersion = value.nosVersion;
      this._cvmIp.internalValue = value.cvmIp;
      this._digitalCertificateMapList.internalValue = value.digitalCertificateMapList;
      this._hypervisorIp.internalValue = value.hypervisorIp;
      this._ipmiIp.internalValue = value.ipmiIp;
      this._networks.internalValue = value.networks;
    }
  }

  // block_id - computed: true, optional: true, required: false
  private _blockId?: string; 
  public get blockId() {
    return this.getStringAttribute('block_id');
  }
  public set blockId(value: string) {
    this._blockId = value;
  }
  public resetBlockId() {
    this._blockId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdInput() {
    return this._blockId;
  }

  // current_network_interface - computed: true, optional: true, required: false
  private _currentNetworkInterface?: string; 
  public get currentNetworkInterface() {
    return this.getStringAttribute('current_network_interface');
  }
  public set currentNetworkInterface(value: string) {
    this._currentNetworkInterface = value;
  }
  public resetCurrentNetworkInterface() {
    this._currentNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentNetworkInterfaceInput() {
    return this._currentNetworkInterface;
  }

  // hypervisor_hostname - computed: true, optional: true, required: false
  private _hypervisorHostname?: string; 
  public get hypervisorHostname() {
    return this.getStringAttribute('hypervisor_hostname');
  }
  public set hypervisorHostname(value: string) {
    this._hypervisorHostname = value;
  }
  public resetHypervisorHostname() {
    this._hypervisorHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorHostnameInput() {
    return this._hypervisorHostname;
  }

  // hypervisor_type - computed: true, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // hypervisor_version - computed: true, optional: true, required: false
  private _hypervisorVersion?: string; 
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }
  public set hypervisorVersion(value: string) {
    this._hypervisorVersion = value;
  }
  public resetHypervisorVersion() {
    this._hypervisorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorVersionInput() {
    return this._hypervisorVersion;
  }

  // is_light_compute - computed: true, optional: true, required: false
  private _isLightCompute?: boolean | cdktf.IResolvable; 
  public get isLightCompute() {
    return this.getBooleanAttribute('is_light_compute');
  }
  public set isLightCompute(value: boolean | cdktf.IResolvable) {
    this._isLightCompute = value;
  }
  public resetIsLightCompute() {
    this._isLightCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLightComputeInput() {
    return this._isLightCompute;
  }

  // is_robo_mixed_hypervisor - computed: true, optional: true, required: false
  private _isRoboMixedHypervisor?: boolean | cdktf.IResolvable; 
  public get isRoboMixedHypervisor() {
    return this.getBooleanAttribute('is_robo_mixed_hypervisor');
  }
  public set isRoboMixedHypervisor(value: boolean | cdktf.IResolvable) {
    this._isRoboMixedHypervisor = value;
  }
  public resetIsRoboMixedHypervisor() {
    this._isRoboMixedHypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRoboMixedHypervisorInput() {
    return this._isRoboMixedHypervisor;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // node_position - computed: true, optional: true, required: false
  private _nodePosition?: string; 
  public get nodePosition() {
    return this.getStringAttribute('node_position');
  }
  public set nodePosition(value: string) {
    this._nodePosition = value;
  }
  public resetNodePosition() {
    this._nodePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePositionInput() {
    return this._nodePosition;
  }

  // node_uuid - computed: true, optional: true, required: false
  private _nodeUuid?: string; 
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }
  public set nodeUuid(value: string) {
    this._nodeUuid = value;
  }
  public resetNodeUuid() {
    this._nodeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUuidInput() {
    return this._nodeUuid;
  }

  // nos_version - computed: true, optional: true, required: false
  private _nosVersion?: string; 
  public get nosVersion() {
    return this.getStringAttribute('nos_version');
  }
  public set nosVersion(value: string) {
    this._nosVersion = value;
  }
  public resetNosVersion() {
    this._nosVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosVersionInput() {
    return this._nosVersion;
  }

  // cvm_ip - computed: false, optional: true, required: false
  private _cvmIp = new ClusterAddNodeV2NodeParamsNodeListCvmIpList(this, "cvm_ip", false);
  public get cvmIp() {
    return this._cvmIp;
  }
  public putCvmIp(value: ClusterAddNodeV2NodeParamsNodeListCvmIp[] | cdktf.IResolvable) {
    this._cvmIp.internalValue = value;
  }
  public resetCvmIp() {
    this._cvmIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmIpInput() {
    return this._cvmIp.internalValue;
  }

  // digital_certificate_map_list - computed: false, optional: true, required: false
  private _digitalCertificateMapList = new ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStructList(this, "digital_certificate_map_list", false);
  public get digitalCertificateMapList() {
    return this._digitalCertificateMapList;
  }
  public putDigitalCertificateMapList(value: ClusterAddNodeV2NodeParamsNodeListDigitalCertificateMapListStruct[] | cdktf.IResolvable) {
    this._digitalCertificateMapList.internalValue = value;
  }
  public resetDigitalCertificateMapList() {
    this._digitalCertificateMapList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalCertificateMapListInput() {
    return this._digitalCertificateMapList.internalValue;
  }

  // hypervisor_ip - computed: false, optional: true, required: false
  private _hypervisorIp = new ClusterAddNodeV2NodeParamsNodeListHypervisorIpList(this, "hypervisor_ip", false);
  public get hypervisorIp() {
    return this._hypervisorIp;
  }
  public putHypervisorIp(value: ClusterAddNodeV2NodeParamsNodeListHypervisorIp[] | cdktf.IResolvable) {
    this._hypervisorIp.internalValue = value;
  }
  public resetHypervisorIp() {
    this._hypervisorIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIpInput() {
    return this._hypervisorIp.internalValue;
  }

  // ipmi_ip - computed: false, optional: true, required: false
  private _ipmiIp = new ClusterAddNodeV2NodeParamsNodeListIpmiIpList(this, "ipmi_ip", false);
  public get ipmiIp() {
    return this._ipmiIp;
  }
  public putIpmiIp(value: ClusterAddNodeV2NodeParamsNodeListIpmiIp[] | cdktf.IResolvable) {
    this._ipmiIp.internalValue = value;
  }
  public resetIpmiIp() {
    this._ipmiIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new ClusterAddNodeV2NodeParamsNodeListNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: ClusterAddNodeV2NodeParamsNodeListNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }
}

export class ClusterAddNodeV2NodeParamsNodeListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParamsNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsNodeListStructOutputReference {
    return new ClusterAddNodeV2NodeParamsNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2NodeParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hyperv_sku ClusterAddNodeV2#hyperv_sku}
  */
  readonly hypervSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_host_networking ClusterAddNodeV2#should_skip_host_networking}
  */
  readonly shouldSkipHostNetworking?: boolean | cdktf.IResolvable;
  /**
  * block_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#block_list ClusterAddNodeV2#block_list}
  */
  readonly blockList?: ClusterAddNodeV2NodeParamsBlockListStruct[] | cdktf.IResolvable;
  /**
  * bundle_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#bundle_info ClusterAddNodeV2#bundle_info}
  */
  readonly bundleInfo?: ClusterAddNodeV2NodeParamsBundleInfo[] | cdktf.IResolvable;
  /**
  * compute_node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#compute_node_list ClusterAddNodeV2#compute_node_list}
  */
  readonly computeNodeList?: ClusterAddNodeV2NodeParamsComputeNodeListStruct[] | cdktf.IResolvable;
  /**
  * hypervisor_isos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#hypervisor_isos ClusterAddNodeV2#hypervisor_isos}
  */
  readonly hypervisorIsos?: ClusterAddNodeV2NodeParamsHypervisorIsos[] | cdktf.IResolvable;
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#node_list ClusterAddNodeV2#node_list}
  */
  readonly nodeList: ClusterAddNodeV2NodeParamsNodeListStruct[] | cdktf.IResolvable;
}

export function clusterAddNodeV2NodeParamsToTerraform(struct?: ClusterAddNodeV2NodeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperv_sku: cdktf.stringToTerraform(struct!.hypervSku),
    should_skip_host_networking: cdktf.booleanToTerraform(struct!.shouldSkipHostNetworking),
    block_list: cdktf.listMapper(clusterAddNodeV2NodeParamsBlockListStructToTerraform, true)(struct!.blockList),
    bundle_info: cdktf.listMapper(clusterAddNodeV2NodeParamsBundleInfoToTerraform, true)(struct!.bundleInfo),
    compute_node_list: cdktf.listMapper(clusterAddNodeV2NodeParamsComputeNodeListStructToTerraform, true)(struct!.computeNodeList),
    hypervisor_isos: cdktf.listMapper(clusterAddNodeV2NodeParamsHypervisorIsosToTerraform, true)(struct!.hypervisorIsos),
    node_list: cdktf.listMapper(clusterAddNodeV2NodeParamsNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function clusterAddNodeV2NodeParamsToHclTerraform(struct?: ClusterAddNodeV2NodeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperv_sku: {
      value: cdktf.stringToHclTerraform(struct!.hypervSku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_skip_host_networking: {
      value: cdktf.booleanToHclTerraform(struct!.shouldSkipHostNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_list: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsBlockListStructToHclTerraform, true)(struct!.blockList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsBlockListStructList",
    },
    bundle_info: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsBundleInfoToHclTerraform, true)(struct!.bundleInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsBundleInfoList",
    },
    compute_node_list: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsComputeNodeListStructToHclTerraform, true)(struct!.computeNodeList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsComputeNodeListStructList",
    },
    hypervisor_isos: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsHypervisorIsosToHclTerraform, true)(struct!.hypervisorIsos),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsHypervisorIsosList",
    },
    node_list: {
      value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2NodeParamsNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2NodeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2NodeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hypervSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervSku = this._hypervSku;
    }
    if (this._shouldSkipHostNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldSkipHostNetworking = this._shouldSkipHostNetworking;
    }
    if (this._blockList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockList = this._blockList?.internalValue;
    }
    if (this._bundleInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleInfo = this._bundleInfo?.internalValue;
    }
    if (this._computeNodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeNodeList = this._computeNodeList?.internalValue;
    }
    if (this._hypervisorIsos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorIsos = this._hypervisorIsos?.internalValue;
    }
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterAddNodeV2NodeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hypervSku = undefined;
      this._shouldSkipHostNetworking = undefined;
      this._blockList.internalValue = undefined;
      this._bundleInfo.internalValue = undefined;
      this._computeNodeList.internalValue = undefined;
      this._hypervisorIsos.internalValue = undefined;
      this._nodeList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hypervSku = value.hypervSku;
      this._shouldSkipHostNetworking = value.shouldSkipHostNetworking;
      this._blockList.internalValue = value.blockList;
      this._bundleInfo.internalValue = value.bundleInfo;
      this._computeNodeList.internalValue = value.computeNodeList;
      this._hypervisorIsos.internalValue = value.hypervisorIsos;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // hyperv_sku - computed: true, optional: true, required: false
  private _hypervSku?: string; 
  public get hypervSku() {
    return this.getStringAttribute('hyperv_sku');
  }
  public set hypervSku(value: string) {
    this._hypervSku = value;
  }
  public resetHypervSku() {
    this._hypervSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervSkuInput() {
    return this._hypervSku;
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

  // block_list - computed: false, optional: true, required: false
  private _blockList = new ClusterAddNodeV2NodeParamsBlockListStructList(this, "block_list", false);
  public get blockList() {
    return this._blockList;
  }
  public putBlockList(value: ClusterAddNodeV2NodeParamsBlockListStruct[] | cdktf.IResolvable) {
    this._blockList.internalValue = value;
  }
  public resetBlockList() {
    this._blockList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockListInput() {
    return this._blockList.internalValue;
  }

  // bundle_info - computed: false, optional: true, required: false
  private _bundleInfo = new ClusterAddNodeV2NodeParamsBundleInfoList(this, "bundle_info", false);
  public get bundleInfo() {
    return this._bundleInfo;
  }
  public putBundleInfo(value: ClusterAddNodeV2NodeParamsBundleInfo[] | cdktf.IResolvable) {
    this._bundleInfo.internalValue = value;
  }
  public resetBundleInfo() {
    this._bundleInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInfoInput() {
    return this._bundleInfo.internalValue;
  }

  // compute_node_list - computed: false, optional: true, required: false
  private _computeNodeList = new ClusterAddNodeV2NodeParamsComputeNodeListStructList(this, "compute_node_list", false);
  public get computeNodeList() {
    return this._computeNodeList;
  }
  public putComputeNodeList(value: ClusterAddNodeV2NodeParamsComputeNodeListStruct[] | cdktf.IResolvable) {
    this._computeNodeList.internalValue = value;
  }
  public resetComputeNodeList() {
    this._computeNodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNodeListInput() {
    return this._computeNodeList.internalValue;
  }

  // hypervisor_isos - computed: false, optional: true, required: false
  private _hypervisorIsos = new ClusterAddNodeV2NodeParamsHypervisorIsosList(this, "hypervisor_isos", false);
  public get hypervisorIsos() {
    return this._hypervisorIsos;
  }
  public putHypervisorIsos(value: ClusterAddNodeV2NodeParamsHypervisorIsos[] | cdktf.IResolvable) {
    this._hypervisorIsos.internalValue = value;
  }
  public resetHypervisorIsos() {
    this._hypervisorIsos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorIsosInput() {
    return this._hypervisorIsos.internalValue;
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList = new ClusterAddNodeV2NodeParamsNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: ClusterAddNodeV2NodeParamsNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}

export class ClusterAddNodeV2NodeParamsList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2NodeParams[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2NodeParamsOutputReference {
    return new ClusterAddNodeV2NodeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2RemoveNodeParamsExtraParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_add_check ClusterAddNodeV2#should_skip_add_check}
  */
  readonly shouldSkipAddCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_upgrade_check ClusterAddNodeV2#should_skip_upgrade_check}
  */
  readonly shouldSkipUpgradeCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#skip_space_check ClusterAddNodeV2#skip_space_check}
  */
  readonly skipSpaceCheck?: boolean | cdktf.IResolvable;
}

export function clusterAddNodeV2RemoveNodeParamsExtraParamsToTerraform(struct?: ClusterAddNodeV2RemoveNodeParamsExtraParams | cdktf.IResolvable): any {
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


export function clusterAddNodeV2RemoveNodeParamsExtraParamsToHclTerraform(struct?: ClusterAddNodeV2RemoveNodeParamsExtraParams | cdktf.IResolvable): any {
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

export class ClusterAddNodeV2RemoveNodeParamsExtraParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2RemoveNodeParamsExtraParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2RemoveNodeParamsExtraParams | cdktf.IResolvable | undefined) {
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

export class ClusterAddNodeV2RemoveNodeParamsExtraParamsList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2RemoveNodeParamsExtraParams[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2RemoveNodeParamsExtraParamsOutputReference {
    return new ClusterAddNodeV2RemoveNodeParamsExtraParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterAddNodeV2RemoveNodeParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_prechecks ClusterAddNodeV2#should_skip_prechecks}
  */
  readonly shouldSkipPrechecks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#should_skip_remove ClusterAddNodeV2#should_skip_remove}
  */
  readonly shouldSkipRemove?: boolean | cdktf.IResolvable;
  /**
  * extra_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#extra_params ClusterAddNodeV2#extra_params}
  */
  readonly extraParams?: ClusterAddNodeV2RemoveNodeParamsExtraParams[] | cdktf.IResolvable;
}

export function clusterAddNodeV2RemoveNodeParamsToTerraform(struct?: ClusterAddNodeV2RemoveNodeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_skip_prechecks: cdktf.booleanToTerraform(struct!.shouldSkipPrechecks),
    should_skip_remove: cdktf.booleanToTerraform(struct!.shouldSkipRemove),
    extra_params: cdktf.listMapper(clusterAddNodeV2RemoveNodeParamsExtraParamsToTerraform, true)(struct!.extraParams),
  }
}


export function clusterAddNodeV2RemoveNodeParamsToHclTerraform(struct?: ClusterAddNodeV2RemoveNodeParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(clusterAddNodeV2RemoveNodeParamsExtraParamsToHclTerraform, true)(struct!.extraParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterAddNodeV2RemoveNodeParamsExtraParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterAddNodeV2RemoveNodeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterAddNodeV2RemoveNodeParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterAddNodeV2RemoveNodeParams | cdktf.IResolvable | undefined) {
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
  private _extraParams = new ClusterAddNodeV2RemoveNodeParamsExtraParamsList(this, "extra_params", false);
  public get extraParams() {
    return this._extraParams;
  }
  public putExtraParams(value: ClusterAddNodeV2RemoveNodeParamsExtraParams[] | cdktf.IResolvable) {
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

export class ClusterAddNodeV2RemoveNodeParamsList extends cdktf.ComplexList {
  public internalValue? : ClusterAddNodeV2RemoveNodeParams[] | cdktf.IResolvable

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
  public get(index: number): ClusterAddNodeV2RemoveNodeParamsOutputReference {
    return new ClusterAddNodeV2RemoveNodeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2 nutanix_cluster_add_node_v2}
*/
export class ClusterAddNodeV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_cluster_add_node_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterAddNodeV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterAddNodeV2 to import
  * @param importFromId The id of the existing ClusterAddNodeV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterAddNodeV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_cluster_add_node_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/cluster_add_node_v2 nutanix_cluster_add_node_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterAddNodeV2Config
  */
  public constructor(scope: Construct, id: string, config: ClusterAddNodeV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_cluster_add_node_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterExtId = config.clusterExtId;
    this._id = config.id;
    this._shouldSkipAddNode = config.shouldSkipAddNode;
    this._shouldSkipPreExpandChecks = config.shouldSkipPreExpandChecks;
    this._configParams.internalValue = config.configParams;
    this._nodeParams.internalValue = config.nodeParams;
    this._removeNodeParams.internalValue = config.removeNodeParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ext_id - computed: false, optional: false, required: true
  private _clusterExtId?: string; 
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }
  public set clusterExtId(value: string) {
    this._clusterExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdInput() {
    return this._clusterExtId;
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

  // config_params - computed: false, optional: true, required: false
  private _configParams = new ClusterAddNodeV2ConfigParamsList(this, "config_params", false);
  public get configParams() {
    return this._configParams;
  }
  public putConfigParams(value: ClusterAddNodeV2ConfigParams[] | cdktf.IResolvable) {
    this._configParams.internalValue = value;
  }
  public resetConfigParams() {
    this._configParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamsInput() {
    return this._configParams.internalValue;
  }

  // node_params - computed: false, optional: false, required: true
  private _nodeParams = new ClusterAddNodeV2NodeParamsList(this, "node_params", false);
  public get nodeParams() {
    return this._nodeParams;
  }
  public putNodeParams(value: ClusterAddNodeV2NodeParams[] | cdktf.IResolvable) {
    this._nodeParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeParamsInput() {
    return this._nodeParams.internalValue;
  }

  // remove_node_params - computed: false, optional: true, required: false
  private _removeNodeParams = new ClusterAddNodeV2RemoveNodeParamsList(this, "remove_node_params", false);
  public get removeNodeParams() {
    return this._removeNodeParams;
  }
  public putRemoveNodeParams(value: ClusterAddNodeV2RemoveNodeParams[] | cdktf.IResolvable) {
    this._removeNodeParams.internalValue = value;
  }
  public resetRemoveNodeParams() {
    this._removeNodeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNodeParamsInput() {
    return this._removeNodeParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ext_id: cdktf.stringToTerraform(this._clusterExtId),
      id: cdktf.stringToTerraform(this._id),
      should_skip_add_node: cdktf.booleanToTerraform(this._shouldSkipAddNode),
      should_skip_pre_expand_checks: cdktf.booleanToTerraform(this._shouldSkipPreExpandChecks),
      config_params: cdktf.listMapper(clusterAddNodeV2ConfigParamsToTerraform, true)(this._configParams.internalValue),
      node_params: cdktf.listMapper(clusterAddNodeV2NodeParamsToTerraform, true)(this._nodeParams.internalValue),
      remove_node_params: cdktf.listMapper(clusterAddNodeV2RemoveNodeParamsToTerraform, true)(this._removeNodeParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ext_id: {
        value: cdktf.stringToHclTerraform(this._clusterExtId),
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
      should_skip_add_node: {
        value: cdktf.booleanToHclTerraform(this._shouldSkipAddNode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      should_skip_pre_expand_checks: {
        value: cdktf.booleanToHclTerraform(this._shouldSkipPreExpandChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config_params: {
        value: cdktf.listMapperHcl(clusterAddNodeV2ConfigParamsToHclTerraform, true)(this._configParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAddNodeV2ConfigParamsList",
      },
      node_params: {
        value: cdktf.listMapperHcl(clusterAddNodeV2NodeParamsToHclTerraform, true)(this._nodeParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAddNodeV2NodeParamsList",
      },
      remove_node_params: {
        value: cdktf.listMapperHcl(clusterAddNodeV2RemoveNodeParamsToHclTerraform, true)(this._removeNodeParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterAddNodeV2RemoveNodeParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
