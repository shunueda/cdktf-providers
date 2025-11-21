// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#compartment_id KmsKey#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#defined_tags KmsKey#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#desired_state KmsKey#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#display_name KmsKey#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#freeform_tags KmsKey#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#id KmsKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#is_auto_rotation_enabled KmsKey#is_auto_rotation_enabled}
  */
  readonly isAutoRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#management_endpoint KmsKey#management_endpoint}
  */
  readonly managementEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#protection_mode KmsKey#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#restore_trigger KmsKey#restore_trigger}
  */
  readonly restoreTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#time_of_deletion KmsKey#time_of_deletion}
  */
  readonly timeOfDeletion?: string;
  /**
  * auto_key_rotation_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#auto_key_rotation_details KmsKey#auto_key_rotation_details}
  */
  readonly autoKeyRotationDetails?: KmsKeyAutoKeyRotationDetails;
  /**
  * external_key_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#external_key_reference KmsKey#external_key_reference}
  */
  readonly externalKeyReference?: KmsKeyExternalKeyReference;
  /**
  * key_shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#key_shape KmsKey#key_shape}
  */
  readonly keyShape: KmsKeyKeyShape;
  /**
  * restore_from_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#restore_from_file KmsKey#restore_from_file}
  */
  readonly restoreFromFile?: KmsKeyRestoreFromFile;
  /**
  * restore_from_object_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#restore_from_object_store KmsKey#restore_from_object_store}
  */
  readonly restoreFromObjectStore?: KmsKeyRestoreFromObjectStore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#timeouts KmsKey#timeouts}
  */
  readonly timeouts?: KmsKeyTimeouts;
}
export interface KmsKeyExternalKeyReferenceDetails {
}

export function kmsKeyExternalKeyReferenceDetailsToTerraform(struct?: KmsKeyExternalKeyReferenceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsKeyExternalKeyReferenceDetailsToHclTerraform(struct?: KmsKeyExternalKeyReferenceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsKeyExternalKeyReferenceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsKeyExternalKeyReferenceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyExternalKeyReferenceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_key_id - computed: true, optional: false, required: false
  public get externalKeyId() {
    return this.getStringAttribute('external_key_id');
  }

  // external_key_version_id - computed: true, optional: false, required: false
  public get externalKeyVersionId() {
    return this.getStringAttribute('external_key_version_id');
  }
}

export class KmsKeyExternalKeyReferenceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): KmsKeyExternalKeyReferenceDetailsOutputReference {
    return new KmsKeyExternalKeyReferenceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsKeyReplicaDetails {
}

export function kmsKeyReplicaDetailsToTerraform(struct?: KmsKeyReplicaDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsKeyReplicaDetailsToHclTerraform(struct?: KmsKeyReplicaDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsKeyReplicaDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsKeyReplicaDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyReplicaDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replication_id - computed: true, optional: false, required: false
  public get replicationId() {
    return this.getStringAttribute('replication_id');
  }
}

export class KmsKeyReplicaDetailsList extends cdktf.ComplexList {

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
  public get(index: number): KmsKeyReplicaDetailsOutputReference {
    return new KmsKeyReplicaDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsKeyAutoKeyRotationDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#last_rotation_message KmsKey#last_rotation_message}
  */
  readonly lastRotationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#last_rotation_status KmsKey#last_rotation_status}
  */
  readonly lastRotationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#rotation_interval_in_days KmsKey#rotation_interval_in_days}
  */
  readonly rotationIntervalInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#time_of_last_rotation KmsKey#time_of_last_rotation}
  */
  readonly timeOfLastRotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#time_of_next_rotation KmsKey#time_of_next_rotation}
  */
  readonly timeOfNextRotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#time_of_schedule_start KmsKey#time_of_schedule_start}
  */
  readonly timeOfScheduleStart?: string;
}

export function kmsKeyAutoKeyRotationDetailsToTerraform(struct?: KmsKeyAutoKeyRotationDetailsOutputReference | KmsKeyAutoKeyRotationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_rotation_message: cdktf.stringToTerraform(struct!.lastRotationMessage),
    last_rotation_status: cdktf.stringToTerraform(struct!.lastRotationStatus),
    rotation_interval_in_days: cdktf.numberToTerraform(struct!.rotationIntervalInDays),
    time_of_last_rotation: cdktf.stringToTerraform(struct!.timeOfLastRotation),
    time_of_next_rotation: cdktf.stringToTerraform(struct!.timeOfNextRotation),
    time_of_schedule_start: cdktf.stringToTerraform(struct!.timeOfScheduleStart),
  }
}


export function kmsKeyAutoKeyRotationDetailsToHclTerraform(struct?: KmsKeyAutoKeyRotationDetailsOutputReference | KmsKeyAutoKeyRotationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_rotation_message: {
      value: cdktf.stringToHclTerraform(struct!.lastRotationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_rotation_status: {
      value: cdktf.stringToHclTerraform(struct!.lastRotationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_interval_in_days: {
      value: cdktf.numberToHclTerraform(struct!.rotationIntervalInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_of_last_rotation: {
      value: cdktf.stringToHclTerraform(struct!.timeOfLastRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_next_rotation: {
      value: cdktf.stringToHclTerraform(struct!.timeOfNextRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_of_schedule_start: {
      value: cdktf.stringToHclTerraform(struct!.timeOfScheduleStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsKeyAutoKeyRotationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsKeyAutoKeyRotationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastRotationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRotationMessage = this._lastRotationMessage;
    }
    if (this._lastRotationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRotationStatus = this._lastRotationStatus;
    }
    if (this._rotationIntervalInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationIntervalInDays = this._rotationIntervalInDays;
    }
    if (this._timeOfLastRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfLastRotation = this._timeOfLastRotation;
    }
    if (this._timeOfNextRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfNextRotation = this._timeOfNextRotation;
    }
    if (this._timeOfScheduleStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfScheduleStart = this._timeOfScheduleStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyAutoKeyRotationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lastRotationMessage = undefined;
      this._lastRotationStatus = undefined;
      this._rotationIntervalInDays = undefined;
      this._timeOfLastRotation = undefined;
      this._timeOfNextRotation = undefined;
      this._timeOfScheduleStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lastRotationMessage = value.lastRotationMessage;
      this._lastRotationStatus = value.lastRotationStatus;
      this._rotationIntervalInDays = value.rotationIntervalInDays;
      this._timeOfLastRotation = value.timeOfLastRotation;
      this._timeOfNextRotation = value.timeOfNextRotation;
      this._timeOfScheduleStart = value.timeOfScheduleStart;
    }
  }

  // last_rotation_message - computed: true, optional: true, required: false
  private _lastRotationMessage?: string; 
  public get lastRotationMessage() {
    return this.getStringAttribute('last_rotation_message');
  }
  public set lastRotationMessage(value: string) {
    this._lastRotationMessage = value;
  }
  public resetLastRotationMessage() {
    this._lastRotationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRotationMessageInput() {
    return this._lastRotationMessage;
  }

  // last_rotation_status - computed: true, optional: true, required: false
  private _lastRotationStatus?: string; 
  public get lastRotationStatus() {
    return this.getStringAttribute('last_rotation_status');
  }
  public set lastRotationStatus(value: string) {
    this._lastRotationStatus = value;
  }
  public resetLastRotationStatus() {
    this._lastRotationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRotationStatusInput() {
    return this._lastRotationStatus;
  }

  // rotation_interval_in_days - computed: true, optional: true, required: false
  private _rotationIntervalInDays?: number; 
  public get rotationIntervalInDays() {
    return this.getNumberAttribute('rotation_interval_in_days');
  }
  public set rotationIntervalInDays(value: number) {
    this._rotationIntervalInDays = value;
  }
  public resetRotationIntervalInDays() {
    this._rotationIntervalInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInDaysInput() {
    return this._rotationIntervalInDays;
  }

  // time_of_last_rotation - computed: true, optional: true, required: false
  private _timeOfLastRotation?: string; 
  public get timeOfLastRotation() {
    return this.getStringAttribute('time_of_last_rotation');
  }
  public set timeOfLastRotation(value: string) {
    this._timeOfLastRotation = value;
  }
  public resetTimeOfLastRotation() {
    this._timeOfLastRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfLastRotationInput() {
    return this._timeOfLastRotation;
  }

  // time_of_next_rotation - computed: true, optional: true, required: false
  private _timeOfNextRotation?: string; 
  public get timeOfNextRotation() {
    return this.getStringAttribute('time_of_next_rotation');
  }
  public set timeOfNextRotation(value: string) {
    this._timeOfNextRotation = value;
  }
  public resetTimeOfNextRotation() {
    this._timeOfNextRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfNextRotationInput() {
    return this._timeOfNextRotation;
  }

  // time_of_schedule_start - computed: true, optional: true, required: false
  private _timeOfScheduleStart?: string; 
  public get timeOfScheduleStart() {
    return this.getStringAttribute('time_of_schedule_start');
  }
  public set timeOfScheduleStart(value: string) {
    this._timeOfScheduleStart = value;
  }
  public resetTimeOfScheduleStart() {
    this._timeOfScheduleStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfScheduleStartInput() {
    return this._timeOfScheduleStart;
  }
}
export interface KmsKeyExternalKeyReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#external_key_id KmsKey#external_key_id}
  */
  readonly externalKeyId: string;
}

export function kmsKeyExternalKeyReferenceToTerraform(struct?: KmsKeyExternalKeyReferenceOutputReference | KmsKeyExternalKeyReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_key_id: cdktf.stringToTerraform(struct!.externalKeyId),
  }
}


export function kmsKeyExternalKeyReferenceToHclTerraform(struct?: KmsKeyExternalKeyReferenceOutputReference | KmsKeyExternalKeyReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_key_id: {
      value: cdktf.stringToHclTerraform(struct!.externalKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsKeyExternalKeyReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsKeyExternalKeyReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalKeyId = this._externalKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyExternalKeyReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalKeyId = value.externalKeyId;
    }
  }

  // external_key_id - computed: false, optional: false, required: true
  private _externalKeyId?: string; 
  public get externalKeyId() {
    return this.getStringAttribute('external_key_id');
  }
  public set externalKeyId(value: string) {
    this._externalKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyIdInput() {
    return this._externalKeyId;
  }
}
export interface KmsKeyKeyShape {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#algorithm KmsKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#curve_id KmsKey#curve_id}
  */
  readonly curveId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#length KmsKey#length}
  */
  readonly length: number;
}

export function kmsKeyKeyShapeToTerraform(struct?: KmsKeyKeyShapeOutputReference | KmsKeyKeyShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    curve_id: cdktf.stringToTerraform(struct!.curveId),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function kmsKeyKeyShapeToHclTerraform(struct?: KmsKeyKeyShapeOutputReference | KmsKeyKeyShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curve_id: {
      value: cdktf.stringToHclTerraform(struct!.curveId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsKeyKeyShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsKeyKeyShape | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._curveId !== undefined) {
      hasAnyValues = true;
      internalValueResult.curveId = this._curveId;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyKeyShape | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._curveId = undefined;
      this._length = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._curveId = value.curveId;
      this._length = value.length;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // curve_id - computed: true, optional: true, required: false
  private _curveId?: string; 
  public get curveId() {
    return this.getStringAttribute('curve_id');
  }
  public set curveId(value: string) {
    this._curveId = value;
  }
  public resetCurveId() {
    this._curveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveIdInput() {
    return this._curveId;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface KmsKeyRestoreFromFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#content_length KmsKey#content_length}
  */
  readonly contentLength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#content_md5 KmsKey#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#restore_key_from_file_details KmsKey#restore_key_from_file_details}
  */
  readonly restoreKeyFromFileDetails: string;
}

export function kmsKeyRestoreFromFileToTerraform(struct?: KmsKeyRestoreFromFileOutputReference | KmsKeyRestoreFromFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_length: cdktf.stringToTerraform(struct!.contentLength),
    content_md5: cdktf.stringToTerraform(struct!.contentMd5),
    restore_key_from_file_details: cdktf.stringToTerraform(struct!.restoreKeyFromFileDetails),
  }
}


export function kmsKeyRestoreFromFileToHclTerraform(struct?: KmsKeyRestoreFromFileOutputReference | KmsKeyRestoreFromFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_length: {
      value: cdktf.stringToHclTerraform(struct!.contentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_md5: {
      value: cdktf.stringToHclTerraform(struct!.contentMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_key_from_file_details: {
      value: cdktf.stringToHclTerraform(struct!.restoreKeyFromFileDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsKeyRestoreFromFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsKeyRestoreFromFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength;
    }
    if (this._contentMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMd5 = this._contentMd5;
    }
    if (this._restoreKeyFromFileDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreKeyFromFileDetails = this._restoreKeyFromFileDetails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyRestoreFromFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentLength = undefined;
      this._contentMd5 = undefined;
      this._restoreKeyFromFileDetails = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentLength = value.contentLength;
      this._contentMd5 = value.contentMd5;
      this._restoreKeyFromFileDetails = value.restoreKeyFromFileDetails;
    }
  }

  // content_length - computed: false, optional: false, required: true
  private _contentLength?: string; 
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }
  public set contentLength(value: string) {
    this._contentLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string; 
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5;
  }

  // restore_key_from_file_details - computed: false, optional: false, required: true
  private _restoreKeyFromFileDetails?: string; 
  public get restoreKeyFromFileDetails() {
    return this.getStringAttribute('restore_key_from_file_details');
  }
  public set restoreKeyFromFileDetails(value: string) {
    this._restoreKeyFromFileDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreKeyFromFileDetailsInput() {
    return this._restoreKeyFromFileDetails;
  }
}
export interface KmsKeyRestoreFromObjectStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#bucket KmsKey#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#destination KmsKey#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#namespace KmsKey#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#object KmsKey#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#uri KmsKey#uri}
  */
  readonly uri?: string;
}

export function kmsKeyRestoreFromObjectStoreToTerraform(struct?: KmsKeyRestoreFromObjectStoreOutputReference | KmsKeyRestoreFromObjectStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    destination: cdktf.stringToTerraform(struct!.destination),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function kmsKeyRestoreFromObjectStoreToHclTerraform(struct?: KmsKeyRestoreFromObjectStoreOutputReference | KmsKeyRestoreFromObjectStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsKeyRestoreFromObjectStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsKeyRestoreFromObjectStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyRestoreFromObjectStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._destination = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._destination = value.destination;
      this._namespace = value.namespace;
      this._object = value.object;
      this._uri = value.uri;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface KmsKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#create KmsKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#delete KmsKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#update KmsKey#update}
  */
  readonly update?: string;
}

export function kmsKeyTimeoutsToTerraform(struct?: KmsKeyTimeouts | cdktf.IResolvable): any {
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


export function kmsKeyTimeoutsToHclTerraform(struct?: KmsKeyTimeouts | cdktf.IResolvable): any {
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

export class KmsKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsKeyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KmsKeyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key oci_kms_key}
*/
export class KmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsKey to import
  * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/kms_key oci_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoRotationEnabled = config.isAutoRotationEnabled;
    this._managementEndpoint = config.managementEndpoint;
    this._protectionMode = config.protectionMode;
    this._restoreTrigger = config.restoreTrigger;
    this._timeOfDeletion = config.timeOfDeletion;
    this._autoKeyRotationDetails.internalValue = config.autoKeyRotationDetails;
    this._externalKeyReference.internalValue = config.externalKeyReference;
    this._keyShape.internalValue = config.keyShape;
    this._restoreFromFile.internalValue = config.restoreFromFile;
    this._restoreFromObjectStore.internalValue = config.restoreFromObjectStore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // current_key_version - computed: true, optional: false, required: false
  public get currentKeyVersion() {
    return this.getStringAttribute('current_key_version');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_key_reference_details - computed: true, optional: false, required: false
  private _externalKeyReferenceDetails = new KmsKeyExternalKeyReferenceDetailsList(this, "external_key_reference_details", false);
  public get externalKeyReferenceDetails() {
    return this._externalKeyReferenceDetails;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_auto_rotation_enabled - computed: true, optional: true, required: false
  private _isAutoRotationEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoRotationEnabled() {
    return this.getBooleanAttribute('is_auto_rotation_enabled');
  }
  public set isAutoRotationEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoRotationEnabled = value;
  }
  public resetIsAutoRotationEnabled() {
    this._isAutoRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoRotationEnabledInput() {
    return this._isAutoRotationEnabled;
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // management_endpoint - computed: false, optional: false, required: true
  private _managementEndpoint?: string; 
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }
  public set managementEndpoint(value: string) {
    this._managementEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEndpointInput() {
    return this._managementEndpoint;
  }

  // protection_mode - computed: true, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // replica_details - computed: true, optional: false, required: false
  private _replicaDetails = new KmsKeyReplicaDetailsList(this, "replica_details", false);
  public get replicaDetails() {
    return this._replicaDetails;
  }

  // restore_trigger - computed: false, optional: true, required: false
  private _restoreTrigger?: boolean | cdktf.IResolvable; 
  public get restoreTrigger() {
    return this.getBooleanAttribute('restore_trigger');
  }
  public set restoreTrigger(value: boolean | cdktf.IResolvable) {
    this._restoreTrigger = value;
  }
  public resetRestoreTrigger() {
    this._restoreTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTriggerInput() {
    return this._restoreTrigger;
  }

  // restored_from_key_id - computed: true, optional: false, required: false
  public get restoredFromKeyId() {
    return this.getStringAttribute('restored_from_key_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: true, required: false
  private _timeOfDeletion?: string; 
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }
  public set timeOfDeletion(value: string) {
    this._timeOfDeletion = value;
  }
  public resetTimeOfDeletion() {
    this._timeOfDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDeletionInput() {
    return this._timeOfDeletion;
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }

  // auto_key_rotation_details - computed: false, optional: true, required: false
  private _autoKeyRotationDetails = new KmsKeyAutoKeyRotationDetailsOutputReference(this, "auto_key_rotation_details");
  public get autoKeyRotationDetails() {
    return this._autoKeyRotationDetails;
  }
  public putAutoKeyRotationDetails(value: KmsKeyAutoKeyRotationDetails) {
    this._autoKeyRotationDetails.internalValue = value;
  }
  public resetAutoKeyRotationDetails() {
    this._autoKeyRotationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoKeyRotationDetailsInput() {
    return this._autoKeyRotationDetails.internalValue;
  }

  // external_key_reference - computed: false, optional: true, required: false
  private _externalKeyReference = new KmsKeyExternalKeyReferenceOutputReference(this, "external_key_reference");
  public get externalKeyReference() {
    return this._externalKeyReference;
  }
  public putExternalKeyReference(value: KmsKeyExternalKeyReference) {
    this._externalKeyReference.internalValue = value;
  }
  public resetExternalKeyReference() {
    this._externalKeyReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyReferenceInput() {
    return this._externalKeyReference.internalValue;
  }

  // key_shape - computed: false, optional: false, required: true
  private _keyShape = new KmsKeyKeyShapeOutputReference(this, "key_shape");
  public get keyShape() {
    return this._keyShape;
  }
  public putKeyShape(value: KmsKeyKeyShape) {
    this._keyShape.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyShapeInput() {
    return this._keyShape.internalValue;
  }

  // restore_from_file - computed: false, optional: true, required: false
  private _restoreFromFile = new KmsKeyRestoreFromFileOutputReference(this, "restore_from_file");
  public get restoreFromFile() {
    return this._restoreFromFile;
  }
  public putRestoreFromFile(value: KmsKeyRestoreFromFile) {
    this._restoreFromFile.internalValue = value;
  }
  public resetRestoreFromFile() {
    this._restoreFromFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreFromFileInput() {
    return this._restoreFromFile.internalValue;
  }

  // restore_from_object_store - computed: false, optional: true, required: false
  private _restoreFromObjectStore = new KmsKeyRestoreFromObjectStoreOutputReference(this, "restore_from_object_store");
  public get restoreFromObjectStore() {
    return this._restoreFromObjectStore;
  }
  public putRestoreFromObjectStore(value: KmsKeyRestoreFromObjectStore) {
    this._restoreFromObjectStore.internalValue = value;
  }
  public resetRestoreFromObjectStore() {
    this._restoreFromObjectStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreFromObjectStoreInput() {
    return this._restoreFromObjectStore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsKeyTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_rotation_enabled: cdktf.booleanToTerraform(this._isAutoRotationEnabled),
      management_endpoint: cdktf.stringToTerraform(this._managementEndpoint),
      protection_mode: cdktf.stringToTerraform(this._protectionMode),
      restore_trigger: cdktf.booleanToTerraform(this._restoreTrigger),
      time_of_deletion: cdktf.stringToTerraform(this._timeOfDeletion),
      auto_key_rotation_details: kmsKeyAutoKeyRotationDetailsToTerraform(this._autoKeyRotationDetails.internalValue),
      external_key_reference: kmsKeyExternalKeyReferenceToTerraform(this._externalKeyReference.internalValue),
      key_shape: kmsKeyKeyShapeToTerraform(this._keyShape.internalValue),
      restore_from_file: kmsKeyRestoreFromFileToTerraform(this._restoreFromFile.internalValue),
      restore_from_object_store: kmsKeyRestoreFromObjectStoreToTerraform(this._restoreFromObjectStore.internalValue),
      timeouts: kmsKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      desired_state: {
        value: cdktf.stringToHclTerraform(this._desiredState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_rotation_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoRotationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      management_endpoint: {
        value: cdktf.stringToHclTerraform(this._managementEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_mode: {
        value: cdktf.stringToHclTerraform(this._protectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_trigger: {
        value: cdktf.booleanToHclTerraform(this._restoreTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_of_deletion: {
        value: cdktf.stringToHclTerraform(this._timeOfDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_key_rotation_details: {
        value: kmsKeyAutoKeyRotationDetailsToHclTerraform(this._autoKeyRotationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsKeyAutoKeyRotationDetailsList",
      },
      external_key_reference: {
        value: kmsKeyExternalKeyReferenceToHclTerraform(this._externalKeyReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsKeyExternalKeyReferenceList",
      },
      key_shape: {
        value: kmsKeyKeyShapeToHclTerraform(this._keyShape.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsKeyKeyShapeList",
      },
      restore_from_file: {
        value: kmsKeyRestoreFromFileToHclTerraform(this._restoreFromFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsKeyRestoreFromFileList",
      },
      restore_from_object_store: {
        value: kmsKeyRestoreFromObjectStoreToHclTerraform(this._restoreFromObjectStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsKeyRestoreFromObjectStoreList",
      },
      timeouts: {
        value: kmsKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
