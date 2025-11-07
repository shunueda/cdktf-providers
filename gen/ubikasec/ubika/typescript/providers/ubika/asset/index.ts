// https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#metadata Asset#metadata}
  */
  readonly metadata: AssetMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#spec Asset#spec}
  */
  readonly spec: AssetSpec;
}
export interface AssetMetadata {
  /**
  * Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#name Asset#name}
  */
  readonly name: string;
  /**
  * Namespace of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#namespace Asset#namespace}
  */
  readonly namespace: string;
}

export function assetMetadataToTerraform(struct?: AssetMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function assetMetadataToHclTerraform(struct?: AssetMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getNumberAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}
export interface AssetSpecApiModule {
  /**
  * OpenAPI resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#openapi Asset#openapi}
  */
  readonly openapi: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#security_mode Asset#security_mode}
  */
  readonly securityMode?: string;
}

export function assetSpecApiModuleToTerraform(struct?: AssetSpecApiModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    openapi: cdktf.stringToTerraform(struct!.openapi),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
  }
}


export function assetSpecApiModuleToHclTerraform(struct?: AssetSpecApiModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    openapi: {
      value: cdktf.stringToHclTerraform(struct!.openapi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecApiModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecApiModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openapi !== undefined) {
      hasAnyValues = true;
      internalValueResult.openapi = this._openapi;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecApiModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openapi = undefined;
      this._securityMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openapi = value.openapi;
      this._securityMode = value.securityMode;
    }
  }

  // openapi - computed: false, optional: false, required: true
  private _openapi?: string; 
  public get openapi() {
    return this.getStringAttribute('openapi');
  }
  public set openapi(value: string) {
    this._openapi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiInput() {
    return this._openapi;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }
}
export interface AssetSpecApplicationModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#custom_icx_configuration Asset#custom_icx_configuration}
  */
  readonly customIcxConfiguration?: string;
  /**
  * Exception profile (deprecated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#exception_profile Asset#exception_profile}
  */
  readonly exceptionProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#security_mode Asset#security_mode}
  */
  readonly securityMode?: string;
}

export function assetSpecApplicationModuleToTerraform(struct?: AssetSpecApplicationModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_icx_configuration: cdktf.stringToTerraform(struct!.customIcxConfiguration),
    exception_profile: cdktf.stringToTerraform(struct!.exceptionProfile),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
  }
}


export function assetSpecApplicationModuleToHclTerraform(struct?: AssetSpecApplicationModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_icx_configuration: {
      value: cdktf.stringToHclTerraform(struct!.customIcxConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_profile: {
      value: cdktf.stringToHclTerraform(struct!.exceptionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecApplicationModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecApplicationModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customIcxConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIcxConfiguration = this._customIcxConfiguration;
    }
    if (this._exceptionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionProfile = this._exceptionProfile;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecApplicationModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customIcxConfiguration = undefined;
      this._exceptionProfile = undefined;
      this._securityMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customIcxConfiguration = value.customIcxConfiguration;
      this._exceptionProfile = value.exceptionProfile;
      this._securityMode = value.securityMode;
    }
  }

  // custom_icx_configuration - computed: true, optional: true, required: false
  private _customIcxConfiguration?: string; 
  public get customIcxConfiguration() {
    return this.getStringAttribute('custom_icx_configuration');
  }
  public set customIcxConfiguration(value: string) {
    this._customIcxConfiguration = value;
  }
  public resetCustomIcxConfiguration() {
    this._customIcxConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIcxConfigurationInput() {
    return this._customIcxConfiguration;
  }

  // exception_profile - computed: true, optional: true, required: false
  private _exceptionProfile?: string; 
  public get exceptionProfile() {
    return this.getStringAttribute('exception_profile');
  }
  public set exceptionProfile(value: string) {
    this._exceptionProfile = value;
  }
  public resetExceptionProfile() {
    this._exceptionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionProfileInput() {
    return this._exceptionProfile;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }
}
export interface AssetSpecCustomWkfModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#workflow Asset#workflow}
  */
  readonly workflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#workflow_params Asset#workflow_params}
  */
  readonly workflowParams?: string[];
}

export function assetSpecCustomWkfModuleToTerraform(struct?: AssetSpecCustomWkfModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workflow: cdktf.stringToTerraform(struct!.workflow),
    workflow_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.workflowParams),
  }
}


export function assetSpecCustomWkfModuleToHclTerraform(struct?: AssetSpecCustomWkfModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workflow: {
      value: cdktf.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.workflowParams),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecCustomWkfModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecCustomWkfModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._workflowParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowParams = this._workflowParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecCustomWkfModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workflow = undefined;
      this._workflowParams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workflow = value.workflow;
      this._workflowParams = value.workflowParams;
    }
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // workflow_params - computed: false, optional: true, required: false
  private _workflowParams?: string[]; 
  public get workflowParams() {
    return cdktf.Fn.tolist(this.getListAttribute('workflow_params'));
  }
  public set workflowParams(value: string[]) {
    this._workflowParams = value;
  }
  public resetWorkflowParams() {
    this._workflowParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowParamsInput() {
    return this._workflowParams;
  }
}
export interface AssetSpecGeoIpModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#countries Asset#countries}
  */
  readonly countries: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#mode Asset#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#security_mode Asset#security_mode}
  */
  readonly securityMode?: string;
}

export function assetSpecGeoIpModuleToTerraform(struct?: AssetSpecGeoIpModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    mode: cdktf.stringToTerraform(struct!.mode),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
  }
}


export function assetSpecGeoIpModuleToHclTerraform(struct?: AssetSpecGeoIpModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecGeoIpModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecGeoIpModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecGeoIpModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._mode = undefined;
      this._securityMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._mode = value.mode;
      this._securityMode = value.securityMode;
    }
  }

  // countries - computed: false, optional: false, required: true
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }
}
export interface AssetSpecIpBlacklistModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#ip_blacklist Asset#ip_blacklist}
  */
  readonly ipBlacklist: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#security_mode Asset#security_mode}
  */
  readonly securityMode?: string;
}

export function assetSpecIpBlacklistModuleToTerraform(struct?: AssetSpecIpBlacklistModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blacklist: cdktf.stringToTerraform(struct!.ipBlacklist),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
  }
}


export function assetSpecIpBlacklistModuleToHclTerraform(struct?: AssetSpecIpBlacklistModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.ipBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecIpBlacklistModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecIpBlacklistModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlacklist = this._ipBlacklist;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecIpBlacklistModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlacklist = undefined;
      this._securityMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlacklist = value.ipBlacklist;
      this._securityMode = value.securityMode;
    }
  }

  // ip_blacklist - computed: false, optional: false, required: true
  private _ipBlacklist?: string; 
  public get ipBlacklist() {
    return this.getStringAttribute('ip_blacklist');
  }
  public set ipBlacklist(value: string) {
    this._ipBlacklist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlacklistInput() {
    return this._ipBlacklist;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }
}
export interface AssetSpecIpReputationModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#security_mode Asset#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#threats Asset#threats}
  */
  readonly threats: string[];
}

export function assetSpecIpReputationModuleToTerraform(struct?: AssetSpecIpReputationModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    threats: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.threats),
  }
}


export function assetSpecIpReputationModuleToHclTerraform(struct?: AssetSpecIpReputationModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threats: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.threats),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecIpReputationModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecIpReputationModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._threats !== undefined) {
      hasAnyValues = true;
      internalValueResult.threats = this._threats;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecIpReputationModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityMode = undefined;
      this._threats = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityMode = value.securityMode;
      this._threats = value.threats;
    }
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // threats - computed: false, optional: false, required: true
  private _threats?: string[]; 
  public get threats() {
    return cdktf.Fn.tolist(this.getListAttribute('threats'));
  }
  public set threats(value: string[]) {
    this._threats = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats;
  }
}
export interface AssetSpecWebSocketModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#security_mode Asset#security_mode}
  */
  readonly securityMode?: string;
}

export function assetSpecWebSocketModuleToTerraform(struct?: AssetSpecWebSocketModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
  }
}


export function assetSpecWebSocketModuleToHclTerraform(struct?: AssetSpecWebSocketModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecWebSocketModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpecWebSocketModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpecWebSocketModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityMode = value.securityMode;
    }
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }
}
export interface AssetSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#api_module Asset#api_module}
  */
  readonly apiModule?: AssetSpecApiModule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#application_module Asset#application_module}
  */
  readonly applicationModule?: AssetSpecApplicationModule;
  /**
  * Check backend certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#backend_certificate_check Asset#backend_certificate_check}
  */
  readonly backendCertificateCheck?: string;
  /**
  * Backend URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#backend_url Asset#backend_url}
  */
  readonly backendUrl: string;
  /**
  * Blocking page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#blocking_page Asset#blocking_page}
  */
  readonly blockingPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#custom_wkf_module Asset#custom_wkf_module}
  */
  readonly customWkfModule?: AssetSpecCustomWkfModule;
  /**
  * Deployment type (SAAS or SELF_HOSTED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#deployment_type Asset#deployment_type}
  */
  readonly deploymentType: string;
  /**
  * Exception profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#exception_profile Asset#exception_profile}
  */
  readonly exceptionProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#geo_ip_module Asset#geo_ip_module}
  */
  readonly geoIpModule?: AssetSpecGeoIpModule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#hostnames Asset#hostnames}
  */
  readonly hostnames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#ip_blacklist_module Asset#ip_blacklist_module}
  */
  readonly ipBlacklistModule?: AssetSpecIpBlacklistModule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#ip_reputation_module Asset#ip_reputation_module}
  */
  readonly ipReputationModule?: AssetSpecIpReputationModule;
  /**
  * Enable maintenance page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#maintenance_enabled Asset#maintenance_enabled}
  */
  readonly maintenanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maintenance page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#maintenance_page Asset#maintenance_page}
  */
  readonly maintenancePage?: string;
  /**
  * TLS Configuration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#tls_configuration Asset#tls_configuration}
  */
  readonly tlsConfiguration?: string;
  /**
  * TLS Material name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#tls_material Asset#tls_material}
  */
  readonly tlsMaterial?: string;
  /**
  * TLS mode (auto or custom)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#tls_mode Asset#tls_mode}
  */
  readonly tlsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#trusted_ip_address_header Asset#trusted_ip_address_header}
  */
  readonly trustedIpAddressHeader?: string;
  /**
  * Unavailable page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#unavailable_page Asset#unavailable_page}
  */
  readonly unavailablePage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#web_socket_module Asset#web_socket_module}
  */
  readonly webSocketModule?: AssetSpecWebSocketModule;
}

export function assetSpecToTerraform(struct?: AssetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_module: assetSpecApiModuleToTerraform(struct!.apiModule),
    application_module: assetSpecApplicationModuleToTerraform(struct!.applicationModule),
    backend_certificate_check: cdktf.stringToTerraform(struct!.backendCertificateCheck),
    backend_url: cdktf.stringToTerraform(struct!.backendUrl),
    blocking_page: cdktf.stringToTerraform(struct!.blockingPage),
    custom_wkf_module: assetSpecCustomWkfModuleToTerraform(struct!.customWkfModule),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    exception_profile: cdktf.stringToTerraform(struct!.exceptionProfile),
    geo_ip_module: assetSpecGeoIpModuleToTerraform(struct!.geoIpModule),
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip_blacklist_module: assetSpecIpBlacklistModuleToTerraform(struct!.ipBlacklistModule),
    ip_reputation_module: assetSpecIpReputationModuleToTerraform(struct!.ipReputationModule),
    maintenance_enabled: cdktf.booleanToTerraform(struct!.maintenanceEnabled),
    maintenance_page: cdktf.stringToTerraform(struct!.maintenancePage),
    tls_configuration: cdktf.stringToTerraform(struct!.tlsConfiguration),
    tls_material: cdktf.stringToTerraform(struct!.tlsMaterial),
    tls_mode: cdktf.stringToTerraform(struct!.tlsMode),
    trusted_ip_address_header: cdktf.stringToTerraform(struct!.trustedIpAddressHeader),
    unavailable_page: cdktf.stringToTerraform(struct!.unavailablePage),
    web_socket_module: assetSpecWebSocketModuleToTerraform(struct!.webSocketModule),
  }
}


export function assetSpecToHclTerraform(struct?: AssetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_module: {
      value: assetSpecApiModuleToHclTerraform(struct!.apiModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecApiModule",
    },
    application_module: {
      value: assetSpecApplicationModuleToHclTerraform(struct!.applicationModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecApplicationModule",
    },
    backend_certificate_check: {
      value: cdktf.stringToHclTerraform(struct!.backendCertificateCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_url: {
      value: cdktf.stringToHclTerraform(struct!.backendUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocking_page: {
      value: cdktf.stringToHclTerraform(struct!.blockingPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_wkf_module: {
      value: assetSpecCustomWkfModuleToHclTerraform(struct!.customWkfModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecCustomWkfModule",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_profile: {
      value: cdktf.stringToHclTerraform(struct!.exceptionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_ip_module: {
      value: assetSpecGeoIpModuleToHclTerraform(struct!.geoIpModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecGeoIpModule",
    },
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_blacklist_module: {
      value: assetSpecIpBlacklistModuleToHclTerraform(struct!.ipBlacklistModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecIpBlacklistModule",
    },
    ip_reputation_module: {
      value: assetSpecIpReputationModuleToHclTerraform(struct!.ipReputationModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecIpReputationModule",
    },
    maintenance_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.maintenanceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance_page: {
      value: cdktf.stringToHclTerraform(struct!.maintenancePage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_configuration: {
      value: cdktf.stringToHclTerraform(struct!.tlsConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_material: {
      value: cdktf.stringToHclTerraform(struct!.tlsMaterial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ip_address_header: {
      value: cdktf.stringToHclTerraform(struct!.trustedIpAddressHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unavailable_page: {
      value: cdktf.stringToHclTerraform(struct!.unavailablePage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_socket_module: {
      value: assetSpecWebSocketModuleToHclTerraform(struct!.webSocketModule),
      isBlock: true,
      type: "struct",
      storageClassType: "AssetSpecWebSocketModule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiModule = this._apiModule?.internalValue;
    }
    if (this._applicationModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationModule = this._applicationModule?.internalValue;
    }
    if (this._backendCertificateCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendCertificateCheck = this._backendCertificateCheck;
    }
    if (this._backendUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendUrl = this._backendUrl;
    }
    if (this._blockingPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingPage = this._blockingPage;
    }
    if (this._customWkfModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customWkfModule = this._customWkfModule?.internalValue;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._exceptionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionProfile = this._exceptionProfile;
    }
    if (this._geoIpModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpModule = this._geoIpModule?.internalValue;
    }
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ipBlacklistModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlacklistModule = this._ipBlacklistModule?.internalValue;
    }
    if (this._ipReputationModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationModule = this._ipReputationModule?.internalValue;
    }
    if (this._maintenanceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceEnabled = this._maintenanceEnabled;
    }
    if (this._maintenancePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenancePage = this._maintenancePage;
    }
    if (this._tlsConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfiguration = this._tlsConfiguration;
    }
    if (this._tlsMaterial !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMaterial = this._tlsMaterial;
    }
    if (this._tlsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode;
    }
    if (this._trustedIpAddressHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedIpAddressHeader = this._trustedIpAddressHeader;
    }
    if (this._unavailablePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailablePage = this._unavailablePage;
    }
    if (this._webSocketModule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSocketModule = this._webSocketModule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiModule.internalValue = undefined;
      this._applicationModule.internalValue = undefined;
      this._backendCertificateCheck = undefined;
      this._backendUrl = undefined;
      this._blockingPage = undefined;
      this._customWkfModule.internalValue = undefined;
      this._deploymentType = undefined;
      this._exceptionProfile = undefined;
      this._geoIpModule.internalValue = undefined;
      this._hostnames = undefined;
      this._ipBlacklistModule.internalValue = undefined;
      this._ipReputationModule.internalValue = undefined;
      this._maintenanceEnabled = undefined;
      this._maintenancePage = undefined;
      this._tlsConfiguration = undefined;
      this._tlsMaterial = undefined;
      this._tlsMode = undefined;
      this._trustedIpAddressHeader = undefined;
      this._unavailablePage = undefined;
      this._webSocketModule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiModule.internalValue = value.apiModule;
      this._applicationModule.internalValue = value.applicationModule;
      this._backendCertificateCheck = value.backendCertificateCheck;
      this._backendUrl = value.backendUrl;
      this._blockingPage = value.blockingPage;
      this._customWkfModule.internalValue = value.customWkfModule;
      this._deploymentType = value.deploymentType;
      this._exceptionProfile = value.exceptionProfile;
      this._geoIpModule.internalValue = value.geoIpModule;
      this._hostnames = value.hostnames;
      this._ipBlacklistModule.internalValue = value.ipBlacklistModule;
      this._ipReputationModule.internalValue = value.ipReputationModule;
      this._maintenanceEnabled = value.maintenanceEnabled;
      this._maintenancePage = value.maintenancePage;
      this._tlsConfiguration = value.tlsConfiguration;
      this._tlsMaterial = value.tlsMaterial;
      this._tlsMode = value.tlsMode;
      this._trustedIpAddressHeader = value.trustedIpAddressHeader;
      this._unavailablePage = value.unavailablePage;
      this._webSocketModule.internalValue = value.webSocketModule;
    }
  }

  // api_module - computed: false, optional: true, required: false
  private _apiModule = new AssetSpecApiModuleOutputReference(this, "api_module");
  public get apiModule() {
    return this._apiModule;
  }
  public putApiModule(value: AssetSpecApiModule) {
    this._apiModule.internalValue = value;
  }
  public resetApiModule() {
    this._apiModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiModuleInput() {
    return this._apiModule.internalValue;
  }

  // application_module - computed: false, optional: true, required: false
  private _applicationModule = new AssetSpecApplicationModuleOutputReference(this, "application_module");
  public get applicationModule() {
    return this._applicationModule;
  }
  public putApplicationModule(value: AssetSpecApplicationModule) {
    this._applicationModule.internalValue = value;
  }
  public resetApplicationModule() {
    this._applicationModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationModuleInput() {
    return this._applicationModule.internalValue;
  }

  // backend_certificate_check - computed: true, optional: true, required: false
  private _backendCertificateCheck?: string; 
  public get backendCertificateCheck() {
    return this.getStringAttribute('backend_certificate_check');
  }
  public set backendCertificateCheck(value: string) {
    this._backendCertificateCheck = value;
  }
  public resetBackendCertificateCheck() {
    this._backendCertificateCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendCertificateCheckInput() {
    return this._backendCertificateCheck;
  }

  // backend_url - computed: false, optional: false, required: true
  private _backendUrl?: string; 
  public get backendUrl() {
    return this.getStringAttribute('backend_url');
  }
  public set backendUrl(value: string) {
    this._backendUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendUrlInput() {
    return this._backendUrl;
  }

  // blocking_page - computed: true, optional: true, required: false
  private _blockingPage?: string; 
  public get blockingPage() {
    return this.getStringAttribute('blocking_page');
  }
  public set blockingPage(value: string) {
    this._blockingPage = value;
  }
  public resetBlockingPage() {
    this._blockingPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingPageInput() {
    return this._blockingPage;
  }

  // custom_wkf_module - computed: false, optional: true, required: false
  private _customWkfModule = new AssetSpecCustomWkfModuleOutputReference(this, "custom_wkf_module");
  public get customWkfModule() {
    return this._customWkfModule;
  }
  public putCustomWkfModule(value: AssetSpecCustomWkfModule) {
    this._customWkfModule.internalValue = value;
  }
  public resetCustomWkfModule() {
    this._customWkfModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWkfModuleInput() {
    return this._customWkfModule.internalValue;
  }

  // deployment_type - computed: false, optional: false, required: true
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // exception_profile - computed: true, optional: true, required: false
  private _exceptionProfile?: string; 
  public get exceptionProfile() {
    return this.getStringAttribute('exception_profile');
  }
  public set exceptionProfile(value: string) {
    this._exceptionProfile = value;
  }
  public resetExceptionProfile() {
    this._exceptionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionProfileInput() {
    return this._exceptionProfile;
  }

  // geo_ip_module - computed: false, optional: true, required: false
  private _geoIpModule = new AssetSpecGeoIpModuleOutputReference(this, "geo_ip_module");
  public get geoIpModule() {
    return this._geoIpModule;
  }
  public putGeoIpModule(value: AssetSpecGeoIpModule) {
    this._geoIpModule.internalValue = value;
  }
  public resetGeoIpModule() {
    this._geoIpModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpModuleInput() {
    return this._geoIpModule.internalValue;
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('hostnames'));
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip_blacklist_module - computed: false, optional: true, required: false
  private _ipBlacklistModule = new AssetSpecIpBlacklistModuleOutputReference(this, "ip_blacklist_module");
  public get ipBlacklistModule() {
    return this._ipBlacklistModule;
  }
  public putIpBlacklistModule(value: AssetSpecIpBlacklistModule) {
    this._ipBlacklistModule.internalValue = value;
  }
  public resetIpBlacklistModule() {
    this._ipBlacklistModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlacklistModuleInput() {
    return this._ipBlacklistModule.internalValue;
  }

  // ip_reputation_module - computed: false, optional: true, required: false
  private _ipReputationModule = new AssetSpecIpReputationModuleOutputReference(this, "ip_reputation_module");
  public get ipReputationModule() {
    return this._ipReputationModule;
  }
  public putIpReputationModule(value: AssetSpecIpReputationModule) {
    this._ipReputationModule.internalValue = value;
  }
  public resetIpReputationModule() {
    this._ipReputationModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationModuleInput() {
    return this._ipReputationModule.internalValue;
  }

  // maintenance_enabled - computed: true, optional: true, required: false
  private _maintenanceEnabled?: boolean | cdktf.IResolvable; 
  public get maintenanceEnabled() {
    return this.getBooleanAttribute('maintenance_enabled');
  }
  public set maintenanceEnabled(value: boolean | cdktf.IResolvable) {
    this._maintenanceEnabled = value;
  }
  public resetMaintenanceEnabled() {
    this._maintenanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceEnabledInput() {
    return this._maintenanceEnabled;
  }

  // maintenance_page - computed: true, optional: true, required: false
  private _maintenancePage?: string; 
  public get maintenancePage() {
    return this.getStringAttribute('maintenance_page');
  }
  public set maintenancePage(value: string) {
    this._maintenancePage = value;
  }
  public resetMaintenancePage() {
    this._maintenancePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePageInput() {
    return this._maintenancePage;
  }

  // tls_configuration - computed: true, optional: true, required: false
  private _tlsConfiguration?: string; 
  public get tlsConfiguration() {
    return this.getStringAttribute('tls_configuration');
  }
  public set tlsConfiguration(value: string) {
    this._tlsConfiguration = value;
  }
  public resetTlsConfiguration() {
    this._tlsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigurationInput() {
    return this._tlsConfiguration;
  }

  // tls_material - computed: true, optional: true, required: false
  private _tlsMaterial?: string; 
  public get tlsMaterial() {
    return this.getStringAttribute('tls_material');
  }
  public set tlsMaterial(value: string) {
    this._tlsMaterial = value;
  }
  public resetTlsMaterial() {
    this._tlsMaterial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMaterialInput() {
    return this._tlsMaterial;
  }

  // tls_mode - computed: true, optional: true, required: false
  private _tlsMode?: string; 
  public get tlsMode() {
    return this.getStringAttribute('tls_mode');
  }
  public set tlsMode(value: string) {
    this._tlsMode = value;
  }
  public resetTlsMode() {
    this._tlsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode;
  }

  // trusted_ip_address_header - computed: true, optional: true, required: false
  private _trustedIpAddressHeader?: string; 
  public get trustedIpAddressHeader() {
    return this.getStringAttribute('trusted_ip_address_header');
  }
  public set trustedIpAddressHeader(value: string) {
    this._trustedIpAddressHeader = value;
  }
  public resetTrustedIpAddressHeader() {
    this._trustedIpAddressHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIpAddressHeaderInput() {
    return this._trustedIpAddressHeader;
  }

  // unavailable_page - computed: true, optional: true, required: false
  private _unavailablePage?: string; 
  public get unavailablePage() {
    return this.getStringAttribute('unavailable_page');
  }
  public set unavailablePage(value: string) {
    this._unavailablePage = value;
  }
  public resetUnavailablePage() {
    this._unavailablePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailablePageInput() {
    return this._unavailablePage;
  }

  // web_socket_module - computed: false, optional: true, required: false
  private _webSocketModule = new AssetSpecWebSocketModuleOutputReference(this, "web_socket_module");
  public get webSocketModule() {
    return this._webSocketModule;
  }
  public putWebSocketModule(value: AssetSpecWebSocketModule) {
    this._webSocketModule.internalValue = value;
  }
  public resetWebSocketModule() {
    this._webSocketModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketModuleInput() {
    return this._webSocketModule.internalValue;
  }
}
export interface AssetStatusState {
}

export function assetStatusStateToTerraform(struct?: AssetStatusState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assetStatusStateToHclTerraform(struct?: AssetStatusState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssetStatusStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetStatusState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetStatusState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.getStringAttribute('backend');
  }

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getStringAttribute('dns');
  }

  // redirected_hostnames - computed: true, optional: false, required: false
  public get redirectedHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('redirected_hostnames'));
  }

  // running_state - computed: true, optional: false, required: false
  public get runningState() {
    return this.getStringAttribute('running_state');
  }
}
export interface AssetStatusTls {
}

export function assetStatusTlsToTerraform(struct?: AssetStatusTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assetStatusTlsToHclTerraform(struct?: AssetStatusTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssetStatusTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetStatusTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetStatusTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begins_on - computed: true, optional: false, required: false
  public get beginsOn() {
    return this.getStringAttribute('begins_on');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface AssetStatus {
}

export function assetStatusToTerraform(struct?: AssetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assetStatusToHclTerraform(struct?: AssetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssetStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssetStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssetStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_address - computed: true, optional: false, required: false
  public get serviceAddress() {
    return this.getStringAttribute('service_address');
  }

  // state - computed: true, optional: false, required: false
  private _state = new AssetStatusStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new AssetStatusTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset ubika_asset}
*/
export class Asset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ubika_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Asset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Asset to import
  * @param importFromId The id of the existing Asset that should be imported. Refer to the {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Asset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ubika_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ubikasec/ubika/0.0.1/docs/resources/asset ubika_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssetConfig
  */
  public constructor(scope: Construct, id: string, config: AssetConfig) {
    super(scope, id, {
      terraformResourceType: 'ubika_asset',
      terraformGeneratorMetadata: {
        providerName: 'ubika',
        providerVersion: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new AssetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AssetMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AssetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AssetSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: true, optional: false, required: false
  private _status = new AssetStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: assetMetadataToTerraform(this._metadata.internalValue),
      spec: assetSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: assetMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssetMetadata",
      },
      spec: {
        value: assetSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssetSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
