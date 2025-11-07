// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceReplacementDeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy#id DeviceReplacementDeploy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy#parameters DeviceReplacementDeploy#parameters}
  */
  readonly parameters: DeviceReplacementDeployParameters;
}
export interface DeviceReplacementDeployItem {
}

export function deviceReplacementDeployItemToTerraform(struct?: DeviceReplacementDeployItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceReplacementDeployItemToHclTerraform(struct?: DeviceReplacementDeployItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceReplacementDeployItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceReplacementDeployItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceReplacementDeployItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DeviceReplacementDeployItemList extends cdktf.ComplexList {

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
  public get(index: number): DeviceReplacementDeployItemOutputReference {
    return new DeviceReplacementDeployItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceReplacementDeployParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy#faulty_device_serial_number DeviceReplacementDeploy#faulty_device_serial_number}
  */
  readonly faultyDeviceSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy#replacement_device_serial_number DeviceReplacementDeploy#replacement_device_serial_number}
  */
  readonly replacementDeviceSerialNumber?: string;
}

export function deviceReplacementDeployParametersToTerraform(struct?: DeviceReplacementDeployParametersOutputReference | DeviceReplacementDeployParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    faulty_device_serial_number: cdktf.stringToTerraform(struct!.faultyDeviceSerialNumber),
    replacement_device_serial_number: cdktf.stringToTerraform(struct!.replacementDeviceSerialNumber),
  }
}


export function deviceReplacementDeployParametersToHclTerraform(struct?: DeviceReplacementDeployParametersOutputReference | DeviceReplacementDeployParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    faulty_device_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.faultyDeviceSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_device_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.replacementDeviceSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceReplacementDeployParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeviceReplacementDeployParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._faultyDeviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultyDeviceSerialNumber = this._faultyDeviceSerialNumber;
    }
    if (this._replacementDeviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementDeviceSerialNumber = this._replacementDeviceSerialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceReplacementDeployParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._faultyDeviceSerialNumber = undefined;
      this._replacementDeviceSerialNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._faultyDeviceSerialNumber = value.faultyDeviceSerialNumber;
      this._replacementDeviceSerialNumber = value.replacementDeviceSerialNumber;
    }
  }

  // faulty_device_serial_number - computed: true, optional: true, required: false
  private _faultyDeviceSerialNumber?: string; 
  public get faultyDeviceSerialNumber() {
    return this.getStringAttribute('faulty_device_serial_number');
  }
  public set faultyDeviceSerialNumber(value: string) {
    this._faultyDeviceSerialNumber = value;
  }
  public resetFaultyDeviceSerialNumber() {
    this._faultyDeviceSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDeviceSerialNumberInput() {
    return this._faultyDeviceSerialNumber;
  }

  // replacement_device_serial_number - computed: true, optional: true, required: false
  private _replacementDeviceSerialNumber?: string; 
  public get replacementDeviceSerialNumber() {
    return this.getStringAttribute('replacement_device_serial_number');
  }
  public set replacementDeviceSerialNumber(value: string) {
    this._replacementDeviceSerialNumber = value;
  }
  public resetReplacementDeviceSerialNumber() {
    this._replacementDeviceSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementDeviceSerialNumberInput() {
    return this._replacementDeviceSerialNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy dnacenter_device_replacement_deploy}
*/
export class DeviceReplacementDeploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_replacement_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceReplacementDeploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceReplacementDeploy to import
  * @param importFromId The id of the existing DeviceReplacementDeploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceReplacementDeploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_replacement_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement_deploy dnacenter_device_replacement_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceReplacementDeployConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceReplacementDeployConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_replacement_deploy',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new DeviceReplacementDeployItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new DeviceReplacementDeployParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DeviceReplacementDeployParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: deviceReplacementDeployParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: deviceReplacementDeployParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceReplacementDeployParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
