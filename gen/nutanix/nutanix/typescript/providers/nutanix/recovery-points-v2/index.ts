// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RecoveryPointsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#expiration_time RecoveryPointsV2#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#id RecoveryPointsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#name RecoveryPointsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#recovery_point_type RecoveryPointsV2#recovery_point_type}
  */
  readonly recoveryPointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#status RecoveryPointsV2#status}
  */
  readonly status?: string;
  /**
  * vm_recovery_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#vm_recovery_points RecoveryPointsV2#vm_recovery_points}
  */
  readonly vmRecoveryPoints?: RecoveryPointsV2VmRecoveryPoints[] | cdktf.IResolvable;
  /**
  * volume_group_recovery_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#volume_group_recovery_points RecoveryPointsV2#volume_group_recovery_points}
  */
  readonly volumeGroupRecoveryPoints?: RecoveryPointsV2VolumeGroupRecoveryPoints[] | cdktf.IResolvable;
}
export interface RecoveryPointsV2Links {
}

export function recoveryPointsV2LinksToTerraform(struct?: RecoveryPointsV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryPointsV2LinksToHclTerraform(struct?: RecoveryPointsV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryPointsV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2Links | undefined) {
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

export class RecoveryPointsV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): RecoveryPointsV2LinksOutputReference {
    return new RecoveryPointsV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2LocationReferences {
}

export function recoveryPointsV2LocationReferencesToTerraform(struct?: RecoveryPointsV2LocationReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryPointsV2LocationReferencesToHclTerraform(struct?: RecoveryPointsV2LocationReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryPointsV2LocationReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2LocationReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2LocationReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_ext_id - computed: true, optional: false, required: false
  public get locationExtId() {
    return this.getStringAttribute('location_ext_id');
  }
}

export class RecoveryPointsV2LocationReferencesList extends cdktf.ComplexList {

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
  public get(index: number): RecoveryPointsV2LocationReferencesOutputReference {
    return new RecoveryPointsV2LocationReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VmRecoveryPointsLinks {
}

export function recoveryPointsV2VmRecoveryPointsLinksToTerraform(struct?: RecoveryPointsV2VmRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryPointsV2VmRecoveryPointsLinksToHclTerraform(struct?: RecoveryPointsV2VmRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryPointsV2VmRecoveryPointsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VmRecoveryPointsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VmRecoveryPointsLinks | undefined) {
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

export class RecoveryPointsV2VmRecoveryPointsLinksList extends cdktf.ComplexList {

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
  public get(index: number): RecoveryPointsV2VmRecoveryPointsLinksOutputReference {
    return new RecoveryPointsV2VmRecoveryPointsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#backup_type RecoveryPointsV2#backup_type}
  */
  readonly backupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#object_type RecoveryPointsV2#object_type}
  */
  readonly objectType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#should_include_writers RecoveryPointsV2#should_include_writers}
  */
  readonly shouldIncludeWriters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#should_store_vss_metadata RecoveryPointsV2#should_store_vss_metadata}
  */
  readonly shouldStoreVssMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#writers RecoveryPointsV2#writers}
  */
  readonly writers?: string[];
}

export function recoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesToTerraform(struct?: RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    should_include_writers: cdktf.booleanToTerraform(struct!.shouldIncludeWriters),
    should_store_vss_metadata: cdktf.booleanToTerraform(struct!.shouldStoreVssMetadata),
    writers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.writers),
  }
}


export function recoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesToHclTerraform(struct?: RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_type: {
      value: cdktf.stringToHclTerraform(struct!.backupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_include_writers: {
      value: cdktf.booleanToHclTerraform(struct!.shouldIncludeWriters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_store_vss_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.shouldStoreVssMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    writers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.writers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._shouldIncludeWriters !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldIncludeWriters = this._shouldIncludeWriters;
    }
    if (this._shouldStoreVssMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldStoreVssMetadata = this._shouldStoreVssMetadata;
    }
    if (this._writers !== undefined) {
      hasAnyValues = true;
      internalValueResult.writers = this._writers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupType = undefined;
      this._objectType = undefined;
      this._shouldIncludeWriters = undefined;
      this._shouldStoreVssMetadata = undefined;
      this._writers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupType = value.backupType;
      this._objectType = value.objectType;
      this._shouldIncludeWriters = value.shouldIncludeWriters;
      this._shouldStoreVssMetadata = value.shouldStoreVssMetadata;
      this._writers = value.writers;
    }
  }

  // backup_type - computed: false, optional: false, required: true
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // should_include_writers - computed: true, optional: true, required: false
  private _shouldIncludeWriters?: boolean | cdktf.IResolvable; 
  public get shouldIncludeWriters() {
    return this.getBooleanAttribute('should_include_writers');
  }
  public set shouldIncludeWriters(value: boolean | cdktf.IResolvable) {
    this._shouldIncludeWriters = value;
  }
  public resetShouldIncludeWriters() {
    this._shouldIncludeWriters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIncludeWritersInput() {
    return this._shouldIncludeWriters;
  }

  // should_store_vss_metadata - computed: true, optional: true, required: false
  private _shouldStoreVssMetadata?: boolean | cdktf.IResolvable; 
  public get shouldStoreVssMetadata() {
    return this.getBooleanAttribute('should_store_vss_metadata');
  }
  public set shouldStoreVssMetadata(value: boolean | cdktf.IResolvable) {
    this._shouldStoreVssMetadata = value;
  }
  public resetShouldStoreVssMetadata() {
    this._shouldStoreVssMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldStoreVssMetadataInput() {
    return this._shouldStoreVssMetadata;
  }

  // writers - computed: true, optional: true, required: false
  private _writers?: string[]; 
  public get writers() {
    return this.getListAttribute('writers');
  }
  public set writers(value: string[]) {
    this._writers = value;
  }
  public resetWriters() {
    this._writers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writersInput() {
    return this._writers;
  }
}

export class RecoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesOutputReference {
    return new RecoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints {
}

export function recoveryPointsV2VmRecoveryPointsDiskRecoveryPointsToTerraform(struct?: RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryPointsV2VmRecoveryPointsDiskRecoveryPointsToHclTerraform(struct?: RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryPointsV2VmRecoveryPointsDiskRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_recovery_point_ext_id - computed: true, optional: false, required: false
  public get diskRecoveryPointExtId() {
    return this.getStringAttribute('disk_recovery_point_ext_id');
  }
}

export class RecoveryPointsV2VmRecoveryPointsDiskRecoveryPointsList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointsV2VmRecoveryPointsDiskRecoveryPointsOutputReference {
    return new RecoveryPointsV2VmRecoveryPointsDiskRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VmRecoveryPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#expiration_time RecoveryPointsV2#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#name RecoveryPointsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#recovery_point_type RecoveryPointsV2#recovery_point_type}
  */
  readonly recoveryPointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#status RecoveryPointsV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#vm_ext_id RecoveryPointsV2#vm_ext_id}
  */
  readonly vmExtId: string;
  /**
  * application_consistent_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#application_consistent_properties RecoveryPointsV2#application_consistent_properties}
  */
  readonly applicationConsistentProperties?: RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties[] | cdktf.IResolvable;
  /**
  * disk_recovery_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#disk_recovery_points RecoveryPointsV2#disk_recovery_points}
  */
  readonly diskRecoveryPoints?: RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints[] | cdktf.IResolvable;
}

export function recoveryPointsV2VmRecoveryPointsToTerraform(struct?: RecoveryPointsV2VmRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    name: cdktf.stringToTerraform(struct!.name),
    recovery_point_type: cdktf.stringToTerraform(struct!.recoveryPointType),
    status: cdktf.stringToTerraform(struct!.status),
    vm_ext_id: cdktf.stringToTerraform(struct!.vmExtId),
    application_consistent_properties: cdktf.listMapper(recoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesToTerraform, true)(struct!.applicationConsistentProperties),
    disk_recovery_points: cdktf.listMapper(recoveryPointsV2VmRecoveryPointsDiskRecoveryPointsToTerraform, true)(struct!.diskRecoveryPoints),
  }
}


export function recoveryPointsV2VmRecoveryPointsToHclTerraform(struct?: RecoveryPointsV2VmRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
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
    recovery_point_type: {
      value: cdktf.stringToHclTerraform(struct!.recoveryPointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.vmExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_consistent_properties: {
      value: cdktf.listMapperHcl(recoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesToHclTerraform, true)(struct!.applicationConsistentProperties),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesList",
    },
    disk_recovery_points: {
      value: cdktf.listMapperHcl(recoveryPointsV2VmRecoveryPointsDiskRecoveryPointsToHclTerraform, true)(struct!.diskRecoveryPoints),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPointsV2VmRecoveryPointsDiskRecoveryPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPointsV2VmRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VmRecoveryPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recoveryPointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPointType = this._recoveryPointType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vmExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmExtId = this._vmExtId;
    }
    if (this._applicationConsistentProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationConsistentProperties = this._applicationConsistentProperties?.internalValue;
    }
    if (this._diskRecoveryPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskRecoveryPoints = this._diskRecoveryPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VmRecoveryPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._name = undefined;
      this._recoveryPointType = undefined;
      this._status = undefined;
      this._vmExtId = undefined;
      this._applicationConsistentProperties.internalValue = undefined;
      this._diskRecoveryPoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._name = value.name;
      this._recoveryPointType = value.recoveryPointType;
      this._status = value.status;
      this._vmExtId = value.vmExtId;
      this._applicationConsistentProperties.internalValue = value.applicationConsistentProperties;
      this._diskRecoveryPoints.internalValue = value.diskRecoveryPoints;
    }
  }

  // consistency_group_ext_id - computed: true, optional: false, required: false
  public get consistencyGroupExtId() {
    return this.getStringAttribute('consistency_group_ext_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new RecoveryPointsV2VmRecoveryPointsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // recovery_point_type - computed: true, optional: true, required: false
  private _recoveryPointType?: string; 
  public get recoveryPointType() {
    return this.getStringAttribute('recovery_point_type');
  }
  public set recoveryPointType(value: string) {
    this._recoveryPointType = value;
  }
  public resetRecoveryPointType() {
    this._recoveryPointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTypeInput() {
    return this._recoveryPointType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_categories - computed: true, optional: false, required: false
  public get vmCategories() {
    return this.getListAttribute('vm_categories');
  }

  // vm_ext_id - computed: false, optional: false, required: true
  private _vmExtId?: string; 
  public get vmExtId() {
    return this.getStringAttribute('vm_ext_id');
  }
  public set vmExtId(value: string) {
    this._vmExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmExtIdInput() {
    return this._vmExtId;
  }

  // application_consistent_properties - computed: false, optional: true, required: false
  private _applicationConsistentProperties = new RecoveryPointsV2VmRecoveryPointsApplicationConsistentPropertiesList(this, "application_consistent_properties", false);
  public get applicationConsistentProperties() {
    return this._applicationConsistentProperties;
  }
  public putApplicationConsistentProperties(value: RecoveryPointsV2VmRecoveryPointsApplicationConsistentProperties[] | cdktf.IResolvable) {
    this._applicationConsistentProperties.internalValue = value;
  }
  public resetApplicationConsistentProperties() {
    this._applicationConsistentProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConsistentPropertiesInput() {
    return this._applicationConsistentProperties.internalValue;
  }

  // disk_recovery_points - computed: false, optional: true, required: false
  private _diskRecoveryPoints = new RecoveryPointsV2VmRecoveryPointsDiskRecoveryPointsList(this, "disk_recovery_points", false);
  public get diskRecoveryPoints() {
    return this._diskRecoveryPoints;
  }
  public putDiskRecoveryPoints(value: RecoveryPointsV2VmRecoveryPointsDiskRecoveryPoints[] | cdktf.IResolvable) {
    this._diskRecoveryPoints.internalValue = value;
  }
  public resetDiskRecoveryPoints() {
    this._diskRecoveryPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRecoveryPointsInput() {
    return this._diskRecoveryPoints.internalValue;
  }
}

export class RecoveryPointsV2VmRecoveryPointsList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointsV2VmRecoveryPoints[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointsV2VmRecoveryPointsOutputReference {
    return new RecoveryPointsV2VmRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VolumeGroupRecoveryPointsLinks {
}

export function recoveryPointsV2VolumeGroupRecoveryPointsLinksToTerraform(struct?: RecoveryPointsV2VolumeGroupRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryPointsV2VolumeGroupRecoveryPointsLinksToHclTerraform(struct?: RecoveryPointsV2VolumeGroupRecoveryPointsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryPointsV2VolumeGroupRecoveryPointsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VolumeGroupRecoveryPointsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VolumeGroupRecoveryPointsLinks | undefined) {
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

export class RecoveryPointsV2VolumeGroupRecoveryPointsLinksList extends cdktf.ComplexList {

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
  public get(index: number): RecoveryPointsV2VolumeGroupRecoveryPointsLinksOutputReference {
    return new RecoveryPointsV2VolumeGroupRecoveryPointsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints {
}

export function recoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsToTerraform(struct?: RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function recoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsToHclTerraform(struct?: RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_recovery_point_ext_id - computed: true, optional: false, required: false
  public get diskRecoveryPointExtId() {
    return this.getStringAttribute('disk_recovery_point_ext_id');
  }
}

export class RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsOutputReference {
    return new RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RecoveryPointsV2VolumeGroupRecoveryPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#volume_group_ext_id RecoveryPointsV2#volume_group_ext_id}
  */
  readonly volumeGroupExtId: string;
  /**
  * disk_recovery_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#disk_recovery_points RecoveryPointsV2#disk_recovery_points}
  */
  readonly diskRecoveryPoints?: RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints[] | cdktf.IResolvable;
}

export function recoveryPointsV2VolumeGroupRecoveryPointsToTerraform(struct?: RecoveryPointsV2VolumeGroupRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_group_ext_id: cdktf.stringToTerraform(struct!.volumeGroupExtId),
    disk_recovery_points: cdktf.listMapper(recoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsToTerraform, true)(struct!.diskRecoveryPoints),
  }
}


export function recoveryPointsV2VolumeGroupRecoveryPointsToHclTerraform(struct?: RecoveryPointsV2VolumeGroupRecoveryPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_group_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_recovery_points: {
      value: cdktf.listMapperHcl(recoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsToHclTerraform, true)(struct!.diskRecoveryPoints),
      isBlock: true,
      type: "list",
      storageClassType: "RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RecoveryPointsV2VolumeGroupRecoveryPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RecoveryPointsV2VolumeGroupRecoveryPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeGroupExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupExtId = this._volumeGroupExtId;
    }
    if (this._diskRecoveryPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskRecoveryPoints = this._diskRecoveryPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RecoveryPointsV2VolumeGroupRecoveryPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeGroupExtId = undefined;
      this._diskRecoveryPoints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeGroupExtId = value.volumeGroupExtId;
      this._diskRecoveryPoints.internalValue = value.diskRecoveryPoints;
    }
  }

  // consistency_group_ext_id - computed: true, optional: false, required: false
  public get consistencyGroupExtId() {
    return this.getStringAttribute('consistency_group_ext_id');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new RecoveryPointsV2VolumeGroupRecoveryPointsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // volume_group_categories - computed: true, optional: false, required: false
  public get volumeGroupCategories() {
    return this.getListAttribute('volume_group_categories');
  }

  // volume_group_ext_id - computed: false, optional: false, required: true
  private _volumeGroupExtId?: string; 
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
  public set volumeGroupExtId(value: string) {
    this._volumeGroupExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupExtIdInput() {
    return this._volumeGroupExtId;
  }

  // disk_recovery_points - computed: false, optional: true, required: false
  private _diskRecoveryPoints = new RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPointsList(this, "disk_recovery_points", false);
  public get diskRecoveryPoints() {
    return this._diskRecoveryPoints;
  }
  public putDiskRecoveryPoints(value: RecoveryPointsV2VolumeGroupRecoveryPointsDiskRecoveryPoints[] | cdktf.IResolvable) {
    this._diskRecoveryPoints.internalValue = value;
  }
  public resetDiskRecoveryPoints() {
    this._diskRecoveryPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRecoveryPointsInput() {
    return this._diskRecoveryPoints.internalValue;
  }
}

export class RecoveryPointsV2VolumeGroupRecoveryPointsList extends cdktf.ComplexList {
  public internalValue? : RecoveryPointsV2VolumeGroupRecoveryPoints[] | cdktf.IResolvable

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
  public get(index: number): RecoveryPointsV2VolumeGroupRecoveryPointsOutputReference {
    return new RecoveryPointsV2VolumeGroupRecoveryPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2 nutanix_recovery_points_v2}
*/
export class RecoveryPointsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_recovery_points_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RecoveryPointsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RecoveryPointsV2 to import
  * @param importFromId The id of the existing RecoveryPointsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RecoveryPointsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_recovery_points_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/recovery_points_v2 nutanix_recovery_points_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RecoveryPointsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: RecoveryPointsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_recovery_points_v2',
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
    this._expirationTime = config.expirationTime;
    this._id = config.id;
    this._name = config.name;
    this._recoveryPointType = config.recoveryPointType;
    this._status = config.status;
    this._vmRecoveryPoints.internalValue = config.vmRecoveryPoints;
    this._volumeGroupRecoveryPoints.internalValue = config.volumeGroupRecoveryPoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // links - computed: true, optional: false, required: false
  private _links = new RecoveryPointsV2LinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // location_agnostic_id - computed: true, optional: false, required: false
  public get locationAgnosticId() {
    return this.getStringAttribute('location_agnostic_id');
  }

  // location_references - computed: true, optional: false, required: false
  private _locationReferences = new RecoveryPointsV2LocationReferencesList(this, "location_references", false);
  public get locationReferences() {
    return this._locationReferences;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_ext_id - computed: true, optional: false, required: false
  public get ownerExtId() {
    return this.getStringAttribute('owner_ext_id');
  }

  // recovery_point_type - computed: true, optional: true, required: false
  private _recoveryPointType?: string; 
  public get recoveryPointType() {
    return this.getStringAttribute('recovery_point_type');
  }
  public set recoveryPointType(value: string) {
    this._recoveryPointType = value;
  }
  public resetRecoveryPointType() {
    this._recoveryPointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPointTypeInput() {
    return this._recoveryPointType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vm_recovery_points - computed: false, optional: true, required: false
  private _vmRecoveryPoints = new RecoveryPointsV2VmRecoveryPointsList(this, "vm_recovery_points", false);
  public get vmRecoveryPoints() {
    return this._vmRecoveryPoints;
  }
  public putVmRecoveryPoints(value: RecoveryPointsV2VmRecoveryPoints[] | cdktf.IResolvable) {
    this._vmRecoveryPoints.internalValue = value;
  }
  public resetVmRecoveryPoints() {
    this._vmRecoveryPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmRecoveryPointsInput() {
    return this._vmRecoveryPoints.internalValue;
  }

  // volume_group_recovery_points - computed: false, optional: true, required: false
  private _volumeGroupRecoveryPoints = new RecoveryPointsV2VolumeGroupRecoveryPointsList(this, "volume_group_recovery_points", false);
  public get volumeGroupRecoveryPoints() {
    return this._volumeGroupRecoveryPoints;
  }
  public putVolumeGroupRecoveryPoints(value: RecoveryPointsV2VolumeGroupRecoveryPoints[] | cdktf.IResolvable) {
    this._volumeGroupRecoveryPoints.internalValue = value;
  }
  public resetVolumeGroupRecoveryPoints() {
    this._volumeGroupRecoveryPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupRecoveryPointsInput() {
    return this._volumeGroupRecoveryPoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recovery_point_type: cdktf.stringToTerraform(this._recoveryPointType),
      status: cdktf.stringToTerraform(this._status),
      vm_recovery_points: cdktf.listMapper(recoveryPointsV2VmRecoveryPointsToTerraform, true)(this._vmRecoveryPoints.internalValue),
      volume_group_recovery_points: cdktf.listMapper(recoveryPointsV2VolumeGroupRecoveryPointsToTerraform, true)(this._volumeGroupRecoveryPoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expiration_time: {
        value: cdktf.stringToHclTerraform(this._expirationTime),
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
      recovery_point_type: {
        value: cdktf.stringToHclTerraform(this._recoveryPointType),
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
      vm_recovery_points: {
        value: cdktf.listMapperHcl(recoveryPointsV2VmRecoveryPointsToHclTerraform, true)(this._vmRecoveryPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPointsV2VmRecoveryPointsList",
      },
      volume_group_recovery_points: {
        value: cdktf.listMapperHcl(recoveryPointsV2VolumeGroupRecoveryPointsToHclTerraform, true)(this._volumeGroupRecoveryPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RecoveryPointsV2VolumeGroupRecoveryPointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
