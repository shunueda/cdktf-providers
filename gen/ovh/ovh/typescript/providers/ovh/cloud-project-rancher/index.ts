// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectRancherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#project_id CloudProjectRancher#project_id}
  */
  readonly projectId: string;
  /**
  * Rancher ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#rancher_id CloudProjectRancher#rancher_id}
  */
  readonly rancherId?: string;
  /**
  * Target specification for the managed Rancher service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#target_spec CloudProjectRancher#target_spec}
  */
  readonly targetSpec: CloudProjectRancherTargetSpec;
}
export interface CloudProjectRancherCurrentStateIpRestrictions {
}

export function cloudProjectRancherCurrentStateIpRestrictionsToTerraform(struct?: CloudProjectRancherCurrentStateIpRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectRancherCurrentStateIpRestrictionsToHclTerraform(struct?: CloudProjectRancherCurrentStateIpRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectRancherCurrentStateIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectRancherCurrentStateIpRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherCurrentStateIpRestrictions | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class CloudProjectRancherCurrentStateIpRestrictionsList extends cdktf.ComplexList {

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
  public get(index: number): CloudProjectRancherCurrentStateIpRestrictionsOutputReference {
    return new CloudProjectRancherCurrentStateIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectRancherCurrentStateNetworking {
}

export function cloudProjectRancherCurrentStateNetworkingToTerraform(struct?: CloudProjectRancherCurrentStateNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectRancherCurrentStateNetworkingToHclTerraform(struct?: CloudProjectRancherCurrentStateNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectRancherCurrentStateNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectRancherCurrentStateNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherCurrentStateNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // egress_cidr_blocks - computed: true, optional: false, required: false
  public get egressCidrBlocks() {
    return this.getListAttribute('egress_cidr_blocks');
  }
}
export interface CloudProjectRancherCurrentStateUsage {
}

export function cloudProjectRancherCurrentStateUsageToTerraform(struct?: CloudProjectRancherCurrentStateUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectRancherCurrentStateUsageToHclTerraform(struct?: CloudProjectRancherCurrentStateUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectRancherCurrentStateUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectRancherCurrentStateUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherCurrentStateUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datetime - computed: true, optional: false, required: false
  public get datetime() {
    return this.getStringAttribute('datetime');
  }

  // orchestrated_vcpus - computed: true, optional: false, required: false
  public get orchestratedVcpus() {
    return this.getNumberAttribute('orchestrated_vcpus');
  }
}
export interface CloudProjectRancherCurrentState {
}

export function cloudProjectRancherCurrentStateToTerraform(struct?: CloudProjectRancherCurrentState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectRancherCurrentStateToHclTerraform(struct?: CloudProjectRancherCurrentState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectRancherCurrentStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectRancherCurrentState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherCurrentState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_password - computed: true, optional: false, required: false
  public get bootstrapPassword() {
    return this.getStringAttribute('bootstrap_password');
  }

  // iam_auth_enabled - computed: true, optional: false, required: false
  public get iamAuthEnabled() {
    return this.getBooleanAttribute('iam_auth_enabled');
  }

  // ip_restrictions - computed: true, optional: false, required: false
  private _ipRestrictions = new CloudProjectRancherCurrentStateIpRestrictionsList(this, "ip_restrictions", false);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networking - computed: true, optional: false, required: false
  private _networking = new CloudProjectRancherCurrentStateNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new CloudProjectRancherCurrentStateUsageOutputReference(this, "usage");
  public get usage() {
    return this._usage;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface CloudProjectRancherCurrentTasks {
}

export function cloudProjectRancherCurrentTasksToTerraform(struct?: CloudProjectRancherCurrentTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudProjectRancherCurrentTasksToHclTerraform(struct?: CloudProjectRancherCurrentTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudProjectRancherCurrentTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectRancherCurrentTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherCurrentTasks | undefined) {
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

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CloudProjectRancherCurrentTasksList extends cdktf.ComplexList {

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
  public get(index: number): CloudProjectRancherCurrentTasksOutputReference {
    return new CloudProjectRancherCurrentTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectRancherTargetSpecIpRestrictions {
  /**
  * Allowed CIDR block (/subnet is optional, if unspecified then /32 will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#cidr_block CloudProjectRancher#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Description of the allowed CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#description CloudProjectRancher#description}
  */
  readonly description?: string;
}

export function cloudProjectRancherTargetSpecIpRestrictionsToTerraform(struct?: CloudProjectRancherTargetSpecIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function cloudProjectRancherTargetSpecIpRestrictionsToHclTerraform(struct?: CloudProjectRancherTargetSpecIpRestrictions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectRancherTargetSpecIpRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudProjectRancherTargetSpecIpRestrictions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherTargetSpecIpRestrictions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
    }
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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
}

export class CloudProjectRancherTargetSpecIpRestrictionsList extends cdktf.ComplexList {
  public internalValue? : CloudProjectRancherTargetSpecIpRestrictions[] | cdktf.IResolvable

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
  public get(index: number): CloudProjectRancherTargetSpecIpRestrictionsOutputReference {
    return new CloudProjectRancherTargetSpecIpRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudProjectRancherTargetSpec {
  /**
  * Allows Rancher to use identities managed by OVHcloud IAM (Identity and Access Management) to control access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#iam_auth_enabled CloudProjectRancher#iam_auth_enabled}
  */
  readonly iamAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of allowed CIDR blocks for a managed Rancher service's IP restrictions. When empty, any IP is allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#ip_restrictions CloudProjectRancher#ip_restrictions}
  */
  readonly ipRestrictions?: CloudProjectRancherTargetSpecIpRestrictions[] | cdktf.IResolvable;
  /**
  * Name of the managed Rancher service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#name CloudProjectRancher#name}
  */
  readonly name: string;
  /**
  * Plan of the managed Rancher service. Available plans for an existing managed Rancher can be retrieved using GET /rancher/rancherID/capabilities/plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#plan CloudProjectRancher#plan}
  */
  readonly plan: string;
  /**
  * Version of the managed Rancher service. Available versions for an existing managed Rancher can be retrieved using GET /rancher/rancherID/capabilities/version. Default is the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#version CloudProjectRancher#version}
  */
  readonly version?: string;
}

export function cloudProjectRancherTargetSpecToTerraform(struct?: CloudProjectRancherTargetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_auth_enabled: cdktf.booleanToTerraform(struct!.iamAuthEnabled),
    ip_restrictions: cdktf.listMapper(cloudProjectRancherTargetSpecIpRestrictionsToTerraform, false)(struct!.ipRestrictions),
    name: cdktf.stringToTerraform(struct!.name),
    plan: cdktf.stringToTerraform(struct!.plan),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudProjectRancherTargetSpecToHclTerraform(struct?: CloudProjectRancherTargetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_auth_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.iamAuthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_restrictions: {
      value: cdktf.listMapperHcl(cloudProjectRancherTargetSpecIpRestrictionsToHclTerraform, false)(struct!.ipRestrictions),
      isBlock: true,
      type: "list",
      storageClassType: "CloudProjectRancherTargetSpecIpRestrictionsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectRancherTargetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectRancherTargetSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamAuthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamAuthEnabled = this._iamAuthEnabled;
    }
    if (this._ipRestrictions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRestrictions = this._ipRestrictions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectRancherTargetSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamAuthEnabled = undefined;
      this._ipRestrictions.internalValue = undefined;
      this._name = undefined;
      this._plan = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamAuthEnabled = value.iamAuthEnabled;
      this._ipRestrictions.internalValue = value.ipRestrictions;
      this._name = value.name;
      this._plan = value.plan;
      this._version = value.version;
    }
  }

  // iam_auth_enabled - computed: true, optional: true, required: false
  private _iamAuthEnabled?: boolean | cdktf.IResolvable; 
  public get iamAuthEnabled() {
    return this.getBooleanAttribute('iam_auth_enabled');
  }
  public set iamAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._iamAuthEnabled = value;
  }
  public resetIamAuthEnabled() {
    this._iamAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamAuthEnabledInput() {
    return this._iamAuthEnabled;
  }

  // ip_restrictions - computed: true, optional: true, required: false
  private _ipRestrictions = new CloudProjectRancherTargetSpecIpRestrictionsList(this, "ip_restrictions", false);
  public get ipRestrictions() {
    return this._ipRestrictions;
  }
  public putIpRestrictions(value: CloudProjectRancherTargetSpecIpRestrictions[] | cdktf.IResolvable) {
    this._ipRestrictions.internalValue = value;
  }
  public resetIpRestrictions() {
    this._ipRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionsInput() {
    return this._ipRestrictions.internalValue;
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

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher ovh_cloud_project_rancher}
*/
export class CloudProjectRancher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_rancher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectRancher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectRancher to import
  * @param importFromId The id of the existing CloudProjectRancher that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectRancher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_rancher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/cloud_project_rancher ovh_cloud_project_rancher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectRancherConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectRancherConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_rancher',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._rancherId = config.rancherId;
    this._targetSpec.internalValue = config.targetSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_state - computed: true, optional: false, required: false
  private _currentState = new CloudProjectRancherCurrentStateOutputReference(this, "current_state");
  public get currentState() {
    return this._currentState;
  }

  // current_tasks - computed: true, optional: false, required: false
  private _currentTasks = new CloudProjectRancherCurrentTasksList(this, "current_tasks", false);
  public get currentTasks() {
    return this._currentTasks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rancher_id - computed: true, optional: true, required: false
  private _rancherId?: string; 
  public get rancherId() {
    return this.getStringAttribute('rancher_id');
  }
  public set rancherId(value: string) {
    this._rancherId = value;
  }
  public resetRancherId() {
    this._rancherId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherIdInput() {
    return this._rancherId;
  }

  // resource_status - computed: true, optional: false, required: false
  public get resourceStatus() {
    return this.getStringAttribute('resource_status');
  }

  // target_spec - computed: false, optional: false, required: true
  private _targetSpec = new CloudProjectRancherTargetSpecOutputReference(this, "target_spec");
  public get targetSpec() {
    return this._targetSpec;
  }
  public putTargetSpec(value: CloudProjectRancherTargetSpec) {
    this._targetSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSpecInput() {
    return this._targetSpec.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      rancher_id: cdktf.stringToTerraform(this._rancherId),
      target_spec: cloudProjectRancherTargetSpecToTerraform(this._targetSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rancher_id: {
        value: cdktf.stringToHclTerraform(this._rancherId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_spec: {
        value: cloudProjectRancherTargetSpecToHclTerraform(this._targetSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectRancherTargetSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
