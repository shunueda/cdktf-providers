// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EipanycastAnycastEipAddressAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#anycast_id EipanycastAnycastEipAddressAttachment#anycast_id}
  */
  readonly anycastId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#association_mode EipanycastAnycastEipAddressAttachment#association_mode}
  */
  readonly associationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#bind_instance_id EipanycastAnycastEipAddressAttachment#bind_instance_id}
  */
  readonly bindInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#bind_instance_region_id EipanycastAnycastEipAddressAttachment#bind_instance_region_id}
  */
  readonly bindInstanceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#bind_instance_type EipanycastAnycastEipAddressAttachment#bind_instance_type}
  */
  readonly bindInstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#id EipanycastAnycastEipAddressAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#private_ip_address EipanycastAnycastEipAddressAttachment#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * pop_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#pop_locations EipanycastAnycastEipAddressAttachment#pop_locations}
  */
  readonly popLocations?: EipanycastAnycastEipAddressAttachmentPopLocations[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#timeouts EipanycastAnycastEipAddressAttachment#timeouts}
  */
  readonly timeouts?: EipanycastAnycastEipAddressAttachmentTimeouts;
}
export interface EipanycastAnycastEipAddressAttachmentPopLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#pop_location EipanycastAnycastEipAddressAttachment#pop_location}
  */
  readonly popLocation?: string;
}

export function eipanycastAnycastEipAddressAttachmentPopLocationsToTerraform(struct?: EipanycastAnycastEipAddressAttachmentPopLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pop_location: cdktf.stringToTerraform(struct!.popLocation),
  }
}


export function eipanycastAnycastEipAddressAttachmentPopLocationsToHclTerraform(struct?: EipanycastAnycastEipAddressAttachmentPopLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pop_location: {
      value: cdktf.stringToHclTerraform(struct!.popLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EipanycastAnycastEipAddressAttachmentPopLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EipanycastAnycastEipAddressAttachmentPopLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._popLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.popLocation = this._popLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EipanycastAnycastEipAddressAttachmentPopLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._popLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._popLocation = value.popLocation;
    }
  }

  // pop_location - computed: false, optional: true, required: false
  private _popLocation?: string; 
  public get popLocation() {
    return this.getStringAttribute('pop_location');
  }
  public set popLocation(value: string) {
    this._popLocation = value;
  }
  public resetPopLocation() {
    this._popLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popLocationInput() {
    return this._popLocation;
  }
}

export class EipanycastAnycastEipAddressAttachmentPopLocationsList extends cdktf.ComplexList {
  public internalValue? : EipanycastAnycastEipAddressAttachmentPopLocations[] | cdktf.IResolvable

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
  public get(index: number): EipanycastAnycastEipAddressAttachmentPopLocationsOutputReference {
    return new EipanycastAnycastEipAddressAttachmentPopLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EipanycastAnycastEipAddressAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#create EipanycastAnycastEipAddressAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#delete EipanycastAnycastEipAddressAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#update EipanycastAnycastEipAddressAttachment#update}
  */
  readonly update?: string;
}

export function eipanycastAnycastEipAddressAttachmentTimeoutsToTerraform(struct?: EipanycastAnycastEipAddressAttachmentTimeouts | cdktf.IResolvable): any {
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


export function eipanycastAnycastEipAddressAttachmentTimeoutsToHclTerraform(struct?: EipanycastAnycastEipAddressAttachmentTimeouts | cdktf.IResolvable): any {
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

export class EipanycastAnycastEipAddressAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EipanycastAnycastEipAddressAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EipanycastAnycastEipAddressAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment alicloud_eipanycast_anycast_eip_address_attachment}
*/
export class EipanycastAnycastEipAddressAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eipanycast_anycast_eip_address_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EipanycastAnycastEipAddressAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EipanycastAnycastEipAddressAttachment to import
  * @param importFromId The id of the existing EipanycastAnycastEipAddressAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EipanycastAnycastEipAddressAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eipanycast_anycast_eip_address_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/eipanycast_anycast_eip_address_attachment alicloud_eipanycast_anycast_eip_address_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EipanycastAnycastEipAddressAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: EipanycastAnycastEipAddressAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eipanycast_anycast_eip_address_attachment',
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
    this._anycastId = config.anycastId;
    this._associationMode = config.associationMode;
    this._bindInstanceId = config.bindInstanceId;
    this._bindInstanceRegionId = config.bindInstanceRegionId;
    this._bindInstanceType = config.bindInstanceType;
    this._id = config.id;
    this._privateIpAddress = config.privateIpAddress;
    this._popLocations.internalValue = config.popLocations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_id - computed: false, optional: false, required: true
  private _anycastId?: string; 
  public get anycastId() {
    return this.getStringAttribute('anycast_id');
  }
  public set anycastId(value: string) {
    this._anycastId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastIdInput() {
    return this._anycastId;
  }

  // association_mode - computed: true, optional: true, required: false
  private _associationMode?: string; 
  public get associationMode() {
    return this.getStringAttribute('association_mode');
  }
  public set associationMode(value: string) {
    this._associationMode = value;
  }
  public resetAssociationMode() {
    this._associationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associationModeInput() {
    return this._associationMode;
  }

  // bind_instance_id - computed: false, optional: false, required: true
  private _bindInstanceId?: string; 
  public get bindInstanceId() {
    return this.getStringAttribute('bind_instance_id');
  }
  public set bindInstanceId(value: string) {
    this._bindInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInstanceIdInput() {
    return this._bindInstanceId;
  }

  // bind_instance_region_id - computed: false, optional: false, required: true
  private _bindInstanceRegionId?: string; 
  public get bindInstanceRegionId() {
    return this.getStringAttribute('bind_instance_region_id');
  }
  public set bindInstanceRegionId(value: string) {
    this._bindInstanceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInstanceRegionIdInput() {
    return this._bindInstanceRegionId;
  }

  // bind_instance_type - computed: false, optional: false, required: true
  private _bindInstanceType?: string; 
  public get bindInstanceType() {
    return this.getStringAttribute('bind_instance_type');
  }
  public set bindInstanceType(value: string) {
    this._bindInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInstanceTypeInput() {
    return this._bindInstanceType;
  }

  // bind_time - computed: true, optional: false, required: false
  public get bindTime() {
    return this.getStringAttribute('bind_time');
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

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // pop_locations - computed: false, optional: true, required: false
  private _popLocations = new EipanycastAnycastEipAddressAttachmentPopLocationsList(this, "pop_locations", true);
  public get popLocations() {
    return this._popLocations;
  }
  public putPopLocations(value: EipanycastAnycastEipAddressAttachmentPopLocations[] | cdktf.IResolvable) {
    this._popLocations.internalValue = value;
  }
  public resetPopLocations() {
    this._popLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popLocationsInput() {
    return this._popLocations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EipanycastAnycastEipAddressAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EipanycastAnycastEipAddressAttachmentTimeouts) {
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
      anycast_id: cdktf.stringToTerraform(this._anycastId),
      association_mode: cdktf.stringToTerraform(this._associationMode),
      bind_instance_id: cdktf.stringToTerraform(this._bindInstanceId),
      bind_instance_region_id: cdktf.stringToTerraform(this._bindInstanceRegionId),
      bind_instance_type: cdktf.stringToTerraform(this._bindInstanceType),
      id: cdktf.stringToTerraform(this._id),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      pop_locations: cdktf.listMapper(eipanycastAnycastEipAddressAttachmentPopLocationsToTerraform, true)(this._popLocations.internalValue),
      timeouts: eipanycastAnycastEipAddressAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_id: {
        value: cdktf.stringToHclTerraform(this._anycastId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      association_mode: {
        value: cdktf.stringToHclTerraform(this._associationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_instance_id: {
        value: cdktf.stringToHclTerraform(this._bindInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_instance_region_id: {
        value: cdktf.stringToHclTerraform(this._bindInstanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_instance_type: {
        value: cdktf.stringToHclTerraform(this._bindInstanceType),
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
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop_locations: {
        value: cdktf.listMapperHcl(eipanycastAnycastEipAddressAttachmentPopLocationsToHclTerraform, true)(this._popLocations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EipanycastAnycastEipAddressAttachmentPopLocationsList",
      },
      timeouts: {
        value: eipanycastAnycastEipAddressAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EipanycastAnycastEipAddressAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
