// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgServicepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * For SRX Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#aamw OrgServicepolicy#aamw}
  */
  readonly aamw?: OrgServicepolicyAamw;
  /**
  * enum: `allow`, `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#action OrgServicepolicy#action}
  */
  readonly action?: string;
  /**
  * For SRX-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#antivirus OrgServicepolicy#antivirus}
  */
  readonly antivirus?: OrgServicepolicyAntivirus;
  /**
  * For SRX Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#appqoe OrgServicepolicy#appqoe}
  */
  readonly appqoe?: OrgServicepolicyAppqoe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#ewf OrgServicepolicy#ewf}
  */
  readonly ewf?: OrgServicepolicyEwf[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#idp OrgServicepolicy#idp}
  */
  readonly idp?: OrgServicepolicyIdp;
  /**
  * access within the same VRF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#local_routing OrgServicepolicy#local_routing}
  */
  readonly localRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#name OrgServicepolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#org_id OrgServicepolicy#org_id}
  */
  readonly orgId: string;
  /**
  * By default, we derive all paths available and use them, optionally, you can customize by using `path_preference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#path_preference OrgServicepolicy#path_preference}
  */
  readonly pathPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#services OrgServicepolicy#services}
  */
  readonly services?: string[];
  /**
  * For SRX-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#ssl_proxy OrgServicepolicy#ssl_proxy}
  */
  readonly sslProxy?: OrgServicepolicySslProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#tenants OrgServicepolicy#tenants}
  */
  readonly tenants?: string[];
}
export interface OrgServicepolicyAamw {
  /**
  * org-level Advanced Advance Anti Malware Profile (SkyAtp) Profile can be used, this takes precedence over 'profile'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#aamwprofile_id OrgServicepolicy#aamwprofile_id}
  */
  readonly aamwprofileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#enabled OrgServicepolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `docsonly`, `executables`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#profile OrgServicepolicy#profile}
  */
  readonly profile?: string;
}

export function orgServicepolicyAamwToTerraform(struct?: OrgServicepolicyAamw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aamwprofile_id: cdktf.stringToTerraform(struct!.aamwprofileId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgServicepolicyAamwToHclTerraform(struct?: OrgServicepolicyAamw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aamwprofile_id: {
      value: cdktf.stringToHclTerraform(struct!.aamwprofileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServicepolicyAamwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgServicepolicyAamw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aamwprofileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aamwprofileId = this._aamwprofileId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServicepolicyAamw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aamwprofileId = undefined;
      this._enabled = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aamwprofileId = value.aamwprofileId;
      this._enabled = value.enabled;
      this._profile = value.profile;
    }
  }

  // aamwprofile_id - computed: false, optional: true, required: false
  private _aamwprofileId?: string; 
  public get aamwprofileId() {
    return this.getStringAttribute('aamwprofile_id');
  }
  public set aamwprofileId(value: string) {
    this._aamwprofileId = value;
  }
  public resetAamwprofileId() {
    this._aamwprofileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aamwprofileIdInput() {
    return this._aamwprofileId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface OrgServicepolicyAntivirus {
  /**
  * org-level AV Profile can be used, this takes precedence over 'profile'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#avprofile_id OrgServicepolicy#avprofile_id}
  */
  readonly avprofileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#enabled OrgServicepolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Default / noftp / httponly / or keys from av_profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#profile OrgServicepolicy#profile}
  */
  readonly profile?: string;
}

export function orgServicepolicyAntivirusToTerraform(struct?: OrgServicepolicyAntivirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avprofile_id: cdktf.stringToTerraform(struct!.avprofileId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgServicepolicyAntivirusToHclTerraform(struct?: OrgServicepolicyAntivirus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avprofile_id: {
      value: cdktf.stringToHclTerraform(struct!.avprofileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServicepolicyAntivirusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgServicepolicyAntivirus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avprofileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.avprofileId = this._avprofileId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServicepolicyAntivirus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._avprofileId = undefined;
      this._enabled = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._avprofileId = value.avprofileId;
      this._enabled = value.enabled;
      this._profile = value.profile;
    }
  }

  // avprofile_id - computed: false, optional: true, required: false
  private _avprofileId?: string; 
  public get avprofileId() {
    return this.getStringAttribute('avprofile_id');
  }
  public set avprofileId(value: string) {
    this._avprofileId = value;
  }
  public resetAvprofileId() {
    this._avprofileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avprofileIdInput() {
    return this._avprofileId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface OrgServicepolicyAppqoe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#enabled OrgServicepolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgServicepolicyAppqoeToTerraform(struct?: OrgServicepolicyAppqoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgServicepolicyAppqoeToHclTerraform(struct?: OrgServicepolicyAppqoe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServicepolicyAppqoeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgServicepolicyAppqoe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServicepolicyAppqoe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgServicepolicyEwf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#alert_only OrgServicepolicy#alert_only}
  */
  readonly alertOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#block_message OrgServicepolicy#block_message}
  */
  readonly blockMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#enabled OrgServicepolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * enum: `critical`, `standard`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#profile OrgServicepolicy#profile}
  */
  readonly profile?: string;
}

export function orgServicepolicyEwfToTerraform(struct?: OrgServicepolicyEwf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_only: cdktf.booleanToTerraform(struct!.alertOnly),
    block_message: cdktf.stringToTerraform(struct!.blockMessage),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgServicepolicyEwfToHclTerraform(struct?: OrgServicepolicyEwf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_only: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_message: {
      value: cdktf.stringToHclTerraform(struct!.blockMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServicepolicyEwfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgServicepolicyEwf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnly = this._alertOnly;
    }
    if (this._blockMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMessage = this._blockMessage;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServicepolicyEwf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertOnly = undefined;
      this._blockMessage = undefined;
      this._enabled = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertOnly = value.alertOnly;
      this._blockMessage = value.blockMessage;
      this._enabled = value.enabled;
      this._profile = value.profile;
    }
  }

  // alert_only - computed: false, optional: true, required: false
  private _alertOnly?: boolean | cdktf.IResolvable; 
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }
  public set alertOnly(value: boolean | cdktf.IResolvable) {
    this._alertOnly = value;
  }
  public resetAlertOnly() {
    this._alertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnlyInput() {
    return this._alertOnly;
  }

  // block_message - computed: false, optional: true, required: false
  private _blockMessage?: string; 
  public get blockMessage() {
    return this.getStringAttribute('block_message');
  }
  public set blockMessage(value: string) {
    this._blockMessage = value;
  }
  public resetBlockMessage() {
    this._blockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMessageInput() {
    return this._blockMessage;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class OrgServicepolicyEwfList extends cdktf.ComplexList {
  public internalValue? : OrgServicepolicyEwf[] | cdktf.IResolvable

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
  public get(index: number): OrgServicepolicyEwfOutputReference {
    return new OrgServicepolicyEwfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgServicepolicyIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#alert_only OrgServicepolicy#alert_only}
  */
  readonly alertOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#enabled OrgServicepolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * org_level IDP Profile can be used, this takes precedence over `profile`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#idpprofile_id OrgServicepolicy#idpprofile_id}
  */
  readonly idpprofileId?: string;
  /**
  * enum: `Custom`, `strict` (default), `standard` or keys from idp_profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#profile OrgServicepolicy#profile}
  */
  readonly profile?: string;
}

export function orgServicepolicyIdpToTerraform(struct?: OrgServicepolicyIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_only: cdktf.booleanToTerraform(struct!.alertOnly),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idpprofile_id: cdktf.stringToTerraform(struct!.idpprofileId),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function orgServicepolicyIdpToHclTerraform(struct?: OrgServicepolicyIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_only: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idpprofile_id: {
      value: cdktf.stringToHclTerraform(struct!.idpprofileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServicepolicyIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgServicepolicyIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnly = this._alertOnly;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idpprofileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpprofileId = this._idpprofileId;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServicepolicyIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertOnly = undefined;
      this._enabled = undefined;
      this._idpprofileId = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertOnly = value.alertOnly;
      this._enabled = value.enabled;
      this._idpprofileId = value.idpprofileId;
      this._profile = value.profile;
    }
  }

  // alert_only - computed: false, optional: true, required: false
  private _alertOnly?: boolean | cdktf.IResolvable; 
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }
  public set alertOnly(value: boolean | cdktf.IResolvable) {
    this._alertOnly = value;
  }
  public resetAlertOnly() {
    this._alertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnlyInput() {
    return this._alertOnly;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idpprofile_id - computed: false, optional: true, required: false
  private _idpprofileId?: string; 
  public get idpprofileId() {
    return this.getStringAttribute('idpprofile_id');
  }
  public set idpprofileId(value: string) {
    this._idpprofileId = value;
  }
  public resetIdpprofileId() {
    this._idpprofileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpprofileIdInput() {
    return this._idpprofileId;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface OrgServicepolicySslProxy {
  /**
  * enum: `medium`, `strong`, `weak`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#ciphers_category OrgServicepolicy#ciphers_category}
  */
  readonly ciphersCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#enabled OrgServicepolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgServicepolicySslProxyToTerraform(struct?: OrgServicepolicySslProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers_category: cdktf.stringToTerraform(struct!.ciphersCategory),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgServicepolicySslProxyToHclTerraform(struct?: OrgServicepolicySslProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers_category: {
      value: cdktf.stringToHclTerraform(struct!.ciphersCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgServicepolicySslProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgServicepolicySslProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphersCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphersCategory = this._ciphersCategory;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgServicepolicySslProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ciphersCategory = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ciphersCategory = value.ciphersCategory;
      this._enabled = value.enabled;
    }
  }

  // ciphers_category - computed: true, optional: true, required: false
  private _ciphersCategory?: string; 
  public get ciphersCategory() {
    return this.getStringAttribute('ciphers_category');
  }
  public set ciphersCategory(value: string) {
    this._ciphersCategory = value;
  }
  public resetCiphersCategory() {
    this._ciphersCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersCategoryInput() {
    return this._ciphersCategory;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy mist_org_servicepolicy}
*/
export class OrgServicepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_servicepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgServicepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgServicepolicy to import
  * @param importFromId The id of the existing OrgServicepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgServicepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_servicepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_servicepolicy mist_org_servicepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgServicepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrgServicepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_servicepolicy',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aamw.internalValue = config.aamw;
    this._action = config.action;
    this._antivirus.internalValue = config.antivirus;
    this._appqoe.internalValue = config.appqoe;
    this._ewf.internalValue = config.ewf;
    this._idp.internalValue = config.idp;
    this._localRouting = config.localRouting;
    this._name = config.name;
    this._orgId = config.orgId;
    this._pathPreference = config.pathPreference;
    this._services = config.services;
    this._sslProxy.internalValue = config.sslProxy;
    this._tenants = config.tenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aamw - computed: false, optional: true, required: false
  private _aamw = new OrgServicepolicyAamwOutputReference(this, "aamw");
  public get aamw() {
    return this._aamw;
  }
  public putAamw(value: OrgServicepolicyAamw) {
    this._aamw.internalValue = value;
  }
  public resetAamw() {
    this._aamw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aamwInput() {
    return this._aamw.internalValue;
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

  // antivirus - computed: false, optional: true, required: false
  private _antivirus = new OrgServicepolicyAntivirusOutputReference(this, "antivirus");
  public get antivirus() {
    return this._antivirus;
  }
  public putAntivirus(value: OrgServicepolicyAntivirus) {
    this._antivirus.internalValue = value;
  }
  public resetAntivirus() {
    this._antivirus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus.internalValue;
  }

  // appqoe - computed: false, optional: true, required: false
  private _appqoe = new OrgServicepolicyAppqoeOutputReference(this, "appqoe");
  public get appqoe() {
    return this._appqoe;
  }
  public putAppqoe(value: OrgServicepolicyAppqoe) {
    this._appqoe.internalValue = value;
  }
  public resetAppqoe() {
    this._appqoe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appqoeInput() {
    return this._appqoe.internalValue;
  }

  // ewf - computed: false, optional: true, required: false
  private _ewf = new OrgServicepolicyEwfList(this, "ewf", false);
  public get ewf() {
    return this._ewf;
  }
  public putEwf(value: OrgServicepolicyEwf[] | cdktf.IResolvable) {
    this._ewf.internalValue = value;
  }
  public resetEwf() {
    this._ewf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ewfInput() {
    return this._ewf.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp - computed: false, optional: true, required: false
  private _idp = new OrgServicepolicyIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: OrgServicepolicyIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // local_routing - computed: false, optional: true, required: false
  private _localRouting?: boolean | cdktf.IResolvable; 
  public get localRouting() {
    return this.getBooleanAttribute('local_routing');
  }
  public set localRouting(value: boolean | cdktf.IResolvable) {
    this._localRouting = value;
  }
  public resetLocalRouting() {
    this._localRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoutingInput() {
    return this._localRouting;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // path_preference - computed: false, optional: true, required: false
  private _pathPreference?: string; 
  public get pathPreference() {
    return this.getStringAttribute('path_preference');
  }
  public set pathPreference(value: string) {
    this._pathPreference = value;
  }
  public resetPathPreference() {
    this._pathPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPreferenceInput() {
    return this._pathPreference;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // ssl_proxy - computed: false, optional: true, required: false
  private _sslProxy = new OrgServicepolicySslProxyOutputReference(this, "ssl_proxy");
  public get sslProxy() {
    return this._sslProxy;
  }
  public putSslProxy(value: OrgServicepolicySslProxy) {
    this._sslProxy.internalValue = value;
  }
  public resetSslProxy() {
    this._sslProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProxyInput() {
    return this._sslProxy.internalValue;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aamw: orgServicepolicyAamwToTerraform(this._aamw.internalValue),
      action: cdktf.stringToTerraform(this._action),
      antivirus: orgServicepolicyAntivirusToTerraform(this._antivirus.internalValue),
      appqoe: orgServicepolicyAppqoeToTerraform(this._appqoe.internalValue),
      ewf: cdktf.listMapper(orgServicepolicyEwfToTerraform, false)(this._ewf.internalValue),
      idp: orgServicepolicyIdpToTerraform(this._idp.internalValue),
      local_routing: cdktf.booleanToTerraform(this._localRouting),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      path_preference: cdktf.stringToTerraform(this._pathPreference),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      ssl_proxy: orgServicepolicySslProxyToTerraform(this._sslProxy.internalValue),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aamw: {
        value: orgServicepolicyAamwToHclTerraform(this._aamw.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgServicepolicyAamw",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antivirus: {
        value: orgServicepolicyAntivirusToHclTerraform(this._antivirus.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgServicepolicyAntivirus",
      },
      appqoe: {
        value: orgServicepolicyAppqoeToHclTerraform(this._appqoe.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgServicepolicyAppqoe",
      },
      ewf: {
        value: cdktf.listMapperHcl(orgServicepolicyEwfToHclTerraform, false)(this._ewf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgServicepolicyEwfList",
      },
      idp: {
        value: orgServicepolicyIdpToHclTerraform(this._idp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgServicepolicyIdp",
      },
      local_routing: {
        value: cdktf.booleanToHclTerraform(this._localRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_preference: {
        value: cdktf.stringToHclTerraform(this._pathPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_proxy: {
        value: orgServicepolicySslProxyToHclTerraform(this._sslProxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgServicepolicySslProxy",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
