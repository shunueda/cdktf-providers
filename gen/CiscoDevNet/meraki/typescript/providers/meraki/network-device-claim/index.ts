// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional details for claimed devices (currently only used for Catalyst devices)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#details_by_device NetworkDeviceClaim#details_by_device}
  */
  readonly detailsByDevice?: NetworkDeviceClaimDetailsByDevice[] | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#network_id NetworkDeviceClaim#network_id}
  */
  readonly networkId: string;
  /**
  * A list of serials of devices to claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#serials NetworkDeviceClaim#serials}
  */
  readonly serials: string[];
}
export interface NetworkDeviceClaimDetailsByDeviceDetails {
  /**
  * Name of device detail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#name NetworkDeviceClaim#name}
  */
  readonly name: string;
  /**
  * Value of device detail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#value NetworkDeviceClaim#value}
  */
  readonly value?: string;
}

export function networkDeviceClaimDetailsByDeviceDetailsToTerraform(struct?: NetworkDeviceClaimDetailsByDeviceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkDeviceClaimDetailsByDeviceDetailsToHclTerraform(struct?: NetworkDeviceClaimDetailsByDeviceDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClaimDetailsByDeviceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceClaimDetailsByDeviceDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClaimDetailsByDeviceDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NetworkDeviceClaimDetailsByDeviceDetailsList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceClaimDetailsByDeviceDetails[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceClaimDetailsByDeviceDetailsOutputReference {
    return new NetworkDeviceClaimDetailsByDeviceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceClaimDetailsByDevice {
  /**
  * An array of details. Supported list of details includes: 'device mode', 'username', 'password', 'enable password', 'ap mapping type' and 'ap network id'. For onboarding into hybrid mode, the value of the device mode detail must be 'monitored'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#details NetworkDeviceClaim#details}
  */
  readonly details: NetworkDeviceClaimDetailsByDeviceDetails[] | cdktf.IResolvable;
  /**
  * The serial of the device these details relate to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#serial NetworkDeviceClaim#serial}
  */
  readonly serial: string;
}

export function networkDeviceClaimDetailsByDeviceToTerraform(struct?: NetworkDeviceClaimDetailsByDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.listMapper(networkDeviceClaimDetailsByDeviceDetailsToTerraform, false)(struct!.details),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function networkDeviceClaimDetailsByDeviceToHclTerraform(struct?: NetworkDeviceClaimDetailsByDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.listMapperHcl(networkDeviceClaimDetailsByDeviceDetailsToHclTerraform, false)(struct!.details),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDeviceClaimDetailsByDeviceDetailsList",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClaimDetailsByDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceClaimDetailsByDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details?.internalValue;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClaimDetailsByDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._details.internalValue = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._details.internalValue = value.details;
      this._serial = value.serial;
    }
  }

  // details - computed: false, optional: false, required: true
  private _details = new NetworkDeviceClaimDetailsByDeviceDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }
  public putDetails(value: NetworkDeviceClaimDetailsByDeviceDetails[] | cdktf.IResolvable) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}

export class NetworkDeviceClaimDetailsByDeviceList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceClaimDetailsByDevice[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceClaimDetailsByDeviceOutputReference {
    return new NetworkDeviceClaimDetailsByDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim meraki_network_device_claim}
*/
export class NetworkDeviceClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_device_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDeviceClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDeviceClaim to import
  * @param importFromId The id of the existing NetworkDeviceClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDeviceClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_device_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_device_claim meraki_network_device_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceClaimConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_device_claim',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._detailsByDevice.internalValue = config.detailsByDevice;
    this._networkId = config.networkId;
    this._serials = config.serials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // details_by_device - computed: false, optional: true, required: false
  private _detailsByDevice = new NetworkDeviceClaimDetailsByDeviceList(this, "details_by_device", false);
  public get detailsByDevice() {
    return this._detailsByDevice;
  }
  public putDetailsByDevice(value: NetworkDeviceClaimDetailsByDevice[] | cdktf.IResolvable) {
    this._detailsByDevice.internalValue = value;
  }
  public resetDetailsByDevice() {
    this._detailsByDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsByDeviceInput() {
    return this._detailsByDevice.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // serials - computed: false, optional: false, required: true
  private _serials?: string[]; 
  public get serials() {
    return cdktf.Fn.tolist(this.getListAttribute('serials'));
  }
  public set serials(value: string[]) {
    this._serials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialsInput() {
    return this._serials;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      details_by_device: cdktf.listMapper(networkDeviceClaimDetailsByDeviceToTerraform, false)(this._detailsByDevice.internalValue),
      network_id: cdktf.stringToTerraform(this._networkId),
      serials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serials),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      details_by_device: {
        value: cdktf.listMapperHcl(networkDeviceClaimDetailsByDeviceToHclTerraform, false)(this._detailsByDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkDeviceClaimDetailsByDeviceList",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
