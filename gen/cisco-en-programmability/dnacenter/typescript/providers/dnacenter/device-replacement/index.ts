// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceReplacementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#id DeviceReplacement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#parameters DeviceReplacement#parameters}
  */
  readonly parameters?: DeviceReplacementParameters[] | cdktf.IResolvable;
}
export interface DeviceReplacementItem {
}

export function deviceReplacementItemToTerraform(struct?: DeviceReplacementItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceReplacementItemToHclTerraform(struct?: DeviceReplacementItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceReplacementItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceReplacementItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceReplacementItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // faulty_device_id - computed: true, optional: false, required: false
  public get faultyDeviceId() {
    return this.getStringAttribute('faulty_device_id');
  }

  // faulty_device_name - computed: true, optional: false, required: false
  public get faultyDeviceName() {
    return this.getStringAttribute('faulty_device_name');
  }

  // faulty_device_platform - computed: true, optional: false, required: false
  public get faultyDevicePlatform() {
    return this.getStringAttribute('faulty_device_platform');
  }

  // faulty_device_serial_number - computed: true, optional: false, required: false
  public get faultyDeviceSerialNumber() {
    return this.getStringAttribute('faulty_device_serial_number');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbour_device_id - computed: true, optional: false, required: false
  public get neighbourDeviceId() {
    return this.getStringAttribute('neighbour_device_id');
  }

  // network_readiness_task_id - computed: true, optional: false, required: false
  public get networkReadinessTaskId() {
    return this.getStringAttribute('network_readiness_task_id');
  }

  // replacement_device_platform - computed: true, optional: false, required: false
  public get replacementDevicePlatform() {
    return this.getStringAttribute('replacement_device_platform');
  }

  // replacement_device_serial_number - computed: true, optional: false, required: false
  public get replacementDeviceSerialNumber() {
    return this.getStringAttribute('replacement_device_serial_number');
  }

  // replacement_status - computed: true, optional: false, required: false
  public get replacementStatus() {
    return this.getStringAttribute('replacement_status');
  }

  // replacement_time - computed: true, optional: false, required: false
  public get replacementTime() {
    return this.getNumberAttribute('replacement_time');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
}

export class DeviceReplacementItemList extends cdktf.ComplexList {

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
  public get(index: number): DeviceReplacementItemOutputReference {
    return new DeviceReplacementItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceReplacementParametersPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#creation_time DeviceReplacement#creation_time}
  */
  readonly creationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#family DeviceReplacement#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#faulty_device_id DeviceReplacement#faulty_device_id}
  */
  readonly faultyDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#faulty_device_name DeviceReplacement#faulty_device_name}
  */
  readonly faultyDeviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#faulty_device_platform DeviceReplacement#faulty_device_platform}
  */
  readonly faultyDevicePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#faulty_device_serial_number DeviceReplacement#faulty_device_serial_number}
  */
  readonly faultyDeviceSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#id DeviceReplacement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#neighbour_device_id DeviceReplacement#neighbour_device_id}
  */
  readonly neighbourDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#network_readiness_task_id DeviceReplacement#network_readiness_task_id}
  */
  readonly networkReadinessTaskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#replacement_device_platform DeviceReplacement#replacement_device_platform}
  */
  readonly replacementDevicePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#replacement_device_serial_number DeviceReplacement#replacement_device_serial_number}
  */
  readonly replacementDeviceSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#replacement_status DeviceReplacement#replacement_status}
  */
  readonly replacementStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#replacement_time DeviceReplacement#replacement_time}
  */
  readonly replacementTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#workflow_id DeviceReplacement#workflow_id}
  */
  readonly workflowId?: string;
}

export function deviceReplacementParametersPayloadToTerraform(struct?: DeviceReplacementParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_time: cdktf.numberToTerraform(struct!.creationTime),
    family: cdktf.stringToTerraform(struct!.family),
    faulty_device_id: cdktf.stringToTerraform(struct!.faultyDeviceId),
    faulty_device_name: cdktf.stringToTerraform(struct!.faultyDeviceName),
    faulty_device_platform: cdktf.stringToTerraform(struct!.faultyDevicePlatform),
    faulty_device_serial_number: cdktf.stringToTerraform(struct!.faultyDeviceSerialNumber),
    id: cdktf.stringToTerraform(struct!.id),
    neighbour_device_id: cdktf.stringToTerraform(struct!.neighbourDeviceId),
    network_readiness_task_id: cdktf.stringToTerraform(struct!.networkReadinessTaskId),
    replacement_device_platform: cdktf.stringToTerraform(struct!.replacementDevicePlatform),
    replacement_device_serial_number: cdktf.stringToTerraform(struct!.replacementDeviceSerialNumber),
    replacement_status: cdktf.stringToTerraform(struct!.replacementStatus),
    replacement_time: cdktf.numberToTerraform(struct!.replacementTime),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
  }
}


export function deviceReplacementParametersPayloadToHclTerraform(struct?: DeviceReplacementParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_time: {
      value: cdktf.numberToHclTerraform(struct!.creationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faulty_device_id: {
      value: cdktf.stringToHclTerraform(struct!.faultyDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faulty_device_name: {
      value: cdktf.stringToHclTerraform(struct!.faultyDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faulty_device_platform: {
      value: cdktf.stringToHclTerraform(struct!.faultyDevicePlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    faulty_device_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.faultyDeviceSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbour_device_id: {
      value: cdktf.stringToHclTerraform(struct!.neighbourDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_readiness_task_id: {
      value: cdktf.stringToHclTerraform(struct!.networkReadinessTaskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_device_platform: {
      value: cdktf.stringToHclTerraform(struct!.replacementDevicePlatform),
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
    replacement_status: {
      value: cdktf.stringToHclTerraform(struct!.replacementStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_time: {
      value: cdktf.numberToHclTerraform(struct!.replacementTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceReplacementParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceReplacementParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationTime = this._creationTime;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._faultyDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultyDeviceId = this._faultyDeviceId;
    }
    if (this._faultyDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultyDeviceName = this._faultyDeviceName;
    }
    if (this._faultyDevicePlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultyDevicePlatform = this._faultyDevicePlatform;
    }
    if (this._faultyDeviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultyDeviceSerialNumber = this._faultyDeviceSerialNumber;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._neighbourDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbourDeviceId = this._neighbourDeviceId;
    }
    if (this._networkReadinessTaskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkReadinessTaskId = this._networkReadinessTaskId;
    }
    if (this._replacementDevicePlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementDevicePlatform = this._replacementDevicePlatform;
    }
    if (this._replacementDeviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementDeviceSerialNumber = this._replacementDeviceSerialNumber;
    }
    if (this._replacementStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementStatus = this._replacementStatus;
    }
    if (this._replacementTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementTime = this._replacementTime;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceReplacementParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationTime = undefined;
      this._family = undefined;
      this._faultyDeviceId = undefined;
      this._faultyDeviceName = undefined;
      this._faultyDevicePlatform = undefined;
      this._faultyDeviceSerialNumber = undefined;
      this._id = undefined;
      this._neighbourDeviceId = undefined;
      this._networkReadinessTaskId = undefined;
      this._replacementDevicePlatform = undefined;
      this._replacementDeviceSerialNumber = undefined;
      this._replacementStatus = undefined;
      this._replacementTime = undefined;
      this._workflowId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationTime = value.creationTime;
      this._family = value.family;
      this._faultyDeviceId = value.faultyDeviceId;
      this._faultyDeviceName = value.faultyDeviceName;
      this._faultyDevicePlatform = value.faultyDevicePlatform;
      this._faultyDeviceSerialNumber = value.faultyDeviceSerialNumber;
      this._id = value.id;
      this._neighbourDeviceId = value.neighbourDeviceId;
      this._networkReadinessTaskId = value.networkReadinessTaskId;
      this._replacementDevicePlatform = value.replacementDevicePlatform;
      this._replacementDeviceSerialNumber = value.replacementDeviceSerialNumber;
      this._replacementStatus = value.replacementStatus;
      this._replacementTime = value.replacementTime;
      this._workflowId = value.workflowId;
    }
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: number; 
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }
  public set creationTime(value: number) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // family - computed: true, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // faulty_device_id - computed: false, optional: true, required: false
  private _faultyDeviceId?: string; 
  public get faultyDeviceId() {
    return this.getStringAttribute('faulty_device_id');
  }
  public set faultyDeviceId(value: string) {
    this._faultyDeviceId = value;
  }
  public resetFaultyDeviceId() {
    this._faultyDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDeviceIdInput() {
    return this._faultyDeviceId;
  }

  // faulty_device_name - computed: false, optional: true, required: false
  private _faultyDeviceName?: string; 
  public get faultyDeviceName() {
    return this.getStringAttribute('faulty_device_name');
  }
  public set faultyDeviceName(value: string) {
    this._faultyDeviceName = value;
  }
  public resetFaultyDeviceName() {
    this._faultyDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDeviceNameInput() {
    return this._faultyDeviceName;
  }

  // faulty_device_platform - computed: true, optional: true, required: false
  private _faultyDevicePlatform?: string; 
  public get faultyDevicePlatform() {
    return this.getStringAttribute('faulty_device_platform');
  }
  public set faultyDevicePlatform(value: string) {
    this._faultyDevicePlatform = value;
  }
  public resetFaultyDevicePlatform() {
    this._faultyDevicePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultyDevicePlatformInput() {
    return this._faultyDevicePlatform;
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

  // neighbour_device_id - computed: true, optional: true, required: false
  private _neighbourDeviceId?: string; 
  public get neighbourDeviceId() {
    return this.getStringAttribute('neighbour_device_id');
  }
  public set neighbourDeviceId(value: string) {
    this._neighbourDeviceId = value;
  }
  public resetNeighbourDeviceId() {
    this._neighbourDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighbourDeviceIdInput() {
    return this._neighbourDeviceId;
  }

  // network_readiness_task_id - computed: true, optional: true, required: false
  private _networkReadinessTaskId?: string; 
  public get networkReadinessTaskId() {
    return this.getStringAttribute('network_readiness_task_id');
  }
  public set networkReadinessTaskId(value: string) {
    this._networkReadinessTaskId = value;
  }
  public resetNetworkReadinessTaskId() {
    this._networkReadinessTaskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkReadinessTaskIdInput() {
    return this._networkReadinessTaskId;
  }

  // replacement_device_platform - computed: true, optional: true, required: false
  private _replacementDevicePlatform?: string; 
  public get replacementDevicePlatform() {
    return this.getStringAttribute('replacement_device_platform');
  }
  public set replacementDevicePlatform(value: string) {
    this._replacementDevicePlatform = value;
  }
  public resetReplacementDevicePlatform() {
    this._replacementDevicePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementDevicePlatformInput() {
    return this._replacementDevicePlatform;
  }

  // replacement_device_serial_number - computed: false, optional: true, required: false
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

  // replacement_status - computed: true, optional: true, required: false
  private _replacementStatus?: string; 
  public get replacementStatus() {
    return this.getStringAttribute('replacement_status');
  }
  public set replacementStatus(value: string) {
    this._replacementStatus = value;
  }
  public resetReplacementStatus() {
    this._replacementStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStatusInput() {
    return this._replacementStatus;
  }

  // replacement_time - computed: true, optional: true, required: false
  private _replacementTime?: number; 
  public get replacementTime() {
    return this.getNumberAttribute('replacement_time');
  }
  public set replacementTime(value: number) {
    this._replacementTime = value;
  }
  public resetReplacementTime() {
    this._replacementTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementTimeInput() {
    return this._replacementTime;
  }

  // workflow_id - computed: true, optional: true, required: false
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }
}

export class DeviceReplacementParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : DeviceReplacementParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): DeviceReplacementParametersPayloadOutputReference {
    return new DeviceReplacementParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceReplacementParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#payload DeviceReplacement#payload}
  */
  readonly payload?: DeviceReplacementParametersPayload[] | cdktf.IResolvable;
}

export function deviceReplacementParametersToTerraform(struct?: DeviceReplacementParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(deviceReplacementParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function deviceReplacementParametersToHclTerraform(struct?: DeviceReplacementParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(deviceReplacementParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceReplacementParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceReplacementParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceReplacementParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceReplacementParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new DeviceReplacementParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: DeviceReplacementParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class DeviceReplacementParametersList extends cdktf.ComplexList {
  public internalValue? : DeviceReplacementParameters[] | cdktf.IResolvable

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
  public get(index: number): DeviceReplacementParametersOutputReference {
    return new DeviceReplacementParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement dnacenter_device_replacement}
*/
export class DeviceReplacement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_replacement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceReplacement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceReplacement to import
  * @param importFromId The id of the existing DeviceReplacement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceReplacement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_replacement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/device_replacement dnacenter_device_replacement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceReplacementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeviceReplacementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_replacement',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
  private _item = new DeviceReplacementItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DeviceReplacementParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DeviceReplacementParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
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
      parameters: cdktf.listMapper(deviceReplacementParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(deviceReplacementParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceReplacementParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
