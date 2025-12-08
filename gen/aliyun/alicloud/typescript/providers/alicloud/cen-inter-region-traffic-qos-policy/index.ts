// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenInterRegionTrafficQosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#bandwidth_guarantee_mode CenInterRegionTrafficQosPolicy#bandwidth_guarantee_mode}
  */
  readonly bandwidthGuaranteeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#id CenInterRegionTrafficQosPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#inter_region_traffic_qos_policy_description CenInterRegionTrafficQosPolicy#inter_region_traffic_qos_policy_description}
  */
  readonly interRegionTrafficQosPolicyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#inter_region_traffic_qos_policy_name CenInterRegionTrafficQosPolicy#inter_region_traffic_qos_policy_name}
  */
  readonly interRegionTrafficQosPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#transit_router_attachment_id CenInterRegionTrafficQosPolicy#transit_router_attachment_id}
  */
  readonly transitRouterAttachmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#transit_router_id CenInterRegionTrafficQosPolicy#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#timeouts CenInterRegionTrafficQosPolicy#timeouts}
  */
  readonly timeouts?: CenInterRegionTrafficQosPolicyTimeouts;
}
export interface CenInterRegionTrafficQosPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#create CenInterRegionTrafficQosPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#delete CenInterRegionTrafficQosPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#update CenInterRegionTrafficQosPolicy#update}
  */
  readonly update?: string;
}

export function cenInterRegionTrafficQosPolicyTimeoutsToTerraform(struct?: CenInterRegionTrafficQosPolicyTimeouts | cdktf.IResolvable): any {
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


export function cenInterRegionTrafficQosPolicyTimeoutsToHclTerraform(struct?: CenInterRegionTrafficQosPolicyTimeouts | cdktf.IResolvable): any {
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

export class CenInterRegionTrafficQosPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenInterRegionTrafficQosPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenInterRegionTrafficQosPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy alicloud_cen_inter_region_traffic_qos_policy}
*/
export class CenInterRegionTrafficQosPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_inter_region_traffic_qos_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenInterRegionTrafficQosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenInterRegionTrafficQosPolicy to import
  * @param importFromId The id of the existing CenInterRegionTrafficQosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenInterRegionTrafficQosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_inter_region_traffic_qos_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cen_inter_region_traffic_qos_policy alicloud_cen_inter_region_traffic_qos_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenInterRegionTrafficQosPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CenInterRegionTrafficQosPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_inter_region_traffic_qos_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthGuaranteeMode = config.bandwidthGuaranteeMode;
    this._id = config.id;
    this._interRegionTrafficQosPolicyDescription = config.interRegionTrafficQosPolicyDescription;
    this._interRegionTrafficQosPolicyName = config.interRegionTrafficQosPolicyName;
    this._transitRouterAttachmentId = config.transitRouterAttachmentId;
    this._transitRouterId = config.transitRouterId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_guarantee_mode - computed: true, optional: true, required: false
  private _bandwidthGuaranteeMode?: string; 
  public get bandwidthGuaranteeMode() {
    return this.getStringAttribute('bandwidth_guarantee_mode');
  }
  public set bandwidthGuaranteeMode(value: string) {
    this._bandwidthGuaranteeMode = value;
  }
  public resetBandwidthGuaranteeMode() {
    this._bandwidthGuaranteeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthGuaranteeModeInput() {
    return this._bandwidthGuaranteeMode;
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

  // inter_region_traffic_qos_policy_description - computed: false, optional: true, required: false
  private _interRegionTrafficQosPolicyDescription?: string; 
  public get interRegionTrafficQosPolicyDescription() {
    return this.getStringAttribute('inter_region_traffic_qos_policy_description');
  }
  public set interRegionTrafficQosPolicyDescription(value: string) {
    this._interRegionTrafficQosPolicyDescription = value;
  }
  public resetInterRegionTrafficQosPolicyDescription() {
    this._interRegionTrafficQosPolicyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interRegionTrafficQosPolicyDescriptionInput() {
    return this._interRegionTrafficQosPolicyDescription;
  }

  // inter_region_traffic_qos_policy_name - computed: false, optional: true, required: false
  private _interRegionTrafficQosPolicyName?: string; 
  public get interRegionTrafficQosPolicyName() {
    return this.getStringAttribute('inter_region_traffic_qos_policy_name');
  }
  public set interRegionTrafficQosPolicyName(value: string) {
    this._interRegionTrafficQosPolicyName = value;
  }
  public resetInterRegionTrafficQosPolicyName() {
    this._interRegionTrafficQosPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interRegionTrafficQosPolicyNameInput() {
    return this._interRegionTrafficQosPolicyName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_router_attachment_id - computed: false, optional: false, required: true
  private _transitRouterAttachmentId?: string; 
  public get transitRouterAttachmentId() {
    return this.getStringAttribute('transit_router_attachment_id');
  }
  public set transitRouterAttachmentId(value: string) {
    this._transitRouterAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterAttachmentIdInput() {
    return this._transitRouterAttachmentId;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenInterRegionTrafficQosPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenInterRegionTrafficQosPolicyTimeouts) {
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
      bandwidth_guarantee_mode: cdktf.stringToTerraform(this._bandwidthGuaranteeMode),
      id: cdktf.stringToTerraform(this._id),
      inter_region_traffic_qos_policy_description: cdktf.stringToTerraform(this._interRegionTrafficQosPolicyDescription),
      inter_region_traffic_qos_policy_name: cdktf.stringToTerraform(this._interRegionTrafficQosPolicyName),
      transit_router_attachment_id: cdktf.stringToTerraform(this._transitRouterAttachmentId),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      timeouts: cenInterRegionTrafficQosPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_guarantee_mode: {
        value: cdktf.stringToHclTerraform(this._bandwidthGuaranteeMode),
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
      inter_region_traffic_qos_policy_description: {
        value: cdktf.stringToHclTerraform(this._interRegionTrafficQosPolicyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_region_traffic_qos_policy_name: {
        value: cdktf.stringToHclTerraform(this._interRegionTrafficQosPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_attachment_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenInterRegionTrafficQosPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenInterRegionTrafficQosPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
