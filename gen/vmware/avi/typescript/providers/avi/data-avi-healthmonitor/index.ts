// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviHealthmonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor#id DataAviHealthmonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor#name DataAviHealthmonitor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor#tenant_ref DataAviHealthmonitor#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor#uuid DataAviHealthmonitor#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviHealthmonitorAuthentication {
}

export function dataAviHealthmonitorAuthenticationToTerraform(struct?: DataAviHealthmonitorAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorAuthenticationToHclTerraform(struct?: DataAviHealthmonitorAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviHealthmonitorAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorAuthenticationOutputReference {
    return new DataAviHealthmonitorAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorConfigpbAttributes {
}

export function dataAviHealthmonitorConfigpbAttributesToTerraform(struct?: DataAviHealthmonitorConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorConfigpbAttributesToHclTerraform(struct?: DataAviHealthmonitorConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviHealthmonitorConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorConfigpbAttributesOutputReference {
    return new DataAviHealthmonitorConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorDnsMonitor {
}

export function dataAviHealthmonitorDnsMonitorToTerraform(struct?: DataAviHealthmonitorDnsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorDnsMonitorToHclTerraform(struct?: DataAviHealthmonitorDnsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorDnsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorDnsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorDnsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // qtype - computed: true, optional: false, required: false
  public get qtype() {
    return this.getStringAttribute('qtype');
  }

  // query_name - computed: true, optional: false, required: false
  public get queryName() {
    return this.getStringAttribute('query_name');
  }

  // rcode - computed: true, optional: false, required: false
  public get rcode() {
    return this.getStringAttribute('rcode');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // response_string - computed: true, optional: false, required: false
  public get responseString() {
    return this.getStringAttribute('response_string');
  }
}

export class DataAviHealthmonitorDnsMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorDnsMonitorOutputReference {
    return new DataAviHealthmonitorDnsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorExternalMonitor {
}

export function dataAviHealthmonitorExternalMonitorToTerraform(struct?: DataAviHealthmonitorExternalMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorExternalMonitorToHclTerraform(struct?: DataAviHealthmonitorExternalMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorExternalMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorExternalMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorExternalMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command_code - computed: true, optional: false, required: false
  public get commandCode() {
    return this.getStringAttribute('command_code');
  }

  // command_parameters - computed: true, optional: false, required: false
  public get commandParameters() {
    return this.getStringAttribute('command_parameters');
  }

  // command_path - computed: true, optional: false, required: false
  public get commandPath() {
    return this.getStringAttribute('command_path');
  }

  // command_variables - computed: true, optional: false, required: false
  public get commandVariables() {
    return this.getStringAttribute('command_variables');
  }
}

export class DataAviHealthmonitorExternalMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorExternalMonitorOutputReference {
    return new DataAviHealthmonitorExternalMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorFtpMonitorSslAttributes {
}

export function dataAviHealthmonitorFtpMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorFtpMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorFtpMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorFtpMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorFtpMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorFtpMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorFtpMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorFtpMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorFtpMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorFtpMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorFtpMonitor {
}

export function dataAviHealthmonitorFtpMonitorToTerraform(struct?: DataAviHealthmonitorFtpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorFtpMonitorToHclTerraform(struct?: DataAviHealthmonitorFtpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorFtpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorFtpMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorFtpMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorFtpMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorFtpMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorFtpMonitorOutputReference {
    return new DataAviHealthmonitorFtpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorFtpsMonitorSslAttributes {
}

export function dataAviHealthmonitorFtpsMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorFtpsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorFtpsMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorFtpsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorFtpsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorFtpsMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorFtpsMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorFtpsMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorFtpsMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorFtpsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorFtpsMonitor {
}

export function dataAviHealthmonitorFtpsMonitorToTerraform(struct?: DataAviHealthmonitorFtpsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorFtpsMonitorToHclTerraform(struct?: DataAviHealthmonitorFtpsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorFtpsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorFtpsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorFtpsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorFtpsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorFtpsMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorFtpsMonitorOutputReference {
    return new DataAviHealthmonitorFtpsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttp2MonitorSslAttributes {
}

export function dataAviHealthmonitorHttp2MonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorHttp2MonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttp2MonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorHttp2MonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttp2MonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttp2MonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttp2MonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorHttp2MonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttp2MonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorHttp2MonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttp2Monitor {
}

export function dataAviHealthmonitorHttp2MonitorToTerraform(struct?: DataAviHealthmonitorHttp2Monitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttp2MonitorToHclTerraform(struct?: DataAviHealthmonitorHttp2Monitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttp2MonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttp2Monitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttp2Monitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // exact_http_request - computed: true, optional: false, required: false
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }

  // http_headers - computed: true, optional: false, required: false
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_request - computed: true, optional: false, required: false
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }

  // http_request_body - computed: true, optional: false, required: false
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }

  // http_request_header_path - computed: true, optional: false, required: false
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }

  // http_response - computed: true, optional: false, required: false
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }

  // http_response_code - computed: true, optional: false, required: false
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }

  // maintenance_code - computed: true, optional: false, required: false
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }

  // maintenance_response - computed: true, optional: false, required: false
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }

  // response_size - computed: true, optional: false, required: false
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorHttp2MonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorHttp2MonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttp2MonitorOutputReference {
    return new DataAviHealthmonitorHttp2MonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttp2SMonitorSslAttributes {
}

export function dataAviHealthmonitorHttp2SMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorHttp2SMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttp2SMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorHttp2SMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttp2SMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttp2SMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttp2SMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorHttp2SMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttp2SMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorHttp2SMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttp2SMonitor {
}

export function dataAviHealthmonitorHttp2SMonitorToTerraform(struct?: DataAviHealthmonitorHttp2SMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttp2SMonitorToHclTerraform(struct?: DataAviHealthmonitorHttp2SMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttp2SMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttp2SMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttp2SMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // exact_http_request - computed: true, optional: false, required: false
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }

  // http_headers - computed: true, optional: false, required: false
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_request - computed: true, optional: false, required: false
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }

  // http_request_body - computed: true, optional: false, required: false
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }

  // http_request_header_path - computed: true, optional: false, required: false
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }

  // http_response - computed: true, optional: false, required: false
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }

  // http_response_code - computed: true, optional: false, required: false
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }

  // maintenance_code - computed: true, optional: false, required: false
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }

  // maintenance_response - computed: true, optional: false, required: false
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }

  // response_size - computed: true, optional: false, required: false
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorHttp2SMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorHttp2SMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttp2SMonitorOutputReference {
    return new DataAviHealthmonitorHttp2SMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttpMonitorSslAttributes {
}

export function dataAviHealthmonitorHttpMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorHttpMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttpMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorHttpMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttpMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttpMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttpMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorHttpMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttpMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorHttpMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttpMonitor {
}

export function dataAviHealthmonitorHttpMonitorToTerraform(struct?: DataAviHealthmonitorHttpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttpMonitorToHclTerraform(struct?: DataAviHealthmonitorHttpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttpMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttpMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // exact_http_request - computed: true, optional: false, required: false
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }

  // http_headers - computed: true, optional: false, required: false
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_request - computed: true, optional: false, required: false
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }

  // http_request_body - computed: true, optional: false, required: false
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }

  // http_request_header_path - computed: true, optional: false, required: false
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }

  // http_response - computed: true, optional: false, required: false
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }

  // http_response_code - computed: true, optional: false, required: false
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }

  // maintenance_code - computed: true, optional: false, required: false
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }

  // maintenance_response - computed: true, optional: false, required: false
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }

  // response_size - computed: true, optional: false, required: false
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorHttpMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorHttpMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttpMonitorOutputReference {
    return new DataAviHealthmonitorHttpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttpsMonitorSslAttributes {
}

export function dataAviHealthmonitorHttpsMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorHttpsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttpsMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorHttpsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttpsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttpsMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttpsMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorHttpsMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttpsMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorHttpsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorHttpsMonitor {
}

export function dataAviHealthmonitorHttpsMonitorToTerraform(struct?: DataAviHealthmonitorHttpsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorHttpsMonitorToHclTerraform(struct?: DataAviHealthmonitorHttpsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorHttpsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorHttpsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorHttpsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // exact_http_request - computed: true, optional: false, required: false
  public get exactHttpRequest() {
    return this.getStringAttribute('exact_http_request');
  }

  // http_headers - computed: true, optional: false, required: false
  public get httpHeaders() {
    return this.getListAttribute('http_headers');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_request - computed: true, optional: false, required: false
  public get httpRequest() {
    return this.getStringAttribute('http_request');
  }

  // http_request_body - computed: true, optional: false, required: false
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }

  // http_request_header_path - computed: true, optional: false, required: false
  public get httpRequestHeaderPath() {
    return this.getStringAttribute('http_request_header_path');
  }

  // http_response - computed: true, optional: false, required: false
  public get httpResponse() {
    return this.getStringAttribute('http_response');
  }

  // http_response_code - computed: true, optional: false, required: false
  public get httpResponseCode() {
    return this.getListAttribute('http_response_code');
  }

  // maintenance_code - computed: true, optional: false, required: false
  public get maintenanceCode() {
    return this.getNumberListAttribute('maintenance_code');
  }

  // maintenance_response - computed: true, optional: false, required: false
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }

  // response_size - computed: true, optional: false, required: false
  public get responseSize() {
    return this.getStringAttribute('response_size');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorHttpsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorHttpsMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorHttpsMonitorOutputReference {
    return new DataAviHealthmonitorHttpsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorImapMonitorSslAttributes {
}

export function dataAviHealthmonitorImapMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorImapMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorImapMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorImapMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorImapMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorImapMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorImapMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorImapMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorImapMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorImapMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorImapMonitor {
}

export function dataAviHealthmonitorImapMonitorToTerraform(struct?: DataAviHealthmonitorImapMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorImapMonitorToHclTerraform(struct?: DataAviHealthmonitorImapMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorImapMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorImapMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorImapMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorImapMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorImapMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorImapMonitorOutputReference {
    return new DataAviHealthmonitorImapMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorImapsMonitorSslAttributes {
}

export function dataAviHealthmonitorImapsMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorImapsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorImapsMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorImapsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorImapsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorImapsMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorImapsMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorImapsMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorImapsMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorImapsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorImapsMonitor {
}

export function dataAviHealthmonitorImapsMonitorToTerraform(struct?: DataAviHealthmonitorImapsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorImapsMonitorToHclTerraform(struct?: DataAviHealthmonitorImapsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorImapsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorImapsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorImapsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorImapsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorImapsMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorImapsMonitorOutputReference {
    return new DataAviHealthmonitorImapsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorLdapMonitorSslAttributes {
}

export function dataAviHealthmonitorLdapMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorLdapMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorLdapMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorLdapMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorLdapMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorLdapMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorLdapMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorLdapMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorLdapMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorLdapMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorLdapMonitor {
}

export function dataAviHealthmonitorLdapMonitorToTerraform(struct?: DataAviHealthmonitorLdapMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorLdapMonitorToHclTerraform(struct?: DataAviHealthmonitorLdapMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorLdapMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorLdapMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorLdapMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorLdapMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorLdapMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorLdapMonitorOutputReference {
    return new DataAviHealthmonitorLdapMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorLdapsMonitorSslAttributes {
}

export function dataAviHealthmonitorLdapsMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorLdapsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorLdapsMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorLdapsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorLdapsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorLdapsMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorLdapsMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorLdapsMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorLdapsMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorLdapsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorLdapsMonitor {
}

export function dataAviHealthmonitorLdapsMonitorToTerraform(struct?: DataAviHealthmonitorLdapsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorLdapsMonitorToHclTerraform(struct?: DataAviHealthmonitorLdapsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorLdapsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorLdapsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorLdapsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorLdapsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorLdapsMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorLdapsMonitorOutputReference {
    return new DataAviHealthmonitorLdapsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorMarkers {
}

export function dataAviHealthmonitorMarkersToTerraform(struct?: DataAviHealthmonitorMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorMarkersToHclTerraform(struct?: DataAviHealthmonitorMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorMarkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviHealthmonitorMarkersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorMarkersOutputReference {
    return new DataAviHealthmonitorMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorMonitorIp {
}

export function dataAviHealthmonitorMonitorIpToTerraform(struct?: DataAviHealthmonitorMonitorIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorMonitorIpToHclTerraform(struct?: DataAviHealthmonitorMonitorIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorMonitorIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorMonitorIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorMonitorIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviHealthmonitorMonitorIpList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorMonitorIpOutputReference {
    return new DataAviHealthmonitorMonitorIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorPop3MonitorSslAttributes {
}

export function dataAviHealthmonitorPop3MonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorPop3MonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorPop3MonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorPop3MonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorPop3MonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorPop3MonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorPop3MonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorPop3MonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorPop3MonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorPop3MonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorPop3Monitor {
}

export function dataAviHealthmonitorPop3MonitorToTerraform(struct?: DataAviHealthmonitorPop3Monitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorPop3MonitorToHclTerraform(struct?: DataAviHealthmonitorPop3Monitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorPop3MonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorPop3Monitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorPop3Monitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorPop3MonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorPop3MonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorPop3MonitorOutputReference {
    return new DataAviHealthmonitorPop3MonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorPop3SMonitorSslAttributes {
}

export function dataAviHealthmonitorPop3SMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorPop3SMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorPop3SMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorPop3SMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorPop3SMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorPop3SMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorPop3SMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorPop3SMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorPop3SMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorPop3SMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorPop3SMonitor {
}

export function dataAviHealthmonitorPop3SMonitorToTerraform(struct?: DataAviHealthmonitorPop3SMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorPop3SMonitorToHclTerraform(struct?: DataAviHealthmonitorPop3SMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorPop3SMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorPop3SMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorPop3SMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorPop3SMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorPop3SMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorPop3SMonitorOutputReference {
    return new DataAviHealthmonitorPop3SMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorRadiusMonitor {
}

export function dataAviHealthmonitorRadiusMonitorToTerraform(struct?: DataAviHealthmonitorRadiusMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorRadiusMonitorToHclTerraform(struct?: DataAviHealthmonitorRadiusMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorRadiusMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorRadiusMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorRadiusMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAviHealthmonitorRadiusMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorRadiusMonitorOutputReference {
    return new DataAviHealthmonitorRadiusMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorSctpMonitor {
}

export function dataAviHealthmonitorSctpMonitorToTerraform(struct?: DataAviHealthmonitorSctpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorSctpMonitorToHclTerraform(struct?: DataAviHealthmonitorSctpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorSctpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorSctpMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorSctpMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sctp_request - computed: true, optional: false, required: false
  public get sctpRequest() {
    return this.getStringAttribute('sctp_request');
  }

  // sctp_response - computed: true, optional: false, required: false
  public get sctpResponse() {
    return this.getStringAttribute('sctp_response');
  }
}

export class DataAviHealthmonitorSctpMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorSctpMonitorOutputReference {
    return new DataAviHealthmonitorSctpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorSipMonitor {
}

export function dataAviHealthmonitorSipMonitorToTerraform(struct?: DataAviHealthmonitorSipMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorSipMonitorToHclTerraform(struct?: DataAviHealthmonitorSipMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorSipMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorSipMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorSipMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sip_monitor_transport - computed: true, optional: false, required: false
  public get sipMonitorTransport() {
    return this.getStringAttribute('sip_monitor_transport');
  }

  // sip_request_code - computed: true, optional: false, required: false
  public get sipRequestCode() {
    return this.getStringAttribute('sip_request_code');
  }

  // sip_response - computed: true, optional: false, required: false
  public get sipResponse() {
    return this.getStringAttribute('sip_response');
  }
}

export class DataAviHealthmonitorSipMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorSipMonitorOutputReference {
    return new DataAviHealthmonitorSipMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorSmtpMonitorSslAttributes {
}

export function dataAviHealthmonitorSmtpMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorSmtpMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorSmtpMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorSmtpMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorSmtpMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorSmtpMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorSmtpMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorSmtpMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorSmtpMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorSmtpMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorSmtpMonitor {
}

export function dataAviHealthmonitorSmtpMonitorToTerraform(struct?: DataAviHealthmonitorSmtpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorSmtpMonitorToHclTerraform(struct?: DataAviHealthmonitorSmtpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorSmtpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorSmtpMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorSmtpMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domainname - computed: true, optional: false, required: false
  public get domainname() {
    return this.getStringAttribute('domainname');
  }

  // mail_data - computed: true, optional: false, required: false
  public get mailData() {
    return this.getStringAttribute('mail_data');
  }

  // recipients_ids - computed: true, optional: false, required: false
  public get recipientsIds() {
    return this.getListAttribute('recipients_ids');
  }

  // sender_id - computed: true, optional: false, required: false
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorSmtpMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorSmtpMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorSmtpMonitorOutputReference {
    return new DataAviHealthmonitorSmtpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorSmtpsMonitorSslAttributes {
}

export function dataAviHealthmonitorSmtpsMonitorSslAttributesToTerraform(struct?: DataAviHealthmonitorSmtpsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorSmtpsMonitorSslAttributesToHclTerraform(struct?: DataAviHealthmonitorSmtpsMonitorSslAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorSmtpsMonitorSslAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorSmtpsMonitorSslAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorSmtpsMonitorSslAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pki_profile_ref - computed: true, optional: false, required: false
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // ssl_key_and_certificate_ref - computed: true, optional: false, required: false
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }

  // ssl_profile_ref - computed: true, optional: false, required: false
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }

  // use_pool_sni_server_name - computed: true, optional: false, required: false
  public get usePoolSniServerName() {
    return this.getStringAttribute('use_pool_sni_server_name');
  }
}

export class DataAviHealthmonitorSmtpsMonitorSslAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorSmtpsMonitorSslAttributesOutputReference {
    return new DataAviHealthmonitorSmtpsMonitorSslAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorSmtpsMonitor {
}

export function dataAviHealthmonitorSmtpsMonitorToTerraform(struct?: DataAviHealthmonitorSmtpsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorSmtpsMonitorToHclTerraform(struct?: DataAviHealthmonitorSmtpsMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorSmtpsMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorSmtpsMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorSmtpsMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domainname - computed: true, optional: false, required: false
  public get domainname() {
    return this.getStringAttribute('domainname');
  }

  // mail_data - computed: true, optional: false, required: false
  public get mailData() {
    return this.getStringAttribute('mail_data');
  }

  // recipients_ids - computed: true, optional: false, required: false
  public get recipientsIds() {
    return this.getListAttribute('recipients_ids');
  }

  // sender_id - computed: true, optional: false, required: false
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }

  // ssl_attributes - computed: true, optional: false, required: false
  private _sslAttributes = new DataAviHealthmonitorSmtpsMonitorSslAttributesList(this, "ssl_attributes", true);
  public get sslAttributes() {
    return this._sslAttributes;
  }
}

export class DataAviHealthmonitorSmtpsMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorSmtpsMonitorOutputReference {
    return new DataAviHealthmonitorSmtpsMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorTcpMonitor {
}

export function dataAviHealthmonitorTcpMonitorToTerraform(struct?: DataAviHealthmonitorTcpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorTcpMonitorToHclTerraform(struct?: DataAviHealthmonitorTcpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorTcpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorTcpMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorTcpMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maintenance_response - computed: true, optional: false, required: false
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }

  // tcp_half_open - computed: true, optional: false, required: false
  public get tcpHalfOpen() {
    return this.getStringAttribute('tcp_half_open');
  }

  // tcp_request - computed: true, optional: false, required: false
  public get tcpRequest() {
    return this.getStringAttribute('tcp_request');
  }

  // tcp_response - computed: true, optional: false, required: false
  public get tcpResponse() {
    return this.getStringAttribute('tcp_response');
  }
}

export class DataAviHealthmonitorTcpMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorTcpMonitorOutputReference {
    return new DataAviHealthmonitorTcpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviHealthmonitorUdpMonitor {
}

export function dataAviHealthmonitorUdpMonitorToTerraform(struct?: DataAviHealthmonitorUdpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviHealthmonitorUdpMonitorToHclTerraform(struct?: DataAviHealthmonitorUdpMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviHealthmonitorUdpMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviHealthmonitorUdpMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviHealthmonitorUdpMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // maintenance_response - computed: true, optional: false, required: false
  public get maintenanceResponse() {
    return this.getStringAttribute('maintenance_response');
  }

  // udp_request - computed: true, optional: false, required: false
  public get udpRequest() {
    return this.getStringAttribute('udp_request');
  }

  // udp_response - computed: true, optional: false, required: false
  public get udpResponse() {
    return this.getStringAttribute('udp_response');
  }
}

export class DataAviHealthmonitorUdpMonitorList extends cdktf.ComplexList {

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
  public get(index: number): DataAviHealthmonitorUdpMonitorOutputReference {
    return new DataAviHealthmonitorUdpMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor avi_healthmonitor}
*/
export class DataAviHealthmonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_healthmonitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviHealthmonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviHealthmonitor to import
  * @param importFromId The id of the existing DataAviHealthmonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviHealthmonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_healthmonitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/healthmonitor avi_healthmonitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviHealthmonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviHealthmonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_healthmonitor',
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
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_duplicate_monitors - computed: true, optional: false, required: false
  public get allowDuplicateMonitors() {
    return this.getStringAttribute('allow_duplicate_monitors');
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataAviHealthmonitorAuthenticationList(this, "authentication", true);
  public get authentication() {
    return this._authentication;
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviHealthmonitorConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_quickstart - computed: true, optional: false, required: false
  public get disableQuickstart() {
    return this.getStringAttribute('disable_quickstart');
  }

  // dns_monitor - computed: true, optional: false, required: false
  private _dnsMonitor = new DataAviHealthmonitorDnsMonitorList(this, "dns_monitor", true);
  public get dnsMonitor() {
    return this._dnsMonitor;
  }

  // external_monitor - computed: true, optional: false, required: false
  private _externalMonitor = new DataAviHealthmonitorExternalMonitorList(this, "external_monitor", true);
  public get externalMonitor() {
    return this._externalMonitor;
  }

  // failed_checks - computed: true, optional: false, required: false
  public get failedChecks() {
    return this.getStringAttribute('failed_checks');
  }

  // ftp_monitor - computed: true, optional: false, required: false
  private _ftpMonitor = new DataAviHealthmonitorFtpMonitorList(this, "ftp_monitor", true);
  public get ftpMonitor() {
    return this._ftpMonitor;
  }

  // ftps_monitor - computed: true, optional: false, required: false
  private _ftpsMonitor = new DataAviHealthmonitorFtpsMonitorList(this, "ftps_monitor", true);
  public get ftpsMonitor() {
    return this._ftpsMonitor;
  }

  // http2_monitor - computed: true, optional: false, required: false
  private _http2Monitor = new DataAviHealthmonitorHttp2MonitorList(this, "http2_monitor", true);
  public get http2Monitor() {
    return this._http2Monitor;
  }

  // http2s_monitor - computed: true, optional: false, required: false
  private _http2SMonitor = new DataAviHealthmonitorHttp2SMonitorList(this, "http2s_monitor", true);
  public get http2SMonitor() {
    return this._http2SMonitor;
  }

  // http_monitor - computed: true, optional: false, required: false
  private _httpMonitor = new DataAviHealthmonitorHttpMonitorList(this, "http_monitor", true);
  public get httpMonitor() {
    return this._httpMonitor;
  }

  // https_monitor - computed: true, optional: false, required: false
  private _httpsMonitor = new DataAviHealthmonitorHttpsMonitorList(this, "https_monitor", true);
  public get httpsMonitor() {
    return this._httpsMonitor;
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

  // imap_monitor - computed: true, optional: false, required: false
  private _imapMonitor = new DataAviHealthmonitorImapMonitorList(this, "imap_monitor", true);
  public get imapMonitor() {
    return this._imapMonitor;
  }

  // imaps_monitor - computed: true, optional: false, required: false
  private _imapsMonitor = new DataAviHealthmonitorImapsMonitorList(this, "imaps_monitor", true);
  public get imapsMonitor() {
    return this._imapsMonitor;
  }

  // is_federated - computed: true, optional: false, required: false
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }

  // ldap_monitor - computed: true, optional: false, required: false
  private _ldapMonitor = new DataAviHealthmonitorLdapMonitorList(this, "ldap_monitor", true);
  public get ldapMonitor() {
    return this._ldapMonitor;
  }

  // ldaps_monitor - computed: true, optional: false, required: false
  private _ldapsMonitor = new DataAviHealthmonitorLdapsMonitorList(this, "ldaps_monitor", true);
  public get ldapsMonitor() {
    return this._ldapsMonitor;
  }

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviHealthmonitorMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }

  // monitor_ip - computed: true, optional: false, required: false
  private _monitorIp = new DataAviHealthmonitorMonitorIpList(this, "monitor_ip", true);
  public get monitorIp() {
    return this._monitorIp;
  }

  // monitor_port - computed: true, optional: false, required: false
  public get monitorPort() {
    return this.getStringAttribute('monitor_port');
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

  // pop3_monitor - computed: true, optional: false, required: false
  private _pop3Monitor = new DataAviHealthmonitorPop3MonitorList(this, "pop3_monitor", true);
  public get pop3Monitor() {
    return this._pop3Monitor;
  }

  // pop3s_monitor - computed: true, optional: false, required: false
  private _pop3SMonitor = new DataAviHealthmonitorPop3SMonitorList(this, "pop3s_monitor", true);
  public get pop3SMonitor() {
    return this._pop3SMonitor;
  }

  // radius_monitor - computed: true, optional: false, required: false
  private _radiusMonitor = new DataAviHealthmonitorRadiusMonitorList(this, "radius_monitor", true);
  public get radiusMonitor() {
    return this._radiusMonitor;
  }

  // receive_timeout - computed: true, optional: false, required: false
  public get receiveTimeout() {
    return this.getStringAttribute('receive_timeout');
  }

  // sctp_monitor - computed: true, optional: false, required: false
  private _sctpMonitor = new DataAviHealthmonitorSctpMonitorList(this, "sctp_monitor", true);
  public get sctpMonitor() {
    return this._sctpMonitor;
  }

  // send_interval - computed: true, optional: false, required: false
  public get sendInterval() {
    return this.getStringAttribute('send_interval');
  }

  // sip_monitor - computed: true, optional: false, required: false
  private _sipMonitor = new DataAviHealthmonitorSipMonitorList(this, "sip_monitor", true);
  public get sipMonitor() {
    return this._sipMonitor;
  }

  // smtp_monitor - computed: true, optional: false, required: false
  private _smtpMonitor = new DataAviHealthmonitorSmtpMonitorList(this, "smtp_monitor", true);
  public get smtpMonitor() {
    return this._smtpMonitor;
  }

  // smtps_monitor - computed: true, optional: false, required: false
  private _smtpsMonitor = new DataAviHealthmonitorSmtpsMonitorList(this, "smtps_monitor", true);
  public get smtpsMonitor() {
    return this._smtpsMonitor;
  }

  // successful_checks - computed: true, optional: false, required: false
  public get successfulChecks() {
    return this.getStringAttribute('successful_checks');
  }

  // tcp_monitor - computed: true, optional: false, required: false
  private _tcpMonitor = new DataAviHealthmonitorTcpMonitorList(this, "tcp_monitor", true);
  public get tcpMonitor() {
    return this._tcpMonitor;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // udp_monitor - computed: true, optional: false, required: false
  private _udpMonitor = new DataAviHealthmonitorUdpMonitorList(this, "udp_monitor", true);
  public get udpMonitor() {
    return this._udpMonitor;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
