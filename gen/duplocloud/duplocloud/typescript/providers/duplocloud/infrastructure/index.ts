// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud account ID — use this for Azure (Subscription ID) and Google Cloud (Project ID). Not applicable for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#account_id Infrastructure#account_id}
  */
  readonly accountId?: string;
  /**
  * The CIDR to use for the VPC or VNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#address_prefix Infrastructure#address_prefix}
  */
  readonly addressPrefix: string;
  /**
  * The number of availability zones.  Must be one of: `2`, `3`, or `4`. This is applicable only for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#azcount Infrastructure#azcount}
  */
  readonly azcount?: number;
  /**
  * The numerical index of cloud provider to use for the infrastructure.
  * Should be one of:
  * 
  *    - `0` : AWS
  *    - `2` : Azure
  *    - `3` : Google
  *  Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#cloud Infrastructure#cloud}
  */
  readonly cloud?: number;
  /**
  * cluster IP CIDR defines a private IP address range used for internal Kubernetes services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#cluster_ip_cidr Infrastructure#cluster_ip_cidr}
  */
  readonly clusterIpCidr?: string;
  /**
  * Whether or not this resource should delete any settings not specified by this resource. **WARNING:**  It is not recommended to change the default value of `false`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#delete_unspecified_settings Infrastructure#delete_unspecified_settings}
  */
  readonly deleteUnspecifiedSettings?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable container insights for an ECS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#enable_container_insights Infrastructure#enable_container_insights}
  */
  readonly enableContainerInsights?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to provision an ECS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#enable_ecs_cluster Infrastructure#enable_ecs_cluster}
  */
  readonly enableEcsCluster?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to provision a kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#enable_k8_cluster Infrastructure#enable_k8_cluster}
  */
  readonly enableK8Cluster: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#id Infrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the infrastructure.  Infrastructure names are globally unique and less than 13 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#infra_name Infrastructure#infra_name}
  */
  readonly infraName: string;
  /**
  * Whether or not to make GKE with autopilot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#is_serverless_kubernetes Infrastructure#is_serverless_kubernetes}
  */
  readonly isServerlessKubernetes?: boolean | cdktf.IResolvable;
  /**
  * The cloud provider region.  The Duplo portal must have already been configured to support this region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#region Infrastructure#region}
  */
  readonly region: string;
  /**
  * The address prefixe to use for the subnet. This is applicable only for Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#subnet_address_prefix Infrastructure#subnet_address_prefix}
  */
  readonly subnetAddressPrefix?: string;
  /**
  * The CIDR subnet size (in bits) for the automatically created subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#subnet_cidr Infrastructure#subnet_cidr}
  */
  readonly subnetCidr?: number;
  /**
  * The name of the subnet. This is applicable only for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#subnet_name Infrastructure#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Whether or not to wait until Duplo has destroyed the infrastructure. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#wait_until_deleted Infrastructure#wait_until_deleted}
  */
  readonly waitUntilDeleted?: boolean | cdktf.IResolvable;
  /**
  * custom_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#custom_data Infrastructure#custom_data}
  */
  readonly customData?: InfrastructureCustomData[] | cdktf.IResolvable;
  /**
  * setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#setting Infrastructure#setting}
  */
  readonly setting?: InfrastructureSetting[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#timeouts Infrastructure#timeouts}
  */
  readonly timeouts?: InfrastructureTimeouts;
}
export interface InfrastructureAllSettings {
}

export function infrastructureAllSettingsToTerraform(struct?: InfrastructureAllSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructureAllSettingsToHclTerraform(struct?: InfrastructureAllSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructureAllSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureAllSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureAllSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class InfrastructureAllSettingsList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructureAllSettingsOutputReference {
    return new InfrastructureAllSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructurePrivateSubnetsTags {
}

export function infrastructurePrivateSubnetsTagsToTerraform(struct?: InfrastructurePrivateSubnetsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructurePrivateSubnetsTagsToHclTerraform(struct?: InfrastructurePrivateSubnetsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructurePrivateSubnetsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructurePrivateSubnetsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructurePrivateSubnetsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class InfrastructurePrivateSubnetsTagsList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructurePrivateSubnetsTagsOutputReference {
    return new InfrastructurePrivateSubnetsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructurePrivateSubnets {
}

export function infrastructurePrivateSubnetsToTerraform(struct?: InfrastructurePrivateSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructurePrivateSubnetsToHclTerraform(struct?: InfrastructurePrivateSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructurePrivateSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructurePrivateSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructurePrivateSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new InfrastructurePrivateSubnetsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class InfrastructurePrivateSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructurePrivateSubnetsOutputReference {
    return new InfrastructurePrivateSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructurePublicSubnetsTags {
}

export function infrastructurePublicSubnetsTagsToTerraform(struct?: InfrastructurePublicSubnetsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructurePublicSubnetsTagsToHclTerraform(struct?: InfrastructurePublicSubnetsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructurePublicSubnetsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructurePublicSubnetsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructurePublicSubnetsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class InfrastructurePublicSubnetsTagsList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructurePublicSubnetsTagsOutputReference {
    return new InfrastructurePublicSubnetsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructurePublicSubnets {
}

export function infrastructurePublicSubnetsToTerraform(struct?: InfrastructurePublicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructurePublicSubnetsToHclTerraform(struct?: InfrastructurePublicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructurePublicSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructurePublicSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructurePublicSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new InfrastructurePublicSubnetsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class InfrastructurePublicSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructurePublicSubnetsOutputReference {
    return new InfrastructurePublicSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureSecurityGroupsRules {
}

export function infrastructureSecurityGroupsRulesToTerraform(struct?: InfrastructureSecurityGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructureSecurityGroupsRulesToHclTerraform(struct?: InfrastructureSecurityGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructureSecurityGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureSecurityGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureSecurityGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // destination_rule_type - computed: true, optional: false, required: false
  public get destinationRuleType() {
    return this.getNumberAttribute('destination_rule_type');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_address_prefix - computed: true, optional: false, required: false
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }

  // source_port_range - computed: true, optional: false, required: false
  public get sourcePortRange() {
    return this.getStringAttribute('source_port_range');
  }

  // source_rule_type - computed: true, optional: false, required: false
  public get sourceRuleType() {
    return this.getNumberAttribute('source_rule_type');
  }
}

export class InfrastructureSecurityGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructureSecurityGroupsRulesOutputReference {
    return new InfrastructureSecurityGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureSecurityGroups {
}

export function infrastructureSecurityGroupsToTerraform(struct?: InfrastructureSecurityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function infrastructureSecurityGroupsToHclTerraform(struct?: InfrastructureSecurityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfrastructureSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureSecurityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureSecurityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new InfrastructureSecurityGroupsRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class InfrastructureSecurityGroupsList extends cdktf.ComplexList {

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
  public get(index: number): InfrastructureSecurityGroupsOutputReference {
    return new InfrastructureSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureCustomData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#key Infrastructure#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#value Infrastructure#value}
  */
  readonly value: string;
}

export function infrastructureCustomDataToTerraform(struct?: InfrastructureCustomData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function infrastructureCustomDataToHclTerraform(struct?: InfrastructureCustomData | cdktf.IResolvable): any {
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

export class InfrastructureCustomDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureCustomData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InfrastructureCustomData | cdktf.IResolvable | undefined) {
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

export class InfrastructureCustomDataList extends cdktf.ComplexList {
  public internalValue? : InfrastructureCustomData[] | cdktf.IResolvable

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
  public get(index: number): InfrastructureCustomDataOutputReference {
    return new InfrastructureCustomDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#key Infrastructure#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#value Infrastructure#value}
  */
  readonly value: string;
}

export function infrastructureSettingToTerraform(struct?: InfrastructureSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function infrastructureSettingToHclTerraform(struct?: InfrastructureSetting | cdktf.IResolvable): any {
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

export class InfrastructureSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfrastructureSetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InfrastructureSetting | cdktf.IResolvable | undefined) {
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

export class InfrastructureSettingList extends cdktf.ComplexList {
  public internalValue? : InfrastructureSetting[] | cdktf.IResolvable

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
  public get(index: number): InfrastructureSettingOutputReference {
    return new InfrastructureSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfrastructureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#create Infrastructure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#delete Infrastructure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#update Infrastructure#update}
  */
  readonly update?: string;
}

export function infrastructureTimeoutsToTerraform(struct?: InfrastructureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function infrastructureTimeoutsToHclTerraform(struct?: InfrastructureTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class InfrastructureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InfrastructureTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure duplocloud_infrastructure}
*/
export class Infrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Infrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Infrastructure to import
  * @param importFromId The id of the existing Infrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Infrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/infrastructure duplocloud_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: InfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._addressPrefix = config.addressPrefix;
    this._azcount = config.azcount;
    this._cloud = config.cloud;
    this._clusterIpCidr = config.clusterIpCidr;
    this._deleteUnspecifiedSettings = config.deleteUnspecifiedSettings;
    this._enableContainerInsights = config.enableContainerInsights;
    this._enableEcsCluster = config.enableEcsCluster;
    this._enableK8Cluster = config.enableK8Cluster;
    this._id = config.id;
    this._infraName = config.infraName;
    this._isServerlessKubernetes = config.isServerlessKubernetes;
    this._region = config.region;
    this._subnetAddressPrefix = config.subnetAddressPrefix;
    this._subnetCidr = config.subnetCidr;
    this._subnetName = config.subnetName;
    this._waitUntilDeleted = config.waitUntilDeleted;
    this._customData.internalValue = config.customData;
    this._setting.internalValue = config.setting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // address_prefix - computed: false, optional: false, required: true
  private _addressPrefix?: string; 
  public get addressPrefix() {
    return this.getStringAttribute('address_prefix');
  }
  public set addressPrefix(value: string) {
    this._addressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixInput() {
    return this._addressPrefix;
  }

  // all_settings - computed: true, optional: false, required: false
  private _allSettings = new InfrastructureAllSettingsList(this, "all_settings", false);
  public get allSettings() {
    return this._allSettings;
  }

  // azcount - computed: false, optional: true, required: false
  private _azcount?: number; 
  public get azcount() {
    return this.getNumberAttribute('azcount');
  }
  public set azcount(value: number) {
    this._azcount = value;
  }
  public resetAzcount() {
    this._azcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azcountInput() {
    return this._azcount;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: number; 
  public get cloud() {
    return this.getNumberAttribute('cloud');
  }
  public set cloud(value: number) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cluster_ip_cidr - computed: true, optional: true, required: false
  private _clusterIpCidr?: string; 
  public get clusterIpCidr() {
    return this.getStringAttribute('cluster_ip_cidr');
  }
  public set clusterIpCidr(value: string) {
    this._clusterIpCidr = value;
  }
  public resetClusterIpCidr() {
    this._clusterIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpCidrInput() {
    return this._clusterIpCidr;
  }

  // delete_unspecified_settings - computed: false, optional: true, required: false
  private _deleteUnspecifiedSettings?: boolean | cdktf.IResolvable; 
  public get deleteUnspecifiedSettings() {
    return this.getBooleanAttribute('delete_unspecified_settings');
  }
  public set deleteUnspecifiedSettings(value: boolean | cdktf.IResolvable) {
    this._deleteUnspecifiedSettings = value;
  }
  public resetDeleteUnspecifiedSettings() {
    this._deleteUnspecifiedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUnspecifiedSettingsInput() {
    return this._deleteUnspecifiedSettings;
  }

  // enable_container_insights - computed: true, optional: true, required: false
  private _enableContainerInsights?: boolean | cdktf.IResolvable; 
  public get enableContainerInsights() {
    return this.getBooleanAttribute('enable_container_insights');
  }
  public set enableContainerInsights(value: boolean | cdktf.IResolvable) {
    this._enableContainerInsights = value;
  }
  public resetEnableContainerInsights() {
    this._enableContainerInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContainerInsightsInput() {
    return this._enableContainerInsights;
  }

  // enable_ecs_cluster - computed: true, optional: true, required: false
  private _enableEcsCluster?: boolean | cdktf.IResolvable; 
  public get enableEcsCluster() {
    return this.getBooleanAttribute('enable_ecs_cluster');
  }
  public set enableEcsCluster(value: boolean | cdktf.IResolvable) {
    this._enableEcsCluster = value;
  }
  public resetEnableEcsCluster() {
    this._enableEcsCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsClusterInput() {
    return this._enableEcsCluster;
  }

  // enable_k8_cluster - computed: false, optional: false, required: true
  private _enableK8Cluster?: boolean | cdktf.IResolvable; 
  public get enableK8Cluster() {
    return this.getBooleanAttribute('enable_k8_cluster');
  }
  public set enableK8Cluster(value: boolean | cdktf.IResolvable) {
    this._enableK8Cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableK8ClusterInput() {
    return this._enableK8Cluster;
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

  // infra_name - computed: false, optional: false, required: true
  private _infraName?: string; 
  public get infraName() {
    return this.getStringAttribute('infra_name');
  }
  public set infraName(value: string) {
    this._infraName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraNameInput() {
    return this._infraName;
  }

  // is_serverless_kubernetes - computed: true, optional: true, required: false
  private _isServerlessKubernetes?: boolean | cdktf.IResolvable; 
  public get isServerlessKubernetes() {
    return this.getBooleanAttribute('is_serverless_kubernetes');
  }
  public set isServerlessKubernetes(value: boolean | cdktf.IResolvable) {
    this._isServerlessKubernetes = value;
  }
  public resetIsServerlessKubernetes() {
    this._isServerlessKubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isServerlessKubernetesInput() {
    return this._isServerlessKubernetes;
  }

  // nat_ips - computed: true, optional: false, required: false
  public get natIps() {
    return this.getListAttribute('nat_ips');
  }

  // private_subnets - computed: true, optional: false, required: false
  private _privateSubnets = new InfrastructurePrivateSubnetsList(this, "private_subnets", true);
  public get privateSubnets() {
    return this._privateSubnets;
  }

  // public_subnets - computed: true, optional: false, required: false
  private _publicSubnets = new InfrastructurePublicSubnetsList(this, "public_subnets", true);
  public get publicSubnets() {
    return this._publicSubnets;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups - computed: true, optional: false, required: false
  private _securityGroups = new InfrastructureSecurityGroupsList(this, "security_groups", true);
  public get securityGroups() {
    return this._securityGroups;
  }

  // specified_settings - computed: true, optional: false, required: false
  public get specifiedSettings() {
    return this.getListAttribute('specified_settings');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_address_prefix - computed: true, optional: true, required: false
  private _subnetAddressPrefix?: string; 
  public get subnetAddressPrefix() {
    return this.getStringAttribute('subnet_address_prefix');
  }
  public set subnetAddressPrefix(value: string) {
    this._subnetAddressPrefix = value;
  }
  public resetSubnetAddressPrefix() {
    this._subnetAddressPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetAddressPrefixInput() {
    return this._subnetAddressPrefix;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: number; 
  public get subnetCidr() {
    return this.getNumberAttribute('subnet_cidr');
  }
  public set subnetCidr(value: number) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_fullname - computed: true, optional: false, required: false
  public get subnetFullname() {
    return this.getStringAttribute('subnet_fullname');
  }

  // subnet_name - computed: true, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // wait_until_deleted - computed: false, optional: true, required: false
  private _waitUntilDeleted?: boolean | cdktf.IResolvable; 
  public get waitUntilDeleted() {
    return this.getBooleanAttribute('wait_until_deleted');
  }
  public set waitUntilDeleted(value: boolean | cdktf.IResolvable) {
    this._waitUntilDeleted = value;
  }
  public resetWaitUntilDeleted() {
    this._waitUntilDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilDeletedInput() {
    return this._waitUntilDeleted;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData = new InfrastructureCustomDataList(this, "custom_data", false);
  public get customData() {
    return this._customData;
  }
  public putCustomData(value: InfrastructureCustomData[] | cdktf.IResolvable) {
    this._customData.internalValue = value;
  }
  public resetCustomData() {
    this._customData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData.internalValue;
  }

  // setting - computed: false, optional: true, required: false
  private _setting = new InfrastructureSettingList(this, "setting", false);
  public get setting() {
    return this._setting;
  }
  public putSetting(value: InfrastructureSetting[] | cdktf.IResolvable) {
    this._setting.internalValue = value;
  }
  public resetSetting() {
    this._setting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InfrastructureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InfrastructureTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      address_prefix: cdktf.stringToTerraform(this._addressPrefix),
      azcount: cdktf.numberToTerraform(this._azcount),
      cloud: cdktf.numberToTerraform(this._cloud),
      cluster_ip_cidr: cdktf.stringToTerraform(this._clusterIpCidr),
      delete_unspecified_settings: cdktf.booleanToTerraform(this._deleteUnspecifiedSettings),
      enable_container_insights: cdktf.booleanToTerraform(this._enableContainerInsights),
      enable_ecs_cluster: cdktf.booleanToTerraform(this._enableEcsCluster),
      enable_k8_cluster: cdktf.booleanToTerraform(this._enableK8Cluster),
      id: cdktf.stringToTerraform(this._id),
      infra_name: cdktf.stringToTerraform(this._infraName),
      is_serverless_kubernetes: cdktf.booleanToTerraform(this._isServerlessKubernetes),
      region: cdktf.stringToTerraform(this._region),
      subnet_address_prefix: cdktf.stringToTerraform(this._subnetAddressPrefix),
      subnet_cidr: cdktf.numberToTerraform(this._subnetCidr),
      subnet_name: cdktf.stringToTerraform(this._subnetName),
      wait_until_deleted: cdktf.booleanToTerraform(this._waitUntilDeleted),
      custom_data: cdktf.listMapper(infrastructureCustomDataToTerraform, true)(this._customData.internalValue),
      setting: cdktf.listMapper(infrastructureSettingToTerraform, true)(this._setting.internalValue),
      timeouts: infrastructureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_prefix: {
        value: cdktf.stringToHclTerraform(this._addressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azcount: {
        value: cdktf.numberToHclTerraform(this._azcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud: {
        value: cdktf.numberToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_ip_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterIpCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_unspecified_settings: {
        value: cdktf.booleanToHclTerraform(this._deleteUnspecifiedSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_container_insights: {
        value: cdktf.booleanToHclTerraform(this._enableContainerInsights),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ecs_cluster: {
        value: cdktf.booleanToHclTerraform(this._enableEcsCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_k8_cluster: {
        value: cdktf.booleanToHclTerraform(this._enableK8Cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infra_name: {
        value: cdktf.stringToHclTerraform(this._infraName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_serverless_kubernetes: {
        value: cdktf.booleanToHclTerraform(this._isServerlessKubernetes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_address_prefix: {
        value: cdktf.stringToHclTerraform(this._subnetAddressPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_cidr: {
        value: cdktf.numberToHclTerraform(this._subnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_name: {
        value: cdktf.stringToHclTerraform(this._subnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_deleted: {
        value: cdktf.booleanToHclTerraform(this._waitUntilDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_data: {
        value: cdktf.listMapperHcl(infrastructureCustomDataToHclTerraform, true)(this._customData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureCustomDataList",
      },
      setting: {
        value: cdktf.listMapperHcl(infrastructureSettingToHclTerraform, true)(this._setting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfrastructureSettingList",
      },
      timeouts: {
        value: infrastructureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InfrastructureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
