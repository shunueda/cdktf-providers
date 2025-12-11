// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbTargetGroupAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#id ClbTargetGroupAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CLB instance ID, (load_balancer_id and target_group_id require at least one).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#load_balancer_id ClbTargetGroupAttachments#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Target group ID, (load_balancer_id and target_group_id require at least one).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#target_group_id ClbTargetGroupAttachments#target_group_id}
  */
  readonly targetGroupId?: string;
  /**
  * associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#associations ClbTargetGroupAttachments#associations}
  */
  readonly associations: ClbTargetGroupAttachmentsAssociations[] | cdktf.IResolvable;
}
export interface ClbTargetGroupAttachmentsAssociations {
  /**
  * Listener ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#listener_id ClbTargetGroupAttachments#listener_id}
  */
  readonly listenerId?: string;
  /**
  * CLB instance ID, when the binding target is target group, load_balancer_id in associations is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#load_balancer_id ClbTargetGroupAttachments#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Forwarding rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#location_id ClbTargetGroupAttachments#location_id}
  */
  readonly locationId?: string;
  /**
  * Target group ID, when the binding target is clb, the target_group_id in associations is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#target_group_id ClbTargetGroupAttachments#target_group_id}
  */
  readonly targetGroupId?: string;
}

export function clbTargetGroupAttachmentsAssociationsToTerraform(struct?: ClbTargetGroupAttachmentsAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_id: cdktf.stringToTerraform(struct!.listenerId),
    load_balancer_id: cdktf.stringToTerraform(struct!.loadBalancerId),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    target_group_id: cdktf.stringToTerraform(struct!.targetGroupId),
  }
}


export function clbTargetGroupAttachmentsAssociationsToHclTerraform(struct?: ClbTargetGroupAttachmentsAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_id: {
      value: cdktf.stringToHclTerraform(struct!.listenerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_id: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_id: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbTargetGroupAttachmentsAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClbTargetGroupAttachmentsAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerId = this._listenerId;
    }
    if (this._loadBalancerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerId = this._loadBalancerId;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._targetGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupId = this._targetGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbTargetGroupAttachmentsAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerId = undefined;
      this._loadBalancerId = undefined;
      this._locationId = undefined;
      this._targetGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerId = value.listenerId;
      this._loadBalancerId = value.loadBalancerId;
      this._locationId = value.locationId;
      this._targetGroupId = value.targetGroupId;
    }
  }

  // listener_id - computed: false, optional: true, required: false
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: false, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // location_id - computed: false, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // target_group_id - computed: false, optional: true, required: false
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  public resetTargetGroupId() {
    this._targetGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }
}

export class ClbTargetGroupAttachmentsAssociationsList extends cdktf.ComplexList {
  public internalValue? : ClbTargetGroupAttachmentsAssociations[] | cdktf.IResolvable

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
  public get(index: number): ClbTargetGroupAttachmentsAssociationsOutputReference {
    return new ClbTargetGroupAttachmentsAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments tencentcloud_clb_target_group_attachments}
*/
export class ClbTargetGroupAttachments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_target_group_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbTargetGroupAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbTargetGroupAttachments to import
  * @param importFromId The id of the existing ClbTargetGroupAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbTargetGroupAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_target_group_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_target_group_attachments tencentcloud_clb_target_group_attachments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbTargetGroupAttachmentsConfig
  */
  public constructor(scope: Construct, id: string, config: ClbTargetGroupAttachmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_target_group_attachments',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._targetGroupId = config.targetGroupId;
    this._associations.internalValue = config.associations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // load_balancer_id - computed: false, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // target_group_id - computed: false, optional: true, required: false
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  public resetTargetGroupId() {
    this._targetGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // associations - computed: false, optional: false, required: true
  private _associations = new ClbTargetGroupAttachmentsAssociationsList(this, "associations", true);
  public get associations() {
    return this._associations;
  }
  public putAssociations(value: ClbTargetGroupAttachmentsAssociations[] | cdktf.IResolvable) {
    this._associations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationsInput() {
    return this._associations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
      associations: cdktf.listMapper(clbTargetGroupAttachmentsAssociationsToTerraform, true)(this._associations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_id: {
        value: cdktf.stringToHclTerraform(this._targetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associations: {
        value: cdktf.listMapperHcl(clbTargetGroupAttachmentsAssociationsToHclTerraform, true)(this._associations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClbTargetGroupAttachmentsAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
