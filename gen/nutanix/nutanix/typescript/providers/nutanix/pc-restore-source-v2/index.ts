// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PcRestoreSourceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#id PcRestoreSourceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#location PcRestoreSourceV2#location}
  */
  readonly location: PcRestoreSourceV2Location;
}
export interface PcRestoreSourceV2Links {
}

export function pcRestoreSourceV2LinksToTerraform(struct?: PcRestoreSourceV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pcRestoreSourceV2LinksToHclTerraform(struct?: PcRestoreSourceV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PcRestoreSourceV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreSourceV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcRestoreSourceV2Links | undefined) {
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

export class PcRestoreSourceV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): PcRestoreSourceV2LinksOutputReference {
    return new PcRestoreSourceV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreSourceV2LocationClusterLocationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#ext_id PcRestoreSourceV2#ext_id}
  */
  readonly extId: string;
}

export function pcRestoreSourceV2LocationClusterLocationConfigToTerraform(struct?: PcRestoreSourceV2LocationClusterLocationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function pcRestoreSourceV2LocationClusterLocationConfigToHclTerraform(struct?: PcRestoreSourceV2LocationClusterLocationConfig | cdktf.IResolvable): any {
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

export class PcRestoreSourceV2LocationClusterLocationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreSourceV2LocationClusterLocationConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreSourceV2LocationClusterLocationConfig | cdktf.IResolvable | undefined) {
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

export class PcRestoreSourceV2LocationClusterLocationConfigList extends cdktf.ComplexList {
  public internalValue? : PcRestoreSourceV2LocationClusterLocationConfig[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreSourceV2LocationClusterLocationConfigOutputReference {
    return new PcRestoreSourceV2LocationClusterLocationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreSourceV2LocationClusterLocation {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#config PcRestoreSourceV2#config}
  */
  readonly config: PcRestoreSourceV2LocationClusterLocationConfig[] | cdktf.IResolvable;
}

export function pcRestoreSourceV2LocationClusterLocationToTerraform(struct?: PcRestoreSourceV2LocationClusterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(pcRestoreSourceV2LocationClusterLocationConfigToTerraform, true)(struct!.config),
  }
}


export function pcRestoreSourceV2LocationClusterLocationToHclTerraform(struct?: PcRestoreSourceV2LocationClusterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(pcRestoreSourceV2LocationClusterLocationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreSourceV2LocationClusterLocationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreSourceV2LocationClusterLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreSourceV2LocationClusterLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreSourceV2LocationClusterLocation | cdktf.IResolvable | undefined) {
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
  private _config = new PcRestoreSourceV2LocationClusterLocationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: PcRestoreSourceV2LocationClusterLocationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class PcRestoreSourceV2LocationClusterLocationList extends cdktf.ComplexList {
  public internalValue? : PcRestoreSourceV2LocationClusterLocation[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreSourceV2LocationClusterLocationOutputReference {
    return new PcRestoreSourceV2LocationClusterLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#rpo_in_minutes PcRestoreSourceV2#rpo_in_minutes}
  */
  readonly rpoInMinutes: number;
}

export function pcRestoreSourceV2LocationObjectStoreLocationBackupPolicyToTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rpo_in_minutes: cdktf.numberToTerraform(struct!.rpoInMinutes),
  }
}


export function pcRestoreSourceV2LocationObjectStoreLocationBackupPolicyToHclTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable): any {
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

export class PcRestoreSourceV2LocationObjectStoreLocationBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy | cdktf.IResolvable | undefined) {
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

export class PcRestoreSourceV2LocationObjectStoreLocationBackupPolicyList extends cdktf.ComplexList {
  public internalValue? : PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreSourceV2LocationObjectStoreLocationBackupPolicyOutputReference {
    return new PcRestoreSourceV2LocationObjectStoreLocationBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#access_key_id PcRestoreSourceV2#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#secret_access_key PcRestoreSourceV2#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function pcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsToTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference | PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function pcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsToHclTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference | PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials): any {
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

export class PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials | undefined {
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

  public set internalValue(value: PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials | undefined) {
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
export interface PcRestoreSourceV2LocationObjectStoreLocationProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#bucket_name PcRestoreSourceV2#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#region PcRestoreSourceV2#region}
  */
  readonly region?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#credentials PcRestoreSourceV2#credentials}
  */
  readonly credentials?: PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials;
}

export function pcRestoreSourceV2LocationObjectStoreLocationProviderConfigToTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    region: cdktf.stringToTerraform(struct!.region),
    credentials: pcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsToTerraform(struct!.credentials),
  }
}


export function pcRestoreSourceV2LocationObjectStoreLocationProviderConfigToHclTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable): any {
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
      value: pcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreSourceV2LocationObjectStoreLocationProviderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreSourceV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreSourceV2LocationObjectStoreLocationProviderConfig | cdktf.IResolvable | undefined) {
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
  private _credentials = new PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PcRestoreSourceV2LocationObjectStoreLocationProviderConfigCredentials) {
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

export class PcRestoreSourceV2LocationObjectStoreLocationProviderConfigList extends cdktf.ComplexList {
  public internalValue? : PcRestoreSourceV2LocationObjectStoreLocationProviderConfig[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreSourceV2LocationObjectStoreLocationProviderConfigOutputReference {
    return new PcRestoreSourceV2LocationObjectStoreLocationProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreSourceV2LocationObjectStoreLocation {
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#backup_policy PcRestoreSourceV2#backup_policy}
  */
  readonly backupPolicy?: PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy[] | cdktf.IResolvable;
  /**
  * provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#provider_config PcRestoreSourceV2#provider_config}
  */
  readonly providerConfig: PcRestoreSourceV2LocationObjectStoreLocationProviderConfig[] | cdktf.IResolvable;
}

export function pcRestoreSourceV2LocationObjectStoreLocationToTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_policy: cdktf.listMapper(pcRestoreSourceV2LocationObjectStoreLocationBackupPolicyToTerraform, true)(struct!.backupPolicy),
    provider_config: cdktf.listMapper(pcRestoreSourceV2LocationObjectStoreLocationProviderConfigToTerraform, true)(struct!.providerConfig),
  }
}


export function pcRestoreSourceV2LocationObjectStoreLocationToHclTerraform(struct?: PcRestoreSourceV2LocationObjectStoreLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_policy: {
      value: cdktf.listMapperHcl(pcRestoreSourceV2LocationObjectStoreLocationBackupPolicyToHclTerraform, true)(struct!.backupPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreSourceV2LocationObjectStoreLocationBackupPolicyList",
    },
    provider_config: {
      value: cdktf.listMapperHcl(pcRestoreSourceV2LocationObjectStoreLocationProviderConfigToHclTerraform, true)(struct!.providerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreSourceV2LocationObjectStoreLocationProviderConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreSourceV2LocationObjectStoreLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PcRestoreSourceV2LocationObjectStoreLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcRestoreSourceV2LocationObjectStoreLocation | cdktf.IResolvable | undefined) {
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
  private _backupPolicy = new PcRestoreSourceV2LocationObjectStoreLocationBackupPolicyList(this, "backup_policy", false);
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: PcRestoreSourceV2LocationObjectStoreLocationBackupPolicy[] | cdktf.IResolvable) {
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
  private _providerConfig = new PcRestoreSourceV2LocationObjectStoreLocationProviderConfigList(this, "provider_config", false);
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: PcRestoreSourceV2LocationObjectStoreLocationProviderConfig[] | cdktf.IResolvable) {
    this._providerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }
}

export class PcRestoreSourceV2LocationObjectStoreLocationList extends cdktf.ComplexList {
  public internalValue? : PcRestoreSourceV2LocationObjectStoreLocation[] | cdktf.IResolvable

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
  public get(index: number): PcRestoreSourceV2LocationObjectStoreLocationOutputReference {
    return new PcRestoreSourceV2LocationObjectStoreLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PcRestoreSourceV2Location {
  /**
  * cluster_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#cluster_location PcRestoreSourceV2#cluster_location}
  */
  readonly clusterLocation?: PcRestoreSourceV2LocationClusterLocation[] | cdktf.IResolvable;
  /**
  * object_store_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#object_store_location PcRestoreSourceV2#object_store_location}
  */
  readonly objectStoreLocation?: PcRestoreSourceV2LocationObjectStoreLocation[] | cdktf.IResolvable;
}

export function pcRestoreSourceV2LocationToTerraform(struct?: PcRestoreSourceV2LocationOutputReference | PcRestoreSourceV2Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_location: cdktf.listMapper(pcRestoreSourceV2LocationClusterLocationToTerraform, true)(struct!.clusterLocation),
    object_store_location: cdktf.listMapper(pcRestoreSourceV2LocationObjectStoreLocationToTerraform, true)(struct!.objectStoreLocation),
  }
}


export function pcRestoreSourceV2LocationToHclTerraform(struct?: PcRestoreSourceV2LocationOutputReference | PcRestoreSourceV2Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_location: {
      value: cdktf.listMapperHcl(pcRestoreSourceV2LocationClusterLocationToHclTerraform, true)(struct!.clusterLocation),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreSourceV2LocationClusterLocationList",
    },
    object_store_location: {
      value: cdktf.listMapperHcl(pcRestoreSourceV2LocationObjectStoreLocationToHclTerraform, true)(struct!.objectStoreLocation),
      isBlock: true,
      type: "list",
      storageClassType: "PcRestoreSourceV2LocationObjectStoreLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PcRestoreSourceV2LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PcRestoreSourceV2Location | undefined {
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

  public set internalValue(value: PcRestoreSourceV2Location | undefined) {
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
  private _clusterLocation = new PcRestoreSourceV2LocationClusterLocationList(this, "cluster_location", false);
  public get clusterLocation() {
    return this._clusterLocation;
  }
  public putClusterLocation(value: PcRestoreSourceV2LocationClusterLocation[] | cdktf.IResolvable) {
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
  private _objectStoreLocation = new PcRestoreSourceV2LocationObjectStoreLocationList(this, "object_store_location", false);
  public get objectStoreLocation() {
    return this._objectStoreLocation;
  }
  public putObjectStoreLocation(value: PcRestoreSourceV2LocationObjectStoreLocation[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2 nutanix_pc_restore_source_v2}
*/
export class PcRestoreSourceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_pc_restore_source_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PcRestoreSourceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcRestoreSourceV2 to import
  * @param importFromId The id of the existing PcRestoreSourceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcRestoreSourceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_pc_restore_source_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/pc_restore_source_v2 nutanix_pc_restore_source_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcRestoreSourceV2Config
  */
  public constructor(scope: Construct, id: string, config: PcRestoreSourceV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_pc_restore_source_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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
    this._location.internalValue = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_pause_reason - computed: true, optional: false, required: false
  public get backupPauseReason() {
    return this.getStringAttribute('backup_pause_reason');
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
  private _links = new PcRestoreSourceV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // location - computed: false, optional: false, required: true
  private _location = new PcRestoreSourceV2LocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: PcRestoreSourceV2Location) {
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
      id: cdktf.stringToTerraform(this._id),
      location: pcRestoreSourceV2LocationToTerraform(this._location.internalValue),
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
      location: {
        value: pcRestoreSourceV2LocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PcRestoreSourceV2LocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
