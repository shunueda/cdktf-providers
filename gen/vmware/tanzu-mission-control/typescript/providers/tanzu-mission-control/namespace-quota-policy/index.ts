// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceQuotaPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#id NamespaceQuotaPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the namespace quota policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#name NamespaceQuotaPolicy#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#meta NamespaceQuotaPolicy#meta}
  */
  readonly meta?: NamespaceQuotaPolicyMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#scope NamespaceQuotaPolicy#scope}
  */
  readonly scope: NamespaceQuotaPolicyScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#spec NamespaceQuotaPolicy#spec}
  */
  readonly spec: NamespaceQuotaPolicySpec;
}
export interface NamespaceQuotaPolicyMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#annotations NamespaceQuotaPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#description NamespaceQuotaPolicy#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#labels NamespaceQuotaPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function namespaceQuotaPolicyMetaToTerraform(struct?: NamespaceQuotaPolicyMetaOutputReference | NamespaceQuotaPolicyMeta): any {
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


export function namespaceQuotaPolicyMetaToHclTerraform(struct?: NamespaceQuotaPolicyMetaOutputReference | NamespaceQuotaPolicyMeta): any {
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

export class NamespaceQuotaPolicyMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicyMeta | undefined {
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

  public set internalValue(value: NamespaceQuotaPolicyMeta | undefined) {
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
export interface NamespaceQuotaPolicyScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#management_cluster_name NamespaceQuotaPolicy#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#name NamespaceQuotaPolicy#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#provisioner_name NamespaceQuotaPolicy#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function namespaceQuotaPolicyScopeClusterToTerraform(struct?: NamespaceQuotaPolicyScopeClusterOutputReference | NamespaceQuotaPolicyScopeCluster): any {
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


export function namespaceQuotaPolicyScopeClusterToHclTerraform(struct?: NamespaceQuotaPolicyScopeClusterOutputReference | NamespaceQuotaPolicyScopeCluster): any {
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

export class NamespaceQuotaPolicyScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicyScopeCluster | undefined {
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

  public set internalValue(value: NamespaceQuotaPolicyScopeCluster | undefined) {
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
export interface NamespaceQuotaPolicyScopeClusterGroup {
  /**
  * Name of this cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#cluster_group NamespaceQuotaPolicy#cluster_group}
  */
  readonly clusterGroup: string;
}

export function namespaceQuotaPolicyScopeClusterGroupToTerraform(struct?: NamespaceQuotaPolicyScopeClusterGroupOutputReference | NamespaceQuotaPolicyScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
  }
}


export function namespaceQuotaPolicyScopeClusterGroupToHclTerraform(struct?: NamespaceQuotaPolicyScopeClusterGroupOutputReference | NamespaceQuotaPolicyScopeClusterGroup): any {
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

export class NamespaceQuotaPolicyScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicyScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicyScopeClusterGroup | undefined) {
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
export interface NamespaceQuotaPolicyScopeOrganization {
  /**
  * ID of this organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#organization NamespaceQuotaPolicy#organization}
  */
  readonly organization: string;
}

export function namespaceQuotaPolicyScopeOrganizationToTerraform(struct?: NamespaceQuotaPolicyScopeOrganizationOutputReference | NamespaceQuotaPolicyScopeOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
  }
}


export function namespaceQuotaPolicyScopeOrganizationToHclTerraform(struct?: NamespaceQuotaPolicyScopeOrganizationOutputReference | NamespaceQuotaPolicyScopeOrganization): any {
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

export class NamespaceQuotaPolicyScopeOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicyScopeOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicyScopeOrganization | undefined) {
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
export interface NamespaceQuotaPolicyScopeWorkspace {
  /**
  * Name of this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#workspace NamespaceQuotaPolicy#workspace}
  */
  readonly workspace: string;
}

export function namespaceQuotaPolicyScopeWorkspaceToTerraform(struct?: NamespaceQuotaPolicyScopeWorkspaceOutputReference | NamespaceQuotaPolicyScopeWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function namespaceQuotaPolicyScopeWorkspaceToHclTerraform(struct?: NamespaceQuotaPolicyScopeWorkspaceOutputReference | NamespaceQuotaPolicyScopeWorkspace): any {
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

export class NamespaceQuotaPolicyScopeWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicyScopeWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicyScopeWorkspace | undefined) {
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
export interface NamespaceQuotaPolicyScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#cluster NamespaceQuotaPolicy#cluster}
  */
  readonly cluster?: NamespaceQuotaPolicyScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#cluster_group NamespaceQuotaPolicy#cluster_group}
  */
  readonly clusterGroup?: NamespaceQuotaPolicyScopeClusterGroup;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#organization NamespaceQuotaPolicy#organization}
  */
  readonly organization?: NamespaceQuotaPolicyScopeOrganization;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#workspace NamespaceQuotaPolicy#workspace}
  */
  readonly workspace?: NamespaceQuotaPolicyScopeWorkspace;
}

export function namespaceQuotaPolicyScopeToTerraform(struct?: NamespaceQuotaPolicyScopeOutputReference | NamespaceQuotaPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: namespaceQuotaPolicyScopeClusterToTerraform(struct!.cluster),
    cluster_group: namespaceQuotaPolicyScopeClusterGroupToTerraform(struct!.clusterGroup),
    organization: namespaceQuotaPolicyScopeOrganizationToTerraform(struct!.organization),
    workspace: namespaceQuotaPolicyScopeWorkspaceToTerraform(struct!.workspace),
  }
}


export function namespaceQuotaPolicyScopeToHclTerraform(struct?: NamespaceQuotaPolicyScopeOutputReference | NamespaceQuotaPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: namespaceQuotaPolicyScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicyScopeClusterList",
    },
    cluster_group: {
      value: namespaceQuotaPolicyScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicyScopeClusterGroupList",
    },
    organization: {
      value: namespaceQuotaPolicyScopeOrganizationToHclTerraform(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicyScopeOrganizationList",
    },
    workspace: {
      value: namespaceQuotaPolicyScopeWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicyScopeWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceQuotaPolicyScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicyScope | undefined {
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

  public set internalValue(value: NamespaceQuotaPolicyScope | undefined) {
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
  private _cluster = new NamespaceQuotaPolicyScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: NamespaceQuotaPolicyScopeCluster) {
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
  private _clusterGroup = new NamespaceQuotaPolicyScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: NamespaceQuotaPolicyScopeClusterGroup) {
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
  private _organization = new NamespaceQuotaPolicyScopeOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: NamespaceQuotaPolicyScopeOrganization) {
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
  private _workspace = new NamespaceQuotaPolicyScopeWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: NamespaceQuotaPolicyScopeWorkspace) {
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
export interface NamespaceQuotaPolicySpecInputCustom {
  /**
  * The sum of CPU limits across all pods in a non-terminal state cannot exceed this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#limits_cpu NamespaceQuotaPolicy#limits_cpu}
  */
  readonly limitsCpu?: string;
  /**
  * The sum of memory limits across all pods in a non-terminal state cannot exceed this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#limits_memory NamespaceQuotaPolicy#limits_memory}
  */
  readonly limitsMemory?: string;
  /**
  * The total number of PersistentVolumeClaims that can exist in a namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#persistent_volume_claims NamespaceQuotaPolicy#persistent_volume_claims}
  */
  readonly persistentVolumeClaims?: number;
  /**
  * Across all persistent volume claims associated with each storage class, the total number of persistent volume claims that can exist in the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#persistent_volume_claims_per_class NamespaceQuotaPolicy#persistent_volume_claims_per_class}
  */
  readonly persistentVolumeClaimsPerClass?: { [key: string]: number };
  /**
  * The sum of CPU requests across all pods in a non-terminal state cannot exceed this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#requests_cpu NamespaceQuotaPolicy#requests_cpu}
  */
  readonly requestsCpu?: string;
  /**
  * The sum of memory requests across all pods in a non-terminal state cannot exceed this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#requests_memory NamespaceQuotaPolicy#requests_memory}
  */
  readonly requestsMemory?: string;
  /**
  * The sum of storage requests across all persistent volume claims cannot exceed this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#requests_storage NamespaceQuotaPolicy#requests_storage}
  */
  readonly requestsStorage?: string;
  /**
  * Across all persistent volume claims associated with each storage class, the sum of storage requests cannot exceed this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#requests_storage_per_class NamespaceQuotaPolicy#requests_storage_per_class}
  */
  readonly requestsStoragePerClass?: { [key: string]: string };
  /**
  * The total number of Services of the given type that can exist in a namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#resource_counts NamespaceQuotaPolicy#resource_counts}
  */
  readonly resourceCounts?: { [key: string]: number };
}

export function namespaceQuotaPolicySpecInputCustomToTerraform(struct?: NamespaceQuotaPolicySpecInputCustomOutputReference | NamespaceQuotaPolicySpecInputCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits_cpu: cdktf.stringToTerraform(struct!.limitsCpu),
    limits_memory: cdktf.stringToTerraform(struct!.limitsMemory),
    persistent_volume_claims: cdktf.numberToTerraform(struct!.persistentVolumeClaims),
    persistent_volume_claims_per_class: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.persistentVolumeClaimsPerClass),
    requests_cpu: cdktf.stringToTerraform(struct!.requestsCpu),
    requests_memory: cdktf.stringToTerraform(struct!.requestsMemory),
    requests_storage: cdktf.stringToTerraform(struct!.requestsStorage),
    requests_storage_per_class: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestsStoragePerClass),
    resource_counts: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.resourceCounts),
  }
}


export function namespaceQuotaPolicySpecInputCustomToHclTerraform(struct?: NamespaceQuotaPolicySpecInputCustomOutputReference | NamespaceQuotaPolicySpecInputCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitsCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limits_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claims: {
      value: cdktf.numberToHclTerraform(struct!.persistentVolumeClaims),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_volume_claims_per_class: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.persistentVolumeClaimsPerClass),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    requests_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestsCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_storage: {
      value: cdktf.stringToHclTerraform(struct!.requestsStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_storage_per_class: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestsStoragePerClass),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_counts: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.resourceCounts),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceQuotaPolicySpecInputCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpecInputCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitsCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitsCpu = this._limitsCpu;
    }
    if (this._limitsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitsMemory = this._limitsMemory;
    }
    if (this._persistentVolumeClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaims = this._persistentVolumeClaims;
    }
    if (this._persistentVolumeClaimsPerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaimsPerClass = this._persistentVolumeClaimsPerClass;
    }
    if (this._requestsCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsCpu = this._requestsCpu;
    }
    if (this._requestsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsMemory = this._requestsMemory;
    }
    if (this._requestsStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsStorage = this._requestsStorage;
    }
    if (this._requestsStoragePerClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsStoragePerClass = this._requestsStoragePerClass;
    }
    if (this._resourceCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCounts = this._resourceCounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicySpecInputCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limitsCpu = undefined;
      this._limitsMemory = undefined;
      this._persistentVolumeClaims = undefined;
      this._persistentVolumeClaimsPerClass = undefined;
      this._requestsCpu = undefined;
      this._requestsMemory = undefined;
      this._requestsStorage = undefined;
      this._requestsStoragePerClass = undefined;
      this._resourceCounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limitsCpu = value.limitsCpu;
      this._limitsMemory = value.limitsMemory;
      this._persistentVolumeClaims = value.persistentVolumeClaims;
      this._persistentVolumeClaimsPerClass = value.persistentVolumeClaimsPerClass;
      this._requestsCpu = value.requestsCpu;
      this._requestsMemory = value.requestsMemory;
      this._requestsStorage = value.requestsStorage;
      this._requestsStoragePerClass = value.requestsStoragePerClass;
      this._resourceCounts = value.resourceCounts;
    }
  }

  // limits_cpu - computed: false, optional: true, required: false
  private _limitsCpu?: string; 
  public get limitsCpu() {
    return this.getStringAttribute('limits_cpu');
  }
  public set limitsCpu(value: string) {
    this._limitsCpu = value;
  }
  public resetLimitsCpu() {
    this._limitsCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsCpuInput() {
    return this._limitsCpu;
  }

  // limits_memory - computed: false, optional: true, required: false
  private _limitsMemory?: string; 
  public get limitsMemory() {
    return this.getStringAttribute('limits_memory');
  }
  public set limitsMemory(value: string) {
    this._limitsMemory = value;
  }
  public resetLimitsMemory() {
    this._limitsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsMemoryInput() {
    return this._limitsMemory;
  }

  // persistent_volume_claims - computed: false, optional: true, required: false
  private _persistentVolumeClaims?: number; 
  public get persistentVolumeClaims() {
    return this.getNumberAttribute('persistent_volume_claims');
  }
  public set persistentVolumeClaims(value: number) {
    this._persistentVolumeClaims = value;
  }
  public resetPersistentVolumeClaims() {
    this._persistentVolumeClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimsInput() {
    return this._persistentVolumeClaims;
  }

  // persistent_volume_claims_per_class - computed: false, optional: true, required: false
  private _persistentVolumeClaimsPerClass?: { [key: string]: number }; 
  public get persistentVolumeClaimsPerClass() {
    return this.getNumberMapAttribute('persistent_volume_claims_per_class');
  }
  public set persistentVolumeClaimsPerClass(value: { [key: string]: number }) {
    this._persistentVolumeClaimsPerClass = value;
  }
  public resetPersistentVolumeClaimsPerClass() {
    this._persistentVolumeClaimsPerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimsPerClassInput() {
    return this._persistentVolumeClaimsPerClass;
  }

  // requests_cpu - computed: false, optional: true, required: false
  private _requestsCpu?: string; 
  public get requestsCpu() {
    return this.getStringAttribute('requests_cpu');
  }
  public set requestsCpu(value: string) {
    this._requestsCpu = value;
  }
  public resetRequestsCpu() {
    this._requestsCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsCpuInput() {
    return this._requestsCpu;
  }

  // requests_memory - computed: false, optional: true, required: false
  private _requestsMemory?: string; 
  public get requestsMemory() {
    return this.getStringAttribute('requests_memory');
  }
  public set requestsMemory(value: string) {
    this._requestsMemory = value;
  }
  public resetRequestsMemory() {
    this._requestsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMemoryInput() {
    return this._requestsMemory;
  }

  // requests_storage - computed: false, optional: true, required: false
  private _requestsStorage?: string; 
  public get requestsStorage() {
    return this.getStringAttribute('requests_storage');
  }
  public set requestsStorage(value: string) {
    this._requestsStorage = value;
  }
  public resetRequestsStorage() {
    this._requestsStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsStorageInput() {
    return this._requestsStorage;
  }

  // requests_storage_per_class - computed: false, optional: true, required: false
  private _requestsStoragePerClass?: { [key: string]: string }; 
  public get requestsStoragePerClass() {
    return this.getStringMapAttribute('requests_storage_per_class');
  }
  public set requestsStoragePerClass(value: { [key: string]: string }) {
    this._requestsStoragePerClass = value;
  }
  public resetRequestsStoragePerClass() {
    this._requestsStoragePerClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsStoragePerClassInput() {
    return this._requestsStoragePerClass;
  }

  // resource_counts - computed: false, optional: true, required: false
  private _resourceCounts?: { [key: string]: number }; 
  public get resourceCounts() {
    return this.getNumberMapAttribute('resource_counts');
  }
  public set resourceCounts(value: { [key: string]: number }) {
    this._resourceCounts = value;
  }
  public resetResourceCounts() {
    this._resourceCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCountsInput() {
    return this._resourceCounts;
  }
}
export interface NamespaceQuotaPolicySpecInputLarge {
}

export function namespaceQuotaPolicySpecInputLargeToTerraform(struct?: NamespaceQuotaPolicySpecInputLargeOutputReference | NamespaceQuotaPolicySpecInputLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function namespaceQuotaPolicySpecInputLargeToHclTerraform(struct?: NamespaceQuotaPolicySpecInputLargeOutputReference | NamespaceQuotaPolicySpecInputLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NamespaceQuotaPolicySpecInputLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpecInputLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicySpecInputLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NamespaceQuotaPolicySpecInputMedium {
}

export function namespaceQuotaPolicySpecInputMediumToTerraform(struct?: NamespaceQuotaPolicySpecInputMediumOutputReference | NamespaceQuotaPolicySpecInputMedium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function namespaceQuotaPolicySpecInputMediumToHclTerraform(struct?: NamespaceQuotaPolicySpecInputMediumOutputReference | NamespaceQuotaPolicySpecInputMedium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NamespaceQuotaPolicySpecInputMediumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpecInputMedium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicySpecInputMedium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NamespaceQuotaPolicySpecInputSmall {
}

export function namespaceQuotaPolicySpecInputSmallToTerraform(struct?: NamespaceQuotaPolicySpecInputSmallOutputReference | NamespaceQuotaPolicySpecInputSmall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function namespaceQuotaPolicySpecInputSmallToHclTerraform(struct?: NamespaceQuotaPolicySpecInputSmallOutputReference | NamespaceQuotaPolicySpecInputSmall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NamespaceQuotaPolicySpecInputSmallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpecInputSmall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicySpecInputSmall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NamespaceQuotaPolicySpecInput {
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#custom NamespaceQuotaPolicy#custom}
  */
  readonly custom?: NamespaceQuotaPolicySpecInputCustom;
  /**
  * large block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#large NamespaceQuotaPolicy#large}
  */
  readonly large?: NamespaceQuotaPolicySpecInputLarge;
  /**
  * medium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#medium NamespaceQuotaPolicy#medium}
  */
  readonly medium?: NamespaceQuotaPolicySpecInputMedium;
  /**
  * small block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#small NamespaceQuotaPolicy#small}
  */
  readonly small?: NamespaceQuotaPolicySpecInputSmall;
}

export function namespaceQuotaPolicySpecInputToTerraform(struct?: NamespaceQuotaPolicySpecInputOutputReference | NamespaceQuotaPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: namespaceQuotaPolicySpecInputCustomToTerraform(struct!.custom),
    large: namespaceQuotaPolicySpecInputLargeToTerraform(struct!.large),
    medium: namespaceQuotaPolicySpecInputMediumToTerraform(struct!.medium),
    small: namespaceQuotaPolicySpecInputSmallToTerraform(struct!.small),
  }
}


export function namespaceQuotaPolicySpecInputToHclTerraform(struct?: NamespaceQuotaPolicySpecInputOutputReference | NamespaceQuotaPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: namespaceQuotaPolicySpecInputCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecInputCustomList",
    },
    large: {
      value: namespaceQuotaPolicySpecInputLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecInputLargeList",
    },
    medium: {
      value: namespaceQuotaPolicySpecInputMediumToHclTerraform(struct!.medium),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecInputMediumList",
    },
    small: {
      value: namespaceQuotaPolicySpecInputSmallToHclTerraform(struct!.small),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecInputSmallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceQuotaPolicySpecInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpecInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._large?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large?.internalValue;
    }
    if (this._medium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium?.internalValue;
    }
    if (this._small?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.small = this._small?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicySpecInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._custom.internalValue = undefined;
      this._large.internalValue = undefined;
      this._medium.internalValue = undefined;
      this._small.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._custom.internalValue = value.custom;
      this._large.internalValue = value.large;
      this._medium.internalValue = value.medium;
      this._small.internalValue = value.small;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new NamespaceQuotaPolicySpecInputCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: NamespaceQuotaPolicySpecInputCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // large - computed: false, optional: true, required: false
  private _large = new NamespaceQuotaPolicySpecInputLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: NamespaceQuotaPolicySpecInputLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // medium - computed: false, optional: true, required: false
  private _medium = new NamespaceQuotaPolicySpecInputMediumOutputReference(this, "medium");
  public get medium() {
    return this._medium;
  }
  public putMedium(value: NamespaceQuotaPolicySpecInputMedium) {
    this._medium.internalValue = value;
  }
  public resetMedium() {
    this._medium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium.internalValue;
  }

  // small - computed: false, optional: true, required: false
  private _small = new NamespaceQuotaPolicySpecInputSmallOutputReference(this, "small");
  public get small() {
    return this._small;
  }
  public putSmall(value: NamespaceQuotaPolicySpecInputSmall) {
    this._small.internalValue = value;
  }
  public resetSmall() {
    this._small.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallInput() {
    return this._small.internalValue;
  }
}
export interface NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions {
  /**
  * Key is the label key that the selector applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#key NamespaceQuotaPolicy#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#operator NamespaceQuotaPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#values NamespaceQuotaPolicy#values}
  */
  readonly values: string[];
}

export function namespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsToTerraform(struct?: NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function namespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsOutputReference {
    return new NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceQuotaPolicySpecNamespaceSelector {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#match_expressions NamespaceQuotaPolicy#match_expressions}
  */
  readonly matchExpressions: NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function namespaceQuotaPolicySpecNamespaceSelectorToTerraform(struct?: NamespaceQuotaPolicySpecNamespaceSelectorOutputReference | NamespaceQuotaPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(namespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function namespaceQuotaPolicySpecNamespaceSelectorToHclTerraform(struct?: NamespaceQuotaPolicySpecNamespaceSelectorOutputReference | NamespaceQuotaPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(namespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceQuotaPolicySpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpecNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceQuotaPolicySpecNamespaceSelector | undefined) {
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
  private _matchExpressions = new NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NamespaceQuotaPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NamespaceQuotaPolicySpec {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#input NamespaceQuotaPolicy#input}
  */
  readonly input: NamespaceQuotaPolicySpecInput;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#namespace_selector NamespaceQuotaPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NamespaceQuotaPolicySpecNamespaceSelector;
}

export function namespaceQuotaPolicySpecToTerraform(struct?: NamespaceQuotaPolicySpecOutputReference | NamespaceQuotaPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: namespaceQuotaPolicySpecInputToTerraform(struct!.input),
    namespace_selector: namespaceQuotaPolicySpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function namespaceQuotaPolicySpecToHclTerraform(struct?: NamespaceQuotaPolicySpecOutputReference | NamespaceQuotaPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: namespaceQuotaPolicySpecInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecInputList",
    },
    namespace_selector: {
      value: namespaceQuotaPolicySpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NamespaceQuotaPolicySpecNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceQuotaPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceQuotaPolicySpec | undefined {
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

  public set internalValue(value: NamespaceQuotaPolicySpec | undefined) {
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
  private _input = new NamespaceQuotaPolicySpecInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: NamespaceQuotaPolicySpecInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new NamespaceQuotaPolicySpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: NamespaceQuotaPolicySpecNamespaceSelector) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy tanzu-mission-control_namespace_quota_policy}
*/
export class NamespaceQuotaPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_namespace_quota_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamespaceQuotaPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamespaceQuotaPolicy to import
  * @param importFromId The id of the existing NamespaceQuotaPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamespaceQuotaPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_namespace_quota_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/namespace_quota_policy tanzu-mission-control_namespace_quota_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceQuotaPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceQuotaPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_namespace_quota_policy',
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
  private _meta = new NamespaceQuotaPolicyMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: NamespaceQuotaPolicyMeta) {
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
  private _scope = new NamespaceQuotaPolicyScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: NamespaceQuotaPolicyScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new NamespaceQuotaPolicySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NamespaceQuotaPolicySpec) {
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
      meta: namespaceQuotaPolicyMetaToTerraform(this._meta.internalValue),
      scope: namespaceQuotaPolicyScopeToTerraform(this._scope.internalValue),
      spec: namespaceQuotaPolicySpecToTerraform(this._spec.internalValue),
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
        value: namespaceQuotaPolicyMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceQuotaPolicyMetaList",
      },
      scope: {
        value: namespaceQuotaPolicyScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceQuotaPolicyScopeList",
      },
      spec: {
        value: namespaceQuotaPolicySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceQuotaPolicySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
