// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritySslSshProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#ca_certificate SecuritySslSshProfile#ca_certificate}
  */
  readonly caCertificate?: SecuritySslSshProfileCaCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#cert_probe_failure SecuritySslSshProfile#cert_probe_failure}
  */
  readonly certProbeFailure?: string;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#direction SecuritySslSshProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#expired_certificate_action SecuritySslSshProfile#expired_certificate_action}
  */
  readonly expiredCertificateAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#host_exemptions SecuritySslSshProfile#host_exemptions}
  */
  readonly hostExemptions?: SecuritySslSshProfileHostExemptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#inspection_mode SecuritySslSshProfile#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#primary_key SecuritySslSshProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#profile_protocol_options SecuritySslSshProfile#profile_protocol_options}
  */
  readonly profileProtocolOptions?: SecuritySslSshProfileProfileProtocolOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#quic SecuritySslSshProfile#quic}
  */
  readonly quic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#revoked_certificate_action SecuritySslSshProfile#revoked_certificate_action}
  */
  readonly revokedCertificateAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#timed_out_validation_certificate_action SecuritySslSshProfile#timed_out_validation_certificate_action}
  */
  readonly timedOutValidationCertificateAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#url_category_exemptions SecuritySslSshProfile#url_category_exemptions}
  */
  readonly urlCategoryExemptions?: SecuritySslSshProfileUrlCategoryExemptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#validation_failed_certificate_action SecuritySslSshProfile#validation_failed_certificate_action}
  */
  readonly validationFailedCertificateAction?: string;
}
export interface SecuritySslSshProfileCaCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#datasource SecuritySslSshProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#primary_key SecuritySslSshProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securitySslSshProfileCaCertificateToTerraform(struct?: SecuritySslSshProfileCaCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securitySslSshProfileCaCertificateToHclTerraform(struct?: SecuritySslSshProfileCaCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritySslSshProfileCaCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecuritySslSshProfileCaCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritySslSshProfileCaCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface SecuritySslSshProfileHostExemptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#datasource SecuritySslSshProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#primary_key SecuritySslSshProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securitySslSshProfileHostExemptionsToTerraform(struct?: SecuritySslSshProfileHostExemptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securitySslSshProfileHostExemptionsToHclTerraform(struct?: SecuritySslSshProfileHostExemptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritySslSshProfileHostExemptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritySslSshProfileHostExemptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritySslSshProfileHostExemptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class SecuritySslSshProfileHostExemptionsList extends cdktf.ComplexList {
  public internalValue? : SecuritySslSshProfileHostExemptions[] | cdktf.IResolvable

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
  public get(index: number): SecuritySslSshProfileHostExemptionsOutputReference {
    return new SecuritySslSshProfileHostExemptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritySslSshProfileProfileProtocolOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#compressed_limit SecuritySslSshProfile#compressed_limit}
  */
  readonly compressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#oversized_action SecuritySslSshProfile#oversized_action}
  */
  readonly oversizedAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#uncompressed_limit SecuritySslSshProfile#uncompressed_limit}
  */
  readonly uncompressedLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#unknown_content_encoding SecuritySslSshProfile#unknown_content_encoding}
  */
  readonly unknownContentEncoding?: string;
}

export function securitySslSshProfileProfileProtocolOptionsToTerraform(struct?: SecuritySslSshProfileProfileProtocolOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compressed_limit: cdktf.numberToTerraform(struct!.compressedLimit),
    oversized_action: cdktf.stringToTerraform(struct!.oversizedAction),
    uncompressed_limit: cdktf.numberToTerraform(struct!.uncompressedLimit),
    unknown_content_encoding: cdktf.stringToTerraform(struct!.unknownContentEncoding),
  }
}


export function securitySslSshProfileProfileProtocolOptionsToHclTerraform(struct?: SecuritySslSshProfileProfileProtocolOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.compressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oversized_action: {
      value: cdktf.stringToHclTerraform(struct!.oversizedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uncompressed_limit: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.unknownContentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritySslSshProfileProfileProtocolOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecuritySslSshProfileProfileProtocolOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressedLimit = this._compressedLimit;
    }
    if (this._oversizedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedAction = this._oversizedAction;
    }
    if (this._uncompressedLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedLimit = this._uncompressedLimit;
    }
    if (this._unknownContentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownContentEncoding = this._unknownContentEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritySslSshProfileProfileProtocolOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressedLimit = undefined;
      this._oversizedAction = undefined;
      this._uncompressedLimit = undefined;
      this._unknownContentEncoding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressedLimit = value.compressedLimit;
      this._oversizedAction = value.oversizedAction;
      this._uncompressedLimit = value.uncompressedLimit;
      this._unknownContentEncoding = value.unknownContentEncoding;
    }
  }

  // compressed_limit - computed: true, optional: true, required: false
  private _compressedLimit?: number; 
  public get compressedLimit() {
    return this.getNumberAttribute('compressed_limit');
  }
  public set compressedLimit(value: number) {
    this._compressedLimit = value;
  }
  public resetCompressedLimit() {
    this._compressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedLimitInput() {
    return this._compressedLimit;
  }

  // oversized_action - computed: true, optional: true, required: false
  private _oversizedAction?: string; 
  public get oversizedAction() {
    return this.getStringAttribute('oversized_action');
  }
  public set oversizedAction(value: string) {
    this._oversizedAction = value;
  }
  public resetOversizedAction() {
    this._oversizedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedActionInput() {
    return this._oversizedAction;
  }

  // uncompressed_limit - computed: true, optional: true, required: false
  private _uncompressedLimit?: number; 
  public get uncompressedLimit() {
    return this.getNumberAttribute('uncompressed_limit');
  }
  public set uncompressedLimit(value: number) {
    this._uncompressedLimit = value;
  }
  public resetUncompressedLimit() {
    this._uncompressedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedLimitInput() {
    return this._uncompressedLimit;
  }

  // unknown_content_encoding - computed: true, optional: true, required: false
  private _unknownContentEncoding?: string; 
  public get unknownContentEncoding() {
    return this.getStringAttribute('unknown_content_encoding');
  }
  public set unknownContentEncoding(value: string) {
    this._unknownContentEncoding = value;
  }
  public resetUnknownContentEncoding() {
    this._unknownContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownContentEncodingInput() {
    return this._unknownContentEncoding;
  }
}
export interface SecuritySslSshProfileUrlCategoryExemptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#datasource SecuritySslSshProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#primary_key SecuritySslSshProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securitySslSshProfileUrlCategoryExemptionsToTerraform(struct?: SecuritySslSshProfileUrlCategoryExemptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securitySslSshProfileUrlCategoryExemptionsToHclTerraform(struct?: SecuritySslSshProfileUrlCategoryExemptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritySslSshProfileUrlCategoryExemptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritySslSshProfileUrlCategoryExemptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritySslSshProfileUrlCategoryExemptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class SecuritySslSshProfileUrlCategoryExemptionsList extends cdktf.ComplexList {
  public internalValue? : SecuritySslSshProfileUrlCategoryExemptions[] | cdktf.IResolvable

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
  public get(index: number): SecuritySslSshProfileUrlCategoryExemptionsOutputReference {
    return new SecuritySslSshProfileUrlCategoryExemptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile fortisase_security_ssl_ssh_profile}
*/
export class SecuritySslSshProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_ssl_ssh_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritySslSshProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritySslSshProfile to import
  * @param importFromId The id of the existing SecuritySslSshProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritySslSshProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_ssl_ssh_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_ssl_ssh_profile fortisase_security_ssl_ssh_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritySslSshProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritySslSshProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_ssl_ssh_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertificate.internalValue = config.caCertificate;
    this._certProbeFailure = config.certProbeFailure;
    this._direction = config.direction;
    this._expiredCertificateAction = config.expiredCertificateAction;
    this._hostExemptions.internalValue = config.hostExemptions;
    this._inspectionMode = config.inspectionMode;
    this._primaryKey = config.primaryKey;
    this._profileProtocolOptions.internalValue = config.profileProtocolOptions;
    this._quic = config.quic;
    this._revokedCertificateAction = config.revokedCertificateAction;
    this._timedOutValidationCertificateAction = config.timedOutValidationCertificateAction;
    this._urlCategoryExemptions.internalValue = config.urlCategoryExemptions;
    this._validationFailedCertificateAction = config.validationFailedCertificateAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate = new SecuritySslSshProfileCaCertificateOutputReference(this, "ca_certificate");
  public get caCertificate() {
    return this._caCertificate;
  }
  public putCaCertificate(value: SecuritySslSshProfileCaCertificate) {
    this._caCertificate.internalValue = value;
  }
  public resetCaCertificate() {
    this._caCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate.internalValue;
  }

  // cert_probe_failure - computed: true, optional: true, required: false
  private _certProbeFailure?: string; 
  public get certProbeFailure() {
    return this.getStringAttribute('cert_probe_failure');
  }
  public set certProbeFailure(value: string) {
    this._certProbeFailure = value;
  }
  public resetCertProbeFailure() {
    this._certProbeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certProbeFailureInput() {
    return this._certProbeFailure;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // expired_certificate_action - computed: true, optional: true, required: false
  private _expiredCertificateAction?: string; 
  public get expiredCertificateAction() {
    return this.getStringAttribute('expired_certificate_action');
  }
  public set expiredCertificateAction(value: string) {
    this._expiredCertificateAction = value;
  }
  public resetExpiredCertificateAction() {
    this._expiredCertificateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredCertificateActionInput() {
    return this._expiredCertificateAction;
  }

  // host_exemptions - computed: true, optional: true, required: false
  private _hostExemptions = new SecuritySslSshProfileHostExemptionsList(this, "host_exemptions", false);
  public get hostExemptions() {
    return this._hostExemptions;
  }
  public putHostExemptions(value: SecuritySslSshProfileHostExemptions[] | cdktf.IResolvable) {
    this._hostExemptions.internalValue = value;
  }
  public resetHostExemptions() {
    this._hostExemptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostExemptionsInput() {
    return this._hostExemptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inspection_mode - computed: true, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // profile_protocol_options - computed: true, optional: true, required: false
  private _profileProtocolOptions = new SecuritySslSshProfileProfileProtocolOptionsOutputReference(this, "profile_protocol_options");
  public get profileProtocolOptions() {
    return this._profileProtocolOptions;
  }
  public putProfileProtocolOptions(value: SecuritySslSshProfileProfileProtocolOptions) {
    this._profileProtocolOptions.internalValue = value;
  }
  public resetProfileProtocolOptions() {
    this._profileProtocolOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProtocolOptionsInput() {
    return this._profileProtocolOptions.internalValue;
  }

  // quic - computed: true, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // revoked_certificate_action - computed: true, optional: true, required: false
  private _revokedCertificateAction?: string; 
  public get revokedCertificateAction() {
    return this.getStringAttribute('revoked_certificate_action');
  }
  public set revokedCertificateAction(value: string) {
    this._revokedCertificateAction = value;
  }
  public resetRevokedCertificateAction() {
    this._revokedCertificateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedCertificateActionInput() {
    return this._revokedCertificateAction;
  }

  // timed_out_validation_certificate_action - computed: true, optional: true, required: false
  private _timedOutValidationCertificateAction?: string; 
  public get timedOutValidationCertificateAction() {
    return this.getStringAttribute('timed_out_validation_certificate_action');
  }
  public set timedOutValidationCertificateAction(value: string) {
    this._timedOutValidationCertificateAction = value;
  }
  public resetTimedOutValidationCertificateAction() {
    this._timedOutValidationCertificateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timedOutValidationCertificateActionInput() {
    return this._timedOutValidationCertificateAction;
  }

  // url_category_exemptions - computed: true, optional: true, required: false
  private _urlCategoryExemptions = new SecuritySslSshProfileUrlCategoryExemptionsList(this, "url_category_exemptions", false);
  public get urlCategoryExemptions() {
    return this._urlCategoryExemptions;
  }
  public putUrlCategoryExemptions(value: SecuritySslSshProfileUrlCategoryExemptions[] | cdktf.IResolvable) {
    this._urlCategoryExemptions.internalValue = value;
  }
  public resetUrlCategoryExemptions() {
    this._urlCategoryExemptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryExemptionsInput() {
    return this._urlCategoryExemptions.internalValue;
  }

  // validation_failed_certificate_action - computed: true, optional: true, required: false
  private _validationFailedCertificateAction?: string; 
  public get validationFailedCertificateAction() {
    return this.getStringAttribute('validation_failed_certificate_action');
  }
  public set validationFailedCertificateAction(value: string) {
    this._validationFailedCertificateAction = value;
  }
  public resetValidationFailedCertificateAction() {
    this._validationFailedCertificateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFailedCertificateActionInput() {
    return this._validationFailedCertificateAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_certificate: securitySslSshProfileCaCertificateToTerraform(this._caCertificate.internalValue),
      cert_probe_failure: cdktf.stringToTerraform(this._certProbeFailure),
      direction: cdktf.stringToTerraform(this._direction),
      expired_certificate_action: cdktf.stringToTerraform(this._expiredCertificateAction),
      host_exemptions: cdktf.listMapper(securitySslSshProfileHostExemptionsToTerraform, false)(this._hostExemptions.internalValue),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      profile_protocol_options: securitySslSshProfileProfileProtocolOptionsToTerraform(this._profileProtocolOptions.internalValue),
      quic: cdktf.stringToTerraform(this._quic),
      revoked_certificate_action: cdktf.stringToTerraform(this._revokedCertificateAction),
      timed_out_validation_certificate_action: cdktf.stringToTerraform(this._timedOutValidationCertificateAction),
      url_category_exemptions: cdktf.listMapper(securitySslSshProfileUrlCategoryExemptionsToTerraform, false)(this._urlCategoryExemptions.internalValue),
      validation_failed_certificate_action: cdktf.stringToTerraform(this._validationFailedCertificateAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_certificate: {
        value: securitySslSshProfileCaCertificateToHclTerraform(this._caCertificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecuritySslSshProfileCaCertificate",
      },
      cert_probe_failure: {
        value: cdktf.stringToHclTerraform(this._certProbeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired_certificate_action: {
        value: cdktf.stringToHclTerraform(this._expiredCertificateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_exemptions: {
        value: cdktf.listMapperHcl(securitySslSshProfileHostExemptionsToHclTerraform, false)(this._hostExemptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritySslSshProfileHostExemptionsList",
      },
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_protocol_options: {
        value: securitySslSshProfileProfileProtocolOptionsToHclTerraform(this._profileProtocolOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecuritySslSshProfileProfileProtocolOptions",
      },
      quic: {
        value: cdktf.stringToHclTerraform(this._quic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoked_certificate_action: {
        value: cdktf.stringToHclTerraform(this._revokedCertificateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timed_out_validation_certificate_action: {
        value: cdktf.stringToHclTerraform(this._timedOutValidationCertificateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_category_exemptions: {
        value: cdktf.listMapperHcl(securitySslSshProfileUrlCategoryExemptionsToHclTerraform, false)(this._urlCategoryExemptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritySslSshProfileUrlCategoryExemptionsList",
      },
      validation_failed_certificate_action: {
        value: cdktf.stringToHclTerraform(this._validationFailedCertificateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
