// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenInstanceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#cen_owner_id CenInstanceAttachment#cen_owner_id}
  */
  readonly cenOwnerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#child_instance_id CenInstanceAttachment#child_instance_id}
  */
  readonly childInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#child_instance_owner_id CenInstanceAttachment#child_instance_owner_id}
  */
  readonly childInstanceOwnerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#child_instance_region_id CenInstanceAttachment#child_instance_region_id}
  */
  readonly childInstanceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#child_instance_type CenInstanceAttachment#child_instance_type}
  */
  readonly childInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#id CenInstanceAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#instance_id CenInstanceAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#timeouts CenInstanceAttachment#timeouts}
  */
  readonly timeouts?: CenInstanceAttachmentTimeouts;
}
export interface CenInstanceAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#create CenInstanceAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#delete CenInstanceAttachment#delete}
  */
  readonly delete?: string;
}

export function cenInstanceAttachmentTimeoutsToTerraform(struct?: CenInstanceAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cenInstanceAttachmentTimeoutsToHclTerraform(struct?: CenInstanceAttachmentTimeouts | cdktf.IResolvable): any {
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

export class CenInstanceAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenInstanceAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CenInstanceAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment alicloud_cen_instance_attachment}
*/
export class CenInstanceAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_instance_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenInstanceAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenInstanceAttachment to import
  * @param importFromId The id of the existing CenInstanceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenInstanceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_instance_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_instance_attachment alicloud_cen_instance_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenInstanceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CenInstanceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_instance_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenOwnerId = config.cenOwnerId;
    this._childInstanceId = config.childInstanceId;
    this._childInstanceOwnerId = config.childInstanceOwnerId;
    this._childInstanceRegionId = config.childInstanceRegionId;
    this._childInstanceType = config.childInstanceType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_owner_id - computed: false, optional: true, required: false
  private _cenOwnerId?: number; 
  public get cenOwnerId() {
    return this.getNumberAttribute('cen_owner_id');
  }
  public set cenOwnerId(value: number) {
    this._cenOwnerId = value;
  }
  public resetCenOwnerId() {
    this._cenOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenOwnerIdInput() {
    return this._cenOwnerId;
  }

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
  private _childInstanceOwnerId?: number; 
  public get childInstanceOwnerId() {
    return this.getNumberAttribute('child_instance_owner_id');
  }
  public set childInstanceOwnerId(value: number) {
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenInstanceAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenInstanceAttachmentTimeouts) {
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
      cen_owner_id: cdktf.numberToTerraform(this._cenOwnerId),
      child_instance_id: cdktf.stringToTerraform(this._childInstanceId),
      child_instance_owner_id: cdktf.numberToTerraform(this._childInstanceOwnerId),
      child_instance_region_id: cdktf.stringToTerraform(this._childInstanceRegionId),
      child_instance_type: cdktf.stringToTerraform(this._childInstanceType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      timeouts: cenInstanceAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_owner_id: {
        value: cdktf.numberToHclTerraform(this._cenOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      child_instance_id: {
        value: cdktf.stringToHclTerraform(this._childInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_instance_owner_id: {
        value: cdktf.numberToHclTerraform(this._childInstanceOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      timeouts: {
        value: cenInstanceAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenInstanceAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
