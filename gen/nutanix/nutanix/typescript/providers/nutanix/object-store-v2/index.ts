// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStoreV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#certificate_ext_ids ObjectStoreV2#certificate_ext_ids}
  */
  readonly certificateExtIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#cluster_ext_id ObjectStoreV2#cluster_ext_id}
  */
  readonly clusterExtId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#deployment_version ObjectStoreV2#deployment_version}
  */
  readonly deploymentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#description ObjectStoreV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#domain ObjectStoreV2#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#id ObjectStoreV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#name ObjectStoreV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#num_worker_nodes ObjectStoreV2#num_worker_nodes}
  */
  readonly numWorkerNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#public_network_reference ObjectStoreV2#public_network_reference}
  */
  readonly publicNetworkReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#region ObjectStoreV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#state ObjectStoreV2#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#storage_network_reference ObjectStoreV2#storage_network_reference}
  */
  readonly storageNetworkReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#total_capacity_gib ObjectStoreV2#total_capacity_gib}
  */
  readonly totalCapacityGib?: number;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#metadata ObjectStoreV2#metadata}
  */
  readonly metadata?: ObjectStoreV2Metadata[] | cdktf.IResolvable;
  /**
  * public_network_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#public_network_ips ObjectStoreV2#public_network_ips}
  */
  readonly publicNetworkIps?: ObjectStoreV2PublicNetworkIps[] | cdktf.IResolvable;
  /**
  * storage_network_dns_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#storage_network_dns_ip ObjectStoreV2#storage_network_dns_ip}
  */
  readonly storageNetworkDnsIp?: ObjectStoreV2StorageNetworkDnsIp;
  /**
  * storage_network_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#storage_network_vip ObjectStoreV2#storage_network_vip}
  */
  readonly storageNetworkVip?: ObjectStoreV2StorageNetworkVip;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#timeouts ObjectStoreV2#timeouts}
  */
  readonly timeouts?: ObjectStoreV2Timeouts;
}
export interface ObjectStoreV2Links {
}

export function objectStoreV2LinksToTerraform(struct?: ObjectStoreV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function objectStoreV2LinksToHclTerraform(struct?: ObjectStoreV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObjectStoreV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStoreV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class ObjectStoreV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): ObjectStoreV2LinksOutputReference {
    return new ObjectStoreV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectStoreV2Metadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#category_ids ObjectStoreV2#category_ids}
  */
  readonly categoryIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#owner_reference_id ObjectStoreV2#owner_reference_id}
  */
  readonly ownerReferenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#owner_user_name ObjectStoreV2#owner_user_name}
  */
  readonly ownerUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#project_name ObjectStoreV2#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#project_reference_id ObjectStoreV2#project_reference_id}
  */
  readonly projectReferenceId?: string;
}

export function objectStoreV2MetadataToTerraform(struct?: ObjectStoreV2Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categoryIds),
    owner_reference_id: cdktf.stringToTerraform(struct!.ownerReferenceId),
    owner_user_name: cdktf.stringToTerraform(struct!.ownerUserName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    project_reference_id: cdktf.stringToTerraform(struct!.projectReferenceId),
  }
}


export function objectStoreV2MetadataToHclTerraform(struct?: ObjectStoreV2Metadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.categoryIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner_reference_id: {
      value: cdktf.stringToHclTerraform(struct!.ownerReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_user_name: {
      value: cdktf.stringToHclTerraform(struct!.ownerUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_reference_id: {
      value: cdktf.stringToHclTerraform(struct!.projectReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStoreV2MetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStoreV2Metadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryIds = this._categoryIds;
    }
    if (this._ownerReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerReferenceId = this._ownerReferenceId;
    }
    if (this._ownerUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUserName = this._ownerUserName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._projectReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectReferenceId = this._projectReferenceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2Metadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryIds = undefined;
      this._ownerReferenceId = undefined;
      this._ownerUserName = undefined;
      this._projectName = undefined;
      this._projectReferenceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryIds = value.categoryIds;
      this._ownerReferenceId = value.ownerReferenceId;
      this._ownerUserName = value.ownerUserName;
      this._projectName = value.projectName;
      this._projectReferenceId = value.projectReferenceId;
    }
  }

  // category_ids - computed: true, optional: true, required: false
  private _categoryIds?: string[]; 
  public get categoryIds() {
    return this.getListAttribute('category_ids');
  }
  public set categoryIds(value: string[]) {
    this._categoryIds = value;
  }
  public resetCategoryIds() {
    this._categoryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdsInput() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: true, required: false
  private _ownerReferenceId?: string; 
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }
  public set ownerReferenceId(value: string) {
    this._ownerReferenceId = value;
  }
  public resetOwnerReferenceId() {
    this._ownerReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferenceIdInput() {
    return this._ownerReferenceId;
  }

  // owner_user_name - computed: true, optional: true, required: false
  private _ownerUserName?: string; 
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }
  public set ownerUserName(value: string) {
    this._ownerUserName = value;
  }
  public resetOwnerUserName() {
    this._ownerUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserNameInput() {
    return this._ownerUserName;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // project_reference_id - computed: true, optional: true, required: false
  private _projectReferenceId?: string; 
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
  public set projectReferenceId(value: string) {
    this._projectReferenceId = value;
  }
  public resetProjectReferenceId() {
    this._projectReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectReferenceIdInput() {
    return this._projectReferenceId;
  }
}

export class ObjectStoreV2MetadataList extends cdktf.ComplexList {
  public internalValue? : ObjectStoreV2Metadata[] | cdktf.IResolvable

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
  public get(index: number): ObjectStoreV2MetadataOutputReference {
    return new ObjectStoreV2MetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectStoreV2PublicNetworkIpsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#prefix_length ObjectStoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#value ObjectStoreV2#value}
  */
  readonly value: string;
}

export function objectStoreV2PublicNetworkIpsIpv4ToTerraform(struct?: ObjectStoreV2PublicNetworkIpsIpv4OutputReference | ObjectStoreV2PublicNetworkIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStoreV2PublicNetworkIpsIpv4ToHclTerraform(struct?: ObjectStoreV2PublicNetworkIpsIpv4OutputReference | ObjectStoreV2PublicNetworkIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectStoreV2PublicNetworkIpsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2PublicNetworkIpsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2PublicNetworkIpsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
export interface ObjectStoreV2PublicNetworkIpsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#prefix_length ObjectStoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#value ObjectStoreV2#value}
  */
  readonly value: string;
}

export function objectStoreV2PublicNetworkIpsIpv6ToTerraform(struct?: ObjectStoreV2PublicNetworkIpsIpv6OutputReference | ObjectStoreV2PublicNetworkIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStoreV2PublicNetworkIpsIpv6ToHclTerraform(struct?: ObjectStoreV2PublicNetworkIpsIpv6OutputReference | ObjectStoreV2PublicNetworkIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectStoreV2PublicNetworkIpsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2PublicNetworkIpsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2PublicNetworkIpsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
export interface ObjectStoreV2PublicNetworkIps {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#ipv4 ObjectStoreV2#ipv4}
  */
  readonly ipv4?: ObjectStoreV2PublicNetworkIpsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#ipv6 ObjectStoreV2#ipv6}
  */
  readonly ipv6?: ObjectStoreV2PublicNetworkIpsIpv6;
}

export function objectStoreV2PublicNetworkIpsToTerraform(struct?: ObjectStoreV2PublicNetworkIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: objectStoreV2PublicNetworkIpsIpv4ToTerraform(struct!.ipv4),
    ipv6: objectStoreV2PublicNetworkIpsIpv6ToTerraform(struct!.ipv6),
  }
}


export function objectStoreV2PublicNetworkIpsToHclTerraform(struct?: ObjectStoreV2PublicNetworkIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: objectStoreV2PublicNetworkIpsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectStoreV2PublicNetworkIpsIpv4List",
    },
    ipv6: {
      value: objectStoreV2PublicNetworkIpsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectStoreV2PublicNetworkIpsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStoreV2PublicNetworkIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectStoreV2PublicNetworkIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2PublicNetworkIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ObjectStoreV2PublicNetworkIpsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ObjectStoreV2PublicNetworkIpsIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ObjectStoreV2PublicNetworkIpsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectStoreV2PublicNetworkIpsIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class ObjectStoreV2PublicNetworkIpsList extends cdktf.ComplexList {
  public internalValue? : ObjectStoreV2PublicNetworkIps[] | cdktf.IResolvable

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
  public get(index: number): ObjectStoreV2PublicNetworkIpsOutputReference {
    return new ObjectStoreV2PublicNetworkIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectStoreV2StorageNetworkDnsIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#prefix_length ObjectStoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#value ObjectStoreV2#value}
  */
  readonly value: string;
}

export function objectStoreV2StorageNetworkDnsIpIpv4ToTerraform(struct?: ObjectStoreV2StorageNetworkDnsIpIpv4OutputReference | ObjectStoreV2StorageNetworkDnsIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStoreV2StorageNetworkDnsIpIpv4ToHclTerraform(struct?: ObjectStoreV2StorageNetworkDnsIpIpv4OutputReference | ObjectStoreV2StorageNetworkDnsIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectStoreV2StorageNetworkDnsIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2StorageNetworkDnsIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2StorageNetworkDnsIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
export interface ObjectStoreV2StorageNetworkDnsIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#prefix_length ObjectStoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#value ObjectStoreV2#value}
  */
  readonly value: string;
}

export function objectStoreV2StorageNetworkDnsIpIpv6ToTerraform(struct?: ObjectStoreV2StorageNetworkDnsIpIpv6OutputReference | ObjectStoreV2StorageNetworkDnsIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStoreV2StorageNetworkDnsIpIpv6ToHclTerraform(struct?: ObjectStoreV2StorageNetworkDnsIpIpv6OutputReference | ObjectStoreV2StorageNetworkDnsIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectStoreV2StorageNetworkDnsIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2StorageNetworkDnsIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2StorageNetworkDnsIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
export interface ObjectStoreV2StorageNetworkDnsIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#ipv4 ObjectStoreV2#ipv4}
  */
  readonly ipv4?: ObjectStoreV2StorageNetworkDnsIpIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#ipv6 ObjectStoreV2#ipv6}
  */
  readonly ipv6?: ObjectStoreV2StorageNetworkDnsIpIpv6;
}

export function objectStoreV2StorageNetworkDnsIpToTerraform(struct?: ObjectStoreV2StorageNetworkDnsIpOutputReference | ObjectStoreV2StorageNetworkDnsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: objectStoreV2StorageNetworkDnsIpIpv4ToTerraform(struct!.ipv4),
    ipv6: objectStoreV2StorageNetworkDnsIpIpv6ToTerraform(struct!.ipv6),
  }
}


export function objectStoreV2StorageNetworkDnsIpToHclTerraform(struct?: ObjectStoreV2StorageNetworkDnsIpOutputReference | ObjectStoreV2StorageNetworkDnsIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: objectStoreV2StorageNetworkDnsIpIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectStoreV2StorageNetworkDnsIpIpv4List",
    },
    ipv6: {
      value: objectStoreV2StorageNetworkDnsIpIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectStoreV2StorageNetworkDnsIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStoreV2StorageNetworkDnsIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2StorageNetworkDnsIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2StorageNetworkDnsIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ObjectStoreV2StorageNetworkDnsIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ObjectStoreV2StorageNetworkDnsIpIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ObjectStoreV2StorageNetworkDnsIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectStoreV2StorageNetworkDnsIpIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ObjectStoreV2StorageNetworkVipIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#prefix_length ObjectStoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#value ObjectStoreV2#value}
  */
  readonly value: string;
}

export function objectStoreV2StorageNetworkVipIpv4ToTerraform(struct?: ObjectStoreV2StorageNetworkVipIpv4OutputReference | ObjectStoreV2StorageNetworkVipIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStoreV2StorageNetworkVipIpv4ToHclTerraform(struct?: ObjectStoreV2StorageNetworkVipIpv4OutputReference | ObjectStoreV2StorageNetworkVipIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectStoreV2StorageNetworkVipIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2StorageNetworkVipIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2StorageNetworkVipIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
export interface ObjectStoreV2StorageNetworkVipIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#prefix_length ObjectStoreV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#value ObjectStoreV2#value}
  */
  readonly value: string;
}

export function objectStoreV2StorageNetworkVipIpv6ToTerraform(struct?: ObjectStoreV2StorageNetworkVipIpv6OutputReference | ObjectStoreV2StorageNetworkVipIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectStoreV2StorageNetworkVipIpv6ToHclTerraform(struct?: ObjectStoreV2StorageNetworkVipIpv6OutputReference | ObjectStoreV2StorageNetworkVipIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObjectStoreV2StorageNetworkVipIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2StorageNetworkVipIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2StorageNetworkVipIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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
export interface ObjectStoreV2StorageNetworkVip {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#ipv4 ObjectStoreV2#ipv4}
  */
  readonly ipv4?: ObjectStoreV2StorageNetworkVipIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#ipv6 ObjectStoreV2#ipv6}
  */
  readonly ipv6?: ObjectStoreV2StorageNetworkVipIpv6;
}

export function objectStoreV2StorageNetworkVipToTerraform(struct?: ObjectStoreV2StorageNetworkVipOutputReference | ObjectStoreV2StorageNetworkVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: objectStoreV2StorageNetworkVipIpv4ToTerraform(struct!.ipv4),
    ipv6: objectStoreV2StorageNetworkVipIpv6ToTerraform(struct!.ipv6),
  }
}


export function objectStoreV2StorageNetworkVipToHclTerraform(struct?: ObjectStoreV2StorageNetworkVipOutputReference | ObjectStoreV2StorageNetworkVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: objectStoreV2StorageNetworkVipIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectStoreV2StorageNetworkVipIpv4List",
    },
    ipv6: {
      value: objectStoreV2StorageNetworkVipIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectStoreV2StorageNetworkVipIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStoreV2StorageNetworkVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectStoreV2StorageNetworkVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStoreV2StorageNetworkVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ObjectStoreV2StorageNetworkVipIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ObjectStoreV2StorageNetworkVipIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ObjectStoreV2StorageNetworkVipIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectStoreV2StorageNetworkVipIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ObjectStoreV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#create ObjectStoreV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#default ObjectStoreV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#delete ObjectStoreV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#update ObjectStoreV2#update}
  */
  readonly update?: string;
}

export function objectStoreV2TimeoutsToTerraform(struct?: ObjectStoreV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function objectStoreV2TimeoutsToHclTerraform(struct?: ObjectStoreV2Timeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class ObjectStoreV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStoreV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: ObjectStoreV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2 nutanix_object_store_v2}
*/
export class ObjectStoreV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_object_store_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStoreV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStoreV2 to import
  * @param importFromId The id of the existing ObjectStoreV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStoreV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_object_store_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/object_store_v2 nutanix_object_store_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStoreV2Config
  */
  public constructor(scope: Construct, id: string, config: ObjectStoreV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_object_store_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateExtIds = config.certificateExtIds;
    this._clusterExtId = config.clusterExtId;
    this._deploymentVersion = config.deploymentVersion;
    this._description = config.description;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._numWorkerNodes = config.numWorkerNodes;
    this._publicNetworkReference = config.publicNetworkReference;
    this._region = config.region;
    this._state = config.state;
    this._storageNetworkReference = config.storageNetworkReference;
    this._totalCapacityGib = config.totalCapacityGib;
    this._metadata.internalValue = config.metadata;
    this._publicNetworkIps.internalValue = config.publicNetworkIps;
    this._storageNetworkDnsIp.internalValue = config.storageNetworkDnsIp;
    this._storageNetworkVip.internalValue = config.storageNetworkVip;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_ext_ids - computed: true, optional: true, required: false
  private _certificateExtIds?: string[]; 
  public get certificateExtIds() {
    return this.getListAttribute('certificate_ext_ids');
  }
  public set certificateExtIds(value: string[]) {
    this._certificateExtIds = value;
  }
  public resetCertificateExtIds() {
    this._certificateExtIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateExtIdsInput() {
    return this._certificateExtIds;
  }

  // cluster_ext_id - computed: true, optional: true, required: false
  private _clusterExtId?: string; 
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }
  public set clusterExtId(value: string) {
    this._clusterExtId = value;
  }
  public resetClusterExtId() {
    this._clusterExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdInput() {
    return this._clusterExtId;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deployment_version - computed: true, optional: true, required: false
  private _deploymentVersion?: string; 
  public get deploymentVersion() {
    return this.getStringAttribute('deployment_version');
  }
  public set deploymentVersion(value: string) {
    this._deploymentVersion = value;
  }
  public resetDeploymentVersion() {
    this._deploymentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentVersionInput() {
    return this._deploymentVersion;
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

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new ObjectStoreV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // num_worker_nodes - computed: true, optional: true, required: false
  private _numWorkerNodes?: number; 
  public get numWorkerNodes() {
    return this.getNumberAttribute('num_worker_nodes');
  }
  public set numWorkerNodes(value: number) {
    this._numWorkerNodes = value;
  }
  public resetNumWorkerNodes() {
    this._numWorkerNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkerNodesInput() {
    return this._numWorkerNodes;
  }

  // public_network_reference - computed: true, optional: true, required: false
  private _publicNetworkReference?: string; 
  public get publicNetworkReference() {
    return this.getStringAttribute('public_network_reference');
  }
  public set publicNetworkReference(value: string) {
    this._publicNetworkReference = value;
  }
  public resetPublicNetworkReference() {
    this._publicNetworkReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkReferenceInput() {
    return this._publicNetworkReference;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // storage_network_reference - computed: true, optional: true, required: false
  private _storageNetworkReference?: string; 
  public get storageNetworkReference() {
    return this.getStringAttribute('storage_network_reference');
  }
  public set storageNetworkReference(value: string) {
    this._storageNetworkReference = value;
  }
  public resetStorageNetworkReference() {
    this._storageNetworkReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkReferenceInput() {
    return this._storageNetworkReference;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // total_capacity_gib - computed: true, optional: true, required: false
  private _totalCapacityGib?: number; 
  public get totalCapacityGib() {
    return this.getNumberAttribute('total_capacity_gib');
  }
  public set totalCapacityGib(value: number) {
    this._totalCapacityGib = value;
  }
  public resetTotalCapacityGib() {
    this._totalCapacityGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCapacityGibInput() {
    return this._totalCapacityGib;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ObjectStoreV2MetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ObjectStoreV2Metadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // public_network_ips - computed: false, optional: true, required: false
  private _publicNetworkIps = new ObjectStoreV2PublicNetworkIpsList(this, "public_network_ips", true);
  public get publicNetworkIps() {
    return this._publicNetworkIps;
  }
  public putPublicNetworkIps(value: ObjectStoreV2PublicNetworkIps[] | cdktf.IResolvable) {
    this._publicNetworkIps.internalValue = value;
  }
  public resetPublicNetworkIps() {
    this._publicNetworkIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkIpsInput() {
    return this._publicNetworkIps.internalValue;
  }

  // storage_network_dns_ip - computed: false, optional: true, required: false
  private _storageNetworkDnsIp = new ObjectStoreV2StorageNetworkDnsIpOutputReference(this, "storage_network_dns_ip");
  public get storageNetworkDnsIp() {
    return this._storageNetworkDnsIp;
  }
  public putStorageNetworkDnsIp(value: ObjectStoreV2StorageNetworkDnsIp) {
    this._storageNetworkDnsIp.internalValue = value;
  }
  public resetStorageNetworkDnsIp() {
    this._storageNetworkDnsIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkDnsIpInput() {
    return this._storageNetworkDnsIp.internalValue;
  }

  // storage_network_vip - computed: false, optional: true, required: false
  private _storageNetworkVip = new ObjectStoreV2StorageNetworkVipOutputReference(this, "storage_network_vip");
  public get storageNetworkVip() {
    return this._storageNetworkVip;
  }
  public putStorageNetworkVip(value: ObjectStoreV2StorageNetworkVip) {
    this._storageNetworkVip.internalValue = value;
  }
  public resetStorageNetworkVip() {
    this._storageNetworkVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkVipInput() {
    return this._storageNetworkVip.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObjectStoreV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObjectStoreV2Timeouts) {
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
      certificate_ext_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateExtIds),
      cluster_ext_id: cdktf.stringToTerraform(this._clusterExtId),
      deployment_version: cdktf.stringToTerraform(this._deploymentVersion),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_worker_nodes: cdktf.numberToTerraform(this._numWorkerNodes),
      public_network_reference: cdktf.stringToTerraform(this._publicNetworkReference),
      region: cdktf.stringToTerraform(this._region),
      state: cdktf.stringToTerraform(this._state),
      storage_network_reference: cdktf.stringToTerraform(this._storageNetworkReference),
      total_capacity_gib: cdktf.numberToTerraform(this._totalCapacityGib),
      metadata: cdktf.listMapper(objectStoreV2MetadataToTerraform, true)(this._metadata.internalValue),
      public_network_ips: cdktf.listMapper(objectStoreV2PublicNetworkIpsToTerraform, true)(this._publicNetworkIps.internalValue),
      storage_network_dns_ip: objectStoreV2StorageNetworkDnsIpToTerraform(this._storageNetworkDnsIp.internalValue),
      storage_network_vip: objectStoreV2StorageNetworkVipToTerraform(this._storageNetworkVip.internalValue),
      timeouts: objectStoreV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_ext_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateExtIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_ext_id: {
        value: cdktf.stringToHclTerraform(this._clusterExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_version: {
        value: cdktf.stringToHclTerraform(this._deploymentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_worker_nodes: {
        value: cdktf.numberToHclTerraform(this._numWorkerNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_network_reference: {
        value: cdktf.stringToHclTerraform(this._publicNetworkReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_network_reference: {
        value: cdktf.stringToHclTerraform(this._storageNetworkReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_capacity_gib: {
        value: cdktf.numberToHclTerraform(this._totalCapacityGib),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.listMapperHcl(objectStoreV2MetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectStoreV2MetadataList",
      },
      public_network_ips: {
        value: cdktf.listMapperHcl(objectStoreV2PublicNetworkIpsToHclTerraform, true)(this._publicNetworkIps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectStoreV2PublicNetworkIpsList",
      },
      storage_network_dns_ip: {
        value: objectStoreV2StorageNetworkDnsIpToHclTerraform(this._storageNetworkDnsIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectStoreV2StorageNetworkDnsIpList",
      },
      storage_network_vip: {
        value: objectStoreV2StorageNetworkVipToHclTerraform(this._storageNetworkVip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectStoreV2StorageNetworkVipList",
      },
      timeouts: {
        value: objectStoreV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStoreV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
