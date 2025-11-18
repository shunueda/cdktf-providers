// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciContainerengineNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defined tags for this resource. Each key is predefined and scoped to a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#defined_tags OciContainerengineNodePool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#freeform_tags OciContainerengineNodePool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#id OciContainerengineNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The version of Kubernetes to install on the nodes in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#kubernetes_version OciContainerengineNodePool#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * The name of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#name OciContainerengineNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_image_id OciContainerengineNodePool#node_image_id}
  */
  readonly nodeImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_image_name OciContainerengineNodePool#node_image_name}
  */
  readonly nodeImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_metadata OciContainerengineNodePool#node_metadata}
  */
  readonly nodeMetadata?: { [key: string]: string };
  /**
  * The name of the node shape of the nodes in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_shape OciContainerengineNodePool#node_shape}
  */
  readonly nodeShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#quantity_per_subnet OciContainerengineNodePool#quantity_per_subnet}
  */
  readonly quantityPerSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#ssh_public_key OciContainerengineNodePool#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#subnet_ids OciContainerengineNodePool#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#system_tags OciContainerengineNodePool#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * The GUID of the tenant that the Node Pool resource in Oracle Cloud Infrastructure Container Engine service be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#tenant_id OciContainerengineNodePool#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Whether or not to wait until oci node pool to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#wait_until_ready OciContainerengineNodePool#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * initial_node_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#initial_node_labels OciContainerengineNodePool#initial_node_labels}
  */
  readonly initialNodeLabels?: OciContainerengineNodePoolInitialNodeLabels[] | cdktf.IResolvable;
  /**
  * node_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_config_details OciContainerengineNodePool#node_config_details}
  */
  readonly nodeConfigDetails?: OciContainerengineNodePoolNodeConfigDetails;
  /**
  * node_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_shape_config OciContainerengineNodePool#node_shape_config}
  */
  readonly nodeShapeConfig: OciContainerengineNodePoolNodeShapeConfig;
  /**
  * node_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#node_source_details OciContainerengineNodePool#node_source_details}
  */
  readonly nodeSourceDetails?: OciContainerengineNodePoolNodeSourceDetails;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#nodes OciContainerengineNodePool#nodes}
  */
  readonly nodes?: OciContainerengineNodePoolNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#timeouts OciContainerengineNodePool#timeouts}
  */
  readonly timeouts?: OciContainerengineNodePoolTimeouts;
}
export interface OciContainerengineNodePoolInitialNodeLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#key OciContainerengineNodePool#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#value OciContainerengineNodePool#value}
  */
  readonly value?: string;
}

export function ociContainerengineNodePoolInitialNodeLabelsToTerraform(struct?: OciContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ociContainerengineNodePoolInitialNodeLabelsToHclTerraform(struct?: OciContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable): any {
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

export class OciContainerengineNodePoolInitialNodeLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OciContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OciContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OciContainerengineNodePoolInitialNodeLabelsList extends cdktf.ComplexList {
  public internalValue? : OciContainerengineNodePoolInitialNodeLabels[] | cdktf.IResolvable

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
  public get(index: number): OciContainerengineNodePoolInitialNodeLabelsOutputReference {
    return new OciContainerengineNodePoolInitialNodeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#availability_domain OciContainerengineNodePool#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#capacity_reservation_id OciContainerengineNodePool#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#subnet_id OciContainerengineNodePool#subnet_id}
  */
  readonly subnetId: string;
}

export function ociContainerengineNodePoolNodeConfigDetailsPlacementConfigsToTerraform(struct?: OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function ociContainerengineNodePoolNodeConfigDetailsPlacementConfigsToHclTerraform(struct?: OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable): any {
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
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityDomain = undefined;
      this._capacityReservationId = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityDomain = value.availabilityDomain;
      this._capacityReservationId = value.capacityReservationId;
      this._subnetId = value.subnetId;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class OciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList extends cdktf.ComplexList {
  public internalValue? : OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs[] | cdktf.IResolvable

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
  public get(index: number): OciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference {
    return new OciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OciContainerengineNodePoolNodeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#defined_tags OciContainerengineNodePool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#freeform_tags OciContainerengineNodePool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#is_pv_encryption_in_transit_enabled OciContainerengineNodePool#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#kms_key_id OciContainerengineNodePool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#nsg_ids OciContainerengineNodePool#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#size OciContainerengineNodePool#size}
  */
  readonly size: number;
  /**
  * placement_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#placement_configs OciContainerengineNodePool#placement_configs}
  */
  readonly placementConfigs: OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs[] | cdktf.IResolvable;
}

export function ociContainerengineNodePoolNodeConfigDetailsToTerraform(struct?: OciContainerengineNodePoolNodeConfigDetailsOutputReference | OciContainerengineNodePoolNodeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    size: cdktf.numberToTerraform(struct!.size),
    placement_configs: cdktf.listMapper(ociContainerengineNodePoolNodeConfigDetailsPlacementConfigsToTerraform, true)(struct!.placementConfigs),
  }
}


export function ociContainerengineNodePoolNodeConfigDetailsToHclTerraform(struct?: OciContainerengineNodePoolNodeConfigDetailsOutputReference | OciContainerengineNodePoolNodeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
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
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    placement_configs: {
      value: cdktf.listMapperHcl(ociContainerengineNodePoolNodeConfigDetailsPlacementConfigsToHclTerraform, true)(struct!.placementConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "OciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OciContainerengineNodePoolNodeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OciContainerengineNodePoolNodeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._placementConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConfigs = this._placementConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciContainerengineNodePoolNodeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._kmsKeyId = undefined;
      this._nsgIds = undefined;
      this._size = undefined;
      this._placementConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._kmsKeyId = value.kmsKeyId;
      this._nsgIds = value.nsgIds;
      this._size = value.size;
      this._placementConfigs.internalValue = value.placementConfigs;
    }
  }

  // defined_tags - computed: false, optional: true, required: false
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

  // freeform_tags - computed: false, optional: true, required: false
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

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // placement_configs - computed: false, optional: false, required: true
  private _placementConfigs = new OciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList(this, "placement_configs", false);
  public get placementConfigs() {
    return this._placementConfigs;
  }
  public putPlacementConfigs(value: OciContainerengineNodePoolNodeConfigDetailsPlacementConfigs[] | cdktf.IResolvable) {
    this._placementConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConfigsInput() {
    return this._placementConfigs.internalValue;
  }
}
export interface OciContainerengineNodePoolNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#memory_in_gbs OciContainerengineNodePool#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#ocpus OciContainerengineNodePool#ocpus}
  */
  readonly ocpus?: number;
}

export function ociContainerengineNodePoolNodeShapeConfigToTerraform(struct?: OciContainerengineNodePoolNodeShapeConfigOutputReference | OciContainerengineNodePoolNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function ociContainerengineNodePoolNodeShapeConfigToHclTerraform(struct?: OciContainerengineNodePoolNodeShapeConfigOutputReference | OciContainerengineNodePoolNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OciContainerengineNodePoolNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OciContainerengineNodePoolNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciContainerengineNodePoolNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: false, optional: true, required: false
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

  // ocpus - computed: false, optional: true, required: false
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
}
export interface OciContainerengineNodePoolNodeSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#boot_volume_size_in_gbs OciContainerengineNodePool#boot_volume_size_in_gbs}
  */
  readonly bootVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#image_id OciContainerengineNodePool#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#source_type OciContainerengineNodePool#source_type}
  */
  readonly sourceType: string;
}

export function ociContainerengineNodePoolNodeSourceDetailsToTerraform(struct?: OciContainerengineNodePoolNodeSourceDetailsOutputReference | OciContainerengineNodePoolNodeSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_size_in_gbs: cdktf.stringToTerraform(struct!.bootVolumeSizeInGbs),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function ociContainerengineNodePoolNodeSourceDetailsToHclTerraform(struct?: OciContainerengineNodePoolNodeSourceDetailsOutputReference | OciContainerengineNodePoolNodeSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeSizeInGbs),
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
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OciContainerengineNodePoolNodeSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OciContainerengineNodePoolNodeSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSizeInGbs = this._bootVolumeSizeInGbs;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciContainerengineNodePoolNodeSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeSizeInGbs = undefined;
      this._imageId = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeSizeInGbs = value.bootVolumeSizeInGbs;
      this._imageId = value.imageId;
      this._sourceType = value.sourceType;
    }
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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
}
export interface OciContainerengineNodePoolNodes {
}

export function ociContainerengineNodePoolNodesToTerraform(struct?: OciContainerengineNodePoolNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ociContainerengineNodePoolNodesToHclTerraform(struct?: OciContainerengineNodePoolNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OciContainerengineNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OciContainerengineNodePoolNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciContainerengineNodePoolNodes | cdktf.IResolvable | undefined) {
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

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class OciContainerengineNodePoolNodesList extends cdktf.ComplexList {
  public internalValue? : OciContainerengineNodePoolNodes[] | cdktf.IResolvable

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
  public get(index: number): OciContainerengineNodePoolNodesOutputReference {
    return new OciContainerengineNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OciContainerengineNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#create OciContainerengineNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#delete OciContainerengineNodePool#delete}
  */
  readonly delete?: string;
}

export function ociContainerengineNodePoolTimeoutsToTerraform(struct?: OciContainerengineNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ociContainerengineNodePoolTimeoutsToHclTerraform(struct?: OciContainerengineNodePoolTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OciContainerengineNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OciContainerengineNodePoolTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciContainerengineNodePoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool duplocloud_oci_containerengine_node_pool}
*/
export class OciContainerengineNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_oci_containerengine_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciContainerengineNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciContainerengineNodePool to import
  * @param importFromId The id of the existing OciContainerengineNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciContainerengineNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_oci_containerengine_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.29/docs/resources/oci_containerengine_node_pool duplocloud_oci_containerengine_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciContainerengineNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: OciContainerengineNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_oci_containerengine_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.29',
        providerVersionConstraint: '0.11.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kubernetesVersion = config.kubernetesVersion;
    this._name = config.name;
    this._nodeImageId = config.nodeImageId;
    this._nodeImageName = config.nodeImageName;
    this._nodeMetadata = config.nodeMetadata;
    this._nodeShape = config.nodeShape;
    this._quantityPerSubnet = config.quantityPerSubnet;
    this._sshPublicKey = config.sshPublicKey;
    this._subnetIds = config.subnetIds;
    this._systemTags = config.systemTags;
    this._tenantId = config.tenantId;
    this._waitUntilReady = config.waitUntilReady;
    this._initialNodeLabels.internalValue = config.initialNodeLabels;
    this._nodeConfigDetails.internalValue = config.nodeConfigDetails;
    this._nodeShapeConfig.internalValue = config.nodeShapeConfig;
    this._nodeSourceDetails.internalValue = config.nodeSourceDetails;
    this._nodes.internalValue = config.nodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: false, optional: true, required: false
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

  // freeform_tags - computed: false, optional: true, required: false
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

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
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

  // node_image_id - computed: true, optional: true, required: false
  private _nodeImageId?: string; 
  public get nodeImageId() {
    return this.getStringAttribute('node_image_id');
  }
  public set nodeImageId(value: string) {
    this._nodeImageId = value;
  }
  public resetNodeImageId() {
    this._nodeImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageIdInput() {
    return this._nodeImageId;
  }

  // node_image_name - computed: true, optional: true, required: false
  private _nodeImageName?: string; 
  public get nodeImageName() {
    return this.getStringAttribute('node_image_name');
  }
  public set nodeImageName(value: string) {
    this._nodeImageName = value;
  }
  public resetNodeImageName() {
    this._nodeImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageNameInput() {
    return this._nodeImageName;
  }

  // node_metadata - computed: false, optional: true, required: false
  private _nodeMetadata?: { [key: string]: string }; 
  public get nodeMetadata() {
    return this.getStringMapAttribute('node_metadata');
  }
  public set nodeMetadata(value: { [key: string]: string }) {
    this._nodeMetadata = value;
  }
  public resetNodeMetadata() {
    this._nodeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetadataInput() {
    return this._nodeMetadata;
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // node_shape - computed: false, optional: false, required: true
  private _nodeShape?: string; 
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }
  public set nodeShape(value: string) {
    this._nodeShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeShapeInput() {
    return this._nodeShape;
  }

  // quantity_per_subnet - computed: true, optional: true, required: false
  private _quantityPerSubnet?: number; 
  public get quantityPerSubnet() {
    return this.getNumberAttribute('quantity_per_subnet');
  }
  public set quantityPerSubnet(value: number) {
    this._quantityPerSubnet = value;
  }
  public resetQuantityPerSubnet() {
    this._quantityPerSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityPerSubnetInput() {
    return this._quantityPerSubnet;
  }

  // ssh_public_key - computed: true, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // system_tags - computed: false, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // initial_node_labels - computed: false, optional: true, required: false
  private _initialNodeLabels = new OciContainerengineNodePoolInitialNodeLabelsList(this, "initial_node_labels", false);
  public get initialNodeLabels() {
    return this._initialNodeLabels;
  }
  public putInitialNodeLabels(value: OciContainerengineNodePoolInitialNodeLabels[] | cdktf.IResolvable) {
    this._initialNodeLabels.internalValue = value;
  }
  public resetInitialNodeLabels() {
    this._initialNodeLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeLabelsInput() {
    return this._initialNodeLabels.internalValue;
  }

  // node_config_details - computed: false, optional: true, required: false
  private _nodeConfigDetails = new OciContainerengineNodePoolNodeConfigDetailsOutputReference(this, "node_config_details");
  public get nodeConfigDetails() {
    return this._nodeConfigDetails;
  }
  public putNodeConfigDetails(value: OciContainerengineNodePoolNodeConfigDetails) {
    this._nodeConfigDetails.internalValue = value;
  }
  public resetNodeConfigDetails() {
    this._nodeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDetailsInput() {
    return this._nodeConfigDetails.internalValue;
  }

  // node_shape_config - computed: false, optional: false, required: true
  private _nodeShapeConfig = new OciContainerengineNodePoolNodeShapeConfigOutputReference(this, "node_shape_config");
  public get nodeShapeConfig() {
    return this._nodeShapeConfig;
  }
  public putNodeShapeConfig(value: OciContainerengineNodePoolNodeShapeConfig) {
    this._nodeShapeConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeShapeConfigInput() {
    return this._nodeShapeConfig.internalValue;
  }

  // node_source_details - computed: false, optional: true, required: false
  private _nodeSourceDetails = new OciContainerengineNodePoolNodeSourceDetailsOutputReference(this, "node_source_details");
  public get nodeSourceDetails() {
    return this._nodeSourceDetails;
  }
  public putNodeSourceDetails(value: OciContainerengineNodePoolNodeSourceDetails) {
    this._nodeSourceDetails.internalValue = value;
  }
  public resetNodeSourceDetails() {
    this._nodeSourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSourceDetailsInput() {
    return this._nodeSourceDetails.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new OciContainerengineNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: OciContainerengineNodePoolNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OciContainerengineNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OciContainerengineNodePoolTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      name: cdktf.stringToTerraform(this._name),
      node_image_id: cdktf.stringToTerraform(this._nodeImageId),
      node_image_name: cdktf.stringToTerraform(this._nodeImageName),
      node_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeMetadata),
      node_shape: cdktf.stringToTerraform(this._nodeShape),
      quantity_per_subnet: cdktf.numberToTerraform(this._quantityPerSubnet),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      initial_node_labels: cdktf.listMapper(ociContainerengineNodePoolInitialNodeLabelsToTerraform, true)(this._initialNodeLabels.internalValue),
      node_config_details: ociContainerengineNodePoolNodeConfigDetailsToTerraform(this._nodeConfigDetails.internalValue),
      node_shape_config: ociContainerengineNodePoolNodeShapeConfigToTerraform(this._nodeShapeConfig.internalValue),
      node_source_details: ociContainerengineNodePoolNodeSourceDetailsToTerraform(this._nodeSourceDetails.internalValue),
      nodes: cdktf.listMapper(ociContainerengineNodePoolNodesToTerraform, true)(this._nodes.internalValue),
      timeouts: ociContainerengineNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
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
      node_image_id: {
        value: cdktf.stringToHclTerraform(this._nodeImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_image_name: {
        value: cdktf.stringToHclTerraform(this._nodeImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      node_shape: {
        value: cdktf.stringToHclTerraform(this._nodeShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quantity_per_subnet: {
        value: cdktf.numberToHclTerraform(this._quantityPerSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      initial_node_labels: {
        value: cdktf.listMapperHcl(ociContainerengineNodePoolInitialNodeLabelsToHclTerraform, true)(this._initialNodeLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciContainerengineNodePoolInitialNodeLabelsList",
      },
      node_config_details: {
        value: ociContainerengineNodePoolNodeConfigDetailsToHclTerraform(this._nodeConfigDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciContainerengineNodePoolNodeConfigDetailsList",
      },
      node_shape_config: {
        value: ociContainerengineNodePoolNodeShapeConfigToHclTerraform(this._nodeShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciContainerengineNodePoolNodeShapeConfigList",
      },
      node_source_details: {
        value: ociContainerengineNodePoolNodeSourceDetailsToHclTerraform(this._nodeSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciContainerengineNodePoolNodeSourceDetailsList",
      },
      nodes: {
        value: cdktf.listMapperHcl(ociContainerengineNodePoolNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OciContainerengineNodePoolNodesList",
      },
      timeouts: {
        value: ociContainerengineNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OciContainerengineNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
