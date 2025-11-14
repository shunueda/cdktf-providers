// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpEsxiHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#cluster_id DataOciOcvpEsxiHosts#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#compartment_id DataOciOcvpEsxiHosts#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#compute_instance_id DataOciOcvpEsxiHosts#compute_instance_id}
  */
  readonly computeInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#display_name DataOciOcvpEsxiHosts#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#id DataOciOcvpEsxiHosts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#is_billing_donors_only DataOciOcvpEsxiHosts#is_billing_donors_only}
  */
  readonly isBillingDonorsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#is_swap_billing_only DataOciOcvpEsxiHosts#is_swap_billing_only}
  */
  readonly isSwapBillingOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#sddc_id DataOciOcvpEsxiHosts#sddc_id}
  */
  readonly sddcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#state DataOciOcvpEsxiHosts#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#filter DataOciOcvpEsxiHosts#filter}
  */
  readonly filter?: DataOciOcvpEsxiHostsFilter[] | cdktf.IResolvable;
}
export interface DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachments {
}

export function dataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsToTerraform(struct?: DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsToHclTerraform(struct?: DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachments | undefined) {
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

export class DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsOutputReference {
    return new DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpEsxiHostsEsxiHostCollection {
}

export function dataOciOcvpEsxiHostsEsxiHostCollectionToTerraform(struct?: DataOciOcvpEsxiHostsEsxiHostCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpEsxiHostsEsxiHostCollectionToHclTerraform(struct?: DataOciOcvpEsxiHostsEsxiHostCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpEsxiHostsEsxiHostCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpEsxiHostsEsxiHostCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_datastore_cluster_ids - computed: true, optional: false, required: false
  public get attachDatastoreClusterIds() {
    return this.getListAttribute('attach_datastore_cluster_ids');
  }

  // billing_contract_end_date - computed: true, optional: false, required: false
  public get billingContractEndDate() {
    return this.getStringAttribute('billing_contract_end_date');
  }

  // billing_donor_host_id - computed: true, optional: false, required: false
  public get billingDonorHostId() {
    return this.getStringAttribute('billing_donor_host_id');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_availability_domain - computed: true, optional: false, required: false
  public get computeAvailabilityDomain() {
    return this.getStringAttribute('compute_availability_domain');
  }

  // compute_instance_id - computed: true, optional: false, required: false
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
  }

  // current_commitment - computed: true, optional: false, required: false
  public get currentCommitment() {
    return this.getStringAttribute('current_commitment');
  }

  // current_sku - computed: true, optional: false, required: false
  public get currentSku() {
    return this.getStringAttribute('current_sku');
  }

  // datastore_attachments - computed: true, optional: false, required: false
  private _datastoreAttachments = new DataOciOcvpEsxiHostsEsxiHostCollectionDatastoreAttachmentsList(this, "datastore_attachments", false);
  public get datastoreAttachments() {
    return this._datastoreAttachments;
  }

  // datastore_cluster_ids - computed: true, optional: false, required: false
  public get datastoreClusterIds() {
    return this.getListAttribute('datastore_cluster_ids');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // detach_datastore_cluster_ids - computed: true, optional: false, required: false
  public get detachDatastoreClusterIds() {
    return this.getListAttribute('detach_datastore_cluster_ids');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // esxi_software_version - computed: true, optional: false, required: false
  public get esxiSoftwareVersion() {
    return this.getStringAttribute('esxi_software_version');
  }

  // failed_esxi_host_id - computed: true, optional: false, required: false
  public get failedEsxiHostId() {
    return this.getStringAttribute('failed_esxi_host_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // grace_period_end_date - computed: true, optional: false, required: false
  public get gracePeriodEndDate() {
    return this.getStringAttribute('grace_period_end_date');
  }

  // host_ocpu_count - computed: true, optional: false, required: false
  public get hostOcpuCount() {
    return this.getNumberAttribute('host_ocpu_count');
  }

  // host_shape_name - computed: true, optional: false, required: false
  public get hostShapeName() {
    return this.getStringAttribute('host_shape_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // next_sku - computed: true, optional: false, required: false
  public get nextSku() {
    return this.getStringAttribute('next_sku');
  }

  // non_upgraded_esxi_host_id - computed: true, optional: false, required: false
  public get nonUpgradedEsxiHostId() {
    return this.getStringAttribute('non_upgraded_esxi_host_id');
  }

  // replacement_esxi_host_id - computed: true, optional: false, required: false
  public get replacementEsxiHostId() {
    return this.getStringAttribute('replacement_esxi_host_id');
  }

  // sddc_id - computed: true, optional: false, required: false
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
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
}

export class DataOciOcvpEsxiHostsEsxiHostCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference {
    return new DataOciOcvpEsxiHostsEsxiHostCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOcvpEsxiHostsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#name DataOciOcvpEsxiHosts#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#regex DataOciOcvpEsxiHosts#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#values DataOciOcvpEsxiHosts#values}
  */
  readonly values: string[];
}

export function dataOciOcvpEsxiHostsFilterToTerraform(struct?: DataOciOcvpEsxiHostsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOcvpEsxiHostsFilterToHclTerraform(struct?: DataOciOcvpEsxiHostsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOcvpEsxiHostsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpEsxiHostsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpEsxiHostsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOcvpEsxiHostsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOcvpEsxiHostsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciOcvpEsxiHostsFilterOutputReference {
    return new DataOciOcvpEsxiHostsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts oci_ocvp_esxi_hosts}
*/
export class DataOciOcvpEsxiHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_esxi_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpEsxiHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpEsxiHosts to import
  * @param importFromId The id of the existing DataOciOcvpEsxiHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpEsxiHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_esxi_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/ocvp_esxi_hosts oci_ocvp_esxi_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpEsxiHostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpEsxiHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_esxi_hosts',
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
    this._clusterId = config.clusterId;
    this._compartmentId = config.compartmentId;
    this._computeInstanceId = config.computeInstanceId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isBillingDonorsOnly = config.isBillingDonorsOnly;
    this._isSwapBillingOnly = config.isSwapBillingOnly;
    this._sddcId = config.sddcId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // compartment_id - computed: false, optional: true, required: false
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

  // compute_instance_id - computed: false, optional: true, required: false
  private _computeInstanceId?: string; 
  public get computeInstanceId() {
    return this.getStringAttribute('compute_instance_id');
  }
  public set computeInstanceId(value: string) {
    this._computeInstanceId = value;
  }
  public resetComputeInstanceId() {
    this._computeInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInstanceIdInput() {
    return this._computeInstanceId;
  }

  // display_name - computed: false, optional: true, required: false
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

  // esxi_host_collection - computed: true, optional: false, required: false
  private _esxiHostCollection = new DataOciOcvpEsxiHostsEsxiHostCollectionList(this, "esxi_host_collection", false);
  public get esxiHostCollection() {
    return this._esxiHostCollection;
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

  // is_billing_donors_only - computed: false, optional: true, required: false
  private _isBillingDonorsOnly?: boolean | cdktf.IResolvable; 
  public get isBillingDonorsOnly() {
    return this.getBooleanAttribute('is_billing_donors_only');
  }
  public set isBillingDonorsOnly(value: boolean | cdktf.IResolvable) {
    this._isBillingDonorsOnly = value;
  }
  public resetIsBillingDonorsOnly() {
    this._isBillingDonorsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBillingDonorsOnlyInput() {
    return this._isBillingDonorsOnly;
  }

  // is_swap_billing_only - computed: false, optional: true, required: false
  private _isSwapBillingOnly?: boolean | cdktf.IResolvable; 
  public get isSwapBillingOnly() {
    return this.getBooleanAttribute('is_swap_billing_only');
  }
  public set isSwapBillingOnly(value: boolean | cdktf.IResolvable) {
    this._isSwapBillingOnly = value;
  }
  public resetIsSwapBillingOnly() {
    this._isSwapBillingOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSwapBillingOnlyInput() {
    return this._isSwapBillingOnly;
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

  // state - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOcvpEsxiHostsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOcvpEsxiHostsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_instance_id: cdktf.stringToTerraform(this._computeInstanceId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_billing_donors_only: cdktf.booleanToTerraform(this._isBillingDonorsOnly),
      is_swap_billing_only: cdktf.booleanToTerraform(this._isSwapBillingOnly),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciOcvpEsxiHostsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_instance_id: {
        value: cdktf.stringToHclTerraform(this._computeInstanceId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_billing_donors_only: {
        value: cdktf.booleanToHclTerraform(this._isBillingDonorsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_swap_billing_only: {
        value: cdktf.booleanToHclTerraform(this._isSwapBillingOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciOcvpEsxiHostsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOcvpEsxiHostsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
