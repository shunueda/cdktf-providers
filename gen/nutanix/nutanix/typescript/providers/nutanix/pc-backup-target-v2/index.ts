// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PcBackupTargetV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#domain_manager_ext_id PcBackupTargetV2#domain_manager_ext_id}
  */
  readonly domainManagerExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#id PcBackupTargetV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#location PcBackupTargetV2#location}
  */
  readonly location: PcBackupTargetV2Location;
}
export interface PcBackupTargetV2Links {
}

export function pcBackupTargetV2LinksToTerraform(struct?: PcBackupTargetV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pcBackupTargetV2LinksToHclTerraform(struct?: PcBackupTargetV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PcBackupTargetV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcBackupTargetV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2Links | undefined) {
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

export class PcBackupTargetV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): PcBackupTargetV2LinksOutputReference {
    return new PcBackupTargetV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcBackupTargetV2LocationClusterLocationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#ext_id PcBackupTargetV2#ext_id}
  */
  readonly extId: string;
}

export function pcBackupTargetV2LocationClusterLocationConfigToTerraform(struct?: PcBackupTargetV2LocationClusterLocationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function pcBackupTargetV2LocationClusterLocationConfigToHclTerraform(struct?: PcBackupTargetV2LocationClusterLocationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationClusterLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcBackupTargetV2LocationClusterLocationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2LocationClusterLocationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class PcBackupTargetV2LocationClusterLocationConfigList extends cdktf.ComplexList {
  public internalValue? : PcBackupTargetV2LocationClusterLocationConfig[] | cdktf.IResolvable

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
  public get(index: number): PcBackupTargetV2LocationClusterLocationConfigOutputReference {
    return new PcBackupTargetV2LocationClusterLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcBackupTargetV2LocationClusterLocation {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#config PcBackupTargetV2#config}
  */
  readonly config: PcBackupTargetV2LocationClusterLocationConfig[] | cdktf.IResolvable;
}

export function pcBackupTargetV2LocationClusterLocationToTerraform(struct?: PcBackupTargetV2LocationClusterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(pcBackupTargetV2LocationClusterLocationConfigToTerraform, true)(struct!.config),
  }
}


export function pcBackupTargetV2LocationClusterLocationToHclTerraform(struct?: PcBackupTargetV2LocationClusterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(pcBackupTargetV2LocationClusterLocationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "PcBackupTargetV2LocationClusterLocationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationClusterLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcBackupTargetV2LocationClusterLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2LocationClusterLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: false, required: true
  private _config = new PcBackupTargetV2LocationClusterLocationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: PcBackupTargetV2LocationClusterLocationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class PcBackupTargetV2LocationClusterLocationList extends cdktf.ComplexList {
  public internalValue? : PcBackupTargetV2LocationClusterLocation[] | cdktf.IResolvable

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
  public get(index: number): PcBackupTargetV2LocationClusterLocationOutputReference {
    return new PcBackupTargetV2LocationClusterLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcBackupTargetV2LocationObjectStoreLocationBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#rpo_in_minutes PcBackupTargetV2#rpo_in_minutes}
  */
  readonly rpoInMinutes: number;
}

export function pcBackupTargetV2LocationObjectStoreLocationBackupPolicyToTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpo_in_minutes: cdktf.numberToTerraform(struct!.rpoInMinutes),
  }
}


export function pcBackupTargetV2LocationObjectStoreLocationBackupPolicyToHclTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rpo_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.rpoInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationObjectStoreLocationBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcBackupTargetV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpoInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInMinutes = this._rpoInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpoInMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpoInMinutes = value.rpoInMinutes;
    }
  }

  // rpo_in_minutes - computed: false, optional: false, required: true
  private _rpoInMinutes?: number; 
  public get rpoInMinutes() {
    return this.getNumberAttribute('rpo_in_minutes');
  }
  public set rpoInMinutes(value: number) {
    this._rpoInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInMinutesInput() {
    return this._rpoInMinutes;
  }
}

export class PcBackupTargetV2LocationObjectStoreLocationBackupPolicyList extends cdktf.ComplexList {
  public internalValue? : PcBackupTargetV2LocationObjectStoreLocationBackupPolicy[] | cdktf.IResolvable

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
  public get(index: number): PcBackupTargetV2LocationObjectStoreLocationBackupPolicyOutputReference {
    return new PcBackupTargetV2LocationObjectStoreLocationBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#access_key_id PcBackupTargetV2#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#secret_access_key PcBackupTargetV2#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function pcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsToTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference | PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function pcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsToHclTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference | PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface PcBackupTargetV2LocationObjectStoreLocationProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#bucket_name PcBackupTargetV2#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#region PcBackupTargetV2#region}
  */
  readonly region?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#credentials PcBackupTargetV2#credentials}
  */
  readonly credentials?: PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials;
}

export function pcBackupTargetV2LocationObjectStoreLocationProviderConfigToTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    region: cdktf.stringToTerraform(struct!.region),
    credentials: pcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsToTerraform(struct!.credentials),
  }
}


export function pcBackupTargetV2LocationObjectStoreLocationProviderConfigToHclTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: pcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationObjectStoreLocationProviderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcBackupTargetV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._region = undefined;
      this._credentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._region = value.region;
      this._credentials.internalValue = value.credentials;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // region - computed: false, optional: true, required: false
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

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PcBackupTargetV2LocationObjectStoreLocationProviderConfigCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

export class PcBackupTargetV2LocationObjectStoreLocationProviderConfigList extends cdktf.ComplexList {
  public internalValue? : PcBackupTargetV2LocationObjectStoreLocationProviderConfig[] | cdktf.IResolvable

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
  public get(index: number): PcBackupTargetV2LocationObjectStoreLocationProviderConfigOutputReference {
    return new PcBackupTargetV2LocationObjectStoreLocationProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcBackupTargetV2LocationObjectStoreLocation {
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#backup_policy PcBackupTargetV2#backup_policy}
  */
  readonly backupPolicy?: PcBackupTargetV2LocationObjectStoreLocationBackupPolicy[] | cdktf.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#provider_config PcBackupTargetV2#provider_config}
  */
  readonly providerConfig: PcBackupTargetV2LocationObjectStoreLocationProviderConfig[] | cdktf.IResolvable;
}

export function pcBackupTargetV2LocationObjectStoreLocationToTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_policy: cdktf.listMapper(pcBackupTargetV2LocationObjectStoreLocationBackupPolicyToTerraform, true)(struct!.backupPolicy),
    provider_config: cdktf.listMapper(pcBackupTargetV2LocationObjectStoreLocationProviderConfigToTerraform, true)(struct!.providerConfig),
  }
}


export function pcBackupTargetV2LocationObjectStoreLocationToHclTerraform(struct?: PcBackupTargetV2LocationObjectStoreLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_policy: {
      value: cdktf.listMapperHcl(pcBackupTargetV2LocationObjectStoreLocationBackupPolicyToHclTerraform, true)(struct!.backupPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PcBackupTargetV2LocationObjectStoreLocationBackupPolicyList",
    },
    provider_config: {
      value: cdktf.listMapperHcl(pcBackupTargetV2LocationObjectStoreLocationProviderConfigToHclTerraform, true)(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PcBackupTargetV2LocationObjectStoreLocationProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationObjectStoreLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcBackupTargetV2LocationObjectStoreLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicy = this._backupPolicy?.internalValue;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2LocationObjectStoreLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPolicy.internalValue = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPolicy.internalValue = value.backupPolicy;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new PcBackupTargetV2LocationObjectStoreLocationBackupPolicyList(this, "backup_policy", false);
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: PcBackupTargetV2LocationObjectStoreLocationBackupPolicy[] | cdktf.IResolvable) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // provider_config - computed: false, optional: false, required: true
  private _providerConfig = new PcBackupTargetV2LocationObjectStoreLocationProviderConfigList(this, "provider_config", false);
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: PcBackupTargetV2LocationObjectStoreLocationProviderConfig[] | cdktf.IResolvable) {
    this._providerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }
}

export class PcBackupTargetV2LocationObjectStoreLocationList extends cdktf.ComplexList {
  public internalValue? : PcBackupTargetV2LocationObjectStoreLocation[] | cdktf.IResolvable

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
  public get(index: number): PcBackupTargetV2LocationObjectStoreLocationOutputReference {
    return new PcBackupTargetV2LocationObjectStoreLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcBackupTargetV2Location {
  /**
  * cluster_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#cluster_location PcBackupTargetV2#cluster_location}
  */
  readonly clusterLocation?: PcBackupTargetV2LocationClusterLocation[] | cdktf.IResolvable;
  /**
  * object_store_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#object_store_location PcBackupTargetV2#object_store_location}
  */
  readonly objectStoreLocation?: PcBackupTargetV2LocationObjectStoreLocation[] | cdktf.IResolvable;
}

export function pcBackupTargetV2LocationToTerraform(struct?: PcBackupTargetV2LocationOutputReference | PcBackupTargetV2Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_location: cdktf.listMapper(pcBackupTargetV2LocationClusterLocationToTerraform, true)(struct!.clusterLocation),
    object_store_location: cdktf.listMapper(pcBackupTargetV2LocationObjectStoreLocationToTerraform, true)(struct!.objectStoreLocation),
  }
}


export function pcBackupTargetV2LocationToHclTerraform(struct?: PcBackupTargetV2LocationOutputReference | PcBackupTargetV2Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_location: {
      value: cdktf.listMapperHcl(pcBackupTargetV2LocationClusterLocationToHclTerraform, true)(struct!.clusterLocation),
      isBlock: true,
      type: "list",
      storageClassType: "PcBackupTargetV2LocationClusterLocationList",
    },
    object_store_location: {
      value: cdktf.listMapperHcl(pcBackupTargetV2LocationObjectStoreLocationToHclTerraform, true)(struct!.objectStoreLocation),
      isBlock: true,
      type: "list",
      storageClassType: "PcBackupTargetV2LocationObjectStoreLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcBackupTargetV2LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcBackupTargetV2Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLocation = this._clusterLocation?.internalValue;
    }
    if (this._objectStoreLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStoreLocation = this._objectStoreLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcBackupTargetV2Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterLocation.internalValue = undefined;
      this._objectStoreLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterLocation.internalValue = value.clusterLocation;
      this._objectStoreLocation.internalValue = value.objectStoreLocation;
    }
  }

  // cluster_location - computed: false, optional: true, required: false
  private _clusterLocation = new PcBackupTargetV2LocationClusterLocationList(this, "cluster_location", false);
  public get clusterLocation() {
    return this._clusterLocation;
  }
  public putClusterLocation(value: PcBackupTargetV2LocationClusterLocation[] | cdktf.IResolvable) {
    this._clusterLocation.internalValue = value;
  }
  public resetClusterLocation() {
    this._clusterLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLocationInput() {
    return this._clusterLocation.internalValue;
  }

  // object_store_location - computed: false, optional: true, required: false
  private _objectStoreLocation = new PcBackupTargetV2LocationObjectStoreLocationList(this, "object_store_location", false);
  public get objectStoreLocation() {
    return this._objectStoreLocation;
  }
  public putObjectStoreLocation(value: PcBackupTargetV2LocationObjectStoreLocation[] | cdktf.IResolvable) {
    this._objectStoreLocation.internalValue = value;
  }
  public resetObjectStoreLocation() {
    this._objectStoreLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoreLocationInput() {
    return this._objectStoreLocation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2 nutanix_pc_backup_target_v2}
*/
export class PcBackupTargetV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_pc_backup_target_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PcBackupTargetV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcBackupTargetV2 to import
  * @param importFromId The id of the existing PcBackupTargetV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcBackupTargetV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_pc_backup_target_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_backup_target_v2 nutanix_pc_backup_target_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcBackupTargetV2Config
  */
  public constructor(scope: Construct, id: string, config: PcBackupTargetV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_pc_backup_target_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainManagerExtId = config.domainManagerExtId;
    this._id = config.id;
    this._location.internalValue = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_pause_reason - computed: true, optional: false, required: false
  public get backupPauseReason() {
    return this.getStringAttribute('backup_pause_reason');
  }

  // domain_manager_ext_id - computed: false, optional: false, required: true
  private _domainManagerExtId?: string; 
  public get domainManagerExtId() {
    return this.getStringAttribute('domain_manager_ext_id');
  }
  public set domainManagerExtId(value: string) {
    this._domainManagerExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainManagerExtIdInput() {
    return this._domainManagerExtId;
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

  // is_backup_paused - computed: true, optional: false, required: false
  public get isBackupPaused() {
    return this.getBooleanAttribute('is_backup_paused');
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }

  // links - computed: true, optional: false, required: false
  private _links = new PcBackupTargetV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // location - computed: false, optional: false, required: true
  private _location = new PcBackupTargetV2LocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: PcBackupTargetV2Location) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_manager_ext_id: cdktf.stringToTerraform(this._domainManagerExtId),
      id: cdktf.stringToTerraform(this._id),
      location: pcBackupTargetV2LocationToTerraform(this._location.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_manager_ext_id: {
        value: cdktf.stringToHclTerraform(this._domainManagerExtId),
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
      location: {
        value: pcBackupTargetV2LocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PcBackupTargetV2LocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
