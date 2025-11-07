// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ByocProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS configuration for the BYOC project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#aws ByocProject#aws}
  */
  readonly aws?: ByocProjectAws;
  /**
  * Instance type configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#instances ByocProject#instances}
  */
  readonly instances: ByocProjectInstances;
  /**
  * The name of the BYOC project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#name ByocProject#name}
  */
  readonly name: string;
  /**
  * The status of the BYOC project, possible values are RUNNING, STOPPED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#status ByocProject#status}
  */
  readonly status: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#timeouts ByocProject#timeouts}
  */
  readonly timeouts?: ByocProjectTimeouts;
}
export interface ByocProjectAwsNetwork {
  /**
  * List of security group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#security_group_ids ByocProject#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * List of subnet IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#subnet_ids ByocProject#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * VPC endpoint ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#vpc_endpoint_id ByocProject#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * VPC ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#vpc_id ByocProject#vpc_id}
  */
  readonly vpcId: string;
}

export function byocProjectAwsNetworkToTerraform(struct?: ByocProjectAwsNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function byocProjectAwsNetworkToHclTerraform(struct?: ByocProjectAwsNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectAwsNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectAwsNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectAwsNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcEndpointId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcEndpointId = value.vpcEndpointId;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_endpoint_id - computed: false, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface ByocProjectAwsRoleArn {
  /**
  * Cross account role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#cross_account ByocProject#cross_account}
  */
  readonly crossAccount: string;
  /**
  * EKS role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#eks ByocProject#eks}
  */
  readonly eks: string;
  /**
  * Storage role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#storage ByocProject#storage}
  */
  readonly storage: string;
}

export function byocProjectAwsRoleArnToTerraform(struct?: ByocProjectAwsRoleArn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_account: cdktf.stringToTerraform(struct!.crossAccount),
    eks: cdktf.stringToTerraform(struct!.eks),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function byocProjectAwsRoleArnToHclTerraform(struct?: ByocProjectAwsRoleArn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_account: {
      value: cdktf.stringToHclTerraform(struct!.crossAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eks: {
      value: cdktf.stringToHclTerraform(struct!.eks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectAwsRoleArnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectAwsRoleArn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossAccount = this._crossAccount;
    }
    if (this._eks !== undefined) {
      hasAnyValues = true;
      internalValueResult.eks = this._eks;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectAwsRoleArn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crossAccount = undefined;
      this._eks = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crossAccount = value.crossAccount;
      this._eks = value.eks;
      this._storage = value.storage;
    }
  }

  // cross_account - computed: false, optional: false, required: true
  private _crossAccount?: string; 
  public get crossAccount() {
    return this.getStringAttribute('cross_account');
  }
  public set crossAccount(value: string) {
    this._crossAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountInput() {
    return this._crossAccount;
  }

  // eks - computed: false, optional: false, required: true
  private _eks?: string; 
  public get eks() {
    return this.getStringAttribute('eks');
  }
  public set eks(value: string) {
    this._eks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eksInput() {
    return this._eks;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface ByocProjectAwsStorage {
  /**
  * Storage bucket ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#bucket_id ByocProject#bucket_id}
  */
  readonly bucketId: string;
}

export function byocProjectAwsStorageToTerraform(struct?: ByocProjectAwsStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_id: cdktf.stringToTerraform(struct!.bucketId),
  }
}


export function byocProjectAwsStorageToHclTerraform(struct?: ByocProjectAwsStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.bucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectAwsStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectAwsStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketId = this._bucketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectAwsStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketId = value.bucketId;
    }
  }

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }
}
export interface ByocProjectAws {
  /**
  * Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#network ByocProject#network}
  */
  readonly network: ByocProjectAwsNetwork;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#region ByocProject#region}
  */
  readonly region: string;
  /**
  * Role ARN configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#role_arn ByocProject#role_arn}
  */
  readonly roleArn: ByocProjectAwsRoleArn;
  /**
  * Storage configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#storage ByocProject#storage}
  */
  readonly storage: ByocProjectAwsStorage;
}

export function byocProjectAwsToTerraform(struct?: ByocProjectAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: byocProjectAwsNetworkToTerraform(struct!.network),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: byocProjectAwsRoleArnToTerraform(struct!.roleArn),
    storage: byocProjectAwsStorageToTerraform(struct!.storage),
  }
}


export function byocProjectAwsToHclTerraform(struct?: ByocProjectAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: byocProjectAwsNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectAwsNetwork",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: byocProjectAwsRoleArnToHclTerraform(struct!.roleArn),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectAwsRoleArn",
    },
    storage: {
      value: byocProjectAwsStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectAwsStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network.internalValue = undefined;
      this._region = undefined;
      this._roleArn.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network.internalValue = value.network;
      this._region = value.region;
      this._roleArn.internalValue = value.roleArn;
      this._storage.internalValue = value.storage;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network = new ByocProjectAwsNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ByocProjectAwsNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn = new ByocProjectAwsRoleArnOutputReference(this, "role_arn");
  public get roleArn() {
    return this._roleArn;
  }
  public putRoleArn(value: ByocProjectAwsRoleArn) {
    this._roleArn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new ByocProjectAwsStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ByocProjectAwsStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface ByocProjectInstancesCore {
  /**
  * core VM instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#count ByocProject#count}
  */
  readonly count: number;
  /**
  * Instance type for core virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#vm ByocProject#vm}
  */
  readonly vm: string;
}

export function byocProjectInstancesCoreToTerraform(struct?: ByocProjectInstancesCore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocProjectInstancesCoreToHclTerraform(struct?: ByocProjectInstancesCore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectInstancesCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectInstancesCore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectInstancesCore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._vm = value.vm;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocProjectInstancesFundamental {
  /**
  * fundamental VM maximum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#max_count ByocProject#max_count}
  */
  readonly maxCount: number;
  /**
  * fundamental VM minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#min_count ByocProject#min_count}
  */
  readonly minCount: number;
  /**
  * Instance type for fundamental virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#vm ByocProject#vm}
  */
  readonly vm: string;
}

export function byocProjectInstancesFundamentalToTerraform(struct?: ByocProjectInstancesFundamental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocProjectInstancesFundamentalToHclTerraform(struct?: ByocProjectInstancesFundamental | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectInstancesFundamentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectInstancesFundamental | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectInstancesFundamental | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._vm = value.vm;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocProjectInstancesIndex {
  /**
  * index VM maximum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#max_count ByocProject#max_count}
  */
  readonly maxCount: number;
  /**
  * index VM minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#min_count ByocProject#min_count}
  */
  readonly minCount: number;
  /**
  * Instance type for index virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#vm ByocProject#vm}
  */
  readonly vm: string;
}

export function byocProjectInstancesIndexToTerraform(struct?: ByocProjectInstancesIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocProjectInstancesIndexToHclTerraform(struct?: ByocProjectInstancesIndex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectInstancesIndexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectInstancesIndex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectInstancesIndex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._vm = value.vm;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocProjectInstancesSearch {
  /**
  * search VM maximum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#max_count ByocProject#max_count}
  */
  readonly maxCount: number;
  /**
  * search VM minimum instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#min_count ByocProject#min_count}
  */
  readonly minCount: number;
  /**
  * Instance type for search virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#vm ByocProject#vm}
  */
  readonly vm: string;
}

export function byocProjectInstancesSearchToTerraform(struct?: ByocProjectInstancesSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    vm: cdktf.stringToTerraform(struct!.vm),
  }
}


export function byocProjectInstancesSearchToHclTerraform(struct?: ByocProjectInstancesSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm: {
      value: cdktf.stringToHclTerraform(struct!.vm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectInstancesSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectInstancesSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._vm !== undefined) {
      hasAnyValues = true;
      internalValueResult.vm = this._vm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectInstancesSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._vm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._vm = value.vm;
    }
  }

  // max_count - computed: false, optional: false, required: true
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: false, required: true
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // vm - computed: false, optional: false, required: true
  private _vm?: string; 
  public get vm() {
    return this.getStringAttribute('vm');
  }
  public set vm(value: string) {
    this._vm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }
}
export interface ByocProjectInstances {
  /**
  * Architecture type (X86 or ARM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#arch ByocProject#arch}
  */
  readonly arch?: string;
  /**
  * Enable auto scaling for instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#auto_scaling ByocProject#auto_scaling}
  */
  readonly autoScaling?: boolean | cdktf.IResolvable;
  /**
  * core VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#core ByocProject#core}
  */
  readonly core: ByocProjectInstancesCore;
  /**
  * fundamental VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#fundamental ByocProject#fundamental}
  */
  readonly fundamental: ByocProjectInstancesFundamental;
  /**
  * index VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#index ByocProject#index}
  */
  readonly index: ByocProjectInstancesIndex;
  /**
  * search VM configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#search ByocProject#search}
  */
  readonly search: ByocProjectInstancesSearch;
}

export function byocProjectInstancesToTerraform(struct?: ByocProjectInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    auto_scaling: cdktf.booleanToTerraform(struct!.autoScaling),
    core: byocProjectInstancesCoreToTerraform(struct!.core),
    fundamental: byocProjectInstancesFundamentalToTerraform(struct!.fundamental),
    index: byocProjectInstancesIndexToTerraform(struct!.index),
    search: byocProjectInstancesSearchToTerraform(struct!.search),
  }
}


export function byocProjectInstancesToHclTerraform(struct?: ByocProjectInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.autoScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    core: {
      value: byocProjectInstancesCoreToHclTerraform(struct!.core),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectInstancesCore",
    },
    fundamental: {
      value: byocProjectInstancesFundamentalToHclTerraform(struct!.fundamental),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectInstancesFundamental",
    },
    index: {
      value: byocProjectInstancesIndexToHclTerraform(struct!.index),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectInstancesIndex",
    },
    search: {
      value: byocProjectInstancesSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "struct",
      storageClassType: "ByocProjectInstancesSearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ByocProjectInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._autoScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScaling = this._autoScaling;
    }
    if (this._core?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.core = this._core?.internalValue;
    }
    if (this._fundamental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fundamental = this._fundamental?.internalValue;
    }
    if (this._index?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ByocProjectInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._autoScaling = undefined;
      this._core.internalValue = undefined;
      this._fundamental.internalValue = undefined;
      this._index.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._autoScaling = value.autoScaling;
      this._core.internalValue = value.core;
      this._fundamental.internalValue = value.fundamental;
      this._index.internalValue = value.index;
      this._search.internalValue = value.search;
    }
  }

  // arch - computed: true, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // auto_scaling - computed: true, optional: true, required: false
  private _autoScaling?: boolean | cdktf.IResolvable; 
  public get autoScaling() {
    return this.getBooleanAttribute('auto_scaling');
  }
  public set autoScaling(value: boolean | cdktf.IResolvable) {
    this._autoScaling = value;
  }
  public resetAutoScaling() {
    this._autoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingInput() {
    return this._autoScaling;
  }

  // core - computed: false, optional: false, required: true
  private _core = new ByocProjectInstancesCoreOutputReference(this, "core");
  public get core() {
    return this._core;
  }
  public putCore(value: ByocProjectInstancesCore) {
    this._core.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreInput() {
    return this._core.internalValue;
  }

  // fundamental - computed: false, optional: false, required: true
  private _fundamental = new ByocProjectInstancesFundamentalOutputReference(this, "fundamental");
  public get fundamental() {
    return this._fundamental;
  }
  public putFundamental(value: ByocProjectInstancesFundamental) {
    this._fundamental.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fundamentalInput() {
    return this._fundamental.internalValue;
  }

  // index - computed: false, optional: false, required: true
  private _index = new ByocProjectInstancesIndexOutputReference(this, "index");
  public get index() {
    return this._index;
  }
  public putIndex(value: ByocProjectInstancesIndex) {
    this._index.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index.internalValue;
  }

  // search - computed: false, optional: false, required: true
  private _search = new ByocProjectInstancesSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: ByocProjectInstancesSearch) {
    this._search.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface ByocProjectTimeouts {
  /**
  * Timeout defaults to 120 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#create ByocProject#create}
  */
  readonly create?: string;
  /**
  * Timeout defaults to 120 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#delete ByocProject#delete}
  */
  readonly delete?: string;
  /**
  * Timeout defaults to 60 mins. Accepts a string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#update ByocProject#update}
  */
  readonly update?: string;
}

export function byocProjectTimeoutsToTerraform(struct?: ByocProjectTimeouts | cdktf.IResolvable): any {
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


export function byocProjectTimeoutsToHclTerraform(struct?: ByocProjectTimeouts | cdktf.IResolvable): any {
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

export class ByocProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ByocProjectTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ByocProjectTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project zillizcloud_byoc_project}
*/
export class ByocProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_byoc_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ByocProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ByocProject to import
  * @param importFromId The id of the existing ByocProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ByocProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_byoc_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/byoc_project zillizcloud_byoc_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ByocProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ByocProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_byoc_project',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aws.internalValue = config.aws;
    this._instances.internalValue = config.instances;
    this._name = config.name;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: false, optional: true, required: false
  private _aws = new ByocProjectAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: ByocProjectAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // data_plane_id - computed: true, optional: false, required: false
  public get dataPlaneId() {
    return this.getStringAttribute('data_plane_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new ByocProjectInstancesOutputReference(this, "instances");
  public get instances() {
    return this._instances;
  }
  public putInstances(value: ByocProjectInstances) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ByocProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ByocProjectTimeouts) {
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
      aws: byocProjectAwsToTerraform(this._aws.internalValue),
      instances: byocProjectInstancesToTerraform(this._instances.internalValue),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      timeouts: byocProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws: {
        value: byocProjectAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ByocProjectAws",
      },
      instances: {
        value: byocProjectInstancesToHclTerraform(this._instances.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ByocProjectInstances",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: byocProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ByocProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
