// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusServerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#device RadiusServerProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#folder RadiusServerProfile#folder}
  */
  readonly folder?: string;
  /**
  * The name of the RADIUS server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#name RadiusServerProfile#name}
  */
  readonly name: string;
  /**
  * The RADIUS authentication protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#protocol RadiusServerProfile#protocol}
  */
  readonly protocol: RadiusServerProfileProtocol;
  /**
  * The number of RADIUS server retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#retries RadiusServerProfile#retries}
  */
  readonly retries?: number;
  /**
  * Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#server RadiusServerProfile#server}
  */
  readonly server: RadiusServerProfileServer[] | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#snippet RadiusServerProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * The RADIUS server authentication timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#timeout RadiusServerProfile#timeout}
  */
  readonly timeout?: number;
}
export interface RadiusServerProfileProtocolEAPTTLSWithPAP {
  /**
  * Anon outer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#anon_outer_id RadiusServerProfile#anon_outer_id}
  */
  readonly anonOuterId?: boolean | cdktf.IResolvable;
  /**
  * Radius cert profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#radius_cert_profile RadiusServerProfile#radius_cert_profile}
  */
  readonly radiusCertProfile?: string;
}

export function radiusServerProfileProtocolEAPTTLSWithPAPToTerraform(struct?: RadiusServerProfileProtocolEAPTTLSWithPAP | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anon_outer_id: cdktf.booleanToTerraform(struct!.anonOuterId),
    radius_cert_profile: cdktf.stringToTerraform(struct!.radiusCertProfile),
  }
}


export function radiusServerProfileProtocolEAPTTLSWithPAPToHclTerraform(struct?: RadiusServerProfileProtocolEAPTTLSWithPAP | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anon_outer_id: {
      value: cdktf.booleanToHclTerraform(struct!.anonOuterId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_cert_profile: {
      value: cdktf.stringToHclTerraform(struct!.radiusCertProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerProfileProtocolEAPTTLSWithPAPOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RadiusServerProfileProtocolEAPTTLSWithPAP | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonOuterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonOuterId = this._anonOuterId;
    }
    if (this._radiusCertProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCertProfile = this._radiusCertProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerProfileProtocolEAPTTLSWithPAP | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonOuterId = undefined;
      this._radiusCertProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonOuterId = value.anonOuterId;
      this._radiusCertProfile = value.radiusCertProfile;
    }
  }

  // anon_outer_id - computed: false, optional: true, required: false
  private _anonOuterId?: boolean | cdktf.IResolvable; 
  public get anonOuterId() {
    return this.getBooleanAttribute('anon_outer_id');
  }
  public set anonOuterId(value: boolean | cdktf.IResolvable) {
    this._anonOuterId = value;
  }
  public resetAnonOuterId() {
    this._anonOuterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonOuterIdInput() {
    return this._anonOuterId;
  }

  // radius_cert_profile - computed: false, optional: true, required: false
  private _radiusCertProfile?: string; 
  public get radiusCertProfile() {
    return this.getStringAttribute('radius_cert_profile');
  }
  public set radiusCertProfile(value: string) {
    this._radiusCertProfile = value;
  }
  public resetRadiusCertProfile() {
    this._radiusCertProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCertProfileInput() {
    return this._radiusCertProfile;
  }
}
export interface RadiusServerProfileProtocolPEAPMSCHAPv2 {
  /**
  * Allow pwd change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#allow_pwd_change RadiusServerProfile#allow_pwd_change}
  */
  readonly allowPwdChange?: boolean | cdktf.IResolvable;
  /**
  * Anon outer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#anon_outer_id RadiusServerProfile#anon_outer_id}
  */
  readonly anonOuterId?: boolean | cdktf.IResolvable;
  /**
  * Radius cert profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#radius_cert_profile RadiusServerProfile#radius_cert_profile}
  */
  readonly radiusCertProfile?: string;
}

export function radiusServerProfileProtocolPEAPMSCHAPv2ToTerraform(struct?: RadiusServerProfileProtocolPEAPMSCHAPv2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_pwd_change: cdktf.booleanToTerraform(struct!.allowPwdChange),
    anon_outer_id: cdktf.booleanToTerraform(struct!.anonOuterId),
    radius_cert_profile: cdktf.stringToTerraform(struct!.radiusCertProfile),
  }
}


export function radiusServerProfileProtocolPEAPMSCHAPv2ToHclTerraform(struct?: RadiusServerProfileProtocolPEAPMSCHAPv2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_pwd_change: {
      value: cdktf.booleanToHclTerraform(struct!.allowPwdChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anon_outer_id: {
      value: cdktf.booleanToHclTerraform(struct!.anonOuterId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_cert_profile: {
      value: cdktf.stringToHclTerraform(struct!.radiusCertProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerProfileProtocolPEAPMSCHAPv2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RadiusServerProfileProtocolPEAPMSCHAPv2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPwdChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPwdChange = this._allowPwdChange;
    }
    if (this._anonOuterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonOuterId = this._anonOuterId;
    }
    if (this._radiusCertProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCertProfile = this._radiusCertProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerProfileProtocolPEAPMSCHAPv2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPwdChange = undefined;
      this._anonOuterId = undefined;
      this._radiusCertProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPwdChange = value.allowPwdChange;
      this._anonOuterId = value.anonOuterId;
      this._radiusCertProfile = value.radiusCertProfile;
    }
  }

  // allow_pwd_change - computed: false, optional: true, required: false
  private _allowPwdChange?: boolean | cdktf.IResolvable; 
  public get allowPwdChange() {
    return this.getBooleanAttribute('allow_pwd_change');
  }
  public set allowPwdChange(value: boolean | cdktf.IResolvable) {
    this._allowPwdChange = value;
  }
  public resetAllowPwdChange() {
    this._allowPwdChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPwdChangeInput() {
    return this._allowPwdChange;
  }

  // anon_outer_id - computed: false, optional: true, required: false
  private _anonOuterId?: boolean | cdktf.IResolvable; 
  public get anonOuterId() {
    return this.getBooleanAttribute('anon_outer_id');
  }
  public set anonOuterId(value: boolean | cdktf.IResolvable) {
    this._anonOuterId = value;
  }
  public resetAnonOuterId() {
    this._anonOuterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonOuterIdInput() {
    return this._anonOuterId;
  }

  // radius_cert_profile - computed: false, optional: true, required: false
  private _radiusCertProfile?: string; 
  public get radiusCertProfile() {
    return this.getStringAttribute('radius_cert_profile');
  }
  public set radiusCertProfile(value: string) {
    this._radiusCertProfile = value;
  }
  public resetRadiusCertProfile() {
    this._radiusCertProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCertProfileInput() {
    return this._radiusCertProfile;
  }
}
export interface RadiusServerProfileProtocolPEAPWithGTC {
  /**
  * Anon outer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#anon_outer_id RadiusServerProfile#anon_outer_id}
  */
  readonly anonOuterId?: boolean | cdktf.IResolvable;
  /**
  * Radius cert profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#radius_cert_profile RadiusServerProfile#radius_cert_profile}
  */
  readonly radiusCertProfile?: string;
}

export function radiusServerProfileProtocolPEAPWithGTCToTerraform(struct?: RadiusServerProfileProtocolPEAPWithGTC | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anon_outer_id: cdktf.booleanToTerraform(struct!.anonOuterId),
    radius_cert_profile: cdktf.stringToTerraform(struct!.radiusCertProfile),
  }
}


export function radiusServerProfileProtocolPEAPWithGTCToHclTerraform(struct?: RadiusServerProfileProtocolPEAPWithGTC | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anon_outer_id: {
      value: cdktf.booleanToHclTerraform(struct!.anonOuterId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    radius_cert_profile: {
      value: cdktf.stringToHclTerraform(struct!.radiusCertProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerProfileProtocolPEAPWithGTCOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RadiusServerProfileProtocolPEAPWithGTC | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonOuterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonOuterId = this._anonOuterId;
    }
    if (this._radiusCertProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusCertProfile = this._radiusCertProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerProfileProtocolPEAPWithGTC | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonOuterId = undefined;
      this._radiusCertProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonOuterId = value.anonOuterId;
      this._radiusCertProfile = value.radiusCertProfile;
    }
  }

  // anon_outer_id - computed: false, optional: true, required: false
  private _anonOuterId?: boolean | cdktf.IResolvable; 
  public get anonOuterId() {
    return this.getBooleanAttribute('anon_outer_id');
  }
  public set anonOuterId(value: boolean | cdktf.IResolvable) {
    this._anonOuterId = value;
  }
  public resetAnonOuterId() {
    this._anonOuterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonOuterIdInput() {
    return this._anonOuterId;
  }

  // radius_cert_profile - computed: false, optional: true, required: false
  private _radiusCertProfile?: string; 
  public get radiusCertProfile() {
    return this.getStringAttribute('radius_cert_profile');
  }
  public set radiusCertProfile(value: string) {
    this._radiusCertProfile = value;
  }
  public resetRadiusCertProfile() {
    this._radiusCertProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCertProfileInput() {
    return this._radiusCertProfile;
  }
}
export interface RadiusServerProfileProtocol {
  /**
  * C h a p
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#c_h_a_p RadiusServerProfile#c_h_a_p}
  */
  readonly cHAP?: string;
  /**
  * E a p t t l s with p a p
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#e_a_p__t_t_l_s_with__p_a_p RadiusServerProfile#e_a_p__t_t_l_s_with__p_a_p}
  */
  readonly eAPTTLSWithPAP?: RadiusServerProfileProtocolEAPTTLSWithPAP;
  /**
  * P a p
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#p_a_p RadiusServerProfile#p_a_p}
  */
  readonly pAP?: string;
  /**
  * P e a p m s c h a pv2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#p_e_a_p__m_s_c_h_a_pv2 RadiusServerProfile#p_e_a_p__m_s_c_h_a_pv2}
  */
  readonly pEAPMSCHAPv2?: RadiusServerProfileProtocolPEAPMSCHAPv2;
  /**
  * P e a p with g t c
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#p_e_a_p_with__g_t_c RadiusServerProfile#p_e_a_p_with__g_t_c}
  */
  readonly pEAPWithGTC?: RadiusServerProfileProtocolPEAPWithGTC;
}

export function radiusServerProfileProtocolToTerraform(struct?: RadiusServerProfileProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    c_h_a_p: cdktf.stringToTerraform(struct!.cHAP),
    e_a_p__t_t_l_s_with__p_a_p: radiusServerProfileProtocolEAPTTLSWithPAPToTerraform(struct!.eAPTTLSWithPAP),
    p_a_p: cdktf.stringToTerraform(struct!.pAP),
    p_e_a_p__m_s_c_h_a_pv2: radiusServerProfileProtocolPEAPMSCHAPv2ToTerraform(struct!.pEAPMSCHAPv2),
    p_e_a_p_with__g_t_c: radiusServerProfileProtocolPEAPWithGTCToTerraform(struct!.pEAPWithGTC),
  }
}


export function radiusServerProfileProtocolToHclTerraform(struct?: RadiusServerProfileProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    c_h_a_p: {
      value: cdktf.stringToHclTerraform(struct!.cHAP),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_a_p__t_t_l_s_with__p_a_p: {
      value: radiusServerProfileProtocolEAPTTLSWithPAPToHclTerraform(struct!.eAPTTLSWithPAP),
      isBlock: true,
      type: "struct",
      storageClassType: "RadiusServerProfileProtocolEAPTTLSWithPAP",
    },
    p_a_p: {
      value: cdktf.stringToHclTerraform(struct!.pAP),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p_e_a_p__m_s_c_h_a_pv2: {
      value: radiusServerProfileProtocolPEAPMSCHAPv2ToHclTerraform(struct!.pEAPMSCHAPv2),
      isBlock: true,
      type: "struct",
      storageClassType: "RadiusServerProfileProtocolPEAPMSCHAPv2",
    },
    p_e_a_p_with__g_t_c: {
      value: radiusServerProfileProtocolPEAPWithGTCToHclTerraform(struct!.pEAPWithGTC),
      isBlock: true,
      type: "struct",
      storageClassType: "RadiusServerProfileProtocolPEAPWithGTC",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerProfileProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RadiusServerProfileProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cHAP !== undefined) {
      hasAnyValues = true;
      internalValueResult.cHAP = this._cHAP;
    }
    if (this._eAPTTLSWithPAP?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eAPTTLSWithPAP = this._eAPTTLSWithPAP?.internalValue;
    }
    if (this._pAP !== undefined) {
      hasAnyValues = true;
      internalValueResult.pAP = this._pAP;
    }
    if (this._pEAPMSCHAPv2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pEAPMSCHAPv2 = this._pEAPMSCHAPv2?.internalValue;
    }
    if (this._pEAPWithGTC?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pEAPWithGTC = this._pEAPWithGTC?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerProfileProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cHAP = undefined;
      this._eAPTTLSWithPAP.internalValue = undefined;
      this._pAP = undefined;
      this._pEAPMSCHAPv2.internalValue = undefined;
      this._pEAPWithGTC.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cHAP = value.cHAP;
      this._eAPTTLSWithPAP.internalValue = value.eAPTTLSWithPAP;
      this._pAP = value.pAP;
      this._pEAPMSCHAPv2.internalValue = value.pEAPMSCHAPv2;
      this._pEAPWithGTC.internalValue = value.pEAPWithGTC;
    }
  }

  // c_h_a_p - computed: false, optional: true, required: false
  private _cHAP?: string; 
  public get cHAP() {
    return this.getStringAttribute('c_h_a_p');
  }
  public set cHAP(value: string) {
    this._cHAP = value;
  }
  public resetCHAP() {
    this._cHAP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cHAPInput() {
    return this._cHAP;
  }

  // e_a_p__t_t_l_s_with__p_a_p - computed: false, optional: true, required: false
  private _eAPTTLSWithPAP = new RadiusServerProfileProtocolEAPTTLSWithPAPOutputReference(this, "e_a_p__t_t_l_s_with__p_a_p");
  public get eAPTTLSWithPAP() {
    return this._eAPTTLSWithPAP;
  }
  public putEAPTTLSWithPAP(value: RadiusServerProfileProtocolEAPTTLSWithPAP) {
    this._eAPTTLSWithPAP.internalValue = value;
  }
  public resetEAPTTLSWithPAP() {
    this._eAPTTLSWithPAP.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eAPTTLSWithPAPInput() {
    return this._eAPTTLSWithPAP.internalValue;
  }

  // p_a_p - computed: false, optional: true, required: false
  private _pAP?: string; 
  public get pAP() {
    return this.getStringAttribute('p_a_p');
  }
  public set pAP(value: string) {
    this._pAP = value;
  }
  public resetPAP() {
    this._pAP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pAPInput() {
    return this._pAP;
  }

  // p_e_a_p__m_s_c_h_a_pv2 - computed: false, optional: true, required: false
  private _pEAPMSCHAPv2 = new RadiusServerProfileProtocolPEAPMSCHAPv2OutputReference(this, "p_e_a_p__m_s_c_h_a_pv2");
  public get pEAPMSCHAPv2() {
    return this._pEAPMSCHAPv2;
  }
  public putPEAPMSCHAPv2(value: RadiusServerProfileProtocolPEAPMSCHAPv2) {
    this._pEAPMSCHAPv2.internalValue = value;
  }
  public resetPEAPMSCHAPv2() {
    this._pEAPMSCHAPv2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pEAPMSCHAPv2Input() {
    return this._pEAPMSCHAPv2.internalValue;
  }

  // p_e_a_p_with__g_t_c - computed: false, optional: true, required: false
  private _pEAPWithGTC = new RadiusServerProfileProtocolPEAPWithGTCOutputReference(this, "p_e_a_p_with__g_t_c");
  public get pEAPWithGTC() {
    return this._pEAPWithGTC;
  }
  public putPEAPWithGTC(value: RadiusServerProfileProtocolPEAPWithGTC) {
    this._pEAPWithGTC.internalValue = value;
  }
  public resetPEAPWithGTC() {
    this._pEAPWithGTC.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pEAPWithGTCInput() {
    return this._pEAPWithGTC.internalValue;
  }
}
export interface RadiusServerProfileServer {
  /**
  * The IP address of the RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#ip_address RadiusServerProfile#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The name of the RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#name RadiusServerProfile#name}
  */
  readonly name?: string;
  /**
  * The RADIUS server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#port RadiusServerProfile#port}
  */
  readonly port?: number;
  /**
  * The RADIUS secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#secret RadiusServerProfile#secret}
  */
  readonly secret?: string;
}

export function radiusServerProfileServerToTerraform(struct?: RadiusServerProfileServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function radiusServerProfileServerToHclTerraform(struct?: RadiusServerProfileServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerProfileServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RadiusServerProfileServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerProfileServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._port = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._port = value.port;
      this._secret = value.secret;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // name - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}

export class RadiusServerProfileServerList extends cdktf.ComplexList {
  public internalValue? : RadiusServerProfileServer[] | cdktf.IResolvable

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
  public get(index: number): RadiusServerProfileServerOutputReference {
    return new RadiusServerProfileServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile scm_radius_server_profile}
*/
export class RadiusServerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_radius_server_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusServerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusServerProfile to import
  * @param importFromId The id of the existing RadiusServerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusServerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_radius_server_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/radius_server_profile scm_radius_server_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusServerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusServerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_radius_server_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._protocol.internalValue = config.protocol;
    this._retries = config.retries;
    this._server.internalValue = config.server;
    this._snippet = config.snippet;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // protocol - computed: false, optional: false, required: true
  private _protocol = new RadiusServerProfileProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: RadiusServerProfileProtocol) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // server - computed: false, optional: false, required: true
  private _server = new RadiusServerProfileServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: RadiusServerProfileServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // timeout - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      protocol: radiusServerProfileProtocolToTerraform(this._protocol.internalValue),
      retries: cdktf.numberToTerraform(this._retries),
      server: cdktf.listMapper(radiusServerProfileServerToTerraform, false)(this._server.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: radiusServerProfileProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RadiusServerProfileProtocol",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.listMapperHcl(radiusServerProfileServerToHclTerraform, false)(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RadiusServerProfileServerList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
