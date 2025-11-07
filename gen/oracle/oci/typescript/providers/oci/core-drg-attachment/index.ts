// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreDrgAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#defined_tags CoreDrgAttachment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#display_name CoreDrgAttachment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#drg_id CoreDrgAttachment#drg_id}
  */
  readonly drgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#drg_route_table_id CoreDrgAttachment#drg_route_table_id}
  */
  readonly drgRouteTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#export_drg_route_distribution_id CoreDrgAttachment#export_drg_route_distribution_id}
  */
  readonly exportDrgRouteDistributionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#freeform_tags CoreDrgAttachment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#remove_export_drg_route_distribution_trigger CoreDrgAttachment#remove_export_drg_route_distribution_trigger}
  */
  readonly removeExportDrgRouteDistributionTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#vcn_id CoreDrgAttachment#vcn_id}
  */
  readonly vcnId?: string;
  /**
  * network_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#network_details CoreDrgAttachment#network_details}
  */
  readonly networkDetails?: CoreDrgAttachmentNetworkDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#timeouts CoreDrgAttachment#timeouts}
  */
  readonly timeouts?: CoreDrgAttachmentTimeouts;
}
export interface CoreDrgAttachmentNetworkDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#id CoreDrgAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#route_table_id CoreDrgAttachment#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#type CoreDrgAttachment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#vcn_route_type CoreDrgAttachment#vcn_route_type}
  */
  readonly vcnRouteType?: string;
}

export function coreDrgAttachmentNetworkDetailsToTerraform(struct?: CoreDrgAttachmentNetworkDetailsOutputReference | CoreDrgAttachmentNetworkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    route_table_id: cdktf.stringToTerraform(struct!.routeTableId),
    type: cdktf.stringToTerraform(struct!.type),
    vcn_route_type: cdktf.stringToTerraform(struct!.vcnRouteType),
  }
}


export function coreDrgAttachmentNetworkDetailsToHclTerraform(struct?: CoreDrgAttachmentNetworkDetailsOutputReference | CoreDrgAttachmentNetworkDetails): any {
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
    route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.routeTableId),
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
    vcn_route_type: {
      value: cdktf.stringToHclTerraform(struct!.vcnRouteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreDrgAttachmentNetworkDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreDrgAttachmentNetworkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._routeTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableId = this._routeTableId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vcnRouteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnRouteType = this._vcnRouteType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDrgAttachmentNetworkDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._routeTableId = undefined;
      this._type = undefined;
      this._vcnRouteType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._routeTableId = value.routeTableId;
      this._type = value.type;
      this._vcnRouteType = value.vcnRouteType;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // ipsec_connection_id - computed: true, optional: false, required: false
  public get ipsecConnectionId() {
    return this.getStringAttribute('ipsec_connection_id');
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // transport_attachment_id - computed: true, optional: false, required: false
  public get transportAttachmentId() {
    return this.getStringAttribute('transport_attachment_id');
  }

  // transport_only_mode - computed: true, optional: false, required: false
  public get transportOnlyMode() {
    return this.getBooleanAttribute('transport_only_mode');
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

  // vcn_route_type - computed: true, optional: true, required: false
  private _vcnRouteType?: string; 
  public get vcnRouteType() {
    return this.getStringAttribute('vcn_route_type');
  }
  public set vcnRouteType(value: string) {
    this._vcnRouteType = value;
  }
  public resetVcnRouteType() {
    this._vcnRouteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnRouteTypeInput() {
    return this._vcnRouteType;
  }
}
export interface CoreDrgAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#create CoreDrgAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#delete CoreDrgAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#update CoreDrgAttachment#update}
  */
  readonly update?: string;
}

export function coreDrgAttachmentTimeoutsToTerraform(struct?: CoreDrgAttachmentTimeouts | cdktf.IResolvable): any {
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


export function coreDrgAttachmentTimeoutsToHclTerraform(struct?: CoreDrgAttachmentTimeouts | cdktf.IResolvable): any {
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

export class CoreDrgAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreDrgAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreDrgAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment oci_core_drg_attachment}
*/
export class CoreDrgAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_drg_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreDrgAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreDrgAttachment to import
  * @param importFromId The id of the existing CoreDrgAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreDrgAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_drg_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_attachment oci_core_drg_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreDrgAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CoreDrgAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_drg_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._displayName = config.displayName;
    this._drgId = config.drgId;
    this._drgRouteTableId = config.drgRouteTableId;
    this._exportDrgRouteDistributionId = config.exportDrgRouteDistributionId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._removeExportDrgRouteDistributionTrigger = config.removeExportDrgRouteDistributionTrigger;
    this._routeTableId = config.routeTableId;
    this._vcnId = config.vcnId;
    this._networkDetails.internalValue = config.networkDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // drg_id - computed: false, optional: false, required: true
  private _drgId?: string; 
  public get drgId() {
    return this.getStringAttribute('drg_id');
  }
  public set drgId(value: string) {
    this._drgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drgIdInput() {
    return this._drgId;
  }

  // drg_route_table_id - computed: true, optional: true, required: false
  private _drgRouteTableId?: string; 
  public get drgRouteTableId() {
    return this.getStringAttribute('drg_route_table_id');
  }
  public set drgRouteTableId(value: string) {
    this._drgRouteTableId = value;
  }
  public resetDrgRouteTableId() {
    this._drgRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drgRouteTableIdInput() {
    return this._drgRouteTableId;
  }

  // export_drg_route_distribution_id - computed: true, optional: true, required: false
  private _exportDrgRouteDistributionId?: string; 
  public get exportDrgRouteDistributionId() {
    return this.getStringAttribute('export_drg_route_distribution_id');
  }
  public set exportDrgRouteDistributionId(value: string) {
    this._exportDrgRouteDistributionId = value;
  }
  public resetExportDrgRouteDistributionId() {
    this._exportDrgRouteDistributionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDrgRouteDistributionIdInput() {
    return this._exportDrgRouteDistributionId;
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

  // is_cross_tenancy - computed: true, optional: false, required: false
  public get isCrossTenancy() {
    return this.getBooleanAttribute('is_cross_tenancy');
  }

  // remove_export_drg_route_distribution_trigger - computed: false, optional: true, required: false
  private _removeExportDrgRouteDistributionTrigger?: boolean | cdktf.IResolvable; 
  public get removeExportDrgRouteDistributionTrigger() {
    return this.getBooleanAttribute('remove_export_drg_route_distribution_trigger');
  }
  public set removeExportDrgRouteDistributionTrigger(value: boolean | cdktf.IResolvable) {
    this._removeExportDrgRouteDistributionTrigger = value;
  }
  public resetRemoveExportDrgRouteDistributionTrigger() {
    this._removeExportDrgRouteDistributionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExportDrgRouteDistributionTriggerInput() {
    return this._removeExportDrgRouteDistributionTrigger;
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: true, required: false
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  public resetVcnId() {
    this._vcnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // network_details - computed: false, optional: true, required: false
  private _networkDetails = new CoreDrgAttachmentNetworkDetailsOutputReference(this, "network_details");
  public get networkDetails() {
    return this._networkDetails;
  }
  public putNetworkDetails(value: CoreDrgAttachmentNetworkDetails) {
    this._networkDetails.internalValue = value;
  }
  public resetNetworkDetails() {
    this._networkDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDetailsInput() {
    return this._networkDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreDrgAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreDrgAttachmentTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      drg_id: cdktf.stringToTerraform(this._drgId),
      drg_route_table_id: cdktf.stringToTerraform(this._drgRouteTableId),
      export_drg_route_distribution_id: cdktf.stringToTerraform(this._exportDrgRouteDistributionId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      remove_export_drg_route_distribution_trigger: cdktf.booleanToTerraform(this._removeExportDrgRouteDistributionTrigger),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      network_details: coreDrgAttachmentNetworkDetailsToTerraform(this._networkDetails.internalValue),
      timeouts: coreDrgAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drg_id: {
        value: cdktf.stringToHclTerraform(this._drgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drg_route_table_id: {
        value: cdktf.stringToHclTerraform(this._drgRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_drg_route_distribution_id: {
        value: cdktf.stringToHclTerraform(this._exportDrgRouteDistributionId),
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
      remove_export_drg_route_distribution_trigger: {
        value: cdktf.booleanToHclTerraform(this._removeExportDrgRouteDistributionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_details: {
        value: coreDrgAttachmentNetworkDetailsToHclTerraform(this._networkDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreDrgAttachmentNetworkDetailsList",
      },
      timeouts: {
        value: coreDrgAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreDrgAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
