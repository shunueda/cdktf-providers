// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExpressConnectRouterGrantAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#ecr_id ExpressConnectRouterGrantAssociation#ecr_id}
  */
  readonly ecrId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#ecr_owner_ali_uid ExpressConnectRouterGrantAssociation#ecr_owner_ali_uid}
  */
  readonly ecrOwnerAliUid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#id ExpressConnectRouterGrantAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#instance_id ExpressConnectRouterGrantAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#instance_region_id ExpressConnectRouterGrantAssociation#instance_region_id}
  */
  readonly instanceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#instance_type ExpressConnectRouterGrantAssociation#instance_type}
  */
  readonly instanceType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#timeouts ExpressConnectRouterGrantAssociation#timeouts}
  */
  readonly timeouts?: ExpressConnectRouterGrantAssociationTimeouts;
}
export interface ExpressConnectRouterGrantAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#create ExpressConnectRouterGrantAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#delete ExpressConnectRouterGrantAssociation#delete}
  */
  readonly delete?: string;
}

export function expressConnectRouterGrantAssociationTimeoutsToTerraform(struct?: ExpressConnectRouterGrantAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function expressConnectRouterGrantAssociationTimeoutsToHclTerraform(struct?: ExpressConnectRouterGrantAssociationTimeouts | cdktf.IResolvable): any {
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

export class ExpressConnectRouterGrantAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExpressConnectRouterGrantAssociationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExpressConnectRouterGrantAssociationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association alicloud_express_connect_router_grant_association}
*/
export class ExpressConnectRouterGrantAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_router_grant_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExpressConnectRouterGrantAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExpressConnectRouterGrantAssociation to import
  * @param importFromId The id of the existing ExpressConnectRouterGrantAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExpressConnectRouterGrantAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_router_grant_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/express_connect_router_grant_association alicloud_express_connect_router_grant_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExpressConnectRouterGrantAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ExpressConnectRouterGrantAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_router_grant_association',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ecrId = config.ecrId;
    this._ecrOwnerAliUid = config.ecrOwnerAliUid;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceRegionId = config.instanceRegionId;
    this._instanceType = config.instanceType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ecr_owner_ali_uid - computed: false, optional: false, required: true
  private _ecrOwnerAliUid?: number; 
  public get ecrOwnerAliUid() {
    return this.getNumberAttribute('ecr_owner_ali_uid');
  }
  public set ecrOwnerAliUid(value: number) {
    this._ecrOwnerAliUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrOwnerAliUidInput() {
    return this._ecrOwnerAliUid;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_region_id - computed: false, optional: false, required: true
  private _instanceRegionId?: string; 
  public get instanceRegionId() {
    return this.getStringAttribute('instance_region_id');
  }
  public set instanceRegionId(value: string) {
    this._instanceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRegionIdInput() {
    return this._instanceRegionId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExpressConnectRouterGrantAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExpressConnectRouterGrantAssociationTimeouts) {
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
      ecr_id: cdktf.stringToTerraform(this._ecrId),
      ecr_owner_ali_uid: cdktf.numberToTerraform(this._ecrOwnerAliUid),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_region_id: cdktf.stringToTerraform(this._instanceRegionId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      timeouts: expressConnectRouterGrantAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecr_id: {
        value: cdktf.stringToHclTerraform(this._ecrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecr_owner_ali_uid: {
        value: cdktf.numberToHclTerraform(this._ecrOwnerAliUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_region_id: {
        value: cdktf.stringToHclTerraform(this._instanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: expressConnectRouterGrantAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExpressConnectRouterGrantAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
