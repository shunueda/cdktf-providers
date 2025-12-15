// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Copy config from running into startup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#copying_config DeployTemplate#copying_config}
  */
  readonly copyingConfig?: boolean | cdktf.IResolvable;
  /**
  * Force Push Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#force_push_template DeployTemplate#force_push_template}
  */
  readonly forcePushTemplate?: boolean | cdktf.IResolvable;
  /**
  * Composite template flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#is_composite DeployTemplate#is_composite}
  */
  readonly isComposite?: boolean | cdktf.IResolvable;
  /**
  * Composite Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#main_template_id DeployTemplate#main_template_id}
  */
  readonly mainTemplateId?: string;
  /**
  * Member Template Deployment Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#member_template_deployment_info DeployTemplate#member_template_deployment_info}
  */
  readonly memberTemplateDeploymentInfo?: DeployTemplateMemberTemplateDeploymentInfo[] | cdktf.IResolvable;
  /**
  * Attribute that controls when the template should be redeployed. `ALWAYS` redeploys it on every Terraform apply, `ON_CHANGE` redeploys only when the template’s content changes, and `NEVER` prevents redeployment.
  *   - Choices: `ALWAYS`, `ON_CHANGE`, `NEVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#redeploy DeployTemplate#redeploy}
  */
  readonly redeploy?: string;
  /**
  * Target info to deploy template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#target_info DeployTemplate#target_info}
  */
  readonly targetInfo: DeployTemplateTargetInfo[] | cdktf.IResolvable;
  /**
  * ID of template to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#template_id DeployTemplate#template_id}
  */
  readonly templateId: string;
}
export interface DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams {
  /**
  * Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#scope DeployTemplate#scope}
  */
  readonly scope?: string;
  /**
  * Target type of device
  *   - Choices: `MANAGED_DEVICE_IP`, `MANAGED_DEVICE_UUID`, `PRE_PROVISIONED_SERIAL`, `PRE_PROVISIONED_MAC`, `DEFAULT`, `MANAGED_DEVICE_HOSTNAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#type DeployTemplate#type}
  */
  readonly type?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#value DeployTemplate#value}
  */
  readonly value?: string;
}

export function deployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsToTerraform(struct?: DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsToHclTerraform(struct?: DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

export class DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsOutputReference {
    return new DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateMemberTemplateDeploymentInfoTargetInfo {
  /**
  * Hostname of device is required if targetType is MANAGED_DEVICE_HOSTNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#host_name DeployTemplate#host_name}
  */
  readonly hostName?: string;
  /**
  * ID of device is required if targetType is MANAGED_DEVICE_UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#id DeployTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template params/values to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#params DeployTemplate#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Attribute that controls when the template should be redeployed. `ALWAYS` redeploys it on every Terraform apply, `ON_CHANGE` redeploys only when the template’s content changes, and `NEVER` prevents redeployment.
  *   - Choices: `ALWAYS`, `ON_CHANGE`, `NEVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#redeploy DeployTemplate#redeploy}
  */
  readonly redeploy?: string;
  /**
  * Resource params to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#resource_params DeployTemplate#resource_params}
  */
  readonly resourceParams?: DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams[] | cdktf.IResolvable;
  /**
  * Target type of device
  *   - Choices: `MANAGED_DEVICE_IP`, `MANAGED_DEVICE_UUID`, `PRE_PROVISIONED_SERIAL`, `PRE_PROVISIONED_MAC`, `DEFAULT`, `MANAGED_DEVICE_HOSTNAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#type DeployTemplate#type}
  */
  readonly type: string;
  /**
  * Versioned template ID to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#versioned_template_id DeployTemplate#versioned_template_id}
  */
  readonly versionedTemplateId?: string;
}

export function deployTemplateMemberTemplateDeploymentInfoTargetInfoToTerraform(struct?: DeployTemplateMemberTemplateDeploymentInfoTargetInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    id: cdktf.stringToTerraform(struct!.id),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    redeploy: cdktf.stringToTerraform(struct!.redeploy),
    resource_params: cdktf.listMapper(deployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsToTerraform, false)(struct!.resourceParams),
    type: cdktf.stringToTerraform(struct!.type),
    versioned_template_id: cdktf.stringToTerraform(struct!.versionedTemplateId),
  }
}


export function deployTemplateMemberTemplateDeploymentInfoTargetInfoToHclTerraform(struct?: DeployTemplateMemberTemplateDeploymentInfoTargetInfo | cdktf.IResolvable): any {
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
    redeploy: {
      value: cdktf.stringToHclTerraform(struct!.redeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_params: {
      value: cdktf.listMapperHcl(deployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsToHclTerraform, false)(struct!.resourceParams),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsList",
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

export class DeployTemplateMemberTemplateDeploymentInfoTargetInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateMemberTemplateDeploymentInfoTargetInfo | cdktf.IResolvable | undefined {
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
    if (this._redeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redeploy = this._redeploy;
    }
    if (this._resourceParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParams = this._resourceParams?.internalValue;
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

  public set internalValue(value: DeployTemplateMemberTemplateDeploymentInfoTargetInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._id = undefined;
      this._params = undefined;
      this._redeploy = undefined;
      this._resourceParams.internalValue = undefined;
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
      this._redeploy = value.redeploy;
      this._resourceParams.internalValue = value.resourceParams;
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

  // redeploy - computed: false, optional: true, required: false
  private _redeploy?: string; 
  public get redeploy() {
    return this.getStringAttribute('redeploy');
  }
  public set redeploy(value: string) {
    this._redeploy = value;
  }
  public resetRedeploy() {
    this._redeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeployInput() {
    return this._redeploy;
  }

  // resource_params - computed: false, optional: true, required: false
  private _resourceParams = new DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParamsList(this, "resource_params", false);
  public get resourceParams() {
    return this._resourceParams;
  }
  public putResourceParams(value: DeployTemplateMemberTemplateDeploymentInfoTargetInfoResourceParams[] | cdktf.IResolvable) {
    this._resourceParams.internalValue = value;
  }
  public resetResourceParams() {
    this._resourceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParamsInput() {
    return this._resourceParams.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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

export class DeployTemplateMemberTemplateDeploymentInfoTargetInfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplateMemberTemplateDeploymentInfoTargetInfo[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplateMemberTemplateDeploymentInfoTargetInfoOutputReference {
    return new DeployTemplateMemberTemplateDeploymentInfoTargetInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateMemberTemplateDeploymentInfo {
  /**
  * Copy config from running into startup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#copying_config DeployTemplate#copying_config}
  */
  readonly copyingConfig?: boolean | cdktf.IResolvable;
  /**
  * Force Push Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#force_push_template DeployTemplate#force_push_template}
  */
  readonly forcePushTemplate?: boolean | cdktf.IResolvable;
  /**
  * Composite template flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#is_composite DeployTemplate#is_composite}
  */
  readonly isComposite?: boolean | cdktf.IResolvable;
  /**
  * Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#main_template_id DeployTemplate#main_template_id}
  */
  readonly mainTemplateId?: string;
  /**
  * Target info to deploy template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#target_info DeployTemplate#target_info}
  */
  readonly targetInfo: DeployTemplateMemberTemplateDeploymentInfoTargetInfo[] | cdktf.IResolvable;
  /**
  * Versioned Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#template_id DeployTemplate#template_id}
  */
  readonly templateId: string;
}

export function deployTemplateMemberTemplateDeploymentInfoToTerraform(struct?: DeployTemplateMemberTemplateDeploymentInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copying_config: cdktf.booleanToTerraform(struct!.copyingConfig),
    force_push_template: cdktf.booleanToTerraform(struct!.forcePushTemplate),
    is_composite: cdktf.booleanToTerraform(struct!.isComposite),
    main_template_id: cdktf.stringToTerraform(struct!.mainTemplateId),
    target_info: cdktf.listMapper(deployTemplateMemberTemplateDeploymentInfoTargetInfoToTerraform, false)(struct!.targetInfo),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function deployTemplateMemberTemplateDeploymentInfoToHclTerraform(struct?: DeployTemplateMemberTemplateDeploymentInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copying_config: {
      value: cdktf.booleanToHclTerraform(struct!.copyingConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_push_template: {
      value: cdktf.booleanToHclTerraform(struct!.forcePushTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_composite: {
      value: cdktf.booleanToHclTerraform(struct!.isComposite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    main_template_id: {
      value: cdktf.stringToHclTerraform(struct!.mainTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_info: {
      value: cdktf.listMapperHcl(deployTemplateMemberTemplateDeploymentInfoTargetInfoToHclTerraform, false)(struct!.targetInfo),
      isBlock: true,
      type: "set",
      storageClassType: "DeployTemplateMemberTemplateDeploymentInfoTargetInfoList",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeployTemplateMemberTemplateDeploymentInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateMemberTemplateDeploymentInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyingConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyingConfig = this._copyingConfig;
    }
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
    if (this._targetInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInfo = this._targetInfo?.internalValue;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateMemberTemplateDeploymentInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyingConfig = undefined;
      this._forcePushTemplate = undefined;
      this._isComposite = undefined;
      this._mainTemplateId = undefined;
      this._targetInfo.internalValue = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyingConfig = value.copyingConfig;
      this._forcePushTemplate = value.forcePushTemplate;
      this._isComposite = value.isComposite;
      this._mainTemplateId = value.mainTemplateId;
      this._targetInfo.internalValue = value.targetInfo;
      this._templateId = value.templateId;
    }
  }

  // copying_config - computed: false, optional: true, required: false
  private _copyingConfig?: boolean | cdktf.IResolvable; 
  public get copyingConfig() {
    return this.getBooleanAttribute('copying_config');
  }
  public set copyingConfig(value: boolean | cdktf.IResolvable) {
    this._copyingConfig = value;
  }
  public resetCopyingConfig() {
    this._copyingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyingConfigInput() {
    return this._copyingConfig;
  }

  // force_push_template - computed: false, optional: true, required: false
  private _forcePushTemplate?: boolean | cdktf.IResolvable; 
  public get forcePushTemplate() {
    return this.getBooleanAttribute('force_push_template');
  }
  public set forcePushTemplate(value: boolean | cdktf.IResolvable) {
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
  private _isComposite?: boolean | cdktf.IResolvable; 
  public get isComposite() {
    return this.getBooleanAttribute('is_composite');
  }
  public set isComposite(value: boolean | cdktf.IResolvable) {
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

  // target_info - computed: false, optional: false, required: true
  private _targetInfo = new DeployTemplateMemberTemplateDeploymentInfoTargetInfoList(this, "target_info", true);
  public get targetInfo() {
    return this._targetInfo;
  }
  public putTargetInfo(value: DeployTemplateMemberTemplateDeploymentInfoTargetInfo[] | cdktf.IResolvable) {
    this._targetInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInfoInput() {
    return this._targetInfo.internalValue;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class DeployTemplateMemberTemplateDeploymentInfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplateMemberTemplateDeploymentInfo[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplateMemberTemplateDeploymentInfoOutputReference {
    return new DeployTemplateMemberTemplateDeploymentInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateTargetInfoResourceParams {
  /**
  * Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#scope DeployTemplate#scope}
  */
  readonly scope?: string;
  /**
  * Target type of device
  *   - Choices: `MANAGED_DEVICE_IP`, `MANAGED_DEVICE_UUID`, `PRE_PROVISIONED_SERIAL`, `PRE_PROVISIONED_MAC`, `DEFAULT`, `MANAGED_DEVICE_HOSTNAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#type DeployTemplate#type}
  */
  readonly type?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#value DeployTemplate#value}
  */
  readonly value?: string;
}

export function deployTemplateTargetInfoResourceParamsToTerraform(struct?: DeployTemplateTargetInfoResourceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deployTemplateTargetInfoResourceParamsToHclTerraform(struct?: DeployTemplateTargetInfoResourceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DeployTemplateTargetInfoResourceParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateTargetInfoResourceParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeployTemplateTargetInfoResourceParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

export class DeployTemplateTargetInfoResourceParamsList extends cdktf.ComplexList {
  public internalValue? : DeployTemplateTargetInfoResourceParams[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplateTargetInfoResourceParamsOutputReference {
    return new DeployTemplateTargetInfoResourceParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeployTemplateTargetInfo {
  /**
  * Hostname of device is required if targetType is MANAGED_DEVICE_HOSTNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#host_name DeployTemplate#host_name}
  */
  readonly hostName?: string;
  /**
  * ID of device is required if `type` is MANAGED_DEVICE_UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#id DeployTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template params/values to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#params DeployTemplate#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Flag to indicate whether the template should be redeployed. If set to `true`, template will be redeployed on every Terraform apply
  *   - Choices: `ALWAYS`, `ON_CHANGE`, `NEVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#redeploy DeployTemplate#redeploy}
  */
  readonly redeploy?: string;
  /**
  * Resource params to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#resource_params DeployTemplate#resource_params}
  */
  readonly resourceParams?: DeployTemplateTargetInfoResourceParams[] | cdktf.IResolvable;
  /**
  * Target type of device
  *   - Choices: `MANAGED_DEVICE_IP`, `MANAGED_DEVICE_UUID`, `PRE_PROVISIONED_SERIAL`, `PRE_PROVISIONED_MAC`, `DEFAULT`, `MANAGED_DEVICE_HOSTNAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#type DeployTemplate#type}
  */
  readonly type: string;
  /**
  * Versioned template ID to be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#versioned_template_id DeployTemplate#versioned_template_id}
  */
  readonly versionedTemplateId?: string;
}

export function deployTemplateTargetInfoToTerraform(struct?: DeployTemplateTargetInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    id: cdktf.stringToTerraform(struct!.id),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    redeploy: cdktf.stringToTerraform(struct!.redeploy),
    resource_params: cdktf.listMapper(deployTemplateTargetInfoResourceParamsToTerraform, false)(struct!.resourceParams),
    type: cdktf.stringToTerraform(struct!.type),
    versioned_template_id: cdktf.stringToTerraform(struct!.versionedTemplateId),
  }
}


export function deployTemplateTargetInfoToHclTerraform(struct?: DeployTemplateTargetInfo | cdktf.IResolvable): any {
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
    redeploy: {
      value: cdktf.stringToHclTerraform(struct!.redeploy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_params: {
      value: cdktf.listMapperHcl(deployTemplateTargetInfoResourceParamsToHclTerraform, false)(struct!.resourceParams),
      isBlock: true,
      type: "list",
      storageClassType: "DeployTemplateTargetInfoResourceParamsList",
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

export class DeployTemplateTargetInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeployTemplateTargetInfo | cdktf.IResolvable | undefined {
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
    if (this._redeploy !== undefined) {
      hasAnyValues = true;
      internalValueResult.redeploy = this._redeploy;
    }
    if (this._resourceParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceParams = this._resourceParams?.internalValue;
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

  public set internalValue(value: DeployTemplateTargetInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._id = undefined;
      this._params = undefined;
      this._redeploy = undefined;
      this._resourceParams.internalValue = undefined;
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
      this._redeploy = value.redeploy;
      this._resourceParams.internalValue = value.resourceParams;
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

  // redeploy - computed: false, optional: true, required: false
  private _redeploy?: string; 
  public get redeploy() {
    return this.getStringAttribute('redeploy');
  }
  public set redeploy(value: string) {
    this._redeploy = value;
  }
  public resetRedeploy() {
    this._redeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeployInput() {
    return this._redeploy;
  }

  // resource_params - computed: false, optional: true, required: false
  private _resourceParams = new DeployTemplateTargetInfoResourceParamsList(this, "resource_params", false);
  public get resourceParams() {
    return this._resourceParams;
  }
  public putResourceParams(value: DeployTemplateTargetInfoResourceParams[] | cdktf.IResolvable) {
    this._resourceParams.internalValue = value;
  }
  public resetResourceParams() {
    this._resourceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceParamsInput() {
    return this._resourceParams.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
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

export class DeployTemplateTargetInfoList extends cdktf.ComplexList {
  public internalValue? : DeployTemplateTargetInfo[] | cdktf.IResolvable

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
  public get(index: number): DeployTemplateTargetInfoOutputReference {
    return new DeployTemplateTargetInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template catalystcenter_deploy_template}
*/
export class DeployTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_deploy_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployTemplate to import
  * @param importFromId The id of the existing DeployTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_deploy_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/deploy_template catalystcenter_deploy_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DeployTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_deploy_template',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._copyingConfig = config.copyingConfig;
    this._forcePushTemplate = config.forcePushTemplate;
    this._isComposite = config.isComposite;
    this._mainTemplateId = config.mainTemplateId;
    this._memberTemplateDeploymentInfo.internalValue = config.memberTemplateDeploymentInfo;
    this._redeploy = config.redeploy;
    this._targetInfo.internalValue = config.targetInfo;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copying_config - computed: false, optional: true, required: false
  private _copyingConfig?: boolean | cdktf.IResolvable; 
  public get copyingConfig() {
    return this.getBooleanAttribute('copying_config');
  }
  public set copyingConfig(value: boolean | cdktf.IResolvable) {
    this._copyingConfig = value;
  }
  public resetCopyingConfig() {
    this._copyingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyingConfigInput() {
    return this._copyingConfig;
  }

  // force_push_template - computed: false, optional: true, required: false
  private _forcePushTemplate?: boolean | cdktf.IResolvable; 
  public get forcePushTemplate() {
    return this.getBooleanAttribute('force_push_template');
  }
  public set forcePushTemplate(value: boolean | cdktf.IResolvable) {
    this._forcePushTemplate = value;
  }
  public resetForcePushTemplate() {
    this._forcePushTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePushTemplateInput() {
    return this._forcePushTemplate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_composite - computed: false, optional: true, required: false
  private _isComposite?: boolean | cdktf.IResolvable; 
  public get isComposite() {
    return this.getBooleanAttribute('is_composite');
  }
  public set isComposite(value: boolean | cdktf.IResolvable) {
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
  private _memberTemplateDeploymentInfo = new DeployTemplateMemberTemplateDeploymentInfoList(this, "member_template_deployment_info", false);
  public get memberTemplateDeploymentInfo() {
    return this._memberTemplateDeploymentInfo;
  }
  public putMemberTemplateDeploymentInfo(value: DeployTemplateMemberTemplateDeploymentInfo[] | cdktf.IResolvable) {
    this._memberTemplateDeploymentInfo.internalValue = value;
  }
  public resetMemberTemplateDeploymentInfo() {
    this._memberTemplateDeploymentInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTemplateDeploymentInfoInput() {
    return this._memberTemplateDeploymentInfo.internalValue;
  }

  // redeploy - computed: false, optional: true, required: false
  private _redeploy?: string; 
  public get redeploy() {
    return this.getStringAttribute('redeploy');
  }
  public set redeploy(value: string) {
    this._redeploy = value;
  }
  public resetRedeploy() {
    this._redeploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redeployInput() {
    return this._redeploy;
  }

  // target_info - computed: false, optional: false, required: true
  private _targetInfo = new DeployTemplateTargetInfoList(this, "target_info", true);
  public get targetInfo() {
    return this._targetInfo;
  }
  public putTargetInfo(value: DeployTemplateTargetInfo[] | cdktf.IResolvable) {
    this._targetInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInfoInput() {
    return this._targetInfo.internalValue;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copying_config: cdktf.booleanToTerraform(this._copyingConfig),
      force_push_template: cdktf.booleanToTerraform(this._forcePushTemplate),
      is_composite: cdktf.booleanToTerraform(this._isComposite),
      main_template_id: cdktf.stringToTerraform(this._mainTemplateId),
      member_template_deployment_info: cdktf.listMapper(deployTemplateMemberTemplateDeploymentInfoToTerraform, false)(this._memberTemplateDeploymentInfo.internalValue),
      redeploy: cdktf.stringToTerraform(this._redeploy),
      target_info: cdktf.listMapper(deployTemplateTargetInfoToTerraform, false)(this._targetInfo.internalValue),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copying_config: {
        value: cdktf.booleanToHclTerraform(this._copyingConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_push_template: {
        value: cdktf.booleanToHclTerraform(this._forcePushTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_composite: {
        value: cdktf.booleanToHclTerraform(this._isComposite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      main_template_id: {
        value: cdktf.stringToHclTerraform(this._mainTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_template_deployment_info: {
        value: cdktf.listMapperHcl(deployTemplateMemberTemplateDeploymentInfoToHclTerraform, false)(this._memberTemplateDeploymentInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeployTemplateMemberTemplateDeploymentInfoList",
      },
      redeploy: {
        value: cdktf.stringToHclTerraform(this._redeploy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_info: {
        value: cdktf.listMapperHcl(deployTemplateTargetInfoToHclTerraform, false)(this._targetInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeployTemplateTargetInfoList",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
