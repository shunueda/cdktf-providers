// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpDeviceClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#id PnpDeviceClaim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#parameters PnpDeviceClaim#parameters}
  */
  readonly parameters: PnpDeviceClaimParameters;
}
export interface PnpDeviceClaimItem {
}

export function pnpDeviceClaimItemToTerraform(struct?: PnpDeviceClaimItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceClaimItemToHclTerraform(struct?: PnpDeviceClaimItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceClaimItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceClaimItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceClaimItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_array_response - computed: true, optional: false, required: false
  public get jsonArrayResponse() {
    return this.getListAttribute('json_array_response');
  }

  // json_response - computed: true, optional: false, required: false
  public get jsonResponse() {
    return this.getStringAttribute('json_response');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}

export class PnpDeviceClaimItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceClaimItemOutputReference {
    return new PnpDeviceClaimItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#key PnpDeviceClaim#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#value PnpDeviceClaim#value}
  */
  readonly value?: string;
}

export function pnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersToTerraform(struct?: PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersToHclTerraform(struct?: PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class PnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
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

export class PnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersOutputReference {
    return new PnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceClaimParametersDeviceClaimListConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#config_id PnpDeviceClaim#config_id}
  */
  readonly configId?: string;
  /**
  * config_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#config_parameters PnpDeviceClaim#config_parameters}
  */
  readonly configParameters?: PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters[] | cdktf.IResolvable;
}

export function pnpDeviceClaimParametersDeviceClaimListConfigListStructToTerraform(struct?: PnpDeviceClaimParametersDeviceClaimListConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_parameters: cdktf.listMapper(pnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersToTerraform, true)(struct!.configParameters),
  }
}


export function pnpDeviceClaimParametersDeviceClaimListConfigListStructToHclTerraform(struct?: PnpDeviceClaimParametersDeviceClaimListConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_parameters: {
      value: cdktf.listMapperHcl(pnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersToHclTerraform, true)(struct!.configParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceClaimParametersDeviceClaimListConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceClaimParametersDeviceClaimListConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._configParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParameters = this._configParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceClaimParametersDeviceClaimListConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configId = undefined;
      this._configParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configId = value.configId;
      this._configParameters.internalValue = value.configParameters;
    }
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // config_parameters - computed: false, optional: true, required: false
  private _configParameters = new PnpDeviceClaimParametersDeviceClaimListConfigListConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
  public putConfigParameters(value: PnpDeviceClaimParametersDeviceClaimListConfigListConfigParameters[] | cdktf.IResolvable) {
    this._configParameters.internalValue = value;
  }
  public resetConfigParameters() {
    this._configParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParametersInput() {
    return this._configParameters.internalValue;
  }
}

export class PnpDeviceClaimParametersDeviceClaimListConfigListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceClaimParametersDeviceClaimListConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceClaimParametersDeviceClaimListConfigListStructOutputReference {
    return new PnpDeviceClaimParametersDeviceClaimListConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceClaimParametersDeviceClaimListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#device_id PnpDeviceClaim#device_id}
  */
  readonly deviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#license_level PnpDeviceClaim#license_level}
  */
  readonly licenseLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#license_type PnpDeviceClaim#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#top_of_stack_serial_number PnpDeviceClaim#top_of_stack_serial_number}
  */
  readonly topOfStackSerialNumber?: string;
  /**
  * config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#config_list PnpDeviceClaim#config_list}
  */
  readonly configList?: PnpDeviceClaimParametersDeviceClaimListConfigListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceClaimParametersDeviceClaimListStructToTerraform(struct?: PnpDeviceClaimParametersDeviceClaimListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    license_level: cdktf.stringToTerraform(struct!.licenseLevel),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    top_of_stack_serial_number: cdktf.stringToTerraform(struct!.topOfStackSerialNumber),
    config_list: cdktf.listMapper(pnpDeviceClaimParametersDeviceClaimListConfigListStructToTerraform, true)(struct!.configList),
  }
}


export function pnpDeviceClaimParametersDeviceClaimListStructToHclTerraform(struct?: PnpDeviceClaimParametersDeviceClaimListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_level: {
      value: cdktf.stringToHclTerraform(struct!.licenseLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_of_stack_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.topOfStackSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_list: {
      value: cdktf.listMapperHcl(pnpDeviceClaimParametersDeviceClaimListConfigListStructToHclTerraform, true)(struct!.configList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceClaimParametersDeviceClaimListConfigListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceClaimParametersDeviceClaimListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceClaimParametersDeviceClaimListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._licenseLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseLevel = this._licenseLevel;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._topOfStackSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.topOfStackSerialNumber = this._topOfStackSerialNumber;
    }
    if (this._configList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configList = this._configList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceClaimParametersDeviceClaimListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceId = undefined;
      this._licenseLevel = undefined;
      this._licenseType = undefined;
      this._topOfStackSerialNumber = undefined;
      this._configList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceId = value.deviceId;
      this._licenseLevel = value.licenseLevel;
      this._licenseType = value.licenseType;
      this._topOfStackSerialNumber = value.topOfStackSerialNumber;
      this._configList.internalValue = value.configList;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // license_level - computed: true, optional: true, required: false
  private _licenseLevel?: string; 
  public get licenseLevel() {
    return this.getStringAttribute('license_level');
  }
  public set licenseLevel(value: string) {
    this._licenseLevel = value;
  }
  public resetLicenseLevel() {
    this._licenseLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseLevelInput() {
    return this._licenseLevel;
  }

  // license_type - computed: true, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // top_of_stack_serial_number - computed: true, optional: true, required: false
  private _topOfStackSerialNumber?: string; 
  public get topOfStackSerialNumber() {
    return this.getStringAttribute('top_of_stack_serial_number');
  }
  public set topOfStackSerialNumber(value: string) {
    this._topOfStackSerialNumber = value;
  }
  public resetTopOfStackSerialNumber() {
    this._topOfStackSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topOfStackSerialNumberInput() {
    return this._topOfStackSerialNumber;
  }

  // config_list - computed: false, optional: true, required: false
  private _configList = new PnpDeviceClaimParametersDeviceClaimListConfigListStructList(this, "config_list", false);
  public get configList() {
    return this._configList;
  }
  public putConfigList(value: PnpDeviceClaimParametersDeviceClaimListConfigListStruct[] | cdktf.IResolvable) {
    this._configList.internalValue = value;
  }
  public resetConfigList() {
    this._configList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configListInput() {
    return this._configList.internalValue;
  }
}

export class PnpDeviceClaimParametersDeviceClaimListStructList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceClaimParametersDeviceClaimListStruct[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceClaimParametersDeviceClaimListStructOutputReference {
    return new PnpDeviceClaimParametersDeviceClaimListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceClaimParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#config_file_url PnpDeviceClaim#config_file_url}
  */
  readonly configFileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#config_id PnpDeviceClaim#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#file_service_id PnpDeviceClaim#file_service_id}
  */
  readonly fileServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#image_id PnpDeviceClaim#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#image_url PnpDeviceClaim#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#populate_inventory PnpDeviceClaim#populate_inventory}
  */
  readonly populateInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#project_id PnpDeviceClaim#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#workflow_id PnpDeviceClaim#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * device_claim_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#device_claim_list PnpDeviceClaim#device_claim_list}
  */
  readonly deviceClaimList?: PnpDeviceClaimParametersDeviceClaimListStruct[] | cdktf.IResolvable;
}

export function pnpDeviceClaimParametersToTerraform(struct?: PnpDeviceClaimParametersOutputReference | PnpDeviceClaimParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file_url: cdktf.stringToTerraform(struct!.configFileUrl),
    config_id: cdktf.stringToTerraform(struct!.configId),
    file_service_id: cdktf.stringToTerraform(struct!.fileServiceId),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    populate_inventory: cdktf.stringToTerraform(struct!.populateInventory),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
    device_claim_list: cdktf.listMapper(pnpDeviceClaimParametersDeviceClaimListStructToTerraform, true)(struct!.deviceClaimList),
  }
}


export function pnpDeviceClaimParametersToHclTerraform(struct?: PnpDeviceClaimParametersOutputReference | PnpDeviceClaimParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file_url: {
      value: cdktf.stringToHclTerraform(struct!.configFileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_service_id: {
      value: cdktf.stringToHclTerraform(struct!.fileServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    populate_inventory: {
      value: cdktf.stringToHclTerraform(struct!.populateInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_claim_list: {
      value: cdktf.listMapperHcl(pnpDeviceClaimParametersDeviceClaimListStructToHclTerraform, true)(struct!.deviceClaimList),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceClaimParametersDeviceClaimListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceClaimParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpDeviceClaimParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFileUrl = this._configFileUrl;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._fileServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileServiceId = this._fileServiceId;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._populateInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.populateInventory = this._populateInventory;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    if (this._deviceClaimList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceClaimList = this._deviceClaimList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceClaimParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configFileUrl = undefined;
      this._configId = undefined;
      this._fileServiceId = undefined;
      this._imageId = undefined;
      this._imageUrl = undefined;
      this._populateInventory = undefined;
      this._projectId = undefined;
      this._workflowId = undefined;
      this._deviceClaimList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configFileUrl = value.configFileUrl;
      this._configId = value.configId;
      this._fileServiceId = value.fileServiceId;
      this._imageId = value.imageId;
      this._imageUrl = value.imageUrl;
      this._populateInventory = value.populateInventory;
      this._projectId = value.projectId;
      this._workflowId = value.workflowId;
      this._deviceClaimList.internalValue = value.deviceClaimList;
    }
  }

  // config_file_url - computed: true, optional: true, required: false
  private _configFileUrl?: string; 
  public get configFileUrl() {
    return this.getStringAttribute('config_file_url');
  }
  public set configFileUrl(value: string) {
    this._configFileUrl = value;
  }
  public resetConfigFileUrl() {
    this._configFileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileUrlInput() {
    return this._configFileUrl;
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // file_service_id - computed: true, optional: true, required: false
  private _fileServiceId?: string; 
  public get fileServiceId() {
    return this.getStringAttribute('file_service_id');
  }
  public set fileServiceId(value: string) {
    this._fileServiceId = value;
  }
  public resetFileServiceId() {
    this._fileServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileServiceIdInput() {
    return this._fileServiceId;
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_url - computed: true, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // populate_inventory - computed: true, optional: true, required: false
  private _populateInventory?: string; 
  public get populateInventory() {
    return this.getStringAttribute('populate_inventory');
  }
  public set populateInventory(value: string) {
    this._populateInventory = value;
  }
  public resetPopulateInventory() {
    this._populateInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get populateInventoryInput() {
    return this._populateInventory;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // device_claim_list - computed: false, optional: true, required: false
  private _deviceClaimList = new PnpDeviceClaimParametersDeviceClaimListStructList(this, "device_claim_list", false);
  public get deviceClaimList() {
    return this._deviceClaimList;
  }
  public putDeviceClaimList(value: PnpDeviceClaimParametersDeviceClaimListStruct[] | cdktf.IResolvable) {
    this._deviceClaimList.internalValue = value;
  }
  public resetDeviceClaimList() {
    this._deviceClaimList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceClaimListInput() {
    return this._deviceClaimList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim dnacenter_pnp_device_claim}
*/
export class PnpDeviceClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpDeviceClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpDeviceClaim to import
  * @param importFromId The id of the existing PnpDeviceClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpDeviceClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_claim dnacenter_pnp_device_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpDeviceClaimConfig
  */
  public constructor(scope: Construct, id: string, config: PnpDeviceClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_device_claim',
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
  private _item = new PnpDeviceClaimItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PnpDeviceClaimParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpDeviceClaimParameters) {
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
      parameters: pnpDeviceClaimParametersToTerraform(this._parameters.internalValue),
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
        value: pnpDeviceClaimParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpDeviceClaimParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
