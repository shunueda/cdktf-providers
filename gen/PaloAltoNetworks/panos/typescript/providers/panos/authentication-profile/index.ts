// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#allow_list AuthenticationProfile#allow_list}
  */
  readonly allowList?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#location AuthenticationProfile#location}
  */
  readonly location: AuthenticationProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#lockout AuthenticationProfile#lockout}
  */
  readonly lockout?: AuthenticationProfileLockout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#method AuthenticationProfile#method}
  */
  readonly method?: AuthenticationProfileMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#multi_factor_auth AuthenticationProfile#multi_factor_auth}
  */
  readonly multiFactorAuth?: AuthenticationProfileMultiFactorAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#name AuthenticationProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#single_sign_on AuthenticationProfile#single_sign_on}
  */
  readonly singleSignOn?: AuthenticationProfileSingleSignOn;
  /**
  * Domain name(Not for SAML) to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#user_domain AuthenticationProfile#user_domain}
  */
  readonly userDomain?: string;
  /**
  * Username modifier(Not for SAML) to handle user domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#username_modifier AuthenticationProfile#username_modifier}
  */
  readonly usernameModifier?: string;
}
export interface AuthenticationProfileLocationPanorama {
}

export function authenticationProfileLocationPanoramaToTerraform(struct?: AuthenticationProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationProfileLocationPanoramaToHclTerraform(struct?: AuthenticationProfileLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationProfileLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocationPanorama | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AuthenticationProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#name AuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#panorama_device AuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function authenticationProfileLocationTemplateToTerraform(struct?: AuthenticationProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function authenticationProfileLocationTemplateToHclTerraform(struct?: AuthenticationProfileLocationTemplate | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface AuthenticationProfileLocationTemplateStack {
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#name AuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#panorama_device AuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function authenticationProfileLocationTemplateStackToTerraform(struct?: AuthenticationProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function authenticationProfileLocationTemplateStackToHclTerraform(struct?: AuthenticationProfileLocationTemplateStack | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface AuthenticationProfileLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#ngfw_device AuthenticationProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#panorama_device AuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#template_stack AuthenticationProfile#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#vsys AuthenticationProfile#vsys}
  */
  readonly vsys?: string;
}

export function authenticationProfileLocationTemplateStackVsysToTerraform(struct?: AuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function authenticationProfileLocationTemplateStackVsysToHclTerraform(struct?: AuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface AuthenticationProfileLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#ngfw_device AuthenticationProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#panorama_device AuthenticationProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#template AuthenticationProfile#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#vsys AuthenticationProfile#vsys}
  */
  readonly vsys?: string;
}

export function authenticationProfileLocationTemplateVsysToTerraform(struct?: AuthenticationProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function authenticationProfileLocationTemplateVsysToHclTerraform(struct?: AuthenticationProfileLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface AuthenticationProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#name AuthenticationProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#ngfw_device AuthenticationProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function authenticationProfileLocationVsysToTerraform(struct?: AuthenticationProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function authenticationProfileLocationVsysToHclTerraform(struct?: AuthenticationProfileLocationVsys | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface AuthenticationProfileLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#panorama AuthenticationProfile#panorama}
  */
  readonly panorama?: AuthenticationProfileLocationPanorama;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#template AuthenticationProfile#template}
  */
  readonly template?: AuthenticationProfileLocationTemplate;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#template_stack AuthenticationProfile#template_stack}
  */
  readonly templateStack?: AuthenticationProfileLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#template_stack_vsys AuthenticationProfile#template_stack_vsys}
  */
  readonly templateStackVsys?: AuthenticationProfileLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#template_vsys AuthenticationProfile#template_vsys}
  */
  readonly templateVsys?: AuthenticationProfileLocationTemplateVsys;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#vsys AuthenticationProfile#vsys}
  */
  readonly vsys?: AuthenticationProfileLocationVsys;
}

export function authenticationProfileLocationToTerraform(struct?: AuthenticationProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: authenticationProfileLocationPanoramaToTerraform(struct!.panorama),
    template: authenticationProfileLocationTemplateToTerraform(struct!.template),
    template_stack: authenticationProfileLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: authenticationProfileLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: authenticationProfileLocationTemplateVsysToTerraform(struct!.templateVsys),
    vsys: authenticationProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function authenticationProfileLocationToHclTerraform(struct?: AuthenticationProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: authenticationProfileLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileLocationPanorama",
    },
    template: {
      value: authenticationProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileLocationTemplate",
    },
    template_stack: {
      value: authenticationProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileLocationTemplateStack",
    },
    template_stack_vsys: {
      value: authenticationProfileLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileLocationTemplateStackVsys",
    },
    template_vsys: {
      value: authenticationProfileLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileLocationTemplateVsys",
    },
    vsys: {
      value: authenticationProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
      this._vsys.internalValue = value.vsys;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new AuthenticationProfileLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: AuthenticationProfileLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new AuthenticationProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: AuthenticationProfileLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new AuthenticationProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: AuthenticationProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new AuthenticationProfileLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: AuthenticationProfileLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new AuthenticationProfileLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: AuthenticationProfileLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new AuthenticationProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: AuthenticationProfileLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}
export interface AuthenticationProfileLockout {
  /**
  * Number of failed login attempts to trigger lock-out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#failed_attempts AuthenticationProfile#failed_attempts}
  */
  readonly failedAttempts?: number;
  /**
  * Number of minutes to lock-out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#lockout_time AuthenticationProfile#lockout_time}
  */
  readonly lockoutTime?: number;
}

export function authenticationProfileLockoutToTerraform(struct?: AuthenticationProfileLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_attempts: cdktf.numberToTerraform(struct!.failedAttempts),
    lockout_time: cdktf.numberToTerraform(struct!.lockoutTime),
  }
}


export function authenticationProfileLockoutToHclTerraform(struct?: AuthenticationProfileLockout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_attempts: {
      value: cdktf.numberToHclTerraform(struct!.failedAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lockout_time: {
      value: cdktf.numberToHclTerraform(struct!.lockoutTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileLockoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileLockout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedAttempts = this._failedAttempts;
    }
    if (this._lockoutTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutTime = this._lockoutTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileLockout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failedAttempts = undefined;
      this._lockoutTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failedAttempts = value.failedAttempts;
      this._lockoutTime = value.lockoutTime;
    }
  }

  // failed_attempts - computed: false, optional: true, required: false
  private _failedAttempts?: number; 
  public get failedAttempts() {
    return this.getNumberAttribute('failed_attempts');
  }
  public set failedAttempts(value: number) {
    this._failedAttempts = value;
  }
  public resetFailedAttempts() {
    this._failedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAttemptsInput() {
    return this._failedAttempts;
  }

  // lockout_time - computed: true, optional: true, required: false
  private _lockoutTime?: number; 
  public get lockoutTime() {
    return this.getNumberAttribute('lockout_time');
  }
  public set lockoutTime(value: number) {
    this._lockoutTime = value;
  }
  public resetLockoutTime() {
    this._lockoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutTimeInput() {
    return this._lockoutTime;
  }
}
export interface AuthenticationProfileMethodCloudRegionTenantProfileMfa {
  /**
  * force multi-factor authentication in cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#force_mfa AuthenticationProfile#force_mfa}
  */
  readonly forceMfa?: string;
}

export function authenticationProfileMethodCloudRegionTenantProfileMfaToTerraform(struct?: AuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_mfa: cdktf.stringToTerraform(struct!.forceMfa),
  }
}


export function authenticationProfileMethodCloudRegionTenantProfileMfaToHclTerraform(struct?: AuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_mfa: {
      value: cdktf.stringToHclTerraform(struct!.forceMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodCloudRegionTenantProfileMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceMfa = this._forceMfa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodCloudRegionTenantProfileMfa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceMfa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceMfa = value.forceMfa;
    }
  }

  // force_mfa - computed: true, optional: true, required: false
  private _forceMfa?: string; 
  public get forceMfa() {
    return this.getStringAttribute('force_mfa');
  }
  public set forceMfa(value: string) {
    this._forceMfa = value;
  }
  public resetForceMfa() {
    this._forceMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMfaInput() {
    return this._forceMfa;
  }
}
export interface AuthenticationProfileMethodCloudRegionTenantProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#mfa AuthenticationProfile#mfa}
  */
  readonly mfa?: AuthenticationProfileMethodCloudRegionTenantProfileMfa;
  /**
  * CAS Profile id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#profile_id AuthenticationProfile#profile_id}
  */
  readonly profileId?: string;
}

export function authenticationProfileMethodCloudRegionTenantProfileToTerraform(struct?: AuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mfa: authenticationProfileMethodCloudRegionTenantProfileMfaToTerraform(struct!.mfa),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function authenticationProfileMethodCloudRegionTenantProfileToHclTerraform(struct?: AuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mfa: {
      value: authenticationProfileMethodCloudRegionTenantProfileMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodCloudRegionTenantProfileMfa",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodCloudRegionTenantProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodCloudRegionTenantProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mfa.internalValue = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mfa.internalValue = value.mfa;
      this._profileId = value.profileId;
    }
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new AuthenticationProfileMethodCloudRegionTenantProfileMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: AuthenticationProfileMethodCloudRegionTenantProfileMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}
export interface AuthenticationProfileMethodCloudRegionTenant {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#profile AuthenticationProfile#profile}
  */
  readonly profile?: AuthenticationProfileMethodCloudRegionTenantProfile;
  /**
  * Tenant id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#tenant_id AuthenticationProfile#tenant_id}
  */
  readonly tenantId?: string;
}

export function authenticationProfileMethodCloudRegionTenantToTerraform(struct?: AuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: authenticationProfileMethodCloudRegionTenantProfileToTerraform(struct!.profile),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function authenticationProfileMethodCloudRegionTenantToHclTerraform(struct?: AuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: authenticationProfileMethodCloudRegionTenantProfileToHclTerraform(struct!.profile),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodCloudRegionTenantProfile",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodCloudRegionTenantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodCloudRegionTenant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile.internalValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile.internalValue = value.profile;
      this._tenantId = value.tenantId;
    }
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new AuthenticationProfileMethodCloudRegionTenantProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: AuthenticationProfileMethodCloudRegionTenantProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AuthenticationProfileMethodCloudRegion {
  /**
  * Region Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#region_id AuthenticationProfile#region_id}
  */
  readonly regionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#tenant AuthenticationProfile#tenant}
  */
  readonly tenant?: AuthenticationProfileMethodCloudRegionTenant;
}

export function authenticationProfileMethodCloudRegionToTerraform(struct?: AuthenticationProfileMethodCloudRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_id: cdktf.stringToTerraform(struct!.regionId),
    tenant: authenticationProfileMethodCloudRegionTenantToTerraform(struct!.tenant),
  }
}


export function authenticationProfileMethodCloudRegionToHclTerraform(struct?: AuthenticationProfileMethodCloudRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: authenticationProfileMethodCloudRegionTenantToHclTerraform(struct!.tenant),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodCloudRegionTenant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodCloudRegionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodCloudRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    if (this._tenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodCloudRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionId = undefined;
      this._tenant.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionId = value.regionId;
      this._tenant.internalValue = value.tenant;
    }
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant = new AuthenticationProfileMethodCloudRegionTenantOutputReference(this, "tenant");
  public get tenant() {
    return this._tenant;
  }
  public putTenant(value: AuthenticationProfileMethodCloudRegionTenant) {
    this._tenant.internalValue = value;
  }
  public resetTenant() {
    this._tenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant.internalValue;
  }
}
export interface AuthenticationProfileMethodCloud {
  /**
  * clock skew between CAS service and device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#clock_skew AuthenticationProfile#clock_skew}
  */
  readonly clockSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#region AuthenticationProfile#region}
  */
  readonly region?: AuthenticationProfileMethodCloudRegion;
}

export function authenticationProfileMethodCloudToTerraform(struct?: AuthenticationProfileMethodCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clock_skew: cdktf.numberToTerraform(struct!.clockSkew),
    region: authenticationProfileMethodCloudRegionToTerraform(struct!.region),
  }
}


export function authenticationProfileMethodCloudToHclTerraform(struct?: AuthenticationProfileMethodCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clock_skew: {
      value: cdktf.numberToHclTerraform(struct!.clockSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: authenticationProfileMethodCloudRegionToHclTerraform(struct!.region),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodCloudRegion",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clockSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockSkew = this._clockSkew;
    }
    if (this._region?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clockSkew = undefined;
      this._region.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clockSkew = value.clockSkew;
      this._region.internalValue = value.region;
    }
  }

  // clock_skew - computed: true, optional: true, required: false
  private _clockSkew?: number; 
  public get clockSkew() {
    return this.getNumberAttribute('clock_skew');
  }
  public set clockSkew(value: number) {
    this._clockSkew = value;
  }
  public resetClockSkew() {
    this._clockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewInput() {
    return this._clockSkew;
  }

  // region - computed: false, optional: true, required: false
  private _region = new AuthenticationProfileMethodCloudRegionOutputReference(this, "region");
  public get region() {
    return this._region;
  }
  public putRegion(value: AuthenticationProfileMethodCloudRegion) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }
}
export interface AuthenticationProfileMethodKerberos {
  /**
  * Realm name to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#realm AuthenticationProfile#realm}
  */
  readonly realm?: string;
  /**
  * Kerberos server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodKerberosToTerraform(struct?: AuthenticationProfileMethodKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodKerberosToHclTerraform(struct?: AuthenticationProfileMethodKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realm = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realm = value.realm;
      this._serverProfile = value.serverProfile;
    }
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodLdap {
  /**
  * Default is samAccountName for Active Directory, uid for other directory servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#login_attribute AuthenticationProfile#login_attribute}
  */
  readonly loginAttribute?: string;
  /**
  * Avail for Active Directory, eDir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#passwd_exp_days AuthenticationProfile#passwd_exp_days}
  */
  readonly passwdExpDays?: number;
  /**
  * LDAP server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodLdapToTerraform(struct?: AuthenticationProfileMethodLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_attribute: cdktf.stringToTerraform(struct!.loginAttribute),
    passwd_exp_days: cdktf.numberToTerraform(struct!.passwdExpDays),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodLdapToHclTerraform(struct?: AuthenticationProfileMethodLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_attribute: {
      value: cdktf.stringToHclTerraform(struct!.loginAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwd_exp_days: {
      value: cdktf.numberToHclTerraform(struct!.passwdExpDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAttribute = this._loginAttribute;
    }
    if (this._passwdExpDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwdExpDays = this._passwdExpDays;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginAttribute = undefined;
      this._passwdExpDays = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginAttribute = value.loginAttribute;
      this._passwdExpDays = value.passwdExpDays;
      this._serverProfile = value.serverProfile;
    }
  }

  // login_attribute - computed: false, optional: true, required: false
  private _loginAttribute?: string; 
  public get loginAttribute() {
    return this.getStringAttribute('login_attribute');
  }
  public set loginAttribute(value: string) {
    this._loginAttribute = value;
  }
  public resetLoginAttribute() {
    this._loginAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAttributeInput() {
    return this._loginAttribute;
  }

  // passwd_exp_days - computed: true, optional: true, required: false
  private _passwdExpDays?: number; 
  public get passwdExpDays() {
    return this.getNumberAttribute('passwd_exp_days');
  }
  public set passwdExpDays(value: number) {
    this._passwdExpDays = value;
  }
  public resetPasswdExpDays() {
    this._passwdExpDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdExpDaysInput() {
    return this._passwdExpDays;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodLocalDatabase {
}

export function authenticationProfileMethodLocalDatabaseToTerraform(struct?: AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationProfileMethodLocalDatabaseToHclTerraform(struct?: AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationProfileMethodLocalDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodLocalDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AuthenticationProfileMethodNone {
}

export function authenticationProfileMethodNoneToTerraform(struct?: AuthenticationProfileMethodNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationProfileMethodNoneToHclTerraform(struct?: AuthenticationProfileMethodNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationProfileMethodNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AuthenticationProfileMethodRadius {
  /**
  * Retrieve user group from RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#checkgroup AuthenticationProfile#checkgroup}
  */
  readonly checkgroup?: boolean | cdktf.IResolvable;
  /**
  * RADIUS server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodRadiusToTerraform(struct?: AuthenticationProfileMethodRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkgroup: cdktf.booleanToTerraform(struct!.checkgroup),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodRadiusToHclTerraform(struct?: AuthenticationProfileMethodRadius | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkgroup: {
      value: cdktf.booleanToHclTerraform(struct!.checkgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodRadius | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkgroup = this._checkgroup;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodRadius | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkgroup = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkgroup = value.checkgroup;
      this._serverProfile = value.serverProfile;
    }
  }

  // checkgroup - computed: false, optional: true, required: false
  private _checkgroup?: boolean | cdktf.IResolvable; 
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }
  public set checkgroup(value: boolean | cdktf.IResolvable) {
    this._checkgroup = value;
  }
  public resetCheckgroup() {
    this._checkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkgroupInput() {
    return this._checkgroup;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodSamlIdp {
  /**
  * access-domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#attribute_name_access_domain AuthenticationProfile#attribute_name_access_domain}
  */
  readonly attributeNameAccessDomain?: string;
  /**
  * admin-role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#attribute_name_admin_role AuthenticationProfile#attribute_name_admin_role}
  */
  readonly attributeNameAdminRole?: string;
  /**
  * usergroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#attribute_name_usergroup AuthenticationProfile#attribute_name_usergroup}
  */
  readonly attributeNameUsergroup?: string;
  /**
  * Attribute name for username to be extracted from SAML response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#attribute_name_username AuthenticationProfile#attribute_name_username}
  */
  readonly attributeNameUsername?: string;
  /**
  * Certificate profile for IDP and SP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#certificate_profile AuthenticationProfile#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Enable single logout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#enable_single_logout AuthenticationProfile#enable_single_logout}
  */
  readonly enableSingleLogout?: boolean | cdktf.IResolvable;
  /**
  * Signing certificate for SAML requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#request_signing_certificate AuthenticationProfile#request_signing_certificate}
  */
  readonly requestSigningCertificate?: string;
  /**
  * IdP server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodSamlIdpToTerraform(struct?: AuthenticationProfileMethodSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name_access_domain: cdktf.stringToTerraform(struct!.attributeNameAccessDomain),
    attribute_name_admin_role: cdktf.stringToTerraform(struct!.attributeNameAdminRole),
    attribute_name_usergroup: cdktf.stringToTerraform(struct!.attributeNameUsergroup),
    attribute_name_username: cdktf.stringToTerraform(struct!.attributeNameUsername),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    enable_single_logout: cdktf.booleanToTerraform(struct!.enableSingleLogout),
    request_signing_certificate: cdktf.stringToTerraform(struct!.requestSigningCertificate),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodSamlIdpToHclTerraform(struct?: AuthenticationProfileMethodSamlIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name_access_domain: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameAccessDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_admin_role: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameAdminRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_usergroup: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name_username: {
      value: cdktf.stringToHclTerraform(struct!.attributeNameUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_single_logout: {
      value: cdktf.booleanToHclTerraform(struct!.enableSingleLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_signing_certificate: {
      value: cdktf.stringToHclTerraform(struct!.requestSigningCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodSamlIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodSamlIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeNameAccessDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameAccessDomain = this._attributeNameAccessDomain;
    }
    if (this._attributeNameAdminRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameAdminRole = this._attributeNameAdminRole;
    }
    if (this._attributeNameUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameUsergroup = this._attributeNameUsergroup;
    }
    if (this._attributeNameUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNameUsername = this._attributeNameUsername;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._enableSingleLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSingleLogout = this._enableSingleLogout;
    }
    if (this._requestSigningCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSigningCertificate = this._requestSigningCertificate;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodSamlIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeNameAccessDomain = undefined;
      this._attributeNameAdminRole = undefined;
      this._attributeNameUsergroup = undefined;
      this._attributeNameUsername = undefined;
      this._certificateProfile = undefined;
      this._enableSingleLogout = undefined;
      this._requestSigningCertificate = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeNameAccessDomain = value.attributeNameAccessDomain;
      this._attributeNameAdminRole = value.attributeNameAdminRole;
      this._attributeNameUsergroup = value.attributeNameUsergroup;
      this._attributeNameUsername = value.attributeNameUsername;
      this._certificateProfile = value.certificateProfile;
      this._enableSingleLogout = value.enableSingleLogout;
      this._requestSigningCertificate = value.requestSigningCertificate;
      this._serverProfile = value.serverProfile;
    }
  }

  // attribute_name_access_domain - computed: false, optional: true, required: false
  private _attributeNameAccessDomain?: string; 
  public get attributeNameAccessDomain() {
    return this.getStringAttribute('attribute_name_access_domain');
  }
  public set attributeNameAccessDomain(value: string) {
    this._attributeNameAccessDomain = value;
  }
  public resetAttributeNameAccessDomain() {
    this._attributeNameAccessDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameAccessDomainInput() {
    return this._attributeNameAccessDomain;
  }

  // attribute_name_admin_role - computed: false, optional: true, required: false
  private _attributeNameAdminRole?: string; 
  public get attributeNameAdminRole() {
    return this.getStringAttribute('attribute_name_admin_role');
  }
  public set attributeNameAdminRole(value: string) {
    this._attributeNameAdminRole = value;
  }
  public resetAttributeNameAdminRole() {
    this._attributeNameAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameAdminRoleInput() {
    return this._attributeNameAdminRole;
  }

  // attribute_name_usergroup - computed: false, optional: true, required: false
  private _attributeNameUsergroup?: string; 
  public get attributeNameUsergroup() {
    return this.getStringAttribute('attribute_name_usergroup');
  }
  public set attributeNameUsergroup(value: string) {
    this._attributeNameUsergroup = value;
  }
  public resetAttributeNameUsergroup() {
    this._attributeNameUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameUsergroupInput() {
    return this._attributeNameUsergroup;
  }

  // attribute_name_username - computed: true, optional: true, required: false
  private _attributeNameUsername?: string; 
  public get attributeNameUsername() {
    return this.getStringAttribute('attribute_name_username');
  }
  public set attributeNameUsername(value: string) {
    this._attributeNameUsername = value;
  }
  public resetAttributeNameUsername() {
    this._attributeNameUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameUsernameInput() {
    return this._attributeNameUsername;
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // enable_single_logout - computed: false, optional: true, required: false
  private _enableSingleLogout?: boolean | cdktf.IResolvable; 
  public get enableSingleLogout() {
    return this.getBooleanAttribute('enable_single_logout');
  }
  public set enableSingleLogout(value: boolean | cdktf.IResolvable) {
    this._enableSingleLogout = value;
  }
  public resetEnableSingleLogout() {
    this._enableSingleLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleLogoutInput() {
    return this._enableSingleLogout;
  }

  // request_signing_certificate - computed: false, optional: true, required: false
  private _requestSigningCertificate?: string; 
  public get requestSigningCertificate() {
    return this.getStringAttribute('request_signing_certificate');
  }
  public set requestSigningCertificate(value: string) {
    this._requestSigningCertificate = value;
  }
  public resetRequestSigningCertificate() {
    this._requestSigningCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningCertificateInput() {
    return this._requestSigningCertificate;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethodTacplus {
  /**
  * Retrieve user group from TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#checkgroup AuthenticationProfile#checkgroup}
  */
  readonly checkgroup?: boolean | cdktf.IResolvable;
  /**
  * TACACS+ server profile object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#server_profile AuthenticationProfile#server_profile}
  */
  readonly serverProfile?: string;
}

export function authenticationProfileMethodTacplusToTerraform(struct?: AuthenticationProfileMethodTacplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkgroup: cdktf.booleanToTerraform(struct!.checkgroup),
    server_profile: cdktf.stringToTerraform(struct!.serverProfile),
  }
}


export function authenticationProfileMethodTacplusToHclTerraform(struct?: AuthenticationProfileMethodTacplus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkgroup: {
      value: cdktf.booleanToHclTerraform(struct!.checkgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_profile: {
      value: cdktf.stringToHclTerraform(struct!.serverProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodTacplusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethodTacplus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkgroup = this._checkgroup;
    }
    if (this._serverProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethodTacplus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkgroup = undefined;
      this._serverProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkgroup = value.checkgroup;
      this._serverProfile = value.serverProfile;
    }
  }

  // checkgroup - computed: false, optional: true, required: false
  private _checkgroup?: boolean | cdktf.IResolvable; 
  public get checkgroup() {
    return this.getBooleanAttribute('checkgroup');
  }
  public set checkgroup(value: boolean | cdktf.IResolvable) {
    this._checkgroup = value;
  }
  public resetCheckgroup() {
    this._checkgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkgroupInput() {
    return this._checkgroup;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile?: string; 
  public get serverProfile() {
    return this.getStringAttribute('server_profile');
  }
  public set serverProfile(value: string) {
    this._serverProfile = value;
  }
  public resetServerProfile() {
    this._serverProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile;
  }
}
export interface AuthenticationProfileMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#cloud AuthenticationProfile#cloud}
  */
  readonly cloud?: AuthenticationProfileMethodCloud;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#kerberos AuthenticationProfile#kerberos}
  */
  readonly kerberos?: AuthenticationProfileMethodKerberos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#ldap AuthenticationProfile#ldap}
  */
  readonly ldap?: AuthenticationProfileMethodLdap;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#local_database AuthenticationProfile#local_database}
  */
  readonly localDatabase?: AuthenticationProfileMethodLocalDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#none AuthenticationProfile#none}
  */
  readonly none?: AuthenticationProfileMethodNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#radius AuthenticationProfile#radius}
  */
  readonly radius?: AuthenticationProfileMethodRadius;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#saml_idp AuthenticationProfile#saml_idp}
  */
  readonly samlIdp?: AuthenticationProfileMethodSamlIdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#tacplus AuthenticationProfile#tacplus}
  */
  readonly tacplus?: AuthenticationProfileMethodTacplus;
}

export function authenticationProfileMethodToTerraform(struct?: AuthenticationProfileMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud: authenticationProfileMethodCloudToTerraform(struct!.cloud),
    kerberos: authenticationProfileMethodKerberosToTerraform(struct!.kerberos),
    ldap: authenticationProfileMethodLdapToTerraform(struct!.ldap),
    local_database: authenticationProfileMethodLocalDatabaseToTerraform(struct!.localDatabase),
    none: authenticationProfileMethodNoneToTerraform(struct!.none),
    radius: authenticationProfileMethodRadiusToTerraform(struct!.radius),
    saml_idp: authenticationProfileMethodSamlIdpToTerraform(struct!.samlIdp),
    tacplus: authenticationProfileMethodTacplusToTerraform(struct!.tacplus),
  }
}


export function authenticationProfileMethodToHclTerraform(struct?: AuthenticationProfileMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud: {
      value: authenticationProfileMethodCloudToHclTerraform(struct!.cloud),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodCloud",
    },
    kerberos: {
      value: authenticationProfileMethodKerberosToHclTerraform(struct!.kerberos),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodKerberos",
    },
    ldap: {
      value: authenticationProfileMethodLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodLdap",
    },
    local_database: {
      value: authenticationProfileMethodLocalDatabaseToHclTerraform(struct!.localDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodLocalDatabase",
    },
    none: {
      value: authenticationProfileMethodNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodNone",
    },
    radius: {
      value: authenticationProfileMethodRadiusToHclTerraform(struct!.radius),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodRadius",
    },
    saml_idp: {
      value: authenticationProfileMethodSamlIdpToHclTerraform(struct!.samlIdp),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodSamlIdp",
    },
    tacplus: {
      value: authenticationProfileMethodTacplusToHclTerraform(struct!.tacplus),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthenticationProfileMethodTacplus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloud = this._cloud?.internalValue;
    }
    if (this._kerberos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._localDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDatabase = this._localDatabase?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._radius?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius?.internalValue;
    }
    if (this._samlIdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdp = this._samlIdp?.internalValue;
    }
    if (this._tacplus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloud.internalValue = undefined;
      this._kerberos.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._localDatabase.internalValue = undefined;
      this._none.internalValue = undefined;
      this._radius.internalValue = undefined;
      this._samlIdp.internalValue = undefined;
      this._tacplus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloud.internalValue = value.cloud;
      this._kerberos.internalValue = value.kerberos;
      this._ldap.internalValue = value.ldap;
      this._localDatabase.internalValue = value.localDatabase;
      this._none.internalValue = value.none;
      this._radius.internalValue = value.radius;
      this._samlIdp.internalValue = value.samlIdp;
      this._tacplus.internalValue = value.tacplus;
    }
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud = new AuthenticationProfileMethodCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: AuthenticationProfileMethodCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new AuthenticationProfileMethodKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: AuthenticationProfileMethodKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new AuthenticationProfileMethodLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: AuthenticationProfileMethodLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // local_database - computed: false, optional: true, required: false
  private _localDatabase = new AuthenticationProfileMethodLocalDatabaseOutputReference(this, "local_database");
  public get localDatabase() {
    return this._localDatabase;
  }
  public putLocalDatabase(value: AuthenticationProfileMethodLocalDatabase) {
    this._localDatabase.internalValue = value;
  }
  public resetLocalDatabase() {
    this._localDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatabaseInput() {
    return this._localDatabase.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new AuthenticationProfileMethodNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: AuthenticationProfileMethodNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new AuthenticationProfileMethodRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: AuthenticationProfileMethodRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // saml_idp - computed: false, optional: true, required: false
  private _samlIdp = new AuthenticationProfileMethodSamlIdpOutputReference(this, "saml_idp");
  public get samlIdp() {
    return this._samlIdp;
  }
  public putSamlIdp(value: AuthenticationProfileMethodSamlIdp) {
    this._samlIdp.internalValue = value;
  }
  public resetSamlIdp() {
    this._samlIdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInput() {
    return this._samlIdp.internalValue;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus = new AuthenticationProfileMethodTacplusOutputReference(this, "tacplus");
  public get tacplus() {
    return this._tacplus;
  }
  public putTacplus(value: AuthenticationProfileMethodTacplus) {
    this._tacplus.internalValue = value;
  }
  public resetTacplus() {
    this._tacplus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus.internalValue;
  }
}
export interface AuthenticationProfileMultiFactorAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#factors AuthenticationProfile#factors}
  */
  readonly factors?: string[];
  /**
  * Enable Additional Authentication Factors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#mfa_enable AuthenticationProfile#mfa_enable}
  */
  readonly mfaEnable?: boolean | cdktf.IResolvable;
}

export function authenticationProfileMultiFactorAuthToTerraform(struct?: AuthenticationProfileMultiFactorAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    factors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.factors),
    mfa_enable: cdktf.booleanToTerraform(struct!.mfaEnable),
  }
}


export function authenticationProfileMultiFactorAuthToHclTerraform(struct?: AuthenticationProfileMultiFactorAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    factors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.factors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mfa_enable: {
      value: cdktf.booleanToHclTerraform(struct!.mfaEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileMultiFactorAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileMultiFactorAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._factors !== undefined) {
      hasAnyValues = true;
      internalValueResult.factors = this._factors;
    }
    if (this._mfaEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaEnable = this._mfaEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileMultiFactorAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._factors = undefined;
      this._mfaEnable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._factors = value.factors;
      this._mfaEnable = value.mfaEnable;
    }
  }

  // factors - computed: false, optional: true, required: false
  private _factors?: string[]; 
  public get factors() {
    return this.getListAttribute('factors');
  }
  public set factors(value: string[]) {
    this._factors = value;
  }
  public resetFactors() {
    this._factors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorsInput() {
    return this._factors;
  }

  // mfa_enable - computed: false, optional: true, required: false
  private _mfaEnable?: boolean | cdktf.IResolvable; 
  public get mfaEnable() {
    return this.getBooleanAttribute('mfa_enable');
  }
  public set mfaEnable(value: boolean | cdktf.IResolvable) {
    this._mfaEnable = value;
  }
  public resetMfaEnable() {
    this._mfaEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnableInput() {
    return this._mfaEnable;
  }
}
export interface AuthenticationProfileSingleSignOn {
  /**
  * Kerberos keytab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#kerberos_keytab AuthenticationProfile#kerberos_keytab}
  */
  readonly kerberosKeytab?: string;
  /**
  * Kerberos realm to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#realm AuthenticationProfile#realm}
  */
  readonly realm?: string;
  /**
  * Kerberos service principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#service_principal AuthenticationProfile#service_principal}
  */
  readonly servicePrincipal?: string;
}

export function authenticationProfileSingleSignOnToTerraform(struct?: AuthenticationProfileSingleSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_keytab: cdktf.stringToTerraform(struct!.kerberosKeytab),
    realm: cdktf.stringToTerraform(struct!.realm),
    service_principal: cdktf.stringToTerraform(struct!.servicePrincipal),
  }
}


export function authenticationProfileSingleSignOnToHclTerraform(struct?: AuthenticationProfileSingleSignOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_keytab: {
      value: cdktf.stringToHclTerraform(struct!.kerberosKeytab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationProfileSingleSignOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationProfileSingleSignOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosKeytab !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeytab = this._kerberosKeytab;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._servicePrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationProfileSingleSignOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kerberosKeytab = undefined;
      this._realm = undefined;
      this._servicePrincipal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kerberosKeytab = value.kerberosKeytab;
      this._realm = value.realm;
      this._servicePrincipal = value.servicePrincipal;
    }
  }

  // kerberos_keytab - computed: false, optional: true, required: false
  private _kerberosKeytab?: string; 
  public get kerberosKeytab() {
    return this.getStringAttribute('kerberos_keytab');
  }
  public set kerberosKeytab(value: string) {
    this._kerberosKeytab = value;
  }
  public resetKerberosKeytab() {
    this._kerberosKeytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeytabInput() {
    return this._kerberosKeytab;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile panos_authentication_profile}
*/
export class AuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationProfile to import
  * @param importFromId The id of the existing AuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/authentication_profile panos_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._location.internalValue = config.location;
    this._lockout.internalValue = config.lockout;
    this._method.internalValue = config.method;
    this._multiFactorAuth.internalValue = config.multiFactorAuth;
    this._name = config.name;
    this._singleSignOn.internalValue = config.singleSignOn;
    this._userDomain = config.userDomain;
    this._usernameModifier = config.usernameModifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: false, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // location - computed: false, optional: false, required: true
  private _location = new AuthenticationProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: AuthenticationProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // lockout - computed: false, optional: true, required: false
  private _lockout = new AuthenticationProfileLockoutOutputReference(this, "lockout");
  public get lockout() {
    return this._lockout;
  }
  public putLockout(value: AuthenticationProfileLockout) {
    this._lockout.internalValue = value;
  }
  public resetLockout() {
    this._lockout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutInput() {
    return this._lockout.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new AuthenticationProfileMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: AuthenticationProfileMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // multi_factor_auth - computed: false, optional: true, required: false
  private _multiFactorAuth = new AuthenticationProfileMultiFactorAuthOutputReference(this, "multi_factor_auth");
  public get multiFactorAuth() {
    return this._multiFactorAuth;
  }
  public putMultiFactorAuth(value: AuthenticationProfileMultiFactorAuth) {
    this._multiFactorAuth.internalValue = value;
  }
  public resetMultiFactorAuth() {
    this._multiFactorAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorAuthInput() {
    return this._multiFactorAuth.internalValue;
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

  // single_sign_on - computed: false, optional: true, required: false
  private _singleSignOn = new AuthenticationProfileSingleSignOnOutputReference(this, "single_sign_on");
  public get singleSignOn() {
    return this._singleSignOn;
  }
  public putSingleSignOn(value: AuthenticationProfileSingleSignOn) {
    this._singleSignOn.internalValue = value;
  }
  public resetSingleSignOn() {
    this._singleSignOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnInput() {
    return this._singleSignOn.internalValue;
  }

  // user_domain - computed: false, optional: true, required: false
  private _userDomain?: string; 
  public get userDomain() {
    return this.getStringAttribute('user_domain');
  }
  public set userDomain(value: string) {
    this._userDomain = value;
  }
  public resetUserDomain() {
    this._userDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDomainInput() {
    return this._userDomain;
  }

  // username_modifier - computed: true, optional: true, required: false
  private _usernameModifier?: string; 
  public get usernameModifier() {
    return this.getStringAttribute('username_modifier');
  }
  public set usernameModifier(value: string) {
    this._usernameModifier = value;
  }
  public resetUsernameModifier() {
    this._usernameModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameModifierInput() {
    return this._usernameModifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      location: authenticationProfileLocationToTerraform(this._location.internalValue),
      lockout: authenticationProfileLockoutToTerraform(this._lockout.internalValue),
      method: authenticationProfileMethodToTerraform(this._method.internalValue),
      multi_factor_auth: authenticationProfileMultiFactorAuthToTerraform(this._multiFactorAuth.internalValue),
      name: cdktf.stringToTerraform(this._name),
      single_sign_on: authenticationProfileSingleSignOnToTerraform(this._singleSignOn.internalValue),
      user_domain: cdktf.stringToTerraform(this._userDomain),
      username_modifier: cdktf.stringToTerraform(this._usernameModifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: authenticationProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileLocation",
      },
      lockout: {
        value: authenticationProfileLockoutToHclTerraform(this._lockout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileLockout",
      },
      method: {
        value: authenticationProfileMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileMethod",
      },
      multi_factor_auth: {
        value: authenticationProfileMultiFactorAuthToHclTerraform(this._multiFactorAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileMultiFactorAuth",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on: {
        value: authenticationProfileSingleSignOnToHclTerraform(this._singleSignOn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationProfileSingleSignOn",
      },
      user_domain: {
        value: cdktf.stringToHclTerraform(this._userDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_modifier: {
        value: cdktf.stringToHclTerraform(this._usernameModifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
