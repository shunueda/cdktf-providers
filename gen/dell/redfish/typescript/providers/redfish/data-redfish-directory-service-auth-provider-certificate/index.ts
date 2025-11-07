// https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedfishDirectoryServiceAuthProviderCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * certificate_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#certificate_filter DataRedfishDirectoryServiceAuthProviderCertificate#certificate_filter}
  */
  readonly certificateFilter?: DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter;
  /**
  * redfish_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#redfish_server DataRedfishDirectoryServiceAuthProviderCertificate#redfish_server}
  */
  readonly redfishServer?: DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer[] | cdktf.IResolvable;
}
export interface DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuer {
}

export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuerToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuerToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubject {
}

export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubjectToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubjectToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificate {
}

export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_usage_types - computed: true, optional: false, required: false
  public get certificateUsageTypes() {
    return this.getListAttribute('certificate_usage_types');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateIssuerOutputReference(this, "issuer");
  public get issuer() {
    return this._issuer;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // odata_id - computed: true, optional: false, required: false
  public get odataId() {
    return this.getStringAttribute('odata_id');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }

  // valid_not_after - computed: true, optional: false, required: false
  public get validNotAfter() {
    return this.getStringAttribute('valid_not_after');
  }

  // valid_not_before - computed: true, optional: false, required: false
  public get validNotBefore() {
    return this.getStringAttribute('valid_not_before');
  }
}
export interface DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificate {
}

export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory_service_certificate - computed: true, optional: false, required: false
  private _directoryServiceCertificate = new DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateDirectoryServiceCertificateOutputReference(this, "directory_service_certificate");
  public get directoryServiceCertificate() {
    return this._directoryServiceCertificate;
  }
}
export interface DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter {
  /**
  * CertificateId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#certificate_id DataRedfishDirectoryServiceAuthProviderCertificate#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Filter for CertificateProviderType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#certificate_provider_type DataRedfishDirectoryServiceAuthProviderCertificate#certificate_provider_type}
  */
  readonly certificateProviderType: string;
}

export function dataRedfishDirectoryServiceAuthProviderCertificateCertificateFilterToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    certificate_provider_type: cdktf.stringToTerraform(struct!.certificateProviderType),
  }
}


export function dataRedfishDirectoryServiceAuthProviderCertificateCertificateFilterToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_provider_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateProviderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._certificateProviderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProviderType = this._certificateProviderType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
      this._certificateProviderType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
      this._certificateProviderType = value.certificateProviderType;
    }
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_provider_type - computed: false, optional: false, required: true
  private _certificateProviderType?: string; 
  public get certificateProviderType() {
    return this.getStringAttribute('certificate_provider_type');
  }
  public set certificateProviderType(value: string) {
    this._certificateProviderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProviderTypeInput() {
    return this._certificateProviderType;
  }
}
export interface DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer {
  /**
  * Server BMC IP address or hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#endpoint DataRedfishDirectoryServiceAuthProviderCertificate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * User password for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#password DataRedfishDirectoryServiceAuthProviderCertificate#password}
  */
  readonly password?: string;
  /**
  * Alias name for server BMCs. The key in provider's `redfish_servers` map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#redfish_alias DataRedfishDirectoryServiceAuthProviderCertificate#redfish_alias}
  */
  readonly redfishAlias?: string;
  /**
  * This field indicates whether the SSL/TLS certificate must be verified or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#ssl_insecure DataRedfishDirectoryServiceAuthProviderCertificate#ssl_insecure}
  */
  readonly sslInsecure?: boolean | cdktf.IResolvable;
  /**
  * User name for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#user DataRedfishDirectoryServiceAuthProviderCertificate#user}
  */
  readonly user?: string;
}

export function dataRedfishDirectoryServiceAuthProviderCertificateRedfishServerToTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    password: cdktf.stringToTerraform(struct!.password),
    redfish_alias: cdktf.stringToTerraform(struct!.redfishAlias),
    ssl_insecure: cdktf.booleanToTerraform(struct!.sslInsecure),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataRedfishDirectoryServiceAuthProviderCertificateRedfishServerToHclTerraform(struct?: DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redfish_alias: {
      value: cdktf.stringToHclTerraform(struct!.redfishAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.sslInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedfishDirectoryServiceAuthProviderCertificateRedfishServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redfishAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.redfishAlias = this._redfishAlias;
    }
    if (this._sslInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInsecure = this._sslInsecure;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._password = undefined;
      this._redfishAlias = undefined;
      this._sslInsecure = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._password = value.password;
      this._redfishAlias = value.redfishAlias;
      this._sslInsecure = value.sslInsecure;
      this._user = value.user;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // redfish_alias - computed: false, optional: true, required: false
  private _redfishAlias?: string; 
  public get redfishAlias() {
    return this.getStringAttribute('redfish_alias');
  }
  public set redfishAlias(value: string) {
    this._redfishAlias = value;
  }
  public resetRedfishAlias() {
    this._redfishAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishAliasInput() {
    return this._redfishAlias;
  }

  // ssl_insecure - computed: false, optional: true, required: false
  private _sslInsecure?: boolean | cdktf.IResolvable; 
  public get sslInsecure() {
    return this.getBooleanAttribute('ssl_insecure');
  }
  public set sslInsecure(value: boolean | cdktf.IResolvable) {
    this._sslInsecure = value;
  }
  public resetSslInsecure() {
    this._sslInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInsecureInput() {
    return this._sslInsecure;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class DataRedfishDirectoryServiceAuthProviderCertificateRedfishServerList extends cdktf.ComplexList {
  public internalValue? : DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer[] | cdktf.IResolvable

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
  public get(index: number): DataRedfishDirectoryServiceAuthProviderCertificateRedfishServerOutputReference {
    return new DataRedfishDirectoryServiceAuthProviderCertificateRedfishServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate redfish_directory_service_auth_provider_certificate}
*/
export class DataRedfishDirectoryServiceAuthProviderCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redfish_directory_service_auth_provider_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedfishDirectoryServiceAuthProviderCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedfishDirectoryServiceAuthProviderCertificate to import
  * @param importFromId The id of the existing DataRedfishDirectoryServiceAuthProviderCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedfishDirectoryServiceAuthProviderCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redfish_directory_service_auth_provider_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/redfish/1.6.0/docs/data-sources/directory_service_auth_provider_certificate redfish_directory_service_auth_provider_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedfishDirectoryServiceAuthProviderCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRedfishDirectoryServiceAuthProviderCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'redfish_directory_service_auth_provider_certificate',
      terraformGeneratorMetadata: {
        providerName: 'redfish',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateFilter.internalValue = config.certificateFilter;
    this._redfishServer.internalValue = config.redfishServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory_service_auth_provider_certificate - computed: true, optional: false, required: false
  private _directoryServiceAuthProviderCertificate = new DataRedfishDirectoryServiceAuthProviderCertificateDirectoryServiceAuthProviderCertificateOutputReference(this, "directory_service_auth_provider_certificate");
  public get directoryServiceAuthProviderCertificate() {
    return this._directoryServiceAuthProviderCertificate;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // certificate_filter - computed: false, optional: true, required: false
  private _certificateFilter = new DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilterOutputReference(this, "certificate_filter");
  public get certificateFilter() {
    return this._certificateFilter;
  }
  public putCertificateFilter(value: DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter) {
    this._certificateFilter.internalValue = value;
  }
  public resetCertificateFilter() {
    this._certificateFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFilterInput() {
    return this._certificateFilter.internalValue;
  }

  // redfish_server - computed: false, optional: true, required: false
  private _redfishServer = new DataRedfishDirectoryServiceAuthProviderCertificateRedfishServerList(this, "redfish_server", false);
  public get redfishServer() {
    return this._redfishServer;
  }
  public putRedfishServer(value: DataRedfishDirectoryServiceAuthProviderCertificateRedfishServer[] | cdktf.IResolvable) {
    this._redfishServer.internalValue = value;
  }
  public resetRedfishServer() {
    this._redfishServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redfishServerInput() {
    return this._redfishServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_filter: dataRedfishDirectoryServiceAuthProviderCertificateCertificateFilterToTerraform(this._certificateFilter.internalValue),
      redfish_server: cdktf.listMapper(dataRedfishDirectoryServiceAuthProviderCertificateRedfishServerToTerraform, true)(this._redfishServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_filter: {
        value: dataRedfishDirectoryServiceAuthProviderCertificateCertificateFilterToHclTerraform(this._certificateFilter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRedfishDirectoryServiceAuthProviderCertificateCertificateFilter",
      },
      redfish_server: {
        value: cdktf.listMapperHcl(dataRedfishDirectoryServiceAuthProviderCertificateRedfishServerToHclTerraform, true)(this._redfishServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedfishDirectoryServiceAuthProviderCertificateRedfishServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
