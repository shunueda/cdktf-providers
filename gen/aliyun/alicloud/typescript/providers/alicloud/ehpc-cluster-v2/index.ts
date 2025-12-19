// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EhpcClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#client_version EhpcClusterV2#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#cluster_category EhpcClusterV2#cluster_category}
  */
  readonly clusterCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#cluster_mode EhpcClusterV2#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#cluster_name EhpcClusterV2#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#cluster_vpc_id EhpcClusterV2#cluster_vpc_id}
  */
  readonly clusterVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#cluster_vswitch_id EhpcClusterV2#cluster_vswitch_id}
  */
  readonly clusterVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#deletion_protection EhpcClusterV2#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#id EhpcClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#resource_group_id EhpcClusterV2#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#security_group_id EhpcClusterV2#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#addons EhpcClusterV2#addons}
  */
  readonly addons?: EhpcClusterV2Addons[] | cdktf.IResolvable;
  /**
  * cluster_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#cluster_credentials EhpcClusterV2#cluster_credentials}
  */
  readonly clusterCredentials: EhpcClusterV2ClusterCredentials;
  /**
  * manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#manager EhpcClusterV2#manager}
  */
  readonly manager?: EhpcClusterV2Manager;
  /**
  * shared_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#shared_storages EhpcClusterV2#shared_storages}
  */
  readonly sharedStorages: EhpcClusterV2SharedStorages[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#timeouts EhpcClusterV2#timeouts}
  */
  readonly timeouts?: EhpcClusterV2Timeouts;
}
export interface EhpcClusterV2Addons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#name EhpcClusterV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#resources_spec EhpcClusterV2#resources_spec}
  */
  readonly resourcesSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#services_spec EhpcClusterV2#services_spec}
  */
  readonly servicesSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#version EhpcClusterV2#version}
  */
  readonly version: string;
}

export function ehpcClusterV2AddonsToTerraform(struct?: EhpcClusterV2Addons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources_spec: cdktf.stringToTerraform(struct!.resourcesSpec),
    services_spec: cdktf.stringToTerraform(struct!.servicesSpec),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ehpcClusterV2AddonsToHclTerraform(struct?: EhpcClusterV2Addons | cdktf.IResolvable): any {
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
    resources_spec: {
      value: cdktf.stringToHclTerraform(struct!.resourcesSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_spec: {
      value: cdktf.stringToHclTerraform(struct!.servicesSpec),
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

export class EhpcClusterV2AddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcClusterV2Addons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourcesSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesSpec = this._resourcesSpec;
    }
    if (this._servicesSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesSpec = this._servicesSpec;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2Addons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourcesSpec = undefined;
      this._servicesSpec = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourcesSpec = value.resourcesSpec;
      this._servicesSpec = value.servicesSpec;
      this._version = value.version;
    }
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

  // resources_spec - computed: false, optional: true, required: false
  private _resourcesSpec?: string; 
  public get resourcesSpec() {
    return this.getStringAttribute('resources_spec');
  }
  public set resourcesSpec(value: string) {
    this._resourcesSpec = value;
  }
  public resetResourcesSpec() {
    this._resourcesSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesSpecInput() {
    return this._resourcesSpec;
  }

  // services_spec - computed: false, optional: true, required: false
  private _servicesSpec?: string; 
  public get servicesSpec() {
    return this.getStringAttribute('services_spec');
  }
  public set servicesSpec(value: string) {
    this._servicesSpec = value;
  }
  public resetServicesSpec() {
    this._servicesSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSpecInput() {
    return this._servicesSpec;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class EhpcClusterV2AddonsList extends cdktf.ComplexList {
  public internalValue? : EhpcClusterV2Addons[] | cdktf.IResolvable

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
  public get(index: number): EhpcClusterV2AddonsOutputReference {
    return new EhpcClusterV2AddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcClusterV2ClusterCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#password EhpcClusterV2#password}
  */
  readonly password?: string;
}

export function ehpcClusterV2ClusterCredentialsToTerraform(struct?: EhpcClusterV2ClusterCredentialsOutputReference | EhpcClusterV2ClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function ehpcClusterV2ClusterCredentialsToHclTerraform(struct?: EhpcClusterV2ClusterCredentialsOutputReference | EhpcClusterV2ClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterV2ClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2ClusterCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2ClusterCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: true, required: false
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
}
export interface EhpcClusterV2ManagerDirectoryService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#type EhpcClusterV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#version EhpcClusterV2#version}
  */
  readonly version?: string;
}

export function ehpcClusterV2ManagerDirectoryServiceToTerraform(struct?: EhpcClusterV2ManagerDirectoryServiceOutputReference | EhpcClusterV2ManagerDirectoryService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ehpcClusterV2ManagerDirectoryServiceToHclTerraform(struct?: EhpcClusterV2ManagerDirectoryServiceOutputReference | EhpcClusterV2ManagerDirectoryService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class EhpcClusterV2ManagerDirectoryServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2ManagerDirectoryService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2ManagerDirectoryService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
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
export interface EhpcClusterV2ManagerDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#type EhpcClusterV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#version EhpcClusterV2#version}
  */
  readonly version?: string;
}

export function ehpcClusterV2ManagerDnsToTerraform(struct?: EhpcClusterV2ManagerDnsOutputReference | EhpcClusterV2ManagerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ehpcClusterV2ManagerDnsToHclTerraform(struct?: EhpcClusterV2ManagerDnsOutputReference | EhpcClusterV2ManagerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class EhpcClusterV2ManagerDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2ManagerDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2ManagerDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
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
export interface EhpcClusterV2ManagerManagerNodeSystemDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#category EhpcClusterV2#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#level EhpcClusterV2#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#size EhpcClusterV2#size}
  */
  readonly size?: number;
}

export function ehpcClusterV2ManagerManagerNodeSystemDiskToTerraform(struct?: EhpcClusterV2ManagerManagerNodeSystemDiskOutputReference | EhpcClusterV2ManagerManagerNodeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    level: cdktf.stringToTerraform(struct!.level),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function ehpcClusterV2ManagerManagerNodeSystemDiskToHclTerraform(struct?: EhpcClusterV2ManagerManagerNodeSystemDiskOutputReference | EhpcClusterV2ManagerManagerNodeSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterV2ManagerManagerNodeSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2ManagerManagerNodeSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2ManagerManagerNodeSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._level = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._level = value.level;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface EhpcClusterV2ManagerManagerNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#auto_renew EhpcClusterV2#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#auto_renew_period EhpcClusterV2#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#duration EhpcClusterV2#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#enable_ht EhpcClusterV2#enable_ht}
  */
  readonly enableHt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#image_id EhpcClusterV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#instance_charge_type EhpcClusterV2#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#instance_type EhpcClusterV2#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#period EhpcClusterV2#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#period_unit EhpcClusterV2#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#spot_price_limit EhpcClusterV2#spot_price_limit}
  */
  readonly spotPriceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#spot_strategy EhpcClusterV2#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#system_disk EhpcClusterV2#system_disk}
  */
  readonly systemDisk?: EhpcClusterV2ManagerManagerNodeSystemDisk;
}

export function ehpcClusterV2ManagerManagerNodeToTerraform(struct?: EhpcClusterV2ManagerManagerNodeOutputReference | EhpcClusterV2ManagerManagerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    auto_renew_period: cdktf.numberToTerraform(struct!.autoRenewPeriod),
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_ht: cdktf.booleanToTerraform(struct!.enableHt),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    period: cdktf.numberToTerraform(struct!.period),
    period_unit: cdktf.stringToTerraform(struct!.periodUnit),
    spot_price_limit: cdktf.numberToTerraform(struct!.spotPriceLimit),
    spot_strategy: cdktf.stringToTerraform(struct!.spotStrategy),
    system_disk: ehpcClusterV2ManagerManagerNodeSystemDiskToTerraform(struct!.systemDisk),
  }
}


export function ehpcClusterV2ManagerManagerNodeToHclTerraform(struct?: EhpcClusterV2ManagerManagerNodeOutputReference | EhpcClusterV2ManagerManagerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_renew_period: {
      value: cdktf.numberToHclTerraform(struct!.autoRenewPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ht: {
      value: cdktf.booleanToHclTerraform(struct!.enableHt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_unit: {
      value: cdktf.stringToHclTerraform(struct!.periodUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_price_limit: {
      value: cdktf.numberToHclTerraform(struct!.spotPriceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_strategy: {
      value: cdktf.stringToHclTerraform(struct!.spotStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk: {
      value: ehpcClusterV2ManagerManagerNodeSystemDiskToHclTerraform(struct!.systemDisk),
      isBlock: true,
      type: "list",
      storageClassType: "EhpcClusterV2ManagerManagerNodeSystemDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterV2ManagerManagerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2ManagerManagerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._autoRenewPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenewPeriod = this._autoRenewPeriod;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableHt !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHt = this._enableHt;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodUnit = this._periodUnit;
    }
    if (this._spotPriceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPriceLimit = this._spotPriceLimit;
    }
    if (this._spotStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotStrategy = this._spotStrategy;
    }
    if (this._systemDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDisk = this._systemDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2ManagerManagerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRenew = undefined;
      this._autoRenewPeriod = undefined;
      this._duration = undefined;
      this._enableHt = undefined;
      this._imageId = undefined;
      this._instanceChargeType = undefined;
      this._instanceType = undefined;
      this._period = undefined;
      this._periodUnit = undefined;
      this._spotPriceLimit = undefined;
      this._spotStrategy = undefined;
      this._systemDisk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRenew = value.autoRenew;
      this._autoRenewPeriod = value.autoRenewPeriod;
      this._duration = value.duration;
      this._enableHt = value.enableHt;
      this._imageId = value.imageId;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceType = value.instanceType;
      this._period = value.period;
      this._periodUnit = value.periodUnit;
      this._spotPriceLimit = value.spotPriceLimit;
      this._spotStrategy = value.spotStrategy;
      this._systemDisk.internalValue = value.systemDisk;
    }
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_ht - computed: false, optional: true, required: false
  private _enableHt?: boolean | cdktf.IResolvable; 
  public get enableHt() {
    return this.getBooleanAttribute('enable_ht');
  }
  public set enableHt(value: boolean | cdktf.IResolvable) {
    this._enableHt = value;
  }
  public resetEnableHt() {
    this._enableHt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHtInput() {
    return this._enableHt;
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // spot_price_limit - computed: false, optional: true, required: false
  private _spotPriceLimit?: number; 
  public get spotPriceLimit() {
    return this.getNumberAttribute('spot_price_limit');
  }
  public set spotPriceLimit(value: number) {
    this._spotPriceLimit = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new EhpcClusterV2ManagerManagerNodeSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: EhpcClusterV2ManagerManagerNodeSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  public resetSystemDisk() {
    this._systemDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }
}
export interface EhpcClusterV2ManagerScheduler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#type EhpcClusterV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#version EhpcClusterV2#version}
  */
  readonly version?: string;
}

export function ehpcClusterV2ManagerSchedulerToTerraform(struct?: EhpcClusterV2ManagerSchedulerOutputReference | EhpcClusterV2ManagerScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ehpcClusterV2ManagerSchedulerToHclTerraform(struct?: EhpcClusterV2ManagerSchedulerOutputReference | EhpcClusterV2ManagerScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class EhpcClusterV2ManagerSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2ManagerScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2ManagerScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._version = value.version;
    }
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

  // version - computed: false, optional: true, required: false
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
export interface EhpcClusterV2Manager {
  /**
  * directory_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#directory_service EhpcClusterV2#directory_service}
  */
  readonly directoryService?: EhpcClusterV2ManagerDirectoryService;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#dns EhpcClusterV2#dns}
  */
  readonly dns?: EhpcClusterV2ManagerDns;
  /**
  * manager_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#manager_node EhpcClusterV2#manager_node}
  */
  readonly managerNode?: EhpcClusterV2ManagerManagerNode;
  /**
  * scheduler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#scheduler EhpcClusterV2#scheduler}
  */
  readonly scheduler?: EhpcClusterV2ManagerScheduler;
}

export function ehpcClusterV2ManagerToTerraform(struct?: EhpcClusterV2ManagerOutputReference | EhpcClusterV2Manager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_service: ehpcClusterV2ManagerDirectoryServiceToTerraform(struct!.directoryService),
    dns: ehpcClusterV2ManagerDnsToTerraform(struct!.dns),
    manager_node: ehpcClusterV2ManagerManagerNodeToTerraform(struct!.managerNode),
    scheduler: ehpcClusterV2ManagerSchedulerToTerraform(struct!.scheduler),
  }
}


export function ehpcClusterV2ManagerToHclTerraform(struct?: EhpcClusterV2ManagerOutputReference | EhpcClusterV2Manager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory_service: {
      value: ehpcClusterV2ManagerDirectoryServiceToHclTerraform(struct!.directoryService),
      isBlock: true,
      type: "list",
      storageClassType: "EhpcClusterV2ManagerDirectoryServiceList",
    },
    dns: {
      value: ehpcClusterV2ManagerDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "EhpcClusterV2ManagerDnsList",
    },
    manager_node: {
      value: ehpcClusterV2ManagerManagerNodeToHclTerraform(struct!.managerNode),
      isBlock: true,
      type: "list",
      storageClassType: "EhpcClusterV2ManagerManagerNodeList",
    },
    scheduler: {
      value: ehpcClusterV2ManagerSchedulerToHclTerraform(struct!.scheduler),
      isBlock: true,
      type: "list",
      storageClassType: "EhpcClusterV2ManagerSchedulerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterV2ManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcClusterV2Manager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryService = this._directoryService?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._managerNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerNode = this._managerNode?.internalValue;
    }
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2Manager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directoryService.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._managerNode.internalValue = undefined;
      this._scheduler.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directoryService.internalValue = value.directoryService;
      this._dns.internalValue = value.dns;
      this._managerNode.internalValue = value.managerNode;
      this._scheduler.internalValue = value.scheduler;
    }
  }

  // directory_service - computed: false, optional: true, required: false
  private _directoryService = new EhpcClusterV2ManagerDirectoryServiceOutputReference(this, "directory_service");
  public get directoryService() {
    return this._directoryService;
  }
  public putDirectoryService(value: EhpcClusterV2ManagerDirectoryService) {
    this._directoryService.internalValue = value;
  }
  public resetDirectoryService() {
    this._directoryService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryServiceInput() {
    return this._directoryService.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new EhpcClusterV2ManagerDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: EhpcClusterV2ManagerDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // manager_node - computed: false, optional: true, required: false
  private _managerNode = new EhpcClusterV2ManagerManagerNodeOutputReference(this, "manager_node");
  public get managerNode() {
    return this._managerNode;
  }
  public putManagerNode(value: EhpcClusterV2ManagerManagerNode) {
    this._managerNode.internalValue = value;
  }
  public resetManagerNode() {
    this._managerNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerNodeInput() {
    return this._managerNode.internalValue;
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new EhpcClusterV2ManagerSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: EhpcClusterV2ManagerScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }
}
export interface EhpcClusterV2SharedStorages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#file_system_id EhpcClusterV2#file_system_id}
  */
  readonly fileSystemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#mount_directory EhpcClusterV2#mount_directory}
  */
  readonly mountDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#mount_options EhpcClusterV2#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#mount_target_domain EhpcClusterV2#mount_target_domain}
  */
  readonly mountTargetDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#nas_directory EhpcClusterV2#nas_directory}
  */
  readonly nasDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#protocol_type EhpcClusterV2#protocol_type}
  */
  readonly protocolType?: string;
}

export function ehpcClusterV2SharedStoragesToTerraform(struct?: EhpcClusterV2SharedStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    mount_directory: cdktf.stringToTerraform(struct!.mountDirectory),
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    mount_target_domain: cdktf.stringToTerraform(struct!.mountTargetDomain),
    nas_directory: cdktf.stringToTerraform(struct!.nasDirectory),
    protocol_type: cdktf.stringToTerraform(struct!.protocolType),
  }
}


export function ehpcClusterV2SharedStoragesToHclTerraform(struct?: EhpcClusterV2SharedStorages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_directory: {
      value: cdktf.stringToHclTerraform(struct!.mountDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target_domain: {
      value: cdktf.stringToHclTerraform(struct!.mountTargetDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nas_directory: {
      value: cdktf.stringToHclTerraform(struct!.nasDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_type: {
      value: cdktf.stringToHclTerraform(struct!.protocolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcClusterV2SharedStoragesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcClusterV2SharedStorages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._mountDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDirectory = this._mountDirectory;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._mountTargetDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTargetDomain = this._mountTargetDomain;
    }
    if (this._nasDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.nasDirectory = this._nasDirectory;
    }
    if (this._protocolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolType = this._protocolType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcClusterV2SharedStorages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemId = undefined;
      this._mountDirectory = undefined;
      this._mountOptions = undefined;
      this._mountTargetDomain = undefined;
      this._nasDirectory = undefined;
      this._protocolType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemId = value.fileSystemId;
      this._mountDirectory = value.mountDirectory;
      this._mountOptions = value.mountOptions;
      this._mountTargetDomain = value.mountTargetDomain;
      this._nasDirectory = value.nasDirectory;
      this._protocolType = value.protocolType;
    }
  }

  // file_system_id - computed: false, optional: true, required: false
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  public resetFileSystemId() {
    this._fileSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // mount_directory - computed: false, optional: true, required: false
  private _mountDirectory?: string; 
  public get mountDirectory() {
    return this.getStringAttribute('mount_directory');
  }
  public set mountDirectory(value: string) {
    this._mountDirectory = value;
  }
  public resetMountDirectory() {
    this._mountDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDirectoryInput() {
    return this._mountDirectory;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // mount_target_domain - computed: false, optional: true, required: false
  private _mountTargetDomain?: string; 
  public get mountTargetDomain() {
    return this.getStringAttribute('mount_target_domain');
  }
  public set mountTargetDomain(value: string) {
    this._mountTargetDomain = value;
  }
  public resetMountTargetDomain() {
    this._mountTargetDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetDomainInput() {
    return this._mountTargetDomain;
  }

  // nas_directory - computed: false, optional: true, required: false
  private _nasDirectory?: string; 
  public get nasDirectory() {
    return this.getStringAttribute('nas_directory');
  }
  public set nasDirectory(value: string) {
    this._nasDirectory = value;
  }
  public resetNasDirectory() {
    this._nasDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasDirectoryInput() {
    return this._nasDirectory;
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }
}

export class EhpcClusterV2SharedStoragesList extends cdktf.ComplexList {
  public internalValue? : EhpcClusterV2SharedStorages[] | cdktf.IResolvable

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
  public get(index: number): EhpcClusterV2SharedStoragesOutputReference {
    return new EhpcClusterV2SharedStoragesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#create EhpcClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#delete EhpcClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#update EhpcClusterV2#update}
  */
  readonly update?: string;
}

export function ehpcClusterV2TimeoutsToTerraform(struct?: EhpcClusterV2Timeouts | cdktf.IResolvable): any {
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


export function ehpcClusterV2TimeoutsToHclTerraform(struct?: EhpcClusterV2Timeouts | cdktf.IResolvable): any {
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

export class EhpcClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EhpcClusterV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EhpcClusterV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2 alicloud_ehpc_cluster_v2}
*/
export class EhpcClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ehpc_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EhpcClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EhpcClusterV2 to import
  * @param importFromId The id of the existing EhpcClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EhpcClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ehpc_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_cluster_v2 alicloud_ehpc_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EhpcClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: EhpcClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ehpc_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientVersion = config.clientVersion;
    this._clusterCategory = config.clusterCategory;
    this._clusterMode = config.clusterMode;
    this._clusterName = config.clusterName;
    this._clusterVpcId = config.clusterVpcId;
    this._clusterVswitchId = config.clusterVswitchId;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupId = config.securityGroupId;
    this._addons.internalValue = config.addons;
    this._clusterCredentials.internalValue = config.clusterCredentials;
    this._manager.internalValue = config.manager;
    this._sharedStorages.internalValue = config.sharedStorages;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_version - computed: true, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // cluster_category - computed: false, optional: true, required: false
  private _clusterCategory?: string; 
  public get clusterCategory() {
    return this.getStringAttribute('cluster_category');
  }
  public set clusterCategory(value: string) {
    this._clusterCategory = value;
  }
  public resetClusterCategory() {
    this._clusterCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCategoryInput() {
    return this._clusterCategory;
  }

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // cluster_name - computed: false, optional: true, required: false
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

  // cluster_vpc_id - computed: false, optional: true, required: false
  private _clusterVpcId?: string; 
  public get clusterVpcId() {
    return this.getStringAttribute('cluster_vpc_id');
  }
  public set clusterVpcId(value: string) {
    this._clusterVpcId = value;
  }
  public resetClusterVpcId() {
    this._clusterVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVpcIdInput() {
    return this._clusterVpcId;
  }

  // cluster_vswitch_id - computed: false, optional: true, required: false
  private _clusterVswitchId?: string; 
  public get clusterVswitchId() {
    return this.getStringAttribute('cluster_vswitch_id');
  }
  public set clusterVswitchId(value: string) {
    this._clusterVswitchId = value;
  }
  public resetClusterVswitchId() {
    this._clusterVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVswitchIdInput() {
    return this._clusterVswitchId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // addons - computed: false, optional: true, required: false
  private _addons = new EhpcClusterV2AddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: EhpcClusterV2Addons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // cluster_credentials - computed: false, optional: false, required: true
  private _clusterCredentials = new EhpcClusterV2ClusterCredentialsOutputReference(this, "cluster_credentials");
  public get clusterCredentials() {
    return this._clusterCredentials;
  }
  public putClusterCredentials(value: EhpcClusterV2ClusterCredentials) {
    this._clusterCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCredentialsInput() {
    return this._clusterCredentials.internalValue;
  }

  // manager - computed: false, optional: true, required: false
  private _manager = new EhpcClusterV2ManagerOutputReference(this, "manager");
  public get manager() {
    return this._manager;
  }
  public putManager(value: EhpcClusterV2Manager) {
    this._manager.internalValue = value;
  }
  public resetManager() {
    this._manager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager.internalValue;
  }

  // shared_storages - computed: false, optional: false, required: true
  private _sharedStorages = new EhpcClusterV2SharedStoragesList(this, "shared_storages", true);
  public get sharedStorages() {
    return this._sharedStorages;
  }
  public putSharedStorages(value: EhpcClusterV2SharedStorages[] | cdktf.IResolvable) {
    this._sharedStorages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedStoragesInput() {
    return this._sharedStorages.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EhpcClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EhpcClusterV2Timeouts) {
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
      client_version: cdktf.stringToTerraform(this._clientVersion),
      cluster_category: cdktf.stringToTerraform(this._clusterCategory),
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_vpc_id: cdktf.stringToTerraform(this._clusterVpcId),
      cluster_vswitch_id: cdktf.stringToTerraform(this._clusterVswitchId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      addons: cdktf.listMapper(ehpcClusterV2AddonsToTerraform, true)(this._addons.internalValue),
      cluster_credentials: ehpcClusterV2ClusterCredentialsToTerraform(this._clusterCredentials.internalValue),
      manager: ehpcClusterV2ManagerToTerraform(this._manager.internalValue),
      shared_storages: cdktf.listMapper(ehpcClusterV2SharedStoragesToTerraform, true)(this._sharedStorages.internalValue),
      timeouts: ehpcClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_version: {
        value: cdktf.stringToHclTerraform(this._clientVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_category: {
        value: cdktf.stringToHclTerraform(this._clusterCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_vpc_id: {
        value: cdktf.stringToHclTerraform(this._clusterVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._clusterVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons: {
        value: cdktf.listMapperHcl(ehpcClusterV2AddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EhpcClusterV2AddonsList",
      },
      cluster_credentials: {
        value: ehpcClusterV2ClusterCredentialsToHclTerraform(this._clusterCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EhpcClusterV2ClusterCredentialsList",
      },
      manager: {
        value: ehpcClusterV2ManagerToHclTerraform(this._manager.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EhpcClusterV2ManagerList",
      },
      shared_storages: {
        value: cdktf.listMapperHcl(ehpcClusterV2SharedStoragesToHclTerraform, true)(this._sharedStorages.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EhpcClusterV2SharedStoragesList",
      },
      timeouts: {
        value: ehpcClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EhpcClusterV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
