// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_esxi_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpEsxiHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_esxi_host#esxi_host_id DataOciOcvpEsxiHost#esxi_host_id}
  */
  readonly esxiHostId: string;
}
export interface DataOciOcvpEsxiHostDatastoreAttachments {
}

export function dataOciOcvpEsxiHostDatastoreAttachmentsToTerraform(struct?: DataOciOcvpEsxiHostDatastoreAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOcvpEsxiHostDatastoreAttachmentsToHclTerraform(struct?: DataOciOcvpEsxiHostDatastoreAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOcvpEsxiHostDatastoreAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOcvpEsxiHostDatastoreAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOcvpEsxiHostDatastoreAttachments | undefined) {
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

export class DataOciOcvpEsxiHostDatastoreAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOcvpEsxiHostDatastoreAttachmentsOutputReference {
    return new DataOciOcvpEsxiHostDatastoreAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_esxi_host oci_ocvp_esxi_host}
*/
export class DataOciOcvpEsxiHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_esxi_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpEsxiHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpEsxiHost to import
  * @param importFromId The id of the existing DataOciOcvpEsxiHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpEsxiHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_esxi_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/ocvp_esxi_host oci_ocvp_esxi_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpEsxiHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpEsxiHostConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_esxi_host',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._esxiHostId = config.esxiHostId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _datastoreAttachments = new DataOciOcvpEsxiHostDatastoreAttachmentsList(this, "datastore_attachments", false);
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

  // esxi_host_id - computed: false, optional: false, required: true
  private _esxiHostId?: string; 
  public get esxiHostId() {
    return this.getStringAttribute('esxi_host_id');
  }
  public set esxiHostId(value: string) {
    this._esxiHostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiHostIdInput() {
    return this._esxiHostId;
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

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      esxi_host_id: cdktf.stringToTerraform(this._esxiHostId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      esxi_host_id: {
        value: cdktf.stringToHclTerraform(this._esxiHostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
