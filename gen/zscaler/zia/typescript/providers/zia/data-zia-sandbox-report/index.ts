// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaSandboxReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#details DataZiaSandboxReport#details}
  */
  readonly details?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#id DataZiaSandboxReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#md5_hash DataZiaSandboxReport#md5_hash}
  */
  readonly md5Hash: string;
  /**
  * exploit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#exploit DataZiaSandboxReport#exploit}
  */
  readonly exploit?: DataZiaSandboxReportExploit[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#networking DataZiaSandboxReport#networking}
  */
  readonly networking?: DataZiaSandboxReportNetworking[] | cdktf.IResolvable;
  /**
  * persistence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#persistence DataZiaSandboxReport#persistence}
  */
  readonly persistence?: DataZiaSandboxReportPersistence[] | cdktf.IResolvable;
  /**
  * security_bypass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#security_bypass DataZiaSandboxReport#security_bypass}
  */
  readonly securityBypass?: DataZiaSandboxReportSecurityBypass[] | cdktf.IResolvable;
  /**
  * spyware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#spyware DataZiaSandboxReport#spyware}
  */
  readonly spyware?: DataZiaSandboxReportSpyware[] | cdktf.IResolvable;
  /**
  * stealth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#stealth DataZiaSandboxReport#stealth}
  */
  readonly stealth?: DataZiaSandboxReportStealth[] | cdktf.IResolvable;
}
export interface DataZiaSandboxReportClassification {
}

export function dataZiaSandboxReportClassificationToTerraform(struct?: DataZiaSandboxReportClassification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportClassificationToHclTerraform(struct?: DataZiaSandboxReportClassification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportClassificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportClassification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportClassification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // detected_malware - computed: true, optional: false, required: false
  public get detectedMalware() {
    return this.getStringAttribute('detected_malware');
  }

  // score - computed: true, optional: false, required: false
  public get score() {
    return this.getNumberAttribute('score');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataZiaSandboxReportClassificationList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaSandboxReportClassificationOutputReference {
    return new DataZiaSandboxReportClassificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportFileProperties {
}

export function dataZiaSandboxReportFilePropertiesToTerraform(struct?: DataZiaSandboxReportFileProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportFilePropertiesToHclTerraform(struct?: DataZiaSandboxReportFileProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportFilePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportFileProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportFileProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digital_cerificate - computed: true, optional: false, required: false
  public get digitalCerificate() {
    return this.getStringAttribute('digital_cerificate');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // root_ca - computed: true, optional: false, required: false
  public get rootCa() {
    return this.getStringAttribute('root_ca');
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // ssdeep - computed: true, optional: false, required: false
  public get ssdeep() {
    return this.getStringAttribute('ssdeep');
  }
}

export class DataZiaSandboxReportFilePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaSandboxReportFilePropertiesOutputReference {
    return new DataZiaSandboxReportFilePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportOrigin {
}

export function dataZiaSandboxReportOriginToTerraform(struct?: DataZiaSandboxReportOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportOriginToHclTerraform(struct?: DataZiaSandboxReportOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }
}

export class DataZiaSandboxReportOriginList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaSandboxReportOriginOutputReference {
    return new DataZiaSandboxReportOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportSummary {
}

export function dataZiaSandboxReportSummaryToTerraform(struct?: DataZiaSandboxReportSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportSummaryToHclTerraform(struct?: DataZiaSandboxReportSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataZiaSandboxReportSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaSandboxReportSummaryOutputReference {
    return new DataZiaSandboxReportSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportSystemSummary {
}

export function dataZiaSandboxReportSystemSummaryToTerraform(struct?: DataZiaSandboxReportSystemSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportSystemSummaryToHclTerraform(struct?: DataZiaSandboxReportSystemSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportSystemSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportSystemSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportSystemSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return this.getListAttribute('signature_sources');
  }
}

export class DataZiaSandboxReportSystemSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaSandboxReportSystemSummaryOutputReference {
    return new DataZiaSandboxReportSystemSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportExploit {
}

export function dataZiaSandboxReportExploitToTerraform(struct?: DataZiaSandboxReportExploit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportExploitToHclTerraform(struct?: DataZiaSandboxReportExploit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportExploitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportExploit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportExploit | cdktf.IResolvable | undefined) {
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

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_sources'));
  }
}

export class DataZiaSandboxReportExploitList extends cdktf.ComplexList {
  public internalValue? : DataZiaSandboxReportExploit[] | cdktf.IResolvable

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
  public get(index: number): DataZiaSandboxReportExploitOutputReference {
    return new DataZiaSandboxReportExploitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportNetworking {
}

export function dataZiaSandboxReportNetworkingToTerraform(struct?: DataZiaSandboxReportNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportNetworkingToHclTerraform(struct?: DataZiaSandboxReportNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportNetworking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportNetworking | cdktf.IResolvable | undefined) {
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

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_sources'));
  }
}

export class DataZiaSandboxReportNetworkingList extends cdktf.ComplexList {
  public internalValue? : DataZiaSandboxReportNetworking[] | cdktf.IResolvable

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
  public get(index: number): DataZiaSandboxReportNetworkingOutputReference {
    return new DataZiaSandboxReportNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportPersistence {
}

export function dataZiaSandboxReportPersistenceToTerraform(struct?: DataZiaSandboxReportPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportPersistenceToHclTerraform(struct?: DataZiaSandboxReportPersistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportPersistenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportPersistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportPersistence | cdktf.IResolvable | undefined) {
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

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_sources'));
  }
}

export class DataZiaSandboxReportPersistenceList extends cdktf.ComplexList {
  public internalValue? : DataZiaSandboxReportPersistence[] | cdktf.IResolvable

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
  public get(index: number): DataZiaSandboxReportPersistenceOutputReference {
    return new DataZiaSandboxReportPersistenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportSecurityBypass {
}

export function dataZiaSandboxReportSecurityBypassToTerraform(struct?: DataZiaSandboxReportSecurityBypass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportSecurityBypassToHclTerraform(struct?: DataZiaSandboxReportSecurityBypass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportSecurityBypassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportSecurityBypass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportSecurityBypass | cdktf.IResolvable | undefined) {
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

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_sources'));
  }
}

export class DataZiaSandboxReportSecurityBypassList extends cdktf.ComplexList {
  public internalValue? : DataZiaSandboxReportSecurityBypass[] | cdktf.IResolvable

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
  public get(index: number): DataZiaSandboxReportSecurityBypassOutputReference {
    return new DataZiaSandboxReportSecurityBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportSpyware {
}

export function dataZiaSandboxReportSpywareToTerraform(struct?: DataZiaSandboxReportSpyware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportSpywareToHclTerraform(struct?: DataZiaSandboxReportSpyware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportSpywareOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportSpyware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportSpyware | cdktf.IResolvable | undefined) {
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

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_sources'));
  }
}

export class DataZiaSandboxReportSpywareList extends cdktf.ComplexList {
  public internalValue? : DataZiaSandboxReportSpyware[] | cdktf.IResolvable

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
  public get(index: number): DataZiaSandboxReportSpywareOutputReference {
    return new DataZiaSandboxReportSpywareOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaSandboxReportStealth {
}

export function dataZiaSandboxReportStealthToTerraform(struct?: DataZiaSandboxReportStealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaSandboxReportStealthToHclTerraform(struct?: DataZiaSandboxReportStealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaSandboxReportStealthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaSandboxReportStealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaSandboxReportStealth | cdktf.IResolvable | undefined) {
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

  // risk - computed: true, optional: false, required: false
  public get risk() {
    return this.getStringAttribute('risk');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signature_sources - computed: true, optional: false, required: false
  public get signatureSources() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_sources'));
  }
}

export class DataZiaSandboxReportStealthList extends cdktf.ComplexList {
  public internalValue? : DataZiaSandboxReportStealth[] | cdktf.IResolvable

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
  public get(index: number): DataZiaSandboxReportStealthOutputReference {
    return new DataZiaSandboxReportStealthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report zia_sandbox_report}
*/
export class DataZiaSandboxReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_sandbox_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaSandboxReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaSandboxReport to import
  * @param importFromId The id of the existing DataZiaSandboxReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaSandboxReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_sandbox_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/sandbox_report zia_sandbox_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaSandboxReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataZiaSandboxReportConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_sandbox_report',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._details = config.details;
    this._id = config.id;
    this._md5Hash = config.md5Hash;
    this._exploit.internalValue = config.exploit;
    this._networking.internalValue = config.networking;
    this._persistence.internalValue = config.persistence;
    this._securityBypass.internalValue = config.securityBypass;
    this._spyware.internalValue = config.spyware;
    this._stealth.internalValue = config.stealth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classification - computed: true, optional: false, required: false
  private _classification = new DataZiaSandboxReportClassificationList(this, "classification", true);
  public get classification() {
    return this._classification;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // file_properties - computed: true, optional: false, required: false
  private _fileProperties = new DataZiaSandboxReportFilePropertiesList(this, "file_properties", true);
  public get fileProperties() {
    return this._fileProperties;
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

  // md5_hash - computed: false, optional: false, required: true
  private _md5Hash?: string; 
  public get md5Hash() {
    return this.getStringAttribute('md5_hash');
  }
  public set md5Hash(value: string) {
    this._md5Hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get md5HashInput() {
    return this._md5Hash;
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataZiaSandboxReportOriginList(this, "origin", false);
  public get origin() {
    return this._origin;
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new DataZiaSandboxReportSummaryList(this, "summary", true);
  public get summary() {
    return this._summary;
  }

  // system_summary - computed: true, optional: false, required: false
  private _systemSummary = new DataZiaSandboxReportSystemSummaryList(this, "system_summary", false);
  public get systemSummary() {
    return this._systemSummary;
  }

  // exploit - computed: false, optional: true, required: false
  private _exploit = new DataZiaSandboxReportExploitList(this, "exploit", true);
  public get exploit() {
    return this._exploit;
  }
  public putExploit(value: DataZiaSandboxReportExploit[] | cdktf.IResolvable) {
    this._exploit.internalValue = value;
  }
  public resetExploit() {
    this._exploit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exploitInput() {
    return this._exploit.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new DataZiaSandboxReportNetworkingList(this, "networking", true);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataZiaSandboxReportNetworking[] | cdktf.IResolvable) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // persistence - computed: false, optional: true, required: false
  private _persistence = new DataZiaSandboxReportPersistenceList(this, "persistence", true);
  public get persistence() {
    return this._persistence;
  }
  public putPersistence(value: DataZiaSandboxReportPersistence[] | cdktf.IResolvable) {
    this._persistence.internalValue = value;
  }
  public resetPersistence() {
    this._persistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence.internalValue;
  }

  // security_bypass - computed: false, optional: true, required: false
  private _securityBypass = new DataZiaSandboxReportSecurityBypassList(this, "security_bypass", true);
  public get securityBypass() {
    return this._securityBypass;
  }
  public putSecurityBypass(value: DataZiaSandboxReportSecurityBypass[] | cdktf.IResolvable) {
    this._securityBypass.internalValue = value;
  }
  public resetSecurityBypass() {
    this._securityBypass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityBypassInput() {
    return this._securityBypass.internalValue;
  }

  // spyware - computed: false, optional: true, required: false
  private _spyware = new DataZiaSandboxReportSpywareList(this, "spyware", true);
  public get spyware() {
    return this._spyware;
  }
  public putSpyware(value: DataZiaSandboxReportSpyware[] | cdktf.IResolvable) {
    this._spyware.internalValue = value;
  }
  public resetSpyware() {
    this._spyware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware.internalValue;
  }

  // stealth - computed: false, optional: true, required: false
  private _stealth = new DataZiaSandboxReportStealthList(this, "stealth", true);
  public get stealth() {
    return this._stealth;
  }
  public putStealth(value: DataZiaSandboxReportStealth[] | cdktf.IResolvable) {
    this._stealth.internalValue = value;
  }
  public resetStealth() {
    this._stealth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stealthInput() {
    return this._stealth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      details: cdktf.stringToTerraform(this._details),
      id: cdktf.stringToTerraform(this._id),
      md5_hash: cdktf.stringToTerraform(this._md5Hash),
      exploit: cdktf.listMapper(dataZiaSandboxReportExploitToTerraform, true)(this._exploit.internalValue),
      networking: cdktf.listMapper(dataZiaSandboxReportNetworkingToTerraform, true)(this._networking.internalValue),
      persistence: cdktf.listMapper(dataZiaSandboxReportPersistenceToTerraform, true)(this._persistence.internalValue),
      security_bypass: cdktf.listMapper(dataZiaSandboxReportSecurityBypassToTerraform, true)(this._securityBypass.internalValue),
      spyware: cdktf.listMapper(dataZiaSandboxReportSpywareToTerraform, true)(this._spyware.internalValue),
      stealth: cdktf.listMapper(dataZiaSandboxReportStealthToTerraform, true)(this._stealth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      details: {
        value: cdktf.stringToHclTerraform(this._details),
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
      md5_hash: {
        value: cdktf.stringToHclTerraform(this._md5Hash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exploit: {
        value: cdktf.listMapperHcl(dataZiaSandboxReportExploitToHclTerraform, true)(this._exploit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaSandboxReportExploitList",
      },
      networking: {
        value: cdktf.listMapperHcl(dataZiaSandboxReportNetworkingToHclTerraform, true)(this._networking.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaSandboxReportNetworkingList",
      },
      persistence: {
        value: cdktf.listMapperHcl(dataZiaSandboxReportPersistenceToHclTerraform, true)(this._persistence.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaSandboxReportPersistenceList",
      },
      security_bypass: {
        value: cdktf.listMapperHcl(dataZiaSandboxReportSecurityBypassToHclTerraform, true)(this._securityBypass.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaSandboxReportSecurityBypassList",
      },
      spyware: {
        value: cdktf.listMapperHcl(dataZiaSandboxReportSpywareToHclTerraform, true)(this._spyware.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaSandboxReportSpywareList",
      },
      stealth: {
        value: cdktf.listMapperHcl(dataZiaSandboxReportStealthToHclTerraform, true)(this._stealth.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZiaSandboxReportStealthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
