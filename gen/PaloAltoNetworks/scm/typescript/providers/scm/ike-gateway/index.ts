// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IkeGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#authentication IkeGateway#authentication}
  */
  readonly authentication: IkeGatewayAuthentication;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#device IkeGateway#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#folder IkeGateway#folder}
  */
  readonly folder?: string;
  /**
  * Local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#local_address IkeGateway#local_address}
  */
  readonly localAddress?: IkeGatewayLocalAddress;
  /**
  * Local id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#local_id IkeGateway#local_id}
  */
  readonly localId?: IkeGatewayLocalId;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#name IkeGateway#name}
  */
  readonly name: string;
  /**
  * Peer address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#peer_address IkeGateway#peer_address}
  */
  readonly peerAddress: IkeGatewayPeerAddress;
  /**
  * Peer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#peer_id IkeGateway#peer_id}
  */
  readonly peerId?: IkeGatewayPeerId;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#protocol IkeGateway#protocol}
  */
  readonly protocol: IkeGatewayProtocol;
  /**
  * Protocol common
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#protocol_common IkeGateway#protocol_common}
  */
  readonly protocolCommon?: IkeGatewayProtocolCommon;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#snippet IkeGateway#snippet}
  */
  readonly snippet?: string;
}
export interface IkeGatewayAuthenticationCertificateLocalCertificate {
  /**
  * Local certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#local_certificate_name IkeGateway#local_certificate_name}
  */
  readonly localCertificateName?: string;
}

export function ikeGatewayAuthenticationCertificateLocalCertificateToTerraform(struct?: IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_certificate_name: cdktf.stringToTerraform(struct!.localCertificateName),
  }
}


export function ikeGatewayAuthenticationCertificateLocalCertificateToHclTerraform(struct?: IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.localCertificateName),
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
    if (this._localCertificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localCertificateName = this._localCertificateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localCertificateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localCertificateName = value.localCertificateName;
    }
  }

  // local_certificate_name - computed: false, optional: true, required: false
  private _localCertificateName?: string; 
  public get localCertificateName() {
    return this.getStringAttribute('local_certificate_name');
  }
  public set localCertificateName(value: string) {
    this._localCertificateName = value;
  }
  public resetLocalCertificateName() {
    this._localCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertificateNameInput() {
    return this._localCertificateName;
  }
}
export interface IkeGatewayAuthenticationCertificate {
  /**
  * Allow id payload mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#allow_id_payload_mismatch IkeGateway#allow_id_payload_mismatch}
  */
  readonly allowIdPayloadMismatch?: boolean | cdktf.IResolvable;
  /**
  * Certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#certificate_profile IkeGateway#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Local certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#local_certificate IkeGateway#local_certificate}
  */
  readonly localCertificate?: IkeGatewayAuthenticationCertificateLocalCertificate;
  /**
  * Strict validation revocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#strict_validation_revocation IkeGateway#strict_validation_revocation}
  */
  readonly strictValidationRevocation?: boolean | cdktf.IResolvable;
  /**
  * Use management as source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#use_management_as_source IkeGateway#use_management_as_source}
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
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#key IkeGateway#key}
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
  * Certificate
  * > ℹ️ **Note:** You must specify exactly one of `certificate` and `pre_shared_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#certificate IkeGateway#certificate}
  */
  readonly certificate?: IkeGatewayAuthenticationCertificate;
  /**
  * Pre shared key
  * > ℹ️ **Note:** You must specify exactly one of `certificate` and `pre_shared_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#pre_shared_key IkeGateway#pre_shared_key}
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
  * Interface variable or hardcoded vlan/loopback. vlan will be passed as default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#interface IkeGateway#interface}
  */
  readonly interface?: string;
}

export function ikeGatewayLocalAddressToTerraform(struct?: IkeGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
  }
}


export function ikeGatewayLocalAddressToHclTerraform(struct?: IkeGatewayLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
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
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
    }
  }

  // interface - computed: true, optional: true, required: false
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
}
export interface IkeGatewayLocalId {
  /**
  * Local ID string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#id IkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#type IkeGateway#type}
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
  * Dynamic
  * > ℹ️ **Note:** You must specify exactly one of `dynamic`, `fqdn`, and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#dynamic IkeGateway#dynamic}
  */
  readonly dynamic?: IkeGatewayPeerAddressDynamic;
  /**
  * peer gateway FQDN name
  * > ℹ️ **Note:** You must specify exactly one of `dynamic`, `fqdn`, and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#fqdn IkeGateway#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer gateway has static IP address
  * > ℹ️ **Note:** You must specify exactly one of `dynamic`, `fqdn`, and `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#ip IkeGateway#ip}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#id IkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#type IkeGateway#type}
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
export interface IkeGatewayProtocolIkev1Dpd {
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolIkev1DpdToTerraform(struct?: IkeGatewayProtocolIkev1Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev1Dpd | cdktf.IResolvable | undefined) {
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
export interface IkeGatewayProtocolIkev1 {
  /**
  * Dpd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#dpd IkeGateway#dpd}
  */
  readonly dpd?: IkeGatewayProtocolIkev1Dpd;
  /**
  * Ike crypto profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#ike_crypto_profile IkeGateway#ike_crypto_profile}
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

  // ike_crypto_profile - computed: false, optional: true, required: false
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
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolIkev2DpdToTerraform(struct?: IkeGatewayProtocolIkev2Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev2Dpd | cdktf.IResolvable | undefined) {
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
export interface IkeGatewayProtocolIkev2 {
  /**
  * Dpd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#dpd IkeGateway#dpd}
  */
  readonly dpd?: IkeGatewayProtocolIkev2Dpd;
  /**
  * Ike crypto profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#ike_crypto_profile IkeGateway#ike_crypto_profile}
  */
  readonly ikeCryptoProfile?: string;
}

export function ikeGatewayProtocolIkev2ToTerraform(struct?: IkeGatewayProtocolIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd: ikeGatewayProtocolIkev2DpdToTerraform(struct!.dpd),
    ike_crypto_profile: cdktf.stringToTerraform(struct!.ikeCryptoProfile),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolIkev2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dpd.internalValue = undefined;
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
      this._ikeCryptoProfile = value.ikeCryptoProfile;
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

  // ike_crypto_profile - computed: false, optional: true, required: false
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
export interface IkeGatewayProtocol {
  /**
  * Ikev1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#ikev1 IkeGateway#ikev1}
  */
  readonly ikev1?: IkeGatewayProtocolIkev1;
  /**
  * Ikev2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#ikev2 IkeGateway#ikev2}
  */
  readonly ikev2?: IkeGatewayProtocolIkev2;
  /**
  * Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#version IkeGateway#version}
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
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
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

  // enable - computed: true, optional: true, required: false
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
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#enable IkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function ikeGatewayProtocolCommonNatTraversalToTerraform(struct?: IkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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
export interface IkeGatewayProtocolCommon {
  /**
  * Fragmentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#fragmentation IkeGateway#fragmentation}
  */
  readonly fragmentation?: IkeGatewayProtocolCommonFragmentation;
  /**
  * Enables NAT traversal for the IKE gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#nat_traversal IkeGateway#nat_traversal}
  */
  readonly natTraversal?: IkeGatewayProtocolCommonNatTraversal;
  /**
  * Passive mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#passive_mode IkeGateway#passive_mode}
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

  // fragmentation - computed: true, optional: true, required: false
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

  // nat_traversal - computed: true, optional: true, required: false
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

  // passive_mode - computed: true, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway scm_ike_gateway}
*/
export class IkeGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_ike_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IkeGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IkeGateway to import
  * @param importFromId The id of the existing IkeGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IkeGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_ike_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/ike_gateway scm_ike_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IkeGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: IkeGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_ike_gateway',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
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
    this._device = config.device;
    this._folder = config.folder;
    this._localAddress.internalValue = config.localAddress;
    this._localId.internalValue = config.localId;
    this._name = config.name;
    this._peerAddress.internalValue = config.peerAddress;
    this._peerId.internalValue = config.peerId;
    this._protocol.internalValue = config.protocol;
    this._protocolCommon.internalValue = config.protocolCommon;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: false, optional: false, required: true
  private _authentication = new IkeGatewayAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: IkeGatewayAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

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

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
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

  // local_address - computed: true, optional: true, required: false
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

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress = new IkeGatewayPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: IkeGatewayPeerAddress) {
    this._peerAddress.internalValue = value;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol = new IkeGatewayProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: IkeGatewayProtocol) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // protocol_common - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: ikeGatewayAuthenticationToTerraform(this._authentication.internalValue),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      local_address: ikeGatewayLocalAddressToTerraform(this._localAddress.internalValue),
      local_id: ikeGatewayLocalIdToTerraform(this._localId.internalValue),
      name: cdktf.stringToTerraform(this._name),
      peer_address: ikeGatewayPeerAddressToTerraform(this._peerAddress.internalValue),
      peer_id: ikeGatewayPeerIdToTerraform(this._peerId.internalValue),
      protocol: ikeGatewayProtocolToTerraform(this._protocol.internalValue),
      protocol_common: ikeGatewayProtocolCommonToTerraform(this._protocolCommon.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
