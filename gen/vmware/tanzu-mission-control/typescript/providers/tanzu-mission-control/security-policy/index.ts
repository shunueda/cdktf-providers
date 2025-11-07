// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#id SecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#meta SecurityPolicy#meta}
  */
  readonly meta?: SecurityPolicyMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#scope SecurityPolicy#scope}
  */
  readonly scope: SecurityPolicyScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#spec SecurityPolicy#spec}
  */
  readonly spec: SecurityPolicySpec;
}
export interface SecurityPolicyMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#annotations SecurityPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#description SecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#labels SecurityPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function securityPolicyMetaToTerraform(struct?: SecurityPolicyMetaOutputReference | SecurityPolicyMeta): any {
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


export function securityPolicyMetaToHclTerraform(struct?: SecurityPolicyMetaOutputReference | SecurityPolicyMeta): any {
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

export class SecurityPolicyMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyMeta | undefined {
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

  public set internalValue(value: SecurityPolicyMeta | undefined) {
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
export interface SecurityPolicyScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#management_cluster_name SecurityPolicy#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#provisioner_name SecurityPolicy#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function securityPolicyScopeClusterToTerraform(struct?: SecurityPolicyScopeClusterOutputReference | SecurityPolicyScopeCluster): any {
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


export function securityPolicyScopeClusterToHclTerraform(struct?: SecurityPolicyScopeClusterOutputReference | SecurityPolicyScopeCluster): any {
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

export class SecurityPolicyScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyScopeCluster | undefined {
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

  public set internalValue(value: SecurityPolicyScopeCluster | undefined) {
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
export interface SecurityPolicyScopeClusterGroup {
  /**
  * Name of this cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#cluster_group SecurityPolicy#cluster_group}
  */
  readonly clusterGroup: string;
}

export function securityPolicyScopeClusterGroupToTerraform(struct?: SecurityPolicyScopeClusterGroupOutputReference | SecurityPolicyScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_group: cdktf.stringToTerraform(struct!.clusterGroup),
  }
}


export function securityPolicyScopeClusterGroupToHclTerraform(struct?: SecurityPolicyScopeClusterGroupOutputReference | SecurityPolicyScopeClusterGroup): any {
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

export class SecurityPolicyScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyScopeClusterGroup | undefined) {
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
export interface SecurityPolicyScopeOrganization {
  /**
  * ID of this organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#organization SecurityPolicy#organization}
  */
  readonly organization: string;
}

export function securityPolicyScopeOrganizationToTerraform(struct?: SecurityPolicyScopeOrganizationOutputReference | SecurityPolicyScopeOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization: cdktf.stringToTerraform(struct!.organization),
  }
}


export function securityPolicyScopeOrganizationToHclTerraform(struct?: SecurityPolicyScopeOrganizationOutputReference | SecurityPolicyScopeOrganization): any {
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

export class SecurityPolicyScopeOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyScopeOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyScopeOrganization | undefined) {
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
export interface SecurityPolicyScopeWorkspace {
  /**
  * Name of this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#workspace SecurityPolicy#workspace}
  */
  readonly workspace: string;
}

export function securityPolicyScopeWorkspaceToTerraform(struct?: SecurityPolicyScopeWorkspaceOutputReference | SecurityPolicyScopeWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function securityPolicyScopeWorkspaceToHclTerraform(struct?: SecurityPolicyScopeWorkspaceOutputReference | SecurityPolicyScopeWorkspace): any {
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

export class SecurityPolicyScopeWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyScopeWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyScopeWorkspace | undefined) {
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
export interface SecurityPolicyScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#cluster SecurityPolicy#cluster}
  */
  readonly cluster?: SecurityPolicyScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#cluster_group SecurityPolicy#cluster_group}
  */
  readonly clusterGroup?: SecurityPolicyScopeClusterGroup;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#organization SecurityPolicy#organization}
  */
  readonly organization?: SecurityPolicyScopeOrganization;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#workspace SecurityPolicy#workspace}
  */
  readonly workspace?: SecurityPolicyScopeWorkspace;
}

export function securityPolicyScopeToTerraform(struct?: SecurityPolicyScopeOutputReference | SecurityPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: securityPolicyScopeClusterToTerraform(struct!.cluster),
    cluster_group: securityPolicyScopeClusterGroupToTerraform(struct!.clusterGroup),
    organization: securityPolicyScopeOrganizationToTerraform(struct!.organization),
    workspace: securityPolicyScopeWorkspaceToTerraform(struct!.workspace),
  }
}


export function securityPolicyScopeToHclTerraform(struct?: SecurityPolicyScopeOutputReference | SecurityPolicyScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: securityPolicyScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyScopeClusterList",
    },
    cluster_group: {
      value: securityPolicyScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyScopeClusterGroupList",
    },
    organization: {
      value: securityPolicyScopeOrganizationToHclTerraform(struct!.organization),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyScopeOrganizationList",
    },
    workspace: {
      value: securityPolicyScopeWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyScopeWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyScope | undefined {
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

  public set internalValue(value: SecurityPolicyScope | undefined) {
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
  private _cluster = new SecurityPolicyScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SecurityPolicyScopeCluster) {
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
  private _clusterGroup = new SecurityPolicyScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: SecurityPolicyScopeClusterGroup) {
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
  private _organization = new SecurityPolicyScopeOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: SecurityPolicyScopeOrganization) {
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
  private _workspace = new SecurityPolicyScopeWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: SecurityPolicyScopeWorkspace) {
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
export interface SecurityPolicySpecInputBaseline {
  /**
  * Audit (dry-run)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#audit SecurityPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * Disable native pod security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#disable_native_psp SecurityPolicy#disable_native_psp}
  */
  readonly disableNativePsp?: boolean | cdktf.IResolvable;
}

export function securityPolicySpecInputBaselineToTerraform(struct?: SecurityPolicySpecInputBaselineOutputReference | SecurityPolicySpecInputBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    disable_native_psp: cdktf.booleanToTerraform(struct!.disableNativePsp),
  }
}


export function securityPolicySpecInputBaselineToHclTerraform(struct?: SecurityPolicySpecInputBaselineOutputReference | SecurityPolicySpecInputBaseline): any {
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
    disable_native_psp: {
      value: cdktf.booleanToHclTerraform(struct!.disableNativePsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputBaselineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._disableNativePsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNativePsp = this._disableNativePsp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._disableNativePsp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._disableNativePsp = value.disableNativePsp;
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

  // disable_native_psp - computed: false, optional: true, required: false
  private _disableNativePsp?: boolean | cdktf.IResolvable; 
  public get disableNativePsp() {
    return this.getBooleanAttribute('disable_native_psp');
  }
  public set disableNativePsp(value: boolean | cdktf.IResolvable) {
    this._disableNativePsp = value;
  }
  public resetDisableNativePsp() {
    this._disableNativePsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNativePspInput() {
    return this._disableNativePsp;
  }
}
export interface SecurityPolicySpecInputCustomAllowedHostPaths {
  /**
  * Path prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#path_prefix SecurityPolicy#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Read only flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#read_only SecurityPolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function securityPolicySpecInputCustomAllowedHostPathsToTerraform(struct?: SecurityPolicySpecInputCustomAllowedHostPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function securityPolicySpecInputCustomAllowedHostPathsToHclTerraform(struct?: SecurityPolicySpecInputCustomAllowedHostPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomAllowedHostPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecInputCustomAllowedHostPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomAllowedHostPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathPrefix = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pathPrefix = value.pathPrefix;
      this._readOnly = value.readOnly;
    }
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class SecurityPolicySpecInputCustomAllowedHostPathsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecInputCustomAllowedHostPaths[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecInputCustomAllowedHostPathsOutputReference {
    return new SecurityPolicySpecInputCustomAllowedHostPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecInputCustomAllowedHostPortRange {
  /**
  * Maximum allowed port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#max SecurityPolicy#max}
  */
  readonly max?: number;
  /**
  * Minimum allowed port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#min SecurityPolicy#min}
  */
  readonly min?: number;
}

export function securityPolicySpecInputCustomAllowedHostPortRangeToTerraform(struct?: SecurityPolicySpecInputCustomAllowedHostPortRangeOutputReference | SecurityPolicySpecInputCustomAllowedHostPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function securityPolicySpecInputCustomAllowedHostPortRangeToHclTerraform(struct?: SecurityPolicySpecInputCustomAllowedHostPortRangeOutputReference | SecurityPolicySpecInputCustomAllowedHostPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomAllowedHostPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomAllowedHostPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomAllowedHostPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface SecurityPolicySpecInputCustomAllowedSeLinuxOptions {
  /**
  * SELinux level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#level SecurityPolicy#level}
  */
  readonly level?: string;
  /**
  * SELinux role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#role SecurityPolicy#role}
  */
  readonly role?: string;
  /**
  * SELinux type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type?: string;
  /**
  * SELinux user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#user SecurityPolicy#user}
  */
  readonly user?: string;
}

export function securityPolicySpecInputCustomAllowedSeLinuxOptionsToTerraform(struct?: SecurityPolicySpecInputCustomAllowedSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function securityPolicySpecInputCustomAllowedSeLinuxOptionsToHclTerraform(struct?: SecurityPolicySpecInputCustomAllowedSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SecurityPolicySpecInputCustomAllowedSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecInputCustomAllowedSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SecurityPolicySpecInputCustomAllowedSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
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

export class SecurityPolicySpecInputCustomAllowedSeLinuxOptionsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecInputCustomAllowedSeLinuxOptions[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecInputCustomAllowedSeLinuxOptionsOutputReference {
    return new SecurityPolicySpecInputCustomAllowedSeLinuxOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecInputCustomFsGroupRanges {
  /**
  * Maximum group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#max SecurityPolicy#max}
  */
  readonly max?: number;
  /**
  * Minimum group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#min SecurityPolicy#min}
  */
  readonly min?: number;
}

export function securityPolicySpecInputCustomFsGroupRangesToTerraform(struct?: SecurityPolicySpecInputCustomFsGroupRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function securityPolicySpecInputCustomFsGroupRangesToHclTerraform(struct?: SecurityPolicySpecInputCustomFsGroupRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomFsGroupRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecInputCustomFsGroupRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomFsGroupRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class SecurityPolicySpecInputCustomFsGroupRangesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecInputCustomFsGroupRanges[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecInputCustomFsGroupRangesOutputReference {
    return new SecurityPolicySpecInputCustomFsGroupRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecInputCustomFsGroup {
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#ranges SecurityPolicy#ranges}
  */
  readonly ranges?: SecurityPolicySpecInputCustomFsGroupRanges[] | cdktf.IResolvable;
}

export function securityPolicySpecInputCustomFsGroupToTerraform(struct?: SecurityPolicySpecInputCustomFsGroupOutputReference | SecurityPolicySpecInputCustomFsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    ranges: cdktf.listMapper(securityPolicySpecInputCustomFsGroupRangesToTerraform, true)(struct!.ranges),
  }
}


export function securityPolicySpecInputCustomFsGroupToHclTerraform(struct?: SecurityPolicySpecInputCustomFsGroupOutputReference | SecurityPolicySpecInputCustomFsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ranges: {
      value: cdktf.listMapperHcl(securityPolicySpecInputCustomFsGroupRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomFsGroupRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomFsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomFsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomFsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._ranges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._ranges.internalValue = value.ranges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SecurityPolicySpecInputCustomFsGroupRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SecurityPolicySpecInputCustomFsGroupRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}
export interface SecurityPolicySpecInputCustomLinuxCapabilities {
  /**
  * Allowed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_capabilities SecurityPolicy#allowed_capabilities}
  */
  readonly allowedCapabilities?: string[];
  /**
  * Required drop capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#required_drop_capabilities SecurityPolicy#required_drop_capabilities}
  */
  readonly requiredDropCapabilities?: string[];
}

export function securityPolicySpecInputCustomLinuxCapabilitiesToTerraform(struct?: SecurityPolicySpecInputCustomLinuxCapabilitiesOutputReference | SecurityPolicySpecInputCustomLinuxCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCapabilities),
    required_drop_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredDropCapabilities),
  }
}


export function securityPolicySpecInputCustomLinuxCapabilitiesToHclTerraform(struct?: SecurityPolicySpecInputCustomLinuxCapabilitiesOutputReference | SecurityPolicySpecInputCustomLinuxCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required_drop_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredDropCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomLinuxCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomLinuxCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCapabilities = this._allowedCapabilities;
    }
    if (this._requiredDropCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDropCapabilities = this._requiredDropCapabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomLinuxCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCapabilities = undefined;
      this._requiredDropCapabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCapabilities = value.allowedCapabilities;
      this._requiredDropCapabilities = value.requiredDropCapabilities;
    }
  }

  // allowed_capabilities - computed: false, optional: true, required: false
  private _allowedCapabilities?: string[]; 
  public get allowedCapabilities() {
    return this.getListAttribute('allowed_capabilities');
  }
  public set allowedCapabilities(value: string[]) {
    this._allowedCapabilities = value;
  }
  public resetAllowedCapabilities() {
    this._allowedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCapabilitiesInput() {
    return this._allowedCapabilities;
  }

  // required_drop_capabilities - computed: false, optional: true, required: false
  private _requiredDropCapabilities?: string[]; 
  public get requiredDropCapabilities() {
    return this.getListAttribute('required_drop_capabilities');
  }
  public set requiredDropCapabilities(value: string[]) {
    this._requiredDropCapabilities = value;
  }
  public resetRequiredDropCapabilities() {
    this._requiredDropCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDropCapabilitiesInput() {
    return this._requiredDropCapabilities;
  }
}
export interface SecurityPolicySpecInputCustomRunAsGroupRanges {
  /**
  * Maximum group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#max SecurityPolicy#max}
  */
  readonly max?: number;
  /**
  * Minimum group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#min SecurityPolicy#min}
  */
  readonly min?: number;
}

export function securityPolicySpecInputCustomRunAsGroupRangesToTerraform(struct?: SecurityPolicySpecInputCustomRunAsGroupRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function securityPolicySpecInputCustomRunAsGroupRangesToHclTerraform(struct?: SecurityPolicySpecInputCustomRunAsGroupRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomRunAsGroupRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecInputCustomRunAsGroupRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomRunAsGroupRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class SecurityPolicySpecInputCustomRunAsGroupRangesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecInputCustomRunAsGroupRanges[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecInputCustomRunAsGroupRangesOutputReference {
    return new SecurityPolicySpecInputCustomRunAsGroupRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecInputCustomRunAsGroup {
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#ranges SecurityPolicy#ranges}
  */
  readonly ranges?: SecurityPolicySpecInputCustomRunAsGroupRanges[] | cdktf.IResolvable;
}

export function securityPolicySpecInputCustomRunAsGroupToTerraform(struct?: SecurityPolicySpecInputCustomRunAsGroupOutputReference | SecurityPolicySpecInputCustomRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    ranges: cdktf.listMapper(securityPolicySpecInputCustomRunAsGroupRangesToTerraform, true)(struct!.ranges),
  }
}


export function securityPolicySpecInputCustomRunAsGroupToHclTerraform(struct?: SecurityPolicySpecInputCustomRunAsGroupOutputReference | SecurityPolicySpecInputCustomRunAsGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ranges: {
      value: cdktf.listMapperHcl(securityPolicySpecInputCustomRunAsGroupRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomRunAsGroupRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomRunAsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomRunAsGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomRunAsGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._ranges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._ranges.internalValue = value.ranges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SecurityPolicySpecInputCustomRunAsGroupRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SecurityPolicySpecInputCustomRunAsGroupRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}
export interface SecurityPolicySpecInputCustomRunAsUserRanges {
  /**
  * Maximum user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#max SecurityPolicy#max}
  */
  readonly max?: number;
  /**
  * Minimum user ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#min SecurityPolicy#min}
  */
  readonly min?: number;
}

export function securityPolicySpecInputCustomRunAsUserRangesToTerraform(struct?: SecurityPolicySpecInputCustomRunAsUserRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function securityPolicySpecInputCustomRunAsUserRangesToHclTerraform(struct?: SecurityPolicySpecInputCustomRunAsUserRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomRunAsUserRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecInputCustomRunAsUserRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomRunAsUserRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class SecurityPolicySpecInputCustomRunAsUserRangesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecInputCustomRunAsUserRanges[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecInputCustomRunAsUserRangesOutputReference {
    return new SecurityPolicySpecInputCustomRunAsUserRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecInputCustomRunAsUser {
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#ranges SecurityPolicy#ranges}
  */
  readonly ranges?: SecurityPolicySpecInputCustomRunAsUserRanges[] | cdktf.IResolvable;
}

export function securityPolicySpecInputCustomRunAsUserToTerraform(struct?: SecurityPolicySpecInputCustomRunAsUserOutputReference | SecurityPolicySpecInputCustomRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    ranges: cdktf.listMapper(securityPolicySpecInputCustomRunAsUserRangesToTerraform, true)(struct!.ranges),
  }
}


export function securityPolicySpecInputCustomRunAsUserToHclTerraform(struct?: SecurityPolicySpecInputCustomRunAsUserOutputReference | SecurityPolicySpecInputCustomRunAsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ranges: {
      value: cdktf.listMapperHcl(securityPolicySpecInputCustomRunAsUserRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomRunAsUserRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomRunAsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomRunAsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomRunAsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._ranges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._ranges.internalValue = value.ranges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SecurityPolicySpecInputCustomRunAsUserRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SecurityPolicySpecInputCustomRunAsUserRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}
export interface SecurityPolicySpecInputCustomSeccomp {
  /**
  * Allowed local host files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_localhost_files SecurityPolicy#allowed_localhost_files}
  */
  readonly allowedLocalhostFiles?: string[];
  /**
  * Allowed profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_profiles SecurityPolicy#allowed_profiles}
  */
  readonly allowedProfiles?: string[];
}

export function securityPolicySpecInputCustomSeccompToTerraform(struct?: SecurityPolicySpecInputCustomSeccompOutputReference | SecurityPolicySpecInputCustomSeccomp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_localhost_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedLocalhostFiles),
    allowed_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProfiles),
  }
}


export function securityPolicySpecInputCustomSeccompToHclTerraform(struct?: SecurityPolicySpecInputCustomSeccompOutputReference | SecurityPolicySpecInputCustomSeccomp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_localhost_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedLocalhostFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomSeccompOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomSeccomp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedLocalhostFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedLocalhostFiles = this._allowedLocalhostFiles;
    }
    if (this._allowedProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProfiles = this._allowedProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomSeccomp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedLocalhostFiles = undefined;
      this._allowedProfiles = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedLocalhostFiles = value.allowedLocalhostFiles;
      this._allowedProfiles = value.allowedProfiles;
    }
  }

  // allowed_localhost_files - computed: false, optional: true, required: false
  private _allowedLocalhostFiles?: string[]; 
  public get allowedLocalhostFiles() {
    return this.getListAttribute('allowed_localhost_files');
  }
  public set allowedLocalhostFiles(value: string[]) {
    this._allowedLocalhostFiles = value;
  }
  public resetAllowedLocalhostFiles() {
    this._allowedLocalhostFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLocalhostFilesInput() {
    return this._allowedLocalhostFiles;
  }

  // allowed_profiles - computed: false, optional: true, required: false
  private _allowedProfiles?: string[]; 
  public get allowedProfiles() {
    return this.getListAttribute('allowed_profiles');
  }
  public set allowedProfiles(value: string[]) {
    this._allowedProfiles = value;
  }
  public resetAllowedProfiles() {
    this._allowedProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProfilesInput() {
    return this._allowedProfiles;
  }
}
export interface SecurityPolicySpecInputCustomSupplementalGroupsRanges {
  /**
  * Maximum group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#max SecurityPolicy#max}
  */
  readonly max?: number;
  /**
  * Minimum group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#min SecurityPolicy#min}
  */
  readonly min?: number;
}

export function securityPolicySpecInputCustomSupplementalGroupsRangesToTerraform(struct?: SecurityPolicySpecInputCustomSupplementalGroupsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function securityPolicySpecInputCustomSupplementalGroupsRangesToHclTerraform(struct?: SecurityPolicySpecInputCustomSupplementalGroupsRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomSupplementalGroupsRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecInputCustomSupplementalGroupsRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomSupplementalGroupsRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class SecurityPolicySpecInputCustomSupplementalGroupsRangesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecInputCustomSupplementalGroupsRanges[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecInputCustomSupplementalGroupsRangesOutputReference {
    return new SecurityPolicySpecInputCustomSupplementalGroupsRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecInputCustomSupplementalGroups {
  /**
  * Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: string;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#ranges SecurityPolicy#ranges}
  */
  readonly ranges?: SecurityPolicySpecInputCustomSupplementalGroupsRanges[] | cdktf.IResolvable;
}

export function securityPolicySpecInputCustomSupplementalGroupsToTerraform(struct?: SecurityPolicySpecInputCustomSupplementalGroupsOutputReference | SecurityPolicySpecInputCustomSupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    ranges: cdktf.listMapper(securityPolicySpecInputCustomSupplementalGroupsRangesToTerraform, true)(struct!.ranges),
  }
}


export function securityPolicySpecInputCustomSupplementalGroupsToHclTerraform(struct?: SecurityPolicySpecInputCustomSupplementalGroupsOutputReference | SecurityPolicySpecInputCustomSupplementalGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ranges: {
      value: cdktf.listMapperHcl(securityPolicySpecInputCustomSupplementalGroupsRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomSupplementalGroupsRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomSupplementalGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomSupplementalGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomSupplementalGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
      this._ranges.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
      this._ranges.internalValue = value.ranges;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SecurityPolicySpecInputCustomSupplementalGroupsRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SecurityPolicySpecInputCustomSupplementalGroupsRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}
export interface SecurityPolicySpecInputCustomSysctls {
  /**
  * Forbidden sysctls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#forbidden_sysctls SecurityPolicy#forbidden_sysctls}
  */
  readonly forbiddenSysctls?: string[];
}

export function securityPolicySpecInputCustomSysctlsToTerraform(struct?: SecurityPolicySpecInputCustomSysctlsOutputReference | SecurityPolicySpecInputCustomSysctls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbidden_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forbiddenSysctls),
  }
}


export function securityPolicySpecInputCustomSysctlsToHclTerraform(struct?: SecurityPolicySpecInputCustomSysctlsOutputReference | SecurityPolicySpecInputCustomSysctls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbidden_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forbiddenSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomSysctlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustomSysctls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbiddenSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenSysctls = this._forbiddenSysctls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustomSysctls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forbiddenSysctls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forbiddenSysctls = value.forbiddenSysctls;
    }
  }

  // forbidden_sysctls - computed: false, optional: true, required: false
  private _forbiddenSysctls?: string[]; 
  public get forbiddenSysctls() {
    return this.getListAttribute('forbidden_sysctls');
  }
  public set forbiddenSysctls(value: string[]) {
    this._forbiddenSysctls = value;
  }
  public resetForbiddenSysctls() {
    this._forbiddenSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenSysctlsInput() {
    return this._forbiddenSysctls;
  }
}
export interface SecurityPolicySpecInputCustom {
  /**
  * Allow host namespace sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allow_host_namespace_sharing SecurityPolicy#allow_host_namespace_sharing}
  */
  readonly allowHostNamespaceSharing?: boolean | cdktf.IResolvable;
  /**
  * Allow host network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allow_host_network SecurityPolicy#allow_host_network}
  */
  readonly allowHostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Allow privilege escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allow_privilege_escalation SecurityPolicy#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Allow privileged containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allow_privileged_containers SecurityPolicy#allow_privileged_containers}
  */
  readonly allowPrivilegedContainers?: boolean | cdktf.IResolvable;
  /**
  * Allowed volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_volumes SecurityPolicy#allowed_volumes}
  */
  readonly allowedVolumes?: string[];
  /**
  * Audit (dry-run)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#audit SecurityPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * Disable native pod security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#disable_native_psp SecurityPolicy#disable_native_psp}
  */
  readonly disableNativePsp?: boolean | cdktf.IResolvable;
  /**
  * Read only root file system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#read_only_root_file_system SecurityPolicy#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: boolean | cdktf.IResolvable;
  /**
  * allowed_host_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_host_paths SecurityPolicy#allowed_host_paths}
  */
  readonly allowedHostPaths?: SecurityPolicySpecInputCustomAllowedHostPaths[] | cdktf.IResolvable;
  /**
  * allowed_host_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_host_port_range SecurityPolicy#allowed_host_port_range}
  */
  readonly allowedHostPortRange?: SecurityPolicySpecInputCustomAllowedHostPortRange;
  /**
  * allowed_se_linux_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#allowed_se_linux_options SecurityPolicy#allowed_se_linux_options}
  */
  readonly allowedSeLinuxOptions?: SecurityPolicySpecInputCustomAllowedSeLinuxOptions[] | cdktf.IResolvable;
  /**
  * fs_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#fs_group SecurityPolicy#fs_group}
  */
  readonly fsGroup?: SecurityPolicySpecInputCustomFsGroup;
  /**
  * linux_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#linux_capabilities SecurityPolicy#linux_capabilities}
  */
  readonly linuxCapabilities?: SecurityPolicySpecInputCustomLinuxCapabilities;
  /**
  * run_as_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#run_as_group SecurityPolicy#run_as_group}
  */
  readonly runAsGroup?: SecurityPolicySpecInputCustomRunAsGroup;
  /**
  * run_as_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#run_as_user SecurityPolicy#run_as_user}
  */
  readonly runAsUser?: SecurityPolicySpecInputCustomRunAsUser;
  /**
  * seccomp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#seccomp SecurityPolicy#seccomp}
  */
  readonly seccomp?: SecurityPolicySpecInputCustomSeccomp;
  /**
  * supplemental_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#supplemental_groups SecurityPolicy#supplemental_groups}
  */
  readonly supplementalGroups?: SecurityPolicySpecInputCustomSupplementalGroups;
  /**
  * sysctls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#sysctls SecurityPolicy#sysctls}
  */
  readonly sysctls?: SecurityPolicySpecInputCustomSysctls;
}

export function securityPolicySpecInputCustomToTerraform(struct?: SecurityPolicySpecInputCustomOutputReference | SecurityPolicySpecInputCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_host_namespace_sharing: cdktf.booleanToTerraform(struct!.allowHostNamespaceSharing),
    allow_host_network: cdktf.booleanToTerraform(struct!.allowHostNetwork),
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    allow_privileged_containers: cdktf.booleanToTerraform(struct!.allowPrivilegedContainers),
    allowed_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedVolumes),
    audit: cdktf.booleanToTerraform(struct!.audit),
    disable_native_psp: cdktf.booleanToTerraform(struct!.disableNativePsp),
    read_only_root_file_system: cdktf.booleanToTerraform(struct!.readOnlyRootFileSystem),
    allowed_host_paths: cdktf.listMapper(securityPolicySpecInputCustomAllowedHostPathsToTerraform, true)(struct!.allowedHostPaths),
    allowed_host_port_range: securityPolicySpecInputCustomAllowedHostPortRangeToTerraform(struct!.allowedHostPortRange),
    allowed_se_linux_options: cdktf.listMapper(securityPolicySpecInputCustomAllowedSeLinuxOptionsToTerraform, true)(struct!.allowedSeLinuxOptions),
    fs_group: securityPolicySpecInputCustomFsGroupToTerraform(struct!.fsGroup),
    linux_capabilities: securityPolicySpecInputCustomLinuxCapabilitiesToTerraform(struct!.linuxCapabilities),
    run_as_group: securityPolicySpecInputCustomRunAsGroupToTerraform(struct!.runAsGroup),
    run_as_user: securityPolicySpecInputCustomRunAsUserToTerraform(struct!.runAsUser),
    seccomp: securityPolicySpecInputCustomSeccompToTerraform(struct!.seccomp),
    supplemental_groups: securityPolicySpecInputCustomSupplementalGroupsToTerraform(struct!.supplementalGroups),
    sysctls: securityPolicySpecInputCustomSysctlsToTerraform(struct!.sysctls),
  }
}


export function securityPolicySpecInputCustomToHclTerraform(struct?: SecurityPolicySpecInputCustomOutputReference | SecurityPolicySpecInputCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_host_namespace_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.allowHostNamespaceSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_host_network: {
      value: cdktf.booleanToHclTerraform(struct!.allowHostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_privileged_containers: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegedContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_native_psp: {
      value: cdktf.booleanToHclTerraform(struct!.disableNativePsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only_root_file_system: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_host_paths: {
      value: cdktf.listMapperHcl(securityPolicySpecInputCustomAllowedHostPathsToHclTerraform, true)(struct!.allowedHostPaths),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomAllowedHostPathsList",
    },
    allowed_host_port_range: {
      value: securityPolicySpecInputCustomAllowedHostPortRangeToHclTerraform(struct!.allowedHostPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomAllowedHostPortRangeList",
    },
    allowed_se_linux_options: {
      value: cdktf.listMapperHcl(securityPolicySpecInputCustomAllowedSeLinuxOptionsToHclTerraform, true)(struct!.allowedSeLinuxOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomAllowedSeLinuxOptionsList",
    },
    fs_group: {
      value: securityPolicySpecInputCustomFsGroupToHclTerraform(struct!.fsGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomFsGroupList",
    },
    linux_capabilities: {
      value: securityPolicySpecInputCustomLinuxCapabilitiesToHclTerraform(struct!.linuxCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomLinuxCapabilitiesList",
    },
    run_as_group: {
      value: securityPolicySpecInputCustomRunAsGroupToHclTerraform(struct!.runAsGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomRunAsGroupList",
    },
    run_as_user: {
      value: securityPolicySpecInputCustomRunAsUserToHclTerraform(struct!.runAsUser),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomRunAsUserList",
    },
    seccomp: {
      value: securityPolicySpecInputCustomSeccompToHclTerraform(struct!.seccomp),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomSeccompList",
    },
    supplemental_groups: {
      value: securityPolicySpecInputCustomSupplementalGroupsToHclTerraform(struct!.supplementalGroups),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomSupplementalGroupsList",
    },
    sysctls: {
      value: securityPolicySpecInputCustomSysctlsToHclTerraform(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomSysctlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowHostNamespaceSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHostNamespaceSharing = this._allowHostNamespaceSharing;
    }
    if (this._allowHostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHostNetwork = this._allowHostNetwork;
    }
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._allowPrivilegedContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegedContainers = this._allowPrivilegedContainers;
    }
    if (this._allowedVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVolumes = this._allowedVolumes;
    }
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._disableNativePsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNativePsp = this._disableNativePsp;
    }
    if (this._readOnlyRootFileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem;
    }
    if (this._allowedHostPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostPaths = this._allowedHostPaths?.internalValue;
    }
    if (this._allowedHostPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHostPortRange = this._allowedHostPortRange?.internalValue;
    }
    if (this._allowedSeLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSeLinuxOptions = this._allowedSeLinuxOptions?.internalValue;
    }
    if (this._fsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup?.internalValue;
    }
    if (this._linuxCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxCapabilities = this._linuxCapabilities?.internalValue;
    }
    if (this._runAsGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup?.internalValue;
    }
    if (this._runAsUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser?.internalValue;
    }
    if (this._seccomp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccomp = this._seccomp?.internalValue;
    }
    if (this._supplementalGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups?.internalValue;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowHostNamespaceSharing = undefined;
      this._allowHostNetwork = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._allowPrivilegedContainers = undefined;
      this._allowedVolumes = undefined;
      this._audit = undefined;
      this._disableNativePsp = undefined;
      this._readOnlyRootFileSystem = undefined;
      this._allowedHostPaths.internalValue = undefined;
      this._allowedHostPortRange.internalValue = undefined;
      this._allowedSeLinuxOptions.internalValue = undefined;
      this._fsGroup.internalValue = undefined;
      this._linuxCapabilities.internalValue = undefined;
      this._runAsGroup.internalValue = undefined;
      this._runAsUser.internalValue = undefined;
      this._seccomp.internalValue = undefined;
      this._supplementalGroups.internalValue = undefined;
      this._sysctls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowHostNamespaceSharing = value.allowHostNamespaceSharing;
      this._allowHostNetwork = value.allowHostNetwork;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._allowPrivilegedContainers = value.allowPrivilegedContainers;
      this._allowedVolumes = value.allowedVolumes;
      this._audit = value.audit;
      this._disableNativePsp = value.disableNativePsp;
      this._readOnlyRootFileSystem = value.readOnlyRootFileSystem;
      this._allowedHostPaths.internalValue = value.allowedHostPaths;
      this._allowedHostPortRange.internalValue = value.allowedHostPortRange;
      this._allowedSeLinuxOptions.internalValue = value.allowedSeLinuxOptions;
      this._fsGroup.internalValue = value.fsGroup;
      this._linuxCapabilities.internalValue = value.linuxCapabilities;
      this._runAsGroup.internalValue = value.runAsGroup;
      this._runAsUser.internalValue = value.runAsUser;
      this._seccomp.internalValue = value.seccomp;
      this._supplementalGroups.internalValue = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
    }
  }

  // allow_host_namespace_sharing - computed: false, optional: true, required: false
  private _allowHostNamespaceSharing?: boolean | cdktf.IResolvable; 
  public get allowHostNamespaceSharing() {
    return this.getBooleanAttribute('allow_host_namespace_sharing');
  }
  public set allowHostNamespaceSharing(value: boolean | cdktf.IResolvable) {
    this._allowHostNamespaceSharing = value;
  }
  public resetAllowHostNamespaceSharing() {
    this._allowHostNamespaceSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHostNamespaceSharingInput() {
    return this._allowHostNamespaceSharing;
  }

  // allow_host_network - computed: false, optional: true, required: false
  private _allowHostNetwork?: boolean | cdktf.IResolvable; 
  public get allowHostNetwork() {
    return this.getBooleanAttribute('allow_host_network');
  }
  public set allowHostNetwork(value: boolean | cdktf.IResolvable) {
    this._allowHostNetwork = value;
  }
  public resetAllowHostNetwork() {
    this._allowHostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHostNetworkInput() {
    return this._allowHostNetwork;
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // allow_privileged_containers - computed: false, optional: true, required: false
  private _allowPrivilegedContainers?: boolean | cdktf.IResolvable; 
  public get allowPrivilegedContainers() {
    return this.getBooleanAttribute('allow_privileged_containers');
  }
  public set allowPrivilegedContainers(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegedContainers = value;
  }
  public resetAllowPrivilegedContainers() {
    this._allowPrivilegedContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegedContainersInput() {
    return this._allowPrivilegedContainers;
  }

  // allowed_volumes - computed: false, optional: true, required: false
  private _allowedVolumes?: string[]; 
  public get allowedVolumes() {
    return this.getListAttribute('allowed_volumes');
  }
  public set allowedVolumes(value: string[]) {
    this._allowedVolumes = value;
  }
  public resetAllowedVolumes() {
    this._allowedVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVolumesInput() {
    return this._allowedVolumes;
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

  // disable_native_psp - computed: false, optional: true, required: false
  private _disableNativePsp?: boolean | cdktf.IResolvable; 
  public get disableNativePsp() {
    return this.getBooleanAttribute('disable_native_psp');
  }
  public set disableNativePsp(value: boolean | cdktf.IResolvable) {
    this._disableNativePsp = value;
  }
  public resetDisableNativePsp() {
    this._disableNativePsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNativePspInput() {
    return this._disableNativePsp;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFileSystem() {
    return this.getBooleanAttribute('read_only_root_file_system');
  }
  public set readOnlyRootFileSystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFileSystem = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem;
  }

  // allowed_host_paths - computed: false, optional: true, required: false
  private _allowedHostPaths = new SecurityPolicySpecInputCustomAllowedHostPathsList(this, "allowed_host_paths", false);
  public get allowedHostPaths() {
    return this._allowedHostPaths;
  }
  public putAllowedHostPaths(value: SecurityPolicySpecInputCustomAllowedHostPaths[] | cdktf.IResolvable) {
    this._allowedHostPaths.internalValue = value;
  }
  public resetAllowedHostPaths() {
    this._allowedHostPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPathsInput() {
    return this._allowedHostPaths.internalValue;
  }

  // allowed_host_port_range - computed: false, optional: true, required: false
  private _allowedHostPortRange = new SecurityPolicySpecInputCustomAllowedHostPortRangeOutputReference(this, "allowed_host_port_range");
  public get allowedHostPortRange() {
    return this._allowedHostPortRange;
  }
  public putAllowedHostPortRange(value: SecurityPolicySpecInputCustomAllowedHostPortRange) {
    this._allowedHostPortRange.internalValue = value;
  }
  public resetAllowedHostPortRange() {
    this._allowedHostPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostPortRangeInput() {
    return this._allowedHostPortRange.internalValue;
  }

  // allowed_se_linux_options - computed: false, optional: true, required: false
  private _allowedSeLinuxOptions = new SecurityPolicySpecInputCustomAllowedSeLinuxOptionsList(this, "allowed_se_linux_options", false);
  public get allowedSeLinuxOptions() {
    return this._allowedSeLinuxOptions;
  }
  public putAllowedSeLinuxOptions(value: SecurityPolicySpecInputCustomAllowedSeLinuxOptions[] | cdktf.IResolvable) {
    this._allowedSeLinuxOptions.internalValue = value;
  }
  public resetAllowedSeLinuxOptions() {
    this._allowedSeLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSeLinuxOptionsInput() {
    return this._allowedSeLinuxOptions.internalValue;
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup = new SecurityPolicySpecInputCustomFsGroupOutputReference(this, "fs_group");
  public get fsGroup() {
    return this._fsGroup;
  }
  public putFsGroup(value: SecurityPolicySpecInputCustomFsGroup) {
    this._fsGroup.internalValue = value;
  }
  public resetFsGroup() {
    this._fsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup.internalValue;
  }

  // linux_capabilities - computed: false, optional: true, required: false
  private _linuxCapabilities = new SecurityPolicySpecInputCustomLinuxCapabilitiesOutputReference(this, "linux_capabilities");
  public get linuxCapabilities() {
    return this._linuxCapabilities;
  }
  public putLinuxCapabilities(value: SecurityPolicySpecInputCustomLinuxCapabilities) {
    this._linuxCapabilities.internalValue = value;
  }
  public resetLinuxCapabilities() {
    this._linuxCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxCapabilitiesInput() {
    return this._linuxCapabilities.internalValue;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup = new SecurityPolicySpecInputCustomRunAsGroupOutputReference(this, "run_as_group");
  public get runAsGroup() {
    return this._runAsGroup;
  }
  public putRunAsGroup(value: SecurityPolicySpecInputCustomRunAsGroup) {
    this._runAsGroup.internalValue = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup.internalValue;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser = new SecurityPolicySpecInputCustomRunAsUserOutputReference(this, "run_as_user");
  public get runAsUser() {
    return this._runAsUser;
  }
  public putRunAsUser(value: SecurityPolicySpecInputCustomRunAsUser) {
    this._runAsUser.internalValue = value;
  }
  public resetRunAsUser() {
    this._runAsUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser.internalValue;
  }

  // seccomp - computed: false, optional: true, required: false
  private _seccomp = new SecurityPolicySpecInputCustomSeccompOutputReference(this, "seccomp");
  public get seccomp() {
    return this._seccomp;
  }
  public putSeccomp(value: SecurityPolicySpecInputCustomSeccomp) {
    this._seccomp.internalValue = value;
  }
  public resetSeccomp() {
    this._seccomp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompInput() {
    return this._seccomp.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups = new SecurityPolicySpecInputCustomSupplementalGroupsOutputReference(this, "supplemental_groups");
  public get supplementalGroups() {
    return this._supplementalGroups;
  }
  public putSupplementalGroups(value: SecurityPolicySpecInputCustomSupplementalGroups) {
    this._supplementalGroups.internalValue = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups.internalValue;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new SecurityPolicySpecInputCustomSysctlsOutputReference(this, "sysctls");
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: SecurityPolicySpecInputCustomSysctls) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }
}
export interface SecurityPolicySpecInputStrict {
  /**
  * Audit (dry-run)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#audit SecurityPolicy#audit}
  */
  readonly audit?: boolean | cdktf.IResolvable;
  /**
  * Disable native pod security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#disable_native_psp SecurityPolicy#disable_native_psp}
  */
  readonly disableNativePsp?: boolean | cdktf.IResolvable;
}

export function securityPolicySpecInputStrictToTerraform(struct?: SecurityPolicySpecInputStrictOutputReference | SecurityPolicySpecInputStrict): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
    disable_native_psp: cdktf.booleanToTerraform(struct!.disableNativePsp),
  }
}


export function securityPolicySpecInputStrictToHclTerraform(struct?: SecurityPolicySpecInputStrictOutputReference | SecurityPolicySpecInputStrict): any {
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
    disable_native_psp: {
      value: cdktf.booleanToHclTerraform(struct!.disableNativePsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputStrictOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInputStrict | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    if (this._disableNativePsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNativePsp = this._disableNativePsp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInputStrict | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
      this._disableNativePsp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
      this._disableNativePsp = value.disableNativePsp;
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

  // disable_native_psp - computed: false, optional: true, required: false
  private _disableNativePsp?: boolean | cdktf.IResolvable; 
  public get disableNativePsp() {
    return this.getBooleanAttribute('disable_native_psp');
  }
  public set disableNativePsp(value: boolean | cdktf.IResolvable) {
    this._disableNativePsp = value;
  }
  public resetDisableNativePsp() {
    this._disableNativePsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNativePspInput() {
    return this._disableNativePsp;
  }
}
export interface SecurityPolicySpecInput {
  /**
  * baseline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#baseline SecurityPolicy#baseline}
  */
  readonly baseline?: SecurityPolicySpecInputBaseline;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#custom SecurityPolicy#custom}
  */
  readonly custom?: SecurityPolicySpecInputCustom;
  /**
  * strict block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#strict SecurityPolicy#strict}
  */
  readonly strict?: SecurityPolicySpecInputStrict;
}

export function securityPolicySpecInputToTerraform(struct?: SecurityPolicySpecInputOutputReference | SecurityPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline: securityPolicySpecInputBaselineToTerraform(struct!.baseline),
    custom: securityPolicySpecInputCustomToTerraform(struct!.custom),
    strict: securityPolicySpecInputStrictToTerraform(struct!.strict),
  }
}


export function securityPolicySpecInputToHclTerraform(struct?: SecurityPolicySpecInputOutputReference | SecurityPolicySpecInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline: {
      value: securityPolicySpecInputBaselineToHclTerraform(struct!.baseline),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputBaselineList",
    },
    custom: {
      value: securityPolicySpecInputCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputCustomList",
    },
    strict: {
      value: securityPolicySpecInputStrictToHclTerraform(struct!.strict),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputStrictList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseline = this._baseline?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._strict?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseline.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._strict.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseline.internalValue = value.baseline;
      this._custom.internalValue = value.custom;
      this._strict.internalValue = value.strict;
    }
  }

  // baseline - computed: false, optional: true, required: false
  private _baseline = new SecurityPolicySpecInputBaselineOutputReference(this, "baseline");
  public get baseline() {
    return this._baseline;
  }
  public putBaseline(value: SecurityPolicySpecInputBaseline) {
    this._baseline.internalValue = value;
  }
  public resetBaseline() {
    this._baseline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new SecurityPolicySpecInputCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: SecurityPolicySpecInputCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // strict - computed: false, optional: true, required: false
  private _strict = new SecurityPolicySpecInputStrictOutputReference(this, "strict");
  public get strict() {
    return this._strict;
  }
  public putStrict(value: SecurityPolicySpecInputStrict) {
    this._strict.internalValue = value;
  }
  public resetStrict() {
    this._strict.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict.internalValue;
  }
}
export interface SecurityPolicySpecNamespaceSelectorMatchExpressions {
  /**
  * Key is the label key that the selector applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#key SecurityPolicy#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to a set of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#operator SecurityPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Values is an array of string values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#values SecurityPolicy#values}
  */
  readonly values: string[];
}

export function securityPolicySpecNamespaceSelectorMatchExpressionsToTerraform(struct?: SecurityPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function securityPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform(struct?: SecurityPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class SecurityPolicySpecNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityPolicySpecNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class SecurityPolicySpecNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicySpecNamespaceSelectorMatchExpressionsOutputReference {
    return new SecurityPolicySpecNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicySpecNamespaceSelector {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#match_expressions SecurityPolicy#match_expressions}
  */
  readonly matchExpressions: SecurityPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function securityPolicySpecNamespaceSelectorToTerraform(struct?: SecurityPolicySpecNamespaceSelectorOutputReference | SecurityPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(securityPolicySpecNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function securityPolicySpecNamespaceSelectorToHclTerraform(struct?: SecurityPolicySpecNamespaceSelectorOutputReference | SecurityPolicySpecNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(securityPolicySpecNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpecNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicySpecNamespaceSelector | undefined) {
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
  private _matchExpressions = new SecurityPolicySpecNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: SecurityPolicySpecNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface SecurityPolicySpec {
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#input SecurityPolicy#input}
  */
  readonly input: SecurityPolicySpecInput;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#namespace_selector SecurityPolicy#namespace_selector}
  */
  readonly namespaceSelector?: SecurityPolicySpecNamespaceSelector;
}

export function securityPolicySpecToTerraform(struct?: SecurityPolicySpecOutputReference | SecurityPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: securityPolicySpecInputToTerraform(struct!.input),
    namespace_selector: securityPolicySpecNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function securityPolicySpecToHclTerraform(struct?: SecurityPolicySpecOutputReference | SecurityPolicySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input: {
      value: securityPolicySpecInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecInputList",
    },
    namespace_selector: {
      value: securityPolicySpecNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicySpecNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicySpec | undefined {
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

  public set internalValue(value: SecurityPolicySpec | undefined) {
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
  private _input = new SecurityPolicySpecInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: SecurityPolicySpecInput) {
    this._input.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new SecurityPolicySpecNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: SecurityPolicySpecNamespaceSelector) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy tanzu-mission-control_security_policy}
*/
export class SecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicy to import
  * @param importFromId The id of the existing SecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/security_policy tanzu-mission-control_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
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
  private _meta = new SecurityPolicyMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: SecurityPolicyMeta) {
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
  private _scope = new SecurityPolicyScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: SecurityPolicyScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new SecurityPolicySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: SecurityPolicySpec) {
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
      meta: securityPolicyMetaToTerraform(this._meta.internalValue),
      scope: securityPolicyScopeToTerraform(this._scope.internalValue),
      spec: securityPolicySpecToTerraform(this._spec.internalValue),
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
        value: securityPolicyMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyMetaList",
      },
      scope: {
        value: securityPolicyScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyScopeList",
      },
      spec: {
        value: securityPolicySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
