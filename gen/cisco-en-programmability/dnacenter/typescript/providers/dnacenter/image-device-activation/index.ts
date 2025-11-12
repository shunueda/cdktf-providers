// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageDeviceActivationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#id ImageDeviceActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#parameters ImageDeviceActivation#parameters}
  */
  readonly parameters: ImageDeviceActivationParameters;
}
export interface ImageDeviceActivationItem {
}

export function imageDeviceActivationItemToTerraform(struct?: ImageDeviceActivationItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageDeviceActivationItemToHclTerraform(struct?: ImageDeviceActivationItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageDeviceActivationItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageDeviceActivationItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageDeviceActivationItem | undefined) {
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

export class ImageDeviceActivationItemList extends cdktf.ComplexList {

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
  public get(index: number): ImageDeviceActivationItemOutputReference {
    return new ImageDeviceActivationItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageDeviceActivationParametersPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#activate_lower_image_version ImageDeviceActivation#activate_lower_image_version}
  */
  readonly activateLowerImageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#device_upgrade_mode ImageDeviceActivation#device_upgrade_mode}
  */
  readonly deviceUpgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#device_uuid ImageDeviceActivation#device_uuid}
  */
  readonly deviceUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#distribute_if_needed ImageDeviceActivation#distribute_if_needed}
  */
  readonly distributeIfNeeded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#image_uuid_list ImageDeviceActivation#image_uuid_list}
  */
  readonly imageUuidList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#smu_image_uuid_list ImageDeviceActivation#smu_image_uuid_list}
  */
  readonly smuImageUuidList?: string[];
}

export function imageDeviceActivationParametersPayloadToTerraform(struct?: ImageDeviceActivationParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate_lower_image_version: cdktf.stringToTerraform(struct!.activateLowerImageVersion),
    device_upgrade_mode: cdktf.stringToTerraform(struct!.deviceUpgradeMode),
    device_uuid: cdktf.stringToTerraform(struct!.deviceUuid),
    distribute_if_needed: cdktf.stringToTerraform(struct!.distributeIfNeeded),
    image_uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imageUuidList),
    smu_image_uuid_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.smuImageUuidList),
  }
}


export function imageDeviceActivationParametersPayloadToHclTerraform(struct?: ImageDeviceActivationParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate_lower_image_version: {
      value: cdktf.stringToHclTerraform(struct!.activateLowerImageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_upgrade_mode: {
      value: cdktf.stringToHclTerraform(struct!.deviceUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_uuid: {
      value: cdktf.stringToHclTerraform(struct!.deviceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_if_needed: {
      value: cdktf.stringToHclTerraform(struct!.distributeIfNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uuid_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imageUuidList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    smu_image_uuid_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.smuImageUuidList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageDeviceActivationParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageDeviceActivationParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activateLowerImageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateLowerImageVersion = this._activateLowerImageVersion;
    }
    if (this._deviceUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceUpgradeMode = this._deviceUpgradeMode;
    }
    if (this._deviceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceUuid = this._deviceUuid;
    }
    if (this._distributeIfNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeIfNeeded = this._distributeIfNeeded;
    }
    if (this._imageUuidList !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUuidList = this._imageUuidList;
    }
    if (this._smuImageUuidList !== undefined) {
      hasAnyValues = true;
      internalValueResult.smuImageUuidList = this._smuImageUuidList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageDeviceActivationParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activateLowerImageVersion = undefined;
      this._deviceUpgradeMode = undefined;
      this._deviceUuid = undefined;
      this._distributeIfNeeded = undefined;
      this._imageUuidList = undefined;
      this._smuImageUuidList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activateLowerImageVersion = value.activateLowerImageVersion;
      this._deviceUpgradeMode = value.deviceUpgradeMode;
      this._deviceUuid = value.deviceUuid;
      this._distributeIfNeeded = value.distributeIfNeeded;
      this._imageUuidList = value.imageUuidList;
      this._smuImageUuidList = value.smuImageUuidList;
    }
  }

  // activate_lower_image_version - computed: true, optional: true, required: false
  private _activateLowerImageVersion?: string; 
  public get activateLowerImageVersion() {
    return this.getStringAttribute('activate_lower_image_version');
  }
  public set activateLowerImageVersion(value: string) {
    this._activateLowerImageVersion = value;
  }
  public resetActivateLowerImageVersion() {
    this._activateLowerImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateLowerImageVersionInput() {
    return this._activateLowerImageVersion;
  }

  // device_upgrade_mode - computed: true, optional: true, required: false
  private _deviceUpgradeMode?: string; 
  public get deviceUpgradeMode() {
    return this.getStringAttribute('device_upgrade_mode');
  }
  public set deviceUpgradeMode(value: string) {
    this._deviceUpgradeMode = value;
  }
  public resetDeviceUpgradeMode() {
    this._deviceUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUpgradeModeInput() {
    return this._deviceUpgradeMode;
  }

  // device_uuid - computed: true, optional: true, required: false
  private _deviceUuid?: string; 
  public get deviceUuid() {
    return this.getStringAttribute('device_uuid');
  }
  public set deviceUuid(value: string) {
    this._deviceUuid = value;
  }
  public resetDeviceUuid() {
    this._deviceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidInput() {
    return this._deviceUuid;
  }

  // distribute_if_needed - computed: true, optional: true, required: false
  private _distributeIfNeeded?: string; 
  public get distributeIfNeeded() {
    return this.getStringAttribute('distribute_if_needed');
  }
  public set distributeIfNeeded(value: string) {
    this._distributeIfNeeded = value;
  }
  public resetDistributeIfNeeded() {
    this._distributeIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeIfNeededInput() {
    return this._distributeIfNeeded;
  }

  // image_uuid_list - computed: true, optional: true, required: false
  private _imageUuidList?: string[]; 
  public get imageUuidList() {
    return this.getListAttribute('image_uuid_list');
  }
  public set imageUuidList(value: string[]) {
    this._imageUuidList = value;
  }
  public resetImageUuidList() {
    this._imageUuidList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUuidListInput() {
    return this._imageUuidList;
  }

  // smu_image_uuid_list - computed: true, optional: true, required: false
  private _smuImageUuidList?: string[]; 
  public get smuImageUuidList() {
    return this.getListAttribute('smu_image_uuid_list');
  }
  public set smuImageUuidList(value: string[]) {
    this._smuImageUuidList = value;
  }
  public resetSmuImageUuidList() {
    this._smuImageUuidList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smuImageUuidListInput() {
    return this._smuImageUuidList;
  }
}

export class ImageDeviceActivationParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : ImageDeviceActivationParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): ImageDeviceActivationParametersPayloadOutputReference {
    return new ImageDeviceActivationParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageDeviceActivationParameters {
  /**
  * Client-Type header parameter. Client-type (Optional)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#client_type ImageDeviceActivation#client_type}
  */
  readonly clientType: string;
  /**
  * Client-Url header parameter. Client-url (Optional)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#client_url ImageDeviceActivation#client_url}
  */
  readonly clientUrl: string;
  /**
  * scheduleValidate query parameter. scheduleValidate, validates data before schedule (Optional)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#schedule_validate ImageDeviceActivation#schedule_validate}
  */
  readonly scheduleValidate?: boolean | cdktf.IResolvable;
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#payload ImageDeviceActivation#payload}
  */
  readonly payload?: ImageDeviceActivationParametersPayload[] | cdktf.IResolvable;
}

export function imageDeviceActivationParametersToTerraform(struct?: ImageDeviceActivationParametersOutputReference | ImageDeviceActivationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_type: cdktf.stringToTerraform(struct!.clientType),
    client_url: cdktf.stringToTerraform(struct!.clientUrl),
    schedule_validate: cdktf.booleanToTerraform(struct!.scheduleValidate),
    payload: cdktf.listMapper(imageDeviceActivationParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function imageDeviceActivationParametersToHclTerraform(struct?: ImageDeviceActivationParametersOutputReference | ImageDeviceActivationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_type: {
      value: cdktf.stringToHclTerraform(struct!.clientType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_url: {
      value: cdktf.stringToHclTerraform(struct!.clientUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_validate: {
      value: cdktf.booleanToHclTerraform(struct!.scheduleValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    payload: {
      value: cdktf.listMapperHcl(imageDeviceActivationParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "ImageDeviceActivationParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageDeviceActivationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageDeviceActivationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientType = this._clientType;
    }
    if (this._clientUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientUrl = this._clientUrl;
    }
    if (this._scheduleValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleValidate = this._scheduleValidate;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageDeviceActivationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientType = undefined;
      this._clientUrl = undefined;
      this._scheduleValidate = undefined;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientType = value.clientType;
      this._clientUrl = value.clientUrl;
      this._scheduleValidate = value.scheduleValidate;
      this._payload.internalValue = value.payload;
    }
  }

  // client_type - computed: false, optional: false, required: true
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // client_url - computed: false, optional: false, required: true
  private _clientUrl?: string; 
  public get clientUrl() {
    return this.getStringAttribute('client_url');
  }
  public set clientUrl(value: string) {
    this._clientUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUrlInput() {
    return this._clientUrl;
  }

  // schedule_validate - computed: false, optional: true, required: false
  private _scheduleValidate?: boolean | cdktf.IResolvable; 
  public get scheduleValidate() {
    return this.getBooleanAttribute('schedule_validate');
  }
  public set scheduleValidate(value: boolean | cdktf.IResolvable) {
    this._scheduleValidate = value;
  }
  public resetScheduleValidate() {
    this._scheduleValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleValidateInput() {
    return this._scheduleValidate;
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new ImageDeviceActivationParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: ImageDeviceActivationParametersPayload[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation dnacenter_image_device_activation}
*/
export class ImageDeviceActivation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_image_device_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageDeviceActivation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageDeviceActivation to import
  * @param importFromId The id of the existing ImageDeviceActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageDeviceActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_image_device_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/image_device_activation dnacenter_image_device_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageDeviceActivationConfig
  */
  public constructor(scope: Construct, id: string, config: ImageDeviceActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_image_device_activation',
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
  private _item = new ImageDeviceActivationItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new ImageDeviceActivationParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ImageDeviceActivationParameters) {
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
      parameters: imageDeviceActivationParametersToTerraform(this._parameters.internalValue),
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
        value: imageDeviceActivationParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageDeviceActivationParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
