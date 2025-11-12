// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployTemplateV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#id DeployTemplateV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#parameters DeployTemplateV1#parameters}
  */
  readonly parameters: DeployTemplateV1Parameters;
}
export interface DeployTemplateV1ItemDevices {
}

export function deployTemplateV1ItemDevicesToTerraform(struct?: DeployTemplateV1ItemDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deployTemplateV1ItemDevicesToHclTerraform(struct?: DeployTemplateV1ItemDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeployTemplateV1ItemDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateV1ItemDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateV1ItemDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detailed_status_message - computed: true, optional: false, required: false
  public get detailedStatusMessage() {
    return this.getStringAttribute('detailed_status_message');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class DeployTemplateV1ItemDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DeployTemplateV1ItemDevicesOutputReference {
    return new DeployTemplateV1ItemDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateV1Item {
}

export function deployTemplateV1ItemToTerraform(struct?: DeployTemplateV1Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deployTemplateV1ItemToHclTerraform(struct?: DeployTemplateV1Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeployTemplateV1ItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateV1Item | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateV1Item | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // deployment_name - computed: true, optional: false, required: false
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DeployTemplateV1ItemDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // template_version - computed: true, optional: false, required: false
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }
}

export class DeployTemplateV1ItemList extends cdktf.ComplexList {

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
  public get(index: number): DeployTemplateV1ItemOutputReference {
    return new DeployTemplateV1ItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateV1ParametersTargetInfo {
  /**
  * Hostname of device is required if targetType is MANAGED_DEVICE_HOSTNAME
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#host_name DeployTemplateV1#host_name}
  */
  readonly hostName?: string;
  /**
  * UUID of target is required if targetType is MANAGED_DEVICE_UUID
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#id DeployTemplateV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template params/values to be provisioned
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#params DeployTemplateV1#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Resource params to be provisioned
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#resource_params DeployTemplateV1#resource_params}
  */
  readonly resourceParams?: string[];
  /**
  * Target type of device
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#type DeployTemplateV1#type}
  */
  readonly type?: string;
  /**
  * Versioned templateUUID to be provisioned
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#versioned_template_id DeployTemplateV1#versioned_template_id}
  */
  readonly versionedTemplateId?: string;
}

export function deployTemplateV1ParametersTargetInfoToTerraform(struct?: DeployTemplateV1ParametersTargetInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    id: cdktf.stringToTerraform(struct!.id),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    resource_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceParams),
    type: cdktf.stringToTerraform(struct!.type),
    versioned_template_id: cdktf.stringToTerraform(struct!.versionedTemplateId),
  }
}


export function deployTemplateV1ParametersTargetInfoToHclTerraform(struct?: DeployTemplateV1ParametersTargetInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
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
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versioned_template_id: {
      value: cdktf.stringToHclTerraform(struct!.versionedTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplateV1ParametersTargetInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateV1ParametersTargetInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._resourceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParams = this._resourceParams;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._versionedTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionedTemplateId = this._versionedTemplateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateV1ParametersTargetInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._id = undefined;
      this._params = undefined;
      this._resourceParams = undefined;
      this._type = undefined;
      this._versionedTemplateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._id = value.id;
      this._params = value.params;
      this._resourceParams = value.resourceParams;
      this._type = value.type;
      this._versionedTemplateId = value.versionedTemplateId;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: false, optional: true, required: false
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // resource_params - computed: false, optional: true, required: false
  private _resourceParams?: string[]; 
  public get resourceParams() {
    return this.getListAttribute('resource_params');
  }
  public set resourceParams(value: string[]) {
    this._resourceParams = value;
  }
  public resetResourceParams() {
    this._resourceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParamsInput() {
    return this._resourceParams;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // versioned_template_id - computed: false, optional: true, required: false
  private _versionedTemplateId?: string; 
  public get versionedTemplateId() {
    return this.getStringAttribute('versioned_template_id');
  }
  public set versionedTemplateId(value: string) {
    this._versionedTemplateId = value;
  }
  public resetVersionedTemplateId() {
    this._versionedTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedTemplateIdInput() {
    return this._versionedTemplateId;
  }
}

export class DeployTemplateV1ParametersTargetInfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplateV1ParametersTargetInfo[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplateV1ParametersTargetInfoOutputReference {
    return new DeployTemplateV1ParametersTargetInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateV1Parameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#force_push_template DeployTemplateV1#force_push_template}
  */
  readonly forcePushTemplate?: string;
  /**
  * Composite template flag
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#is_composite DeployTemplateV1#is_composite}
  */
  readonly isComposite?: string;
  /**
  * Main template UUID of versioned template
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#main_template_id DeployTemplateV1#main_template_id}
  */
  readonly mainTemplateId?: string;
  /**
  * memberTemplateDeploymentInfo
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#member_template_deployment_info DeployTemplateV1#member_template_deployment_info}
  */
  readonly memberTemplateDeploymentInfo?: string[];
  /**
  * UUID of template to be provisioned
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#template_id DeployTemplateV1#template_id}
  */
  readonly templateId?: string;
  /**
  * target_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#target_info DeployTemplateV1#target_info}
  */
  readonly targetInfo?: DeployTemplateV1ParametersTargetInfo[] | cdktf.IResolvable;
}

export function deployTemplateV1ParametersToTerraform(struct?: DeployTemplateV1ParametersOutputReference | DeployTemplateV1Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_push_template: cdktf.stringToTerraform(struct!.forcePushTemplate),
    is_composite: cdktf.stringToTerraform(struct!.isComposite),
    main_template_id: cdktf.stringToTerraform(struct!.mainTemplateId),
    member_template_deployment_info: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberTemplateDeploymentInfo),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    target_info: cdktf.listMapper(deployTemplateV1ParametersTargetInfoToTerraform, true)(struct!.targetInfo),
  }
}


export function deployTemplateV1ParametersToHclTerraform(struct?: DeployTemplateV1ParametersOutputReference | DeployTemplateV1Parameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_push_template: {
      value: cdktf.stringToHclTerraform(struct!.forcePushTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_composite: {
      value: cdktf.stringToHclTerraform(struct!.isComposite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_template_id: {
      value: cdktf.stringToHclTerraform(struct!.mainTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_template_deployment_info: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberTemplateDeploymentInfo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_info: {
      value: cdktf.listMapperHcl(deployTemplateV1ParametersTargetInfoToHclTerraform, true)(struct!.targetInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplateV1ParametersTargetInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplateV1ParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeployTemplateV1Parameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forcePushTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePushTemplate = this._forcePushTemplate;
    }
    if (this._isComposite !== undefined) {
      hasAnyValues = true;
      internalValueResult.isComposite = this._isComposite;
    }
    if (this._mainTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainTemplateId = this._mainTemplateId;
    }
    if (this._memberTemplateDeploymentInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberTemplateDeploymentInfo = this._memberTemplateDeploymentInfo;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._targetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInfo = this._targetInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateV1Parameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forcePushTemplate = undefined;
      this._isComposite = undefined;
      this._mainTemplateId = undefined;
      this._memberTemplateDeploymentInfo = undefined;
      this._templateId = undefined;
      this._targetInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forcePushTemplate = value.forcePushTemplate;
      this._isComposite = value.isComposite;
      this._mainTemplateId = value.mainTemplateId;
      this._memberTemplateDeploymentInfo = value.memberTemplateDeploymentInfo;
      this._templateId = value.templateId;
      this._targetInfo.internalValue = value.targetInfo;
    }
  }

  // force_push_template - computed: false, optional: true, required: false
  private _forcePushTemplate?: string; 
  public get forcePushTemplate() {
    return this.getStringAttribute('force_push_template');
  }
  public set forcePushTemplate(value: string) {
    this._forcePushTemplate = value;
  }
  public resetForcePushTemplate() {
    this._forcePushTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePushTemplateInput() {
    return this._forcePushTemplate;
  }

  // is_composite - computed: false, optional: true, required: false
  private _isComposite?: string; 
  public get isComposite() {
    return this.getStringAttribute('is_composite');
  }
  public set isComposite(value: string) {
    this._isComposite = value;
  }
  public resetIsComposite() {
    this._isComposite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompositeInput() {
    return this._isComposite;
  }

  // main_template_id - computed: false, optional: true, required: false
  private _mainTemplateId?: string; 
  public get mainTemplateId() {
    return this.getStringAttribute('main_template_id');
  }
  public set mainTemplateId(value: string) {
    this._mainTemplateId = value;
  }
  public resetMainTemplateId() {
    this._mainTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainTemplateIdInput() {
    return this._mainTemplateId;
  }

  // member_template_deployment_info - computed: false, optional: true, required: false
  private _memberTemplateDeploymentInfo?: string[]; 
  public get memberTemplateDeploymentInfo() {
    return this.getListAttribute('member_template_deployment_info');
  }
  public set memberTemplateDeploymentInfo(value: string[]) {
    this._memberTemplateDeploymentInfo = value;
  }
  public resetMemberTemplateDeploymentInfo() {
    this._memberTemplateDeploymentInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTemplateDeploymentInfoInput() {
    return this._memberTemplateDeploymentInfo;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // target_info - computed: false, optional: true, required: false
  private _targetInfo = new DeployTemplateV1ParametersTargetInfoList(this, "target_info", false);
  public get targetInfo() {
    return this._targetInfo;
  }
  public putTargetInfo(value: DeployTemplateV1ParametersTargetInfo[] | cdktf.IResolvable) {
    this._targetInfo.internalValue = value;
  }
  public resetTargetInfo() {
    this._targetInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInfoInput() {
    return this._targetInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1 dnacenter_deploy_template_v1}
*/
export class DeployTemplateV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_deploy_template_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployTemplateV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployTemplateV1 to import
  * @param importFromId The id of the existing DeployTemplateV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployTemplateV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_deploy_template_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/deploy_template_v1 dnacenter_deploy_template_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployTemplateV1Config
  */
  public constructor(scope: Construct, id: string, config: DeployTemplateV1Config) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_deploy_template_v1',
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
  private _item = new DeployTemplateV1ItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new DeployTemplateV1ParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DeployTemplateV1Parameters) {
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
      parameters: deployTemplateV1ParametersToTerraform(this._parameters.internalValue),
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
        value: deployTemplateV1ParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeployTemplateV1ParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
