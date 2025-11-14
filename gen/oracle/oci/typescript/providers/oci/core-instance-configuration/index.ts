// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreInstanceConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#id CoreInstanceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_id CoreInstanceConfiguration#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source CoreInstanceConfiguration#source}
  */
  readonly source?: string;
  /**
  * instance_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_details CoreInstanceConfiguration#instance_details}
  */
  readonly instanceDetails?: CoreInstanceConfigurationInstanceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#timeouts CoreInstanceConfiguration#timeouts}
  */
  readonly timeouts?: CoreInstanceConfigurationTimeouts;
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#device CoreInstanceConfiguration#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_pv_encryption_in_transit_enabled CoreInstanceConfiguration#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_read_only CoreInstanceConfiguration#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_shareable CoreInstanceConfiguration#is_shareable}
  */
  readonly isShareable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#use_chap CoreInstanceConfiguration#use_chap}
  */
  readonly useChap?: boolean | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    is_read_only: cdktf.booleanToTerraform(struct!.isReadOnly),
    is_shareable: cdktf.booleanToTerraform(struct!.isShareable),
    type: cdktf.stringToTerraform(struct!.type),
    use_chap: cdktf.booleanToTerraform(struct!.useChap),
  }
}


export function coreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_shareable: {
      value: cdktf.booleanToHclTerraform(struct!.isShareable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_chap: {
      value: cdktf.booleanToHclTerraform(struct!.useChap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._isReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOnly = this._isReadOnly;
    }
    if (this._isShareable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isShareable = this._isShareable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useChap !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChap = this._useChap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._displayName = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._isReadOnly = undefined;
      this._isShareable = undefined;
      this._type = undefined;
      this._useChap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._displayName = value.displayName;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._isReadOnly = value.isReadOnly;
      this._isShareable = value.isShareable;
      this._type = value.type;
      this._useChap = value.useChap;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_shareable - computed: true, optional: true, required: false
  private _isShareable?: boolean | cdktf.IResolvable; 
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }
  public set isShareable(value: boolean | cdktf.IResolvable) {
    this._isShareable = value;
  }
  public resetIsShareable() {
    this._isShareable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShareableInput() {
    return this._isShareable;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_chap - computed: true, optional: true, required: false
  private _useChap?: boolean | cdktf.IResolvable; 
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
  public set useChap(value: boolean | cdktf.IResolvable) {
    this._useChap = value;
  }
  public resetUseChap() {
    this._useChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChapInput() {
    return this._useChap;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#autotune_type CoreInstanceConfiguration#autotune_type}
  */
  readonly autotuneType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#max_vpus_per_gb CoreInstanceConfiguration#max_vpus_per_gb}
  */
  readonly maxVpusPerGb?: string;
}

export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotune_type: cdktf.stringToTerraform(struct!.autotuneType),
    max_vpus_per_gb: cdktf.stringToTerraform(struct!.maxVpusPerGb),
  }
}


export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autotune_type: {
      value: cdktf.stringToHclTerraform(struct!.autotuneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.maxVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autotuneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotuneType = this._autotuneType;
    }
    if (this._maxVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVpusPerGb = this._maxVpusPerGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autotuneType = undefined;
      this._maxVpusPerGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autotuneType = value.autotuneType;
      this._maxVpusPerGb = value.maxVpusPerGb;
    }
  }

  // autotune_type - computed: false, optional: false, required: true
  private _autotuneType?: string; 
  public get autotuneType() {
    return this.getStringAttribute('autotune_type');
  }
  public set autotuneType(value: string) {
    this._autotuneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autotuneTypeInput() {
    return this._autotuneType;
  }

  // max_vpus_per_gb - computed: true, optional: true, required: false
  private _maxVpusPerGb?: string; 
  public get maxVpusPerGb() {
    return this.getStringAttribute('max_vpus_per_gb');
  }
  public set maxVpusPerGb(value: string) {
    this._maxVpusPerGb = value;
  }
  public resetMaxVpusPerGb() {
    this._maxVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVpusPerGbInput() {
    return this._maxVpusPerGb;
  }
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_domain CoreInstanceConfiguration#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
}

export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._displayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._displayName = value.displayName;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#id CoreInstanceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_domain CoreInstanceConfiguration#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#backup_policy_id CoreInstanceConfiguration#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#cluster_placement_group_id CoreInstanceConfiguration#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_auto_tune_enabled CoreInstanceConfiguration#is_auto_tune_enabled}
  */
  readonly isAutoTuneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#kms_key_id CoreInstanceConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#size_in_gbs CoreInstanceConfiguration#size_in_gbs}
  */
  readonly sizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#vpus_per_gb CoreInstanceConfiguration#vpus_per_gb}
  */
  readonly vpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#xrc_kms_key_id CoreInstanceConfiguration#xrc_kms_key_id}
  */
  readonly xrcKmsKeyId?: string;
  /**
  * autotune_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#autotune_policies CoreInstanceConfiguration#autotune_policies}
  */
  readonly autotunePolicies?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies[] | cdktf.IResolvable;
  /**
  * block_volume_replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#block_volume_replicas CoreInstanceConfiguration#block_volume_replicas}
  */
  readonly blockVolumeReplicas?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source_details CoreInstanceConfiguration#source_details}
  */
  readonly sourceDetails?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails;
}

export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    backup_policy_id: cdktf.stringToTerraform(struct!.backupPolicyId),
    cluster_placement_group_id: cdktf.stringToTerraform(struct!.clusterPlacementGroupId),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_auto_tune_enabled: cdktf.booleanToTerraform(struct!.isAutoTuneEnabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    size_in_gbs: cdktf.stringToTerraform(struct!.sizeInGbs),
    vpus_per_gb: cdktf.stringToTerraform(struct!.vpusPerGb),
    xrc_kms_key_id: cdktf.stringToTerraform(struct!.xrcKmsKeyId),
    autotune_policies: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesToTerraform, true)(struct!.autotunePolicies),
    block_volume_replicas: coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasToTerraform(struct!.blockVolumeReplicas),
    source_details: coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsToTerraform(struct!.sourceDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.backupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_auto_tune_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoTuneEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.sizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.vpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xrc_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.xrcKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autotune_policies: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesToHclTerraform, true)(struct!.autotunePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesList",
    },
    block_volume_replicas: {
      value: coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasToHclTerraform(struct!.blockVolumeReplicas),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasList",
    },
    source_details: {
      value: coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsToHclTerraform(struct!.sourceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._backupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicyId = this._backupPolicyId;
    }
    if (this._clusterPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPlacementGroupId = this._clusterPlacementGroupId;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isAutoTuneEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoTuneEnabled = this._isAutoTuneEnabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGbs = this._sizeInGbs;
    }
    if (this._vpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpusPerGb = this._vpusPerGb;
    }
    if (this._xrcKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.xrcKmsKeyId = this._xrcKmsKeyId;
    }
    if (this._autotunePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotunePolicies = this._autotunePolicies?.internalValue;
    }
    if (this._blockVolumeReplicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeReplicas = this._blockVolumeReplicas?.internalValue;
    }
    if (this._sourceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetails = this._sourceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._backupPolicyId = undefined;
      this._clusterPlacementGroupId = undefined;
      this._compartmentId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._isAutoTuneEnabled = undefined;
      this._kmsKeyId = undefined;
      this._sizeInGbs = undefined;
      this._vpusPerGb = undefined;
      this._xrcKmsKeyId = undefined;
      this._autotunePolicies.internalValue = undefined;
      this._blockVolumeReplicas.internalValue = undefined;
      this._sourceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._backupPolicyId = value.backupPolicyId;
      this._clusterPlacementGroupId = value.clusterPlacementGroupId;
      this._compartmentId = value.compartmentId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._isAutoTuneEnabled = value.isAutoTuneEnabled;
      this._kmsKeyId = value.kmsKeyId;
      this._sizeInGbs = value.sizeInGbs;
      this._vpusPerGb = value.vpusPerGb;
      this._xrcKmsKeyId = value.xrcKmsKeyId;
      this._autotunePolicies.internalValue = value.autotunePolicies;
      this._blockVolumeReplicas.internalValue = value.blockVolumeReplicas;
      this._sourceDetails.internalValue = value.sourceDetails;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_policy_id - computed: true, optional: true, required: false
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  public resetBackupPolicyId() {
    this._backupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_auto_tune_enabled - computed: true, optional: true, required: false
  private _isAutoTuneEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoTuneEnabled() {
    return this.getBooleanAttribute('is_auto_tune_enabled');
  }
  public set isAutoTuneEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoTuneEnabled = value;
  }
  public resetIsAutoTuneEnabled() {
    this._isAutoTuneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoTuneEnabledInput() {
    return this._isAutoTuneEnabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // size_in_gbs - computed: true, optional: true, required: false
  private _sizeInGbs?: string; 
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }
  public set sizeInGbs(value: string) {
    this._sizeInGbs = value;
  }
  public resetSizeInGbs() {
    this._sizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbsInput() {
    return this._sizeInGbs;
  }

  // vpus_per_gb - computed: true, optional: true, required: false
  private _vpusPerGb?: string; 
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }
  public set vpusPerGb(value: string) {
    this._vpusPerGb = value;
  }
  public resetVpusPerGb() {
    this._vpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpusPerGbInput() {
    return this._vpusPerGb;
  }

  // xrc_kms_key_id - computed: true, optional: true, required: false
  private _xrcKmsKeyId?: string; 
  public get xrcKmsKeyId() {
    return this.getStringAttribute('xrc_kms_key_id');
  }
  public set xrcKmsKeyId(value: string) {
    this._xrcKmsKeyId = value;
  }
  public resetXrcKmsKeyId() {
    this._xrcKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrcKmsKeyIdInput() {
    return this._xrcKmsKeyId;
  }

  // autotune_policies - computed: false, optional: true, required: false
  private _autotunePolicies = new CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesList(this, "autotune_policies", false);
  public get autotunePolicies() {
    return this._autotunePolicies;
  }
  public putAutotunePolicies(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies[] | cdktf.IResolvable) {
    this._autotunePolicies.internalValue = value;
  }
  public resetAutotunePolicies() {
    this._autotunePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotunePoliciesInput() {
    return this._autotunePolicies.internalValue;
  }

  // block_volume_replicas - computed: false, optional: true, required: false
  private _blockVolumeReplicas = new CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference(this, "block_volume_replicas");
  public get blockVolumeReplicas() {
    return this._blockVolumeReplicas;
  }
  public putBlockVolumeReplicas(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas) {
    this._blockVolumeReplicas.internalValue = value;
  }
  public resetBlockVolumeReplicas() {
    this._blockVolumeReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeReplicasInput() {
    return this._blockVolumeReplicas.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsBlockVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#volume_id CoreInstanceConfiguration#volume_id}
  */
  readonly volumeId?: string;
  /**
  * attach_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#attach_details CoreInstanceConfiguration#attach_details}
  */
  readonly attachDetails?: CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails;
  /**
  * create_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create_details CoreInstanceConfiguration#create_details}
  */
  readonly createDetails?: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails;
}

export function coreInstanceConfigurationInstanceDetailsBlockVolumesToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    attach_details: coreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsToTerraform(struct!.attachDetails),
    create_details: coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsToTerraform(struct!.createDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsBlockVolumesToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsBlockVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_details: {
      value: coreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsToHclTerraform(struct!.attachDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsList",
    },
    create_details: {
      value: coreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsToHclTerraform(struct!.createDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsBlockVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._attachDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachDetails = this._attachDetails?.internalValue;
    }
    if (this._createDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDetails = this._createDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsBlockVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeId = undefined;
      this._attachDetails.internalValue = undefined;
      this._createDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeId = value.volumeId;
      this._attachDetails.internalValue = value.attachDetails;
      this._createDetails.internalValue = value.createDetails;
    }
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // attach_details - computed: false, optional: true, required: false
  private _attachDetails = new CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetailsOutputReference(this, "attach_details");
  public get attachDetails() {
    return this._attachDetails;
  }
  public putAttachDetails(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesAttachDetails) {
    this._attachDetails.internalValue = value;
  }
  public resetAttachDetails() {
    this._attachDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDetailsInput() {
    return this._attachDetails.internalValue;
  }

  // create_details - computed: false, optional: true, required: false
  private _createDetails = new CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetailsOutputReference(this, "create_details");
  public get createDetails() {
    return this._createDetails;
  }
  public putCreateDetails(value: CoreInstanceConfigurationInstanceDetailsBlockVolumesCreateDetails) {
    this._createDetails.internalValue = value;
  }
  public resetCreateDetails() {
    this._createDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDetailsInput() {
    return this._createDetails.internalValue;
  }
}

export class CoreInstanceConfigurationInstanceDetailsBlockVolumesList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsBlockVolumes[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsBlockVolumesOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsBlockVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#desired_state CoreInstanceConfiguration#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#name CoreInstanceConfiguration#name}
  */
  readonly name?: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._name = value.name;
    }
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
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#are_all_plugins_disabled CoreInstanceConfiguration#are_all_plugins_disabled}
  */
  readonly areAllPluginsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_management_disabled CoreInstanceConfiguration#is_management_disabled}
  */
  readonly isManagementDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_monitoring_disabled CoreInstanceConfiguration#is_monitoring_disabled}
  */
  readonly isMonitoringDisabled?: boolean | cdktf.IResolvable;
  /**
  * plugins_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#plugins_config CoreInstanceConfiguration#plugins_config}
  */
  readonly pluginsConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_all_plugins_disabled: cdktf.booleanToTerraform(struct!.areAllPluginsDisabled),
    is_management_disabled: cdktf.booleanToTerraform(struct!.isManagementDisabled),
    is_monitoring_disabled: cdktf.booleanToTerraform(struct!.isMonitoringDisabled),
    plugins_config: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigToTerraform, true)(struct!.pluginsConfig),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_all_plugins_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areAllPluginsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_management_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isManagementDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_monitoring_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonitoringDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugins_config: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigToHclTerraform, true)(struct!.pluginsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areAllPluginsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areAllPluginsDisabled = this._areAllPluginsDisabled;
    }
    if (this._isManagementDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManagementDisabled = this._isManagementDisabled;
    }
    if (this._isMonitoringDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonitoringDisabled = this._isMonitoringDisabled;
    }
    if (this._pluginsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginsConfig = this._pluginsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areAllPluginsDisabled = undefined;
      this._isManagementDisabled = undefined;
      this._isMonitoringDisabled = undefined;
      this._pluginsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areAllPluginsDisabled = value.areAllPluginsDisabled;
      this._isManagementDisabled = value.isManagementDisabled;
      this._isMonitoringDisabled = value.isMonitoringDisabled;
      this._pluginsConfig.internalValue = value.pluginsConfig;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: true, required: false
  private _areAllPluginsDisabled?: boolean | cdktf.IResolvable; 
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }
  public set areAllPluginsDisabled(value: boolean | cdktf.IResolvable) {
    this._areAllPluginsDisabled = value;
  }
  public resetAreAllPluginsDisabled() {
    this._areAllPluginsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areAllPluginsDisabledInput() {
    return this._areAllPluginsDisabled;
  }

  // is_management_disabled - computed: true, optional: true, required: false
  private _isManagementDisabled?: boolean | cdktf.IResolvable; 
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }
  public set isManagementDisabled(value: boolean | cdktf.IResolvable) {
    this._isManagementDisabled = value;
  }
  public resetIsManagementDisabled() {
    this._isManagementDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagementDisabledInput() {
    return this._isManagementDisabled;
  }

  // is_monitoring_disabled - computed: true, optional: true, required: false
  private _isMonitoringDisabled?: boolean | cdktf.IResolvable; 
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
  public set isMonitoringDisabled(value: boolean | cdktf.IResolvable) {
    this._isMonitoringDisabled = value;
  }
  public resetIsMonitoringDisabled() {
    this._isMonitoringDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonitoringDisabledInput() {
    return this._isMonitoringDisabled;
  }

  // plugins_config - computed: false, optional: true, required: false
  private _pluginsConfig = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
  public putPluginsConfig(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigPluginsConfig[] | cdktf.IResolvable) {
    this._pluginsConfig.internalValue = value;
  }
  public resetPluginsConfig() {
    this._pluginsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsConfigInput() {
    return this._pluginsConfig.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_live_migration_preferred CoreInstanceConfiguration#is_live_migration_preferred}
  */
  readonly isLiveMigrationPreferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#recovery_action CoreInstanceConfiguration#recovery_action}
  */
  readonly recoveryAction?: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_live_migration_preferred: cdktf.booleanToTerraform(struct!.isLiveMigrationPreferred),
    recovery_action: cdktf.stringToTerraform(struct!.recoveryAction),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_live_migration_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.isLiveMigrationPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_action: {
      value: cdktf.stringToHclTerraform(struct!.recoveryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLiveMigrationPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLiveMigrationPreferred = this._isLiveMigrationPreferred;
    }
    if (this._recoveryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryAction = this._recoveryAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLiveMigrationPreferred = undefined;
      this._recoveryAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLiveMigrationPreferred = value.isLiveMigrationPreferred;
      this._recoveryAction = value.recoveryAction;
    }
  }

  // is_live_migration_preferred - computed: true, optional: true, required: false
  private _isLiveMigrationPreferred?: boolean | cdktf.IResolvable; 
  public get isLiveMigrationPreferred() {
    return this.getBooleanAttribute('is_live_migration_preferred');
  }
  public set isLiveMigrationPreferred(value: boolean | cdktf.IResolvable) {
    this._isLiveMigrationPreferred = value;
  }
  public resetIsLiveMigrationPreferred() {
    this._isLiveMigrationPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLiveMigrationPreferredInput() {
    return this._isLiveMigrationPreferred;
  }

  // recovery_action - computed: true, optional: true, required: false
  private _recoveryAction?: string; 
  public get recoveryAction() {
    return this.getStringAttribute('recovery_action');
  }
  public set recoveryAction(value: string) {
    this._recoveryAction = value;
  }
  public resetRecoveryAction() {
    this._recoveryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryActionInput() {
    return this._recoveryAction;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address CoreInstanceConfiguration#ipv6address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6subnet_cidr CoreInstanceConfiguration#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_ipv6ip CoreInstanceConfiguration#assign_ipv6ip}
  */
  readonly assignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_private_dns_record CoreInstanceConfiguration#assign_private_dns_record}
  */
  readonly assignPrivateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_public_ip CoreInstanceConfiguration#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#hostname_label CoreInstanceConfiguration#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nsg_ids CoreInstanceConfiguration#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#private_ip CoreInstanceConfiguration#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#security_attributes CoreInstanceConfiguration#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#skip_source_dest_check CoreInstanceConfiguration#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_cidr CoreInstanceConfiguration#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_id CoreInstanceConfiguration#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address_ipv6subnet_cidr_pair_details CoreInstanceConfiguration#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ipv6ip: cdktf.booleanToTerraform(struct!.assignIpv6Ip),
    assign_private_dns_record: cdktf.booleanToTerraform(struct!.assignPrivateDnsRecord),
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_private_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.assignPrivateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpv6Ip = this._assignIpv6Ip;
    }
    if (this._assignPrivateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPrivateDnsRecord = this._assignPrivateDnsRecord;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIpv6Ip = undefined;
      this._assignPrivateDnsRecord = undefined;
      this._assignPublicIp = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._securityAttributes = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIpv6Ip = value.assignIpv6Ip;
      this._assignPrivateDnsRecord = value.assignPrivateDnsRecord;
      this._assignPublicIp = value.assignPublicIp;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._securityAttributes = value.securityAttributes;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // assign_ipv6ip - computed: true, optional: true, required: false
  private _assignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }
  public set assignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Ip = value;
  }
  public resetAssignIpv6Ip() {
    this._assignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6IpInput() {
    return this._assignIpv6Ip;
  }

  // assign_private_dns_record - computed: false, optional: true, required: false
  private _assignPrivateDnsRecord?: boolean | cdktf.IResolvable; 
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }
  public set assignPrivateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._assignPrivateDnsRecord = value;
  }
  public resetAssignPrivateDnsRecord() {
    this._assignPrivateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPrivateDnsRecordInput() {
    return this._assignPrivateDnsRecord;
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
  }

  // subnet_cidr - computed: true, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#are_legacy_imds_endpoints_disabled CoreInstanceConfiguration#are_legacy_imds_endpoints_disabled}
  */
  readonly areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_legacy_imds_endpoints_disabled: cdktf.booleanToTerraform(struct!.areLegacyImdsEndpointsDisabled),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_legacy_imds_endpoints_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areLegacyImdsEndpointsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areLegacyImdsEndpointsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areLegacyImdsEndpointsDisabled = this._areLegacyImdsEndpointsDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areLegacyImdsEndpointsDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areLegacyImdsEndpointsDisabled = value.areLegacyImdsEndpointsDisabled;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: true, required: false
  private _areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable; 
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
  public set areLegacyImdsEndpointsDisabled(value: boolean | cdktf.IResolvable) {
    this._areLegacyImdsEndpointsDisabled = value;
  }
  public resetAreLegacyImdsEndpointsDisabled() {
    this._areLegacyImdsEndpointsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areLegacyImdsEndpointsDisabledInput() {
    return this._areLegacyImdsEndpointsDisabled;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_type CoreInstanceConfiguration#boot_volume_type}
  */
  readonly bootVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#firmware CoreInstanceConfiguration#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_consistent_volume_naming_enabled CoreInstanceConfiguration#is_consistent_volume_naming_enabled}
  */
  readonly isConsistentVolumeNamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_pv_encryption_in_transit_enabled CoreInstanceConfiguration#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#network_type CoreInstanceConfiguration#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#remote_data_volume_type CoreInstanceConfiguration#remote_data_volume_type}
  */
  readonly remoteDataVolumeType?: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_type: cdktf.stringToTerraform(struct!.bootVolumeType),
    firmware: cdktf.stringToTerraform(struct!.firmware),
    is_consistent_volume_naming_enabled: cdktf.booleanToTerraform(struct!.isConsistentVolumeNamingEnabled),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    remote_data_volume_type: cdktf.stringToTerraform(struct!.remoteDataVolumeType),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware: {
      value: cdktf.stringToHclTerraform(struct!.firmware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_consistent_volume_naming_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isConsistentVolumeNamingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteDataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeType = this._bootVolumeType;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._isConsistentVolumeNamingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConsistentVolumeNamingEnabled = this._isConsistentVolumeNamingEnabled;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._remoteDataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDataVolumeType = this._remoteDataVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeType = undefined;
      this._firmware = undefined;
      this._isConsistentVolumeNamingEnabled = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._networkType = undefined;
      this._remoteDataVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeType = value.bootVolumeType;
      this._firmware = value.firmware;
      this._isConsistentVolumeNamingEnabled = value.isConsistentVolumeNamingEnabled;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._networkType = value.networkType;
      this._remoteDataVolumeType = value.remoteDataVolumeType;
    }
  }

  // boot_volume_type - computed: true, optional: true, required: false
  private _bootVolumeType?: string; 
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }
  public set bootVolumeType(value: string) {
    this._bootVolumeType = value;
  }
  public resetBootVolumeType() {
    this._bootVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeTypeInput() {
    return this._bootVolumeType;
  }

  // firmware - computed: true, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: true, required: false
  private _isConsistentVolumeNamingEnabled?: boolean | cdktf.IResolvable; 
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }
  public set isConsistentVolumeNamingEnabled(value: boolean | cdktf.IResolvable) {
    this._isConsistentVolumeNamingEnabled = value;
  }
  public resetIsConsistentVolumeNamingEnabled() {
    this._isConsistentVolumeNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConsistentVolumeNamingEnabledInput() {
    return this._isConsistentVolumeNamingEnabled;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // remote_data_volume_type - computed: true, optional: true, required: false
  private _remoteDataVolumeType?: string; 
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
  public set remoteDataVolumeType(value: string) {
    this._remoteDataVolumeType = value;
  }
  public resetRemoteDataVolumeType() {
    this._remoteDataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDataVolumeTypeInput() {
    return this._remoteDataVolumeType;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#license_type CoreInstanceConfiguration#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseType = value.licenseType;
      this._type = value.type;
    }
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compute_host_group_id CoreInstanceConfiguration#compute_host_group_id}
  */
  readonly computeHostGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_host_group_id: cdktf.stringToTerraform(struct!.computeHostGroupId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_host_group_id: {
      value: cdktf.stringToHclTerraform(struct!.computeHostGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeHostGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeHostGroupId = this._computeHostGroupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeHostGroupId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeHostGroupId = value.computeHostGroupId;
      this._type = value.type;
    }
  }

  // compute_host_group_id - computed: false, optional: false, required: true
  private _computeHostGroupId?: string; 
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }
  public set computeHostGroupId(value: string) {
    this._computeHostGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHostGroupIdInput() {
    return this._computeHostGroupId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#are_virtual_instructions_enabled CoreInstanceConfiguration#are_virtual_instructions_enabled}
  */
  readonly areVirtualInstructionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#config_map CoreInstanceConfiguration#config_map}
  */
  readonly configMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_access_control_service_enabled CoreInstanceConfiguration#is_access_control_service_enabled}
  */
  readonly isAccessControlServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_input_output_memory_management_unit_enabled CoreInstanceConfiguration#is_input_output_memory_management_unit_enabled}
  */
  readonly isInputOutputMemoryManagementUnitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_measured_boot_enabled CoreInstanceConfiguration#is_measured_boot_enabled}
  */
  readonly isMeasuredBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_memory_encryption_enabled CoreInstanceConfiguration#is_memory_encryption_enabled}
  */
  readonly isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_secure_boot_enabled CoreInstanceConfiguration#is_secure_boot_enabled}
  */
  readonly isSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_symmetric_multi_threading_enabled CoreInstanceConfiguration#is_symmetric_multi_threading_enabled}
  */
  readonly isSymmetricMultiThreadingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_trusted_platform_module_enabled CoreInstanceConfiguration#is_trusted_platform_module_enabled}
  */
  readonly isTrustedPlatformModuleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#numa_nodes_per_socket CoreInstanceConfiguration#numa_nodes_per_socket}
  */
  readonly numaNodesPerSocket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#percentage_of_cores_enabled CoreInstanceConfiguration#percentage_of_cores_enabled}
  */
  readonly percentageOfCoresEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_virtual_instructions_enabled: cdktf.booleanToTerraform(struct!.areVirtualInstructionsEnabled),
    config_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configMap),
    is_access_control_service_enabled: cdktf.booleanToTerraform(struct!.isAccessControlServiceEnabled),
    is_input_output_memory_management_unit_enabled: cdktf.booleanToTerraform(struct!.isInputOutputMemoryManagementUnitEnabled),
    is_measured_boot_enabled: cdktf.booleanToTerraform(struct!.isMeasuredBootEnabled),
    is_memory_encryption_enabled: cdktf.booleanToTerraform(struct!.isMemoryEncryptionEnabled),
    is_secure_boot_enabled: cdktf.booleanToTerraform(struct!.isSecureBootEnabled),
    is_symmetric_multi_threading_enabled: cdktf.booleanToTerraform(struct!.isSymmetricMultiThreadingEnabled),
    is_trusted_platform_module_enabled: cdktf.booleanToTerraform(struct!.isTrustedPlatformModuleEnabled),
    numa_nodes_per_socket: cdktf.stringToTerraform(struct!.numaNodesPerSocket),
    percentage_of_cores_enabled: cdktf.numberToTerraform(struct!.percentageOfCoresEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_virtual_instructions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.areVirtualInstructionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_access_control_service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAccessControlServiceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_input_output_memory_management_unit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isInputOutputMemoryManagementUnitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_measured_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMeasuredBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_memory_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMemoryEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSecureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_symmetric_multi_threading_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSymmetricMultiThreadingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_trusted_platform_module_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isTrustedPlatformModuleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    numa_nodes_per_socket: {
      value: cdktf.stringToHclTerraform(struct!.numaNodesPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_of_cores_enabled: {
      value: cdktf.numberToHclTerraform(struct!.percentageOfCoresEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areVirtualInstructionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areVirtualInstructionsEnabled = this._areVirtualInstructionsEnabled;
    }
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    if (this._isAccessControlServiceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAccessControlServiceEnabled = this._isAccessControlServiceEnabled;
    }
    if (this._isInputOutputMemoryManagementUnitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInputOutputMemoryManagementUnitEnabled = this._isInputOutputMemoryManagementUnitEnabled;
    }
    if (this._isMeasuredBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMeasuredBootEnabled = this._isMeasuredBootEnabled;
    }
    if (this._isMemoryEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMemoryEncryptionEnabled = this._isMemoryEncryptionEnabled;
    }
    if (this._isSecureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecureBootEnabled = this._isSecureBootEnabled;
    }
    if (this._isSymmetricMultiThreadingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSymmetricMultiThreadingEnabled = this._isSymmetricMultiThreadingEnabled;
    }
    if (this._isTrustedPlatformModuleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTrustedPlatformModuleEnabled = this._isTrustedPlatformModuleEnabled;
    }
    if (this._numaNodesPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numaNodesPerSocket = this._numaNodesPerSocket;
    }
    if (this._percentageOfCoresEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageOfCoresEnabled = this._percentageOfCoresEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areVirtualInstructionsEnabled = undefined;
      this._configMap = undefined;
      this._isAccessControlServiceEnabled = undefined;
      this._isInputOutputMemoryManagementUnitEnabled = undefined;
      this._isMeasuredBootEnabled = undefined;
      this._isMemoryEncryptionEnabled = undefined;
      this._isSecureBootEnabled = undefined;
      this._isSymmetricMultiThreadingEnabled = undefined;
      this._isTrustedPlatformModuleEnabled = undefined;
      this._numaNodesPerSocket = undefined;
      this._percentageOfCoresEnabled = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areVirtualInstructionsEnabled = value.areVirtualInstructionsEnabled;
      this._configMap = value.configMap;
      this._isAccessControlServiceEnabled = value.isAccessControlServiceEnabled;
      this._isInputOutputMemoryManagementUnitEnabled = value.isInputOutputMemoryManagementUnitEnabled;
      this._isMeasuredBootEnabled = value.isMeasuredBootEnabled;
      this._isMemoryEncryptionEnabled = value.isMemoryEncryptionEnabled;
      this._isSecureBootEnabled = value.isSecureBootEnabled;
      this._isSymmetricMultiThreadingEnabled = value.isSymmetricMultiThreadingEnabled;
      this._isTrustedPlatformModuleEnabled = value.isTrustedPlatformModuleEnabled;
      this._numaNodesPerSocket = value.numaNodesPerSocket;
      this._percentageOfCoresEnabled = value.percentageOfCoresEnabled;
      this._type = value.type;
    }
  }

  // are_virtual_instructions_enabled - computed: true, optional: true, required: false
  private _areVirtualInstructionsEnabled?: boolean | cdktf.IResolvable; 
  public get areVirtualInstructionsEnabled() {
    return this.getBooleanAttribute('are_virtual_instructions_enabled');
  }
  public set areVirtualInstructionsEnabled(value: boolean | cdktf.IResolvable) {
    this._areVirtualInstructionsEnabled = value;
  }
  public resetAreVirtualInstructionsEnabled() {
    this._areVirtualInstructionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areVirtualInstructionsEnabledInput() {
    return this._areVirtualInstructionsEnabled;
  }

  // config_map - computed: true, optional: true, required: false
  private _configMap?: { [key: string]: string }; 
  public get configMap() {
    return this.getStringMapAttribute('config_map');
  }
  public set configMap(value: { [key: string]: string }) {
    this._configMap = value;
  }
  public resetConfigMap() {
    this._configMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }

  // is_access_control_service_enabled - computed: true, optional: true, required: false
  private _isAccessControlServiceEnabled?: boolean | cdktf.IResolvable; 
  public get isAccessControlServiceEnabled() {
    return this.getBooleanAttribute('is_access_control_service_enabled');
  }
  public set isAccessControlServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._isAccessControlServiceEnabled = value;
  }
  public resetIsAccessControlServiceEnabled() {
    this._isAccessControlServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessControlServiceEnabledInput() {
    return this._isAccessControlServiceEnabled;
  }

  // is_input_output_memory_management_unit_enabled - computed: true, optional: true, required: false
  private _isInputOutputMemoryManagementUnitEnabled?: boolean | cdktf.IResolvable; 
  public get isInputOutputMemoryManagementUnitEnabled() {
    return this.getBooleanAttribute('is_input_output_memory_management_unit_enabled');
  }
  public set isInputOutputMemoryManagementUnitEnabled(value: boolean | cdktf.IResolvable) {
    this._isInputOutputMemoryManagementUnitEnabled = value;
  }
  public resetIsInputOutputMemoryManagementUnitEnabled() {
    this._isInputOutputMemoryManagementUnitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInputOutputMemoryManagementUnitEnabledInput() {
    return this._isInputOutputMemoryManagementUnitEnabled;
  }

  // is_measured_boot_enabled - computed: true, optional: true, required: false
  private _isMeasuredBootEnabled?: boolean | cdktf.IResolvable; 
  public get isMeasuredBootEnabled() {
    return this.getBooleanAttribute('is_measured_boot_enabled');
  }
  public set isMeasuredBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isMeasuredBootEnabled = value;
  }
  public resetIsMeasuredBootEnabled() {
    this._isMeasuredBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMeasuredBootEnabledInput() {
    return this._isMeasuredBootEnabled;
  }

  // is_memory_encryption_enabled - computed: true, optional: true, required: false
  private _isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }
  public set isMemoryEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryEncryptionEnabled = value;
  }
  public resetIsMemoryEncryptionEnabled() {
    this._isMemoryEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryEncryptionEnabledInput() {
    return this._isMemoryEncryptionEnabled;
  }

  // is_secure_boot_enabled - computed: true, optional: true, required: false
  private _isSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }
  public set isSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecureBootEnabled = value;
  }
  public resetIsSecureBootEnabled() {
    this._isSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootEnabledInput() {
    return this._isSecureBootEnabled;
  }

  // is_symmetric_multi_threading_enabled - computed: true, optional: true, required: false
  private _isSymmetricMultiThreadingEnabled?: boolean | cdktf.IResolvable; 
  public get isSymmetricMultiThreadingEnabled() {
    return this.getBooleanAttribute('is_symmetric_multi_threading_enabled');
  }
  public set isSymmetricMultiThreadingEnabled(value: boolean | cdktf.IResolvable) {
    this._isSymmetricMultiThreadingEnabled = value;
  }
  public resetIsSymmetricMultiThreadingEnabled() {
    this._isSymmetricMultiThreadingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSymmetricMultiThreadingEnabledInput() {
    return this._isSymmetricMultiThreadingEnabled;
  }

  // is_trusted_platform_module_enabled - computed: true, optional: true, required: false
  private _isTrustedPlatformModuleEnabled?: boolean | cdktf.IResolvable; 
  public get isTrustedPlatformModuleEnabled() {
    return this.getBooleanAttribute('is_trusted_platform_module_enabled');
  }
  public set isTrustedPlatformModuleEnabled(value: boolean | cdktf.IResolvable) {
    this._isTrustedPlatformModuleEnabled = value;
  }
  public resetIsTrustedPlatformModuleEnabled() {
    this._isTrustedPlatformModuleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTrustedPlatformModuleEnabledInput() {
    return this._isTrustedPlatformModuleEnabled;
  }

  // numa_nodes_per_socket - computed: true, optional: true, required: false
  private _numaNodesPerSocket?: string; 
  public get numaNodesPerSocket() {
    return this.getStringAttribute('numa_nodes_per_socket');
  }
  public set numaNodesPerSocket(value: string) {
    this._numaNodesPerSocket = value;
  }
  public resetNumaNodesPerSocket() {
    this._numaNodesPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaNodesPerSocketInput() {
    return this._numaNodesPerSocket;
  }

  // percentage_of_cores_enabled - computed: true, optional: true, required: false
  private _percentageOfCoresEnabled?: number; 
  public get percentageOfCoresEnabled() {
    return this.getNumberAttribute('percentage_of_cores_enabled');
  }
  public set percentageOfCoresEnabled(value: number) {
    this._percentageOfCoresEnabled = value;
  }
  public resetPercentageOfCoresEnabled() {
    this._percentageOfCoresEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageOfCoresEnabledInput() {
    return this._percentageOfCoresEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preserve_boot_volume CoreInstanceConfiguration#preserve_boot_volume}
  */
  readonly preserveBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_boot_volume: cdktf.booleanToTerraform(struct!.preserveBootVolume),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_boot_volume: {
      value: cdktf.booleanToHclTerraform(struct!.preserveBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveBootVolume = this._preserveBootVolume;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveBootVolume = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveBootVolume = value.preserveBootVolume;
      this._type = value.type;
    }
  }

  // preserve_boot_volume - computed: true, optional: true, required: false
  private _preserveBootVolume?: boolean | cdktf.IResolvable; 
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }
  public set preserveBootVolume(value: boolean | cdktf.IResolvable) {
    this._preserveBootVolume = value;
  }
  public resetPreserveBootVolume() {
    this._preserveBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBootVolumeInput() {
    return this._preserveBootVolume;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig {
  /**
  * preemption_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preemption_action CoreInstanceConfiguration#preemption_action}
  */
  readonly preemptionAction?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_action: coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToTerraform(struct!.preemptionAction),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_action: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct!.preemptionAction),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionAction = this._preemptionAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptionAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptionAction.internalValue = value.preemptionAction;
    }
  }

  // preemption_action - computed: false, optional: true, required: false
  private _preemptionAction = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference(this, "preemption_action");
  public get preemptionAction() {
    return this._preemptionAction;
  }
  public putPreemptionAction(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction) {
    this._preemptionAction.internalValue = value;
  }
  public resetPreemptionAction() {
    this._preemptionAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionActionInput() {
    return this._preemptionAction.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#baseline_ocpu_utilization CoreInstanceConfiguration#baseline_ocpu_utilization}
  */
  readonly baselineOcpuUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#memory_in_gbs CoreInstanceConfiguration#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nvmes CoreInstanceConfiguration#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ocpus CoreInstanceConfiguration#ocpus}
  */
  readonly ocpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#resource_management CoreInstanceConfiguration#resource_management}
  */
  readonly resourceManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#vcpus CoreInstanceConfiguration#vcpus}
  */
  readonly vcpus?: number;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_ocpu_utilization: cdktf.stringToTerraform(struct!.baselineOcpuUtilization),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
    resource_management: cdktf.stringToTerraform(struct!.resourceManagement),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_ocpu_utilization: {
      value: cdktf.stringToHclTerraform(struct!.baselineOcpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_management: {
      value: cdktf.stringToHclTerraform(struct!.resourceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineOcpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineOcpuUtilization = this._baselineOcpuUtilization;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    if (this._resourceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagement = this._resourceManagement;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineOcpuUtilization = undefined;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
      this._resourceManagement = undefined;
      this._vcpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineOcpuUtilization = value.baselineOcpuUtilization;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
      this._resourceManagement = value.resourceManagement;
      this._vcpus = value.vcpus;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: true, required: false
  private _baselineOcpuUtilization?: string; 
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }
  public set baselineOcpuUtilization(value: string) {
    this._baselineOcpuUtilization = value;
  }
  public resetBaselineOcpuUtilization() {
    this._baselineOcpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineOcpuUtilizationInput() {
    return this._baselineOcpuUtilization;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }

  // resource_management - computed: true, optional: true, required: false
  private _resourceManagement?: string; 
  public get resourceManagement() {
    return this.getStringAttribute('resource_management');
  }
  public set resourceManagement(value: string) {
    this._resourceManagement = value;
  }
  public resetResourceManagement() {
    this._resourceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagementInput() {
    return this._resourceManagement;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags_filter CoreInstanceConfiguration#defined_tags_filter}
  */
  readonly definedTagsFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#operating_system CoreInstanceConfiguration#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#operating_system_version CoreInstanceConfiguration#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTagsFilter),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTagsFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTagsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTagsFilter = this._definedTagsFilter;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._definedTagsFilter = undefined;
      this._operatingSystem = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._definedTagsFilter = value.definedTagsFilter;
      this._operatingSystem = value.operatingSystem;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags_filter - computed: true, optional: true, required: false
  private _definedTagsFilter?: { [key: string]: string }; 
  public get definedTagsFilter() {
    return this.getStringMapAttribute('defined_tags_filter');
  }
  public set definedTagsFilter(value: { [key: string]: string }) {
    this._definedTagsFilter = value;
  }
  public resetDefinedTagsFilter() {
    this._definedTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsFilterInput() {
    return this._definedTagsFilter;
  }

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // operating_system_version - computed: true, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_id CoreInstanceConfiguration#boot_volume_id}
  */
  readonly bootVolumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_size_in_gbs CoreInstanceConfiguration#boot_volume_size_in_gbs}
  */
  readonly bootVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_vpus_per_gb CoreInstanceConfiguration#boot_volume_vpus_per_gb}
  */
  readonly bootVolumeVpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#image_id CoreInstanceConfiguration#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#kms_key_id CoreInstanceConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source_type CoreInstanceConfiguration#source_type}
  */
  readonly sourceType: string;
  /**
  * instance_source_image_filter_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_source_image_filter_details CoreInstanceConfiguration#instance_source_image_filter_details}
  */
  readonly instanceSourceImageFilterDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_id: cdktf.stringToTerraform(struct!.bootVolumeId),
    boot_volume_size_in_gbs: cdktf.stringToTerraform(struct!.bootVolumeSizeInGbs),
    boot_volume_vpus_per_gb: cdktf.stringToTerraform(struct!.bootVolumeVpusPerGb),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    instance_source_image_filter_details: coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct!.instanceSourceImageFilterDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_source_image_filter_details: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct!.instanceSourceImageFilterDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeId = this._bootVolumeId;
    }
    if (this._bootVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSizeInGbs = this._bootVolumeSizeInGbs;
    }
    if (this._bootVolumeVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeVpusPerGb = this._bootVolumeVpusPerGb;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._instanceSourceImageFilterDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSourceImageFilterDetails = this._instanceSourceImageFilterDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeId = undefined;
      this._bootVolumeSizeInGbs = undefined;
      this._bootVolumeVpusPerGb = undefined;
      this._imageId = undefined;
      this._kmsKeyId = undefined;
      this._sourceType = undefined;
      this._instanceSourceImageFilterDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeId = value.bootVolumeId;
      this._bootVolumeSizeInGbs = value.bootVolumeSizeInGbs;
      this._bootVolumeVpusPerGb = value.bootVolumeVpusPerGb;
      this._imageId = value.imageId;
      this._kmsKeyId = value.kmsKeyId;
      this._sourceType = value.sourceType;
      this._instanceSourceImageFilterDetails.internalValue = value.instanceSourceImageFilterDetails;
    }
  }

  // boot_volume_id - computed: true, optional: true, required: false
  private _bootVolumeId?: string; 
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }
  public set bootVolumeId(value: string) {
    this._bootVolumeId = value;
  }
  public resetBootVolumeId() {
    this._bootVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeIdInput() {
    return this._bootVolumeId;
  }

  // boot_volume_size_in_gbs - computed: true, optional: true, required: false
  private _bootVolumeSizeInGbs?: string; 
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }
  public set bootVolumeSizeInGbs(value: string) {
    this._bootVolumeSizeInGbs = value;
  }
  public resetBootVolumeSizeInGbs() {
    this._bootVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInGbsInput() {
    return this._bootVolumeSizeInGbs;
  }

  // boot_volume_vpus_per_gb - computed: true, optional: true, required: false
  private _bootVolumeVpusPerGb?: string; 
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }
  public set bootVolumeVpusPerGb(value: string) {
    this._bootVolumeVpusPerGb = value;
  }
  public resetBootVolumeVpusPerGb() {
    this._bootVolumeVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeVpusPerGbInput() {
    return this._bootVolumeVpusPerGb;
  }

  // image_id - computed: true, optional: true, required: false
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // instance_source_image_filter_details - computed: false, optional: true, required: false
  private _instanceSourceImageFilterDetails = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference(this, "instance_source_image_filter_details");
  public get instanceSourceImageFilterDetails() {
    return this._instanceSourceImageFilterDetails;
  }
  public putInstanceSourceImageFilterDetails(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails) {
    this._instanceSourceImageFilterDetails.internalValue = value;
  }
  public resetInstanceSourceImageFilterDetails() {
    this._instanceSourceImageFilterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSourceImageFilterDetailsInput() {
    return this._instanceSourceImageFilterDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsLaunchDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_domain CoreInstanceConfiguration#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#capacity_reservation_id CoreInstanceConfiguration#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#cluster_placement_group_id CoreInstanceConfiguration#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compute_cluster_id CoreInstanceConfiguration#compute_cluster_id}
  */
  readonly computeClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#dedicated_vm_host_id CoreInstanceConfiguration#dedicated_vm_host_id}
  */
  readonly dedicatedVmHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#extended_metadata CoreInstanceConfiguration#extended_metadata}
  */
  readonly extendedMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#fault_domain CoreInstanceConfiguration#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipxe_script CoreInstanceConfiguration#ipxe_script}
  */
  readonly ipxeScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_ai_enterprise_enabled CoreInstanceConfiguration#is_ai_enterprise_enabled}
  */
  readonly isAiEnterpriseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_pv_encryption_in_transit_enabled CoreInstanceConfiguration#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#launch_mode CoreInstanceConfiguration#launch_mode}
  */
  readonly launchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#metadata CoreInstanceConfiguration#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preferred_maintenance_action CoreInstanceConfiguration#preferred_maintenance_action}
  */
  readonly preferredMaintenanceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#security_attributes CoreInstanceConfiguration#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#shape CoreInstanceConfiguration#shape}
  */
  readonly shape?: string;
  /**
  * agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#agent_config CoreInstanceConfiguration#agent_config}
  */
  readonly agentConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig;
  /**
  * availability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_config CoreInstanceConfiguration#availability_config}
  */
  readonly availabilityConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig;
  /**
  * create_vnic_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create_vnic_details CoreInstanceConfiguration#create_vnic_details}
  */
  readonly createVnicDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails;
  /**
  * instance_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_options CoreInstanceConfiguration#instance_options}
  */
  readonly instanceOptions?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions;
  /**
  * launch_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#launch_options CoreInstanceConfiguration#launch_options}
  */
  readonly launchOptions?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions;
  /**
  * licensing_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#licensing_configs CoreInstanceConfiguration#licensing_configs}
  */
  readonly licensingConfigs?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs;
  /**
  * placement_constraint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#placement_constraint_details CoreInstanceConfiguration#placement_constraint_details}
  */
  readonly placementConstraintDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails;
  /**
  * platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#platform_config CoreInstanceConfiguration#platform_config}
  */
  readonly platformConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig;
  /**
  * preemptible_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preemptible_instance_config CoreInstanceConfiguration#preemptible_instance_config}
  */
  readonly preemptibleInstanceConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#shape_config CoreInstanceConfiguration#shape_config}
  */
  readonly shapeConfig?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source_details CoreInstanceConfiguration#source_details}
  */
  readonly sourceDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails;
}

export function coreInstanceConfigurationInstanceDetailsLaunchDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    cluster_placement_group_id: cdktf.stringToTerraform(struct!.clusterPlacementGroupId),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    compute_cluster_id: cdktf.stringToTerraform(struct!.computeClusterId),
    dedicated_vm_host_id: cdktf.stringToTerraform(struct!.dedicatedVmHostId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    extended_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extendedMetadata),
    fault_domain: cdktf.stringToTerraform(struct!.faultDomain),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    ipxe_script: cdktf.stringToTerraform(struct!.ipxeScript),
    is_ai_enterprise_enabled: cdktf.booleanToTerraform(struct!.isAiEnterpriseEnabled),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    launch_mode: cdktf.stringToTerraform(struct!.launchMode),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    preferred_maintenance_action: cdktf.stringToTerraform(struct!.preferredMaintenanceAction),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    shape: cdktf.stringToTerraform(struct!.shape),
    agent_config: coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigToTerraform(struct!.agentConfig),
    availability_config: coreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigToTerraform(struct!.availabilityConfig),
    create_vnic_details: coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsToTerraform(struct!.createVnicDetails),
    instance_options: coreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsToTerraform(struct!.instanceOptions),
    launch_options: coreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsToTerraform(struct!.launchOptions),
    licensing_configs: coreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsToTerraform(struct!.licensingConfigs),
    placement_constraint_details: coreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsToTerraform(struct!.placementConstraintDetails),
    platform_config: coreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigToTerraform(struct!.platformConfig),
    preemptible_instance_config: coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigToTerraform(struct!.preemptibleInstanceConfig),
    shape_config: coreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigToTerraform(struct!.shapeConfig),
    source_details: coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsToTerraform(struct!.sourceDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsLaunchDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsLaunchDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.computeClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedicated_vm_host_id: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedVmHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extendedMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fault_domain: {
      value: cdktf.stringToHclTerraform(struct!.faultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ipxe_script: {
      value: cdktf.stringToHclTerraform(struct!.ipxeScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ai_enterprise_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAiEnterpriseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    launch_mode: {
      value: cdktf.stringToHclTerraform(struct!.launchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preferred_maintenance_action: {
      value: cdktf.stringToHclTerraform(struct!.preferredMaintenanceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_config: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigToHclTerraform(struct!.agentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigList",
    },
    availability_config: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigToHclTerraform(struct!.availabilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigList",
    },
    create_vnic_details: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsToHclTerraform(struct!.createVnicDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsList",
    },
    instance_options: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsToHclTerraform(struct!.instanceOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsList",
    },
    launch_options: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsToHclTerraform(struct!.launchOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsList",
    },
    licensing_configs: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsToHclTerraform(struct!.licensingConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsList",
    },
    placement_constraint_details: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsToHclTerraform(struct!.placementConstraintDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsList",
    },
    platform_config: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigToHclTerraform(struct!.platformConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigList",
    },
    preemptible_instance_config: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigToHclTerraform(struct!.preemptibleInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigList",
    },
    shape_config: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigList",
    },
    source_details: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsToHclTerraform(struct!.sourceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsLaunchDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsLaunchDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._clusterPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPlacementGroupId = this._clusterPlacementGroupId;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._computeClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeClusterId = this._computeClusterId;
    }
    if (this._dedicatedVmHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedVmHostId = this._dedicatedVmHostId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._extendedMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedMetadata = this._extendedMetadata;
    }
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._ipxeScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeScript = this._ipxeScript;
    }
    if (this._isAiEnterpriseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAiEnterpriseEnabled = this._isAiEnterpriseEnabled;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._launchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchMode = this._launchMode;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._preferredMaintenanceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMaintenanceAction = this._preferredMaintenanceAction;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._agentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfig = this._agentConfig?.internalValue;
    }
    if (this._availabilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityConfig = this._availabilityConfig?.internalValue;
    }
    if (this._createVnicDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVnicDetails = this._createVnicDetails?.internalValue;
    }
    if (this._instanceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceOptions = this._instanceOptions?.internalValue;
    }
    if (this._launchOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchOptions = this._launchOptions?.internalValue;
    }
    if (this._licensingConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensingConfigs = this._licensingConfigs?.internalValue;
    }
    if (this._placementConstraintDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraintDetails = this._placementConstraintDetails?.internalValue;
    }
    if (this._platformConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformConfig = this._platformConfig?.internalValue;
    }
    if (this._preemptibleInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibleInstanceConfig = this._preemptibleInstanceConfig?.internalValue;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    if (this._sourceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetails = this._sourceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsLaunchDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._capacityReservationId = undefined;
      this._clusterPlacementGroupId = undefined;
      this._compartmentId = undefined;
      this._computeClusterId = undefined;
      this._dedicatedVmHostId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._extendedMetadata = undefined;
      this._faultDomain = undefined;
      this._freeformTags = undefined;
      this._ipxeScript = undefined;
      this._isAiEnterpriseEnabled = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._launchMode = undefined;
      this._metadata = undefined;
      this._preferredMaintenanceAction = undefined;
      this._securityAttributes = undefined;
      this._shape = undefined;
      this._agentConfig.internalValue = undefined;
      this._availabilityConfig.internalValue = undefined;
      this._createVnicDetails.internalValue = undefined;
      this._instanceOptions.internalValue = undefined;
      this._launchOptions.internalValue = undefined;
      this._licensingConfigs.internalValue = undefined;
      this._placementConstraintDetails.internalValue = undefined;
      this._platformConfig.internalValue = undefined;
      this._preemptibleInstanceConfig.internalValue = undefined;
      this._shapeConfig.internalValue = undefined;
      this._sourceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._capacityReservationId = value.capacityReservationId;
      this._clusterPlacementGroupId = value.clusterPlacementGroupId;
      this._compartmentId = value.compartmentId;
      this._computeClusterId = value.computeClusterId;
      this._dedicatedVmHostId = value.dedicatedVmHostId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._extendedMetadata = value.extendedMetadata;
      this._faultDomain = value.faultDomain;
      this._freeformTags = value.freeformTags;
      this._ipxeScript = value.ipxeScript;
      this._isAiEnterpriseEnabled = value.isAiEnterpriseEnabled;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._launchMode = value.launchMode;
      this._metadata = value.metadata;
      this._preferredMaintenanceAction = value.preferredMaintenanceAction;
      this._securityAttributes = value.securityAttributes;
      this._shape = value.shape;
      this._agentConfig.internalValue = value.agentConfig;
      this._availabilityConfig.internalValue = value.availabilityConfig;
      this._createVnicDetails.internalValue = value.createVnicDetails;
      this._instanceOptions.internalValue = value.instanceOptions;
      this._launchOptions.internalValue = value.launchOptions;
      this._licensingConfigs.internalValue = value.licensingConfigs;
      this._placementConstraintDetails.internalValue = value.placementConstraintDetails;
      this._platformConfig.internalValue = value.platformConfig;
      this._preemptibleInstanceConfig.internalValue = value.preemptibleInstanceConfig;
      this._shapeConfig.internalValue = value.shapeConfig;
      this._sourceDetails.internalValue = value.sourceDetails;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_cluster_id - computed: true, optional: true, required: false
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  public resetComputeClusterId() {
    this._computeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // dedicated_vm_host_id - computed: true, optional: true, required: false
  private _dedicatedVmHostId?: string; 
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string) {
    this._dedicatedVmHostId = value;
  }
  public resetDedicatedVmHostId() {
    this._dedicatedVmHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostIdInput() {
    return this._dedicatedVmHostId;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // extended_metadata - computed: true, optional: true, required: false
  private _extendedMetadata?: { [key: string]: string }; 
  public get extendedMetadata() {
    return this.getStringMapAttribute('extended_metadata');
  }
  public set extendedMetadata(value: { [key: string]: string }) {
    this._extendedMetadata = value;
  }
  public resetExtendedMetadata() {
    this._extendedMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMetadataInput() {
    return this._extendedMetadata;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
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

  // ipxe_script - computed: true, optional: true, required: false
  private _ipxeScript?: string; 
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }
  public set ipxeScript(value: string) {
    this._ipxeScript = value;
  }
  public resetIpxeScript() {
    this._ipxeScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptInput() {
    return this._ipxeScript;
  }

  // is_ai_enterprise_enabled - computed: true, optional: true, required: false
  private _isAiEnterpriseEnabled?: boolean | cdktf.IResolvable; 
  public get isAiEnterpriseEnabled() {
    return this.getBooleanAttribute('is_ai_enterprise_enabled');
  }
  public set isAiEnterpriseEnabled(value: boolean | cdktf.IResolvable) {
    this._isAiEnterpriseEnabled = value;
  }
  public resetIsAiEnterpriseEnabled() {
    this._isAiEnterpriseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAiEnterpriseEnabledInput() {
    return this._isAiEnterpriseEnabled;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // launch_mode - computed: true, optional: true, required: false
  private _launchMode?: string; 
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }
  public set launchMode(value: string) {
    this._launchMode = value;
  }
  public resetLaunchMode() {
    this._launchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchModeInput() {
    return this._launchMode;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // preferred_maintenance_action - computed: true, optional: true, required: false
  private _preferredMaintenanceAction?: string; 
  public get preferredMaintenanceAction() {
    return this.getStringAttribute('preferred_maintenance_action');
  }
  public set preferredMaintenanceAction(value: string) {
    this._preferredMaintenanceAction = value;
  }
  public resetPreferredMaintenanceAction() {
    this._preferredMaintenanceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceActionInput() {
    return this._preferredMaintenanceAction;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // agent_config - computed: false, optional: true, required: false
  private _agentConfig = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  public resetAgentConfig() {
    this._agentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // availability_config - computed: false, optional: true, required: false
  private _availabilityConfig = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference(this, "availability_config");
  public get availabilityConfig() {
    return this._availabilityConfig;
  }
  public putAvailabilityConfig(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsAvailabilityConfig) {
    this._availabilityConfig.internalValue = value;
  }
  public resetAvailabilityConfig() {
    this._availabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityConfigInput() {
    return this._availabilityConfig.internalValue;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference(this, "create_vnic_details");
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public putCreateVnicDetails(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsCreateVnicDetails) {
    this._createVnicDetails.internalValue = value;
  }
  public resetCreateVnicDetails() {
    this._createVnicDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVnicDetailsInput() {
    return this._createVnicDetails.internalValue;
  }

  // instance_options - computed: false, optional: true, required: false
  private _instanceOptions = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptionsOutputReference(this, "instance_options");
  public get instanceOptions() {
    return this._instanceOptions;
  }
  public putInstanceOptions(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsInstanceOptions) {
    this._instanceOptions.internalValue = value;
  }
  public resetInstanceOptions() {
    this._instanceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOptionsInput() {
    return this._instanceOptions.internalValue;
  }

  // launch_options - computed: false, optional: true, required: false
  private _launchOptions = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptionsOutputReference(this, "launch_options");
  public get launchOptions() {
    return this._launchOptions;
  }
  public putLaunchOptions(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLaunchOptions) {
    this._launchOptions.internalValue = value;
  }
  public resetLaunchOptions() {
    this._launchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchOptionsInput() {
    return this._launchOptions.internalValue;
  }

  // licensing_configs - computed: false, optional: true, required: false
  private _licensingConfigs = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigsOutputReference(this, "licensing_configs");
  public get licensingConfigs() {
    return this._licensingConfigs;
  }
  public putLicensingConfigs(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsLicensingConfigs) {
    this._licensingConfigs.internalValue = value;
  }
  public resetLicensingConfigs() {
    this._licensingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingConfigsInput() {
    return this._licensingConfigs.internalValue;
  }

  // placement_constraint_details - computed: false, optional: true, required: false
  private _placementConstraintDetails = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference(this, "placement_constraint_details");
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }
  public putPlacementConstraintDetails(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlacementConstraintDetails) {
    this._placementConstraintDetails.internalValue = value;
  }
  public resetPlacementConstraintDetails() {
    this._placementConstraintDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintDetailsInput() {
    return this._placementConstraintDetails.internalValue;
  }

  // platform_config - computed: false, optional: true, required: false
  private _platformConfig = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfigOutputReference(this, "platform_config");
  public get platformConfig() {
    return this._platformConfig;
  }
  public putPlatformConfig(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPlatformConfig) {
    this._platformConfig.internalValue = value;
  }
  public resetPlatformConfig() {
    this._platformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigInput() {
    return this._platformConfig.internalValue;
  }

  // preemptible_instance_config - computed: false, optional: true, required: false
  private _preemptibleInstanceConfig = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference(this, "preemptible_instance_config");
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }
  public putPreemptibleInstanceConfig(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsPreemptibleInstanceConfig) {
    this._preemptibleInstanceConfig.internalValue = value;
  }
  public resetPreemptibleInstanceConfig() {
    this._preemptibleInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInstanceConfigInput() {
    return this._preemptibleInstanceConfig.internalValue;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreInstanceConfigurationInstanceDetailsLaunchDetailsSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#device CoreInstanceConfiguration#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_pv_encryption_in_transit_enabled CoreInstanceConfiguration#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_read_only CoreInstanceConfiguration#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_shareable CoreInstanceConfiguration#is_shareable}
  */
  readonly isShareable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#use_chap CoreInstanceConfiguration#use_chap}
  */
  readonly useChap?: boolean | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    is_read_only: cdktf.booleanToTerraform(struct!.isReadOnly),
    is_shareable: cdktf.booleanToTerraform(struct!.isShareable),
    type: cdktf.stringToTerraform(struct!.type),
    use_chap: cdktf.booleanToTerraform(struct!.useChap),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_shareable: {
      value: cdktf.booleanToHclTerraform(struct!.isShareable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_chap: {
      value: cdktf.booleanToHclTerraform(struct!.useChap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._isReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadOnly = this._isReadOnly;
    }
    if (this._isShareable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isShareable = this._isShareable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useChap !== undefined) {
      hasAnyValues = true;
      internalValueResult.useChap = this._useChap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._displayName = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._isReadOnly = undefined;
      this._isShareable = undefined;
      this._type = undefined;
      this._useChap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._displayName = value.displayName;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._isReadOnly = value.isReadOnly;
      this._isShareable = value.isShareable;
      this._type = value.type;
      this._useChap = value.useChap;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_shareable - computed: true, optional: true, required: false
  private _isShareable?: boolean | cdktf.IResolvable; 
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }
  public set isShareable(value: boolean | cdktf.IResolvable) {
    this._isShareable = value;
  }
  public resetIsShareable() {
    this._isShareable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isShareableInput() {
    return this._isShareable;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_chap - computed: true, optional: true, required: false
  private _useChap?: boolean | cdktf.IResolvable; 
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
  public set useChap(value: boolean | cdktf.IResolvable) {
    this._useChap = value;
  }
  public resetUseChap() {
    this._useChap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useChapInput() {
    return this._useChap;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#autotune_type CoreInstanceConfiguration#autotune_type}
  */
  readonly autotuneType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#max_vpus_per_gb CoreInstanceConfiguration#max_vpus_per_gb}
  */
  readonly maxVpusPerGb?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotune_type: cdktf.stringToTerraform(struct!.autotuneType),
    max_vpus_per_gb: cdktf.stringToTerraform(struct!.maxVpusPerGb),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autotune_type: {
      value: cdktf.stringToHclTerraform(struct!.autotuneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.maxVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autotuneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotuneType = this._autotuneType;
    }
    if (this._maxVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVpusPerGb = this._maxVpusPerGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autotuneType = undefined;
      this._maxVpusPerGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autotuneType = value.autotuneType;
      this._maxVpusPerGb = value.maxVpusPerGb;
    }
  }

  // autotune_type - computed: false, optional: false, required: true
  private _autotuneType?: string; 
  public get autotuneType() {
    return this.getStringAttribute('autotune_type');
  }
  public set autotuneType(value: string) {
    this._autotuneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autotuneTypeInput() {
    return this._autotuneType;
  }

  // max_vpus_per_gb - computed: true, optional: true, required: false
  private _maxVpusPerGb?: string; 
  public get maxVpusPerGb() {
    return this.getStringAttribute('max_vpus_per_gb');
  }
  public set maxVpusPerGb(value: string) {
    this._maxVpusPerGb = value;
  }
  public resetMaxVpusPerGb() {
    this._maxVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVpusPerGbInput() {
    return this._maxVpusPerGb;
  }
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_domain CoreInstanceConfiguration#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._displayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._displayName = value.displayName;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#id CoreInstanceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_domain CoreInstanceConfiguration#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#backup_policy_id CoreInstanceConfiguration#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#cluster_placement_group_id CoreInstanceConfiguration#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_auto_tune_enabled CoreInstanceConfiguration#is_auto_tune_enabled}
  */
  readonly isAutoTuneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#kms_key_id CoreInstanceConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#size_in_gbs CoreInstanceConfiguration#size_in_gbs}
  */
  readonly sizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#vpus_per_gb CoreInstanceConfiguration#vpus_per_gb}
  */
  readonly vpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#xrc_kms_key_id CoreInstanceConfiguration#xrc_kms_key_id}
  */
  readonly xrcKmsKeyId?: string;
  /**
  * autotune_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#autotune_policies CoreInstanceConfiguration#autotune_policies}
  */
  readonly autotunePolicies?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies[] | cdktf.IResolvable;
  /**
  * block_volume_replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#block_volume_replicas CoreInstanceConfiguration#block_volume_replicas}
  */
  readonly blockVolumeReplicas?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source_details CoreInstanceConfiguration#source_details}
  */
  readonly sourceDetails?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails;
}

export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    backup_policy_id: cdktf.stringToTerraform(struct!.backupPolicyId),
    cluster_placement_group_id: cdktf.stringToTerraform(struct!.clusterPlacementGroupId),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_auto_tune_enabled: cdktf.booleanToTerraform(struct!.isAutoTuneEnabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    size_in_gbs: cdktf.stringToTerraform(struct!.sizeInGbs),
    vpus_per_gb: cdktf.stringToTerraform(struct!.vpusPerGb),
    xrc_kms_key_id: cdktf.stringToTerraform(struct!.xrcKmsKeyId),
    autotune_policies: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesToTerraform, true)(struct!.autotunePolicies),
    block_volume_replicas: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasToTerraform(struct!.blockVolumeReplicas),
    source_details: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsToTerraform(struct!.sourceDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.backupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_auto_tune_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoTuneEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.sizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.vpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xrc_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.xrcKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autotune_policies: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesToHclTerraform, true)(struct!.autotunePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesList",
    },
    block_volume_replicas: {
      value: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasToHclTerraform(struct!.blockVolumeReplicas),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasList",
    },
    source_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsToHclTerraform(struct!.sourceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._backupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicyId = this._backupPolicyId;
    }
    if (this._clusterPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPlacementGroupId = this._clusterPlacementGroupId;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isAutoTuneEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoTuneEnabled = this._isAutoTuneEnabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGbs = this._sizeInGbs;
    }
    if (this._vpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpusPerGb = this._vpusPerGb;
    }
    if (this._xrcKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.xrcKmsKeyId = this._xrcKmsKeyId;
    }
    if (this._autotunePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotunePolicies = this._autotunePolicies?.internalValue;
    }
    if (this._blockVolumeReplicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumeReplicas = this._blockVolumeReplicas?.internalValue;
    }
    if (this._sourceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetails = this._sourceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._backupPolicyId = undefined;
      this._clusterPlacementGroupId = undefined;
      this._compartmentId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._isAutoTuneEnabled = undefined;
      this._kmsKeyId = undefined;
      this._sizeInGbs = undefined;
      this._vpusPerGb = undefined;
      this._xrcKmsKeyId = undefined;
      this._autotunePolicies.internalValue = undefined;
      this._blockVolumeReplicas.internalValue = undefined;
      this._sourceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._backupPolicyId = value.backupPolicyId;
      this._clusterPlacementGroupId = value.clusterPlacementGroupId;
      this._compartmentId = value.compartmentId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._isAutoTuneEnabled = value.isAutoTuneEnabled;
      this._kmsKeyId = value.kmsKeyId;
      this._sizeInGbs = value.sizeInGbs;
      this._vpusPerGb = value.vpusPerGb;
      this._xrcKmsKeyId = value.xrcKmsKeyId;
      this._autotunePolicies.internalValue = value.autotunePolicies;
      this._blockVolumeReplicas.internalValue = value.blockVolumeReplicas;
      this._sourceDetails.internalValue = value.sourceDetails;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_policy_id - computed: true, optional: true, required: false
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  public resetBackupPolicyId() {
    this._backupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // is_auto_tune_enabled - computed: true, optional: true, required: false
  private _isAutoTuneEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoTuneEnabled() {
    return this.getBooleanAttribute('is_auto_tune_enabled');
  }
  public set isAutoTuneEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoTuneEnabled = value;
  }
  public resetIsAutoTuneEnabled() {
    this._isAutoTuneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoTuneEnabledInput() {
    return this._isAutoTuneEnabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // size_in_gbs - computed: true, optional: true, required: false
  private _sizeInGbs?: string; 
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }
  public set sizeInGbs(value: string) {
    this._sizeInGbs = value;
  }
  public resetSizeInGbs() {
    this._sizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbsInput() {
    return this._sizeInGbs;
  }

  // vpus_per_gb - computed: true, optional: true, required: false
  private _vpusPerGb?: string; 
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }
  public set vpusPerGb(value: string) {
    this._vpusPerGb = value;
  }
  public resetVpusPerGb() {
    this._vpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpusPerGbInput() {
    return this._vpusPerGb;
  }

  // xrc_kms_key_id - computed: true, optional: true, required: false
  private _xrcKmsKeyId?: string; 
  public get xrcKmsKeyId() {
    return this.getStringAttribute('xrc_kms_key_id');
  }
  public set xrcKmsKeyId(value: string) {
    this._xrcKmsKeyId = value;
  }
  public resetXrcKmsKeyId() {
    this._xrcKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrcKmsKeyIdInput() {
    return this._xrcKmsKeyId;
  }

  // autotune_policies - computed: false, optional: true, required: false
  private _autotunePolicies = new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesList(this, "autotune_policies", false);
  public get autotunePolicies() {
    return this._autotunePolicies;
  }
  public putAutotunePolicies(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies[] | cdktf.IResolvable) {
    this._autotunePolicies.internalValue = value;
  }
  public resetAutotunePolicies() {
    this._autotunePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotunePoliciesInput() {
    return this._autotunePolicies.internalValue;
  }

  // block_volume_replicas - computed: false, optional: true, required: false
  private _blockVolumeReplicas = new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference(this, "block_volume_replicas");
  public get blockVolumeReplicas() {
    return this._blockVolumeReplicas;
  }
  public putBlockVolumeReplicas(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas) {
    this._blockVolumeReplicas.internalValue = value;
  }
  public resetBlockVolumeReplicas() {
    this._blockVolumeReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeReplicasInput() {
    return this._blockVolumeReplicas.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#volume_id CoreInstanceConfiguration#volume_id}
  */
  readonly volumeId?: string;
  /**
  * attach_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#attach_details CoreInstanceConfiguration#attach_details}
  */
  readonly attachDetails?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails;
  /**
  * create_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create_details CoreInstanceConfiguration#create_details}
  */
  readonly createDetails?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails;
}

export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    attach_details: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsToTerraform(struct!.attachDetails),
    create_details: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsToTerraform(struct!.createDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attach_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsToHclTerraform(struct!.attachDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsList",
    },
    create_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsToHclTerraform(struct!.createDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._attachDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachDetails = this._attachDetails?.internalValue;
    }
    if (this._createDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDetails = this._createDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeId = undefined;
      this._attachDetails.internalValue = undefined;
      this._createDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeId = value.volumeId;
      this._attachDetails.internalValue = value.attachDetails;
      this._createDetails.internalValue = value.createDetails;
    }
  }

  // volume_id - computed: true, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // attach_details - computed: false, optional: true, required: false
  private _attachDetails = new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference(this, "attach_details");
  public get attachDetails() {
    return this._attachDetails;
  }
  public putAttachDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesAttachDetails) {
    this._attachDetails.internalValue = value;
  }
  public resetAttachDetails() {
    this._attachDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDetailsInput() {
    return this._attachDetails.internalValue;
  }

  // create_details - computed: false, optional: true, required: false
  private _createDetails = new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference(this, "create_details");
  public get createDetails() {
    return this._createDetails;
  }
  public putCreateDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesCreateDetails) {
    this._createDetails.internalValue = value;
  }
  public resetCreateDetails() {
    this._createDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDetailsInput() {
    return this._createDetails.internalValue;
  }
}

export class CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#desired_state CoreInstanceConfiguration#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#name CoreInstanceConfiguration#name}
  */
  readonly name?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._name = value.name;
    }
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
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#are_all_plugins_disabled CoreInstanceConfiguration#are_all_plugins_disabled}
  */
  readonly areAllPluginsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_management_disabled CoreInstanceConfiguration#is_management_disabled}
  */
  readonly isManagementDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_monitoring_disabled CoreInstanceConfiguration#is_monitoring_disabled}
  */
  readonly isMonitoringDisabled?: boolean | cdktf.IResolvable;
  /**
  * plugins_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#plugins_config CoreInstanceConfiguration#plugins_config}
  */
  readonly pluginsConfig?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_all_plugins_disabled: cdktf.booleanToTerraform(struct!.areAllPluginsDisabled),
    is_management_disabled: cdktf.booleanToTerraform(struct!.isManagementDisabled),
    is_monitoring_disabled: cdktf.booleanToTerraform(struct!.isMonitoringDisabled),
    plugins_config: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigToTerraform, true)(struct!.pluginsConfig),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_all_plugins_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areAllPluginsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_management_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isManagementDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_monitoring_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonitoringDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugins_config: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigToHclTerraform, true)(struct!.pluginsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areAllPluginsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areAllPluginsDisabled = this._areAllPluginsDisabled;
    }
    if (this._isManagementDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManagementDisabled = this._isManagementDisabled;
    }
    if (this._isMonitoringDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonitoringDisabled = this._isMonitoringDisabled;
    }
    if (this._pluginsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginsConfig = this._pluginsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areAllPluginsDisabled = undefined;
      this._isManagementDisabled = undefined;
      this._isMonitoringDisabled = undefined;
      this._pluginsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areAllPluginsDisabled = value.areAllPluginsDisabled;
      this._isManagementDisabled = value.isManagementDisabled;
      this._isMonitoringDisabled = value.isMonitoringDisabled;
      this._pluginsConfig.internalValue = value.pluginsConfig;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: true, required: false
  private _areAllPluginsDisabled?: boolean | cdktf.IResolvable; 
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }
  public set areAllPluginsDisabled(value: boolean | cdktf.IResolvable) {
    this._areAllPluginsDisabled = value;
  }
  public resetAreAllPluginsDisabled() {
    this._areAllPluginsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areAllPluginsDisabledInput() {
    return this._areAllPluginsDisabled;
  }

  // is_management_disabled - computed: true, optional: true, required: false
  private _isManagementDisabled?: boolean | cdktf.IResolvable; 
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }
  public set isManagementDisabled(value: boolean | cdktf.IResolvable) {
    this._isManagementDisabled = value;
  }
  public resetIsManagementDisabled() {
    this._isManagementDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagementDisabledInput() {
    return this._isManagementDisabled;
  }

  // is_monitoring_disabled - computed: true, optional: true, required: false
  private _isMonitoringDisabled?: boolean | cdktf.IResolvable; 
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }
  public set isMonitoringDisabled(value: boolean | cdktf.IResolvable) {
    this._isMonitoringDisabled = value;
  }
  public resetIsMonitoringDisabled() {
    this._isMonitoringDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonitoringDisabledInput() {
    return this._isMonitoringDisabled;
  }

  // plugins_config - computed: false, optional: true, required: false
  private _pluginsConfig = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
  public putPluginsConfig(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig[] | cdktf.IResolvable) {
    this._pluginsConfig.internalValue = value;
  }
  public resetPluginsConfig() {
    this._pluginsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsConfigInput() {
    return this._pluginsConfig.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_live_migration_preferred CoreInstanceConfiguration#is_live_migration_preferred}
  */
  readonly isLiveMigrationPreferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#recovery_action CoreInstanceConfiguration#recovery_action}
  */
  readonly recoveryAction?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_live_migration_preferred: cdktf.booleanToTerraform(struct!.isLiveMigrationPreferred),
    recovery_action: cdktf.stringToTerraform(struct!.recoveryAction),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_live_migration_preferred: {
      value: cdktf.booleanToHclTerraform(struct!.isLiveMigrationPreferred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recovery_action: {
      value: cdktf.stringToHclTerraform(struct!.recoveryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLiveMigrationPreferred !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLiveMigrationPreferred = this._isLiveMigrationPreferred;
    }
    if (this._recoveryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryAction = this._recoveryAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLiveMigrationPreferred = undefined;
      this._recoveryAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLiveMigrationPreferred = value.isLiveMigrationPreferred;
      this._recoveryAction = value.recoveryAction;
    }
  }

  // is_live_migration_preferred - computed: true, optional: true, required: false
  private _isLiveMigrationPreferred?: boolean | cdktf.IResolvable; 
  public get isLiveMigrationPreferred() {
    return this.getBooleanAttribute('is_live_migration_preferred');
  }
  public set isLiveMigrationPreferred(value: boolean | cdktf.IResolvable) {
    this._isLiveMigrationPreferred = value;
  }
  public resetIsLiveMigrationPreferred() {
    this._isLiveMigrationPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLiveMigrationPreferredInput() {
    return this._isLiveMigrationPreferred;
  }

  // recovery_action - computed: true, optional: true, required: false
  private _recoveryAction?: string; 
  public get recoveryAction() {
    return this.getStringAttribute('recovery_action');
  }
  public set recoveryAction(value: string) {
    this._recoveryAction = value;
  }
  public resetRecoveryAction() {
    this._recoveryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryActionInput() {
    return this._recoveryAction;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address CoreInstanceConfiguration#ipv6address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6subnet_cidr CoreInstanceConfiguration#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_ipv6ip CoreInstanceConfiguration#assign_ipv6ip}
  */
  readonly assignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_private_dns_record CoreInstanceConfiguration#assign_private_dns_record}
  */
  readonly assignPrivateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_public_ip CoreInstanceConfiguration#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#hostname_label CoreInstanceConfiguration#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nsg_ids CoreInstanceConfiguration#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#private_ip CoreInstanceConfiguration#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#security_attributes CoreInstanceConfiguration#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#skip_source_dest_check CoreInstanceConfiguration#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_cidr CoreInstanceConfiguration#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_id CoreInstanceConfiguration#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address_ipv6subnet_cidr_pair_details CoreInstanceConfiguration#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ipv6ip: cdktf.booleanToTerraform(struct!.assignIpv6Ip),
    assign_private_dns_record: cdktf.booleanToTerraform(struct!.assignPrivateDnsRecord),
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_private_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.assignPrivateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpv6Ip = this._assignIpv6Ip;
    }
    if (this._assignPrivateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPrivateDnsRecord = this._assignPrivateDnsRecord;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIpv6Ip = undefined;
      this._assignPrivateDnsRecord = undefined;
      this._assignPublicIp = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._securityAttributes = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIpv6Ip = value.assignIpv6Ip;
      this._assignPrivateDnsRecord = value.assignPrivateDnsRecord;
      this._assignPublicIp = value.assignPublicIp;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._securityAttributes = value.securityAttributes;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // assign_ipv6ip - computed: true, optional: true, required: false
  private _assignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }
  public set assignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Ip = value;
  }
  public resetAssignIpv6Ip() {
    this._assignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6IpInput() {
    return this._assignIpv6Ip;
  }

  // assign_private_dns_record - computed: true, optional: true, required: false
  private _assignPrivateDnsRecord?: boolean | cdktf.IResolvable; 
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }
  public set assignPrivateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._assignPrivateDnsRecord = value;
  }
  public resetAssignPrivateDnsRecord() {
    this._assignPrivateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPrivateDnsRecordInput() {
    return this._assignPrivateDnsRecord;
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
  }

  // subnet_cidr - computed: true, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#are_legacy_imds_endpoints_disabled CoreInstanceConfiguration#are_legacy_imds_endpoints_disabled}
  */
  readonly areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_legacy_imds_endpoints_disabled: cdktf.booleanToTerraform(struct!.areLegacyImdsEndpointsDisabled),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_legacy_imds_endpoints_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.areLegacyImdsEndpointsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areLegacyImdsEndpointsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areLegacyImdsEndpointsDisabled = this._areLegacyImdsEndpointsDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areLegacyImdsEndpointsDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areLegacyImdsEndpointsDisabled = value.areLegacyImdsEndpointsDisabled;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: true, required: false
  private _areLegacyImdsEndpointsDisabled?: boolean | cdktf.IResolvable; 
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
  public set areLegacyImdsEndpointsDisabled(value: boolean | cdktf.IResolvable) {
    this._areLegacyImdsEndpointsDisabled = value;
  }
  public resetAreLegacyImdsEndpointsDisabled() {
    this._areLegacyImdsEndpointsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areLegacyImdsEndpointsDisabledInput() {
    return this._areLegacyImdsEndpointsDisabled;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_type CoreInstanceConfiguration#boot_volume_type}
  */
  readonly bootVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#firmware CoreInstanceConfiguration#firmware}
  */
  readonly firmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_consistent_volume_naming_enabled CoreInstanceConfiguration#is_consistent_volume_naming_enabled}
  */
  readonly isConsistentVolumeNamingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_pv_encryption_in_transit_enabled CoreInstanceConfiguration#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#network_type CoreInstanceConfiguration#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#remote_data_volume_type CoreInstanceConfiguration#remote_data_volume_type}
  */
  readonly remoteDataVolumeType?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_type: cdktf.stringToTerraform(struct!.bootVolumeType),
    firmware: cdktf.stringToTerraform(struct!.firmware),
    is_consistent_volume_naming_enabled: cdktf.booleanToTerraform(struct!.isConsistentVolumeNamingEnabled),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    remote_data_volume_type: cdktf.stringToTerraform(struct!.remoteDataVolumeType),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware: {
      value: cdktf.stringToHclTerraform(struct!.firmware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_consistent_volume_naming_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isConsistentVolumeNamingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_data_volume_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteDataVolumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeType = this._bootVolumeType;
    }
    if (this._firmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmware = this._firmware;
    }
    if (this._isConsistentVolumeNamingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConsistentVolumeNamingEnabled = this._isConsistentVolumeNamingEnabled;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._remoteDataVolumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDataVolumeType = this._remoteDataVolumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeType = undefined;
      this._firmware = undefined;
      this._isConsistentVolumeNamingEnabled = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._networkType = undefined;
      this._remoteDataVolumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeType = value.bootVolumeType;
      this._firmware = value.firmware;
      this._isConsistentVolumeNamingEnabled = value.isConsistentVolumeNamingEnabled;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._networkType = value.networkType;
      this._remoteDataVolumeType = value.remoteDataVolumeType;
    }
  }

  // boot_volume_type - computed: true, optional: true, required: false
  private _bootVolumeType?: string; 
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }
  public set bootVolumeType(value: string) {
    this._bootVolumeType = value;
  }
  public resetBootVolumeType() {
    this._bootVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeTypeInput() {
    return this._bootVolumeType;
  }

  // firmware - computed: true, optional: true, required: false
  private _firmware?: string; 
  public get firmware() {
    return this.getStringAttribute('firmware');
  }
  public set firmware(value: string) {
    this._firmware = value;
  }
  public resetFirmware() {
    this._firmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInput() {
    return this._firmware;
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: true, required: false
  private _isConsistentVolumeNamingEnabled?: boolean | cdktf.IResolvable; 
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }
  public set isConsistentVolumeNamingEnabled(value: boolean | cdktf.IResolvable) {
    this._isConsistentVolumeNamingEnabled = value;
  }
  public resetIsConsistentVolumeNamingEnabled() {
    this._isConsistentVolumeNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConsistentVolumeNamingEnabledInput() {
    return this._isConsistentVolumeNamingEnabled;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // remote_data_volume_type - computed: true, optional: true, required: false
  private _remoteDataVolumeType?: string; 
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
  public set remoteDataVolumeType(value: string) {
    this._remoteDataVolumeType = value;
  }
  public resetRemoteDataVolumeType() {
    this._remoteDataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDataVolumeTypeInput() {
    return this._remoteDataVolumeType;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#license_type CoreInstanceConfiguration#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseType = value.licenseType;
      this._type = value.type;
    }
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compute_host_group_id CoreInstanceConfiguration#compute_host_group_id}
  */
  readonly computeHostGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_host_group_id: cdktf.stringToTerraform(struct!.computeHostGroupId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_host_group_id: {
      value: cdktf.stringToHclTerraform(struct!.computeHostGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeHostGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeHostGroupId = this._computeHostGroupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeHostGroupId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeHostGroupId = value.computeHostGroupId;
      this._type = value.type;
    }
  }

  // compute_host_group_id - computed: false, optional: false, required: true
  private _computeHostGroupId?: string; 
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }
  public set computeHostGroupId(value: string) {
    this._computeHostGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeHostGroupIdInput() {
    return this._computeHostGroupId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#are_virtual_instructions_enabled CoreInstanceConfiguration#are_virtual_instructions_enabled}
  */
  readonly areVirtualInstructionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_access_control_service_enabled CoreInstanceConfiguration#is_access_control_service_enabled}
  */
  readonly isAccessControlServiceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_input_output_memory_management_unit_enabled CoreInstanceConfiguration#is_input_output_memory_management_unit_enabled}
  */
  readonly isInputOutputMemoryManagementUnitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_measured_boot_enabled CoreInstanceConfiguration#is_measured_boot_enabled}
  */
  readonly isMeasuredBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_memory_encryption_enabled CoreInstanceConfiguration#is_memory_encryption_enabled}
  */
  readonly isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_secure_boot_enabled CoreInstanceConfiguration#is_secure_boot_enabled}
  */
  readonly isSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_symmetric_multi_threading_enabled CoreInstanceConfiguration#is_symmetric_multi_threading_enabled}
  */
  readonly isSymmetricMultiThreadingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_trusted_platform_module_enabled CoreInstanceConfiguration#is_trusted_platform_module_enabled}
  */
  readonly isTrustedPlatformModuleEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#numa_nodes_per_socket CoreInstanceConfiguration#numa_nodes_per_socket}
  */
  readonly numaNodesPerSocket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#percentage_of_cores_enabled CoreInstanceConfiguration#percentage_of_cores_enabled}
  */
  readonly percentageOfCoresEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_virtual_instructions_enabled: cdktf.booleanToTerraform(struct!.areVirtualInstructionsEnabled),
    is_access_control_service_enabled: cdktf.booleanToTerraform(struct!.isAccessControlServiceEnabled),
    is_input_output_memory_management_unit_enabled: cdktf.booleanToTerraform(struct!.isInputOutputMemoryManagementUnitEnabled),
    is_measured_boot_enabled: cdktf.booleanToTerraform(struct!.isMeasuredBootEnabled),
    is_memory_encryption_enabled: cdktf.booleanToTerraform(struct!.isMemoryEncryptionEnabled),
    is_secure_boot_enabled: cdktf.booleanToTerraform(struct!.isSecureBootEnabled),
    is_symmetric_multi_threading_enabled: cdktf.booleanToTerraform(struct!.isSymmetricMultiThreadingEnabled),
    is_trusted_platform_module_enabled: cdktf.booleanToTerraform(struct!.isTrustedPlatformModuleEnabled),
    numa_nodes_per_socket: cdktf.stringToTerraform(struct!.numaNodesPerSocket),
    percentage_of_cores_enabled: cdktf.numberToTerraform(struct!.percentageOfCoresEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_virtual_instructions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.areVirtualInstructionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_access_control_service_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAccessControlServiceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_input_output_memory_management_unit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isInputOutputMemoryManagementUnitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_measured_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMeasuredBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_memory_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMemoryEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSecureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_symmetric_multi_threading_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSymmetricMultiThreadingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_trusted_platform_module_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isTrustedPlatformModuleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    numa_nodes_per_socket: {
      value: cdktf.stringToHclTerraform(struct!.numaNodesPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_of_cores_enabled: {
      value: cdktf.numberToHclTerraform(struct!.percentageOfCoresEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areVirtualInstructionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.areVirtualInstructionsEnabled = this._areVirtualInstructionsEnabled;
    }
    if (this._isAccessControlServiceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAccessControlServiceEnabled = this._isAccessControlServiceEnabled;
    }
    if (this._isInputOutputMemoryManagementUnitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInputOutputMemoryManagementUnitEnabled = this._isInputOutputMemoryManagementUnitEnabled;
    }
    if (this._isMeasuredBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMeasuredBootEnabled = this._isMeasuredBootEnabled;
    }
    if (this._isMemoryEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMemoryEncryptionEnabled = this._isMemoryEncryptionEnabled;
    }
    if (this._isSecureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecureBootEnabled = this._isSecureBootEnabled;
    }
    if (this._isSymmetricMultiThreadingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSymmetricMultiThreadingEnabled = this._isSymmetricMultiThreadingEnabled;
    }
    if (this._isTrustedPlatformModuleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTrustedPlatformModuleEnabled = this._isTrustedPlatformModuleEnabled;
    }
    if (this._numaNodesPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numaNodesPerSocket = this._numaNodesPerSocket;
    }
    if (this._percentageOfCoresEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageOfCoresEnabled = this._percentageOfCoresEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areVirtualInstructionsEnabled = undefined;
      this._isAccessControlServiceEnabled = undefined;
      this._isInputOutputMemoryManagementUnitEnabled = undefined;
      this._isMeasuredBootEnabled = undefined;
      this._isMemoryEncryptionEnabled = undefined;
      this._isSecureBootEnabled = undefined;
      this._isSymmetricMultiThreadingEnabled = undefined;
      this._isTrustedPlatformModuleEnabled = undefined;
      this._numaNodesPerSocket = undefined;
      this._percentageOfCoresEnabled = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areVirtualInstructionsEnabled = value.areVirtualInstructionsEnabled;
      this._isAccessControlServiceEnabled = value.isAccessControlServiceEnabled;
      this._isInputOutputMemoryManagementUnitEnabled = value.isInputOutputMemoryManagementUnitEnabled;
      this._isMeasuredBootEnabled = value.isMeasuredBootEnabled;
      this._isMemoryEncryptionEnabled = value.isMemoryEncryptionEnabled;
      this._isSecureBootEnabled = value.isSecureBootEnabled;
      this._isSymmetricMultiThreadingEnabled = value.isSymmetricMultiThreadingEnabled;
      this._isTrustedPlatformModuleEnabled = value.isTrustedPlatformModuleEnabled;
      this._numaNodesPerSocket = value.numaNodesPerSocket;
      this._percentageOfCoresEnabled = value.percentageOfCoresEnabled;
      this._type = value.type;
    }
  }

  // are_virtual_instructions_enabled - computed: true, optional: true, required: false
  private _areVirtualInstructionsEnabled?: boolean | cdktf.IResolvable; 
  public get areVirtualInstructionsEnabled() {
    return this.getBooleanAttribute('are_virtual_instructions_enabled');
  }
  public set areVirtualInstructionsEnabled(value: boolean | cdktf.IResolvable) {
    this._areVirtualInstructionsEnabled = value;
  }
  public resetAreVirtualInstructionsEnabled() {
    this._areVirtualInstructionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areVirtualInstructionsEnabledInput() {
    return this._areVirtualInstructionsEnabled;
  }

  // is_access_control_service_enabled - computed: true, optional: true, required: false
  private _isAccessControlServiceEnabled?: boolean | cdktf.IResolvable; 
  public get isAccessControlServiceEnabled() {
    return this.getBooleanAttribute('is_access_control_service_enabled');
  }
  public set isAccessControlServiceEnabled(value: boolean | cdktf.IResolvable) {
    this._isAccessControlServiceEnabled = value;
  }
  public resetIsAccessControlServiceEnabled() {
    this._isAccessControlServiceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessControlServiceEnabledInput() {
    return this._isAccessControlServiceEnabled;
  }

  // is_input_output_memory_management_unit_enabled - computed: true, optional: true, required: false
  private _isInputOutputMemoryManagementUnitEnabled?: boolean | cdktf.IResolvable; 
  public get isInputOutputMemoryManagementUnitEnabled() {
    return this.getBooleanAttribute('is_input_output_memory_management_unit_enabled');
  }
  public set isInputOutputMemoryManagementUnitEnabled(value: boolean | cdktf.IResolvable) {
    this._isInputOutputMemoryManagementUnitEnabled = value;
  }
  public resetIsInputOutputMemoryManagementUnitEnabled() {
    this._isInputOutputMemoryManagementUnitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInputOutputMemoryManagementUnitEnabledInput() {
    return this._isInputOutputMemoryManagementUnitEnabled;
  }

  // is_measured_boot_enabled - computed: true, optional: true, required: false
  private _isMeasuredBootEnabled?: boolean | cdktf.IResolvable; 
  public get isMeasuredBootEnabled() {
    return this.getBooleanAttribute('is_measured_boot_enabled');
  }
  public set isMeasuredBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isMeasuredBootEnabled = value;
  }
  public resetIsMeasuredBootEnabled() {
    this._isMeasuredBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMeasuredBootEnabledInput() {
    return this._isMeasuredBootEnabled;
  }

  // is_memory_encryption_enabled - computed: true, optional: true, required: false
  private _isMemoryEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }
  public set isMemoryEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._isMemoryEncryptionEnabled = value;
  }
  public resetIsMemoryEncryptionEnabled() {
    this._isMemoryEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemoryEncryptionEnabledInput() {
    return this._isMemoryEncryptionEnabled;
  }

  // is_secure_boot_enabled - computed: true, optional: true, required: false
  private _isSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }
  public set isSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecureBootEnabled = value;
  }
  public resetIsSecureBootEnabled() {
    this._isSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootEnabledInput() {
    return this._isSecureBootEnabled;
  }

  // is_symmetric_multi_threading_enabled - computed: true, optional: true, required: false
  private _isSymmetricMultiThreadingEnabled?: boolean | cdktf.IResolvable; 
  public get isSymmetricMultiThreadingEnabled() {
    return this.getBooleanAttribute('is_symmetric_multi_threading_enabled');
  }
  public set isSymmetricMultiThreadingEnabled(value: boolean | cdktf.IResolvable) {
    this._isSymmetricMultiThreadingEnabled = value;
  }
  public resetIsSymmetricMultiThreadingEnabled() {
    this._isSymmetricMultiThreadingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSymmetricMultiThreadingEnabledInput() {
    return this._isSymmetricMultiThreadingEnabled;
  }

  // is_trusted_platform_module_enabled - computed: true, optional: true, required: false
  private _isTrustedPlatformModuleEnabled?: boolean | cdktf.IResolvable; 
  public get isTrustedPlatformModuleEnabled() {
    return this.getBooleanAttribute('is_trusted_platform_module_enabled');
  }
  public set isTrustedPlatformModuleEnabled(value: boolean | cdktf.IResolvable) {
    this._isTrustedPlatformModuleEnabled = value;
  }
  public resetIsTrustedPlatformModuleEnabled() {
    this._isTrustedPlatformModuleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTrustedPlatformModuleEnabledInput() {
    return this._isTrustedPlatformModuleEnabled;
  }

  // numa_nodes_per_socket - computed: true, optional: true, required: false
  private _numaNodesPerSocket?: string; 
  public get numaNodesPerSocket() {
    return this.getStringAttribute('numa_nodes_per_socket');
  }
  public set numaNodesPerSocket(value: string) {
    this._numaNodesPerSocket = value;
  }
  public resetNumaNodesPerSocket() {
    this._numaNodesPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaNodesPerSocketInput() {
    return this._numaNodesPerSocket;
  }

  // percentage_of_cores_enabled - computed: true, optional: true, required: false
  private _percentageOfCoresEnabled?: number; 
  public get percentageOfCoresEnabled() {
    return this.getNumberAttribute('percentage_of_cores_enabled');
  }
  public set percentageOfCoresEnabled(value: number) {
    this._percentageOfCoresEnabled = value;
  }
  public resetPercentageOfCoresEnabled() {
    this._percentageOfCoresEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageOfCoresEnabledInput() {
    return this._percentageOfCoresEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preserve_boot_volume CoreInstanceConfiguration#preserve_boot_volume}
  */
  readonly preserveBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#type CoreInstanceConfiguration#type}
  */
  readonly type: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_boot_volume: cdktf.booleanToTerraform(struct!.preserveBootVolume),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_boot_volume: {
      value: cdktf.booleanToHclTerraform(struct!.preserveBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveBootVolume = this._preserveBootVolume;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveBootVolume = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveBootVolume = value.preserveBootVolume;
      this._type = value.type;
    }
  }

  // preserve_boot_volume - computed: true, optional: true, required: false
  private _preserveBootVolume?: boolean | cdktf.IResolvable; 
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }
  public set preserveBootVolume(value: boolean | cdktf.IResolvable) {
    this._preserveBootVolume = value;
  }
  public resetPreserveBootVolume() {
    this._preserveBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveBootVolumeInput() {
    return this._preserveBootVolume;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig {
  /**
  * preemption_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preemption_action CoreInstanceConfiguration#preemption_action}
  */
  readonly preemptionAction?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_action: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToTerraform(struct!.preemptionAction),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_action: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct!.preemptionAction),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionAction = this._preemptionAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptionAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptionAction.internalValue = value.preemptionAction;
    }
  }

  // preemption_action - computed: false, optional: true, required: false
  private _preemptionAction = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference(this, "preemption_action");
  public get preemptionAction() {
    return this._preemptionAction;
  }
  public putPreemptionAction(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction) {
    this._preemptionAction.internalValue = value;
  }
  public resetPreemptionAction() {
    this._preemptionAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionActionInput() {
    return this._preemptionAction.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#baseline_ocpu_utilization CoreInstanceConfiguration#baseline_ocpu_utilization}
  */
  readonly baselineOcpuUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#memory_in_gbs CoreInstanceConfiguration#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nvmes CoreInstanceConfiguration#nvmes}
  */
  readonly nvmes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ocpus CoreInstanceConfiguration#ocpus}
  */
  readonly ocpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#resource_management CoreInstanceConfiguration#resource_management}
  */
  readonly resourceManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#vcpus CoreInstanceConfiguration#vcpus}
  */
  readonly vcpus?: number;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_ocpu_utilization: cdktf.stringToTerraform(struct!.baselineOcpuUtilization),
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    nvmes: cdktf.numberToTerraform(struct!.nvmes),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
    resource_management: cdktf.stringToTerraform(struct!.resourceManagement),
    vcpus: cdktf.numberToTerraform(struct!.vcpus),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_ocpu_utilization: {
      value: cdktf.stringToHclTerraform(struct!.baselineOcpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nvmes: {
      value: cdktf.numberToHclTerraform(struct!.nvmes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_management: {
      value: cdktf.stringToHclTerraform(struct!.resourceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpus: {
      value: cdktf.numberToHclTerraform(struct!.vcpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineOcpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineOcpuUtilization = this._baselineOcpuUtilization;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._nvmes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvmes = this._nvmes;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    if (this._resourceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagement = this._resourceManagement;
    }
    if (this._vcpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpus = this._vcpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineOcpuUtilization = undefined;
      this._memoryInGbs = undefined;
      this._nvmes = undefined;
      this._ocpus = undefined;
      this._resourceManagement = undefined;
      this._vcpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineOcpuUtilization = value.baselineOcpuUtilization;
      this._memoryInGbs = value.memoryInGbs;
      this._nvmes = value.nvmes;
      this._ocpus = value.ocpus;
      this._resourceManagement = value.resourceManagement;
      this._vcpus = value.vcpus;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: true, required: false
  private _baselineOcpuUtilization?: string; 
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }
  public set baselineOcpuUtilization(value: string) {
    this._baselineOcpuUtilization = value;
  }
  public resetBaselineOcpuUtilization() {
    this._baselineOcpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineOcpuUtilizationInput() {
    return this._baselineOcpuUtilization;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // nvmes - computed: true, optional: true, required: false
  private _nvmes?: number; 
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }
  public set nvmes(value: number) {
    this._nvmes = value;
  }
  public resetNvmes() {
    this._nvmes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvmesInput() {
    return this._nvmes;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }

  // resource_management - computed: true, optional: true, required: false
  private _resourceManagement?: string; 
  public get resourceManagement() {
    return this.getStringAttribute('resource_management');
  }
  public set resourceManagement(value: string) {
    this._resourceManagement = value;
  }
  public resetResourceManagement() {
    this._resourceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagementInput() {
    return this._resourceManagement;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags_filter CoreInstanceConfiguration#defined_tags_filter}
  */
  readonly definedTagsFilter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#operating_system CoreInstanceConfiguration#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#operating_system_version CoreInstanceConfiguration#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    defined_tags_filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTagsFilter),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags_filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTagsFilter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._definedTagsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTagsFilter = this._definedTagsFilter;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._definedTagsFilter = undefined;
      this._operatingSystem = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._definedTagsFilter = value.definedTagsFilter;
      this._operatingSystem = value.operatingSystem;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags_filter - computed: true, optional: true, required: false
  private _definedTagsFilter?: { [key: string]: string }; 
  public get definedTagsFilter() {
    return this.getStringMapAttribute('defined_tags_filter');
  }
  public set definedTagsFilter(value: { [key: string]: string }) {
    this._definedTagsFilter = value;
  }
  public resetDefinedTagsFilter() {
    this._definedTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsFilterInput() {
    return this._definedTagsFilter;
  }

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // operating_system_version - computed: true, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_id CoreInstanceConfiguration#boot_volume_id}
  */
  readonly bootVolumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_size_in_gbs CoreInstanceConfiguration#boot_volume_size_in_gbs}
  */
  readonly bootVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#boot_volume_vpus_per_gb CoreInstanceConfiguration#boot_volume_vpus_per_gb}
  */
  readonly bootVolumeVpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#image_id CoreInstanceConfiguration#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#kms_key_id CoreInstanceConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source_type CoreInstanceConfiguration#source_type}
  */
  readonly sourceType: string;
  /**
  * instance_source_image_filter_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_source_image_filter_details CoreInstanceConfiguration#instance_source_image_filter_details}
  */
  readonly instanceSourceImageFilterDetails?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_id: cdktf.stringToTerraform(struct!.bootVolumeId),
    boot_volume_size_in_gbs: cdktf.stringToTerraform(struct!.bootVolumeSizeInGbs),
    boot_volume_vpus_per_gb: cdktf.stringToTerraform(struct!.bootVolumeVpusPerGb),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    instance_source_image_filter_details: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct!.instanceSourceImageFilterDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_id: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_volume_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_source_image_filter_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct!.instanceSourceImageFilterDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeId = this._bootVolumeId;
    }
    if (this._bootVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSizeInGbs = this._bootVolumeSizeInGbs;
    }
    if (this._bootVolumeVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeVpusPerGb = this._bootVolumeVpusPerGb;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._instanceSourceImageFilterDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSourceImageFilterDetails = this._instanceSourceImageFilterDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeId = undefined;
      this._bootVolumeSizeInGbs = undefined;
      this._bootVolumeVpusPerGb = undefined;
      this._imageId = undefined;
      this._kmsKeyId = undefined;
      this._sourceType = undefined;
      this._instanceSourceImageFilterDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeId = value.bootVolumeId;
      this._bootVolumeSizeInGbs = value.bootVolumeSizeInGbs;
      this._bootVolumeVpusPerGb = value.bootVolumeVpusPerGb;
      this._imageId = value.imageId;
      this._kmsKeyId = value.kmsKeyId;
      this._sourceType = value.sourceType;
      this._instanceSourceImageFilterDetails.internalValue = value.instanceSourceImageFilterDetails;
    }
  }

  // boot_volume_id - computed: true, optional: true, required: false
  private _bootVolumeId?: string; 
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }
  public set bootVolumeId(value: string) {
    this._bootVolumeId = value;
  }
  public resetBootVolumeId() {
    this._bootVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeIdInput() {
    return this._bootVolumeId;
  }

  // boot_volume_size_in_gbs - computed: true, optional: true, required: false
  private _bootVolumeSizeInGbs?: string; 
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }
  public set bootVolumeSizeInGbs(value: string) {
    this._bootVolumeSizeInGbs = value;
  }
  public resetBootVolumeSizeInGbs() {
    this._bootVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInGbsInput() {
    return this._bootVolumeSizeInGbs;
  }

  // boot_volume_vpus_per_gb - computed: true, optional: true, required: false
  private _bootVolumeVpusPerGb?: string; 
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }
  public set bootVolumeVpusPerGb(value: string) {
    this._bootVolumeVpusPerGb = value;
  }
  public resetBootVolumeVpusPerGb() {
    this._bootVolumeVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeVpusPerGbInput() {
    return this._bootVolumeVpusPerGb;
  }

  // image_id - computed: true, optional: true, required: false
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // instance_source_image_filter_details - computed: false, optional: true, required: false
  private _instanceSourceImageFilterDetails = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference(this, "instance_source_image_filter_details");
  public get instanceSourceImageFilterDetails() {
    return this._instanceSourceImageFilterDetails;
  }
  public putInstanceSourceImageFilterDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails) {
    this._instanceSourceImageFilterDetails.internalValue = value;
  }
  public resetInstanceSourceImageFilterDetails() {
    this._instanceSourceImageFilterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSourceImageFilterDetailsInput() {
    return this._instanceSourceImageFilterDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_domain CoreInstanceConfiguration#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#capacity_reservation_id CoreInstanceConfiguration#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#cluster_placement_group_id CoreInstanceConfiguration#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compartment_id CoreInstanceConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#compute_cluster_id CoreInstanceConfiguration#compute_cluster_id}
  */
  readonly computeClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#dedicated_vm_host_id CoreInstanceConfiguration#dedicated_vm_host_id}
  */
  readonly dedicatedVmHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#extended_metadata CoreInstanceConfiguration#extended_metadata}
  */
  readonly extendedMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#fault_domain CoreInstanceConfiguration#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipxe_script CoreInstanceConfiguration#ipxe_script}
  */
  readonly ipxeScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_ai_enterprise_enabled CoreInstanceConfiguration#is_ai_enterprise_enabled}
  */
  readonly isAiEnterpriseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#is_pv_encryption_in_transit_enabled CoreInstanceConfiguration#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#launch_mode CoreInstanceConfiguration#launch_mode}
  */
  readonly launchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#metadata CoreInstanceConfiguration#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preferred_maintenance_action CoreInstanceConfiguration#preferred_maintenance_action}
  */
  readonly preferredMaintenanceAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#security_attributes CoreInstanceConfiguration#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#shape CoreInstanceConfiguration#shape}
  */
  readonly shape?: string;
  /**
  * agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#agent_config CoreInstanceConfiguration#agent_config}
  */
  readonly agentConfig?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig;
  /**
  * availability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#availability_config CoreInstanceConfiguration#availability_config}
  */
  readonly availabilityConfig?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig;
  /**
  * create_vnic_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create_vnic_details CoreInstanceConfiguration#create_vnic_details}
  */
  readonly createVnicDetails?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails;
  /**
  * instance_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_options CoreInstanceConfiguration#instance_options}
  */
  readonly instanceOptions?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions;
  /**
  * launch_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#launch_options CoreInstanceConfiguration#launch_options}
  */
  readonly launchOptions?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions;
  /**
  * licensing_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#licensing_configs CoreInstanceConfiguration#licensing_configs}
  */
  readonly licensingConfigs?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs;
  /**
  * placement_constraint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#placement_constraint_details CoreInstanceConfiguration#placement_constraint_details}
  */
  readonly placementConstraintDetails?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails;
  /**
  * platform_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#platform_config CoreInstanceConfiguration#platform_config}
  */
  readonly platformConfig?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig;
  /**
  * preemptible_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#preemptible_instance_config CoreInstanceConfiguration#preemptible_instance_config}
  */
  readonly preemptibleInstanceConfig?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#shape_config CoreInstanceConfiguration#shape_config}
  */
  readonly shapeConfig?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#source_details CoreInstanceConfiguration#source_details}
  */
  readonly sourceDetails?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails;
}

export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    cluster_placement_group_id: cdktf.stringToTerraform(struct!.clusterPlacementGroupId),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    compute_cluster_id: cdktf.stringToTerraform(struct!.computeClusterId),
    dedicated_vm_host_id: cdktf.stringToTerraform(struct!.dedicatedVmHostId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    extended_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extendedMetadata),
    fault_domain: cdktf.stringToTerraform(struct!.faultDomain),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    ipxe_script: cdktf.stringToTerraform(struct!.ipxeScript),
    is_ai_enterprise_enabled: cdktf.booleanToTerraform(struct!.isAiEnterpriseEnabled),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    launch_mode: cdktf.stringToTerraform(struct!.launchMode),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    preferred_maintenance_action: cdktf.stringToTerraform(struct!.preferredMaintenanceAction),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    shape: cdktf.stringToTerraform(struct!.shape),
    agent_config: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigToTerraform(struct!.agentConfig),
    availability_config: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigToTerraform(struct!.availabilityConfig),
    create_vnic_details: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsToTerraform(struct!.createVnicDetails),
    instance_options: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsToTerraform(struct!.instanceOptions),
    launch_options: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsToTerraform(struct!.launchOptions),
    licensing_configs: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsToTerraform(struct!.licensingConfigs),
    placement_constraint_details: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsToTerraform(struct!.placementConstraintDetails),
    platform_config: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigToTerraform(struct!.platformConfig),
    preemptible_instance_config: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigToTerraform(struct!.preemptibleInstanceConfig),
    shape_config: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigToTerraform(struct!.shapeConfig),
    source_details: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsToTerraform(struct!.sourceDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_placement_group_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterPlacementGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.computeClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedicated_vm_host_id: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedVmHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extendedMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fault_domain: {
      value: cdktf.stringToHclTerraform(struct!.faultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ipxe_script: {
      value: cdktf.stringToHclTerraform(struct!.ipxeScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ai_enterprise_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAiEnterpriseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    launch_mode: {
      value: cdktf.stringToHclTerraform(struct!.launchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    preferred_maintenance_action: {
      value: cdktf.stringToHclTerraform(struct!.preferredMaintenanceAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    shape: {
      value: cdktf.stringToHclTerraform(struct!.shape),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_config: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigToHclTerraform(struct!.agentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigList",
    },
    availability_config: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigToHclTerraform(struct!.availabilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigList",
    },
    create_vnic_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsToHclTerraform(struct!.createVnicDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsList",
    },
    instance_options: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsToHclTerraform(struct!.instanceOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsList",
    },
    launch_options: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsToHclTerraform(struct!.launchOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsList",
    },
    licensing_configs: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsToHclTerraform(struct!.licensingConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsList",
    },
    placement_constraint_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsToHclTerraform(struct!.placementConstraintDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsList",
    },
    platform_config: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigToHclTerraform(struct!.platformConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigList",
    },
    preemptible_instance_config: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigToHclTerraform(struct!.preemptibleInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigList",
    },
    shape_config: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigToHclTerraform(struct!.shapeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigList",
    },
    source_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsToHclTerraform(struct!.sourceDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._clusterPlacementGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPlacementGroupId = this._clusterPlacementGroupId;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._computeClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeClusterId = this._computeClusterId;
    }
    if (this._dedicatedVmHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedVmHostId = this._dedicatedVmHostId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._extendedMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedMetadata = this._extendedMetadata;
    }
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._ipxeScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeScript = this._ipxeScript;
    }
    if (this._isAiEnterpriseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAiEnterpriseEnabled = this._isAiEnterpriseEnabled;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._launchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchMode = this._launchMode;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._preferredMaintenanceAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredMaintenanceAction = this._preferredMaintenanceAction;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._shape !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape;
    }
    if (this._agentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentConfig = this._agentConfig?.internalValue;
    }
    if (this._availabilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityConfig = this._availabilityConfig?.internalValue;
    }
    if (this._createVnicDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVnicDetails = this._createVnicDetails?.internalValue;
    }
    if (this._instanceOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceOptions = this._instanceOptions?.internalValue;
    }
    if (this._launchOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchOptions = this._launchOptions?.internalValue;
    }
    if (this._licensingConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensingConfigs = this._licensingConfigs?.internalValue;
    }
    if (this._placementConstraintDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraintDetails = this._placementConstraintDetails?.internalValue;
    }
    if (this._platformConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformConfig = this._platformConfig?.internalValue;
    }
    if (this._preemptibleInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibleInstanceConfig = this._preemptibleInstanceConfig?.internalValue;
    }
    if (this._shapeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeConfig = this._shapeConfig?.internalValue;
    }
    if (this._sourceDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDetails = this._sourceDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._capacityReservationId = undefined;
      this._clusterPlacementGroupId = undefined;
      this._compartmentId = undefined;
      this._computeClusterId = undefined;
      this._dedicatedVmHostId = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._extendedMetadata = undefined;
      this._faultDomain = undefined;
      this._freeformTags = undefined;
      this._ipxeScript = undefined;
      this._isAiEnterpriseEnabled = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._launchMode = undefined;
      this._metadata = undefined;
      this._preferredMaintenanceAction = undefined;
      this._securityAttributes = undefined;
      this._shape = undefined;
      this._agentConfig.internalValue = undefined;
      this._availabilityConfig.internalValue = undefined;
      this._createVnicDetails.internalValue = undefined;
      this._instanceOptions.internalValue = undefined;
      this._launchOptions.internalValue = undefined;
      this._licensingConfigs.internalValue = undefined;
      this._placementConstraintDetails.internalValue = undefined;
      this._platformConfig.internalValue = undefined;
      this._preemptibleInstanceConfig.internalValue = undefined;
      this._shapeConfig.internalValue = undefined;
      this._sourceDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._capacityReservationId = value.capacityReservationId;
      this._clusterPlacementGroupId = value.clusterPlacementGroupId;
      this._compartmentId = value.compartmentId;
      this._computeClusterId = value.computeClusterId;
      this._dedicatedVmHostId = value.dedicatedVmHostId;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._extendedMetadata = value.extendedMetadata;
      this._faultDomain = value.faultDomain;
      this._freeformTags = value.freeformTags;
      this._ipxeScript = value.ipxeScript;
      this._isAiEnterpriseEnabled = value.isAiEnterpriseEnabled;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._launchMode = value.launchMode;
      this._metadata = value.metadata;
      this._preferredMaintenanceAction = value.preferredMaintenanceAction;
      this._securityAttributes = value.securityAttributes;
      this._shape = value.shape;
      this._agentConfig.internalValue = value.agentConfig;
      this._availabilityConfig.internalValue = value.availabilityConfig;
      this._createVnicDetails.internalValue = value.createVnicDetails;
      this._instanceOptions.internalValue = value.instanceOptions;
      this._launchOptions.internalValue = value.launchOptions;
      this._licensingConfigs.internalValue = value.licensingConfigs;
      this._placementConstraintDetails.internalValue = value.placementConstraintDetails;
      this._platformConfig.internalValue = value.platformConfig;
      this._preemptibleInstanceConfig.internalValue = value.preemptibleInstanceConfig;
      this._shapeConfig.internalValue = value.shapeConfig;
      this._sourceDetails.internalValue = value.sourceDetails;
    }
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_cluster_id - computed: true, optional: true, required: false
  private _computeClusterId?: string; 
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }
  public set computeClusterId(value: string) {
    this._computeClusterId = value;
  }
  public resetComputeClusterId() {
    this._computeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeClusterIdInput() {
    return this._computeClusterId;
  }

  // dedicated_vm_host_id - computed: true, optional: true, required: false
  private _dedicatedVmHostId?: string; 
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }
  public set dedicatedVmHostId(value: string) {
    this._dedicatedVmHostId = value;
  }
  public resetDedicatedVmHostId() {
    this._dedicatedVmHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedVmHostIdInput() {
    return this._dedicatedVmHostId;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // extended_metadata - computed: true, optional: true, required: false
  private _extendedMetadata?: { [key: string]: string }; 
  public get extendedMetadata() {
    return this.getStringMapAttribute('extended_metadata');
  }
  public set extendedMetadata(value: { [key: string]: string }) {
    this._extendedMetadata = value;
  }
  public resetExtendedMetadata() {
    this._extendedMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMetadataInput() {
    return this._extendedMetadata;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
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

  // ipxe_script - computed: true, optional: true, required: false
  private _ipxeScript?: string; 
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }
  public set ipxeScript(value: string) {
    this._ipxeScript = value;
  }
  public resetIpxeScript() {
    this._ipxeScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptInput() {
    return this._ipxeScript;
  }

  // is_ai_enterprise_enabled - computed: true, optional: true, required: false
  private _isAiEnterpriseEnabled?: boolean | cdktf.IResolvable; 
  public get isAiEnterpriseEnabled() {
    return this.getBooleanAttribute('is_ai_enterprise_enabled');
  }
  public set isAiEnterpriseEnabled(value: boolean | cdktf.IResolvable) {
    this._isAiEnterpriseEnabled = value;
  }
  public resetIsAiEnterpriseEnabled() {
    this._isAiEnterpriseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAiEnterpriseEnabledInput() {
    return this._isAiEnterpriseEnabled;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // launch_mode - computed: true, optional: true, required: false
  private _launchMode?: string; 
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }
  public set launchMode(value: string) {
    this._launchMode = value;
  }
  public resetLaunchMode() {
    this._launchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchModeInput() {
    return this._launchMode;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // preferred_maintenance_action - computed: true, optional: true, required: false
  private _preferredMaintenanceAction?: string; 
  public get preferredMaintenanceAction() {
    return this.getStringAttribute('preferred_maintenance_action');
  }
  public set preferredMaintenanceAction(value: string) {
    this._preferredMaintenanceAction = value;
  }
  public resetPreferredMaintenanceAction() {
    this._preferredMaintenanceAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMaintenanceActionInput() {
    return this._preferredMaintenanceAction;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: true, required: false
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  public resetShape() {
    this._shape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // agent_config - computed: false, optional: true, required: false
  private _agentConfig = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference(this, "agent_config");
  public get agentConfig() {
    return this._agentConfig;
  }
  public putAgentConfig(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAgentConfig) {
    this._agentConfig.internalValue = value;
  }
  public resetAgentConfig() {
    this._agentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentConfigInput() {
    return this._agentConfig.internalValue;
  }

  // availability_config - computed: false, optional: true, required: false
  private _availabilityConfig = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference(this, "availability_config");
  public get availabilityConfig() {
    return this._availabilityConfig;
  }
  public putAvailabilityConfig(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsAvailabilityConfig) {
    this._availabilityConfig.internalValue = value;
  }
  public resetAvailabilityConfig() {
    this._availabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityConfigInput() {
    return this._availabilityConfig.internalValue;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference(this, "create_vnic_details");
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public putCreateVnicDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsCreateVnicDetails) {
    this._createVnicDetails.internalValue = value;
  }
  public resetCreateVnicDetails() {
    this._createVnicDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVnicDetailsInput() {
    return this._createVnicDetails.internalValue;
  }

  // instance_options - computed: false, optional: true, required: false
  private _instanceOptions = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference(this, "instance_options");
  public get instanceOptions() {
    return this._instanceOptions;
  }
  public putInstanceOptions(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsInstanceOptions) {
    this._instanceOptions.internalValue = value;
  }
  public resetInstanceOptions() {
    this._instanceOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOptionsInput() {
    return this._instanceOptions.internalValue;
  }

  // launch_options - computed: false, optional: true, required: false
  private _launchOptions = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference(this, "launch_options");
  public get launchOptions() {
    return this._launchOptions;
  }
  public putLaunchOptions(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLaunchOptions) {
    this._launchOptions.internalValue = value;
  }
  public resetLaunchOptions() {
    this._launchOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchOptionsInput() {
    return this._launchOptions.internalValue;
  }

  // licensing_configs - computed: false, optional: true, required: false
  private _licensingConfigs = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference(this, "licensing_configs");
  public get licensingConfigs() {
    return this._licensingConfigs;
  }
  public putLicensingConfigs(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsLicensingConfigs) {
    this._licensingConfigs.internalValue = value;
  }
  public resetLicensingConfigs() {
    this._licensingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingConfigsInput() {
    return this._licensingConfigs.internalValue;
  }

  // placement_constraint_details - computed: false, optional: true, required: false
  private _placementConstraintDetails = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference(this, "placement_constraint_details");
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }
  public putPlacementConstraintDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails) {
    this._placementConstraintDetails.internalValue = value;
  }
  public resetPlacementConstraintDetails() {
    this._placementConstraintDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintDetailsInput() {
    return this._placementConstraintDetails.internalValue;
  }

  // platform_config - computed: false, optional: true, required: false
  private _platformConfig = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference(this, "platform_config");
  public get platformConfig() {
    return this._platformConfig;
  }
  public putPlatformConfig(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPlatformConfig) {
    this._platformConfig.internalValue = value;
  }
  public resetPlatformConfig() {
    this._platformConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformConfigInput() {
    return this._platformConfig.internalValue;
  }

  // preemptible_instance_config - computed: false, optional: true, required: false
  private _preemptibleInstanceConfig = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference(this, "preemptible_instance_config");
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }
  public putPreemptibleInstanceConfig(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig) {
    this._preemptibleInstanceConfig.internalValue = value;
  }
  public resetPreemptibleInstanceConfig() {
    this._preemptibleInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInstanceConfigInput() {
    return this._preemptibleInstanceConfig.internalValue;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address CoreInstanceConfiguration#ipv6address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6subnet_cidr CoreInstanceConfiguration#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_ipv6ip CoreInstanceConfiguration#assign_ipv6ip}
  */
  readonly assignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_private_dns_record CoreInstanceConfiguration#assign_private_dns_record}
  */
  readonly assignPrivateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_public_ip CoreInstanceConfiguration#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#hostname_label CoreInstanceConfiguration#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nsg_ids CoreInstanceConfiguration#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#private_ip CoreInstanceConfiguration#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#security_attributes CoreInstanceConfiguration#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#skip_source_dest_check CoreInstanceConfiguration#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_cidr CoreInstanceConfiguration#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_id CoreInstanceConfiguration#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address_ipv6subnet_cidr_pair_details CoreInstanceConfiguration#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ipv6ip: cdktf.booleanToTerraform(struct!.assignIpv6Ip),
    assign_private_dns_record: cdktf.booleanToTerraform(struct!.assignPrivateDnsRecord),
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_private_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.assignPrivateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpv6Ip = this._assignIpv6Ip;
    }
    if (this._assignPrivateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPrivateDnsRecord = this._assignPrivateDnsRecord;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIpv6Ip = undefined;
      this._assignPrivateDnsRecord = undefined;
      this._assignPublicIp = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._securityAttributes = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIpv6Ip = value.assignIpv6Ip;
      this._assignPrivateDnsRecord = value.assignPrivateDnsRecord;
      this._assignPublicIp = value.assignPublicIp;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._securityAttributes = value.securityAttributes;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // assign_ipv6ip - computed: true, optional: true, required: false
  private _assignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }
  public set assignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Ip = value;
  }
  public resetAssignIpv6Ip() {
    this._assignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6IpInput() {
    return this._assignIpv6Ip;
  }

  // assign_private_dns_record - computed: true, optional: true, required: false
  private _assignPrivateDnsRecord?: boolean | cdktf.IResolvable; 
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }
  public set assignPrivateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._assignPrivateDnsRecord = value;
  }
  public resetAssignPrivateDnsRecord() {
    this._assignPrivateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPrivateDnsRecordInput() {
    return this._assignPrivateDnsRecord;
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
  }

  // subnet_cidr - computed: true, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nic_index CoreInstanceConfiguration#nic_index}
  */
  readonly nicIndex?: number;
  /**
  * create_vnic_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create_vnic_details CoreInstanceConfiguration#create_vnic_details}
  */
  readonly createVnicDetails?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails;
}

export function coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    nic_index: cdktf.numberToTerraform(struct!.nicIndex),
    create_vnic_details: coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsToTerraform(struct!.createVnicDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_index: {
      value: cdktf.numberToHclTerraform(struct!.nicIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_vnic_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsToHclTerraform(struct!.createVnicDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._nicIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicIndex = this._nicIndex;
    }
    if (this._createVnicDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVnicDetails = this._createVnicDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._nicIndex = undefined;
      this._createVnicDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._nicIndex = value.nicIndex;
      this._createVnicDetails.internalValue = value.createVnicDetails;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // nic_index - computed: true, optional: true, required: false
  private _nicIndex?: number; 
  public get nicIndex() {
    return this.getNumberAttribute('nic_index');
  }
  public set nicIndex(value: number) {
    this._nicIndex = value;
  }
  public resetNicIndex() {
    this._nicIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIndexInput() {
    return this._nicIndex;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails = new CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference(this, "create_vnic_details");
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public putCreateVnicDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails) {
    this._createVnicDetails.internalValue = value;
  }
  public resetCreateVnicDetails() {
    this._createVnicDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVnicDetailsInput() {
    return this._createVnicDetails.internalValue;
  }
}

export class CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsOptions {
  /**
  * block_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#block_volumes CoreInstanceConfiguration#block_volumes}
  */
  readonly blockVolumes?: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes[] | cdktf.IResolvable;
  /**
  * launch_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#launch_details CoreInstanceConfiguration#launch_details}
  */
  readonly launchDetails?: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails;
  /**
  * secondary_vnics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#secondary_vnics CoreInstanceConfiguration#secondary_vnics}
  */
  readonly secondaryVnics?: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsOptionsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_volumes: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesToTerraform, true)(struct!.blockVolumes),
    launch_details: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsToTerraform(struct!.launchDetails),
    secondary_vnics: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsToTerraform, true)(struct!.secondaryVnics),
  }
}


export function coreInstanceConfigurationInstanceDetailsOptionsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_volumes: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsBlockVolumesToHclTerraform, true)(struct!.blockVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesList",
    },
    launch_details: {
      value: coreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsToHclTerraform(struct!.launchDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsList",
    },
    secondary_vnics: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsToHclTerraform, true)(struct!.secondaryVnics),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumes = this._blockVolumes?.internalValue;
    }
    if (this._launchDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchDetails = this._launchDetails?.internalValue;
    }
    if (this._secondaryVnics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVnics = this._secondaryVnics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockVolumes.internalValue = undefined;
      this._launchDetails.internalValue = undefined;
      this._secondaryVnics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockVolumes.internalValue = value.blockVolumes;
      this._launchDetails.internalValue = value.launchDetails;
      this._secondaryVnics.internalValue = value.secondaryVnics;
    }
  }

  // block_volumes - computed: false, optional: true, required: false
  private _blockVolumes = new CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumesList(this, "block_volumes", false);
  public get blockVolumes() {
    return this._blockVolumes;
  }
  public putBlockVolumes(value: CoreInstanceConfigurationInstanceDetailsOptionsBlockVolumes[] | cdktf.IResolvable) {
    this._blockVolumes.internalValue = value;
  }
  public resetBlockVolumes() {
    this._blockVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumesInput() {
    return this._blockVolumes.internalValue;
  }

  // launch_details - computed: false, optional: true, required: false
  private _launchDetails = new CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetailsOutputReference(this, "launch_details");
  public get launchDetails() {
    return this._launchDetails;
  }
  public putLaunchDetails(value: CoreInstanceConfigurationInstanceDetailsOptionsLaunchDetails) {
    this._launchDetails.internalValue = value;
  }
  public resetLaunchDetails() {
    this._launchDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchDetailsInput() {
    return this._launchDetails.internalValue;
  }

  // secondary_vnics - computed: false, optional: true, required: false
  private _secondaryVnics = new CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnicsList(this, "secondary_vnics", false);
  public get secondaryVnics() {
    return this._secondaryVnics;
  }
  public putSecondaryVnics(value: CoreInstanceConfigurationInstanceDetailsOptionsSecondaryVnics[] | cdktf.IResolvable) {
    this._secondaryVnics.internalValue = value;
  }
  public resetSecondaryVnics() {
    this._secondaryVnics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVnicsInput() {
    return this._secondaryVnics.internalValue;
  }
}

export class CoreInstanceConfigurationInstanceDetailsOptionsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsOptions[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsOptionsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address CoreInstanceConfiguration#ipv6address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6subnet_cidr CoreInstanceConfiguration#ipv6subnet_cidr}
  */
  readonly ipv6SubnetCidr?: string;
}

export function coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6subnet_cidr: cdktf.stringToTerraform(struct!.ipv6SubnetCidr),
  }
}


export function coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6SubnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6SubnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SubnetCidr = this._ipv6SubnetCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._ipv6SubnetCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._ipv6SubnetCidr = value.ipv6SubnetCidr;
    }
  }

  // ipv6address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6subnet_cidr - computed: true, optional: true, required: false
  private _ipv6SubnetCidr?: string; 
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
  public set ipv6SubnetCidr(value: string) {
    this._ipv6SubnetCidr = value;
  }
  public resetIpv6SubnetCidr() {
    this._ipv6SubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrInput() {
    return this._ipv6SubnetCidr;
  }
}

export class CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_ipv6ip CoreInstanceConfiguration#assign_ipv6ip}
  */
  readonly assignIpv6Ip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_private_dns_record CoreInstanceConfiguration#assign_private_dns_record}
  */
  readonly assignPrivateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#assign_public_ip CoreInstanceConfiguration#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#defined_tags CoreInstanceConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#freeform_tags CoreInstanceConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#hostname_label CoreInstanceConfiguration#hostname_label}
  */
  readonly hostnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nsg_ids CoreInstanceConfiguration#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#private_ip CoreInstanceConfiguration#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#security_attributes CoreInstanceConfiguration#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#skip_source_dest_check CoreInstanceConfiguration#skip_source_dest_check}
  */
  readonly skipSourceDestCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_cidr CoreInstanceConfiguration#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#subnet_id CoreInstanceConfiguration#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ipv6address_ipv6subnet_cidr_pair_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#ipv6address_ipv6subnet_cidr_pair_details CoreInstanceConfiguration#ipv6address_ipv6subnet_cidr_pair_details}
  */
  readonly ipv6AddressIpv6SubnetCidrPairDetails?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ipv6ip: cdktf.booleanToTerraform(struct!.assignIpv6Ip),
    assign_private_dns_record: cdktf.booleanToTerraform(struct!.assignPrivateDnsRecord),
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    hostname_label: cdktf.stringToTerraform(struct!.hostnameLabel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityAttributes),
    skip_source_dest_check: cdktf.booleanToTerraform(struct!.skipSourceDestCheck),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    ipv6address_ipv6subnet_cidr_pair_details: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference | CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ipv6ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpv6Ip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_private_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.assignPrivateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hostname_label: {
      value: cdktf.stringToHclTerraform(struct!.hostnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    skip_source_dest_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipSourceDestCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_cidr: {
      value: cdktf.stringToHclTerraform(struct!.subnetCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6address_ipv6subnet_cidr_pair_details: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform, true)(struct!.ipv6AddressIpv6SubnetCidrPairDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpv6Ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpv6Ip = this._assignIpv6Ip;
    }
    if (this._assignPrivateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPrivateDnsRecord = this._assignPrivateDnsRecord;
    }
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._hostnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameLabel = this._hostnameLabel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._securityAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttributes = this._securityAttributes;
    }
    if (this._skipSourceDestCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSourceDestCheck = this._skipSourceDestCheck;
    }
    if (this._subnetCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetCidr = this._subnetCidr;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressIpv6SubnetCidrPairDetails = this._ipv6AddressIpv6SubnetCidrPairDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIpv6Ip = undefined;
      this._assignPrivateDnsRecord = undefined;
      this._assignPublicIp = undefined;
      this._definedTags = undefined;
      this._displayName = undefined;
      this._freeformTags = undefined;
      this._hostnameLabel = undefined;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._securityAttributes = undefined;
      this._skipSourceDestCheck = undefined;
      this._subnetCidr = undefined;
      this._subnetId = undefined;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIpv6Ip = value.assignIpv6Ip;
      this._assignPrivateDnsRecord = value.assignPrivateDnsRecord;
      this._assignPublicIp = value.assignPublicIp;
      this._definedTags = value.definedTags;
      this._displayName = value.displayName;
      this._freeformTags = value.freeformTags;
      this._hostnameLabel = value.hostnameLabel;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._securityAttributes = value.securityAttributes;
      this._skipSourceDestCheck = value.skipSourceDestCheck;
      this._subnetCidr = value.subnetCidr;
      this._subnetId = value.subnetId;
      this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value.ipv6AddressIpv6SubnetCidrPairDetails;
    }
  }

  // assign_ipv6ip - computed: true, optional: true, required: false
  private _assignIpv6Ip?: boolean | cdktf.IResolvable; 
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }
  public set assignIpv6Ip(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Ip = value;
  }
  public resetAssignIpv6Ip() {
    this._assignIpv6Ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6IpInput() {
    return this._assignIpv6Ip;
  }

  // assign_private_dns_record - computed: false, optional: true, required: false
  private _assignPrivateDnsRecord?: boolean | cdktf.IResolvable; 
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }
  public set assignPrivateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._assignPrivateDnsRecord = value;
  }
  public resetAssignPrivateDnsRecord() {
    this._assignPrivateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPrivateDnsRecordInput() {
    return this._assignPrivateDnsRecord;
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // hostname_label - computed: true, optional: true, required: false
  private _hostnameLabel?: string; 
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }
  public set hostnameLabel(value: string) {
    this._hostnameLabel = value;
  }
  public resetHostnameLabel() {
    this._hostnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameLabelInput() {
    return this._hostnameLabel;
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: true, required: false
  private _skipSourceDestCheck?: boolean | cdktf.IResolvable; 
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }
  public set skipSourceDestCheck(value: boolean | cdktf.IResolvable) {
    this._skipSourceDestCheck = value;
  }
  public resetSkipSourceDestCheck() {
    this._skipSourceDestCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSourceDestCheckInput() {
    return this._skipSourceDestCheck;
  }

  // subnet_cidr - computed: true, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: false, optional: true, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }
  public putIpv6AddressIpv6SubnetCidrPairDetails(value: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails[] | cdktf.IResolvable) {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = value;
  }
  public resetIpv6AddressIpv6SubnetCidrPairDetails() {
    this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIpv6SubnetCidrPairDetailsInput() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails.internalValue;
  }
}
export interface CoreInstanceConfigurationInstanceDetailsSecondaryVnics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#display_name CoreInstanceConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#nic_index CoreInstanceConfiguration#nic_index}
  */
  readonly nicIndex?: number;
  /**
  * create_vnic_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create_vnic_details CoreInstanceConfiguration#create_vnic_details}
  */
  readonly createVnicDetails?: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails;
}

export function coreInstanceConfigurationInstanceDetailsSecondaryVnicsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsSecondaryVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    nic_index: cdktf.numberToTerraform(struct!.nicIndex),
    create_vnic_details: coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsToTerraform(struct!.createVnicDetails),
  }
}


export function coreInstanceConfigurationInstanceDetailsSecondaryVnicsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsSecondaryVnics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_index: {
      value: cdktf.numberToHclTerraform(struct!.nicIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_vnic_details: {
      value: coreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsToHclTerraform(struct!.createVnicDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsSecondaryVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreInstanceConfigurationInstanceDetailsSecondaryVnics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._nicIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicIndex = this._nicIndex;
    }
    if (this._createVnicDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.createVnicDetails = this._createVnicDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetailsSecondaryVnics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._nicIndex = undefined;
      this._createVnicDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._nicIndex = value.nicIndex;
      this._createVnicDetails.internalValue = value.createVnicDetails;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // nic_index - computed: true, optional: true, required: false
  private _nicIndex?: number; 
  public get nicIndex() {
    return this.getNumberAttribute('nic_index');
  }
  public set nicIndex(value: number) {
    this._nicIndex = value;
  }
  public resetNicIndex() {
    this._nicIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIndexInput() {
    return this._nicIndex;
  }

  // create_vnic_details - computed: false, optional: true, required: false
  private _createVnicDetails = new CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference(this, "create_vnic_details");
  public get createVnicDetails() {
    return this._createVnicDetails;
  }
  public putCreateVnicDetails(value: CoreInstanceConfigurationInstanceDetailsSecondaryVnicsCreateVnicDetails) {
    this._createVnicDetails.internalValue = value;
  }
  public resetCreateVnicDetails() {
    this._createVnicDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createVnicDetailsInput() {
    return this._createVnicDetails.internalValue;
  }
}

export class CoreInstanceConfigurationInstanceDetailsSecondaryVnicsList extends cdktf.ComplexList {
  public internalValue? : CoreInstanceConfigurationInstanceDetailsSecondaryVnics[] | cdktf.IResolvable

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
  public get(index: number): CoreInstanceConfigurationInstanceDetailsSecondaryVnicsOutputReference {
    return new CoreInstanceConfigurationInstanceDetailsSecondaryVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreInstanceConfigurationInstanceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#instance_type CoreInstanceConfiguration#instance_type}
  */
  readonly instanceType: string;
  /**
  * block_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#block_volumes CoreInstanceConfiguration#block_volumes}
  */
  readonly blockVolumes?: CoreInstanceConfigurationInstanceDetailsBlockVolumes[] | cdktf.IResolvable;
  /**
  * launch_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#launch_details CoreInstanceConfiguration#launch_details}
  */
  readonly launchDetails?: CoreInstanceConfigurationInstanceDetailsLaunchDetails;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#options CoreInstanceConfiguration#options}
  */
  readonly options?: CoreInstanceConfigurationInstanceDetailsOptions[] | cdktf.IResolvable;
  /**
  * secondary_vnics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#secondary_vnics CoreInstanceConfiguration#secondary_vnics}
  */
  readonly secondaryVnics?: CoreInstanceConfigurationInstanceDetailsSecondaryVnics[] | cdktf.IResolvable;
}

export function coreInstanceConfigurationInstanceDetailsToTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOutputReference | CoreInstanceConfigurationInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    block_volumes: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsBlockVolumesToTerraform, true)(struct!.blockVolumes),
    launch_details: coreInstanceConfigurationInstanceDetailsLaunchDetailsToTerraform(struct!.launchDetails),
    options: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsOptionsToTerraform, true)(struct!.options),
    secondary_vnics: cdktf.listMapper(coreInstanceConfigurationInstanceDetailsSecondaryVnicsToTerraform, true)(struct!.secondaryVnics),
  }
}


export function coreInstanceConfigurationInstanceDetailsToHclTerraform(struct?: CoreInstanceConfigurationInstanceDetailsOutputReference | CoreInstanceConfigurationInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_volumes: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsBlockVolumesToHclTerraform, true)(struct!.blockVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsBlockVolumesList",
    },
    launch_details: {
      value: coreInstanceConfigurationInstanceDetailsLaunchDetailsToHclTerraform(struct!.launchDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsLaunchDetailsList",
    },
    options: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsOptionsList",
    },
    secondary_vnics: {
      value: cdktf.listMapperHcl(coreInstanceConfigurationInstanceDetailsSecondaryVnicsToHclTerraform, true)(struct!.secondaryVnics),
      isBlock: true,
      type: "list",
      storageClassType: "CoreInstanceConfigurationInstanceDetailsSecondaryVnicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreInstanceConfigurationInstanceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreInstanceConfigurationInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._blockVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockVolumes = this._blockVolumes?.internalValue;
    }
    if (this._launchDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchDetails = this._launchDetails?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._secondaryVnics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryVnics = this._secondaryVnics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreInstanceConfigurationInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._blockVolumes.internalValue = undefined;
      this._launchDetails.internalValue = undefined;
      this._options.internalValue = undefined;
      this._secondaryVnics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._blockVolumes.internalValue = value.blockVolumes;
      this._launchDetails.internalValue = value.launchDetails;
      this._options.internalValue = value.options;
      this._secondaryVnics.internalValue = value.secondaryVnics;
    }
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // block_volumes - computed: false, optional: true, required: false
  private _blockVolumes = new CoreInstanceConfigurationInstanceDetailsBlockVolumesList(this, "block_volumes", false);
  public get blockVolumes() {
    return this._blockVolumes;
  }
  public putBlockVolumes(value: CoreInstanceConfigurationInstanceDetailsBlockVolumes[] | cdktf.IResolvable) {
    this._blockVolumes.internalValue = value;
  }
  public resetBlockVolumes() {
    this._blockVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumesInput() {
    return this._blockVolumes.internalValue;
  }

  // launch_details - computed: false, optional: true, required: false
  private _launchDetails = new CoreInstanceConfigurationInstanceDetailsLaunchDetailsOutputReference(this, "launch_details");
  public get launchDetails() {
    return this._launchDetails;
  }
  public putLaunchDetails(value: CoreInstanceConfigurationInstanceDetailsLaunchDetails) {
    this._launchDetails.internalValue = value;
  }
  public resetLaunchDetails() {
    this._launchDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchDetailsInput() {
    return this._launchDetails.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new CoreInstanceConfigurationInstanceDetailsOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: CoreInstanceConfigurationInstanceDetailsOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // secondary_vnics - computed: false, optional: true, required: false
  private _secondaryVnics = new CoreInstanceConfigurationInstanceDetailsSecondaryVnicsList(this, "secondary_vnics", false);
  public get secondaryVnics() {
    return this._secondaryVnics;
  }
  public putSecondaryVnics(value: CoreInstanceConfigurationInstanceDetailsSecondaryVnics[] | cdktf.IResolvable) {
    this._secondaryVnics.internalValue = value;
  }
  public resetSecondaryVnics() {
    this._secondaryVnics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryVnicsInput() {
    return this._secondaryVnics.internalValue;
  }
}
export interface CoreInstanceConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#create CoreInstanceConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#delete CoreInstanceConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#update CoreInstanceConfiguration#update}
  */
  readonly update?: string;
}

export function coreInstanceConfigurationTimeoutsToTerraform(struct?: CoreInstanceConfigurationTimeouts | cdktf.IResolvable): any {
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


export function coreInstanceConfigurationTimeoutsToHclTerraform(struct?: CoreInstanceConfigurationTimeouts | cdktf.IResolvable): any {
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

export class CoreInstanceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreInstanceConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreInstanceConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration oci_core_instance_configuration}
*/
export class CoreInstanceConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_instance_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreInstanceConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreInstanceConfiguration to import
  * @param importFromId The id of the existing CoreInstanceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreInstanceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_instance_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_instance_configuration oci_core_instance_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreInstanceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: CoreInstanceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._source = config.source;
    this._instanceDetails.internalValue = config.instanceDetails;
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

  // deferred_fields - computed: true, optional: false, required: false
  public get deferredFields() {
    return this.getListAttribute('deferred_fields');
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // instance_details - computed: false, optional: true, required: false
  private _instanceDetails = new CoreInstanceConfigurationInstanceDetailsOutputReference(this, "instance_details");
  public get instanceDetails() {
    return this._instanceDetails;
  }
  public putInstanceDetails(value: CoreInstanceConfigurationInstanceDetails) {
    this._instanceDetails.internalValue = value;
  }
  public resetInstanceDetails() {
    this._instanceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceDetailsInput() {
    return this._instanceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreInstanceConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreInstanceConfigurationTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      source: cdktf.stringToTerraform(this._source),
      instance_details: coreInstanceConfigurationInstanceDetailsToTerraform(this._instanceDetails.internalValue),
      timeouts: coreInstanceConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_details: {
        value: coreInstanceConfigurationInstanceDetailsToHclTerraform(this._instanceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreInstanceConfigurationInstanceDetailsList",
      },
      timeouts: {
        value: coreInstanceConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreInstanceConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
