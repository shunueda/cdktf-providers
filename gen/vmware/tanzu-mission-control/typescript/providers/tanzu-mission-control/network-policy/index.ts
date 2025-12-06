// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the network policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#meta NetworkPolicy#meta}
  */
  readonly meta?: NetworkPolicyMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#scope NetworkPolicy#scope}
  */
  readonly scope: NetworkPolicyScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#spec NetworkPolicy#spec}
  */
  readonly spec: NetworkPolicySpec;
}
export interface NetworkPolicyMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#annotations NetworkPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#labels NetworkPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function networkPolicyMetaToTerraform(struct?: NetworkPolicyMetaOutputReference | NetworkPolicyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function networkPolicyMetaToHclTerraform(struct?: NetworkPolicyMetaOutputReference | NetworkPolicyMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface NetworkPolicyScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#management_cluster_name NetworkPolicy#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#provisioner_name NetworkPolicy#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function networkPolicyScopeClusterToTerraform(struct?: NetworkPolicyScopeClusterOutputReference | NetworkPolicyScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_cluster_name: cdktf.stringToTerraform(struct!.managementClusterName),
    name: cdktf.stringToTerraform(struct!.name),
    provisioner_name: cdktf.stringToTerraform(struct!.provisionerName),
  }
}


export function networkPolicyScopeClusterToHclTerraform(struct?: NetworkPolicyScopeClusterOutputReference | NetworkPolicyScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.managementClusterName),
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
    provisioner_name: {
      value: cdktf.stringToHclTerraform(struct!.provisionerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyScopeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementClusterName = this._managementClusterName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisionerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerName = this._provisionerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyScopeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementClusterName = undefined;
      this._name = undefined;
      this._provisionerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementClusterName = value.managementClusterName;
      this._name = value.name;
      this._provisionerName = value.provisionerName;
    }
  }

  // management_cluster_name - computed: false, optional: true, required: false
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  public resetManagementClusterName() {
    this._managementClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
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

  // provisioner_name - computed: false, optional: true, required: false
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  public resetProvisionerName() {
    this._provisionerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }
}
export interface NetworkPolicyScopeClusterGroup {
  /**
  * Name of this cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#cluster_group NetworkPolicy#cluster_group}
  */
  readonly clusterGroup: string;
}

export function networkPolicyScopeClusterGroupToTerraform(struct?: NetworkPolicyScopeClusterGroupOutputReference | NetworkPolicyScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
  }
}


export function networkPolicyScopeClusterGroupToHclTerraform(struct?: NetworkPolicyScopeClusterGroupOutputReference | NetworkPolicyScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_group: {
      value: cdktf.stringToHclTerraform(struct!.clusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyScopeClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterGroup = value.clusterGroup;
    }
  }

  // cluster_group - computed: false, optional: false, required: true
  private _clusterGroup?: string; 
  public get clusterGroup() {
    return this.getStringAttribute('cluster_group');
  }
  public set clusterGroup(value: string) {
    this._clusterGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }
}
export interface NetworkPolicyScopeOrganization {
  /**
  * ID of this organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#organization NetworkPolicy#organization}
  */
  readonly organization: string;
}

export function networkPolicyScopeOrganizationToTerraform(struct?: NetworkPolicyScopeOrganizationOutputReference | NetworkPolicyScopeOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
  }
}


export function networkPolicyScopeOrganizationToHclTerraform(struct?: NetworkPolicyScopeOrganizationOutputReference | NetworkPolicyScopeOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyScopeOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyScopeOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyScopeOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._organization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._organization = value.organization;
    }
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }
}
export interface NetworkPolicyScopeWorkspace {
  /**
  * Name of this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#workspace NetworkPolicy#workspace}
  */
  readonly workspace: string;
}

export function networkPolicyScopeWorkspaceToTerraform(struct?: NetworkPolicyScopeWorkspaceOutputReference | NetworkPolicyScopeWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function networkPolicyScopeWorkspaceToHclTerraform(struct?: NetworkPolicyScopeWorkspaceOutputReference | NetworkPolicyScopeWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyScopeWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyScopeWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyScopeWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workspace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workspace = value.workspace;
    }
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}
export interface NetworkPolicyScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#cluster NetworkPolicy#cluster}
  */
  readonly cluster?: NetworkPolicyScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#cluster_group NetworkPolicy#cluster_group}
  */
  readonly clusterGroup?: NetworkPolicyScopeClusterGroup;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#organization NetworkPolicy#organization}
  */
  readonly organization?: NetworkPolicyScopeOrganization;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#workspace NetworkPolicy#workspace}
  */
  readonly workspace?: NetworkPolicyScopeWorkspace;
}

export function networkPolicyScopeToTerraform(struct?: NetworkPolicyScopeOutputReference | NetworkPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: networkPolicyScopeClusterToTerraform(struct!.cluster),
    cluster_group: networkPolicyScopeClusterGroupToTerraform(struct!.clusterGroup),
    organization: networkPolicyScopeOrganizationToTerraform(struct!.organization),
    workspace: networkPolicyScopeWorkspaceToTerraform(struct!.workspace),
  }
}


export function networkPolicyScopeToHclTerraform(struct?: NetworkPolicyScopeOutputReference | NetworkPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: networkPolicyScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyScopeClusterList",
    },
    cluster_group: {
      value: networkPolicyScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyScopeClusterGroupList",
    },
    organization: {
      value: networkPolicyScopeOrganizationToHclTerraform(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyScopeOrganizationList",
    },
    workspace: {
      value: networkPolicyScopeWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyScopeWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._clusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup?.internalValue;
    }
    if (this._organization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
      this._clusterGroup.internalValue = undefined;
      this._organization.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
      this._clusterGroup.internalValue = value.clusterGroup;
      this._organization.internalValue = value.organization;
      this._workspace.internalValue = value.workspace;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new NetworkPolicyScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: NetworkPolicyScopeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup = new NetworkPolicyScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: NetworkPolicyScopeClusterGroup) {
    this._clusterGroup.internalValue = value;
  }
  public resetClusterGroup() {
    this._clusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new NetworkPolicyScopeOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: NetworkPolicyScopeOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new NetworkPolicyScopeWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: NetworkPolicyScopeWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}
export interface NetworkPolicySpecInputAllowAll {
  /**
  * Allow traffic only from own namespace. Allow traffic only from pods in the same namespace as the destination pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#from_own_namespace NetworkPolicy#from_own_namespace}
  */
  readonly fromOwnNamespace?: boolean | cdktf.IResolvable;
}

export function networkPolicySpecInputAllowAllToTerraform(struct?: NetworkPolicySpecInputAllowAllOutputReference | NetworkPolicySpecInputAllowAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_own_namespace: cdktf.booleanToTerraform(struct!.fromOwnNamespace),
  }
}


export function networkPolicySpecInputAllowAllToHclTerraform(struct?: NetworkPolicySpecInputAllowAllOutputReference | NetworkPolicySpecInputAllowAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_own_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.fromOwnNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputAllowAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputAllowAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromOwnNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromOwnNamespace = this._fromOwnNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputAllowAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromOwnNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromOwnNamespace = value.fromOwnNamespace;
    }
  }

  // from_own_namespace - computed: false, optional: true, required: false
  private _fromOwnNamespace?: boolean | cdktf.IResolvable; 
  public get fromOwnNamespace() {
    return this.getBooleanAttribute('from_own_namespace');
  }
  public set fromOwnNamespace(value: boolean | cdktf.IResolvable) {
    this._fromOwnNamespace = value;
  }
  public resetFromOwnNamespace() {
    this._fromOwnNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromOwnNamespaceInput() {
    return this._fromOwnNamespace;
  }
}
export interface NetworkPolicySpecInputAllowAllEgress {
}

export function networkPolicySpecInputAllowAllEgressToTerraform(struct?: NetworkPolicySpecInputAllowAllEgressOutputReference | NetworkPolicySpecInputAllowAllEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicySpecInputAllowAllEgressToHclTerraform(struct?: NetworkPolicySpecInputAllowAllEgressOutputReference | NetworkPolicySpecInputAllowAllEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicySpecInputAllowAllEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputAllowAllEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputAllowAllEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NetworkPolicySpecInputAllowAllToPods {
  /**
  * Allow traffic only from own namespace. Allow traffic only from pods in the same namespace as the destination pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#from_own_namespace NetworkPolicy#from_own_namespace}
  */
  readonly fromOwnNamespace?: boolean | cdktf.IResolvable;
  /**
  * Pod Labels on which traffic should be allowed/denied. Use a label selector to identify the pods to which the policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#to_pod_labels NetworkPolicy#to_pod_labels}
  */
  readonly toPodLabels?: { [key: string]: string };
}

export function networkPolicySpecInputAllowAllToPodsToTerraform(struct?: NetworkPolicySpecInputAllowAllToPodsOutputReference | NetworkPolicySpecInputAllowAllToPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_own_namespace: cdktf.booleanToTerraform(struct!.fromOwnNamespace),
    to_pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toPodLabels),
  }
}


export function networkPolicySpecInputAllowAllToPodsToHclTerraform(struct?: NetworkPolicySpecInputAllowAllToPodsOutputReference | NetworkPolicySpecInputAllowAllToPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_own_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.fromOwnNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to_pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toPodLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputAllowAllToPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputAllowAllToPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromOwnNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromOwnNamespace = this._fromOwnNamespace;
    }
    if (this._toPodLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPodLabels = this._toPodLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputAllowAllToPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromOwnNamespace = undefined;
      this._toPodLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromOwnNamespace = value.fromOwnNamespace;
      this._toPodLabels = value.toPodLabels;
    }
  }

  // from_own_namespace - computed: false, optional: true, required: false
  private _fromOwnNamespace?: boolean | cdktf.IResolvable; 
  public get fromOwnNamespace() {
    return this.getBooleanAttribute('from_own_namespace');
  }
  public set fromOwnNamespace(value: boolean | cdktf.IResolvable) {
    this._fromOwnNamespace = value;
  }
  public resetFromOwnNamespace() {
    this._fromOwnNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromOwnNamespaceInput() {
    return this._fromOwnNamespace;
  }

  // to_pod_labels - computed: false, optional: true, required: false
  private _toPodLabels?: { [key: string]: string }; 
  public get toPodLabels() {
    return this.getStringMapAttribute('to_pod_labels');
  }
  public set toPodLabels(value: { [key: string]: string }) {
    this._toPodLabels = value;
  }
  public resetToPodLabels() {
    this._toPodLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPodLabelsInput() {
    return this._toPodLabels;
  }
}
export interface NetworkPolicySpecInputCustomEgressRulesPorts {
  /**
  * The port on the given protocol. This can either be a numerical or named port on a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#port NetworkPolicy#port}
  */
  readonly port?: string;
  /**
  * The protocol (TCP or UDP) which traffic must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicySpecInputCustomEgressRulesPortsToTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicySpecInputCustomEgressRulesPortsToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomEgressRulesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgressRulesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
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
}

export class NetworkPolicySpecInputCustomEgressRulesPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomEgressRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomEgressRulesPortsOutputReference {
    return new NetworkPolicySpecInputCustomEgressRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock {
  /**
  * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#cidr NetworkPolicy#cidr}
  */
  readonly cidr: string;
  /**
  * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#except NetworkPolicy#except}
  */
  readonly except?: string[];
}

export function networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockToTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockOutputReference {
    return new NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp {
  /**
  * ip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpToTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockToTerraform, true)(struct!.ipBlock),
  }
}


export function networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockToHclTerraform, true)(struct!.ipBlock),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlockList(this, "ip_block", false);
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpIpBlock[] | cdktf.IResolvable) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpOutputReference {
    return new NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector {
  /**
  * Use a label selector to identify the namespaces to allow as egress destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: { [key: string]: string };
  /**
  * Use a label selector to identify the pods to allow as egress destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: { [key: string]: string };
}

export function networkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorToTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namespaceSelector),
    pod_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podSelector),
  }
}


export function networkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namespaceSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._podSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector = undefined;
      this._podSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector = value.namespaceSelector;
      this._podSelector = value.podSelector;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: { [key: string]: string }; 
  public get namespaceSelector() {
    return this.getStringMapAttribute('namespace_selector');
  }
  public set namespaceSelector(value: { [key: string]: string }) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector?: { [key: string]: string }; 
  public get podSelector() {
    return this.getStringMapAttribute('pod_selector');
  }
  public set podSelector(value: { [key: string]: string }) {
    this._podSelector = value;
  }
  public resetPodSelector() {
    this._podSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector;
  }
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorOutputReference {
    return new NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomEgressRulesRuleSpec {
  /**
  * custom_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#custom_ip NetworkPolicy#custom_ip}
  */
  readonly customIp?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp[] | cdktf.IResolvable;
  /**
  * custom_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#custom_selector NetworkPolicy#custom_selector}
  */
  readonly customSelector?: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomEgressRulesRuleSpecToTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ip: cdktf.listMapper(networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpToTerraform, true)(struct!.customIp),
    custom_selector: cdktf.listMapper(networkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorToTerraform, true)(struct!.customSelector),
  }
}


export function networkPolicySpecInputCustomEgressRulesRuleSpecToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressRulesRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ip: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomEgressRulesRuleSpecCustomIpToHclTerraform, true)(struct!.customIp),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpList",
    },
    custom_selector: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorToHclTerraform, true)(struct!.customSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomEgressRulesRuleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIp = this._customIp?.internalValue;
    }
    if (this._customSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSelector = this._customSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgressRulesRuleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customIp.internalValue = undefined;
      this._customSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customIp.internalValue = value.customIp;
      this._customSelector.internalValue = value.customSelector;
    }
  }

  // custom_ip - computed: false, optional: true, required: false
  private _customIp = new NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIpList(this, "custom_ip", false);
  public get customIp() {
    return this._customIp;
  }
  public putCustomIp(value: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomIp[] | cdktf.IResolvable) {
    this._customIp.internalValue = value;
  }
  public resetCustomIp() {
    this._customIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpInput() {
    return this._customIp.internalValue;
  }

  // custom_selector - computed: false, optional: true, required: false
  private _customSelector = new NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelectorList(this, "custom_selector", false);
  public get customSelector() {
    return this._customSelector;
  }
  public putCustomSelector(value: NetworkPolicySpecInputCustomEgressRulesRuleSpecCustomSelector[] | cdktf.IResolvable) {
    this._customSelector.internalValue = value;
  }
  public resetCustomSelector() {
    this._customSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSelectorInput() {
    return this._customSelector.internalValue;
  }
}

export class NetworkPolicySpecInputCustomEgressRulesRuleSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomEgressRulesRuleSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomEgressRulesRuleSpecOutputReference {
    return new NetworkPolicySpecInputCustomEgressRulesRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomEgressRules {
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#ports NetworkPolicy#ports}
  */
  readonly ports: NetworkPolicySpecInputCustomEgressRulesPorts[] | cdktf.IResolvable;
  /**
  * rule_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#rule_spec NetworkPolicy#rule_spec}
  */
  readonly ruleSpec: NetworkPolicySpecInputCustomEgressRulesRuleSpec[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomEgressRulesToTerraform(struct?: NetworkPolicySpecInputCustomEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(networkPolicySpecInputCustomEgressRulesPortsToTerraform, true)(struct!.ports),
    rule_spec: cdktf.listMapper(networkPolicySpecInputCustomEgressRulesRuleSpecToTerraform, true)(struct!.ruleSpec),
  }
}


export function networkPolicySpecInputCustomEgressRulesToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomEgressRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressRulesPortsList",
    },
    rule_spec: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomEgressRulesRuleSpecToHclTerraform, true)(struct!.ruleSpec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressRulesRuleSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomEgressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._ruleSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSpec = this._ruleSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
      this._ruleSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
      this._ruleSpec.internalValue = value.ruleSpec;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new NetworkPolicySpecInputCustomEgressRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkPolicySpecInputCustomEgressRulesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // rule_spec - computed: false, optional: false, required: true
  private _ruleSpec = new NetworkPolicySpecInputCustomEgressRulesRuleSpecList(this, "rule_spec", false);
  public get ruleSpec() {
    return this._ruleSpec;
  }
  public putRuleSpec(value: NetworkPolicySpecInputCustomEgressRulesRuleSpec[] | cdktf.IResolvable) {
    this._ruleSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSpecInput() {
    return this._ruleSpec.internalValue;
  }
}

export class NetworkPolicySpecInputCustomEgressRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomEgressRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomEgressRulesOutputReference {
    return new NetworkPolicySpecInputCustomEgressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomEgress {
  /**
  * Pod Labels on which traffic should be allowed/denied. Use a label selector to identify the pods to which the policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#to_pod_labels NetworkPolicy#to_pod_labels}
  */
  readonly toPodLabels?: { [key: string]: string };
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#rules NetworkPolicy#rules}
  */
  readonly rules: NetworkPolicySpecInputCustomEgressRules[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomEgressToTerraform(struct?: NetworkPolicySpecInputCustomEgressOutputReference | NetworkPolicySpecInputCustomEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    to_pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toPodLabels),
    rules: cdktf.listMapper(networkPolicySpecInputCustomEgressRulesToTerraform, true)(struct!.rules),
  }
}


export function networkPolicySpecInputCustomEgressToHclTerraform(struct?: NetworkPolicySpecInputCustomEgressOutputReference | NetworkPolicySpecInputCustomEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    to_pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toPodLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rules: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomEgressRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputCustomEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toPodLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPodLabels = this._toPodLabels;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toPodLabels = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toPodLabels = value.toPodLabels;
      this._rules.internalValue = value.rules;
    }
  }

  // to_pod_labels - computed: false, optional: true, required: false
  private _toPodLabels?: { [key: string]: string }; 
  public get toPodLabels() {
    return this.getStringMapAttribute('to_pod_labels');
  }
  public set toPodLabels(value: { [key: string]: string }) {
    this._toPodLabels = value;
  }
  public resetToPodLabels() {
    this._toPodLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPodLabelsInput() {
    return this._toPodLabels;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new NetworkPolicySpecInputCustomEgressRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: NetworkPolicySpecInputCustomEgressRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface NetworkPolicySpecInputCustomIngressRulesPorts {
  /**
  * The port on the given protocol. This can either be a numerical or named port on a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#port NetworkPolicy#port}
  */
  readonly port?: string;
  /**
  * The protocol (TCP or UDP) which traffic must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicySpecInputCustomIngressRulesPortsToTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicySpecInputCustomIngressRulesPortsToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomIngressRulesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngressRulesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
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
}

export class NetworkPolicySpecInputCustomIngressRulesPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomIngressRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomIngressRulesPortsOutputReference {
    return new NetworkPolicySpecInputCustomIngressRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock {
  /**
  * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#cidr NetworkPolicy#cidr}
  */
  readonly cidr: string;
  /**
  * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#except NetworkPolicy#except}
  */
  readonly except?: string[];
}

export function networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockToTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockOutputReference {
    return new NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp {
  /**
  * ip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpToTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockToTerraform, true)(struct!.ipBlock),
  }
}


export function networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockToHclTerraform, true)(struct!.ipBlock),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock.internalValue = value.ipBlock;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock = new NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlockList(this, "ip_block", false);
  public get ipBlock() {
    return this._ipBlock;
  }
  public putIpBlock(value: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpIpBlock[] | cdktf.IResolvable) {
    this._ipBlock.internalValue = value;
  }
  public resetIpBlock() {
    this._ipBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock.internalValue;
  }
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpOutputReference {
    return new NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector {
  /**
  * Use a label selector to identify the namespaces to allow as egress destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: { [key: string]: string };
  /**
  * Use a label selector to identify the pods to allow as egress destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: { [key: string]: string };
}

export function networkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorToTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.namespaceSelector),
    pod_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podSelector),
  }
}


export function networkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.namespaceSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._podSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceSelector = undefined;
      this._podSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceSelector = value.namespaceSelector;
      this._podSelector = value.podSelector;
    }
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: { [key: string]: string }; 
  public get namespaceSelector() {
    return this.getStringMapAttribute('namespace_selector');
  }
  public set namespaceSelector(value: { [key: string]: string }) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector?: { [key: string]: string }; 
  public get podSelector() {
    return this.getStringMapAttribute('pod_selector');
  }
  public set podSelector(value: { [key: string]: string }) {
    this._podSelector = value;
  }
  public resetPodSelector() {
    this._podSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector;
  }
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorOutputReference {
    return new NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomIngressRulesRuleSpec {
  /**
  * custom_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#custom_ip NetworkPolicy#custom_ip}
  */
  readonly customIp?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp[] | cdktf.IResolvable;
  /**
  * custom_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#custom_selector NetworkPolicy#custom_selector}
  */
  readonly customSelector?: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomIngressRulesRuleSpecToTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_ip: cdktf.listMapper(networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpToTerraform, true)(struct!.customIp),
    custom_selector: cdktf.listMapper(networkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorToTerraform, true)(struct!.customSelector),
  }
}


export function networkPolicySpecInputCustomIngressRulesRuleSpecToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressRulesRuleSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_ip: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomIngressRulesRuleSpecCustomIpToHclTerraform, true)(struct!.customIp),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpList",
    },
    custom_selector: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorToHclTerraform, true)(struct!.customSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomIngressRulesRuleSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIp = this._customIp?.internalValue;
    }
    if (this._customSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSelector = this._customSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngressRulesRuleSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customIp.internalValue = undefined;
      this._customSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customIp.internalValue = value.customIp;
      this._customSelector.internalValue = value.customSelector;
    }
  }

  // custom_ip - computed: false, optional: true, required: false
  private _customIp = new NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIpList(this, "custom_ip", false);
  public get customIp() {
    return this._customIp;
  }
  public putCustomIp(value: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomIp[] | cdktf.IResolvable) {
    this._customIp.internalValue = value;
  }
  public resetCustomIp() {
    this._customIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpInput() {
    return this._customIp.internalValue;
  }

  // custom_selector - computed: false, optional: true, required: false
  private _customSelector = new NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelectorList(this, "custom_selector", false);
  public get customSelector() {
    return this._customSelector;
  }
  public putCustomSelector(value: NetworkPolicySpecInputCustomIngressRulesRuleSpecCustomSelector[] | cdktf.IResolvable) {
    this._customSelector.internalValue = value;
  }
  public resetCustomSelector() {
    this._customSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSelectorInput() {
    return this._customSelector.internalValue;
  }
}

export class NetworkPolicySpecInputCustomIngressRulesRuleSpecList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomIngressRulesRuleSpec[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomIngressRulesRuleSpecOutputReference {
    return new NetworkPolicySpecInputCustomIngressRulesRuleSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomIngressRules {
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#ports NetworkPolicy#ports}
  */
  readonly ports: NetworkPolicySpecInputCustomIngressRulesPorts[] | cdktf.IResolvable;
  /**
  * rule_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#rule_spec NetworkPolicy#rule_spec}
  */
  readonly ruleSpec: NetworkPolicySpecInputCustomIngressRulesRuleSpec[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomIngressRulesToTerraform(struct?: NetworkPolicySpecInputCustomIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(networkPolicySpecInputCustomIngressRulesPortsToTerraform, true)(struct!.ports),
    rule_spec: cdktf.listMapper(networkPolicySpecInputCustomIngressRulesRuleSpecToTerraform, true)(struct!.ruleSpec),
  }
}


export function networkPolicySpecInputCustomIngressRulesToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomIngressRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressRulesPortsList",
    },
    rule_spec: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomIngressRulesRuleSpecToHclTerraform, true)(struct!.ruleSpec),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressRulesRuleSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecInputCustomIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._ruleSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSpec = this._ruleSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
      this._ruleSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
      this._ruleSpec.internalValue = value.ruleSpec;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new NetworkPolicySpecInputCustomIngressRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkPolicySpecInputCustomIngressRulesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // rule_spec - computed: false, optional: false, required: true
  private _ruleSpec = new NetworkPolicySpecInputCustomIngressRulesRuleSpecList(this, "rule_spec", false);
  public get ruleSpec() {
    return this._ruleSpec;
  }
  public putRuleSpec(value: NetworkPolicySpecInputCustomIngressRulesRuleSpec[] | cdktf.IResolvable) {
    this._ruleSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSpecInput() {
    return this._ruleSpec.internalValue;
  }
}

export class NetworkPolicySpecInputCustomIngressRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecInputCustomIngressRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecInputCustomIngressRulesOutputReference {
    return new NetworkPolicySpecInputCustomIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecInputCustomIngress {
  /**
  * Pod Labels on which traffic should be allowed/denied. Use a label selector to identify the pods to which the policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#to_pod_labels NetworkPolicy#to_pod_labels}
  */
  readonly toPodLabels?: { [key: string]: string };
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#rules NetworkPolicy#rules}
  */
  readonly rules: NetworkPolicySpecInputCustomIngressRules[] | cdktf.IResolvable;
}

export function networkPolicySpecInputCustomIngressToTerraform(struct?: NetworkPolicySpecInputCustomIngressOutputReference | NetworkPolicySpecInputCustomIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    to_pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toPodLabels),
    rules: cdktf.listMapper(networkPolicySpecInputCustomIngressRulesToTerraform, true)(struct!.rules),
  }
}


export function networkPolicySpecInputCustomIngressToHclTerraform(struct?: NetworkPolicySpecInputCustomIngressOutputReference | NetworkPolicySpecInputCustomIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    to_pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toPodLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    rules: {
      value: cdktf.listMapperHcl(networkPolicySpecInputCustomIngressRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputCustomIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputCustomIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toPodLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPodLabels = this._toPodLabels;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputCustomIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toPodLabels = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toPodLabels = value.toPodLabels;
      this._rules.internalValue = value.rules;
    }
  }

  // to_pod_labels - computed: false, optional: true, required: false
  private _toPodLabels?: { [key: string]: string }; 
  public get toPodLabels() {
    return this.getStringMapAttribute('to_pod_labels');
  }
  public set toPodLabels(value: { [key: string]: string }) {
    this._toPodLabels = value;
  }
  public resetToPodLabels() {
    this._toPodLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPodLabelsInput() {
    return this._toPodLabels;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new NetworkPolicySpecInputCustomIngressRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: NetworkPolicySpecInputCustomIngressRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface NetworkPolicySpecInputDenyAll {
}

export function networkPolicySpecInputDenyAllToTerraform(struct?: NetworkPolicySpecInputDenyAllOutputReference | NetworkPolicySpecInputDenyAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicySpecInputDenyAllToHclTerraform(struct?: NetworkPolicySpecInputDenyAllOutputReference | NetworkPolicySpecInputDenyAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicySpecInputDenyAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputDenyAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputDenyAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NetworkPolicySpecInputDenyAllEgress {
}

export function networkPolicySpecInputDenyAllEgressToTerraform(struct?: NetworkPolicySpecInputDenyAllEgressOutputReference | NetworkPolicySpecInputDenyAllEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicySpecInputDenyAllEgressToHclTerraform(struct?: NetworkPolicySpecInputDenyAllEgressOutputReference | NetworkPolicySpecInputDenyAllEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicySpecInputDenyAllEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputDenyAllEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputDenyAllEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NetworkPolicySpecInputDenyAllToPods {
  /**
  * Pod Labels on which traffic should be allowed/denied. Use a label selector to identify the pods to which the policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#to_pod_labels NetworkPolicy#to_pod_labels}
  */
  readonly toPodLabels?: { [key: string]: string };
}

export function networkPolicySpecInputDenyAllToPodsToTerraform(struct?: NetworkPolicySpecInputDenyAllToPodsOutputReference | NetworkPolicySpecInputDenyAllToPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    to_pod_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toPodLabels),
  }
}


export function networkPolicySpecInputDenyAllToPodsToHclTerraform(struct?: NetworkPolicySpecInputDenyAllToPodsOutputReference | NetworkPolicySpecInputDenyAllToPods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    to_pod_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toPodLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputDenyAllToPodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInputDenyAllToPods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toPodLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPodLabels = this._toPodLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInputDenyAllToPods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toPodLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toPodLabels = value.toPodLabels;
    }
  }

  // to_pod_labels - computed: false, optional: true, required: false
  private _toPodLabels?: { [key: string]: string }; 
  public get toPodLabels() {
    return this.getStringMapAttribute('to_pod_labels');
  }
  public set toPodLabels(value: { [key: string]: string }) {
    this._toPodLabels = value;
  }
  public resetToPodLabels() {
    this._toPodLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPodLabelsInput() {
    return this._toPodLabels;
  }
}
export interface NetworkPolicySpecInput {
  /**
  * allow_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#allow_all NetworkPolicy#allow_all}
  */
  readonly allowAll?: NetworkPolicySpecInputAllowAll;
  /**
  * allow_all_egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#allow_all_egress NetworkPolicy#allow_all_egress}
  */
  readonly allowAllEgress?: NetworkPolicySpecInputAllowAllEgress;
  /**
  * allow_all_to_pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#allow_all_to_pods NetworkPolicy#allow_all_to_pods}
  */
  readonly allowAllToPods?: NetworkPolicySpecInputAllowAllToPods;
  /**
  * custom_egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#custom_egress NetworkPolicy#custom_egress}
  */
  readonly customEgress?: NetworkPolicySpecInputCustomEgress;
  /**
  * custom_ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#custom_ingress NetworkPolicy#custom_ingress}
  */
  readonly customIngress?: NetworkPolicySpecInputCustomIngress;
  /**
  * deny_all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#deny_all NetworkPolicy#deny_all}
  */
  readonly denyAll?: NetworkPolicySpecInputDenyAll;
  /**
  * deny_all_egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#deny_all_egress NetworkPolicy#deny_all_egress}
  */
  readonly denyAllEgress?: NetworkPolicySpecInputDenyAllEgress;
  /**
  * deny_all_to_pods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#deny_all_to_pods NetworkPolicy#deny_all_to_pods}
  */
  readonly denyAllToPods?: NetworkPolicySpecInputDenyAllToPods;
}

export function networkPolicySpecInputToTerraform(struct?: NetworkPolicySpecInputOutputReference | NetworkPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all: networkPolicySpecInputAllowAllToTerraform(struct!.allowAll),
    allow_all_egress: networkPolicySpecInputAllowAllEgressToTerraform(struct!.allowAllEgress),
    allow_all_to_pods: networkPolicySpecInputAllowAllToPodsToTerraform(struct!.allowAllToPods),
    custom_egress: networkPolicySpecInputCustomEgressToTerraform(struct!.customEgress),
    custom_ingress: networkPolicySpecInputCustomIngressToTerraform(struct!.customIngress),
    deny_all: networkPolicySpecInputDenyAllToTerraform(struct!.denyAll),
    deny_all_egress: networkPolicySpecInputDenyAllEgressToTerraform(struct!.denyAllEgress),
    deny_all_to_pods: networkPolicySpecInputDenyAllToPodsToTerraform(struct!.denyAllToPods),
  }
}


export function networkPolicySpecInputToHclTerraform(struct?: NetworkPolicySpecInputOutputReference | NetworkPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all: {
      value: networkPolicySpecInputAllowAllToHclTerraform(struct!.allowAll),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputAllowAllList",
    },
    allow_all_egress: {
      value: networkPolicySpecInputAllowAllEgressToHclTerraform(struct!.allowAllEgress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputAllowAllEgressList",
    },
    allow_all_to_pods: {
      value: networkPolicySpecInputAllowAllToPodsToHclTerraform(struct!.allowAllToPods),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputAllowAllToPodsList",
    },
    custom_egress: {
      value: networkPolicySpecInputCustomEgressToHclTerraform(struct!.customEgress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomEgressList",
    },
    custom_ingress: {
      value: networkPolicySpecInputCustomIngressToHclTerraform(struct!.customIngress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputCustomIngressList",
    },
    deny_all: {
      value: networkPolicySpecInputDenyAllToHclTerraform(struct!.denyAll),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputDenyAllList",
    },
    deny_all_egress: {
      value: networkPolicySpecInputDenyAllEgressToHclTerraform(struct!.denyAllEgress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputDenyAllEgressList",
    },
    deny_all_to_pods: {
      value: networkPolicySpecInputDenyAllToPodsToHclTerraform(struct!.denyAllToPods),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputDenyAllToPodsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAll = this._allowAll?.internalValue;
    }
    if (this._allowAllEgress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllEgress = this._allowAllEgress?.internalValue;
    }
    if (this._allowAllToPods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllToPods = this._allowAllToPods?.internalValue;
    }
    if (this._customEgress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEgress = this._customEgress?.internalValue;
    }
    if (this._customIngress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIngress = this._customIngress?.internalValue;
    }
    if (this._denyAll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAll = this._denyAll?.internalValue;
    }
    if (this._denyAllEgress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAllEgress = this._denyAllEgress?.internalValue;
    }
    if (this._denyAllToPods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAllToPods = this._denyAllToPods?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAll.internalValue = undefined;
      this._allowAllEgress.internalValue = undefined;
      this._allowAllToPods.internalValue = undefined;
      this._customEgress.internalValue = undefined;
      this._customIngress.internalValue = undefined;
      this._denyAll.internalValue = undefined;
      this._denyAllEgress.internalValue = undefined;
      this._denyAllToPods.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAll.internalValue = value.allowAll;
      this._allowAllEgress.internalValue = value.allowAllEgress;
      this._allowAllToPods.internalValue = value.allowAllToPods;
      this._customEgress.internalValue = value.customEgress;
      this._customIngress.internalValue = value.customIngress;
      this._denyAll.internalValue = value.denyAll;
      this._denyAllEgress.internalValue = value.denyAllEgress;
      this._denyAllToPods.internalValue = value.denyAllToPods;
    }
  }

  // allow_all - computed: false, optional: true, required: false
  private _allowAll = new NetworkPolicySpecInputAllowAllOutputReference(this, "allow_all");
  public get allowAll() {
    return this._allowAll;
  }
  public putAllowAll(value: NetworkPolicySpecInputAllowAll) {
    this._allowAll.internalValue = value;
  }
  public resetAllowAll() {
    this._allowAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll.internalValue;
  }

  // allow_all_egress - computed: false, optional: true, required: false
  private _allowAllEgress = new NetworkPolicySpecInputAllowAllEgressOutputReference(this, "allow_all_egress");
  public get allowAllEgress() {
    return this._allowAllEgress;
  }
  public putAllowAllEgress(value: NetworkPolicySpecInputAllowAllEgress) {
    this._allowAllEgress.internalValue = value;
  }
  public resetAllowAllEgress() {
    this._allowAllEgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllEgressInput() {
    return this._allowAllEgress.internalValue;
  }

  // allow_all_to_pods - computed: false, optional: true, required: false
  private _allowAllToPods = new NetworkPolicySpecInputAllowAllToPodsOutputReference(this, "allow_all_to_pods");
  public get allowAllToPods() {
    return this._allowAllToPods;
  }
  public putAllowAllToPods(value: NetworkPolicySpecInputAllowAllToPods) {
    this._allowAllToPods.internalValue = value;
  }
  public resetAllowAllToPods() {
    this._allowAllToPods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllToPodsInput() {
    return this._allowAllToPods.internalValue;
  }

  // custom_egress - computed: false, optional: true, required: false
  private _customEgress = new NetworkPolicySpecInputCustomEgressOutputReference(this, "custom_egress");
  public get customEgress() {
    return this._customEgress;
  }
  public putCustomEgress(value: NetworkPolicySpecInputCustomEgress) {
    this._customEgress.internalValue = value;
  }
  public resetCustomEgress() {
    this._customEgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEgressInput() {
    return this._customEgress.internalValue;
  }

  // custom_ingress - computed: false, optional: true, required: false
  private _customIngress = new NetworkPolicySpecInputCustomIngressOutputReference(this, "custom_ingress");
  public get customIngress() {
    return this._customIngress;
  }
  public putCustomIngress(value: NetworkPolicySpecInputCustomIngress) {
    this._customIngress.internalValue = value;
  }
  public resetCustomIngress() {
    this._customIngress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIngressInput() {
    return this._customIngress.internalValue;
  }

  // deny_all - computed: false, optional: true, required: false
  private _denyAll = new NetworkPolicySpecInputDenyAllOutputReference(this, "deny_all");
  public get denyAll() {
    return this._denyAll;
  }
  public putDenyAll(value: NetworkPolicySpecInputDenyAll) {
    this._denyAll.internalValue = value;
  }
  public resetDenyAll() {
    this._denyAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllInput() {
    return this._denyAll.internalValue;
  }

  // deny_all_egress - computed: false, optional: true, required: false
  private _denyAllEgress = new NetworkPolicySpecInputDenyAllEgressOutputReference(this, "deny_all_egress");
  public get denyAllEgress() {
    return this._denyAllEgress;
  }
  public putDenyAllEgress(value: NetworkPolicySpecInputDenyAllEgress) {
    this._denyAllEgress.internalValue = value;
  }
  public resetDenyAllEgress() {
    this._denyAllEgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllEgressInput() {
    return this._denyAllEgress.internalValue;
  }

  // deny_all_to_pods - computed: false, optional: true, required: false
  private _denyAllToPods = new NetworkPolicySpecInputDenyAllToPodsOutputReference(this, "deny_all_to_pods");
  public get denyAllToPods() {
    return this._denyAllToPods;
  }
  public putDenyAllToPods(value: NetworkPolicySpecInputDenyAllToPods) {
    this._denyAllToPods.internalValue = value;
  }
  public resetDenyAllToPods() {
    this._denyAllToPods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllToPodsInput() {
    return this._denyAllToPods.internalValue;
  }
}
export interface NetworkPolicySpecNamespaceSelectorMatchExpressions {
  /**
  * Key is the label key that the selector applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values: string[];
}

export function networkPolicySpecNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicySpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicySpecNamespaceSelectorMatchExpressionsOutputReference {
    return new NetworkPolicySpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicySpecNamespaceSelector {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions: NetworkPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicySpecNamespaceSelectorToTerraform(struct?: NetworkPolicySpecNamespaceSelectorOutputReference | NetworkPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(networkPolicySpecNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicySpecNamespaceSelectorToHclTerraform(struct?: NetworkPolicySpecNamespaceSelectorOutputReference | NetworkPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpecNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_expressions - computed: false, optional: false, required: true
  private _matchExpressions = new NetworkPolicySpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicySpec {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#input NetworkPolicy#input}
  */
  readonly input: NetworkPolicySpecInput;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecNamespaceSelector;
}

export function networkPolicySpecToTerraform(struct?: NetworkPolicySpecOutputReference | NetworkPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: networkPolicySpecInputToTerraform(struct!.input),
    namespace_selector: networkPolicySpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function networkPolicySpecToHclTerraform(struct?: NetworkPolicySpecOutputReference | NetworkPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: networkPolicySpecInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecInputList",
    },
    namespace_selector: {
      value: networkPolicySpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicySpecNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._input.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._input.internalValue = value.input;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // input - computed: false, optional: false, required: true
  private _input = new NetworkPolicySpecInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: NetworkPolicySpecInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new NetworkPolicySpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: NetworkPolicySpecNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy tanzu-mission-control_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPolicy to import
  * @param importFromId The id of the existing NetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/network_policy tanzu-mission-control_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_network_policy',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.10',
        providerVersionConstraint: '1.4.10'
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
    this._name = config.name;
    this._meta.internalValue = config.meta;
    this._scope.internalValue = config.scope;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // meta - computed: false, optional: true, required: false
  private _meta = new NetworkPolicyMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: NetworkPolicyMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new NetworkPolicyScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: NetworkPolicyScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new NetworkPolicySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NetworkPolicySpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      meta: networkPolicyMetaToTerraform(this._meta.internalValue),
      scope: networkPolicyScopeToTerraform(this._scope.internalValue),
      spec: networkPolicySpecToTerraform(this._spec.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: networkPolicyMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyMetaList",
      },
      scope: {
        value: networkPolicyScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyScopeList",
      },
      spec: {
        value: networkPolicySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
