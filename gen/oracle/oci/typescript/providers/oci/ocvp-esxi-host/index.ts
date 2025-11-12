// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OcvpEsxiHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#attach_datastore_cluster_ids OcvpEsxiHost#attach_datastore_cluster_ids}
  */
  readonly attachDatastoreClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}
  */
  readonly billingDonorHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}
  */
  readonly computeAvailabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}
  */
  readonly currentSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#detach_datastore_cluster_ids OcvpEsxiHost#detach_datastore_cluster_ids}
  */
  readonly detachDatastoreClusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}
  */
  readonly esxiSoftwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}
  */
  readonly failedEsxiHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}
  */
  readonly hostOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}
  */
  readonly hostShapeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}
  */
  readonly nextSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}
  */
  readonly nonUpgradedEsxiHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}
  */
  readonly sddcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}
  */
  readonly timeouts?: OcvpEsxiHostTimeouts;
}
export interface OcvpEsxiHostDatastoreAttachments {
}

export function ocvpEsxiHostDatastoreAttachmentsToTerraform(struct?: OcvpEsxiHostDatastoreAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ocvpEsxiHostDatastoreAttachmentsToHclTerraform(struct?: OcvpEsxiHostDatastoreAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OcvpEsxiHostDatastoreAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OcvpEsxiHostDatastoreAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpEsxiHostDatastoreAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volume_id - computed: true, optional: false, required: false
  public get blockVolumeId() {
    return this.getStringAttribute('block_volume_id');
  }

  // datastore_id - computed: true, optional: false, required: false
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // volume_iqn - computed: true, optional: false, required: false
  public get volumeIqn() {
    return this.getStringAttribute('volume_iqn');
  }
}

export class OcvpEsxiHostDatastoreAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): OcvpEsxiHostDatastoreAttachmentsOutputReference {
    return new OcvpEsxiHostDatastoreAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OcvpEsxiHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}
  */
  readonly create?: string;
}

export function ocvpEsxiHostTimeoutsToTerraform(struct?: OcvpEsxiHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function ocvpEsxiHostTimeoutsToHclTerraform(struct?: OcvpEsxiHostTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OcvpEsxiHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OcvpEsxiHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OcvpEsxiHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host}
*/
export class OcvpEsxiHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_esxi_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OcvpEsxiHost to import
  * @param importFromId The id of the existing OcvpEsxiHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OcvpEsxiHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_esxi_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OcvpEsxiHostConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OcvpEsxiHostConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_esxi_host',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachDatastoreClusterIds = config.attachDatastoreClusterIds;
    this._billingDonorHostId = config.billingDonorHostId;
    this._capacityReservationId = config.capacityReservationId;
    this._clusterId = config.clusterId;
    this._computeAvailabilityDomain = config.computeAvailabilityDomain;
    this._currentSku = config.currentSku;
    this._definedTags = config.definedTags;
    this._detachDatastoreClusterIds = config.detachDatastoreClusterIds;
    this._displayName = config.displayName;
    this._esxiSoftwareVersion = config.esxiSoftwareVersion;
    this._failedEsxiHostId = config.failedEsxiHostId;
    this._freeformTags = config.freeformTags;
    this._hostOcpuCount = config.hostOcpuCount;
    this._hostShapeName = config.hostShapeName;
    this._id = config.id;
    this._nextSku = config.nextSku;
    this._nonUpgradedEsxiHostId = config.nonUpgradedEsxiHostId;
    this._sddcId = config.sddcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_datastore_cluster_ids - computed: false, optional: true, required: false
  private _attachDatastoreClusterIds?: string[]; 
  public get attachDatastoreClusterIds() {
    return this.getListAttribute('attach_datastore_cluster_ids');
  }
  public set attachDatastoreClusterIds(value: string[]) {
    this._attachDatastoreClusterIds = value;
  }
  public resetAttachDatastoreClusterIds() {
    this._attachDatastoreClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachDatastoreClusterIdsInput() {
    return this._attachDatastoreClusterIds;
  }

  // billing_contract_end_date - computed: true, optional: false, required: false
  public get billingContractEndDate() {
    return this.getStringAttribute('billing_contract_end_date');
  }

  // billing_donor_host_id - computed: true, optional: true, required: false
  private _billingDonorHostId?: string; 
  public get billingDonorHostId() {
    return this.getStringAttribute('billing_donor_host_id');
  }
  public set billingDonorHostId(value: string) {
    this._billingDonorHostId = value;
  }
  public resetBillingDonorHostId() {
    this._billingDonorHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingDonorHostIdInput() {
    return this._billingDonorHostId;
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

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: true, optional: true, required: false
  private _computeAvailabilityDomain?: string; 
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }
  public set computeAvailabilityDomain(value: string) {
    this._computeAvailabilityDomain = value;
  }
  public resetComputeAvailabilityDomain() {
    this._computeAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeAvailabilityDomainInput() {
    return this._computeAvailabilityDomain;
  }

  // compute_instance_id - computed: true, optional: false, required: false
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
  }

  // current_commitment - computed: true, optional: false, required: false
  public get currentCommitment() {
    return this.getStringAttribute('current_commitment');
  }

  // current_sku - computed: true, optional: true, required: false
  private _currentSku?: string; 
  public get currentSku() {
    return this.getStringAttribute('current_sku');
  }
  public set currentSku(value: string) {
    this._currentSku = value;
  }
  public resetCurrentSku() {
    this._currentSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSkuInput() {
    return this._currentSku;
  }

  // datastore_attachments - computed: true, optional: false, required: false
  private _datastoreAttachments = new OcvpEsxiHostDatastoreAttachmentsList(this, "datastore_attachments", false);
  public get datastoreAttachments() {
    return this._datastoreAttachments;
  }

  // datastore_cluster_ids - computed: true, optional: false, required: false
  public get datastoreClusterIds() {
    return this.getListAttribute('datastore_cluster_ids');
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

  // detach_datastore_cluster_ids - computed: false, optional: true, required: false
  private _detachDatastoreClusterIds?: string[]; 
  public get detachDatastoreClusterIds() {
    return this.getListAttribute('detach_datastore_cluster_ids');
  }
  public set detachDatastoreClusterIds(value: string[]) {
    this._detachDatastoreClusterIds = value;
  }
  public resetDetachDatastoreClusterIds() {
    this._detachDatastoreClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachDatastoreClusterIdsInput() {
    return this._detachDatastoreClusterIds;
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

  // esxi_software_version - computed: true, optional: true, required: false
  private _esxiSoftwareVersion?: string; 
  public get esxiSoftwareVersion() {
    return this.getStringAttribute('esxi_software_version');
  }
  public set esxiSoftwareVersion(value: string) {
    this._esxiSoftwareVersion = value;
  }
  public resetEsxiSoftwareVersion() {
    this._esxiSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiSoftwareVersionInput() {
    return this._esxiSoftwareVersion;
  }

  // failed_esxi_host_id - computed: true, optional: true, required: false
  private _failedEsxiHostId?: string; 
  public get failedEsxiHostId() {
    return this.getStringAttribute('failed_esxi_host_id');
  }
  public set failedEsxiHostId(value: string) {
    this._failedEsxiHostId = value;
  }
  public resetFailedEsxiHostId() {
    this._failedEsxiHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedEsxiHostIdInput() {
    return this._failedEsxiHostId;
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

  // grace_period_end_date - computed: true, optional: false, required: false
  public get gracePeriodEndDate() {
    return this.getStringAttribute('grace_period_end_date');
  }

  // host_ocpu_count - computed: true, optional: true, required: false
  private _hostOcpuCount?: number; 
  public get hostOcpuCount() {
    return this.getNumberAttribute('host_ocpu_count');
  }
  public set hostOcpuCount(value: number) {
    this._hostOcpuCount = value;
  }
  public resetHostOcpuCount() {
    this._hostOcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOcpuCountInput() {
    return this._hostOcpuCount;
  }

  // host_shape_name - computed: true, optional: true, required: false
  private _hostShapeName?: string; 
  public get hostShapeName() {
    return this.getStringAttribute('host_shape_name');
  }
  public set hostShapeName(value: string) {
    this._hostShapeName = value;
  }
  public resetHostShapeName() {
    this._hostShapeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostShapeNameInput() {
    return this._hostShapeName;
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

  // is_billing_continuation_in_progress - computed: true, optional: false, required: false
  public get isBillingContinuationInProgress() {
    return this.getBooleanAttribute('is_billing_continuation_in_progress');
  }

  // is_billing_swapping_in_progress - computed: true, optional: false, required: false
  public get isBillingSwappingInProgress() {
    return this.getBooleanAttribute('is_billing_swapping_in_progress');
  }

  // next_commitment - computed: true, optional: false, required: false
  public get nextCommitment() {
    return this.getStringAttribute('next_commitment');
  }

  // next_sku - computed: true, optional: true, required: false
  private _nextSku?: string; 
  public get nextSku() {
    return this.getStringAttribute('next_sku');
  }
  public set nextSku(value: string) {
    this._nextSku = value;
  }
  public resetNextSku() {
    this._nextSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextSkuInput() {
    return this._nextSku;
  }

  // non_upgraded_esxi_host_id - computed: true, optional: true, required: false
  private _nonUpgradedEsxiHostId?: string; 
  public get nonUpgradedEsxiHostId() {
    return this.getStringAttribute('non_upgraded_esxi_host_id');
  }
  public set nonUpgradedEsxiHostId(value: string) {
    this._nonUpgradedEsxiHostId = value;
  }
  public resetNonUpgradedEsxiHostId() {
    this._nonUpgradedEsxiHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonUpgradedEsxiHostIdInput() {
    return this._nonUpgradedEsxiHostId;
  }

  // replacement_esxi_host_id - computed: true, optional: false, required: false
  public get replacementEsxiHostId() {
    return this.getStringAttribute('replacement_esxi_host_id');
  }

  // sddc_id - computed: false, optional: true, required: false
  private _sddcId?: string; 
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }
  public resetSddcId() {
    this._sddcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcIdInput() {
    return this._sddcId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // swap_billing_host_id - computed: true, optional: false, required: false
  public get swapBillingHostId() {
    return this.getStringAttribute('swap_billing_host_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgraded_replacement_esxi_host_id - computed: true, optional: false, required: false
  public get upgradedReplacementEsxiHostId() {
    return this.getStringAttribute('upgraded_replacement_esxi_host_id');
  }

  // vmware_software_version - computed: true, optional: false, required: false
  public get vmwareSoftwareVersion() {
    return this.getStringAttribute('vmware_software_version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OcvpEsxiHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OcvpEsxiHostTimeouts) {
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
      attach_datastore_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attachDatastoreClusterIds),
      billing_donor_host_id: cdktf.stringToTerraform(this._billingDonorHostId),
      capacity_reservation_id: cdktf.stringToTerraform(this._capacityReservationId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      compute_availability_domain: cdktf.stringToTerraform(this._computeAvailabilityDomain),
      current_sku: cdktf.stringToTerraform(this._currentSku),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      detach_datastore_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._detachDatastoreClusterIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      esxi_software_version: cdktf.stringToTerraform(this._esxiSoftwareVersion),
      failed_esxi_host_id: cdktf.stringToTerraform(this._failedEsxiHostId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      host_ocpu_count: cdktf.numberToTerraform(this._hostOcpuCount),
      host_shape_name: cdktf.stringToTerraform(this._hostShapeName),
      id: cdktf.stringToTerraform(this._id),
      next_sku: cdktf.stringToTerraform(this._nextSku),
      non_upgraded_esxi_host_id: cdktf.stringToTerraform(this._nonUpgradedEsxiHostId),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
      timeouts: ocvpEsxiHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_datastore_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attachDatastoreClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      billing_donor_host_id: {
        value: cdktf.stringToHclTerraform(this._billingDonorHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_reservation_id: {
        value: cdktf.stringToHclTerraform(this._capacityReservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_availability_domain: {
        value: cdktf.stringToHclTerraform(this._computeAvailabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_sku: {
        value: cdktf.stringToHclTerraform(this._currentSku),
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
      detach_datastore_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._detachDatastoreClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esxi_software_version: {
        value: cdktf.stringToHclTerraform(this._esxiSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_esxi_host_id: {
        value: cdktf.stringToHclTerraform(this._failedEsxiHostId),
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
      host_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._hostOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_shape_name: {
        value: cdktf.stringToHclTerraform(this._hostShapeName),
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
      next_sku: {
        value: cdktf.stringToHclTerraform(this._nextSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_upgraded_esxi_host_id: {
        value: cdktf.stringToHclTerraform(this._nonUpgradedEsxiHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ocvpEsxiHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OcvpEsxiHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
