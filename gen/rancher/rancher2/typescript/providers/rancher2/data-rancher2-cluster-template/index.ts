// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2ClusterTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template#annotations DataRancher2ClusterTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Cluster template description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template#description DataRancher2ClusterTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template#id DataRancher2ClusterTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template#labels DataRancher2ClusterTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Cluster template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template#name DataRancher2ClusterTemplate#name}
  */
  readonly name: string;
}
export interface DataRancher2ClusterTemplateMembers {
}

export function dataRancher2ClusterTemplateMembersToTerraform(struct?: DataRancher2ClusterTemplateMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateMembersToHclTerraform(struct?: DataRancher2ClusterTemplateMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // group_principal_id - computed: true, optional: false, required: false
  public get groupPrincipalId() {
    return this.getStringAttribute('group_principal_id');
  }

  // user_principal_id - computed: true, optional: false, required: false
  public get userPrincipalId() {
    return this.getStringAttribute('user_principal_id');
  }
}

export class DataRancher2ClusterTemplateMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateMembersOutputReference {
    return new DataRancher2ClusterTemplateMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certs - computed: true, optional: false, required: false
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sans - computed: true, optional: false, required: false
  public get sans() {
    return this.getListAttribute('sans');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // ssh_agent_auth - computed: true, optional: false, required: false
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // ssh_key_path - computed: true, optional: false, required: false
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_security_group_ingress - computed: true, optional: false, required: false
  public get disableSecurityGroupIngress() {
    return this.getBooleanAttribute('disable_security_group_ingress');
  }

  // disable_strict_zone_check - computed: true, optional: false, required: false
  public get disableStrictZoneCheck() {
    return this.getBooleanAttribute('disable_strict_zone_check');
  }

  // elb_security_group - computed: true, optional: false, required: false
  public get elbSecurityGroup() {
    return this.getStringAttribute('elb_security_group');
  }

  // kubernetes_cluster_id - computed: true, optional: false, required: false
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }

  // kubernetes_cluster_tag - computed: true, optional: false, required: false
  public get kubernetesClusterTag() {
    return this.getStringAttribute('kubernetes_cluster_tag');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // vpc - computed: true, optional: false, required: false
  public get vpc() {
    return this.getStringAttribute('vpc');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // signing_method - computed: true, optional: false, required: false
  public get signingMethod() {
    return this.getStringAttribute('signing_method');
  }

  // signing_name - computed: true, optional: false, required: false
  public get signingName() {
    return this.getStringAttribute('signing_name');
  }

  // signing_region - computed: true, optional: false, required: false
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderGlobalList(this, "global", false);
  public get global() {
    return this._global;
  }

  // service_override - computed: true, optional: false, required: false
  private _serviceOverride = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderServiceOverrideList(this, "service_override", false);
  public get serviceOverride() {
    return this._serviceOverride;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aad_client_cert_password - computed: true, optional: false, required: false
  public get aadClientCertPassword() {
    return this.getStringAttribute('aad_client_cert_password');
  }

  // aad_client_cert_path - computed: true, optional: false, required: false
  public get aadClientCertPath() {
    return this.getStringAttribute('aad_client_cert_path');
  }

  // aad_client_id - computed: true, optional: false, required: false
  public get aadClientId() {
    return this.getStringAttribute('aad_client_id');
  }

  // aad_client_secret - computed: true, optional: false, required: false
  public get aadClientSecret() {
    return this.getStringAttribute('aad_client_secret');
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // cloud_provider_backoff - computed: true, optional: false, required: false
  public get cloudProviderBackoff() {
    return this.getBooleanAttribute('cloud_provider_backoff');
  }

  // cloud_provider_backoff_duration - computed: true, optional: false, required: false
  public get cloudProviderBackoffDuration() {
    return this.getNumberAttribute('cloud_provider_backoff_duration');
  }

  // cloud_provider_backoff_exponent - computed: true, optional: false, required: false
  public get cloudProviderBackoffExponent() {
    return this.getNumberAttribute('cloud_provider_backoff_exponent');
  }

  // cloud_provider_backoff_jitter - computed: true, optional: false, required: false
  public get cloudProviderBackoffJitter() {
    return this.getNumberAttribute('cloud_provider_backoff_jitter');
  }

  // cloud_provider_backoff_retries - computed: true, optional: false, required: false
  public get cloudProviderBackoffRetries() {
    return this.getNumberAttribute('cloud_provider_backoff_retries');
  }

  // cloud_provider_rate_limit - computed: true, optional: false, required: false
  public get cloudProviderRateLimit() {
    return this.getBooleanAttribute('cloud_provider_rate_limit');
  }

  // cloud_provider_rate_limit_bucket - computed: true, optional: false, required: false
  public get cloudProviderRateLimitBucket() {
    return this.getNumberAttribute('cloud_provider_rate_limit_bucket');
  }

  // cloud_provider_rate_limit_qps - computed: true, optional: false, required: false
  public get cloudProviderRateLimitQps() {
    return this.getNumberAttribute('cloud_provider_rate_limit_qps');
  }

  // load_balancer_sku - computed: true, optional: false, required: false
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // maximum_load_balancer_rule_count - computed: true, optional: false, required: false
  public get maximumLoadBalancerRuleCount() {
    return this.getNumberAttribute('maximum_load_balancer_rule_count');
  }

  // primary_availability_set_name - computed: true, optional: false, required: false
  public get primaryAvailabilitySetName() {
    return this.getStringAttribute('primary_availability_set_name');
  }

  // primary_scale_set_name - computed: true, optional: false, required: false
  public get primaryScaleSetName() {
    return this.getStringAttribute('primary_scale_set_name');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // route_table_name - computed: true, optional: false, required: false
  public get routeTableName() {
    return this.getStringAttribute('route_table_name');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // use_instance_metadata - computed: true, optional: false, required: false
  public get useInstanceMetadata() {
    return this.getBooleanAttribute('use_instance_metadata');
  }

  // use_managed_identity_extension - computed: true, optional: false, required: false
  public get useManagedIdentityExtension() {
    return this.getBooleanAttribute('use_managed_identity_extension');
  }

  // vm_type - computed: true, optional: false, required: false
  public get vmType() {
    return this.getStringAttribute('vm_type');
  }

  // vnet_name - computed: true, optional: false, required: false
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }

  // vnet_resource_group - computed: true, optional: false, required: false
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bs_version - computed: true, optional: false, required: false
  public get bsVersion() {
    return this.getStringAttribute('bs_version');
  }

  // ignore_volume_az - computed: true, optional: false, required: false
  public get ignoreVolumeAz() {
    return this.getBooleanAttribute('ignore_volume_az');
  }

  // trust_device_path - computed: true, optional: false, required: false
  public get trustDevicePath() {
    return this.getBooleanAttribute('trust_device_path');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // ca_file - computed: true, optional: false, required: false
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // trust_id - computed: true, optional: false, required: false
  public get trustId() {
    return this.getStringAttribute('trust_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_monitor - computed: true, optional: false, required: false
  public get createMonitor() {
    return this.getBooleanAttribute('create_monitor');
  }

  // floating_network_id - computed: true, optional: false, required: false
  public get floatingNetworkId() {
    return this.getStringAttribute('floating_network_id');
  }

  // lb_method - computed: true, optional: false, required: false
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }

  // lb_provider - computed: true, optional: false, required: false
  public get lbProvider() {
    return this.getStringAttribute('lb_provider');
  }

  // lb_version - computed: true, optional: false, required: false
  public get lbVersion() {
    return this.getStringAttribute('lb_version');
  }

  // manage_security_groups - computed: true, optional: false, required: false
  public get manageSecurityGroups() {
    return this.getBooleanAttribute('manage_security_groups');
  }

  // monitor_delay - computed: true, optional: false, required: false
  public get monitorDelay() {
    return this.getStringAttribute('monitor_delay');
  }

  // monitor_max_retries - computed: true, optional: false, required: false
  public get monitorMaxRetries() {
    return this.getNumberAttribute('monitor_max_retries');
  }

  // monitor_timeout - computed: true, optional: false, required: false
  public get monitorTimeout() {
    return this.getStringAttribute('monitor_timeout');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // use_octavia - computed: true, optional: false, required: false
  public get useOctavia() {
    return this.getBooleanAttribute('use_octavia');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_timeout - computed: true, optional: false, required: false
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }

  // search_order - computed: true, optional: false, required: false
  public get searchOrder() {
    return this.getStringAttribute('search_order');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_storage - computed: true, optional: false, required: false
  private _blockStorage = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderBlockStorageList(this, "block_storage", false);
  public get blockStorage() {
    return this._blockStorage;
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderGlobalList(this, "global", false);
  public get global() {
    return this._global;
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // route - computed: true, optional: false, required: false
  private _route = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scsi_controller_type - computed: true, optional: false, required: false
  public get scsiControllerType() {
    return this.getStringAttribute('scsi_controller_type');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }

  // graceful_shutdown_timeout - computed: true, optional: false, required: false
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }

  // insecure_flag - computed: true, optional: false, required: false
  public get insecureFlag() {
    return this.getBooleanAttribute('insecure_flag');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // soap_roundtrip_count - computed: true, optional: false, required: false
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_network - computed: true, optional: false, required: false
  public get publicNetwork() {
    return this.getStringAttribute('public_network');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return this.getStringAttribute('datacenters');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // soap_roundtrip_count - computed: true, optional: false, required: false
  public get soapRoundtripCount() {
    return this.getNumberAttribute('soap_roundtrip_count');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // default_datastore - computed: true, optional: false, required: false
  public get defaultDatastore() {
    return this.getStringAttribute('default_datastore');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // resourcepool_path - computed: true, optional: false, required: false
  public get resourcepoolPath() {
    return this.getStringAttribute('resourcepool_path');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }

  // global - computed: true, optional: false, required: false
  private _global = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderGlobalList(this, "global", false);
  public get global() {
    return this._global;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // virtual_center - computed: true, optional: false, required: false
  private _virtualCenter = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderVirtualCenterList(this, "virtual_center", false);
  public get virtualCenter() {
    return this._virtualCenter;
  }

  // workspace - computed: true, optional: false, required: false
  private _workspace = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_cloud_provider - computed: true, optional: false, required: false
  private _awsCloudProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAwsCloudProviderList(this, "aws_cloud_provider", false);
  public get awsCloudProvider() {
    return this._awsCloudProvider;
  }

  // azure_cloud_provider - computed: true, optional: false, required: false
  private _azureCloudProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderAzureCloudProviderList(this, "azure_cloud_provider", false);
  public get azureCloudProvider() {
    return this._azureCloudProvider;
  }

  // custom_cloud_provider - computed: true, optional: false, required: false
  public get customCloudProvider() {
    return this.getStringAttribute('custom_cloud_provider');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // openstack_cloud_provider - computed: true, optional: false, required: false
  private _openstackCloudProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOpenstackCloudProviderList(this, "openstack_cloud_provider", false);
  public get openstackCloudProvider() {
    return this._openstackCloudProvider;
  }

  // vsphere_cloud_provider - computed: true, optional: false, required: false
  private _vsphereCloudProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderVsphereCloudProviderList(this, "vsphere_cloud_provider", false);
  public get vsphereCloudProvider() {
    return this._vsphereCloudProvider;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cores_per_replica - computed: true, optional: false, required: false
  public get coresPerReplica() {
    return this.getNumberAttribute('cores_per_replica');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // nodes_per_replica - computed: true, optional: false, required: false
  public get nodesPerReplica() {
    return this.getNumberAttribute('nodes_per_replica');
  }

  // prevent_single_point_failure - computed: true, optional: false, required: false
  public get preventSinglePointFailure() {
    return this.getBooleanAttribute('prevent_single_point_failure');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linear_autoscaler_params - computed: true, optional: false, required: false
  private _linearAutoscalerParams = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsLinearAutoscalerParamsList(this, "linear_autoscaler_params", false);
  public get linearAutoscalerParams() {
    return this._linearAutoscalerParams;
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // nodelocal - computed: true, optional: false, required: false
  private _nodelocal = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsNodelocalList(this, "nodelocal", false);
  public get nodelocal() {
    return this._nodelocal;
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // reverse_cidrs - computed: true, optional: false, required: false
  public get reverseCidrs() {
    return this.getListAttribute('reverse_cidrs');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // update_strategy - computed: true, optional: false, required: false
  private _updateStrategy = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsUpdateStrategyList(this, "update_strategy", false);
  public get updateStrategy() {
    return this._updateStrategy;
  }

  // upstream_nameservers - computed: true, optional: false, required: false
  public get upstreamNameservers() {
    return this.getListAttribute('upstream_nameservers');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_backend - computed: true, optional: false, required: false
  public get defaultBackend() {
    return this.getBooleanAttribute('default_backend');
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // network_mode - computed: true, optional: false, required: false
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // update_strategy - computed: true, optional: false, required: false
  private _updateStrategy = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressUpdateStrategyList(this, "update_strategy", false);
  public get updateStrategy() {
    return this._updateStrategy;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }

  // replicas - computed: true, optional: false, required: false
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // update_strategy - computed: true, optional: false, required: false
  private _updateStrategy = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringUpdateStrategyList(this, "update_strategy", false);
  public get updateStrategy() {
    return this._updateStrategy;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aep - computed: true, optional: false, required: false
  public get aep() {
    return this.getStringAttribute('aep');
  }

  // apic_hosts - computed: true, optional: false, required: false
  public get apicHosts() {
    return this.getListAttribute('apic_hosts');
  }

  // apic_refresh_ticker_adjust - computed: true, optional: false, required: false
  public get apicRefreshTickerAdjust() {
    return this.getStringAttribute('apic_refresh_ticker_adjust');
  }

  // apic_refresh_time - computed: true, optional: false, required: false
  public get apicRefreshTime() {
    return this.getStringAttribute('apic_refresh_time');
  }

  // apic_subscription_delay - computed: true, optional: false, required: false
  public get apicSubscriptionDelay() {
    return this.getStringAttribute('apic_subscription_delay');
  }

  // apic_user_crt - computed: true, optional: false, required: false
  public get apicUserCrt() {
    return this.getStringAttribute('apic_user_crt');
  }

  // apic_user_key - computed: true, optional: false, required: false
  public get apicUserKey() {
    return this.getStringAttribute('apic_user_key');
  }

  // apic_user_name - computed: true, optional: false, required: false
  public get apicUserName() {
    return this.getStringAttribute('apic_user_name');
  }

  // capic - computed: true, optional: false, required: false
  public get capic() {
    return this.getStringAttribute('capic');
  }

  // controller_log_level - computed: true, optional: false, required: false
  public get controllerLogLevel() {
    return this.getStringAttribute('controller_log_level');
  }

  // disable_periodic_snat_global_info_sync - computed: true, optional: false, required: false
  public get disablePeriodicSnatGlobalInfoSync() {
    return this.getStringAttribute('disable_periodic_snat_global_info_sync');
  }

  // disable_wait_for_network - computed: true, optional: false, required: false
  public get disableWaitForNetwork() {
    return this.getStringAttribute('disable_wait_for_network');
  }

  // drop_log_enable - computed: true, optional: false, required: false
  public get dropLogEnable() {
    return this.getStringAttribute('drop_log_enable');
  }

  // duration_wait_for_network - computed: true, optional: false, required: false
  public get durationWaitForNetwork() {
    return this.getStringAttribute('duration_wait_for_network');
  }

  // enable_endpoint_slice - computed: true, optional: false, required: false
  public get enableEndpointSlice() {
    return this.getStringAttribute('enable_endpoint_slice');
  }

  // encap_type - computed: true, optional: false, required: false
  public get encapType() {
    return this.getStringAttribute('encap_type');
  }

  // ep_registry - computed: true, optional: false, required: false
  public get epRegistry() {
    return this.getStringAttribute('ep_registry');
  }

  // extern_dynamic - computed: true, optional: false, required: false
  public get externDynamic() {
    return this.getStringAttribute('extern_dynamic');
  }

  // extern_static - computed: true, optional: false, required: false
  public get externStatic() {
    return this.getStringAttribute('extern_static');
  }

  // gbp_pod_subnet - computed: true, optional: false, required: false
  public get gbpPodSubnet() {
    return this.getStringAttribute('gbp_pod_subnet');
  }

  // host_agent_log_level - computed: true, optional: false, required: false
  public get hostAgentLogLevel() {
    return this.getStringAttribute('host_agent_log_level');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // image_pull_secret - computed: true, optional: false, required: false
  public get imagePullSecret() {
    return this.getStringAttribute('image_pull_secret');
  }

  // infra_vlan - computed: true, optional: false, required: false
  public get infraVlan() {
    return this.getStringAttribute('infra_vlan');
  }

  // install_istio - computed: true, optional: false, required: false
  public get installIstio() {
    return this.getStringAttribute('install_istio');
  }

  // istio_profile - computed: true, optional: false, required: false
  public get istioProfile() {
    return this.getStringAttribute('istio_profile');
  }

  // kafka_brokers - computed: true, optional: false, required: false
  public get kafkaBrokers() {
    return this.getListAttribute('kafka_brokers');
  }

  // kafka_client_crt - computed: true, optional: false, required: false
  public get kafkaClientCrt() {
    return this.getStringAttribute('kafka_client_crt');
  }

  // kafka_client_key - computed: true, optional: false, required: false
  public get kafkaClientKey() {
    return this.getStringAttribute('kafka_client_key');
  }

  // kube_api_vlan - computed: true, optional: false, required: false
  public get kubeApiVlan() {
    return this.getStringAttribute('kube_api_vlan');
  }

  // l3out - computed: true, optional: false, required: false
  public get l3Out() {
    return this.getStringAttribute('l3out');
  }

  // l3out_external_networks - computed: true, optional: false, required: false
  public get l3OutExternalNetworks() {
    return this.getListAttribute('l3out_external_networks');
  }

  // max_nodes_svc_graph - computed: true, optional: false, required: false
  public get maxNodesSvcGraph() {
    return this.getStringAttribute('max_nodes_svc_graph');
  }

  // mcast_range_end - computed: true, optional: false, required: false
  public get mcastRangeEnd() {
    return this.getStringAttribute('mcast_range_end');
  }

  // mcast_range_start - computed: true, optional: false, required: false
  public get mcastRangeStart() {
    return this.getStringAttribute('mcast_range_start');
  }

  // mtu_head_room - computed: true, optional: false, required: false
  public get mtuHeadRoom() {
    return this.getStringAttribute('mtu_head_room');
  }

  // multus_disable - computed: true, optional: false, required: false
  public get multusDisable() {
    return this.getStringAttribute('multus_disable');
  }

  // no_priority_class - computed: true, optional: false, required: false
  public get noPriorityClass() {
    return this.getStringAttribute('no_priority_class');
  }

  // node_pod_if_enable - computed: true, optional: false, required: false
  public get nodePodIfEnable() {
    return this.getStringAttribute('node_pod_if_enable');
  }

  // node_subnet - computed: true, optional: false, required: false
  public get nodeSubnet() {
    return this.getStringAttribute('node_subnet');
  }

  // node_svc_subnet - computed: true, optional: false, required: false
  public get nodeSvcSubnet() {
    return this.getStringAttribute('node_svc_subnet');
  }

  // opflex_client_ssl - computed: true, optional: false, required: false
  public get opflexClientSsl() {
    return this.getStringAttribute('opflex_client_ssl');
  }

  // opflex_device_delete_timeout - computed: true, optional: false, required: false
  public get opflexDeviceDeleteTimeout() {
    return this.getStringAttribute('opflex_device_delete_timeout');
  }

  // opflex_log_level - computed: true, optional: false, required: false
  public get opflexLogLevel() {
    return this.getStringAttribute('opflex_log_level');
  }

  // opflex_mode - computed: true, optional: false, required: false
  public get opflexMode() {
    return this.getStringAttribute('opflex_mode');
  }

  // opflex_server_port - computed: true, optional: false, required: false
  public get opflexServerPort() {
    return this.getStringAttribute('opflex_server_port');
  }

  // overlay_vrf_name - computed: true, optional: false, required: false
  public get overlayVrfName() {
    return this.getStringAttribute('overlay_vrf_name');
  }

  // ovs_memory_limit - computed: true, optional: false, required: false
  public get ovsMemoryLimit() {
    return this.getStringAttribute('ovs_memory_limit');
  }

  // pbr_tracking_non_snat - computed: true, optional: false, required: false
  public get pbrTrackingNonSnat() {
    return this.getStringAttribute('pbr_tracking_non_snat');
  }

  // pod_subnet_chunk_size - computed: true, optional: false, required: false
  public get podSubnetChunkSize() {
    return this.getStringAttribute('pod_subnet_chunk_size');
  }

  // run_gbp_container - computed: true, optional: false, required: false
  public get runGbpContainer() {
    return this.getStringAttribute('run_gbp_container');
  }

  // run_opflex_server_container - computed: true, optional: false, required: false
  public get runOpflexServerContainer() {
    return this.getStringAttribute('run_opflex_server_container');
  }

  // service_monitor_interval - computed: true, optional: false, required: false
  public get serviceMonitorInterval() {
    return this.getStringAttribute('service_monitor_interval');
  }

  // service_vlan - computed: true, optional: false, required: false
  public get serviceVlan() {
    return this.getStringAttribute('service_vlan');
  }

  // snat_contract_scope - computed: true, optional: false, required: false
  public get snatContractScope() {
    return this.getStringAttribute('snat_contract_scope');
  }

  // snat_namespace - computed: true, optional: false, required: false
  public get snatNamespace() {
    return this.getStringAttribute('snat_namespace');
  }

  // snat_port_range_end - computed: true, optional: false, required: false
  public get snatPortRangeEnd() {
    return this.getStringAttribute('snat_port_range_end');
  }

  // snat_port_range_start - computed: true, optional: false, required: false
  public get snatPortRangeStart() {
    return this.getStringAttribute('snat_port_range_start');
  }

  // snat_ports_per_node - computed: true, optional: false, required: false
  public get snatPortsPerNode() {
    return this.getStringAttribute('snat_ports_per_node');
  }

  // sriov_enable - computed: true, optional: false, required: false
  public get sriovEnable() {
    return this.getStringAttribute('sriov_enable');
  }

  // subnet_domain_name - computed: true, optional: false, required: false
  public get subnetDomainName() {
    return this.getStringAttribute('subnet_domain_name');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // use_aci_anywhere_crd - computed: true, optional: false, required: false
  public get useAciAnywhereCrd() {
    return this.getStringAttribute('use_aci_anywhere_crd');
  }

  // use_aci_cni_priority_class - computed: true, optional: false, required: false
  public get useAciCniPriorityClass() {
    return this.getStringAttribute('use_aci_cni_priority_class');
  }

  // use_cluster_role - computed: true, optional: false, required: false
  public get useClusterRole() {
    return this.getStringAttribute('use_cluster_role');
  }

  // use_host_netns_volume - computed: true, optional: false, required: false
  public get useHostNetnsVolume() {
    return this.getStringAttribute('use_host_netns_volume');
  }

  // use_opflex_server_volume - computed: true, optional: false, required: false
  public get useOpflexServerVolume() {
    return this.getStringAttribute('use_opflex_server_volume');
  }

  // use_privileged_container - computed: true, optional: false, required: false
  public get usePrivilegedContainer() {
    return this.getStringAttribute('use_privileged_container');
  }

  // vmm_controller - computed: true, optional: false, required: false
  public get vmmController() {
    return this.getStringAttribute('vmm_controller');
  }

  // vmm_domain - computed: true, optional: false, required: false
  public get vmmDomain() {
    return this.getStringAttribute('vmm_domain');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }

  // vrf_tenant - computed: true, optional: false, required: false
  public get vrfTenant() {
    return this.getStringAttribute('vrf_tenant');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iface - computed: true, optional: false, required: false
  public get iface() {
    return this.getStringAttribute('iface');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iface - computed: true, optional: false, required: false
  public get iface() {
    return this.getStringAttribute('iface');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aci_network_provider - computed: true, optional: false, required: false
  private _aciNetworkProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkAciNetworkProviderList(this, "aci_network_provider", false);
  public get aciNetworkProvider() {
    return this._aciNetworkProvider;
  }

  // calico_network_provider - computed: true, optional: false, required: false
  private _calicoNetworkProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCalicoNetworkProviderList(this, "calico_network_provider", false);
  public get calicoNetworkProvider() {
    return this._calicoNetworkProvider;
  }

  // canal_network_provider - computed: true, optional: false, required: false
  private _canalNetworkProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkCanalNetworkProviderList(this, "canal_network_provider", false);
  public get canalNetworkProvider() {
    return this._canalNetworkProvider;
  }

  // flannel_network_provider - computed: true, optional: false, required: false
  private _flannelNetworkProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkFlannelNetworkProviderList(this, "flannel_network_provider", false);
  public get flannelNetworkProvider() {
    return this._flannelNetworkProvider;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktf.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // plugin - computed: true, optional: false, required: false
  public get plugin() {
    return this.getStringAttribute('plugin');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }

  // weave_network_provider - computed: true, optional: false, required: false
  private _weaveNetworkProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkWeaveNetworkProviderList(this, "weave_network_provider", false);
  public get weaveNetworkProvider() {
    return this._weaveNetworkProvider;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // docker_socket - computed: true, optional: false, required: false
  public get dockerSocket() {
    return this.getStringAttribute('docker_socket');
  }

  // hostname_override - computed: true, optional: false, required: false
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }

  // internal_address - computed: true, optional: false, required: false
  public get internalAddress() {
    return this.getStringAttribute('internal_address');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getListAttribute('role');
  }

  // ssh_agent_auth - computed: true, optional: false, required: false
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // ssh_key_path - computed: true, optional: false, required: false
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key_id - computed: true, optional: false, required: false
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }

  // aws_secret_access_key - computed: true, optional: false, required: false
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }

  // aws_session_token - computed: true, optional: false, required: false
  public get awsSessionToken() {
    return this.getStringAttribute('aws_session_token');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ecr_credential_plugin - computed: true, optional: false, required: false
  private _ecrCredentialPlugin = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesEcrCredentialPluginList(this, "ecr_credential_plugin", false);
  public get ecrCredentialPlugin() {
    return this._ecrCredentialPlugin;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // custom_ca - computed: true, optional: false, required: false
  public get customCa() {
    return this.getStringAttribute('custom_ca');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // interval_hours - computed: true, optional: false, required: false
  public get intervalHours() {
    return this.getNumberAttribute('interval_hours');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // s3_backup_config - computed: true, optional: false, required: false
  private _s3BackupConfig = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigS3BackupConfigList(this, "s3_backup_config", false);
  public get s3BackupConfig() {
    return this._s3BackupConfig;
  }

  // safe_timestamp - computed: true, optional: false, required: false
  public get safeTimestamp() {
    return this.getBooleanAttribute('safe_timestamp');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_config - computed: true, optional: false, required: false
  private _backupConfig = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdBackupConfigList(this, "backup_config", false);
  public get backupConfig() {
    return this._backupConfig;
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // creation - computed: true, optional: false, required: false
  public get creation() {
    return this.getStringAttribute('creation');
  }

  // external_urls - computed: true, optional: false, required: false
  public get externalUrls() {
    return this.getListAttribute('external_urls');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getStringAttribute('retention');
  }

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }

  // max_backup - computed: true, optional: false, required: false
  public get maxBackup() {
    return this.getNumberAttribute('max_backup');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration - computed: true, optional: false, required: false
  public get configuration() {
    return this.getStringAttribute('configuration');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_config - computed: true, optional: false, required: false
  public get customConfig() {
    return this.getStringAttribute('custom_config');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admission_configuration - computed: true, optional: false, required: false
  private _admissionConfiguration = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAdmissionConfigurationList(this, "admission_configuration", false);
  public get admissionConfiguration() {
    return this._admissionConfiguration;
  }

  // always_pull_images - computed: true, optional: false, required: false
  public get alwaysPullImages() {
    return this.getBooleanAttribute('always_pull_images');
  }

  // audit_log - computed: true, optional: false, required: false
  private _auditLog = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiAuditLogList(this, "audit_log", false);
  public get auditLog() {
    return this._auditLog;
  }

  // event_rate_limit - computed: true, optional: false, required: false
  private _eventRateLimit = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiEventRateLimitList(this, "event_rate_limit", false);
  public get eventRateLimit() {
    return this._eventRateLimit;
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // secrets_encryption_config - computed: true, optional: false, required: false
  private _secretsEncryptionConfig = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiSecretsEncryptionConfigList(this, "secrets_encryption_config", false);
  public get secretsEncryptionConfig() {
    return this._secretsEncryptionConfig;
  }

  // service_cluster_ip_range - computed: true, optional: false, required: false
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }

  // service_node_port_range - computed: true, optional: false, required: false
  public get serviceNodePortRange() {
    return this.getStringAttribute('service_node_port_range');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_cidr - computed: true, optional: false, required: false
  public get clusterCidr() {
    return this.getStringAttribute('cluster_cidr');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // service_cluster_ip_range - computed: true, optional: false, required: false
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_dns_server - computed: true, optional: false, required: false
  public get clusterDnsServer() {
    return this.getStringAttribute('cluster_dns_server');
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // fail_swap_on - computed: true, optional: false, required: false
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }

  // generate_serving_certificate - computed: true, optional: false, required: false
  public get generateServingCertificate() {
    return this.getBooleanAttribute('generate_serving_certificate');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // infra_container_image - computed: true, optional: false, required: false
  public get infraContainerImage() {
    return this.getStringAttribute('infra_container_image');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extra_args - computed: true, optional: false, required: false
  private _extraArgs = new cdktf.StringMap(this, "extra_args");
  public get extraArgs() {
    return this._extraArgs;
  }

  // extra_binds - computed: true, optional: false, required: false
  public get extraBinds() {
    return this.getListAttribute('extra_binds');
  }

  // extra_env - computed: true, optional: false, required: false
  public get extraEnv() {
    return this.getListAttribute('extra_env');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // etcd - computed: true, optional: false, required: false
  private _etcd = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesEtcdList(this, "etcd", false);
  public get etcd() {
    return this._etcd;
  }

  // kube_api - computed: true, optional: false, required: false
  private _kubeApi = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeApiList(this, "kube_api", false);
  public get kubeApi() {
    return this._kubeApi;
  }

  // kube_controller - computed: true, optional: false, required: false
  private _kubeController = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeControllerList(this, "kube_controller", false);
  public get kubeController() {
    return this._kubeController;
  }

  // kubelet - computed: true, optional: false, required: false
  private _kubelet = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeletList(this, "kubelet", false);
  public get kubelet() {
    return this._kubelet;
  }

  // kubeproxy - computed: true, optional: false, required: false
  private _kubeproxy = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesKubeproxyList(this, "kubeproxy", false);
  public get kubeproxy() {
    return this._kubeproxy;
  }

  // scheduler - computed: true, optional: false, required: false
  private _scheduler = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesSchedulerList(this, "scheduler", false);
  public get scheduler() {
    return this._scheduler;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_local_data - computed: true, optional: false, required: false
  public get deleteLocalData() {
    return this.getBooleanAttribute('delete_local_data');
  }

  // force - computed: true, optional: false, required: false
  public get force() {
    return this.getBooleanAttribute('force');
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }

  // ignore_daemon_sets - computed: true, optional: false, required: false
  public get ignoreDaemonSets() {
    return this.getBooleanAttribute('ignore_daemon_sets');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain - computed: true, optional: false, required: false
  public get drain() {
    return this.getBooleanAttribute('drain');
  }

  // drain_input - computed: true, optional: false, required: false
  private _drainInput = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyDrainInputList(this, "drain_input", false);
  public get drainInput() {
    return this._drainInput;
  }

  // max_unavailable_controlplane - computed: true, optional: false, required: false
  public get maxUnavailableControlplane() {
    return this.getStringAttribute('max_unavailable_controlplane');
  }

  // max_unavailable_worker - computed: true, optional: false, required: false
  public get maxUnavailableWorker() {
    return this.getStringAttribute('max_unavailable_worker');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfig {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addon_job_timeout - computed: true, optional: false, required: false
  public get addonJobTimeout() {
    return this.getNumberAttribute('addon_job_timeout');
  }

  // addons - computed: true, optional: false, required: false
  public get addons() {
    return this.getStringAttribute('addons');
  }

  // addons_include - computed: true, optional: false, required: false
  public get addonsInclude() {
    return this.getListAttribute('addons_include');
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // bastion_host - computed: true, optional: false, required: false
  private _bastionHost = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigBastionHostList(this, "bastion_host", false);
  public get bastionHost() {
    return this._bastionHost;
  }

  // cloud_provider - computed: true, optional: false, required: false
  private _cloudProvider = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigCloudProviderList(this, "cloud_provider", false);
  public get cloudProvider() {
    return this._cloudProvider;
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // enable_cri_dockerd - computed: true, optional: false, required: false
  public get enableCriDockerd() {
    return this.getBooleanAttribute('enable_cri_dockerd');
  }

  // ignore_docker_version - computed: true, optional: false, required: false
  public get ignoreDockerVersion() {
    return this.getBooleanAttribute('ignore_docker_version');
  }

  // ingress - computed: true, optional: false, required: false
  private _ingress = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // monitoring - computed: true, optional: false, required: false
  private _monitoring = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigMonitoringList(this, "monitoring", false);
  public get monitoring() {
    return this._monitoring;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // prefix_path - computed: true, optional: false, required: false
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }

  // private_registries - computed: true, optional: false, required: false
  private _privateRegistries = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigPrivateRegistriesList(this, "private_registries", false);
  public get privateRegistries() {
    return this._privateRegistries;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // ssh_agent_auth - computed: true, optional: false, required: false
  public get sshAgentAuth() {
    return this.getBooleanAttribute('ssh_agent_auth');
  }

  // ssh_cert_path - computed: true, optional: false, required: false
  public get sshCertPath() {
    return this.getStringAttribute('ssh_cert_path');
  }

  // ssh_key_path - computed: true, optional: false, required: false
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }

  // upgrade_strategy - computed: true, optional: false, required: false
  private _upgradeStrategy = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigUpgradeStrategyList(this, "upgrade_strategy", false);
  public get upgradeStrategy() {
    return this._upgradeStrategy;
  }

  // win_prefix_path - computed: true, optional: false, required: false
  public get winPrefixPath() {
    return this.getStringAttribute('win_prefix_path');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsClusterConfig {
}

export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsClusterConfigToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_auth_endpoint - computed: true, optional: false, required: false
  private _clusterAuthEndpoint = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigClusterAuthEndpointList(this, "cluster_auth_endpoint", false);
  public get clusterAuthEndpoint() {
    return this._clusterAuthEndpoint;
  }

  // default_cluster_role_for_project_members - computed: true, optional: false, required: false
  public get defaultClusterRoleForProjectMembers() {
    return this.getStringAttribute('default_cluster_role_for_project_members');
  }

  // default_pod_security_admission_configuration_template_name - computed: true, optional: false, required: false
  public get defaultPodSecurityAdmissionConfigurationTemplateName() {
    return this.getStringAttribute('default_pod_security_admission_configuration_template_name');
  }

  // desired_agent_image - computed: true, optional: false, required: false
  public get desiredAgentImage() {
    return this.getStringAttribute('desired_agent_image');
  }

  // desired_auth_image - computed: true, optional: false, required: false
  public get desiredAuthImage() {
    return this.getStringAttribute('desired_auth_image');
  }

  // docker_root_dir - computed: true, optional: false, required: false
  public get dockerRootDir() {
    return this.getStringAttribute('docker_root_dir');
  }

  // enable_network_policy - computed: true, optional: false, required: false
  public get enableNetworkPolicy() {
    return this.getBooleanAttribute('enable_network_policy');
  }

  // rke_config - computed: true, optional: false, required: false
  private _rkeConfig = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigRkeConfigList(this, "rke_config", false);
  public get rkeConfig() {
    return this._rkeConfig;
  }

  // windows_prefered_cluster - computed: true, optional: false, required: false
  public get windowsPreferedCluster() {
    return this.getBooleanAttribute('windows_prefered_cluster');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsClusterConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsClusterConfigOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisionsQuestions {
}

export function dataRancher2ClusterTemplateTemplateRevisionsQuestionsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsQuestionsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisionsQuestions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsQuestionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisionsQuestions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisionsQuestions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // variable - computed: true, optional: false, required: false
  public get variable() {
    return this.getStringAttribute('variable');
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsQuestionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsQuestionsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRancher2ClusterTemplateTemplateRevisions {
}

export function dataRancher2ClusterTemplateTemplateRevisionsToTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2ClusterTemplateTemplateRevisionsToHclTerraform(struct?: DataRancher2ClusterTemplateTemplateRevisions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2ClusterTemplateTemplateRevisionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2ClusterTemplateTemplateRevisions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2ClusterTemplateTemplateRevisions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataRancher2ClusterTemplateTemplateRevisionsClusterConfigList(this, "cluster_config", false);
  public get clusterConfig() {
    return this._clusterConfig;
  }

  // cluster_template_id - computed: true, optional: false, required: false
  public get clusterTemplateId() {
    return this.getStringAttribute('cluster_template_id');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // questions - computed: true, optional: false, required: false
  private _questions = new DataRancher2ClusterTemplateTemplateRevisionsQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
}

export class DataRancher2ClusterTemplateTemplateRevisionsList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2ClusterTemplateTemplateRevisionsOutputReference {
    return new DataRancher2ClusterTemplateTemplateRevisionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template rancher2_cluster_template}
*/
export class DataRancher2ClusterTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cluster_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2ClusterTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2ClusterTemplate to import
  * @param importFromId The id of the existing DataRancher2ClusterTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2ClusterTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cluster_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/data-sources/cluster_template rancher2_cluster_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2ClusterTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataRancher2ClusterTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cluster_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_revision_id - computed: true, optional: false, required: false
  public get defaultRevisionId() {
    return this.getStringAttribute('default_revision_id');
  }

  // description - computed: true, optional: true, required: false
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

  // labels - computed: true, optional: true, required: false
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

  // members - computed: true, optional: false, required: false
  private _members = new DataRancher2ClusterTemplateMembersList(this, "members", false);
  public get members() {
    return this._members;
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

  // template_revisions - computed: true, optional: false, required: false
  private _templateRevisions = new DataRancher2ClusterTemplateTemplateRevisionsList(this, "template_revisions", false);
  public get templateRevisions() {
    return this._templateRevisions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
