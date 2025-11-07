// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaBasicEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#accelerator_id GaBasicEndpoint#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#basic_endpoint_name GaBasicEndpoint#basic_endpoint_name}
  */
  readonly basicEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#endpoint_address GaBasicEndpoint#endpoint_address}
  */
  readonly endpointAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#endpoint_group_id GaBasicEndpoint#endpoint_group_id}
  */
  readonly endpointGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#endpoint_sub_address GaBasicEndpoint#endpoint_sub_address}
  */
  readonly endpointSubAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#endpoint_sub_address_type GaBasicEndpoint#endpoint_sub_address_type}
  */
  readonly endpointSubAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#endpoint_type GaBasicEndpoint#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#endpoint_zone_id GaBasicEndpoint#endpoint_zone_id}
  */
  readonly endpointZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#id GaBasicEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#timeouts GaBasicEndpoint#timeouts}
  */
  readonly timeouts?: GaBasicEndpointTimeouts;
}
export interface GaBasicEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#create GaBasicEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#delete GaBasicEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#update GaBasicEndpoint#update}
  */
  readonly update?: string;
}

export function gaBasicEndpointTimeoutsToTerraform(struct?: GaBasicEndpointTimeouts | cdktf.IResolvable): any {
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


export function gaBasicEndpointTimeoutsToHclTerraform(struct?: GaBasicEndpointTimeouts | cdktf.IResolvable): any {
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

export class GaBasicEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaBasicEndpointTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GaBasicEndpointTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint alicloud_ga_basic_endpoint}
*/
export class GaBasicEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_basic_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaBasicEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaBasicEndpoint to import
  * @param importFromId The id of the existing GaBasicEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaBasicEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_basic_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ga_basic_endpoint alicloud_ga_basic_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaBasicEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: GaBasicEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_basic_endpoint',
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
    this._acceleratorId = config.acceleratorId;
    this._basicEndpointName = config.basicEndpointName;
    this._endpointAddress = config.endpointAddress;
    this._endpointGroupId = config.endpointGroupId;
    this._endpointSubAddress = config.endpointSubAddress;
    this._endpointSubAddressType = config.endpointSubAddressType;
    this._endpointType = config.endpointType;
    this._endpointZoneId = config.endpointZoneId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_id - computed: false, optional: false, required: true
  private _acceleratorId?: string; 
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }
  public set acceleratorId(value: string) {
    this._acceleratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdInput() {
    return this._acceleratorId;
  }

  // basic_endpoint_name - computed: false, optional: true, required: false
  private _basicEndpointName?: string; 
  public get basicEndpointName() {
    return this.getStringAttribute('basic_endpoint_name');
  }
  public set basicEndpointName(value: string) {
    this._basicEndpointName = value;
  }
  public resetBasicEndpointName() {
    this._basicEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicEndpointNameInput() {
    return this._basicEndpointName;
  }

  // endpoint_address - computed: false, optional: false, required: true
  private _endpointAddress?: string; 
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }
  public set endpointAddress(value: string) {
    this._endpointAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAddressInput() {
    return this._endpointAddress;
  }

  // endpoint_group_id - computed: false, optional: false, required: true
  private _endpointGroupId?: string; 
  public get endpointGroupId() {
    return this.getStringAttribute('endpoint_group_id');
  }
  public set endpointGroupId(value: string) {
    this._endpointGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupIdInput() {
    return this._endpointGroupId;
  }

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // endpoint_sub_address - computed: false, optional: true, required: false
  private _endpointSubAddress?: string; 
  public get endpointSubAddress() {
    return this.getStringAttribute('endpoint_sub_address');
  }
  public set endpointSubAddress(value: string) {
    this._endpointSubAddress = value;
  }
  public resetEndpointSubAddress() {
    this._endpointSubAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubAddressInput() {
    return this._endpointSubAddress;
  }

  // endpoint_sub_address_type - computed: false, optional: true, required: false
  private _endpointSubAddressType?: string; 
  public get endpointSubAddressType() {
    return this.getStringAttribute('endpoint_sub_address_type');
  }
  public set endpointSubAddressType(value: string) {
    this._endpointSubAddressType = value;
  }
  public resetEndpointSubAddressType() {
    this._endpointSubAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubAddressTypeInput() {
    return this._endpointSubAddressType;
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // endpoint_zone_id - computed: false, optional: true, required: false
  private _endpointZoneId?: string; 
  public get endpointZoneId() {
    return this.getStringAttribute('endpoint_zone_id');
  }
  public set endpointZoneId(value: string) {
    this._endpointZoneId = value;
  }
  public resetEndpointZoneId() {
    this._endpointZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointZoneIdInput() {
    return this._endpointZoneId;
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
  private _timeouts = new GaBasicEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaBasicEndpointTimeouts) {
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
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      basic_endpoint_name: cdktf.stringToTerraform(this._basicEndpointName),
      endpoint_address: cdktf.stringToTerraform(this._endpointAddress),
      endpoint_group_id: cdktf.stringToTerraform(this._endpointGroupId),
      endpoint_sub_address: cdktf.stringToTerraform(this._endpointSubAddress),
      endpoint_sub_address_type: cdktf.stringToTerraform(this._endpointSubAddressType),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      endpoint_zone_id: cdktf.stringToTerraform(this._endpointZoneId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: gaBasicEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_id: {
        value: cdktf.stringToHclTerraform(this._acceleratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._basicEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_address: {
        value: cdktf.stringToHclTerraform(this._endpointAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_group_id: {
        value: cdktf.stringToHclTerraform(this._endpointGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_sub_address: {
        value: cdktf.stringToHclTerraform(this._endpointSubAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_sub_address_type: {
        value: cdktf.stringToHclTerraform(this._endpointSubAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_zone_id: {
        value: cdktf.stringToHclTerraform(this._endpointZoneId),
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
        value: gaBasicEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaBasicEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
