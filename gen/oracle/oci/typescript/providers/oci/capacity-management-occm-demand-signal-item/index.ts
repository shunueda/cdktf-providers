// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapacityManagementOccmDemandSignalItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#availability_domain CapacityManagementOccmDemandSignalItem#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#compartment_id CapacityManagementOccmDemandSignalItem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#defined_tags CapacityManagementOccmDemandSignalItem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#demand_quantity CapacityManagementOccmDemandSignalItem#demand_quantity}
  */
  readonly demandQuantity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#demand_signal_catalog_resource_id CapacityManagementOccmDemandSignalItem#demand_signal_catalog_resource_id}
  */
  readonly demandSignalCatalogResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#demand_signal_id CapacityManagementOccmDemandSignalItem#demand_signal_id}
  */
  readonly demandSignalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#freeform_tags CapacityManagementOccmDemandSignalItem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#id CapacityManagementOccmDemandSignalItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#notes CapacityManagementOccmDemandSignalItem#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#region CapacityManagementOccmDemandSignalItem#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#request_type CapacityManagementOccmDemandSignalItem#request_type}
  */
  readonly requestType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#resource_properties CapacityManagementOccmDemandSignalItem#resource_properties}
  */
  readonly resourceProperties: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#target_compartment_id CapacityManagementOccmDemandSignalItem#target_compartment_id}
  */
  readonly targetCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#time_needed_before CapacityManagementOccmDemandSignalItem#time_needed_before}
  */
  readonly timeNeededBefore: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#timeouts CapacityManagementOccmDemandSignalItem#timeouts}
  */
  readonly timeouts?: CapacityManagementOccmDemandSignalItemTimeouts;
}
export interface CapacityManagementOccmDemandSignalItemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#create CapacityManagementOccmDemandSignalItem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#delete CapacityManagementOccmDemandSignalItem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#update CapacityManagementOccmDemandSignalItem#update}
  */
  readonly update?: string;
}

export function capacityManagementOccmDemandSignalItemTimeoutsToTerraform(struct?: CapacityManagementOccmDemandSignalItemTimeouts | cdktf.IResolvable): any {
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


export function capacityManagementOccmDemandSignalItemTimeoutsToHclTerraform(struct?: CapacityManagementOccmDemandSignalItemTimeouts | cdktf.IResolvable): any {
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

export class CapacityManagementOccmDemandSignalItemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CapacityManagementOccmDemandSignalItemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapacityManagementOccmDemandSignalItemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item oci_capacity_management_occm_demand_signal_item}
*/
export class CapacityManagementOccmDemandSignalItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occm_demand_signal_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapacityManagementOccmDemandSignalItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapacityManagementOccmDemandSignalItem to import
  * @param importFromId The id of the existing CapacityManagementOccmDemandSignalItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapacityManagementOccmDemandSignalItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_occm_demand_signal_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/capacity_management_occm_demand_signal_item oci_capacity_management_occm_demand_signal_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapacityManagementOccmDemandSignalItemConfig
  */
  public constructor(scope: Construct, id: string, config: CapacityManagementOccmDemandSignalItemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occm_demand_signal_item',
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
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._demandQuantity = config.demandQuantity;
    this._demandSignalCatalogResourceId = config.demandSignalCatalogResourceId;
    this._demandSignalId = config.demandSignalId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._notes = config.notes;
    this._region = config.region;
    this._requestType = config.requestType;
    this._resourceProperties = config.resourceProperties;
    this._targetCompartmentId = config.targetCompartmentId;
    this._timeNeededBefore = config.timeNeededBefore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // demand_quantity - computed: false, optional: false, required: true
  private _demandQuantity?: string; 
  public get demandQuantity() {
    return this.getStringAttribute('demand_quantity');
  }
  public set demandQuantity(value: string) {
    this._demandQuantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demandQuantityInput() {
    return this._demandQuantity;
  }

  // demand_signal_catalog_resource_id - computed: false, optional: false, required: true
  private _demandSignalCatalogResourceId?: string; 
  public get demandSignalCatalogResourceId() {
    return this.getStringAttribute('demand_signal_catalog_resource_id');
  }
  public set demandSignalCatalogResourceId(value: string) {
    this._demandSignalCatalogResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demandSignalCatalogResourceIdInput() {
    return this._demandSignalCatalogResourceId;
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

  // demand_signal_namespace - computed: true, optional: false, required: false
  public get demandSignalNamespace() {
    return this.getStringAttribute('demand_signal_namespace');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_type - computed: false, optional: false, required: true
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_properties - computed: false, optional: false, required: true
  private _resourceProperties?: { [key: string]: string }; 
  public get resourceProperties() {
    return this.getStringMapAttribute('resource_properties');
  }
  public set resourceProperties(value: { [key: string]: string }) {
    this._resourceProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePropertiesInput() {
    return this._resourceProperties;
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

  // target_compartment_id - computed: true, optional: true, required: false
  private _targetCompartmentId?: string; 
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }
  public set targetCompartmentId(value: string) {
    this._targetCompartmentId = value;
  }
  public resetTargetCompartmentId() {
    this._targetCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompartmentIdInput() {
    return this._targetCompartmentId;
  }

  // time_needed_before - computed: false, optional: false, required: true
  private _timeNeededBefore?: string; 
  public get timeNeededBefore() {
    return this.getStringAttribute('time_needed_before');
  }
  public set timeNeededBefore(value: string) {
    this._timeNeededBefore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeNeededBeforeInput() {
    return this._timeNeededBefore;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CapacityManagementOccmDemandSignalItemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CapacityManagementOccmDemandSignalItemTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      demand_quantity: cdktf.stringToTerraform(this._demandQuantity),
      demand_signal_catalog_resource_id: cdktf.stringToTerraform(this._demandSignalCatalogResourceId),
      demand_signal_id: cdktf.stringToTerraform(this._demandSignalId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      region: cdktf.stringToTerraform(this._region),
      request_type: cdktf.stringToTerraform(this._requestType),
      resource_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceProperties),
      target_compartment_id: cdktf.stringToTerraform(this._targetCompartmentId),
      time_needed_before: cdktf.stringToTerraform(this._timeNeededBefore),
      timeouts: capacityManagementOccmDemandSignalItemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
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
      demand_quantity: {
        value: cdktf.stringToHclTerraform(this._demandQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      demand_signal_catalog_resource_id: {
        value: cdktf.stringToHclTerraform(this._demandSignalCatalogResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      demand_signal_id: {
        value: cdktf.stringToHclTerraform(this._demandSignalId),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_type: {
        value: cdktf.stringToHclTerraform(this._requestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_compartment_id: {
        value: cdktf.stringToHclTerraform(this._targetCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_needed_before: {
        value: cdktf.stringToHclTerraform(this._timeNeededBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: capacityManagementOccmDemandSignalItemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CapacityManagementOccmDemandSignalItemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
