// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapacityManagementInternalOccmDemandSignalDeliveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#accepted_quantity CapacityManagementInternalOccmDemandSignalDelivery#accepted_quantity}
  */
  readonly acceptedQuantity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#compartment_id CapacityManagementInternalOccmDemandSignalDelivery#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#defined_tags CapacityManagementInternalOccmDemandSignalDelivery#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#demand_signal_id CapacityManagementInternalOccmDemandSignalDelivery#demand_signal_id}
  */
  readonly demandSignalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#demand_signal_item_id CapacityManagementInternalOccmDemandSignalDelivery#demand_signal_item_id}
  */
  readonly demandSignalItemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#freeform_tags CapacityManagementInternalOccmDemandSignalDelivery#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#id CapacityManagementInternalOccmDemandSignalDelivery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#justification CapacityManagementInternalOccmDemandSignalDelivery#justification}
  */
  readonly justification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#lifecycle_details CapacityManagementInternalOccmDemandSignalDelivery#lifecycle_details}
  */
  readonly lifecycleDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#notes CapacityManagementInternalOccmDemandSignalDelivery#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#occ_customer_group_id CapacityManagementInternalOccmDemandSignalDelivery#occ_customer_group_id}
  */
  readonly occCustomerGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#timeouts CapacityManagementInternalOccmDemandSignalDelivery#timeouts}
  */
  readonly timeouts?: CapacityManagementInternalOccmDemandSignalDeliveryTimeouts;
}
export interface CapacityManagementInternalOccmDemandSignalDeliveryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#create CapacityManagementInternalOccmDemandSignalDelivery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#delete CapacityManagementInternalOccmDemandSignalDelivery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#update CapacityManagementInternalOccmDemandSignalDelivery#update}
  */
  readonly update?: string;
}

export function capacityManagementInternalOccmDemandSignalDeliveryTimeoutsToTerraform(struct?: CapacityManagementInternalOccmDemandSignalDeliveryTimeouts | cdktf.IResolvable): any {
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


export function capacityManagementInternalOccmDemandSignalDeliveryTimeoutsToHclTerraform(struct?: CapacityManagementInternalOccmDemandSignalDeliveryTimeouts | cdktf.IResolvable): any {
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

export class CapacityManagementInternalOccmDemandSignalDeliveryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CapacityManagementInternalOccmDemandSignalDeliveryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapacityManagementInternalOccmDemandSignalDeliveryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery oci_capacity_management_internal_occm_demand_signal_delivery}
*/
export class CapacityManagementInternalOccmDemandSignalDelivery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_internal_occm_demand_signal_delivery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapacityManagementInternalOccmDemandSignalDelivery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapacityManagementInternalOccmDemandSignalDelivery to import
  * @param importFromId The id of the existing CapacityManagementInternalOccmDemandSignalDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapacityManagementInternalOccmDemandSignalDelivery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_internal_occm_demand_signal_delivery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/capacity_management_internal_occm_demand_signal_delivery oci_capacity_management_internal_occm_demand_signal_delivery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapacityManagementInternalOccmDemandSignalDeliveryConfig
  */
  public constructor(scope: Construct, id: string, config: CapacityManagementInternalOccmDemandSignalDeliveryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_internal_occm_demand_signal_delivery',
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
    this._acceptedQuantity = config.acceptedQuantity;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._demandSignalId = config.demandSignalId;
    this._demandSignalItemId = config.demandSignalItemId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._justification = config.justification;
    this._lifecycleDetails = config.lifecycleDetails;
    this._notes = config.notes;
    this._occCustomerGroupId = config.occCustomerGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_quantity - computed: false, optional: false, required: true
  private _acceptedQuantity?: string; 
  public get acceptedQuantity() {
    return this.getStringAttribute('accepted_quantity');
  }
  public set acceptedQuantity(value: string) {
    this._acceptedQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedQuantityInput() {
    return this._acceptedQuantity;
  }

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

  // demand_signal_id - computed: false, optional: false, required: true
  private _demandSignalId?: string; 
  public get demandSignalId() {
    return this.getStringAttribute('demand_signal_id');
  }
  public set demandSignalId(value: string) {
    this._demandSignalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demandSignalIdInput() {
    return this._demandSignalId;
  }

  // demand_signal_item_id - computed: false, optional: false, required: true
  private _demandSignalItemId?: string; 
  public get demandSignalItemId() {
    return this.getStringAttribute('demand_signal_item_id');
  }
  public set demandSignalItemId(value: string) {
    this._demandSignalItemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demandSignalItemIdInput() {
    return this._demandSignalItemId;
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

  // justification - computed: true, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // lifecycle_details - computed: true, optional: true, required: false
  private _lifecycleDetails?: string; 
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }
  public set lifecycleDetails(value: string) {
    this._lifecycleDetails = value;
  }
  public resetLifecycleDetails() {
    this._lifecycleDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleDetailsInput() {
    return this._lifecycleDetails;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // occ_customer_group_id - computed: false, optional: false, required: true
  private _occCustomerGroupId?: string; 
  public get occCustomerGroupId() {
    return this.getStringAttribute('occ_customer_group_id');
  }
  public set occCustomerGroupId(value: string) {
    this._occCustomerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occCustomerGroupIdInput() {
    return this._occCustomerGroupId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_delivered - computed: true, optional: false, required: false
  public get timeDelivered() {
    return this.getStringAttribute('time_delivered');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CapacityManagementInternalOccmDemandSignalDeliveryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CapacityManagementInternalOccmDemandSignalDeliveryTimeouts) {
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
      accepted_quantity: cdktf.stringToTerraform(this._acceptedQuantity),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      demand_signal_id: cdktf.stringToTerraform(this._demandSignalId),
      demand_signal_item_id: cdktf.stringToTerraform(this._demandSignalItemId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      justification: cdktf.stringToTerraform(this._justification),
      lifecycle_details: cdktf.stringToTerraform(this._lifecycleDetails),
      notes: cdktf.stringToTerraform(this._notes),
      occ_customer_group_id: cdktf.stringToTerraform(this._occCustomerGroupId),
      timeouts: capacityManagementInternalOccmDemandSignalDeliveryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted_quantity: {
        value: cdktf.stringToHclTerraform(this._acceptedQuantity),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      demand_signal_id: {
        value: cdktf.stringToHclTerraform(this._demandSignalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      demand_signal_item_id: {
        value: cdktf.stringToHclTerraform(this._demandSignalItemId),
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
      justification: {
        value: cdktf.stringToHclTerraform(this._justification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_details: {
        value: cdktf.stringToHclTerraform(this._lifecycleDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      occ_customer_group_id: {
        value: cdktf.stringToHclTerraform(this._occCustomerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: capacityManagementInternalOccmDemandSignalDeliveryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CapacityManagementInternalOccmDemandSignalDeliveryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
