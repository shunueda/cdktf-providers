// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UseridLogSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#actions UseridLogSettings#actions}
  */
  readonly actions?: UseridLogSettingsActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#description UseridLogSettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#email_profiles UseridLogSettings#email_profiles}
  */
  readonly emailProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#filter UseridLogSettings#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#http_profiles UseridLogSettings#http_profiles}
  */
  readonly httpProfiles?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#location UseridLogSettings#location}
  */
  readonly location: UseridLogSettingsLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#name UseridLogSettings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#quarantine UseridLogSettings#quarantine}
  */
  readonly quarantine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#send_to_panorama UseridLogSettings#send_to_panorama}
  */
  readonly sendToPanorama?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#snmp_profiles UseridLogSettings#snmp_profiles}
  */
  readonly snmpProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#syslog_profiles UseridLogSettings#syslog_profiles}
  */
  readonly syslogProfiles?: string[];
}
export interface UseridLogSettingsActionsTypeIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#action UseridLogSettings#action}
  */
  readonly action?: string;
}

export function useridLogSettingsActionsTypeIntegrationToTerraform(struct?: UseridLogSettingsActionsTypeIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function useridLogSettingsActionsTypeIntegrationToHclTerraform(struct?: UseridLogSettingsActionsTypeIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsActionsTypeIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsTypeIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsTypeIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface UseridLogSettingsActionsTypeTaggingRegistrationLocalhost {
}

export function useridLogSettingsActionsTypeTaggingRegistrationLocalhostToTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function useridLogSettingsActionsTypeTaggingRegistrationLocalhostToHclTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UseridLogSettingsActionsTypeTaggingRegistrationLocalhostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsActionsTypeTaggingRegistrationPanorama {
}

export function useridLogSettingsActionsTypeTaggingRegistrationPanoramaToTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function useridLogSettingsActionsTypeTaggingRegistrationPanoramaToHclTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UseridLogSettingsActionsTypeTaggingRegistrationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsActionsTypeTaggingRegistrationRemote {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#http_profile UseridLogSettings#http_profile}
  */
  readonly httpProfile?: string;
}

export function useridLogSettingsActionsTypeTaggingRegistrationRemoteToTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistrationRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_profile: cdktf.stringToTerraform(struct!.httpProfile),
  }
}


export function useridLogSettingsActionsTypeTaggingRegistrationRemoteToHclTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistrationRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_profile: {
      value: cdktf.stringToHclTerraform(struct!.httpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsActionsTypeTaggingRegistrationRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsTypeTaggingRegistrationRemote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProfile = this._httpProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsTypeTaggingRegistrationRemote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpProfile = value.httpProfile;
    }
  }

  // http_profile - computed: false, optional: true, required: false
  private _httpProfile?: string; 
  public get httpProfile() {
    return this.getStringAttribute('http_profile');
  }
  public set httpProfile(value: string) {
    this._httpProfile = value;
  }
  public resetHttpProfile() {
    this._httpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfileInput() {
    return this._httpProfile;
  }
}
export interface UseridLogSettingsActionsTypeTaggingRegistration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#localhost UseridLogSettings#localhost}
  */
  readonly localhost?: UseridLogSettingsActionsTypeTaggingRegistrationLocalhost;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#panorama UseridLogSettings#panorama}
  */
  readonly panorama?: UseridLogSettingsActionsTypeTaggingRegistrationPanorama;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#remote UseridLogSettings#remote}
  */
  readonly remote?: UseridLogSettingsActionsTypeTaggingRegistrationRemote;
}

export function useridLogSettingsActionsTypeTaggingRegistrationToTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost: useridLogSettingsActionsTypeTaggingRegistrationLocalhostToTerraform(struct!.localhost),
    panorama: useridLogSettingsActionsTypeTaggingRegistrationPanoramaToTerraform(struct!.panorama),
    remote: useridLogSettingsActionsTypeTaggingRegistrationRemoteToTerraform(struct!.remote),
  }
}


export function useridLogSettingsActionsTypeTaggingRegistrationToHclTerraform(struct?: UseridLogSettingsActionsTypeTaggingRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost: {
      value: useridLogSettingsActionsTypeTaggingRegistrationLocalhostToHclTerraform(struct!.localhost),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsTypeTaggingRegistrationLocalhost",
    },
    panorama: {
      value: useridLogSettingsActionsTypeTaggingRegistrationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsTypeTaggingRegistrationPanorama",
    },
    remote: {
      value: useridLogSettingsActionsTypeTaggingRegistrationRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsTypeTaggingRegistrationRemote",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsActionsTypeTaggingRegistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsTypeTaggingRegistration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhost = this._localhost?.internalValue;
    }
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsTypeTaggingRegistration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhost.internalValue = undefined;
      this._panorama.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhost.internalValue = value.localhost;
      this._panorama.internalValue = value.panorama;
      this._remote.internalValue = value.remote;
    }
  }

  // localhost - computed: false, optional: true, required: false
  private _localhost = new UseridLogSettingsActionsTypeTaggingRegistrationLocalhostOutputReference(this, "localhost");
  public get localhost() {
    return this._localhost;
  }
  public putLocalhost(value: UseridLogSettingsActionsTypeTaggingRegistrationLocalhost) {
    this._localhost.internalValue = value;
  }
  public resetLocalhost() {
    this._localhost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostInput() {
    return this._localhost.internalValue;
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new UseridLogSettingsActionsTypeTaggingRegistrationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: UseridLogSettingsActionsTypeTaggingRegistrationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new UseridLogSettingsActionsTypeTaggingRegistrationRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: UseridLogSettingsActionsTypeTaggingRegistrationRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface UseridLogSettingsActionsTypeTagging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#action UseridLogSettings#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#registration UseridLogSettings#registration}
  */
  readonly registration?: UseridLogSettingsActionsTypeTaggingRegistration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#tags UseridLogSettings#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#target UseridLogSettings#target}
  */
  readonly target?: string;
  /**
  * timeout in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#timeout UseridLogSettings#timeout}
  */
  readonly timeout?: number;
}

export function useridLogSettingsActionsTypeTaggingToTerraform(struct?: UseridLogSettingsActionsTypeTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    registration: useridLogSettingsActionsTypeTaggingRegistrationToTerraform(struct!.registration),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function useridLogSettingsActionsTypeTaggingToHclTerraform(struct?: UseridLogSettingsActionsTypeTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registration: {
      value: useridLogSettingsActionsTypeTaggingRegistrationToHclTerraform(struct!.registration),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsTypeTaggingRegistration",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsActionsTypeTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsTypeTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._registration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registration = this._registration?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsTypeTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._registration.internalValue = undefined;
      this._tags = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._registration.internalValue = value.registration;
      this._tags = value.tags;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // registration - computed: false, optional: true, required: false
  private _registration = new UseridLogSettingsActionsTypeTaggingRegistrationOutputReference(this, "registration");
  public get registration() {
    return this._registration;
  }
  public putRegistration(value: UseridLogSettingsActionsTypeTaggingRegistration) {
    this._registration.internalValue = value;
  }
  public resetRegistration() {
    this._registration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationInput() {
    return this._registration.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface UseridLogSettingsActionsType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#integration UseridLogSettings#integration}
  */
  readonly integration?: UseridLogSettingsActionsTypeIntegration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#tagging UseridLogSettings#tagging}
  */
  readonly tagging?: UseridLogSettingsActionsTypeTagging;
}

export function useridLogSettingsActionsTypeToTerraform(struct?: UseridLogSettingsActionsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration: useridLogSettingsActionsTypeIntegrationToTerraform(struct!.integration),
    tagging: useridLogSettingsActionsTypeTaggingToTerraform(struct!.tagging),
  }
}


export function useridLogSettingsActionsTypeToHclTerraform(struct?: UseridLogSettingsActionsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration: {
      value: useridLogSettingsActionsTypeIntegrationToHclTerraform(struct!.integration),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsTypeIntegration",
    },
    tagging: {
      value: useridLogSettingsActionsTypeTaggingToHclTerraform(struct!.tagging),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsTypeTagging",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsActionsTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsActionsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    if (this._tagging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagging = this._tagging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActionsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integration.internalValue = undefined;
      this._tagging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integration.internalValue = value.integration;
      this._tagging.internalValue = value.tagging;
    }
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new UseridLogSettingsActionsTypeIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: UseridLogSettingsActionsTypeIntegration) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }

  // tagging - computed: false, optional: true, required: false
  private _tagging = new UseridLogSettingsActionsTypeTaggingOutputReference(this, "tagging");
  public get tagging() {
    return this._tagging;
  }
  public putTagging(value: UseridLogSettingsActionsTypeTagging) {
    this._tagging.internalValue = value;
  }
  public resetTagging() {
    this._tagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingInput() {
    return this._tagging.internalValue;
  }
}
export interface UseridLogSettingsActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#name UseridLogSettings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#type UseridLogSettings#type}
  */
  readonly type?: UseridLogSettingsActionsType;
}

export function useridLogSettingsActionsToTerraform(struct?: UseridLogSettingsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: useridLogSettingsActionsTypeToTerraform(struct!.type),
  }
}


export function useridLogSettingsActionsToHclTerraform(struct?: UseridLogSettingsActions | cdktf.IResolvable): any {
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
    type: {
      value: useridLogSettingsActionsTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsActionsType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UseridLogSettingsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type.internalValue = value.type;
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

  // type - computed: false, optional: true, required: false
  private _type = new UseridLogSettingsActionsTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: UseridLogSettingsActionsType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class UseridLogSettingsActionsList extends cdktf.ComplexList {
  public internalValue? : UseridLogSettingsActions[] | cdktf.IResolvable

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
  public get(index: number): UseridLogSettingsActionsOutputReference {
    return new UseridLogSettingsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UseridLogSettingsLocationPanorama {
}

export function useridLogSettingsLocationPanoramaToTerraform(struct?: UseridLogSettingsLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function useridLogSettingsLocationPanoramaToHclTerraform(struct?: UseridLogSettingsLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UseridLogSettingsLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsLocationPanorama | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#name UseridLogSettings#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#panorama_device UseridLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function useridLogSettingsLocationTemplateToTerraform(struct?: UseridLogSettingsLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function useridLogSettingsLocationTemplateToHclTerraform(struct?: UseridLogSettingsLocationTemplate | cdktf.IResolvable): any {
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

export class UseridLogSettingsLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UseridLogSettingsLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsLocationTemplateStack {
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#name UseridLogSettings#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#panorama_device UseridLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function useridLogSettingsLocationTemplateStackToTerraform(struct?: UseridLogSettingsLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function useridLogSettingsLocationTemplateStackToHclTerraform(struct?: UseridLogSettingsLocationTemplateStack | cdktf.IResolvable): any {
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

export class UseridLogSettingsLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UseridLogSettingsLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#ngfw_device UseridLogSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#panorama_device UseridLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#template_stack UseridLogSettings#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#vsys UseridLogSettings#vsys}
  */
  readonly vsys?: string;
}

export function useridLogSettingsLocationTemplateStackVsysToTerraform(struct?: UseridLogSettingsLocationTemplateStackVsys | cdktf.IResolvable): any {
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


export function useridLogSettingsLocationTemplateStackVsysToHclTerraform(struct?: UseridLogSettingsLocationTemplateStackVsys | cdktf.IResolvable): any {
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

export class UseridLogSettingsLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsLocationTemplateStackVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UseridLogSettingsLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#ngfw_device UseridLogSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#panorama_device UseridLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#template UseridLogSettings#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#vsys UseridLogSettings#vsys}
  */
  readonly vsys?: string;
}

export function useridLogSettingsLocationTemplateVsysToTerraform(struct?: UseridLogSettingsLocationTemplateVsys | cdktf.IResolvable): any {
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


export function useridLogSettingsLocationTemplateVsysToHclTerraform(struct?: UseridLogSettingsLocationTemplateVsys | cdktf.IResolvable): any {
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

export class UseridLogSettingsLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsLocationTemplateVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UseridLogSettingsLocationTemplateVsys | cdktf.IResolvable | undefined) {
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
export interface UseridLogSettingsLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#panorama UseridLogSettings#panorama}
  */
  readonly panorama?: UseridLogSettingsLocationPanorama;
  /**
  * A shared resource located within a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#template UseridLogSettings#template}
  */
  readonly template?: UseridLogSettingsLocationTemplate;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#template_stack UseridLogSettings#template_stack}
  */
  readonly templateStack?: UseridLogSettingsLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#template_stack_vsys UseridLogSettings#template_stack_vsys}
  */
  readonly templateStackVsys?: UseridLogSettingsLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#template_vsys UseridLogSettings#template_vsys}
  */
  readonly templateVsys?: UseridLogSettingsLocationTemplateVsys;
}

export function useridLogSettingsLocationToTerraform(struct?: UseridLogSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: useridLogSettingsLocationPanoramaToTerraform(struct!.panorama),
    template: useridLogSettingsLocationTemplateToTerraform(struct!.template),
    template_stack: useridLogSettingsLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: useridLogSettingsLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: useridLogSettingsLocationTemplateVsysToTerraform(struct!.templateVsys),
  }
}


export function useridLogSettingsLocationToHclTerraform(struct?: UseridLogSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: useridLogSettingsLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsLocationPanorama",
    },
    template: {
      value: useridLogSettingsLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsLocationTemplate",
    },
    template_stack: {
      value: useridLogSettingsLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsLocationTemplateStack",
    },
    template_stack_vsys: {
      value: useridLogSettingsLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsLocationTemplateStackVsys",
    },
    template_vsys: {
      value: useridLogSettingsLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "UseridLogSettingsLocationTemplateVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UseridLogSettingsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UseridLogSettingsLocation | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UseridLogSettingsLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
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
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new UseridLogSettingsLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: UseridLogSettingsLocationPanorama) {
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
  private _template = new UseridLogSettingsLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: UseridLogSettingsLocationTemplate) {
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
  private _templateStack = new UseridLogSettingsLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: UseridLogSettingsLocationTemplateStack) {
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
  private _templateStackVsys = new UseridLogSettingsLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: UseridLogSettingsLocationTemplateStackVsys) {
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
  private _templateVsys = new UseridLogSettingsLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: UseridLogSettingsLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings panos_userid_log_settings}
*/
export class UseridLogSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_userid_log_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UseridLogSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UseridLogSettings to import
  * @param importFromId The id of the existing UseridLogSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UseridLogSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_userid_log_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/userid_log_settings panos_userid_log_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UseridLogSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: UseridLogSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_userid_log_settings',
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
    this._actions.internalValue = config.actions;
    this._description = config.description;
    this._emailProfiles = config.emailProfiles;
    this._filter = config.filter;
    this._httpProfiles = config.httpProfiles;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._quarantine = config.quarantine;
    this._sendToPanorama = config.sendToPanorama;
    this._snmpProfiles = config.snmpProfiles;
    this._syslogProfiles = config.syslogProfiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions = new UseridLogSettingsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: UseridLogSettingsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
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

  // email_profiles - computed: false, optional: true, required: false
  private _emailProfiles?: string[]; 
  public get emailProfiles() {
    return this.getListAttribute('email_profiles');
  }
  public set emailProfiles(value: string[]) {
    this._emailProfiles = value;
  }
  public resetEmailProfiles() {
    this._emailProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProfilesInput() {
    return this._emailProfiles;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // http_profiles - computed: false, optional: true, required: false
  private _httpProfiles?: string[]; 
  public get httpProfiles() {
    return this.getListAttribute('http_profiles');
  }
  public set httpProfiles(value: string[]) {
    this._httpProfiles = value;
  }
  public resetHttpProfiles() {
    this._httpProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfilesInput() {
    return this._httpProfiles;
  }

  // location - computed: false, optional: false, required: true
  private _location = new UseridLogSettingsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: UseridLogSettingsLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: boolean | cdktf.IResolvable; 
  public get quarantine() {
    return this.getBooleanAttribute('quarantine');
  }
  public set quarantine(value: boolean | cdktf.IResolvable) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // send_to_panorama - computed: false, optional: true, required: false
  private _sendToPanorama?: boolean | cdktf.IResolvable; 
  public get sendToPanorama() {
    return this.getBooleanAttribute('send_to_panorama');
  }
  public set sendToPanorama(value: boolean | cdktf.IResolvable) {
    this._sendToPanorama = value;
  }
  public resetSendToPanorama() {
    this._sendToPanorama = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToPanoramaInput() {
    return this._sendToPanorama;
  }

  // snmp_profiles - computed: false, optional: true, required: false
  private _snmpProfiles?: string[]; 
  public get snmpProfiles() {
    return this.getListAttribute('snmp_profiles');
  }
  public set snmpProfiles(value: string[]) {
    this._snmpProfiles = value;
  }
  public resetSnmpProfiles() {
    this._snmpProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpProfilesInput() {
    return this._snmpProfiles;
  }

  // syslog_profiles - computed: false, optional: true, required: false
  private _syslogProfiles?: string[]; 
  public get syslogProfiles() {
    return this.getListAttribute('syslog_profiles');
  }
  public set syslogProfiles(value: string[]) {
    this._syslogProfiles = value;
  }
  public resetSyslogProfiles() {
    this._syslogProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogProfilesInput() {
    return this._syslogProfiles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(useridLogSettingsActionsToTerraform, false)(this._actions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      email_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailProfiles),
      filter: cdktf.stringToTerraform(this._filter),
      http_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpProfiles),
      location: useridLogSettingsLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      quarantine: cdktf.booleanToTerraform(this._quarantine),
      send_to_panorama: cdktf.booleanToTerraform(this._sendToPanorama),
      snmp_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snmpProfiles),
      syslog_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syslogProfiles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(useridLogSettingsActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UseridLogSettingsActionsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: useridLogSettingsLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UseridLogSettingsLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine: {
        value: cdktf.booleanToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_to_panorama: {
        value: cdktf.booleanToHclTerraform(this._sendToPanorama),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snmpProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      syslog_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syslogProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
