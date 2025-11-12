// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiMtlskeystoreClientCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies each client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#certificate_id DataAkamaiMtlskeystoreClientCertificate#certificate_id}
  */
  readonly certificateId: number;
  /**
  * If set to true will list associated properties to that certificate version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#include_associated_properties DataAkamaiMtlskeystoreClientCertificate#include_associated_properties}
  */
  readonly includeAssociatedProperties?: boolean | cdktf.IResolvable;
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlock {
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlockToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlockToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // trust_chain - computed: true, optional: false, required: false
  public get trustChain() {
    return this.getStringAttribute('trust_chain');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlock {
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentCsrBlockToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentCsrBlockToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrentProperties {
  /**
  * The unique identifier of the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#asset_id DataAkamaiMtlskeystoreClientCertificate#asset_id}
  */
  readonly assetId: number;
  /**
  * The unique identifier of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#group_id DataAkamaiMtlskeystoreClientCertificate#group_id}
  */
  readonly groupId: number;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#property_name DataAkamaiMtlskeystoreClientCertificate#property_name}
  */
  readonly propertyName: string;
  /**
  * The version of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#property_version DataAkamaiMtlskeystoreClientCertificate#property_version}
  */
  readonly propertyVersion: number;
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentPropertiesToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_id: cdktf.numberToTerraform(struct!.assetId),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
    property_version: cdktf.numberToTerraform(struct!.propertyVersion),
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentPropertiesToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_id: {
      value: cdktf.numberToHclTerraform(struct!.assetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_version: {
      value: cdktf.numberToHclTerraform(struct!.propertyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrentProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetId = this._assetId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    if (this._propertyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyVersion = this._propertyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrentProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetId = undefined;
      this._groupId = undefined;
      this._propertyName = undefined;
      this._propertyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetId = value.assetId;
      this._groupId = value.groupId;
      this._propertyName = value.propertyName;
      this._propertyVersion = value.propertyVersion;
    }
  }

  // asset_id - computed: true, optional: false, required: true
  private _assetId?: number; 
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }
  public set assetId(value: number) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // group_id - computed: true, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // property_name - computed: true, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_version - computed: true, optional: false, required: true
  private _propertyVersion?: number; 
  public get propertyVersion() {
    return this.getNumberAttribute('property_version');
  }
  public set propertyVersion(value: number) {
    this._propertyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyVersionInput() {
    return this._propertyVersion;
  }
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiMtlskeystoreClientCertificateCurrentProperties[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateCurrentPropertiesOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateCurrentPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrors {
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarnings {
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrentValidation {
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentValidationToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentValidationToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrentValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrentValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrentValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataAkamaiMtlskeystoreClientCertificateCurrentValidationErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataAkamaiMtlskeystoreClientCertificateCurrentValidationWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateCurrent {
}

export function dataAkamaiMtlskeystoreClientCertificateCurrentToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateCurrentToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateCurrentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateCurrent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateCurrent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_block - computed: true, optional: false, required: false
  private _certificateBlock = new DataAkamaiMtlskeystoreClientCertificateCurrentCertificateBlockOutputReference(this, "certificate_block");
  public get certificateBlock() {
    return this._certificateBlock;
  }

  // certificate_submitted_by - computed: true, optional: false, required: false
  public get certificateSubmittedBy() {
    return this.getStringAttribute('certificate_submitted_by');
  }

  // certificate_submitted_date - computed: true, optional: false, required: false
  public get certificateSubmittedDate() {
    return this.getStringAttribute('certificate_submitted_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // csr_block - computed: true, optional: false, required: false
  private _csrBlock = new DataAkamaiMtlskeystoreClientCertificateCurrentCsrBlockOutputReference(this, "csr_block");
  public get csrBlock() {
    return this._csrBlock;
  }

  // delete_requested_date - computed: true, optional: false, required: false
  public get deleteRequestedDate() {
    return this.getStringAttribute('delete_requested_date');
  }

  // elliptic_curve - computed: true, optional: false, required: false
  public get ellipticCurve() {
    return this.getStringAttribute('elliptic_curve');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // issued_date - computed: true, optional: false, required: false
  public get issuedDate() {
    return this.getStringAttribute('issued_date');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size_in_bytes - computed: true, optional: false, required: false
  public get keySizeInBytes() {
    return this.getStringAttribute('key_size_in_bytes');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAkamaiMtlskeystoreClientCertificateCurrentPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // scheduled_delete_date - computed: true, optional: false, required: false
  public get scheduledDeleteDate() {
    return this.getStringAttribute('scheduled_delete_date');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAkamaiMtlskeystoreClientCertificateCurrentValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlock {
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlockToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlockToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // trust_chain - computed: true, optional: false, required: false
  public get trustChain() {
    return this.getStringAttribute('trust_chain');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlock {
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousCsrBlockToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousCsrBlockToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePreviousProperties {
  /**
  * The unique identifier of the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#asset_id DataAkamaiMtlskeystoreClientCertificate#asset_id}
  */
  readonly assetId: number;
  /**
  * The unique identifier of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#group_id DataAkamaiMtlskeystoreClientCertificate#group_id}
  */
  readonly groupId: number;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#property_name DataAkamaiMtlskeystoreClientCertificate#property_name}
  */
  readonly propertyName: string;
  /**
  * The version of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#property_version DataAkamaiMtlskeystoreClientCertificate#property_version}
  */
  readonly propertyVersion: number;
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousPropertiesToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_id: cdktf.numberToTerraform(struct!.assetId),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
    property_version: cdktf.numberToTerraform(struct!.propertyVersion),
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousPropertiesToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_id: {
      value: cdktf.numberToHclTerraform(struct!.assetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_version: {
      value: cdktf.numberToHclTerraform(struct!.propertyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePreviousProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetId = this._assetId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    if (this._propertyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyVersion = this._propertyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePreviousProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetId = undefined;
      this._groupId = undefined;
      this._propertyName = undefined;
      this._propertyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetId = value.assetId;
      this._groupId = value.groupId;
      this._propertyName = value.propertyName;
      this._propertyVersion = value.propertyVersion;
    }
  }

  // asset_id - computed: true, optional: false, required: true
  private _assetId?: number; 
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }
  public set assetId(value: number) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // group_id - computed: true, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // property_name - computed: true, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_version - computed: true, optional: false, required: true
  private _propertyVersion?: number; 
  public get propertyVersion() {
    return this.getNumberAttribute('property_version');
  }
  public set propertyVersion(value: number) {
    this._propertyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyVersionInput() {
    return this._propertyVersion;
  }
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiMtlskeystoreClientCertificatePreviousProperties[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificatePreviousPropertiesOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificatePreviousPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrors {
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarnings {
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePreviousValidation {
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousValidationToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousValidationToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePreviousValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePreviousValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePreviousValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataAkamaiMtlskeystoreClientCertificatePreviousValidationErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataAkamaiMtlskeystoreClientCertificatePreviousValidationWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}
export interface DataAkamaiMtlskeystoreClientCertificatePrevious {
}

export function dataAkamaiMtlskeystoreClientCertificatePreviousToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePrevious): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificatePreviousToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificatePrevious): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificatePreviousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificatePrevious | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificatePrevious | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_block - computed: true, optional: false, required: false
  private _certificateBlock = new DataAkamaiMtlskeystoreClientCertificatePreviousCertificateBlockOutputReference(this, "certificate_block");
  public get certificateBlock() {
    return this._certificateBlock;
  }

  // certificate_submitted_by - computed: true, optional: false, required: false
  public get certificateSubmittedBy() {
    return this.getStringAttribute('certificate_submitted_by');
  }

  // certificate_submitted_date - computed: true, optional: false, required: false
  public get certificateSubmittedDate() {
    return this.getStringAttribute('certificate_submitted_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // csr_block - computed: true, optional: false, required: false
  private _csrBlock = new DataAkamaiMtlskeystoreClientCertificatePreviousCsrBlockOutputReference(this, "csr_block");
  public get csrBlock() {
    return this._csrBlock;
  }

  // delete_requested_date - computed: true, optional: false, required: false
  public get deleteRequestedDate() {
    return this.getStringAttribute('delete_requested_date');
  }

  // elliptic_curve - computed: true, optional: false, required: false
  public get ellipticCurve() {
    return this.getStringAttribute('elliptic_curve');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // issued_date - computed: true, optional: false, required: false
  public get issuedDate() {
    return this.getStringAttribute('issued_date');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size_in_bytes - computed: true, optional: false, required: false
  public get keySizeInBytes() {
    return this.getStringAttribute('key_size_in_bytes');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAkamaiMtlskeystoreClientCertificatePreviousPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // scheduled_delete_date - computed: true, optional: false, required: false
  public get scheduledDeleteDate() {
    return this.getStringAttribute('scheduled_delete_date');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAkamaiMtlskeystoreClientCertificatePreviousValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlock {
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlockToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlockToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // trust_chain - computed: true, optional: false, required: false
  public get trustChain() {
    return this.getStringAttribute('trust_chain');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlock {
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsCsrBlockToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsCsrBlockToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersionsProperties {
  /**
  * The unique identifier of the asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#asset_id DataAkamaiMtlskeystoreClientCertificate#asset_id}
  */
  readonly assetId: number;
  /**
  * The unique identifier of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#group_id DataAkamaiMtlskeystoreClientCertificate#group_id}
  */
  readonly groupId: number;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#property_name DataAkamaiMtlskeystoreClientCertificate#property_name}
  */
  readonly propertyName: string;
  /**
  * The version of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#property_version DataAkamaiMtlskeystoreClientCertificate#property_version}
  */
  readonly propertyVersion: number;
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsPropertiesToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asset_id: cdktf.numberToTerraform(struct!.assetId),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
    property_version: cdktf.numberToTerraform(struct!.propertyVersion),
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsPropertiesToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asset_id: {
      value: cdktf.numberToHclTerraform(struct!.assetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_version: {
      value: cdktf.numberToHclTerraform(struct!.propertyVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersionsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assetId = this._assetId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    if (this._propertyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyVersion = this._propertyVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersionsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assetId = undefined;
      this._groupId = undefined;
      this._propertyName = undefined;
      this._propertyVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assetId = value.assetId;
      this._groupId = value.groupId;
      this._propertyName = value.propertyName;
      this._propertyVersion = value.propertyVersion;
    }
  }

  // asset_id - computed: true, optional: false, required: true
  private _assetId?: number; 
  public get assetId() {
    return this.getNumberAttribute('asset_id');
  }
  public set assetId(value: number) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // group_id - computed: true, optional: false, required: true
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // property_name - computed: true, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }

  // property_version - computed: true, optional: false, required: true
  private _propertyVersion?: number; 
  public get propertyVersion() {
    return this.getNumberAttribute('property_version');
  }
  public set propertyVersion(value: number) {
    this._propertyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyVersionInput() {
    return this._propertyVersion;
  }
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiMtlskeystoreClientCertificateVersionsProperties[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateVersionsPropertiesOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateVersionsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrors {
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarnings {
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersionsValidation {
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsValidationToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsValidationToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersionsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersionsValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersionsValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataAkamaiMtlskeystoreClientCertificateVersionsValidationErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataAkamaiMtlskeystoreClientCertificateVersionsValidationWarningsList(this, "warnings", false);
  public get warnings() {
    return this._warnings;
  }
}
export interface DataAkamaiMtlskeystoreClientCertificateVersions {
}

export function dataAkamaiMtlskeystoreClientCertificateVersionsToTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlskeystoreClientCertificateVersionsToHclTerraform(struct?: DataAkamaiMtlskeystoreClientCertificateVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAkamaiMtlskeystoreClientCertificateVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlskeystoreClientCertificateVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_block - computed: true, optional: false, required: false
  private _certificateBlock = new DataAkamaiMtlskeystoreClientCertificateVersionsCertificateBlockOutputReference(this, "certificate_block");
  public get certificateBlock() {
    return this._certificateBlock;
  }

  // certificate_submitted_by - computed: true, optional: false, required: false
  public get certificateSubmittedBy() {
    return this.getStringAttribute('certificate_submitted_by');
  }

  // certificate_submitted_date - computed: true, optional: false, required: false
  public get certificateSubmittedDate() {
    return this.getStringAttribute('certificate_submitted_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // csr_block - computed: true, optional: false, required: false
  private _csrBlock = new DataAkamaiMtlskeystoreClientCertificateVersionsCsrBlockOutputReference(this, "csr_block");
  public get csrBlock() {
    return this._csrBlock;
  }

  // delete_requested_date - computed: true, optional: false, required: false
  public get deleteRequestedDate() {
    return this.getStringAttribute('delete_requested_date');
  }

  // elliptic_curve - computed: true, optional: false, required: false
  public get ellipticCurve() {
    return this.getStringAttribute('elliptic_curve');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // issued_date - computed: true, optional: false, required: false
  public get issuedDate() {
    return this.getStringAttribute('issued_date');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size_in_bytes - computed: true, optional: false, required: false
  public get keySizeInBytes() {
    return this.getStringAttribute('key_size_in_bytes');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataAkamaiMtlskeystoreClientCertificateVersionsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // scheduled_delete_date - computed: true, optional: false, required: false
  public get scheduledDeleteDate() {
    return this.getStringAttribute('scheduled_delete_date');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // validation - computed: true, optional: false, required: false
  private _validation = new DataAkamaiMtlskeystoreClientCertificateVersionsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_guid - computed: true, optional: false, required: false
  public get versionGuid() {
    return this.getStringAttribute('version_guid');
  }
}

export class DataAkamaiMtlskeystoreClientCertificateVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlskeystoreClientCertificateVersionsOutputReference {
    return new DataAkamaiMtlskeystoreClientCertificateVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate akamai_mtlskeystore_client_certificate}
*/
export class DataAkamaiMtlskeystoreClientCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlskeystore_client_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiMtlskeystoreClientCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiMtlskeystoreClientCertificate to import
  * @param importFromId The id of the existing DataAkamaiMtlskeystoreClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiMtlskeystoreClientCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlskeystore_client_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlskeystore_client_certificate akamai_mtlskeystore_client_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiMtlskeystoreClientCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiMtlskeystoreClientCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlskeystore_client_certificate',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._includeAssociatedProperties = config.includeAssociatedProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // current - computed: true, optional: false, required: false
  private _current = new DataAkamaiMtlskeystoreClientCertificateCurrentOutputReference(this, "current");
  public get current() {
    return this._current;
  }

  // geography - computed: true, optional: false, required: false
  public get geography() {
    return this.getStringAttribute('geography');
  }

  // include_associated_properties - computed: false, optional: true, required: false
  private _includeAssociatedProperties?: boolean | cdktf.IResolvable; 
  public get includeAssociatedProperties() {
    return this.getBooleanAttribute('include_associated_properties');
  }
  public set includeAssociatedProperties(value: boolean | cdktf.IResolvable) {
    this._includeAssociatedProperties = value;
  }
  public resetIncludeAssociatedProperties() {
    this._includeAssociatedProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAssociatedPropertiesInput() {
    return this._includeAssociatedProperties;
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // notification_emails - computed: true, optional: false, required: false
  public get notificationEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_emails'));
  }

  // previous - computed: true, optional: false, required: false
  private _previous = new DataAkamaiMtlskeystoreClientCertificatePreviousOutputReference(this, "previous");
  public get previous() {
    return this._previous;
  }

  // secure_network - computed: true, optional: false, required: false
  public get secureNetwork() {
    return this.getStringAttribute('secure_network');
  }

  // signer - computed: true, optional: false, required: false
  public get signer() {
    return this.getStringAttribute('signer');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataAkamaiMtlskeystoreClientCertificateVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      include_associated_properties: cdktf.booleanToTerraform(this._includeAssociatedProperties),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.numberToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_associated_properties: {
        value: cdktf.booleanToHclTerraform(this._includeAssociatedProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
