// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressConnectRouterVbrChildInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#child_instance_id ExpressConnectRouterVbrChildInstance#child_instance_id}
  */
  readonly childInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#child_instance_owner_id ExpressConnectRouterVbrChildInstance#child_instance_owner_id}
  */
  readonly childInstanceOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#child_instance_region_id ExpressConnectRouterVbrChildInstance#child_instance_region_id}
  */
  readonly childInstanceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#child_instance_type ExpressConnectRouterVbrChildInstance#child_instance_type}
  */
  readonly childInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#description ExpressConnectRouterVbrChildInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#ecr_id ExpressConnectRouterVbrChildInstance#ecr_id}
  */
  readonly ecrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#id ExpressConnectRouterVbrChildInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#timeouts ExpressConnectRouterVbrChildInstance#timeouts}
  */
  readonly timeouts?: ExpressConnectRouterVbrChildInstanceTimeouts;
}
export interface ExpressConnectRouterVbrChildInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#create ExpressConnectRouterVbrChildInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#delete ExpressConnectRouterVbrChildInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#update ExpressConnectRouterVbrChildInstance#update}
  */
  readonly update?: string;
}

export function expressConnectRouterVbrChildInstanceTimeoutsToTerraform(struct?: ExpressConnectRouterVbrChildInstanceTimeouts | cdktf.IResolvable): any {
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


export function expressConnectRouterVbrChildInstanceTimeoutsToHclTerraform(struct?: ExpressConnectRouterVbrChildInstanceTimeouts | cdktf.IResolvable): any {
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

export class ExpressConnectRouterVbrChildInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressConnectRouterVbrChildInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressConnectRouterVbrChildInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance alicloud_express_connect_router_vbr_child_instance}
*/
export class ExpressConnectRouterVbrChildInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_router_vbr_child_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressConnectRouterVbrChildInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressConnectRouterVbrChildInstance to import
  * @param importFromId The id of the existing ExpressConnectRouterVbrChildInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressConnectRouterVbrChildInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_router_vbr_child_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/express_connect_router_vbr_child_instance alicloud_express_connect_router_vbr_child_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressConnectRouterVbrChildInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressConnectRouterVbrChildInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_router_vbr_child_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._childInstanceId = config.childInstanceId;
    this._childInstanceOwnerId = config.childInstanceOwnerId;
    this._childInstanceRegionId = config.childInstanceRegionId;
    this._childInstanceType = config.childInstanceType;
    this._description = config.description;
    this._ecrId = config.ecrId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // child_instance_id - computed: false, optional: false, required: true
  private _childInstanceId?: string; 
  public get childInstanceId() {
    return this.getStringAttribute('child_instance_id');
  }
  public set childInstanceId(value: string) {
    this._childInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceIdInput() {
    return this._childInstanceId;
  }

  // child_instance_owner_id - computed: true, optional: true, required: false
  private _childInstanceOwnerId?: string; 
  public get childInstanceOwnerId() {
    return this.getStringAttribute('child_instance_owner_id');
  }
  public set childInstanceOwnerId(value: string) {
    this._childInstanceOwnerId = value;
  }
  public resetChildInstanceOwnerId() {
    this._childInstanceOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceOwnerIdInput() {
    return this._childInstanceOwnerId;
  }

  // child_instance_region_id - computed: false, optional: false, required: true
  private _childInstanceRegionId?: string; 
  public get childInstanceRegionId() {
    return this.getStringAttribute('child_instance_region_id');
  }
  public set childInstanceRegionId(value: string) {
    this._childInstanceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceRegionIdInput() {
    return this._childInstanceRegionId;
  }

  // child_instance_type - computed: false, optional: false, required: true
  private _childInstanceType?: string; 
  public get childInstanceType() {
    return this.getStringAttribute('child_instance_type');
  }
  public set childInstanceType(value: string) {
    this._childInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childInstanceTypeInput() {
    return this._childInstanceType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ecr_id - computed: false, optional: false, required: true
  private _ecrId?: string; 
  public get ecrId() {
    return this.getStringAttribute('ecr_id');
  }
  public set ecrId(value: string) {
    this._ecrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrIdInput() {
    return this._ecrId;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressConnectRouterVbrChildInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressConnectRouterVbrChildInstanceTimeouts) {
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
      child_instance_id: cdktf.stringToTerraform(this._childInstanceId),
      child_instance_owner_id: cdktf.stringToTerraform(this._childInstanceOwnerId),
      child_instance_region_id: cdktf.stringToTerraform(this._childInstanceRegionId),
      child_instance_type: cdktf.stringToTerraform(this._childInstanceType),
      description: cdktf.stringToTerraform(this._description),
      ecr_id: cdktf.stringToTerraform(this._ecrId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: expressConnectRouterVbrChildInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      child_instance_id: {
        value: cdktf.stringToHclTerraform(this._childInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_instance_owner_id: {
        value: cdktf.stringToHclTerraform(this._childInstanceOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_instance_region_id: {
        value: cdktf.stringToHclTerraform(this._childInstanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_instance_type: {
        value: cdktf.stringToHclTerraform(this._childInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecr_id: {
        value: cdktf.stringToHclTerraform(this._ecrId),
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
      timeouts: {
        value: expressConnectRouterVbrChildInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressConnectRouterVbrChildInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
