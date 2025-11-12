// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementOpsecTrustedCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca#id DataCheckpointManagementOpsecTrustedCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca#name DataCheckpointManagementOpsecTrustedCa#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca#uid DataCheckpointManagementOpsecTrustedCa#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_tcp_settings - computed: true, optional: false, required: false
  private _directTcpSettings = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsList(this, "direct_tcp_settings", false);
  public get directTcpSettings() {
    return this._directTcpSettings;
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_tcp_settings - computed: true, optional: false, required: false
  private _directTcpSettings = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsList(this, "direct_tcp_settings", false);
  public get directTcpSettings() {
    return this._directTcpSettings;
  }

  // http_settings - computed: true, optional: false, required: false
  private _httpSettings = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsList(this, "http_settings", false);
  public get httpSettings() {
    return this._httpSettings;
  }

  // transport_layer - computed: true, optional: false, required: false
  public get transportLayer() {
    return this.getStringAttribute('transport_layer');
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettings {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_identifier - computed: true, optional: false, required: false
  public get caIdentifier() {
    return this.getStringAttribute('ca_identifier');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementOpsecTrustedCaAutomaticEnrollment {
}

export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentToTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentToHclTerraform(struct?: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementOpsecTrustedCaAutomaticEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatically_enroll_certificate - computed: true, optional: false, required: false
  public get automaticallyEnrollCertificate() {
    return this.getBooleanAttribute('automatically_enroll_certificate');
  }

  // cmpv1_settings - computed: true, optional: false, required: false
  private _cmpv1Settings = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsList(this, "cmpv1_settings", false);
  public get cmpv1Settings() {
    return this._cmpv1Settings;
  }

  // cmpv2_settings - computed: true, optional: false, required: false
  private _cmpv2Settings = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsList(this, "cmpv2_settings", false);
  public get cmpv2Settings() {
    return this._cmpv2Settings;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scep_settings - computed: true, optional: false, required: false
  private _scepSettings = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsList(this, "scep_settings", false);
  public get scepSettings() {
    return this._scepSettings;
  }
}

export class DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentOutputReference {
    return new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca checkpoint_management_opsec_trusted_ca}
*/
export class DataCheckpointManagementOpsecTrustedCa extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_opsec_trusted_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementOpsecTrustedCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementOpsecTrustedCa to import
  * @param importFromId The id of the existing DataCheckpointManagementOpsecTrustedCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementOpsecTrustedCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_opsec_trusted_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_opsec_trusted_ca checkpoint_management_opsec_trusted_ca} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementOpsecTrustedCaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementOpsecTrustedCaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_opsec_trusted_ca',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_certificates_from_branches - computed: true, optional: false, required: false
  public get allowCertificatesFromBranches() {
    return this.getBooleanAttribute('allow_certificates_from_branches');
  }

  // automatic_enrollment - computed: true, optional: false, required: false
  private _automaticEnrollment = new DataCheckpointManagementOpsecTrustedCaAutomaticEnrollmentList(this, "automatic_enrollment", false);
  public get automaticEnrollment() {
    return this._automaticEnrollment;
  }

  // base64_certificate - computed: true, optional: false, required: false
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }

  // branches - computed: true, optional: false, required: false
  public get branches() {
    return cdktf.Fn.tolist(this.getListAttribute('branches'));
  }

  // cache_crl - computed: true, optional: false, required: false
  public get cacheCrl() {
    return this.getBooleanAttribute('cache_crl');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // crl_cache_method - computed: true, optional: false, required: false
  public get crlCacheMethod() {
    return this.getStringAttribute('crl_cache_method');
  }

  // crl_cache_timeout - computed: true, optional: false, required: false
  public get crlCacheTimeout() {
    return this.getNumberAttribute('crl_cache_timeout');
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

  // retrieve_crl_from_http_servers - computed: true, optional: false, required: false
  public get retrieveCrlFromHttpServers() {
    return this.getBooleanAttribute('retrieve_crl_from_http_servers');
  }

  // retrieve_crl_from_ldap_servers - computed: true, optional: false, required: false
  public get retrieveCrlFromLdapServers() {
    return this.getBooleanAttribute('retrieve_crl_from_ldap_servers');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
