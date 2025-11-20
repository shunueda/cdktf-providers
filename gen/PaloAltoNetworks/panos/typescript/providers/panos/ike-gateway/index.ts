// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IkeGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#authentication IkeGateway#authentication}
  */
  readonly authentication?: IkeGatewayAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#comment IkeGateway#comment}
  */
  readonly comment?: string;
  /**
  * Disable the IKE gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#disabled IkeGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * use IPv6 for the IKE gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ipv6 IkeGateway#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#local_address IkeGateway#local_address}
  */
  readonly localAddress?: IkeGatewayLocalAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#local_id IkeGateway#local_id}
  */
  readonly localId?: IkeGatewayLocalId;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#location IkeGateway#location}
  */
  readonly location: IkeGatewayLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#name IkeGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#peer_address IkeGateway#peer_address}
  */
  readonly peerAddress?: IkeGatewayPeerAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#peer_id IkeGateway#peer_id}
  */
  readonly peerId?: IkeGatewayPeerId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#protocol IkeGateway#protocol}
  */
  readonly protocol?: IkeGatewayProtocol;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#protocol_common IkeGateway#protocol_common}
  */
  readonly protocolCommon?: IkeGatewayProtocolCommon;
}
export interface IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl {
  /**
  * The host and directory part of URL for local certificates(http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#base_url IkeGateway#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Use hash-and-url for local certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function ikeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToTerraform(struct?: IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function ikeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToHclTerraform(struct?: IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._enable = value.enable;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface IkeGatewayAuthenticationCertificateLocalCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#hash_and_url IkeGateway#hash_and_url}
  */
  readonly hashAndUrl?: IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl;
  /**
  * Local certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#name IkeGateway#name}
  */
  readonly name?: string;
}

export function ikeGatewayAuthenticationCertificateLocalCertificateToTerraform(struct?: IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_and_url: ikeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToTerraform(struct!.hashAndUrl),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ikeGatewayAuthenticationCertificateLocalCertificateToHclTerraform(struct?: IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_and_url: {
      value: ikeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToHclTerraform(struct!.hashAndUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayAuthenticationCertificateLocalCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAndUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAndUrl = this._hashAndUrl?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashAndUrl.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashAndUrl.internalValue = value.hashAndUrl;
      this._name = value.name;
    }
  }

  // hash_and_url - computed: false, optional: true, required: false
  private _hashAndUrl = new IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlOutputReference(this, "hash_and_url");
  public get hashAndUrl() {
    return this._hashAndUrl;
  }
  public putHashAndUrl(value: IkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl) {
    this._hashAndUrl.internalValue = value;
  }
  public resetHashAndUrl() {
    this._hashAndUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAndUrlInput() {
    return this._hashAndUrl.internalValue;
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
}
export interface IkeGatewayAuthenticationCertificate {
  /**
  * Permit peer identification and certificate payload identification mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#allow_id_payload_mismatch IkeGateway#allow_id_payload_mismatch}
  */
  readonly allowIdPayloadMismatch?: boolean | cdktf.IResolvable;
  /**
  * Profile for certificate valdiation during IKE negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#certificate_profile IkeGateway#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#local_certificate IkeGateway#local_certificate}
  */
  readonly localCertificate?: IkeGatewayAuthenticationCertificateLocalCertificate;
  /**
  * Enable strict validation of peer's extended key use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#strict_validation_revocation IkeGateway#strict_validation_revocation}
  */
  readonly strictValidationRevocation?: boolean | cdktf.IResolvable;
  /**
  * Use management interface IP as source to retrieve http certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#use_management_as_source IkeGateway#use_management_as_source}
  */
  readonly useManagementAsSource?: boolean | cdktf.IResolvable;
}

export function ikeGatewayAuthenticationCertificateToTerraform(struct?: IkeGatewayAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_id_payload_mismatch: cdktf.booleanToTerraform(struct!.allowIdPayloadMismatch),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    local_certificate: ikeGatewayAuthenticationCertificateLocalCertificateToTerraform(struct!.localCertificate),
    strict_validation_revocation: cdktf.booleanToTerraform(struct!.strictValidationRevocation),
    use_management_as_source: cdktf.booleanToTerraform(struct!.useManagementAsSource),
  }
}


export function ikeGatewayAuthenticationCertificateToHclTerraform(struct?: IkeGatewayAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_id_payload_mismatch: {
      value: cdktf.booleanToHclTerraform(struct!.allowIdPayloadMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_certificate: {
      value: ikeGatewayAuthenticationCertificateLocalCertificateToHclTerraform(struct!.localCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayAuthenticationCertificateLocalCertificate",
    },
    strict_validation_revocation: {
      value: cdktf.booleanToHclTerraform(struct!.strictValidationRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_management_as_source: {
      value: cdktf.booleanToHclTerraform(struct!.useManagementAsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayAuthenticationCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayAuthenticationCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIdPayloadMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIdPayloadMismatch = this._allowIdPayloadMismatch;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._localCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertificate = this._localCertificate?.internalValue;
    }
    if (this._strictValidationRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictValidationRevocation = this._strictValidationRevocation;
    }
    if (this._useManagementAsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.useManagementAsSource = this._useManagementAsSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayAuthenticationCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIdPayloadMismatch = undefined;
      this._certificateProfile = undefined;
      this._localCertificate.internalValue = undefined;
      this._strictValidationRevocation = undefined;
      this._useManagementAsSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIdPayloadMismatch = value.allowIdPayloadMismatch;
      this._certificateProfile = value.certificateProfile;
      this._localCertificate.internalValue = value.localCertificate;
      this._strictValidationRevocation = value.strictValidationRevocation;
      this._useManagementAsSource = value.useManagementAsSource;
    }
  }

  // allow_id_payload_mismatch - computed: false, optional: true, required: false
  private _allowIdPayloadMismatch?: boolean | cdktf.IResolvable; 
  public get allowIdPayloadMismatch() {
    return this.getBooleanAttribute('allow_id_payload_mismatch');
  }
  public set allowIdPayloadMismatch(value: boolean | cdktf.IResolvable) {
    this._allowIdPayloadMismatch = value;
  }
  public resetAllowIdPayloadMismatch() {
    this._allowIdPayloadMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIdPayloadMismatchInput() {
    return this._allowIdPayloadMismatch;
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

  // local_certificate - computed: false, optional: true, required: false
  private _localCertificate = new IkeGatewayAuthenticationCertificateLocalCertificateOutputReference(this, "local_certificate");
  public get localCertificate() {
    return this._localCertificate;
  }
  public putLocalCertificate(value: IkeGatewayAuthenticationCertificateLocalCertificate) {
    this._localCertificate.internalValue = value;
  }
  public resetLocalCertificate() {
    this._localCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertificateInput() {
    return this._localCertificate.internalValue;
  }

  // strict_validation_revocation - computed: false, optional: true, required: false
  private _strictValidationRevocation?: boolean | cdktf.IResolvable; 
  public get strictValidationRevocation() {
    return this.getBooleanAttribute('strict_validation_revocation');
  }
  public set strictValidationRevocation(value: boolean | cdktf.IResolvable) {
    this._strictValidationRevocation = value;
  }
  public resetStrictValidationRevocation() {
    this._strictValidationRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictValidationRevocationInput() {
    return this._strictValidationRevocation;
  }

  // use_management_as_source - computed: false, optional: true, required: false
  private _useManagementAsSource?: boolean | cdktf.IResolvable; 
  public get useManagementAsSource() {
    return this.getBooleanAttribute('use_management_as_source');
  }
  public set useManagementAsSource(value: boolean | cdktf.IResolvable) {
    this._useManagementAsSource = value;
  }
  public resetUseManagementAsSource() {
    this._useManagementAsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useManagementAsSourceInput() {
    return this._useManagementAsSource;
  }
}
export interface IkeGatewayAuthenticationPreSharedKey {
  /**
  * the string used as pre-shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#key IkeGateway#key}
  */
  readonly key?: string;
}

export function ikeGatewayAuthenticationPreSharedKeyToTerraform(struct?: IkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ikeGatewayAuthenticationPreSharedKeyToHclTerraform(struct?: IkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayAuthenticationPreSharedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: true, required: false
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
}
export interface IkeGatewayAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#certificate IkeGateway#certificate}
  */
  readonly certificate?: IkeGatewayAuthenticationCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#pre_shared_key IkeGateway#pre_shared_key}
  */
  readonly preSharedKey?: IkeGatewayAuthenticationPreSharedKey;
}

export function ikeGatewayAuthenticationToTerraform(struct?: IkeGatewayAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: ikeGatewayAuthenticationCertificateToTerraform(struct!.certificate),
    pre_shared_key: ikeGatewayAuthenticationPreSharedKeyToTerraform(struct!.preSharedKey),
  }
}


export function ikeGatewayAuthenticationToHclTerraform(struct?: IkeGatewayAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: ikeGatewayAuthenticationCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayAuthenticationCertificate",
    },
    pre_shared_key: {
      value: ikeGatewayAuthenticationPreSharedKeyToHclTerraform(struct!.preSharedKey),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayAuthenticationPreSharedKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._preSharedKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._preSharedKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._preSharedKey.internalValue = value.preSharedKey;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new IkeGatewayAuthenticationCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: IkeGatewayAuthenticationCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey = new IkeGatewayAuthenticationPreSharedKeyOutputReference(this, "pre_shared_key");
  public get preSharedKey() {
    return this._preSharedKey;
  }
  public putPreSharedKey(value: IkeGatewayAuthenticationPreSharedKey) {
    this._preSharedKey.internalValue = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey.internalValue;
  }
}
export interface IkeGatewayLocalAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#floating_ip IkeGateway#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * local gateway end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#interface IkeGateway#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ip IkeGateway#ip}
  */
  readonly ip?: string;
}

export function ikeGatewayLocalAddressToTerraform(struct?: IkeGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function ikeGatewayLocalAddressToHclTerraform(struct?: IkeGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface IkeGatewayLocalId {
  /**
  * Local ID string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#id IkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#type IkeGateway#type}
  */
  readonly type?: string;
}

export function ikeGatewayLocalIdToTerraform(struct?: IkeGatewayLocalId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ikeGatewayLocalIdToHclTerraform(struct?: IkeGatewayLocalId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayLocalIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayLocalId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocalId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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
}
export interface IkeGatewayLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ngfw_device IkeGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function ikeGatewayLocationNgfwToTerraform(struct?: IkeGatewayLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function ikeGatewayLocationNgfwToHclTerraform(struct?: IkeGatewayLocationNgfw | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
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
}
export interface IkeGatewayLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#name IkeGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ngfw_device IkeGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#panorama_device IkeGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function ikeGatewayLocationTemplateToTerraform(struct?: IkeGatewayLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function ikeGatewayLocationTemplateToHclTerraform(struct?: IkeGatewayLocationTemplate | cdktf.IResolvable): any {
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

export class IkeGatewayLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayLocationTemplate | cdktf.IResolvable | undefined {
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
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
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
      this._ngfwDevice = value.ngfwDevice;
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
}
export interface IkeGatewayLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#name IkeGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ngfw_device IkeGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#panorama_device IkeGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function ikeGatewayLocationTemplateStackToTerraform(struct?: IkeGatewayLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function ikeGatewayLocationTemplateStackToHclTerraform(struct?: IkeGatewayLocationTemplateStack | cdktf.IResolvable): any {
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

export class IkeGatewayLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayLocationTemplateStack | cdktf.IResolvable | undefined {
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
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
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
      this._ngfwDevice = value.ngfwDevice;
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
}
export interface IkeGatewayLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ngfw IkeGateway#ngfw}
  */
  readonly ngfw?: IkeGatewayLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#template IkeGateway#template}
  */
  readonly template?: IkeGatewayLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#template_stack IkeGateway#template_stack}
  */
  readonly templateStack?: IkeGatewayLocationTemplateStack;
}

export function ikeGatewayLocationToTerraform(struct?: IkeGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: ikeGatewayLocationNgfwToTerraform(struct!.ngfw),
    template: ikeGatewayLocationTemplateToTerraform(struct!.template),
    template_stack: ikeGatewayLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function ikeGatewayLocationToHclTerraform(struct?: IkeGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: ikeGatewayLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayLocationNgfw",
    },
    template: {
      value: ikeGatewayLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayLocationTemplate",
    },
    template_stack: {
      value: ikeGatewayLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new IkeGatewayLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: IkeGatewayLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new IkeGatewayLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: IkeGatewayLocationTemplate) {
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
  private _templateStack = new IkeGatewayLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: IkeGatewayLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}
export interface IkeGatewayPeerAddressDynamic {
}

export function ikeGatewayPeerAddressDynamicToTerraform(struct?: IkeGatewayPeerAddressDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ikeGatewayPeerAddressDynamicToHclTerraform(struct?: IkeGatewayPeerAddressDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IkeGatewayPeerAddressDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayPeerAddressDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayPeerAddressDynamic | cdktf.IResolvable | undefined) {
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
export interface IkeGatewayPeerAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#dynamic IkeGateway#dynamic}
  */
  readonly dynamic?: IkeGatewayPeerAddressDynamic;
  /**
  * peer gateway FQDN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#fqdn IkeGateway#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer gateway has static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ip IkeGateway#ip}
  */
  readonly ip?: string;
}

export function ikeGatewayPeerAddressToTerraform(struct?: IkeGatewayPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: ikeGatewayPeerAddressDynamicToTerraform(struct!.dynamic),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function ikeGatewayPeerAddressToHclTerraform(struct?: IkeGatewayPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: ikeGatewayPeerAddressDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayPeerAddressDynamic",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayPeerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayPeerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
      this._fqdn = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
      this._fqdn = value.fqdn;
      this._ip = value.ip;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic = new IkeGatewayPeerAddressDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: IkeGatewayPeerAddressDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface IkeGatewayPeerId {
  /**
  * Peer ID string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#id IkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable peer ID wildcard match for certificate authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#matching IkeGateway#matching}
  */
  readonly matching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#type IkeGateway#type}
  */
  readonly type?: string;
}

export function ikeGatewayPeerIdToTerraform(struct?: IkeGatewayPeerId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    matching: cdktf.stringToTerraform(struct!.matching),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ikeGatewayPeerIdToHclTerraform(struct?: IkeGatewayPeerId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching: {
      value: cdktf.stringToHclTerraform(struct!.matching),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayPeerIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayPeerId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matching !== undefined) {
      hasAnyValues = true;
      internalValueResult.matching = this._matching;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayPeerId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._matching = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._matching = value.matching;
      this._type = value.type;
    }
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

  // matching - computed: true, optional: true, required: false
  private _matching?: string; 
  public get matching() {
    return this.getStringAttribute('matching');
  }
  public set matching(value: string) {
    this._matching = value;
  }
  public resetMatching() {
    this._matching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching;
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
}
export interface IkeGatewayProtocolIkev1Dpd {
  /**
  * Enable Dead-Peer-Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * sending interval for probing packets (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#interval IkeGateway#interval}
  */
  readonly interval?: number;
  /**
  * number of retries before disconnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#retry IkeGateway#retry}
  */
  readonly retry?: number;
}

export function ikeGatewayProtocolIkev1DpdToTerraform(struct?: IkeGatewayProtocolIkev1Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    retry: cdktf.numberToTerraform(struct!.retry),
  }
}


export function ikeGatewayProtocolIkev1DpdToHclTerraform(struct?: IkeGatewayProtocolIkev1Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolIkev1DpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolIkev1Dpd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev1Dpd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._retry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._interval = value.interval;
      this._retry = value.retry;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }
}
export interface IkeGatewayProtocolIkev1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#dpd IkeGateway#dpd}
  */
  readonly dpd?: IkeGatewayProtocolIkev1Dpd;
  /**
  * Exchange mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#exchange_mode IkeGateway#exchange_mode}
  */
  readonly exchangeMode?: string;
  /**
  * IKE SA crypto profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ike_crypto_profile IkeGateway#ike_crypto_profile}
  */
  readonly ikeCryptoProfile?: string;
}

export function ikeGatewayProtocolIkev1ToTerraform(struct?: IkeGatewayProtocolIkev1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd: ikeGatewayProtocolIkev1DpdToTerraform(struct!.dpd),
    exchange_mode: cdktf.stringToTerraform(struct!.exchangeMode),
    ike_crypto_profile: cdktf.stringToTerraform(struct!.ikeCryptoProfile),
  }
}


export function ikeGatewayProtocolIkev1ToHclTerraform(struct?: IkeGatewayProtocolIkev1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd: {
      value: ikeGatewayProtocolIkev1DpdToHclTerraform(struct!.dpd),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayProtocolIkev1Dpd",
    },
    exchange_mode: {
      value: cdktf.stringToHclTerraform(struct!.exchangeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_crypto_profile: {
      value: cdktf.stringToHclTerraform(struct!.ikeCryptoProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolIkev1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolIkev1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpd = this._dpd?.internalValue;
    }
    if (this._exchangeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.exchangeMode = this._exchangeMode;
    }
    if (this._ikeCryptoProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCryptoProfile = this._ikeCryptoProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dpd.internalValue = undefined;
      this._exchangeMode = undefined;
      this._ikeCryptoProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dpd.internalValue = value.dpd;
      this._exchangeMode = value.exchangeMode;
      this._ikeCryptoProfile = value.ikeCryptoProfile;
    }
  }

  // dpd - computed: false, optional: true, required: false
  private _dpd = new IkeGatewayProtocolIkev1DpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: IkeGatewayProtocolIkev1Dpd) {
    this._dpd.internalValue = value;
  }
  public resetDpd() {
    this._dpd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd.internalValue;
  }

  // exchange_mode - computed: true, optional: true, required: false
  private _exchangeMode?: string; 
  public get exchangeMode() {
    return this.getStringAttribute('exchange_mode');
  }
  public set exchangeMode(value: string) {
    this._exchangeMode = value;
  }
  public resetExchangeMode() {
    this._exchangeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeModeInput() {
    return this._exchangeMode;
  }

  // ike_crypto_profile - computed: true, optional: true, required: false
  private _ikeCryptoProfile?: string; 
  public get ikeCryptoProfile() {
    return this.getStringAttribute('ike_crypto_profile');
  }
  public set ikeCryptoProfile(value: string) {
    this._ikeCryptoProfile = value;
  }
  public resetIkeCryptoProfile() {
    this._ikeCryptoProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCryptoProfileInput() {
    return this._ikeCryptoProfile;
  }
}
export interface IkeGatewayProtocolIkev2Dpd {
  /**
  * Enable sending empty information liveness check message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * delay interval before sending probing packets (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#interval IkeGateway#interval}
  */
  readonly interval?: number;
}

export function ikeGatewayProtocolIkev2DpdToTerraform(struct?: IkeGatewayProtocolIkev2Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function ikeGatewayProtocolIkev2DpdToHclTerraform(struct?: IkeGatewayProtocolIkev2Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolIkev2DpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolIkev2Dpd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev2Dpd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._interval = value.interval;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface IkeGatewayProtocolIkev2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#dpd IkeGateway#dpd}
  */
  readonly dpd?: IkeGatewayProtocolIkev2Dpd;
  /**
  * IKE SA crypto profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ike_crypto_profile IkeGateway#ike_crypto_profile}
  */
  readonly ikeCryptoProfile?: string;
  /**
  * Require cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#require_cookie IkeGateway#require_cookie}
  */
  readonly requireCookie?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolIkev2ToTerraform(struct?: IkeGatewayProtocolIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd: ikeGatewayProtocolIkev2DpdToTerraform(struct!.dpd),
    ike_crypto_profile: cdktf.stringToTerraform(struct!.ikeCryptoProfile),
    require_cookie: cdktf.booleanToTerraform(struct!.requireCookie),
  }
}


export function ikeGatewayProtocolIkev2ToHclTerraform(struct?: IkeGatewayProtocolIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd: {
      value: ikeGatewayProtocolIkev2DpdToHclTerraform(struct!.dpd),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayProtocolIkev2Dpd",
    },
    ike_crypto_profile: {
      value: cdktf.stringToHclTerraform(struct!.ikeCryptoProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.requireCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolIkev2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolIkev2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpd = this._dpd?.internalValue;
    }
    if (this._ikeCryptoProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCryptoProfile = this._ikeCryptoProfile;
    }
    if (this._requireCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCookie = this._requireCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dpd.internalValue = undefined;
      this._ikeCryptoProfile = undefined;
      this._requireCookie = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dpd.internalValue = value.dpd;
      this._ikeCryptoProfile = value.ikeCryptoProfile;
      this._requireCookie = value.requireCookie;
    }
  }

  // dpd - computed: false, optional: true, required: false
  private _dpd = new IkeGatewayProtocolIkev2DpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: IkeGatewayProtocolIkev2Dpd) {
    this._dpd.internalValue = value;
  }
  public resetDpd() {
    this._dpd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd.internalValue;
  }

  // ike_crypto_profile - computed: true, optional: true, required: false
  private _ikeCryptoProfile?: string; 
  public get ikeCryptoProfile() {
    return this.getStringAttribute('ike_crypto_profile');
  }
  public set ikeCryptoProfile(value: string) {
    this._ikeCryptoProfile = value;
  }
  public resetIkeCryptoProfile() {
    this._ikeCryptoProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCryptoProfileInput() {
    return this._ikeCryptoProfile;
  }

  // require_cookie - computed: false, optional: true, required: false
  private _requireCookie?: boolean | cdktf.IResolvable; 
  public get requireCookie() {
    return this.getBooleanAttribute('require_cookie');
  }
  public set requireCookie(value: boolean | cdktf.IResolvable) {
    this._requireCookie = value;
  }
  public resetRequireCookie() {
    this._requireCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCookieInput() {
    return this._requireCookie;
  }
}
export interface IkeGatewayProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ikev1 IkeGateway#ikev1}
  */
  readonly ikev1?: IkeGatewayProtocolIkev1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#ikev2 IkeGateway#ikev2}
  */
  readonly ikev2?: IkeGatewayProtocolIkev2;
  /**
  * IKE protocol version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#version IkeGateway#version}
  */
  readonly version?: string;
}

export function ikeGatewayProtocolToTerraform(struct?: IkeGatewayProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ikev1: ikeGatewayProtocolIkev1ToTerraform(struct!.ikev1),
    ikev2: ikeGatewayProtocolIkev2ToTerraform(struct!.ikev2),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ikeGatewayProtocolToHclTerraform(struct?: IkeGatewayProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ikev1: {
      value: ikeGatewayProtocolIkev1ToHclTerraform(struct!.ikev1),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayProtocolIkev1",
    },
    ikev2: {
      value: ikeGatewayProtocolIkev2ToHclTerraform(struct!.ikev2),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayProtocolIkev2",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikev1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikev1 = this._ikev1?.internalValue;
    }
    if (this._ikev2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikev2 = this._ikev2?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikev1.internalValue = undefined;
      this._ikev2.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikev1.internalValue = value.ikev1;
      this._ikev2.internalValue = value.ikev2;
      this._version = value.version;
    }
  }

  // ikev1 - computed: false, optional: true, required: false
  private _ikev1 = new IkeGatewayProtocolIkev1OutputReference(this, "ikev1");
  public get ikev1() {
    return this._ikev1;
  }
  public putIkev1(value: IkeGatewayProtocolIkev1) {
    this._ikev1.internalValue = value;
  }
  public resetIkev1() {
    this._ikev1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev1Input() {
    return this._ikev1.internalValue;
  }

  // ikev2 - computed: false, optional: true, required: false
  private _ikev2 = new IkeGatewayProtocolIkev2OutputReference(this, "ikev2");
  public get ikev2() {
    return this._ikev2;
  }
  public putIkev2(value: IkeGatewayProtocolIkev2) {
    this._ikev2.internalValue = value;
  }
  public resetIkev2() {
    this._ikev2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2Input() {
    return this._ikev2.internalValue;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface IkeGatewayProtocolCommonFragmentation {
  /**
  * Enable IKE fragmentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolCommonFragmentationToTerraform(struct?: IkeGatewayProtocolCommonFragmentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function ikeGatewayProtocolCommonFragmentationToHclTerraform(struct?: IkeGatewayProtocolCommonFragmentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolCommonFragmentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolCommonFragmentation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolCommonFragmentation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface IkeGatewayProtocolCommonNatTraversal {
  /**
  * Enable NAT-Traversal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * sending interval for NAT keep-alive packets (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#keep_alive_interval IkeGateway#keep_alive_interval}
  */
  readonly keepAliveInterval?: number;
  /**
  * Enable UDP checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#udp_checksum_enable IkeGateway#udp_checksum_enable}
  */
  readonly udpChecksumEnable?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolCommonNatTraversalToTerraform(struct?: IkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    keep_alive_interval: cdktf.numberToTerraform(struct!.keepAliveInterval),
    udp_checksum_enable: cdktf.booleanToTerraform(struct!.udpChecksumEnable),
  }
}


export function ikeGatewayProtocolCommonNatTraversalToHclTerraform(struct?: IkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_alive_interval: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_checksum_enable: {
      value: cdktf.booleanToHclTerraform(struct!.udpChecksumEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolCommonNatTraversalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._keepAliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveInterval = this._keepAliveInterval;
    }
    if (this._udpChecksumEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpChecksumEnable = this._udpChecksumEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._keepAliveInterval = undefined;
      this._udpChecksumEnable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._keepAliveInterval = value.keepAliveInterval;
      this._udpChecksumEnable = value.udpChecksumEnable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // keep_alive_interval - computed: true, optional: true, required: false
  private _keepAliveInterval?: number; 
  public get keepAliveInterval() {
    return this.getNumberAttribute('keep_alive_interval');
  }
  public set keepAliveInterval(value: number) {
    this._keepAliveInterval = value;
  }
  public resetKeepAliveInterval() {
    this._keepAliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveIntervalInput() {
    return this._keepAliveInterval;
  }

  // udp_checksum_enable - computed: false, optional: true, required: false
  private _udpChecksumEnable?: boolean | cdktf.IResolvable; 
  public get udpChecksumEnable() {
    return this.getBooleanAttribute('udp_checksum_enable');
  }
  public set udpChecksumEnable(value: boolean | cdktf.IResolvable) {
    this._udpChecksumEnable = value;
  }
  public resetUdpChecksumEnable() {
    this._udpChecksumEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpChecksumEnableInput() {
    return this._udpChecksumEnable;
  }
}
export interface IkeGatewayProtocolCommon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#fragmentation IkeGateway#fragmentation}
  */
  readonly fragmentation?: IkeGatewayProtocolCommonFragmentation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#nat_traversal IkeGateway#nat_traversal}
  */
  readonly natTraversal?: IkeGatewayProtocolCommonNatTraversal;
  /**
  * Enable passive mode (responder only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#passive_mode IkeGateway#passive_mode}
  */
  readonly passiveMode?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolCommonToTerraform(struct?: IkeGatewayProtocolCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragmentation: ikeGatewayProtocolCommonFragmentationToTerraform(struct!.fragmentation),
    nat_traversal: ikeGatewayProtocolCommonNatTraversalToTerraform(struct!.natTraversal),
    passive_mode: cdktf.booleanToTerraform(struct!.passiveMode),
  }
}


export function ikeGatewayProtocolCommonToHclTerraform(struct?: IkeGatewayProtocolCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragmentation: {
      value: ikeGatewayProtocolCommonFragmentationToHclTerraform(struct!.fragmentation),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayProtocolCommonFragmentation",
    },
    nat_traversal: {
      value: ikeGatewayProtocolCommonNatTraversalToHclTerraform(struct!.natTraversal),
      isBlock: true,
      type: "struct",
      storageClassType: "IkeGatewayProtocolCommonNatTraversal",
    },
    passive_mode: {
      value: cdktf.booleanToHclTerraform(struct!.passiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkeGatewayProtocolCommonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IkeGatewayProtocolCommon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragmentation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentation = this._fragmentation?.internalValue;
    }
    if (this._natTraversal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal?.internalValue;
    }
    if (this._passiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveMode = this._passiveMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolCommon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fragmentation.internalValue = undefined;
      this._natTraversal.internalValue = undefined;
      this._passiveMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fragmentation.internalValue = value.fragmentation;
      this._natTraversal.internalValue = value.natTraversal;
      this._passiveMode = value.passiveMode;
    }
  }

  // fragmentation - computed: false, optional: true, required: false
  private _fragmentation = new IkeGatewayProtocolCommonFragmentationOutputReference(this, "fragmentation");
  public get fragmentation() {
    return this._fragmentation;
  }
  public putFragmentation(value: IkeGatewayProtocolCommonFragmentation) {
    this._fragmentation.internalValue = value;
  }
  public resetFragmentation() {
    this._fragmentation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationInput() {
    return this._fragmentation.internalValue;
  }

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal = new IkeGatewayProtocolCommonNatTraversalOutputReference(this, "nat_traversal");
  public get natTraversal() {
    return this._natTraversal;
  }
  public putNatTraversal(value: IkeGatewayProtocolCommonNatTraversal) {
    this._natTraversal.internalValue = value;
  }
  public resetNatTraversal() {
    this._natTraversal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal.internalValue;
  }

  // passive_mode - computed: false, optional: true, required: false
  private _passiveMode?: boolean | cdktf.IResolvable; 
  public get passiveMode() {
    return this.getBooleanAttribute('passive_mode');
  }
  public set passiveMode(value: boolean | cdktf.IResolvable) {
    this._passiveMode = value;
  }
  public resetPassiveMode() {
    this._passiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveModeInput() {
    return this._passiveMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway panos_ike_gateway}
*/
export class IkeGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ike_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IkeGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IkeGateway to import
  * @param importFromId The id of the existing IkeGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IkeGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ike_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/ike_gateway panos_ike_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IkeGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: IkeGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ike_gateway',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authentication.internalValue = config.authentication;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._ipv6 = config.ipv6;
    this._localAddress.internalValue = config.localAddress;
    this._localId.internalValue = config.localId;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._peerAddress.internalValue = config.peerAddress;
    this._peerId.internalValue = config.peerId;
    this._protocol.internalValue = config.protocol;
    this._protocolCommon.internalValue = config.protocolCommon;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: true, required: false
  private _authentication = new IkeGatewayAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IkeGatewayAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new IkeGatewayLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: IkeGatewayLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // local_id - computed: false, optional: true, required: false
  private _localId = new IkeGatewayLocalIdOutputReference(this, "local_id");
  public get localId() {
    return this._localId;
  }
  public putLocalId(value: IkeGatewayLocalId) {
    this._localId.internalValue = value;
  }
  public resetLocalId() {
    this._localId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new IkeGatewayLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: IkeGatewayLocation) {
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

  // peer_address - computed: false, optional: true, required: false
  private _peerAddress = new IkeGatewayPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: IkeGatewayPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // peer_id - computed: false, optional: true, required: false
  private _peerId = new IkeGatewayPeerIdOutputReference(this, "peer_id");
  public get peerId() {
    return this._peerId;
  }
  public putPeerId(value: IkeGatewayPeerId) {
    this._peerId.internalValue = value;
  }
  public resetPeerId() {
    this._peerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new IkeGatewayProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: IkeGatewayProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // protocol_common - computed: false, optional: true, required: false
  private _protocolCommon = new IkeGatewayProtocolCommonOutputReference(this, "protocol_common");
  public get protocolCommon() {
    return this._protocolCommon;
  }
  public putProtocolCommon(value: IkeGatewayProtocolCommon) {
    this._protocolCommon.internalValue = value;
  }
  public resetProtocolCommon() {
    this._protocolCommon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolCommonInput() {
    return this._protocolCommon.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: ikeGatewayAuthenticationToTerraform(this._authentication.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      local_address: ikeGatewayLocalAddressToTerraform(this._localAddress.internalValue),
      local_id: ikeGatewayLocalIdToTerraform(this._localId.internalValue),
      location: ikeGatewayLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      peer_address: ikeGatewayPeerAddressToTerraform(this._peerAddress.internalValue),
      peer_id: ikeGatewayPeerIdToTerraform(this._peerId.internalValue),
      protocol: ikeGatewayProtocolToTerraform(this._protocol.internalValue),
      protocol_common: ikeGatewayProtocolCommonToTerraform(this._protocolCommon.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: ikeGatewayAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayAuthentication",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6: {
        value: cdktf.booleanToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_address: {
        value: ikeGatewayLocalAddressToHclTerraform(this._localAddress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayLocalAddress",
      },
      local_id: {
        value: ikeGatewayLocalIdToHclTerraform(this._localId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayLocalId",
      },
      location: {
        value: ikeGatewayLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_address: {
        value: ikeGatewayPeerAddressToHclTerraform(this._peerAddress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayPeerAddress",
      },
      peer_id: {
        value: ikeGatewayPeerIdToHclTerraform(this._peerId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayPeerId",
      },
      protocol: {
        value: ikeGatewayProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayProtocol",
      },
      protocol_common: {
        value: ikeGatewayProtocolCommonToHclTerraform(this._protocolCommon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IkeGatewayProtocolCommon",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
