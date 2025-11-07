// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsbPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#annotations UsbPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#description UsbPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#disable UsbPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#id UsbPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#labels UsbPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#name UsbPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#namespace UsbPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * allowed_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#allowed_devices UsbPolicy#allowed_devices}
  */
  readonly allowedDevices: UsbPolicyAllowedDevices[] | cdktf.IResolvable;
}
export interface UsbPolicyAllowedDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#b_device_class UsbPolicy#b_device_class}
  */
  readonly bDeviceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#b_device_protocol UsbPolicy#b_device_protocol}
  */
  readonly bDeviceProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#b_device_sub_class UsbPolicy#b_device_sub_class}
  */
  readonly bDeviceSubClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#i_serial UsbPolicy#i_serial}
  */
  readonly iSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#id_product UsbPolicy#id_product}
  */
  readonly idProduct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#id_vendor UsbPolicy#id_vendor}
  */
  readonly idVendor?: string;
}

export function usbPolicyAllowedDevicesToTerraform(struct?: UsbPolicyAllowedDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    b_device_class: cdktf.stringToTerraform(struct!.bDeviceClass),
    b_device_protocol: cdktf.stringToTerraform(struct!.bDeviceProtocol),
    b_device_sub_class: cdktf.stringToTerraform(struct!.bDeviceSubClass),
    i_serial: cdktf.stringToTerraform(struct!.iSerial),
    id_product: cdktf.stringToTerraform(struct!.idProduct),
    id_vendor: cdktf.stringToTerraform(struct!.idVendor),
  }
}


export function usbPolicyAllowedDevicesToHclTerraform(struct?: UsbPolicyAllowedDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    b_device_class: {
      value: cdktf.stringToHclTerraform(struct!.bDeviceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    b_device_protocol: {
      value: cdktf.stringToHclTerraform(struct!.bDeviceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    b_device_sub_class: {
      value: cdktf.stringToHclTerraform(struct!.bDeviceSubClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    i_serial: {
      value: cdktf.stringToHclTerraform(struct!.iSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_product: {
      value: cdktf.stringToHclTerraform(struct!.idProduct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_vendor: {
      value: cdktf.stringToHclTerraform(struct!.idVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsbPolicyAllowedDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UsbPolicyAllowedDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bDeviceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bDeviceClass = this._bDeviceClass;
    }
    if (this._bDeviceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.bDeviceProtocol = this._bDeviceProtocol;
    }
    if (this._bDeviceSubClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bDeviceSubClass = this._bDeviceSubClass;
    }
    if (this._iSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.iSerial = this._iSerial;
    }
    if (this._idProduct !== undefined) {
      hasAnyValues = true;
      internalValueResult.idProduct = this._idProduct;
    }
    if (this._idVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.idVendor = this._idVendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsbPolicyAllowedDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bDeviceClass = undefined;
      this._bDeviceProtocol = undefined;
      this._bDeviceSubClass = undefined;
      this._iSerial = undefined;
      this._idProduct = undefined;
      this._idVendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bDeviceClass = value.bDeviceClass;
      this._bDeviceProtocol = value.bDeviceProtocol;
      this._bDeviceSubClass = value.bDeviceSubClass;
      this._iSerial = value.iSerial;
      this._idProduct = value.idProduct;
      this._idVendor = value.idVendor;
    }
  }

  // b_device_class - computed: false, optional: true, required: false
  private _bDeviceClass?: string; 
  public get bDeviceClass() {
    return this.getStringAttribute('b_device_class');
  }
  public set bDeviceClass(value: string) {
    this._bDeviceClass = value;
  }
  public resetBDeviceClass() {
    this._bDeviceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bDeviceClassInput() {
    return this._bDeviceClass;
  }

  // b_device_protocol - computed: false, optional: true, required: false
  private _bDeviceProtocol?: string; 
  public get bDeviceProtocol() {
    return this.getStringAttribute('b_device_protocol');
  }
  public set bDeviceProtocol(value: string) {
    this._bDeviceProtocol = value;
  }
  public resetBDeviceProtocol() {
    this._bDeviceProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bDeviceProtocolInput() {
    return this._bDeviceProtocol;
  }

  // b_device_sub_class - computed: false, optional: true, required: false
  private _bDeviceSubClass?: string; 
  public get bDeviceSubClass() {
    return this.getStringAttribute('b_device_sub_class');
  }
  public set bDeviceSubClass(value: string) {
    this._bDeviceSubClass = value;
  }
  public resetBDeviceSubClass() {
    this._bDeviceSubClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bDeviceSubClassInput() {
    return this._bDeviceSubClass;
  }

  // i_serial - computed: false, optional: true, required: false
  private _iSerial?: string; 
  public get iSerial() {
    return this.getStringAttribute('i_serial');
  }
  public set iSerial(value: string) {
    this._iSerial = value;
  }
  public resetISerial() {
    this._iSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iSerialInput() {
    return this._iSerial;
  }

  // id_product - computed: false, optional: true, required: false
  private _idProduct?: string; 
  public get idProduct() {
    return this.getStringAttribute('id_product');
  }
  public set idProduct(value: string) {
    this._idProduct = value;
  }
  public resetIdProduct() {
    this._idProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idProductInput() {
    return this._idProduct;
  }

  // id_vendor - computed: false, optional: true, required: false
  private _idVendor?: string; 
  public get idVendor() {
    return this.getStringAttribute('id_vendor');
  }
  public set idVendor(value: string) {
    this._idVendor = value;
  }
  public resetIdVendor() {
    this._idVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idVendorInput() {
    return this._idVendor;
  }
}

export class UsbPolicyAllowedDevicesList extends cdktf.ComplexList {
  public internalValue? : UsbPolicyAllowedDevices[] | cdktf.IResolvable

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
  public get(index: number): UsbPolicyAllowedDevicesOutputReference {
    return new UsbPolicyAllowedDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy volterra_usb_policy}
*/
export class UsbPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_usb_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UsbPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UsbPolicy to import
  * @param importFromId The id of the existing UsbPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UsbPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_usb_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/usb_policy volterra_usb_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsbPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: UsbPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_usb_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._allowedDevices.internalValue = config.allowedDevices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // allowed_devices - computed: false, optional: false, required: true
  private _allowedDevices = new UsbPolicyAllowedDevicesList(this, "allowed_devices", false);
  public get allowedDevices() {
    return this._allowedDevices;
  }
  public putAllowedDevices(value: UsbPolicyAllowedDevices[] | cdktf.IResolvable) {
    this._allowedDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDevicesInput() {
    return this._allowedDevices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      allowed_devices: cdktf.listMapper(usbPolicyAllowedDevicesToTerraform, true)(this._allowedDevices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_devices: {
        value: cdktf.listMapperHcl(usbPolicyAllowedDevicesToHclTerraform, true)(this._allowedDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UsbPolicyAllowedDevicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
