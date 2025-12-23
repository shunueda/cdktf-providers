// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#accepted_ciphers Sslprofile#accepted_ciphers}
  */
  readonly acceptedCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#allow_legacy_renegotiation Sslprofile#allow_legacy_renegotiation}
  */
  readonly allowLegacyRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#cipher_enums Sslprofile#cipher_enums}
  */
  readonly cipherEnums?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#ciphersuites Sslprofile#ciphersuites}
  */
  readonly ciphersuites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#description Sslprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#dhparam Sslprofile#dhparam}
  */
  readonly dhparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#ec_named_curve Sslprofile#ec_named_curve}
  */
  readonly ecNamedCurve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#enable_early_data Sslprofile#enable_early_data}
  */
  readonly enableEarlyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#enable_ssl_session_reuse Sslprofile#enable_ssl_session_reuse}
  */
  readonly enableSslSessionReuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#id Sslprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#is_federated Sslprofile#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#name Sslprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#prefer_client_cipher_ordering Sslprofile#prefer_client_cipher_ordering}
  */
  readonly preferClientCipherOrdering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#send_close_notify Sslprofile#send_close_notify}
  */
  readonly sendCloseNotify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#signature_algorithm Sslprofile#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#ssl_session_timeout Sslprofile#ssl_session_timeout}
  */
  readonly sslSessionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#tenant_ref Sslprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#type Sslprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#uuid Sslprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * accepted_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#accepted_versions Sslprofile#accepted_versions}
  */
  readonly acceptedVersions: SslprofileAcceptedVersions[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#configpb_attributes Sslprofile#configpb_attributes}
  */
  readonly configpbAttributes?: SslprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#markers Sslprofile#markers}
  */
  readonly markers?: SslprofileMarkers[] | cdktf.IResolvable;
  /**
  * ssl_rating block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#ssl_rating Sslprofile#ssl_rating}
  */
  readonly sslRating?: SslprofileSslRating[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#tags Sslprofile#tags}
  */
  readonly tags?: SslprofileTags[] | cdktf.IResolvable;
}
export interface SslprofileAcceptedVersions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#type Sslprofile#type}
  */
  readonly type: string;
}

export function sslprofileAcceptedVersionsToTerraform(struct?: SslprofileAcceptedVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sslprofileAcceptedVersionsToHclTerraform(struct?: SslprofileAcceptedVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SslprofileAcceptedVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslprofileAcceptedVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslprofileAcceptedVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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
}

export class SslprofileAcceptedVersionsList extends cdktf.ComplexList {
  public internalValue? : SslprofileAcceptedVersions[] | cdktf.IResolvable

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
  public get(index: number): SslprofileAcceptedVersionsOutputReference {
    return new SslprofileAcceptedVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#version Sslprofile#version}
  */
  readonly version?: string;
}

export function sslprofileConfigpbAttributesToTerraform(struct?: SslprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function sslprofileConfigpbAttributesToHclTerraform(struct?: SslprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SslprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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

export class SslprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SslprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SslprofileConfigpbAttributesOutputReference {
    return new SslprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#key Sslprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#values Sslprofile#values}
  */
  readonly values?: string[];
}

export function sslprofileMarkersToTerraform(struct?: SslprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sslprofileMarkersToHclTerraform(struct?: SslprofileMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SslprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : SslprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): SslprofileMarkersOutputReference {
    return new SslprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslprofileSslRating {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#compatibility_rating Sslprofile#compatibility_rating}
  */
  readonly compatibilityRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#performance_rating Sslprofile#performance_rating}
  */
  readonly performanceRating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#security_score Sslprofile#security_score}
  */
  readonly securityScore?: string;
}

export function sslprofileSslRatingToTerraform(struct?: SslprofileSslRating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility_rating: cdktf.stringToTerraform(struct!.compatibilityRating),
    performance_rating: cdktf.stringToTerraform(struct!.performanceRating),
    security_score: cdktf.stringToTerraform(struct!.securityScore),
  }
}


export function sslprofileSslRatingToHclTerraform(struct?: SslprofileSslRating | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compatibility_rating: {
      value: cdktf.stringToHclTerraform(struct!.compatibilityRating),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    performance_rating: {
      value: cdktf.stringToHclTerraform(struct!.performanceRating),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_score: {
      value: cdktf.stringToHclTerraform(struct!.securityScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslprofileSslRatingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslprofileSslRating | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compatibilityRating !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityRating = this._compatibilityRating;
    }
    if (this._performanceRating !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceRating = this._performanceRating;
    }
    if (this._securityScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityScore = this._securityScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslprofileSslRating | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compatibilityRating = undefined;
      this._performanceRating = undefined;
      this._securityScore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compatibilityRating = value.compatibilityRating;
      this._performanceRating = value.performanceRating;
      this._securityScore = value.securityScore;
    }
  }

  // compatibility_rating - computed: true, optional: true, required: false
  private _compatibilityRating?: string; 
  public get compatibilityRating() {
    return this.getStringAttribute('compatibility_rating');
  }
  public set compatibilityRating(value: string) {
    this._compatibilityRating = value;
  }
  public resetCompatibilityRating() {
    this._compatibilityRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityRatingInput() {
    return this._compatibilityRating;
  }

  // performance_rating - computed: true, optional: true, required: false
  private _performanceRating?: string; 
  public get performanceRating() {
    return this.getStringAttribute('performance_rating');
  }
  public set performanceRating(value: string) {
    this._performanceRating = value;
  }
  public resetPerformanceRating() {
    this._performanceRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceRatingInput() {
    return this._performanceRating;
  }

  // security_score - computed: true, optional: true, required: false
  private _securityScore?: string; 
  public get securityScore() {
    return this.getStringAttribute('security_score');
  }
  public set securityScore(value: string) {
    this._securityScore = value;
  }
  public resetSecurityScore() {
    this._securityScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityScoreInput() {
    return this._securityScore;
  }
}

export class SslprofileSslRatingList extends cdktf.ComplexList {
  public internalValue? : SslprofileSslRating[] | cdktf.IResolvable

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
  public get(index: number): SslprofileSslRatingOutputReference {
    return new SslprofileSslRatingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslprofileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#type Sslprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#value Sslprofile#value}
  */
  readonly value: string;
}

export function sslprofileTagsToTerraform(struct?: SslprofileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sslprofileTagsToHclTerraform(struct?: SslprofileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SslprofileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslprofileTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SslprofileTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SslprofileTagsList extends cdktf.ComplexList {
  public internalValue? : SslprofileTags[] | cdktf.IResolvable

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
  public get(index: number): SslprofileTagsOutputReference {
    return new SslprofileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile avi_sslprofile}
*/
export class Sslprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_sslprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslprofile to import
  * @param importFromId The id of the existing Sslprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_sslprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/sslprofile avi_sslprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslprofileConfig
  */
  public constructor(scope: Construct, id: string, config: SslprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_sslprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptedCiphers = config.acceptedCiphers;
    this._allowLegacyRenegotiation = config.allowLegacyRenegotiation;
    this._cipherEnums = config.cipherEnums;
    this._ciphersuites = config.ciphersuites;
    this._description = config.description;
    this._dhparam = config.dhparam;
    this._ecNamedCurve = config.ecNamedCurve;
    this._enableEarlyData = config.enableEarlyData;
    this._enableSslSessionReuse = config.enableSslSessionReuse;
    this._id = config.id;
    this._isFederated = config.isFederated;
    this._name = config.name;
    this._preferClientCipherOrdering = config.preferClientCipherOrdering;
    this._sendCloseNotify = config.sendCloseNotify;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._sslSessionTimeout = config.sslSessionTimeout;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._acceptedVersions.internalValue = config.acceptedVersions;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._sslRating.internalValue = config.sslRating;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_ciphers - computed: false, optional: true, required: false
  private _acceptedCiphers?: string; 
  public get acceptedCiphers() {
    return this.getStringAttribute('accepted_ciphers');
  }
  public set acceptedCiphers(value: string) {
    this._acceptedCiphers = value;
  }
  public resetAcceptedCiphers() {
    this._acceptedCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedCiphersInput() {
    return this._acceptedCiphers;
  }

  // allow_legacy_renegotiation - computed: false, optional: true, required: false
  private _allowLegacyRenegotiation?: string; 
  public get allowLegacyRenegotiation() {
    return this.getStringAttribute('allow_legacy_renegotiation');
  }
  public set allowLegacyRenegotiation(value: string) {
    this._allowLegacyRenegotiation = value;
  }
  public resetAllowLegacyRenegotiation() {
    this._allowLegacyRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLegacyRenegotiationInput() {
    return this._allowLegacyRenegotiation;
  }

  // cipher_enums - computed: false, optional: true, required: false
  private _cipherEnums?: string[]; 
  public get cipherEnums() {
    return this.getListAttribute('cipher_enums');
  }
  public set cipherEnums(value: string[]) {
    this._cipherEnums = value;
  }
  public resetCipherEnums() {
    this._cipherEnums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherEnumsInput() {
    return this._cipherEnums;
  }

  // ciphersuites - computed: false, optional: true, required: false
  private _ciphersuites?: string; 
  public get ciphersuites() {
    return this.getStringAttribute('ciphersuites');
  }
  public set ciphersuites(value: string) {
    this._ciphersuites = value;
  }
  public resetCiphersuites() {
    this._ciphersuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersuitesInput() {
    return this._ciphersuites;
  }

  // description - computed: true, optional: true, required: false
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

  // dhparam - computed: true, optional: true, required: false
  private _dhparam?: string; 
  public get dhparam() {
    return this.getStringAttribute('dhparam');
  }
  public set dhparam(value: string) {
    this._dhparam = value;
  }
  public resetDhparam() {
    this._dhparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhparamInput() {
    return this._dhparam;
  }

  // ec_named_curve - computed: false, optional: true, required: false
  private _ecNamedCurve?: string; 
  public get ecNamedCurve() {
    return this.getStringAttribute('ec_named_curve');
  }
  public set ecNamedCurve(value: string) {
    this._ecNamedCurve = value;
  }
  public resetEcNamedCurve() {
    this._ecNamedCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecNamedCurveInput() {
    return this._ecNamedCurve;
  }

  // enable_early_data - computed: false, optional: true, required: false
  private _enableEarlyData?: string; 
  public get enableEarlyData() {
    return this.getStringAttribute('enable_early_data');
  }
  public set enableEarlyData(value: string) {
    this._enableEarlyData = value;
  }
  public resetEnableEarlyData() {
    this._enableEarlyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEarlyDataInput() {
    return this._enableEarlyData;
  }

  // enable_ssl_session_reuse - computed: false, optional: true, required: false
  private _enableSslSessionReuse?: string; 
  public get enableSslSessionReuse() {
    return this.getStringAttribute('enable_ssl_session_reuse');
  }
  public set enableSslSessionReuse(value: string) {
    this._enableSslSessionReuse = value;
  }
  public resetEnableSslSessionReuse() {
    this._enableSslSessionReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslSessionReuseInput() {
    return this._enableSslSessionReuse;
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

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
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

  // prefer_client_cipher_ordering - computed: false, optional: true, required: false
  private _preferClientCipherOrdering?: string; 
  public get preferClientCipherOrdering() {
    return this.getStringAttribute('prefer_client_cipher_ordering');
  }
  public set preferClientCipherOrdering(value: string) {
    this._preferClientCipherOrdering = value;
  }
  public resetPreferClientCipherOrdering() {
    this._preferClientCipherOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferClientCipherOrderingInput() {
    return this._preferClientCipherOrdering;
  }

  // send_close_notify - computed: false, optional: true, required: false
  private _sendCloseNotify?: string; 
  public get sendCloseNotify() {
    return this.getStringAttribute('send_close_notify');
  }
  public set sendCloseNotify(value: string) {
    this._sendCloseNotify = value;
  }
  public resetSendCloseNotify() {
    this._sendCloseNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCloseNotifyInput() {
    return this._sendCloseNotify;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // ssl_session_timeout - computed: false, optional: true, required: false
  private _sslSessionTimeout?: string; 
  public get sslSessionTimeout() {
    return this.getStringAttribute('ssl_session_timeout');
  }
  public set sslSessionTimeout(value: string) {
    this._sslSessionTimeout = value;
  }
  public resetSslSessionTimeout() {
    this._sslSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionTimeoutInput() {
    return this._sslSessionTimeout;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // accepted_versions - computed: false, optional: false, required: true
  private _acceptedVersions = new SslprofileAcceptedVersionsList(this, "accepted_versions", false);
  public get acceptedVersions() {
    return this._acceptedVersions;
  }
  public putAcceptedVersions(value: SslprofileAcceptedVersions[] | cdktf.IResolvable) {
    this._acceptedVersions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedVersionsInput() {
    return this._acceptedVersions.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SslprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SslprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new SslprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: SslprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // ssl_rating - computed: false, optional: true, required: false
  private _sslRating = new SslprofileSslRatingList(this, "ssl_rating", true);
  public get sslRating() {
    return this._sslRating;
  }
  public putSslRating(value: SslprofileSslRating[] | cdktf.IResolvable) {
    this._sslRating.internalValue = value;
  }
  public resetSslRating() {
    this._sslRating.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRatingInput() {
    return this._sslRating.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new SslprofileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: SslprofileTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_ciphers: cdktf.stringToTerraform(this._acceptedCiphers),
      allow_legacy_renegotiation: cdktf.stringToTerraform(this._allowLegacyRenegotiation),
      cipher_enums: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cipherEnums),
      ciphersuites: cdktf.stringToTerraform(this._ciphersuites),
      description: cdktf.stringToTerraform(this._description),
      dhparam: cdktf.stringToTerraform(this._dhparam),
      ec_named_curve: cdktf.stringToTerraform(this._ecNamedCurve),
      enable_early_data: cdktf.stringToTerraform(this._enableEarlyData),
      enable_ssl_session_reuse: cdktf.stringToTerraform(this._enableSslSessionReuse),
      id: cdktf.stringToTerraform(this._id),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      name: cdktf.stringToTerraform(this._name),
      prefer_client_cipher_ordering: cdktf.stringToTerraform(this._preferClientCipherOrdering),
      send_close_notify: cdktf.stringToTerraform(this._sendCloseNotify),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      ssl_session_timeout: cdktf.stringToTerraform(this._sslSessionTimeout),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      accepted_versions: cdktf.listMapper(sslprofileAcceptedVersionsToTerraform, true)(this._acceptedVersions.internalValue),
      configpb_attributes: cdktf.listMapper(sslprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(sslprofileMarkersToTerraform, true)(this._markers.internalValue),
      ssl_rating: cdktf.listMapper(sslprofileSslRatingToTerraform, true)(this._sslRating.internalValue),
      tags: cdktf.listMapper(sslprofileTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted_ciphers: {
        value: cdktf.stringToHclTerraform(this._acceptedCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_legacy_renegotiation: {
        value: cdktf.stringToHclTerraform(this._allowLegacyRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_enums: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cipherEnums),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ciphersuites: {
        value: cdktf.stringToHclTerraform(this._ciphersuites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhparam: {
        value: cdktf.stringToHclTerraform(this._dhparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ec_named_curve: {
        value: cdktf.stringToHclTerraform(this._ecNamedCurve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_early_data: {
        value: cdktf.stringToHclTerraform(this._enableEarlyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ssl_session_reuse: {
        value: cdktf.stringToHclTerraform(this._enableSslSessionReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
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
      prefer_client_cipher_ordering: {
        value: cdktf.stringToHclTerraform(this._preferClientCipherOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_close_notify: {
        value: cdktf.stringToHclTerraform(this._sendCloseNotify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_session_timeout: {
        value: cdktf.stringToHclTerraform(this._sslSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accepted_versions: {
        value: cdktf.listMapperHcl(sslprofileAcceptedVersionsToHclTerraform, true)(this._acceptedVersions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslprofileAcceptedVersionsList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(sslprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslprofileConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(sslprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslprofileMarkersList",
      },
      ssl_rating: {
        value: cdktf.listMapperHcl(sslprofileSslRatingToHclTerraform, true)(this._sslRating.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslprofileSslRatingList",
      },
      tags: {
        value: cdktf.listMapperHcl(sslprofileTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslprofileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
