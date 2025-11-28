// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosIkeGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#authentication DataPanosIkeGateway#authentication}
  */
  readonly authentication?: DataPanosIkeGatewayAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#comment DataPanosIkeGateway#comment}
  */
  readonly comment?: string;
  /**
  * Disable the IKE gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#disabled DataPanosIkeGateway#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * use IPv6 for the IKE gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ipv6 DataPanosIkeGateway#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#local_address DataPanosIkeGateway#local_address}
  */
  readonly localAddress?: DataPanosIkeGatewayLocalAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#local_id DataPanosIkeGateway#local_id}
  */
  readonly localId?: DataPanosIkeGatewayLocalId;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#location DataPanosIkeGateway#location}
  */
  readonly location: DataPanosIkeGatewayLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#name DataPanosIkeGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#peer_address DataPanosIkeGateway#peer_address}
  */
  readonly peerAddress?: DataPanosIkeGatewayPeerAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#peer_id DataPanosIkeGateway#peer_id}
  */
  readonly peerId?: DataPanosIkeGatewayPeerId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#protocol DataPanosIkeGateway#protocol}
  */
  readonly protocol?: DataPanosIkeGatewayProtocol;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#protocol_common DataPanosIkeGateway#protocol_common}
  */
  readonly protocolCommon?: DataPanosIkeGatewayProtocolCommon;
}
export interface DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl {
  /**
  * The host and directory part of URL for local certificates(http only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#base_url DataPanosIkeGateway#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Use hash-and-url for local certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#enable DataPanosIkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToTerraform(struct?: DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToHclTerraform(struct?: DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl | cdktf.IResolvable | undefined) {
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

  // base_url - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayAuthenticationCertificateLocalCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#hash_and_url DataPanosIkeGateway#hash_and_url}
  */
  readonly hashAndUrl?: DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl;
  /**
  * Local certificate name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#name DataPanosIkeGateway#name}
  */
  readonly name?: string;
}

export function dataPanosIkeGatewayAuthenticationCertificateLocalCertificateToTerraform(struct?: DataPanosIkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_and_url: dataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToTerraform(struct!.hashAndUrl),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosIkeGatewayAuthenticationCertificateLocalCertificateToHclTerraform(struct?: DataPanosIkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_and_url: {
      value: dataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlToHclTerraform(struct!.hashAndUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl",
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

export class DataPanosIkeGatewayAuthenticationCertificateLocalCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayAuthenticationCertificateLocalCertificate | cdktf.IResolvable | undefined) {
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

  // hash_and_url - computed: true, optional: true, required: false
  private _hashAndUrl = new DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrlOutputReference(this, "hash_and_url");
  public get hashAndUrl() {
    return this._hashAndUrl;
  }
  public putHashAndUrl(value: DataPanosIkeGatewayAuthenticationCertificateLocalCertificateHashAndUrl) {
    this._hashAndUrl.internalValue = value;
  }
  public resetHashAndUrl() {
    this._hashAndUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAndUrlInput() {
    return this._hashAndUrl.internalValue;
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
}
export interface DataPanosIkeGatewayAuthenticationCertificate {
  /**
  * Permit peer identification and certificate payload identification mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#allow_id_payload_mismatch DataPanosIkeGateway#allow_id_payload_mismatch}
  */
  readonly allowIdPayloadMismatch?: boolean | cdktf.IResolvable;
  /**
  * Profile for certificate valdiation during IKE negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#certificate_profile DataPanosIkeGateway#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#local_certificate DataPanosIkeGateway#local_certificate}
  */
  readonly localCertificate?: DataPanosIkeGatewayAuthenticationCertificateLocalCertificate;
  /**
  * Enable strict validation of peer's extended key use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#strict_validation_revocation DataPanosIkeGateway#strict_validation_revocation}
  */
  readonly strictValidationRevocation?: boolean | cdktf.IResolvable;
  /**
  * Use management interface IP as source to retrieve http certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#use_management_as_source DataPanosIkeGateway#use_management_as_source}
  */
  readonly useManagementAsSource?: boolean | cdktf.IResolvable;
}

export function dataPanosIkeGatewayAuthenticationCertificateToTerraform(struct?: DataPanosIkeGatewayAuthenticationCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_id_payload_mismatch: cdktf.booleanToTerraform(struct!.allowIdPayloadMismatch),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    local_certificate: dataPanosIkeGatewayAuthenticationCertificateLocalCertificateToTerraform(struct!.localCertificate),
    strict_validation_revocation: cdktf.booleanToTerraform(struct!.strictValidationRevocation),
    use_management_as_source: cdktf.booleanToTerraform(struct!.useManagementAsSource),
  }
}


export function dataPanosIkeGatewayAuthenticationCertificateToHclTerraform(struct?: DataPanosIkeGatewayAuthenticationCertificate | cdktf.IResolvable): any {
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
      value: dataPanosIkeGatewayAuthenticationCertificateLocalCertificateToHclTerraform(struct!.localCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayAuthenticationCertificateLocalCertificate",
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

export class DataPanosIkeGatewayAuthenticationCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayAuthenticationCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayAuthenticationCertificate | cdktf.IResolvable | undefined) {
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

  // allow_id_payload_mismatch - computed: true, optional: true, required: false
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

  // certificate_profile - computed: true, optional: true, required: false
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

  // local_certificate - computed: true, optional: true, required: false
  private _localCertificate = new DataPanosIkeGatewayAuthenticationCertificateLocalCertificateOutputReference(this, "local_certificate");
  public get localCertificate() {
    return this._localCertificate;
  }
  public putLocalCertificate(value: DataPanosIkeGatewayAuthenticationCertificateLocalCertificate) {
    this._localCertificate.internalValue = value;
  }
  public resetLocalCertificate() {
    this._localCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertificateInput() {
    return this._localCertificate.internalValue;
  }

  // strict_validation_revocation - computed: true, optional: true, required: false
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

  // use_management_as_source - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayAuthenticationPreSharedKey {
  /**
  * the string used as pre-shared key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#key DataPanosIkeGateway#key}
  */
  readonly key?: string;
}

export function dataPanosIkeGatewayAuthenticationPreSharedKeyToTerraform(struct?: DataPanosIkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataPanosIkeGatewayAuthenticationPreSharedKeyToHclTerraform(struct?: DataPanosIkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayAuthenticationPreSharedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayAuthenticationPreSharedKey | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#certificate DataPanosIkeGateway#certificate}
  */
  readonly certificate?: DataPanosIkeGatewayAuthenticationCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#pre_shared_key DataPanosIkeGateway#pre_shared_key}
  */
  readonly preSharedKey?: DataPanosIkeGatewayAuthenticationPreSharedKey;
}

export function dataPanosIkeGatewayAuthenticationToTerraform(struct?: DataPanosIkeGatewayAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataPanosIkeGatewayAuthenticationCertificateToTerraform(struct!.certificate),
    pre_shared_key: dataPanosIkeGatewayAuthenticationPreSharedKeyToTerraform(struct!.preSharedKey),
  }
}


export function dataPanosIkeGatewayAuthenticationToHclTerraform(struct?: DataPanosIkeGatewayAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataPanosIkeGatewayAuthenticationCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayAuthenticationCertificate",
    },
    pre_shared_key: {
      value: dataPanosIkeGatewayAuthenticationPreSharedKeyToHclTerraform(struct!.preSharedKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayAuthenticationPreSharedKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIkeGatewayAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayAuthentication | cdktf.IResolvable | undefined) {
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

  // certificate - computed: true, optional: true, required: false
  private _certificate = new DataPanosIkeGatewayAuthenticationCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataPanosIkeGatewayAuthenticationCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // pre_shared_key - computed: true, optional: true, required: false
  private _preSharedKey = new DataPanosIkeGatewayAuthenticationPreSharedKeyOutputReference(this, "pre_shared_key");
  public get preSharedKey() {
    return this._preSharedKey;
  }
  public putPreSharedKey(value: DataPanosIkeGatewayAuthenticationPreSharedKey) {
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
export interface DataPanosIkeGatewayLocalAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#floating_ip DataPanosIkeGateway#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * local gateway end-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#interface DataPanosIkeGateway#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ip DataPanosIkeGateway#ip}
  */
  readonly ip?: string;
}

export function dataPanosIkeGatewayLocalAddressToTerraform(struct?: DataPanosIkeGatewayLocalAddress | cdktf.IResolvable): any {
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


export function dataPanosIkeGatewayLocalAddressToHclTerraform(struct?: DataPanosIkeGatewayLocalAddress | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayLocalAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayLocalAddress | cdktf.IResolvable | undefined) {
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

  // floating_ip - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayLocalId {
  /**
  * Local ID string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#id DataPanosIkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#type DataPanosIkeGateway#type}
  */
  readonly type?: string;
}

export function dataPanosIkeGatewayLocalIdToTerraform(struct?: DataPanosIkeGatewayLocalId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataPanosIkeGatewayLocalIdToHclTerraform(struct?: DataPanosIkeGatewayLocalId | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayLocalIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayLocalId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayLocalId | cdktf.IResolvable | undefined) {
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

  // type - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ngfw_device DataPanosIkeGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosIkeGatewayLocationNgfwToTerraform(struct?: DataPanosIkeGatewayLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosIkeGatewayLocationNgfwToHclTerraform(struct?: DataPanosIkeGatewayLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#name DataPanosIkeGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ngfw_device DataPanosIkeGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#panorama_device DataPanosIkeGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosIkeGatewayLocationTemplateToTerraform(struct?: DataPanosIkeGatewayLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosIkeGatewayLocationTemplateToHclTerraform(struct?: DataPanosIkeGatewayLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#name DataPanosIkeGateway#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ngfw_device DataPanosIkeGateway#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#panorama_device DataPanosIkeGateway#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosIkeGatewayLocationTemplateStackToTerraform(struct?: DataPanosIkeGatewayLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosIkeGatewayLocationTemplateStackToHclTerraform(struct?: DataPanosIkeGatewayLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ngfw DataPanosIkeGateway#ngfw}
  */
  readonly ngfw?: DataPanosIkeGatewayLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#template DataPanosIkeGateway#template}
  */
  readonly template?: DataPanosIkeGatewayLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#template_stack DataPanosIkeGateway#template_stack}
  */
  readonly templateStack?: DataPanosIkeGatewayLocationTemplateStack;
}

export function dataPanosIkeGatewayLocationToTerraform(struct?: DataPanosIkeGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosIkeGatewayLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosIkeGatewayLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosIkeGatewayLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosIkeGatewayLocationToHclTerraform(struct?: DataPanosIkeGatewayLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosIkeGatewayLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayLocationNgfw",
    },
    template: {
      value: dataPanosIkeGatewayLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayLocationTemplate",
    },
    template_stack: {
      value: dataPanosIkeGatewayLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosIkeGatewayLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosIkeGatewayLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosIkeGatewayLocationNgfw) {
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
  private _template = new DataPanosIkeGatewayLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosIkeGatewayLocationTemplate) {
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
  private _templateStack = new DataPanosIkeGatewayLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosIkeGatewayLocationTemplateStack) {
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
export interface DataPanosIkeGatewayPeerAddressDynamic {
}

export function dataPanosIkeGatewayPeerAddressDynamicToTerraform(struct?: DataPanosIkeGatewayPeerAddressDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosIkeGatewayPeerAddressDynamicToHclTerraform(struct?: DataPanosIkeGatewayPeerAddressDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosIkeGatewayPeerAddressDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayPeerAddressDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosIkeGatewayPeerAddressDynamic | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayPeerAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#dynamic DataPanosIkeGateway#dynamic}
  */
  readonly dynamic?: DataPanosIkeGatewayPeerAddressDynamic;
  /**
  * peer gateway FQDN name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#fqdn DataPanosIkeGateway#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer gateway has static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ip DataPanosIkeGateway#ip}
  */
  readonly ip?: string;
}

export function dataPanosIkeGatewayPeerAddressToTerraform(struct?: DataPanosIkeGatewayPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: dataPanosIkeGatewayPeerAddressDynamicToTerraform(struct!.dynamic),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosIkeGatewayPeerAddressToHclTerraform(struct?: DataPanosIkeGatewayPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: dataPanosIkeGatewayPeerAddressDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayPeerAddressDynamic",
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

export class DataPanosIkeGatewayPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayPeerAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayPeerAddress | cdktf.IResolvable | undefined) {
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

  // dynamic - computed: true, optional: true, required: false
  private _dynamic = new DataPanosIkeGatewayPeerAddressDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: DataPanosIkeGatewayPeerAddressDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // fqdn - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayPeerId {
  /**
  * Peer ID string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#id DataPanosIkeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable peer ID wildcard match for certificate authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#matching DataPanosIkeGateway#matching}
  */
  readonly matching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#type DataPanosIkeGateway#type}
  */
  readonly type?: string;
}

export function dataPanosIkeGatewayPeerIdToTerraform(struct?: DataPanosIkeGatewayPeerId | cdktf.IResolvable): any {
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


export function dataPanosIkeGatewayPeerIdToHclTerraform(struct?: DataPanosIkeGatewayPeerId | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayPeerIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayPeerId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayPeerId | cdktf.IResolvable | undefined) {
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

  // type - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayProtocolIkev1Dpd {
  /**
  * Enable Dead-Peer-Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#enable DataPanosIkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * sending interval for probing packets (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#interval DataPanosIkeGateway#interval}
  */
  readonly interval?: number;
  /**
  * number of retries before disconnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#retry DataPanosIkeGateway#retry}
  */
  readonly retry?: number;
}

export function dataPanosIkeGatewayProtocolIkev1DpdToTerraform(struct?: DataPanosIkeGatewayProtocolIkev1Dpd | cdktf.IResolvable): any {
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


export function dataPanosIkeGatewayProtocolIkev1DpdToHclTerraform(struct?: DataPanosIkeGatewayProtocolIkev1Dpd | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayProtocolIkev1DpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolIkev1Dpd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolIkev1Dpd | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayProtocolIkev1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#dpd DataPanosIkeGateway#dpd}
  */
  readonly dpd?: DataPanosIkeGatewayProtocolIkev1Dpd;
  /**
  * Exchange mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#exchange_mode DataPanosIkeGateway#exchange_mode}
  */
  readonly exchangeMode?: string;
  /**
  * IKE SA crypto profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ike_crypto_profile DataPanosIkeGateway#ike_crypto_profile}
  */
  readonly ikeCryptoProfile?: string;
}

export function dataPanosIkeGatewayProtocolIkev1ToTerraform(struct?: DataPanosIkeGatewayProtocolIkev1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd: dataPanosIkeGatewayProtocolIkev1DpdToTerraform(struct!.dpd),
    exchange_mode: cdktf.stringToTerraform(struct!.exchangeMode),
    ike_crypto_profile: cdktf.stringToTerraform(struct!.ikeCryptoProfile),
  }
}


export function dataPanosIkeGatewayProtocolIkev1ToHclTerraform(struct?: DataPanosIkeGatewayProtocolIkev1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd: {
      value: dataPanosIkeGatewayProtocolIkev1DpdToHclTerraform(struct!.dpd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayProtocolIkev1Dpd",
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

export class DataPanosIkeGatewayProtocolIkev1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolIkev1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolIkev1 | cdktf.IResolvable | undefined) {
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

  // dpd - computed: true, optional: true, required: false
  private _dpd = new DataPanosIkeGatewayProtocolIkev1DpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: DataPanosIkeGatewayProtocolIkev1Dpd) {
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
export interface DataPanosIkeGatewayProtocolIkev2Dpd {
  /**
  * Enable sending empty information liveness check message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#enable DataPanosIkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * delay interval before sending probing packets (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#interval DataPanosIkeGateway#interval}
  */
  readonly interval?: number;
}

export function dataPanosIkeGatewayProtocolIkev2DpdToTerraform(struct?: DataPanosIkeGatewayProtocolIkev2Dpd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function dataPanosIkeGatewayProtocolIkev2DpdToHclTerraform(struct?: DataPanosIkeGatewayProtocolIkev2Dpd | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayProtocolIkev2DpdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolIkev2Dpd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolIkev2Dpd | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayProtocolIkev2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#dpd DataPanosIkeGateway#dpd}
  */
  readonly dpd?: DataPanosIkeGatewayProtocolIkev2Dpd;
  /**
  * IKE SA crypto profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ike_crypto_profile DataPanosIkeGateway#ike_crypto_profile}
  */
  readonly ikeCryptoProfile?: string;
  /**
  * Require cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#require_cookie DataPanosIkeGateway#require_cookie}
  */
  readonly requireCookie?: boolean | cdktf.IResolvable;
}

export function dataPanosIkeGatewayProtocolIkev2ToTerraform(struct?: DataPanosIkeGatewayProtocolIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd: dataPanosIkeGatewayProtocolIkev2DpdToTerraform(struct!.dpd),
    ike_crypto_profile: cdktf.stringToTerraform(struct!.ikeCryptoProfile),
    require_cookie: cdktf.booleanToTerraform(struct!.requireCookie),
  }
}


export function dataPanosIkeGatewayProtocolIkev2ToHclTerraform(struct?: DataPanosIkeGatewayProtocolIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd: {
      value: dataPanosIkeGatewayProtocolIkev2DpdToHclTerraform(struct!.dpd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayProtocolIkev2Dpd",
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

export class DataPanosIkeGatewayProtocolIkev2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolIkev2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolIkev2 | cdktf.IResolvable | undefined) {
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

  // dpd - computed: true, optional: true, required: false
  private _dpd = new DataPanosIkeGatewayProtocolIkev2DpdOutputReference(this, "dpd");
  public get dpd() {
    return this._dpd;
  }
  public putDpd(value: DataPanosIkeGatewayProtocolIkev2Dpd) {
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

  // require_cookie - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ikev1 DataPanosIkeGateway#ikev1}
  */
  readonly ikev1?: DataPanosIkeGatewayProtocolIkev1;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#ikev2 DataPanosIkeGateway#ikev2}
  */
  readonly ikev2?: DataPanosIkeGatewayProtocolIkev2;
  /**
  * IKE protocol version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#version DataPanosIkeGateway#version}
  */
  readonly version?: string;
}

export function dataPanosIkeGatewayProtocolToTerraform(struct?: DataPanosIkeGatewayProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ikev1: dataPanosIkeGatewayProtocolIkev1ToTerraform(struct!.ikev1),
    ikev2: dataPanosIkeGatewayProtocolIkev2ToTerraform(struct!.ikev2),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataPanosIkeGatewayProtocolToHclTerraform(struct?: DataPanosIkeGatewayProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ikev1: {
      value: dataPanosIkeGatewayProtocolIkev1ToHclTerraform(struct!.ikev1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayProtocolIkev1",
    },
    ikev2: {
      value: dataPanosIkeGatewayProtocolIkev2ToHclTerraform(struct!.ikev2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayProtocolIkev2",
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

export class DataPanosIkeGatewayProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocol | cdktf.IResolvable | undefined) {
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

  // ikev1 - computed: true, optional: true, required: false
  private _ikev1 = new DataPanosIkeGatewayProtocolIkev1OutputReference(this, "ikev1");
  public get ikev1() {
    return this._ikev1;
  }
  public putIkev1(value: DataPanosIkeGatewayProtocolIkev1) {
    this._ikev1.internalValue = value;
  }
  public resetIkev1() {
    this._ikev1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev1Input() {
    return this._ikev1.internalValue;
  }

  // ikev2 - computed: true, optional: true, required: false
  private _ikev2 = new DataPanosIkeGatewayProtocolIkev2OutputReference(this, "ikev2");
  public get ikev2() {
    return this._ikev2;
  }
  public putIkev2(value: DataPanosIkeGatewayProtocolIkev2) {
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
export interface DataPanosIkeGatewayProtocolCommonFragmentation {
  /**
  * Enable IKE fragmentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#enable DataPanosIkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataPanosIkeGatewayProtocolCommonFragmentationToTerraform(struct?: DataPanosIkeGatewayProtocolCommonFragmentation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataPanosIkeGatewayProtocolCommonFragmentationToHclTerraform(struct?: DataPanosIkeGatewayProtocolCommonFragmentation | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayProtocolCommonFragmentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolCommonFragmentation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolCommonFragmentation | cdktf.IResolvable | undefined) {
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
export interface DataPanosIkeGatewayProtocolCommonNatTraversal {
  /**
  * Enable NAT-Traversal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#enable DataPanosIkeGateway#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * sending interval for NAT keep-alive packets (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#keep_alive_interval DataPanosIkeGateway#keep_alive_interval}
  */
  readonly keepAliveInterval?: number;
  /**
  * Enable UDP checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#udp_checksum_enable DataPanosIkeGateway#udp_checksum_enable}
  */
  readonly udpChecksumEnable?: boolean | cdktf.IResolvable;
}

export function dataPanosIkeGatewayProtocolCommonNatTraversalToTerraform(struct?: DataPanosIkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable): any {
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


export function dataPanosIkeGatewayProtocolCommonNatTraversalToHclTerraform(struct?: DataPanosIkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable): any {
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

export class DataPanosIkeGatewayProtocolCommonNatTraversalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolCommonNatTraversal | cdktf.IResolvable | undefined) {
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

  // udp_checksum_enable - computed: true, optional: true, required: false
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
export interface DataPanosIkeGatewayProtocolCommon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#fragmentation DataPanosIkeGateway#fragmentation}
  */
  readonly fragmentation?: DataPanosIkeGatewayProtocolCommonFragmentation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#nat_traversal DataPanosIkeGateway#nat_traversal}
  */
  readonly natTraversal?: DataPanosIkeGatewayProtocolCommonNatTraversal;
  /**
  * Enable passive mode (responder only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#passive_mode DataPanosIkeGateway#passive_mode}
  */
  readonly passiveMode?: boolean | cdktf.IResolvable;
}

export function dataPanosIkeGatewayProtocolCommonToTerraform(struct?: DataPanosIkeGatewayProtocolCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragmentation: dataPanosIkeGatewayProtocolCommonFragmentationToTerraform(struct!.fragmentation),
    nat_traversal: dataPanosIkeGatewayProtocolCommonNatTraversalToTerraform(struct!.natTraversal),
    passive_mode: cdktf.booleanToTerraform(struct!.passiveMode),
  }
}


export function dataPanosIkeGatewayProtocolCommonToHclTerraform(struct?: DataPanosIkeGatewayProtocolCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragmentation: {
      value: dataPanosIkeGatewayProtocolCommonFragmentationToHclTerraform(struct!.fragmentation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayProtocolCommonFragmentation",
    },
    nat_traversal: {
      value: dataPanosIkeGatewayProtocolCommonNatTraversalToHclTerraform(struct!.natTraversal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosIkeGatewayProtocolCommonNatTraversal",
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

export class DataPanosIkeGatewayProtocolCommonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosIkeGatewayProtocolCommon | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosIkeGatewayProtocolCommon | cdktf.IResolvable | undefined) {
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
  private _fragmentation = new DataPanosIkeGatewayProtocolCommonFragmentationOutputReference(this, "fragmentation");
  public get fragmentation() {
    return this._fragmentation;
  }
  public putFragmentation(value: DataPanosIkeGatewayProtocolCommonFragmentation) {
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
  private _natTraversal = new DataPanosIkeGatewayProtocolCommonNatTraversalOutputReference(this, "nat_traversal");
  public get natTraversal() {
    return this._natTraversal;
  }
  public putNatTraversal(value: DataPanosIkeGatewayProtocolCommonNatTraversal) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway panos_ike_gateway}
*/
export class DataPanosIkeGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ike_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosIkeGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosIkeGateway to import
  * @param importFromId The id of the existing DataPanosIkeGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosIkeGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ike_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/ike_gateway panos_ike_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosIkeGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosIkeGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ike_gateway',
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

  // authentication - computed: true, optional: true, required: false
  private _authentication = new DataPanosIkeGatewayAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataPanosIkeGatewayAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // comment - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
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

  // ipv6 - computed: true, optional: true, required: false
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

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosIkeGatewayLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosIkeGatewayLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // local_id - computed: true, optional: true, required: false
  private _localId = new DataPanosIkeGatewayLocalIdOutputReference(this, "local_id");
  public get localId() {
    return this._localId;
  }
  public putLocalId(value: DataPanosIkeGatewayLocalId) {
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
  private _location = new DataPanosIkeGatewayLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosIkeGatewayLocation) {
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

  // peer_address - computed: true, optional: true, required: false
  private _peerAddress = new DataPanosIkeGatewayPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: DataPanosIkeGatewayPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // peer_id - computed: true, optional: true, required: false
  private _peerId = new DataPanosIkeGatewayPeerIdOutputReference(this, "peer_id");
  public get peerId() {
    return this._peerId;
  }
  public putPeerId(value: DataPanosIkeGatewayPeerId) {
    this._peerId.internalValue = value;
  }
  public resetPeerId() {
    this._peerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId.internalValue;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol = new DataPanosIkeGatewayProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataPanosIkeGatewayProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // protocol_common - computed: true, optional: true, required: false
  private _protocolCommon = new DataPanosIkeGatewayProtocolCommonOutputReference(this, "protocol_common");
  public get protocolCommon() {
    return this._protocolCommon;
  }
  public putProtocolCommon(value: DataPanosIkeGatewayProtocolCommon) {
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
      authentication: dataPanosIkeGatewayAuthenticationToTerraform(this._authentication.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      ipv6: cdktf.booleanToTerraform(this._ipv6),
      local_address: dataPanosIkeGatewayLocalAddressToTerraform(this._localAddress.internalValue),
      local_id: dataPanosIkeGatewayLocalIdToTerraform(this._localId.internalValue),
      location: dataPanosIkeGatewayLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      peer_address: dataPanosIkeGatewayPeerAddressToTerraform(this._peerAddress.internalValue),
      peer_id: dataPanosIkeGatewayPeerIdToTerraform(this._peerId.internalValue),
      protocol: dataPanosIkeGatewayProtocolToTerraform(this._protocol.internalValue),
      protocol_common: dataPanosIkeGatewayProtocolCommonToTerraform(this._protocolCommon.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: dataPanosIkeGatewayAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayAuthentication",
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
        value: dataPanosIkeGatewayLocalAddressToHclTerraform(this._localAddress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayLocalAddress",
      },
      local_id: {
        value: dataPanosIkeGatewayLocalIdToHclTerraform(this._localId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayLocalId",
      },
      location: {
        value: dataPanosIkeGatewayLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_address: {
        value: dataPanosIkeGatewayPeerAddressToHclTerraform(this._peerAddress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayPeerAddress",
      },
      peer_id: {
        value: dataPanosIkeGatewayPeerIdToHclTerraform(this._peerId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayPeerId",
      },
      protocol: {
        value: dataPanosIkeGatewayProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayProtocol",
      },
      protocol_common: {
        value: dataPanosIkeGatewayProtocolCommonToHclTerraform(this._protocolCommon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosIkeGatewayProtocolCommon",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
