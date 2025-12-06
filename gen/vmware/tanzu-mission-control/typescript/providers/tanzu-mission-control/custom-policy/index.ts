// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#id CustomPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the custom policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#name CustomPolicy#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#meta CustomPolicy#meta}
  */
  readonly meta?: CustomPolicyMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#scope CustomPolicy#scope}
  */
  readonly scope: CustomPolicyScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#spec CustomPolicy#spec}
  */
  readonly spec: CustomPolicySpec;
}
export interface CustomPolicyMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#annotations CustomPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#description CustomPolicy#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#labels CustomPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function customPolicyMetaToTerraform(struct?: CustomPolicyMetaOutputReference | CustomPolicyMeta): any {
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


export function customPolicyMetaToHclTerraform(struct?: CustomPolicyMetaOutputReference | CustomPolicyMeta): any {
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

export class CustomPolicyMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyMeta | undefined {
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

  public set internalValue(value: CustomPolicyMeta | undefined) {
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
export interface CustomPolicyScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#management_cluster_name CustomPolicy#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#name CustomPolicy#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#provisioner_name CustomPolicy#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function customPolicyScopeClusterToTerraform(struct?: CustomPolicyScopeClusterOutputReference | CustomPolicyScopeCluster): any {
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


export function customPolicyScopeClusterToHclTerraform(struct?: CustomPolicyScopeClusterOutputReference | CustomPolicyScopeCluster): any {
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

export class CustomPolicyScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyScopeCluster | undefined {
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

  public set internalValue(value: CustomPolicyScopeCluster | undefined) {
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
export interface CustomPolicyScopeClusterGroup {
  /**
  * Name of this cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#cluster_group CustomPolicy#cluster_group}
  */
  readonly clusterGroup: string;
}

export function customPolicyScopeClusterGroupToTerraform(struct?: CustomPolicyScopeClusterGroupOutputReference | CustomPolicyScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
  }
}


export function customPolicyScopeClusterGroupToHclTerraform(struct?: CustomPolicyScopeClusterGroupOutputReference | CustomPolicyScopeClusterGroup): any {
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

export class CustomPolicyScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicyScopeClusterGroup | undefined) {
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
export interface CustomPolicyScopeOrganization {
  /**
  * ID of this organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#organization CustomPolicy#organization}
  */
  readonly organization: string;
}

export function customPolicyScopeOrganizationToTerraform(struct?: CustomPolicyScopeOrganizationOutputReference | CustomPolicyScopeOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
  }
}


export function customPolicyScopeOrganizationToHclTerraform(struct?: CustomPolicyScopeOrganizationOutputReference | CustomPolicyScopeOrganization): any {
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

export class CustomPolicyScopeOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyScopeOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicyScopeOrganization | undefined) {
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
export interface CustomPolicyScopeWorkspace {
  /**
  * Name of this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#workspace CustomPolicy#workspace}
  */
  readonly workspace: string;
}

export function customPolicyScopeWorkspaceToTerraform(struct?: CustomPolicyScopeWorkspaceOutputReference | CustomPolicyScopeWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function customPolicyScopeWorkspaceToHclTerraform(struct?: CustomPolicyScopeWorkspaceOutputReference | CustomPolicyScopeWorkspace): any {
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

export class CustomPolicyScopeWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyScopeWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicyScopeWorkspace | undefined) {
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
export interface CustomPolicyScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#cluster CustomPolicy#cluster}
  */
  readonly cluster?: CustomPolicyScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#cluster_group CustomPolicy#cluster_group}
  */
  readonly clusterGroup?: CustomPolicyScopeClusterGroup;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#organization CustomPolicy#organization}
  */
  readonly organization?: CustomPolicyScopeOrganization;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#workspace CustomPolicy#workspace}
  */
  readonly workspace?: CustomPolicyScopeWorkspace;
}

export function customPolicyScopeToTerraform(struct?: CustomPolicyScopeOutputReference | CustomPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: customPolicyScopeClusterToTerraform(struct!.cluster),
    cluster_group: customPolicyScopeClusterGroupToTerraform(struct!.clusterGroup),
    organization: customPolicyScopeOrganizationToTerraform(struct!.organization),
    workspace: customPolicyScopeWorkspaceToTerraform(struct!.workspace),
  }
}


export function customPolicyScopeToHclTerraform(struct?: CustomPolicyScopeOutputReference | CustomPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: customPolicyScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicyScopeClusterList",
    },
    cluster_group: {
      value: customPolicyScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicyScopeClusterGroupList",
    },
    organization: {
      value: customPolicyScopeOrganizationToHclTerraform(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicyScopeOrganizationList",
    },
    workspace: {
      value: customPolicyScopeWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicyScopeWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicyScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicyScope | undefined {
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

  public set internalValue(value: CustomPolicyScope | undefined) {
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
  private _cluster = new CustomPolicyScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: CustomPolicyScopeCluster) {
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
  private _clusterGroup = new CustomPolicyScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: CustomPolicyScopeClusterGroup) {
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
  private _organization = new CustomPolicyScopeOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: CustomPolicyScopeOrganization) {
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
  private _workspace = new CustomPolicyScopeWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: CustomPolicyScopeWorkspace) {
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
export interface CustomPolicySpecInputCustomTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputCustomTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputCustomTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputCustomTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputCustomTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputCustomTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputCustomTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputCustomTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputCustomTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputCustomTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputCustomTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputCustomTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputCustom {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * JSON encoded template parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#parameters CustomPolicy#parameters}
  */
  readonly parameters?: string;
  /**
  * Name of custom template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#template_name CustomPolicy#template_name}
  */
  readonly templateName: string;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputCustomTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputCustomToTerraform(struct?: CustomPolicySpecInputCustomOutputReference | CustomPolicySpecInputCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputCustomTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputCustomToHclTerraform(struct?: CustomPolicySpecInputCustomOutputReference | CustomPolicySpecInputCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputCustomTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputCustomTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._parameters = undefined;
      this._templateName = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._parameters = value.parameters;
      this._templateName = value.templateName;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputCustomTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputCustomTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcBlockNodeportService {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcBlockNodeportServiceToTerraform(struct?: CustomPolicySpecInputTmcBlockNodeportServiceOutputReference | CustomPolicySpecInputTmcBlockNodeportService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputTmcBlockNodeportServiceToHclTerraform(struct?: CustomPolicySpecInputTmcBlockNodeportServiceOutputReference | CustomPolicySpecInputTmcBlockNodeportService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcBlockNodeportServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputTmcBlockNodeportService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcBlockNodeportService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputTmcBlockNodeportServiceTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcBlockResources {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcBlockResourcesToTerraform(struct?: CustomPolicySpecInputTmcBlockResourcesOutputReference | CustomPolicySpecInputTmcBlockResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputTmcBlockResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcBlockResourcesOutputReference | CustomPolicySpecInputTmcBlockResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcBlockResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputTmcBlockResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcBlockResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputTmcBlockResourcesTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects {
  /**
  * The kind of subject to disallow, can be User/Group/ServiceAccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kind CustomPolicy#kind}
  */
  readonly kind: string;
  /**
  * The name of the subject to disallow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#name CustomPolicy#name}
  */
  readonly name: string;
}

export function customPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsToTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function customPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsToHclTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsOutputReference {
    return new CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters {
  /**
  * disallowed_subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#disallowed_subjects CustomPolicy#disallowed_subjects}
  */
  readonly disallowedSubjects: CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcBlockRolebindingSubjectsParametersToTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disallowed_subjects: cdktf.listMapper(customPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsToTerraform, true)(struct!.disallowedSubjects),
  }
}


export function customPolicySpecInputTmcBlockRolebindingSubjectsParametersToHclTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disallowed_subjects: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsToHclTerraform, true)(struct!.disallowedSubjects),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disallowedSubjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedSubjects = this._disallowedSubjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disallowedSubjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disallowedSubjects.internalValue = value.disallowedSubjects;
    }
  }

  // disallowed_subjects - computed: false, optional: false, required: true
  private _disallowedSubjects = new CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjectsList(this, "disallowed_subjects", false);
  public get disallowedSubjects() {
    return this._disallowedSubjects;
  }
  public putDisallowedSubjects(value: CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersDisallowedSubjects[] | cdktf.IResolvable) {
    this._disallowedSubjects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedSubjectsInput() {
    return this._disallowedSubjects.internalValue;
  }
}

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersOutputReference {
    return new CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcBlockRolebindingSubjects {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#parameters CustomPolicy#parameters}
  */
  readonly parameters: CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters[] | cdktf.IResolvable;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcBlockRolebindingSubjectsToTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsOutputReference | CustomPolicySpecInputTmcBlockRolebindingSubjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    parameters: cdktf.listMapper(customPolicySpecInputTmcBlockRolebindingSubjectsParametersToTerraform, true)(struct!.parameters),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputTmcBlockRolebindingSubjectsToHclTerraform(struct?: CustomPolicySpecInputTmcBlockRolebindingSubjectsOutputReference | CustomPolicySpecInputTmcBlockRolebindingSubjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcBlockRolebindingSubjectsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersList",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcBlockRolebindingSubjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputTmcBlockRolebindingSubjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcBlockRolebindingSubjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._parameters.internalValue = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._parameters.internalValue = value.parameters;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new CustomPolicySpecInputTmcBlockRolebindingSubjectsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: CustomPolicySpecInputTmcBlockRolebindingSubjectsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputTmcBlockRolebindingSubjectsTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInputTmcExternalIpsParameters {
  /**
  * Allowed IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#allowed_ips CustomPolicy#allowed_ips}
  */
  readonly allowedIps: string[];
}

export function customPolicySpecInputTmcExternalIpsParametersToTerraform(struct?: CustomPolicySpecInputTmcExternalIpsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
  }
}


export function customPolicySpecInputTmcExternalIpsParametersToHclTerraform(struct?: CustomPolicySpecInputTmcExternalIpsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcExternalIpsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcExternalIpsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcExternalIpsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIps = value.allowedIps;
    }
  }

  // allowed_ips - computed: false, optional: false, required: true
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }
}

export class CustomPolicySpecInputTmcExternalIpsParametersList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcExternalIpsParameters[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcExternalIpsParametersOutputReference {
    return new CustomPolicySpecInputTmcExternalIpsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputTmcExternalIpsTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputTmcExternalIpsTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcExternalIpsTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcExternalIpsTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcExternalIpsTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputTmcExternalIpsTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcExternalIps {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#parameters CustomPolicy#parameters}
  */
  readonly parameters: CustomPolicySpecInputTmcExternalIpsParameters[] | cdktf.IResolvable;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcExternalIpsToTerraform(struct?: CustomPolicySpecInputTmcExternalIpsOutputReference | CustomPolicySpecInputTmcExternalIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    parameters: cdktf.listMapper(customPolicySpecInputTmcExternalIpsParametersToTerraform, true)(struct!.parameters),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputTmcExternalIpsTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputTmcExternalIpsToHclTerraform(struct?: CustomPolicySpecInputTmcExternalIpsOutputReference | CustomPolicySpecInputTmcExternalIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcExternalIpsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcExternalIpsParametersList",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcExternalIpsTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcExternalIpsTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcExternalIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputTmcExternalIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcExternalIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._parameters.internalValue = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._parameters.internalValue = value.parameters;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new CustomPolicySpecInputTmcExternalIpsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: CustomPolicySpecInputTmcExternalIpsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputTmcExternalIpsTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputTmcExternalIpsTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcHttpsIngress {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcHttpsIngressToTerraform(struct?: CustomPolicySpecInputTmcHttpsIngressOutputReference | CustomPolicySpecInputTmcHttpsIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputTmcHttpsIngressToHclTerraform(struct?: CustomPolicySpecInputTmcHttpsIngressOutputReference | CustomPolicySpecInputTmcHttpsIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcHttpsIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputTmcHttpsIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcHttpsIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputTmcHttpsIngressTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInputTmcRequireLabelsParametersLabels {
  /**
  * The label key to enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#key CustomPolicy#key}
  */
  readonly key: string;
  /**
  * Optional label value to enforce (if left empty, only key will be enforced).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#value CustomPolicy#value}
  */
  readonly value?: string;
}

export function customPolicySpecInputTmcRequireLabelsParametersLabelsToTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsParametersLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function customPolicySpecInputTmcRequireLabelsParametersLabelsToHclTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsParametersLabels | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcRequireLabelsParametersLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcRequireLabelsParametersLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcRequireLabelsParametersLabels | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcRequireLabelsParametersLabelsList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcRequireLabelsParametersLabels[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcRequireLabelsParametersLabelsOutputReference {
    return new CustomPolicySpecInputTmcRequireLabelsParametersLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcRequireLabelsParameters {
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#labels CustomPolicy#labels}
  */
  readonly labels: CustomPolicySpecInputTmcRequireLabelsParametersLabels[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcRequireLabelsParametersToTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(customPolicySpecInputTmcRequireLabelsParametersLabelsToTerraform, true)(struct!.labels),
  }
}


export function customPolicySpecInputTmcRequireLabelsParametersToHclTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcRequireLabelsParametersLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcRequireLabelsParametersLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcRequireLabelsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcRequireLabelsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcRequireLabelsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels.internalValue = value.labels;
    }
  }

  // labels - computed: false, optional: false, required: true
  private _labels = new CustomPolicySpecInputTmcRequireLabelsParametersLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: CustomPolicySpecInputTmcRequireLabelsParametersLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}

export class CustomPolicySpecInputTmcRequireLabelsParametersList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcRequireLabelsParameters[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcRequireLabelsParametersOutputReference {
    return new CustomPolicySpecInputTmcRequireLabelsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources {
  /**
  * APIGroup is a group containing the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#api_groups CustomPolicy#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Kind is the name of the object schema (resource type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#kinds CustomPolicy#kinds}
  */
  readonly kinds: string[];
}

export function customPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesToTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
  }
}


export function customPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesToHclTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources | cdktf.IResolvable): any {
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

export class CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesOutputReference {
    return new CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecInputTmcRequireLabels {
  /**
  * Audit (dry-run).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#audit CustomPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#parameters CustomPolicy#parameters}
  */
  readonly parameters: CustomPolicySpecInputTmcRequireLabelsParameters[] | cdktf.IResolvable;
  /**
  * target_kubernetes_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#target_kubernetes_resources CustomPolicy#target_kubernetes_resources}
  */
  readonly targetKubernetesResources: CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources[] | cdktf.IResolvable;
}

export function customPolicySpecInputTmcRequireLabelsToTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsOutputReference | CustomPolicySpecInputTmcRequireLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    parameters: cdktf.listMapper(customPolicySpecInputTmcRequireLabelsParametersToTerraform, true)(struct!.parameters),
    target_kubernetes_resources: cdktf.listMapper(customPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesToTerraform, true)(struct!.targetKubernetesResources),
  }
}


export function customPolicySpecInputTmcRequireLabelsToHclTerraform(struct?: CustomPolicySpecInputTmcRequireLabelsOutputReference | CustomPolicySpecInputTmcRequireLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcRequireLabelsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcRequireLabelsParametersList",
    },
    target_kubernetes_resources: {
      value: cdktf.listMapperHcl(customPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesToHclTerraform, true)(struct!.targetKubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputTmcRequireLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInputTmcRequireLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._targetKubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKubernetesResources = this._targetKubernetesResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInputTmcRequireLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._parameters.internalValue = undefined;
      this._targetKubernetesResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._parameters.internalValue = value.parameters;
      this._targetKubernetesResources.internalValue = value.targetKubernetesResources;
    }
  }

  // audit - computed: false, optional: true, required: false
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  public resetAudit() {
    this._audit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new CustomPolicySpecInputTmcRequireLabelsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: CustomPolicySpecInputTmcRequireLabelsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // target_kubernetes_resources - computed: false, optional: false, required: true
  private _targetKubernetesResources = new CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResourcesList(this, "target_kubernetes_resources", false);
  public get targetKubernetesResources() {
    return this._targetKubernetesResources;
  }
  public putTargetKubernetesResources(value: CustomPolicySpecInputTmcRequireLabelsTargetKubernetesResources[] | cdktf.IResolvable) {
    this._targetKubernetesResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKubernetesResourcesInput() {
    return this._targetKubernetesResources.internalValue;
  }
}
export interface CustomPolicySpecInput {
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#custom CustomPolicy#custom}
  */
  readonly custom?: CustomPolicySpecInputCustom;
  /**
  * tmc_block_nodeport_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#tmc_block_nodeport_service CustomPolicy#tmc_block_nodeport_service}
  */
  readonly tmcBlockNodeportService?: CustomPolicySpecInputTmcBlockNodeportService;
  /**
  * tmc_block_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#tmc_block_resources CustomPolicy#tmc_block_resources}
  */
  readonly tmcBlockResources?: CustomPolicySpecInputTmcBlockResources;
  /**
  * tmc_block_rolebinding_subjects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#tmc_block_rolebinding_subjects CustomPolicy#tmc_block_rolebinding_subjects}
  */
  readonly tmcBlockRolebindingSubjects?: CustomPolicySpecInputTmcBlockRolebindingSubjects;
  /**
  * tmc_external_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#tmc_external_ips CustomPolicy#tmc_external_ips}
  */
  readonly tmcExternalIps?: CustomPolicySpecInputTmcExternalIps;
  /**
  * tmc_https_ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#tmc_https_ingress CustomPolicy#tmc_https_ingress}
  */
  readonly tmcHttpsIngress?: CustomPolicySpecInputTmcHttpsIngress;
  /**
  * tmc_require_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#tmc_require_labels CustomPolicy#tmc_require_labels}
  */
  readonly tmcRequireLabels?: CustomPolicySpecInputTmcRequireLabels;
}

export function customPolicySpecInputToTerraform(struct?: CustomPolicySpecInputOutputReference | CustomPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: customPolicySpecInputCustomToTerraform(struct!.custom),
    tmc_block_nodeport_service: customPolicySpecInputTmcBlockNodeportServiceToTerraform(struct!.tmcBlockNodeportService),
    tmc_block_resources: customPolicySpecInputTmcBlockResourcesToTerraform(struct!.tmcBlockResources),
    tmc_block_rolebinding_subjects: customPolicySpecInputTmcBlockRolebindingSubjectsToTerraform(struct!.tmcBlockRolebindingSubjects),
    tmc_external_ips: customPolicySpecInputTmcExternalIpsToTerraform(struct!.tmcExternalIps),
    tmc_https_ingress: customPolicySpecInputTmcHttpsIngressToTerraform(struct!.tmcHttpsIngress),
    tmc_require_labels: customPolicySpecInputTmcRequireLabelsToTerraform(struct!.tmcRequireLabels),
  }
}


export function customPolicySpecInputToHclTerraform(struct?: CustomPolicySpecInputOutputReference | CustomPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: customPolicySpecInputCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputCustomList",
    },
    tmc_block_nodeport_service: {
      value: customPolicySpecInputTmcBlockNodeportServiceToHclTerraform(struct!.tmcBlockNodeportService),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockNodeportServiceList",
    },
    tmc_block_resources: {
      value: customPolicySpecInputTmcBlockResourcesToHclTerraform(struct!.tmcBlockResources),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockResourcesList",
    },
    tmc_block_rolebinding_subjects: {
      value: customPolicySpecInputTmcBlockRolebindingSubjectsToHclTerraform(struct!.tmcBlockRolebindingSubjects),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcBlockRolebindingSubjectsList",
    },
    tmc_external_ips: {
      value: customPolicySpecInputTmcExternalIpsToHclTerraform(struct!.tmcExternalIps),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcExternalIpsList",
    },
    tmc_https_ingress: {
      value: customPolicySpecInputTmcHttpsIngressToHclTerraform(struct!.tmcHttpsIngress),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcHttpsIngressList",
    },
    tmc_require_labels: {
      value: customPolicySpecInputTmcRequireLabelsToHclTerraform(struct!.tmcRequireLabels),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputTmcRequireLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._tmcBlockNodeportService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmcBlockNodeportService = this._tmcBlockNodeportService?.internalValue;
    }
    if (this._tmcBlockResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmcBlockResources = this._tmcBlockResources?.internalValue;
    }
    if (this._tmcBlockRolebindingSubjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmcBlockRolebindingSubjects = this._tmcBlockRolebindingSubjects?.internalValue;
    }
    if (this._tmcExternalIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmcExternalIps = this._tmcExternalIps?.internalValue;
    }
    if (this._tmcHttpsIngress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmcHttpsIngress = this._tmcHttpsIngress?.internalValue;
    }
    if (this._tmcRequireLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmcRequireLabels = this._tmcRequireLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._custom.internalValue = undefined;
      this._tmcBlockNodeportService.internalValue = undefined;
      this._tmcBlockResources.internalValue = undefined;
      this._tmcBlockRolebindingSubjects.internalValue = undefined;
      this._tmcExternalIps.internalValue = undefined;
      this._tmcHttpsIngress.internalValue = undefined;
      this._tmcRequireLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._custom.internalValue = value.custom;
      this._tmcBlockNodeportService.internalValue = value.tmcBlockNodeportService;
      this._tmcBlockResources.internalValue = value.tmcBlockResources;
      this._tmcBlockRolebindingSubjects.internalValue = value.tmcBlockRolebindingSubjects;
      this._tmcExternalIps.internalValue = value.tmcExternalIps;
      this._tmcHttpsIngress.internalValue = value.tmcHttpsIngress;
      this._tmcRequireLabels.internalValue = value.tmcRequireLabels;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new CustomPolicySpecInputCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: CustomPolicySpecInputCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // tmc_block_nodeport_service - computed: false, optional: true, required: false
  private _tmcBlockNodeportService = new CustomPolicySpecInputTmcBlockNodeportServiceOutputReference(this, "tmc_block_nodeport_service");
  public get tmcBlockNodeportService() {
    return this._tmcBlockNodeportService;
  }
  public putTmcBlockNodeportService(value: CustomPolicySpecInputTmcBlockNodeportService) {
    this._tmcBlockNodeportService.internalValue = value;
  }
  public resetTmcBlockNodeportService() {
    this._tmcBlockNodeportService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmcBlockNodeportServiceInput() {
    return this._tmcBlockNodeportService.internalValue;
  }

  // tmc_block_resources - computed: false, optional: true, required: false
  private _tmcBlockResources = new CustomPolicySpecInputTmcBlockResourcesOutputReference(this, "tmc_block_resources");
  public get tmcBlockResources() {
    return this._tmcBlockResources;
  }
  public putTmcBlockResources(value: CustomPolicySpecInputTmcBlockResources) {
    this._tmcBlockResources.internalValue = value;
  }
  public resetTmcBlockResources() {
    this._tmcBlockResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmcBlockResourcesInput() {
    return this._tmcBlockResources.internalValue;
  }

  // tmc_block_rolebinding_subjects - computed: false, optional: true, required: false
  private _tmcBlockRolebindingSubjects = new CustomPolicySpecInputTmcBlockRolebindingSubjectsOutputReference(this, "tmc_block_rolebinding_subjects");
  public get tmcBlockRolebindingSubjects() {
    return this._tmcBlockRolebindingSubjects;
  }
  public putTmcBlockRolebindingSubjects(value: CustomPolicySpecInputTmcBlockRolebindingSubjects) {
    this._tmcBlockRolebindingSubjects.internalValue = value;
  }
  public resetTmcBlockRolebindingSubjects() {
    this._tmcBlockRolebindingSubjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmcBlockRolebindingSubjectsInput() {
    return this._tmcBlockRolebindingSubjects.internalValue;
  }

  // tmc_external_ips - computed: false, optional: true, required: false
  private _tmcExternalIps = new CustomPolicySpecInputTmcExternalIpsOutputReference(this, "tmc_external_ips");
  public get tmcExternalIps() {
    return this._tmcExternalIps;
  }
  public putTmcExternalIps(value: CustomPolicySpecInputTmcExternalIps) {
    this._tmcExternalIps.internalValue = value;
  }
  public resetTmcExternalIps() {
    this._tmcExternalIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmcExternalIpsInput() {
    return this._tmcExternalIps.internalValue;
  }

  // tmc_https_ingress - computed: false, optional: true, required: false
  private _tmcHttpsIngress = new CustomPolicySpecInputTmcHttpsIngressOutputReference(this, "tmc_https_ingress");
  public get tmcHttpsIngress() {
    return this._tmcHttpsIngress;
  }
  public putTmcHttpsIngress(value: CustomPolicySpecInputTmcHttpsIngress) {
    this._tmcHttpsIngress.internalValue = value;
  }
  public resetTmcHttpsIngress() {
    this._tmcHttpsIngress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmcHttpsIngressInput() {
    return this._tmcHttpsIngress.internalValue;
  }

  // tmc_require_labels - computed: false, optional: true, required: false
  private _tmcRequireLabels = new CustomPolicySpecInputTmcRequireLabelsOutputReference(this, "tmc_require_labels");
  public get tmcRequireLabels() {
    return this._tmcRequireLabels;
  }
  public putTmcRequireLabels(value: CustomPolicySpecInputTmcRequireLabels) {
    this._tmcRequireLabels.internalValue = value;
  }
  public resetTmcRequireLabels() {
    this._tmcRequireLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmcRequireLabelsInput() {
    return this._tmcRequireLabels.internalValue;
  }
}
export interface CustomPolicySpecNamespaceSelectorMatchExpressions {
  /**
  * Key is the label key that the selector applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#key CustomPolicy#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#operator CustomPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#values CustomPolicy#values}
  */
  readonly values: string[];
}

export function customPolicySpecNamespaceSelectorMatchExpressionsToTerraform(struct?: CustomPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function customPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: CustomPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class CustomPolicySpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CustomPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class CustomPolicySpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : CustomPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): CustomPolicySpecNamespaceSelectorMatchExpressionsOutputReference {
    return new CustomPolicySpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomPolicySpecNamespaceSelector {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#match_expressions CustomPolicy#match_expressions}
  */
  readonly matchExpressions: CustomPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function customPolicySpecNamespaceSelectorToTerraform(struct?: CustomPolicySpecNamespaceSelectorOutputReference | CustomPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(customPolicySpecNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function customPolicySpecNamespaceSelectorToHclTerraform(struct?: CustomPolicySpecNamespaceSelectorOutputReference | CustomPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(customPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpecNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomPolicySpecNamespaceSelector | undefined) {
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
  private _matchExpressions = new CustomPolicySpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: CustomPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface CustomPolicySpec {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#input CustomPolicy#input}
  */
  readonly input: CustomPolicySpecInput;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#namespace_selector CustomPolicy#namespace_selector}
  */
  readonly namespaceSelector?: CustomPolicySpecNamespaceSelector;
}

export function customPolicySpecToTerraform(struct?: CustomPolicySpecOutputReference | CustomPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: customPolicySpecInputToTerraform(struct!.input),
    namespace_selector: customPolicySpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function customPolicySpecToHclTerraform(struct?: CustomPolicySpecOutputReference | CustomPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: customPolicySpecInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecInputList",
    },
    namespace_selector: {
      value: customPolicySpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CustomPolicySpecNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomPolicySpec | undefined {
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

  public set internalValue(value: CustomPolicySpec | undefined) {
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
  private _input = new CustomPolicySpecInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: CustomPolicySpecInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new CustomPolicySpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: CustomPolicySpecNamespaceSelector) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy tanzu-mission-control_custom_policy}
*/
export class CustomPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_custom_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomPolicy to import
  * @param importFromId The id of the existing CustomPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_custom_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.10/docs/resources/custom_policy tanzu-mission-control_custom_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CustomPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_custom_policy',
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
  private _meta = new CustomPolicyMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: CustomPolicyMeta) {
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
  private _scope = new CustomPolicyScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: CustomPolicyScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CustomPolicySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CustomPolicySpec) {
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
      meta: customPolicyMetaToTerraform(this._meta.internalValue),
      scope: customPolicyScopeToTerraform(this._scope.internalValue),
      spec: customPolicySpecToTerraform(this._spec.internalValue),
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
        value: customPolicyMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomPolicyMetaList",
      },
      scope: {
        value: customPolicyScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomPolicyScopeList",
      },
      spec: {
        value: customPolicySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomPolicySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
