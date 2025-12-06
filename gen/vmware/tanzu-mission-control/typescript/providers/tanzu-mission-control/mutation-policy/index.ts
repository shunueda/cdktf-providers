// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MutationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#id MutationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the mutation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#name MutationPolicy#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#meta MutationPolicy#meta}
  */
  readonly meta?: MutationPolicyMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#scope MutationPolicy#scope}
  */
  readonly scope: MutationPolicyScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#spec MutationPolicy#spec}
  */
  readonly spec: MutationPolicySpec;
}
export interface MutationPolicyMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#annotations MutationPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#description MutationPolicy#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#labels MutationPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function mutationPolicyMetaToTerraform(struct?: MutationPolicyMetaOutputReference | MutationPolicyMeta): any {
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


export function mutationPolicyMetaToHclTerraform(struct?: MutationPolicyMetaOutputReference | MutationPolicyMeta): any {
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

export class MutationPolicyMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicyMeta | undefined {
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

  public set internalValue(value: MutationPolicyMeta | undefined) {
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
export interface MutationPolicyScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#management_cluster_name MutationPolicy#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#name MutationPolicy#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#provisioner_name MutationPolicy#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function mutationPolicyScopeClusterToTerraform(struct?: MutationPolicyScopeClusterOutputReference | MutationPolicyScopeCluster): any {
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


export function mutationPolicyScopeClusterToHclTerraform(struct?: MutationPolicyScopeClusterOutputReference | MutationPolicyScopeCluster): any {
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

export class MutationPolicyScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicyScopeCluster | undefined {
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

  public set internalValue(value: MutationPolicyScopeCluster | undefined) {
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
export interface MutationPolicyScopeClusterGroup {
  /**
  * Name of this cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#cluster_group MutationPolicy#cluster_group}
  */
  readonly clusterGroup: string;
}

export function mutationPolicyScopeClusterGroupToTerraform(struct?: MutationPolicyScopeClusterGroupOutputReference | MutationPolicyScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
  }
}


export function mutationPolicyScopeClusterGroupToHclTerraform(struct?: MutationPolicyScopeClusterGroupOutputReference | MutationPolicyScopeClusterGroup): any {
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

export class MutationPolicyScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicyScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicyScopeClusterGroup | undefined) {
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
export interface MutationPolicyScopeOrganization {
  /**
  * ID of this organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#organization MutationPolicy#organization}
  */
  readonly organization: string;
}

export function mutationPolicyScopeOrganizationToTerraform(struct?: MutationPolicyScopeOrganizationOutputReference | MutationPolicyScopeOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
  }
}


export function mutationPolicyScopeOrganizationToHclTerraform(struct?: MutationPolicyScopeOrganizationOutputReference | MutationPolicyScopeOrganization): any {
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

export class MutationPolicyScopeOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicyScopeOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicyScopeOrganization | undefined) {
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
export interface MutationPolicyScopeWorkspace {
  /**
  * Name of this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#workspace MutationPolicy#workspace}
  */
  readonly workspace: string;
}

export function mutationPolicyScopeWorkspaceToTerraform(struct?: MutationPolicyScopeWorkspaceOutputReference | MutationPolicyScopeWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function mutationPolicyScopeWorkspaceToHclTerraform(struct?: MutationPolicyScopeWorkspaceOutputReference | MutationPolicyScopeWorkspace): any {
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

export class MutationPolicyScopeWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicyScopeWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicyScopeWorkspace | undefined) {
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
export interface MutationPolicyScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#cluster MutationPolicy#cluster}
  */
  readonly cluster?: MutationPolicyScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#cluster_group MutationPolicy#cluster_group}
  */
  readonly clusterGroup?: MutationPolicyScopeClusterGroup;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#organization MutationPolicy#organization}
  */
  readonly organization?: MutationPolicyScopeOrganization;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#workspace MutationPolicy#workspace}
  */
  readonly workspace?: MutationPolicyScopeWorkspace;
}

export function mutationPolicyScopeToTerraform(struct?: MutationPolicyScopeOutputReference | MutationPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: mutationPolicyScopeClusterToTerraform(struct!.cluster),
    cluster_group: mutationPolicyScopeClusterGroupToTerraform(struct!.clusterGroup),
    organization: mutationPolicyScopeOrganizationToTerraform(struct!.organization),
    workspace: mutationPolicyScopeWorkspaceToTerraform(struct!.workspace),
  }
}


export function mutationPolicyScopeToHclTerraform(struct?: MutationPolicyScopeOutputReference | MutationPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: mutationPolicyScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicyScopeClusterList",
    },
    cluster_group: {
      value: mutationPolicyScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicyScopeClusterGroupList",
    },
    organization: {
      value: mutationPolicyScopeOrganizationToHclTerraform(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicyScopeOrganizationList",
    },
    workspace: {
      value: mutationPolicyScopeWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicyScopeWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicyScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicyScope | undefined {
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

  public set internalValue(value: MutationPolicyScope | undefined) {
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
  private _cluster = new MutationPolicyScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: MutationPolicyScopeCluster) {
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
  private _clusterGroup = new MutationPolicyScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: MutationPolicyScopeClusterGroup) {
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
  private _organization = new MutationPolicyScopeOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: MutationPolicyScopeOrganization) {
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
  private _workspace = new MutationPolicyScopeWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: MutationPolicyScopeWorkspace) {
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
export interface MutationPolicySpecInputAnnotationAnnotation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#key MutationPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: string;
}

export function mutationPolicySpecInputAnnotationAnnotationToTerraform(struct?: MutationPolicySpecInputAnnotationAnnotationOutputReference | MutationPolicySpecInputAnnotationAnnotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputAnnotationAnnotationToHclTerraform(struct?: MutationPolicySpecInputAnnotationAnnotationOutputReference | MutationPolicySpecInputAnnotationAnnotation): any {
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

export class MutationPolicySpecInputAnnotationAnnotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputAnnotationAnnotation | undefined {
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

  public set internalValue(value: MutationPolicySpecInputAnnotationAnnotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface MutationPolicySpecInputAnnotationTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#api_groups MutationPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#kinds MutationPolicy#kinds}
  */
  readonly kinds: string[];
}

export function mutationPolicySpecInputAnnotationTargetKubernetesResourcesToTerraform(struct?: MutationPolicySpecInputAnnotationTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function mutationPolicySpecInputAnnotationTargetKubernetesResourcesToHclTerraform(struct?: MutationPolicySpecInputAnnotationTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputAnnotationTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MutationPolicySpecInputAnnotationTargetKubernetesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputAnnotationTargetKubernetesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._kinds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._kinds = value.kinds;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // kinds - computed: false, optional: false, required: true
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }
}

export class MutationPolicySpecInputAnnotationTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : MutationPolicySpecInputAnnotationTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): MutationPolicySpecInputAnnotationTargetKubernetesResourcesOutputReference {
    return new MutationPolicySpecInputAnnotationTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutationPolicySpecInputAnnotation {
  /**
  * Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#scope MutationPolicy#scope}
  */
  readonly scope?: string;
  /**
  * annotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#annotation MutationPolicy#annotation}
  */
  readonly annotation?: MutationPolicySpecInputAnnotationAnnotation;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#target_kubernetes_resources MutationPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: MutationPolicySpecInputAnnotationTargetKubernetesResources[] | cdktf.IResolvable;
}

export function mutationPolicySpecInputAnnotationToTerraform(struct?: MutationPolicySpecInputAnnotationOutputReference | MutationPolicySpecInputAnnotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    annotation: mutationPolicySpecInputAnnotationAnnotationToTerraform(struct!.annotation),
    target_kubernetes_resources: cdktf.listMapper(mutationPolicySpecInputAnnotationTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function mutationPolicySpecInputAnnotationToHclTerraform(struct?: MutationPolicySpecInputAnnotationOutputReference | MutationPolicySpecInputAnnotation): any {
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
    annotation: {
      value: mutationPolicySpecInputAnnotationAnnotationToHclTerraform(struct!.annotation),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputAnnotationAnnotationList",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(mutationPolicySpecInputAnnotationTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputAnnotationTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputAnnotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputAnnotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputAnnotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._annotation.internalValue = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._annotation.internalValue = value.annotation;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new MutationPolicySpecInputAnnotationAnnotationOutputReference(this, "annotation");
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: MutationPolicySpecInputAnnotationAnnotation) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new MutationPolicySpecInputAnnotationTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: MutationPolicySpecInputAnnotationTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface MutationPolicySpecInputLabelLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#key MutationPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: string;
}

export function mutationPolicySpecInputLabelLabelToTerraform(struct?: MutationPolicySpecInputLabelLabelOutputReference | MutationPolicySpecInputLabelLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputLabelLabelToHclTerraform(struct?: MutationPolicySpecInputLabelLabelOutputReference | MutationPolicySpecInputLabelLabel): any {
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

export class MutationPolicySpecInputLabelLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputLabelLabel | undefined {
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

  public set internalValue(value: MutationPolicySpecInputLabelLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface MutationPolicySpecInputLabelTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#api_groups MutationPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#kinds MutationPolicy#kinds}
  */
  readonly kinds: string[];
}

export function mutationPolicySpecInputLabelTargetKubernetesResourcesToTerraform(struct?: MutationPolicySpecInputLabelTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function mutationPolicySpecInputLabelTargetKubernetesResourcesToHclTerraform(struct?: MutationPolicySpecInputLabelTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputLabelTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MutationPolicySpecInputLabelTargetKubernetesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputLabelTargetKubernetesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._kinds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._kinds = value.kinds;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // kinds - computed: false, optional: false, required: true
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }
}

export class MutationPolicySpecInputLabelTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : MutationPolicySpecInputLabelTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): MutationPolicySpecInputLabelTargetKubernetesResourcesOutputReference {
    return new MutationPolicySpecInputLabelTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutationPolicySpecInputLabel {
  /**
  * Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#scope MutationPolicy#scope}
  */
  readonly scope?: string;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#label MutationPolicy#label}
  */
  readonly label?: MutationPolicySpecInputLabelLabel;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#target_kubernetes_resources MutationPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: MutationPolicySpecInputLabelTargetKubernetesResources[] | cdktf.IResolvable;
}

export function mutationPolicySpecInputLabelToTerraform(struct?: MutationPolicySpecInputLabelOutputReference | MutationPolicySpecInputLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    label: mutationPolicySpecInputLabelLabelToTerraform(struct!.label),
    target_kubernetes_resources: cdktf.listMapper(mutationPolicySpecInputLabelTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function mutationPolicySpecInputLabelToHclTerraform(struct?: MutationPolicySpecInputLabelOutputReference | MutationPolicySpecInputLabel): any {
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
    label: {
      value: mutationPolicySpecInputLabelLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputLabelLabelList",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(mutationPolicySpecInputLabelTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputLabelTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._label.internalValue = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._label.internalValue = value.label;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // label - computed: false, optional: true, required: false
  private _label = new MutationPolicySpecInputLabelLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: MutationPolicySpecInputLabelLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new MutationPolicySpecInputLabelTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: MutationPolicySpecInputLabelTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function mutationPolicySpecInputPodSecurityAllowPrivilegeEscalationToTerraform(struct?: MutationPolicySpecInputPodSecurityAllowPrivilegeEscalationOutputReference | MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityAllowPrivilegeEscalationToHclTerraform(struct?: MutationPolicySpecInputPodSecurityAllowPrivilegeEscalationOutputReference | MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityAllowPrivilegeEscalationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecurityCapabilitiesAdd {
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#operation MutationPolicy#operation}
  */
  readonly operation?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#values MutationPolicy#values}
  */
  readonly values: string[];
}

export function mutationPolicySpecInputPodSecurityCapabilitiesAddToTerraform(struct?: MutationPolicySpecInputPodSecurityCapabilitiesAddOutputReference | MutationPolicySpecInputPodSecurityCapabilitiesAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function mutationPolicySpecInputPodSecurityCapabilitiesAddToHclTerraform(struct?: MutationPolicySpecInputPodSecurityCapabilitiesAddOutputReference | MutationPolicySpecInputPodSecurityCapabilitiesAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class MutationPolicySpecInputPodSecurityCapabilitiesAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityCapabilitiesAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityCapabilitiesAdd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operation = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface MutationPolicySpecInputPodSecurityCapabilitiesDrop {
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#operation MutationPolicy#operation}
  */
  readonly operation?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#values MutationPolicy#values}
  */
  readonly values: string[];
}

export function mutationPolicySpecInputPodSecurityCapabilitiesDropToTerraform(struct?: MutationPolicySpecInputPodSecurityCapabilitiesDropOutputReference | MutationPolicySpecInputPodSecurityCapabilitiesDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function mutationPolicySpecInputPodSecurityCapabilitiesDropToHclTerraform(struct?: MutationPolicySpecInputPodSecurityCapabilitiesDropOutputReference | MutationPolicySpecInputPodSecurityCapabilitiesDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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

export class MutationPolicySpecInputPodSecurityCapabilitiesDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityCapabilitiesDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityCapabilitiesDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operation = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operation = value.operation;
      this._values = value.values;
    }
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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
export interface MutationPolicySpecInputPodSecurityFsGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: number;
}

export function mutationPolicySpecInputPodSecurityFsGroupToTerraform(struct?: MutationPolicySpecInputPodSecurityFsGroupOutputReference | MutationPolicySpecInputPodSecurityFsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityFsGroupToHclTerraform(struct?: MutationPolicySpecInputPodSecurityFsGroupOutputReference | MutationPolicySpecInputPodSecurityFsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityFsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityFsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityFsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecurityPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function mutationPolicySpecInputPodSecurityPrivilegedToTerraform(struct?: MutationPolicySpecInputPodSecurityPrivilegedOutputReference | MutationPolicySpecInputPodSecurityPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityPrivilegedToHclTerraform(struct?: MutationPolicySpecInputPodSecurityPrivilegedOutputReference | MutationPolicySpecInputPodSecurityPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function mutationPolicySpecInputPodSecurityReadOnlyRootFilesystemToTerraform(struct?: MutationPolicySpecInputPodSecurityReadOnlyRootFilesystemOutputReference | MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityReadOnlyRootFilesystemToHclTerraform(struct?: MutationPolicySpecInputPodSecurityReadOnlyRootFilesystemOutputReference | MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityReadOnlyRootFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecurityRunAsGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: number;
}

export function mutationPolicySpecInputPodSecurityRunAsGroupToTerraform(struct?: MutationPolicySpecInputPodSecurityRunAsGroupOutputReference | MutationPolicySpecInputPodSecurityRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityRunAsGroupToHclTerraform(struct?: MutationPolicySpecInputPodSecurityRunAsGroupOutputReference | MutationPolicySpecInputPodSecurityRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityRunAsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityRunAsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityRunAsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecurityRunAsNonRoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function mutationPolicySpecInputPodSecurityRunAsNonRootToTerraform(struct?: MutationPolicySpecInputPodSecurityRunAsNonRootOutputReference | MutationPolicySpecInputPodSecurityRunAsNonRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityRunAsNonRootToHclTerraform(struct?: MutationPolicySpecInputPodSecurityRunAsNonRootOutputReference | MutationPolicySpecInputPodSecurityRunAsNonRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityRunAsNonRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityRunAsNonRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityRunAsNonRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecurityRunAsUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#value MutationPolicy#value}
  */
  readonly value: number;
}

export function mutationPolicySpecInputPodSecurityRunAsUserToTerraform(struct?: MutationPolicySpecInputPodSecurityRunAsUserOutputReference | MutationPolicySpecInputPodSecurityRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function mutationPolicySpecInputPodSecurityRunAsUserToHclTerraform(struct?: MutationPolicySpecInputPodSecurityRunAsUserOutputReference | MutationPolicySpecInputPodSecurityRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityRunAsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurityRunAsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurityRunAsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._value = value.value;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MutationPolicySpecInputPodSecuritySeLinuxOptions {
  /**
  * SELinux condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition?: string;
  /**
  * SELinux level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#level MutationPolicy#level}
  */
  readonly level?: string;
  /**
  * SELinux role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#role MutationPolicy#role}
  */
  readonly role?: string;
  /**
  * SELinux type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#type MutationPolicy#type}
  */
  readonly type?: string;
  /**
  * SELinux user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#user MutationPolicy#user}
  */
  readonly user?: string;
}

export function mutationPolicySpecInputPodSecuritySeLinuxOptionsToTerraform(struct?: MutationPolicySpecInputPodSecuritySeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function mutationPolicySpecInputPodSecuritySeLinuxOptionsToHclTerraform(struct?: MutationPolicySpecInputPodSecuritySeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecuritySeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MutationPolicySpecInputPodSecuritySeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecuritySeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class MutationPolicySpecInputPodSecuritySeLinuxOptionsList extends cdktf.ComplexList {
  public internalValue? : MutationPolicySpecInputPodSecuritySeLinuxOptions[] | cdktf.IResolvable

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
  public get(index: number): MutationPolicySpecInputPodSecuritySeLinuxOptionsOutputReference {
    return new MutationPolicySpecInputPodSecuritySeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutationPolicySpecInputPodSecuritySupplementalGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#condition MutationPolicy#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#values MutationPolicy#values}
  */
  readonly values: number[];
}

export function mutationPolicySpecInputPodSecuritySupplementalGroupsToTerraform(struct?: MutationPolicySpecInputPodSecuritySupplementalGroupsOutputReference | MutationPolicySpecInputPodSecuritySupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function mutationPolicySpecInputPodSecuritySupplementalGroupsToHclTerraform(struct?: MutationPolicySpecInputPodSecuritySupplementalGroupsOutputReference | MutationPolicySpecInputPodSecuritySupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecuritySupplementalGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecuritySupplementalGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecuritySupplementalGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._values = value.values;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // values - computed: false, optional: false, required: true
  private _values?: number[]; 
  public get values() {
    return this.getNumberListAttribute('values');
  }
  public set values(value: number[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface MutationPolicySpecInputPodSecurity {
  /**
  * allow_privilege_escalation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#allow_privilege_escalation MutationPolicy#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation;
  /**
  * capabilities_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#capabilities_add MutationPolicy#capabilities_add}
  */
  readonly capabilitiesAdd?: MutationPolicySpecInputPodSecurityCapabilitiesAdd;
  /**
  * capabilities_drop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#capabilities_drop MutationPolicy#capabilities_drop}
  */
  readonly capabilitiesDrop?: MutationPolicySpecInputPodSecurityCapabilitiesDrop;
  /**
  * fs_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#fs_group MutationPolicy#fs_group}
  */
  readonly fsGroup?: MutationPolicySpecInputPodSecurityFsGroup;
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#privileged MutationPolicy#privileged}
  */
  readonly privileged?: MutationPolicySpecInputPodSecurityPrivileged;
  /**
  * read_only_root_filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#read_only_root_filesystem MutationPolicy#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem;
  /**
  * run_as_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#run_as_group MutationPolicy#run_as_group}
  */
  readonly runAsGroup?: MutationPolicySpecInputPodSecurityRunAsGroup;
  /**
  * run_as_non_root block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#run_as_non_root MutationPolicy#run_as_non_root}
  */
  readonly runAsNonRoot?: MutationPolicySpecInputPodSecurityRunAsNonRoot;
  /**
  * run_as_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#run_as_user MutationPolicy#run_as_user}
  */
  readonly runAsUser?: MutationPolicySpecInputPodSecurityRunAsUser;
  /**
  * se_linux_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#se_linux_options MutationPolicy#se_linux_options}
  */
  readonly seLinuxOptions?: MutationPolicySpecInputPodSecuritySeLinuxOptions[] | cdktf.IResolvable;
  /**
  * supplemental_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#supplemental_groups MutationPolicy#supplemental_groups}
  */
  readonly supplementalGroups?: MutationPolicySpecInputPodSecuritySupplementalGroups;
}

export function mutationPolicySpecInputPodSecurityToTerraform(struct?: MutationPolicySpecInputPodSecurityOutputReference | MutationPolicySpecInputPodSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: mutationPolicySpecInputPodSecurityAllowPrivilegeEscalationToTerraform(struct!.allowPrivilegeEscalation),
    capabilities_add: mutationPolicySpecInputPodSecurityCapabilitiesAddToTerraform(struct!.capabilitiesAdd),
    capabilities_drop: mutationPolicySpecInputPodSecurityCapabilitiesDropToTerraform(struct!.capabilitiesDrop),
    fs_group: mutationPolicySpecInputPodSecurityFsGroupToTerraform(struct!.fsGroup),
    privileged: mutationPolicySpecInputPodSecurityPrivilegedToTerraform(struct!.privileged),
    read_only_root_filesystem: mutationPolicySpecInputPodSecurityReadOnlyRootFilesystemToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: mutationPolicySpecInputPodSecurityRunAsGroupToTerraform(struct!.runAsGroup),
    run_as_non_root: mutationPolicySpecInputPodSecurityRunAsNonRootToTerraform(struct!.runAsNonRoot),
    run_as_user: mutationPolicySpecInputPodSecurityRunAsUserToTerraform(struct!.runAsUser),
    se_linux_options: cdktf.listMapper(mutationPolicySpecInputPodSecuritySeLinuxOptionsToTerraform, true)(struct!.seLinuxOptions),
    supplemental_groups: mutationPolicySpecInputPodSecuritySupplementalGroupsToTerraform(struct!.supplementalGroups),
  }
}


export function mutationPolicySpecInputPodSecurityToHclTerraform(struct?: MutationPolicySpecInputPodSecurityOutputReference | MutationPolicySpecInputPodSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: mutationPolicySpecInputPodSecurityAllowPrivilegeEscalationToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityAllowPrivilegeEscalationList",
    },
    capabilities_add: {
      value: mutationPolicySpecInputPodSecurityCapabilitiesAddToHclTerraform(struct!.capabilitiesAdd),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityCapabilitiesAddList",
    },
    capabilities_drop: {
      value: mutationPolicySpecInputPodSecurityCapabilitiesDropToHclTerraform(struct!.capabilitiesDrop),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityCapabilitiesDropList",
    },
    fs_group: {
      value: mutationPolicySpecInputPodSecurityFsGroupToHclTerraform(struct!.fsGroup),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityFsGroupList",
    },
    privileged: {
      value: mutationPolicySpecInputPodSecurityPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityPrivilegedList",
    },
    read_only_root_filesystem: {
      value: mutationPolicySpecInputPodSecurityReadOnlyRootFilesystemToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityReadOnlyRootFilesystemList",
    },
    run_as_group: {
      value: mutationPolicySpecInputPodSecurityRunAsGroupToHclTerraform(struct!.runAsGroup),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityRunAsGroupList",
    },
    run_as_non_root: {
      value: mutationPolicySpecInputPodSecurityRunAsNonRootToHclTerraform(struct!.runAsNonRoot),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityRunAsNonRootList",
    },
    run_as_user: {
      value: mutationPolicySpecInputPodSecurityRunAsUserToHclTerraform(struct!.runAsUser),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityRunAsUserList",
    },
    se_linux_options: {
      value: cdktf.listMapperHcl(mutationPolicySpecInputPodSecuritySeLinuxOptionsToHclTerraform, true)(struct!.seLinuxOptions),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecuritySeLinuxOptionsList",
    },
    supplemental_groups: {
      value: mutationPolicySpecInputPodSecuritySupplementalGroupsToHclTerraform(struct!.supplementalGroups),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecuritySupplementalGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputPodSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInputPodSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation?.internalValue;
    }
    if (this._capabilitiesAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilitiesAdd = this._capabilitiesAdd?.internalValue;
    }
    if (this._capabilitiesDrop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilitiesDrop = this._capabilitiesDrop?.internalValue;
    }
    if (this._fsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup?.internalValue;
    }
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFilesystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem?.internalValue;
    }
    if (this._runAsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup?.internalValue;
    }
    if (this._runAsNonRoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot?.internalValue;
    }
    if (this._runAsUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser?.internalValue;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._supplementalGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInputPodSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowPrivilegeEscalation.internalValue = undefined;
      this._capabilitiesAdd.internalValue = undefined;
      this._capabilitiesDrop.internalValue = undefined;
      this._fsGroup.internalValue = undefined;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFilesystem.internalValue = undefined;
      this._runAsGroup.internalValue = undefined;
      this._runAsNonRoot.internalValue = undefined;
      this._runAsUser.internalValue = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._supplementalGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowPrivilegeEscalation.internalValue = value.allowPrivilegeEscalation;
      this._capabilitiesAdd.internalValue = value.capabilitiesAdd;
      this._capabilitiesDrop.internalValue = value.capabilitiesDrop;
      this._fsGroup.internalValue = value.fsGroup;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFilesystem.internalValue = value.readOnlyRootFilesystem;
      this._runAsGroup.internalValue = value.runAsGroup;
      this._runAsNonRoot.internalValue = value.runAsNonRoot;
      this._runAsUser.internalValue = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._supplementalGroups.internalValue = value.supplementalGroups;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation = new MutationPolicySpecInputPodSecurityAllowPrivilegeEscalationOutputReference(this, "allow_privilege_escalation");
  public get allowPrivilegeEscalation() {
    return this._allowPrivilegeEscalation;
  }
  public putAllowPrivilegeEscalation(value: MutationPolicySpecInputPodSecurityAllowPrivilegeEscalation) {
    this._allowPrivilegeEscalation.internalValue = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation.internalValue;
  }

  // capabilities_add - computed: false, optional: true, required: false
  private _capabilitiesAdd = new MutationPolicySpecInputPodSecurityCapabilitiesAddOutputReference(this, "capabilities_add");
  public get capabilitiesAdd() {
    return this._capabilitiesAdd;
  }
  public putCapabilitiesAdd(value: MutationPolicySpecInputPodSecurityCapabilitiesAdd) {
    this._capabilitiesAdd.internalValue = value;
  }
  public resetCapabilitiesAdd() {
    this._capabilitiesAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesAddInput() {
    return this._capabilitiesAdd.internalValue;
  }

  // capabilities_drop - computed: false, optional: true, required: false
  private _capabilitiesDrop = new MutationPolicySpecInputPodSecurityCapabilitiesDropOutputReference(this, "capabilities_drop");
  public get capabilitiesDrop() {
    return this._capabilitiesDrop;
  }
  public putCapabilitiesDrop(value: MutationPolicySpecInputPodSecurityCapabilitiesDrop) {
    this._capabilitiesDrop.internalValue = value;
  }
  public resetCapabilitiesDrop() {
    this._capabilitiesDrop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesDropInput() {
    return this._capabilitiesDrop.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup = new MutationPolicySpecInputPodSecurityFsGroupOutputReference(this, "fs_group");
  public get fsGroup() {
    return this._fsGroup;
  }
  public putFsGroup(value: MutationPolicySpecInputPodSecurityFsGroup) {
    this._fsGroup.internalValue = value;
  }
  public resetFsGroup() {
    this._fsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new MutationPolicySpecInputPodSecurityPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: MutationPolicySpecInputPodSecurityPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem = new MutationPolicySpecInputPodSecurityReadOnlyRootFilesystemOutputReference(this, "read_only_root_filesystem");
  public get readOnlyRootFilesystem() {
    return this._readOnlyRootFilesystem;
  }
  public putReadOnlyRootFilesystem(value: MutationPolicySpecInputPodSecurityReadOnlyRootFilesystem) {
    this._readOnlyRootFilesystem.internalValue = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem.internalValue;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup = new MutationPolicySpecInputPodSecurityRunAsGroupOutputReference(this, "run_as_group");
  public get runAsGroup() {
    return this._runAsGroup;
  }
  public putRunAsGroup(value: MutationPolicySpecInputPodSecurityRunAsGroup) {
    this._runAsGroup.internalValue = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup.internalValue;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot = new MutationPolicySpecInputPodSecurityRunAsNonRootOutputReference(this, "run_as_non_root");
  public get runAsNonRoot() {
    return this._runAsNonRoot;
  }
  public putRunAsNonRoot(value: MutationPolicySpecInputPodSecurityRunAsNonRoot) {
    this._runAsNonRoot.internalValue = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot.internalValue;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser = new MutationPolicySpecInputPodSecurityRunAsUserOutputReference(this, "run_as_user");
  public get runAsUser() {
    return this._runAsUser;
  }
  public putRunAsUser(value: MutationPolicySpecInputPodSecurityRunAsUser) {
    this._runAsUser.internalValue = value;
  }
  public resetRunAsUser() {
    this._runAsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser.internalValue;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new MutationPolicySpecInputPodSecuritySeLinuxOptionsList(this, "se_linux_options", false);
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: MutationPolicySpecInputPodSecuritySeLinuxOptions[] | cdktf.IResolvable) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups = new MutationPolicySpecInputPodSecuritySupplementalGroupsOutputReference(this, "supplemental_groups");
  public get supplementalGroups() {
    return this._supplementalGroups;
  }
  public putSupplementalGroups(value: MutationPolicySpecInputPodSecuritySupplementalGroups) {
    this._supplementalGroups.internalValue = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups.internalValue;
  }
}
export interface MutationPolicySpecInput {
  /**
  * annotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#annotation MutationPolicy#annotation}
  */
  readonly annotation?: MutationPolicySpecInputAnnotation;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#label MutationPolicy#label}
  */
  readonly label?: MutationPolicySpecInputLabel;
  /**
  * pod_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#pod_security MutationPolicy#pod_security}
  */
  readonly podSecurity?: MutationPolicySpecInputPodSecurity;
}

export function mutationPolicySpecInputToTerraform(struct?: MutationPolicySpecInputOutputReference | MutationPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: mutationPolicySpecInputAnnotationToTerraform(struct!.annotation),
    label: mutationPolicySpecInputLabelToTerraform(struct!.label),
    pod_security: mutationPolicySpecInputPodSecurityToTerraform(struct!.podSecurity),
  }
}


export function mutationPolicySpecInputToHclTerraform(struct?: MutationPolicySpecInputOutputReference | MutationPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: mutationPolicySpecInputAnnotationToHclTerraform(struct!.annotation),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputAnnotationList",
    },
    label: {
      value: mutationPolicySpecInputLabelToHclTerraform(struct!.label),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputLabelList",
    },
    pod_security: {
      value: mutationPolicySpecInputPodSecurityToHclTerraform(struct!.podSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputPodSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation?.internalValue;
    }
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._podSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurity = this._podSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotation.internalValue = undefined;
      this._label.internalValue = undefined;
      this._podSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotation.internalValue = value.annotation;
      this._label.internalValue = value.label;
      this._podSecurity.internalValue = value.podSecurity;
    }
  }

  // annotation - computed: false, optional: true, required: false
  private _annotation = new MutationPolicySpecInputAnnotationOutputReference(this, "annotation");
  public get annotation() {
    return this._annotation;
  }
  public putAnnotation(value: MutationPolicySpecInputAnnotation) {
    this._annotation.internalValue = value;
  }
  public resetAnnotation() {
    this._annotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new MutationPolicySpecInputLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }
  public putLabel(value: MutationPolicySpecInputLabel) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // pod_security - computed: false, optional: true, required: false
  private _podSecurity = new MutationPolicySpecInputPodSecurityOutputReference(this, "pod_security");
  public get podSecurity() {
    return this._podSecurity;
  }
  public putPodSecurity(value: MutationPolicySpecInputPodSecurity) {
    this._podSecurity.internalValue = value;
  }
  public resetPodSecurity() {
    this._podSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityInput() {
    return this._podSecurity.internalValue;
  }
}
export interface MutationPolicySpecNamespaceSelectorMatchExpressions {
  /**
  * Key is the label key that the selector applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#key MutationPolicy#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#operator MutationPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#values MutationPolicy#values}
  */
  readonly values: string[];
}

export function mutationPolicySpecNamespaceSelectorMatchExpressionsToTerraform(struct?: MutationPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function mutationPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: MutationPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class MutationPolicySpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MutationPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MutationPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class MutationPolicySpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : MutationPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): MutationPolicySpecNamespaceSelectorMatchExpressionsOutputReference {
    return new MutationPolicySpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MutationPolicySpecNamespaceSelector {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#match_expressions MutationPolicy#match_expressions}
  */
  readonly matchExpressions: MutationPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function mutationPolicySpecNamespaceSelectorToTerraform(struct?: MutationPolicySpecNamespaceSelectorOutputReference | MutationPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(mutationPolicySpecNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function mutationPolicySpecNamespaceSelectorToHclTerraform(struct?: MutationPolicySpecNamespaceSelectorOutputReference | MutationPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(mutationPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpecNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MutationPolicySpecNamespaceSelector | undefined) {
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
  private _matchExpressions = new MutationPolicySpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: MutationPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface MutationPolicySpec {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#input MutationPolicy#input}
  */
  readonly input: MutationPolicySpecInput;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#namespace_selector MutationPolicy#namespace_selector}
  */
  readonly namespaceSelector?: MutationPolicySpecNamespaceSelector;
}

export function mutationPolicySpecToTerraform(struct?: MutationPolicySpecOutputReference | MutationPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: mutationPolicySpecInputToTerraform(struct!.input),
    namespace_selector: mutationPolicySpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function mutationPolicySpecToHclTerraform(struct?: MutationPolicySpecOutputReference | MutationPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: mutationPolicySpecInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecInputList",
    },
    namespace_selector: {
      value: mutationPolicySpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "MutationPolicySpecNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MutationPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MutationPolicySpec | undefined {
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

  public set internalValue(value: MutationPolicySpec | undefined) {
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
  private _input = new MutationPolicySpecInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: MutationPolicySpecInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new MutationPolicySpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: MutationPolicySpecNamespaceSelector) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy tanzu-mission-control_mutation_policy}
*/
export class MutationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_mutation_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MutationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MutationPolicy to import
  * @param importFromId The id of the existing MutationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MutationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_mutation_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/mutation_policy tanzu-mission-control_mutation_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MutationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MutationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_mutation_policy',
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
  private _meta = new MutationPolicyMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: MutationPolicyMeta) {
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
  private _scope = new MutationPolicyScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: MutationPolicyScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new MutationPolicySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: MutationPolicySpec) {
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
      meta: mutationPolicyMetaToTerraform(this._meta.internalValue),
      scope: mutationPolicyScopeToTerraform(this._scope.internalValue),
      spec: mutationPolicySpecToTerraform(this._spec.internalValue),
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
        value: mutationPolicyMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MutationPolicyMetaList",
      },
      scope: {
        value: mutationPolicyScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MutationPolicyScopeList",
      },
      spec: {
        value: mutationPolicySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MutationPolicySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
