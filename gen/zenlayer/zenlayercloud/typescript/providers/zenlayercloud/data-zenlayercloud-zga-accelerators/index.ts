// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZgaAcceleratorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accelerate region of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#accelerate_region_id DataZenlayercloudZgaAccelerators#accelerate_region_id}
  */
  readonly accelerateRegionId?: string;
  /**
  * IDs of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#accelerator_ids DataZenlayercloudZgaAccelerators#accelerator_ids}
  */
  readonly acceleratorIds?: string[];
  /**
  * The name of accelerator. The max length of accelerator name is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#accelerator_name DataZenlayercloudZgaAccelerators#accelerator_name}
  */
  readonly acceleratorName?: string;
  /**
  * Status of the accelerator to be queried. Valid values are `Accelerating`, `NotAccelerate`, `Deploying`, `StopAccelerate`, `AccelerateFailure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#accelerator_status DataZenlayercloudZgaAccelerators#accelerator_status}
  */
  readonly acceleratorStatus?: string;
  /**
  * Cname of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#cname DataZenlayercloudZgaAccelerators#cname}
  */
  readonly cname?: string;
  /**
  * Domain of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#domain DataZenlayercloudZgaAccelerators#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#id DataZenlayercloudZgaAccelerators#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Origin of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#origin DataZenlayercloudZgaAccelerators#origin}
  */
  readonly origin?: string;
  /**
  * Origin region of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#origin_region_id DataZenlayercloudZgaAccelerators#origin_region_id}
  */
  readonly originRegionId?: string;
  /**
  * The ID of resource group that the accelerator grouped by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#resource_group_id DataZenlayercloudZgaAccelerators#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#result_output_file DataZenlayercloudZgaAccelerators#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Virtual IP of the accelerator to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#vip DataZenlayercloudZgaAccelerators#vip}
  */
  readonly vip?: string;
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegions {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerate_region_id - computed: true, optional: false, required: false
  public get accelerateRegionId() {
    return this.getStringAttribute('accelerate_region_id');
  }

  // accelerate_region_name - computed: true, optional: false, required: false
  public get accelerateRegionName() {
    return this.getStringAttribute('accelerate_region_name');
  }

  // accelerate_region_status - computed: true, optional: false, required: false
  public get accelerateRegionStatus() {
    return this.getStringAttribute('accelerate_region_status');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRules {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getListAttribute('cidr_ip');
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // listener - computed: true, optional: false, required: false
  public get listener() {
    return this.getStringAttribute('listener');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControl {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsCertificate {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsCertificateToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsCertificateToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // certificate_label - computed: true, optional: false, required: false
  public get certificateLabel() {
    return this.getStringAttribute('certificate_label');
  }

  // common - computed: true, optional: false, required: false
  public get common() {
    return this.getStringAttribute('common');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_names'));
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsCertificateList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsCertificateOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheck {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm - computed: true, optional: false, required: false
  public get alarm() {
    return this.getBooleanAttribute('alarm');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsL4Listeners {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsL4Listeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsL4Listeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsL4Listeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsL4Listeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // back_port - computed: true, optional: false, required: false
  public get backPort() {
    return this.getNumberAttribute('back_port');
  }

  // back_port_range - computed: true, optional: false, required: false
  public get backPortRange() {
    return this.getStringAttribute('back_port_range');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsL7Listeners {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsL7Listeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsL7Listeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsL7Listeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsL7Listeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // back_port - computed: true, optional: false, required: false
  public get backPort() {
    return this.getNumberAttribute('back_port');
  }

  // back_port_range - computed: true, optional: false, required: false
  public get backPortRange() {
    return this.getStringAttribute('back_port_range');
  }

  // back_protocol - computed: true, optional: false, required: false
  public get backProtocol() {
    return this.getStringAttribute('back_protocol');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOpts {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOpts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOpts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOpts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gzip - computed: true, optional: false, required: false
  public get gzip() {
    return this.getBooleanAttribute('gzip');
  }

  // proxy_protocol - computed: true, optional: false, required: false
  public get proxyProtocol() {
    return this.getBooleanAttribute('proxy_protocol');
  }

  // toa - computed: true, optional: false, required: false
  public get toa() {
    return this.getBooleanAttribute('toa');
  }

  // toa_value - computed: true, optional: false, required: false
  public get toaValue() {
    return this.getNumberAttribute('toa_value');
  }

  // websocket - computed: true, optional: false, required: false
  public get websocket() {
    return this.getBooleanAttribute('websocket');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZenlayercloudZgaAcceleratorsAccelerators {
}

export function dataZenlayercloudZgaAcceleratorsAcceleratorsToTerraform(struct?: DataZenlayercloudZgaAcceleratorsAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaAcceleratorsAcceleratorsToHclTerraform(struct?: DataZenlayercloudZgaAcceleratorsAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaAcceleratorsAccelerators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaAcceleratorsAccelerators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerate_regions - computed: true, optional: false, required: false
  private _accelerateRegions = new DataZenlayercloudZgaAcceleratorsAcceleratorsAccelerateRegionsList(this, "accelerate_regions", true);
  public get accelerateRegions() {
    return this._accelerateRegions;
  }

  // accelerator_id - computed: true, optional: false, required: false
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }

  // accelerator_name - computed: true, optional: false, required: false
  public get acceleratorName() {
    return this.getStringAttribute('accelerator_name');
  }

  // accelerator_status - computed: true, optional: false, required: false
  public get acceleratorStatus() {
    return this.getStringAttribute('accelerator_status');
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }

  // access_control - computed: true, optional: false, required: false
  private _accessControl = new DataZenlayercloudZgaAcceleratorsAcceleratorsAccessControlList(this, "access_control", false);
  public get accessControl() {
    return this._accessControl;
  }

  // backup_origin - computed: true, optional: false, required: false
  public get backupOrigin() {
    return this.getListAttribute('backup_origin');
  }

  // certificate - computed: true, optional: false, required: false
  private _certificate = new DataZenlayercloudZgaAcceleratorsAcceleratorsCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataZenlayercloudZgaAcceleratorsAcceleratorsHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }

  // l4_listeners - computed: true, optional: false, required: false
  private _l4Listeners = new DataZenlayercloudZgaAcceleratorsAcceleratorsL4ListenersList(this, "l4_listeners", false);
  public get l4Listeners() {
    return this._l4Listeners;
  }

  // l7_listeners - computed: true, optional: false, required: false
  private _l7Listeners = new DataZenlayercloudZgaAcceleratorsAcceleratorsL7ListenersList(this, "l7_listeners", false);
  public get l7Listeners() {
    return this._l7Listeners;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getListAttribute('origin');
  }

  // origin_region_id - computed: true, optional: false, required: false
  public get originRegionId() {
    return this.getStringAttribute('origin_region_id');
  }

  // origin_region_name - computed: true, optional: false, required: false
  public get originRegionName() {
    return this.getStringAttribute('origin_region_name');
  }

  // protocol_opts - computed: true, optional: false, required: false
  private _protocolOpts = new DataZenlayercloudZgaAcceleratorsAcceleratorsProtocolOptsList(this, "protocol_opts", false);
  public get protocolOpts() {
    return this._protocolOpts;
  }

  // relate_domains - computed: true, optional: false, required: false
  public get relateDomains() {
    return this.getListAttribute('relate_domains');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
}

export class DataZenlayercloudZgaAcceleratorsAcceleratorsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaAcceleratorsAcceleratorsOutputReference {
    return new DataZenlayercloudZgaAcceleratorsAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators zenlayercloud_zga_accelerators}
*/
export class DataZenlayercloudZgaAccelerators extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zga_accelerators";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZgaAccelerators resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZgaAccelerators to import
  * @param importFromId The id of the existing DataZenlayercloudZgaAccelerators that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZgaAccelerators to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zga_accelerators", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/data-sources/zga_accelerators zenlayercloud_zga_accelerators} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZgaAcceleratorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZgaAcceleratorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zga_accelerators',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accelerateRegionId = config.accelerateRegionId;
    this._acceleratorIds = config.acceleratorIds;
    this._acceleratorName = config.acceleratorName;
    this._acceleratorStatus = config.acceleratorStatus;
    this._cname = config.cname;
    this._domain = config.domain;
    this._id = config.id;
    this._origin = config.origin;
    this._originRegionId = config.originRegionId;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
    this._vip = config.vip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerate_region_id - computed: false, optional: true, required: false
  private _accelerateRegionId?: string; 
  public get accelerateRegionId() {
    return this.getStringAttribute('accelerate_region_id');
  }
  public set accelerateRegionId(value: string) {
    this._accelerateRegionId = value;
  }
  public resetAccelerateRegionId() {
    this._accelerateRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateRegionIdInput() {
    return this._accelerateRegionId;
  }

  // accelerator_ids - computed: false, optional: true, required: false
  private _acceleratorIds?: string[]; 
  public get acceleratorIds() {
    return cdktf.Fn.tolist(this.getListAttribute('accelerator_ids'));
  }
  public set acceleratorIds(value: string[]) {
    this._acceleratorIds = value;
  }
  public resetAcceleratorIds() {
    this._acceleratorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdsInput() {
    return this._acceleratorIds;
  }

  // accelerator_name - computed: false, optional: true, required: false
  private _acceleratorName?: string; 
  public get acceleratorName() {
    return this.getStringAttribute('accelerator_name');
  }
  public set acceleratorName(value: string) {
    this._acceleratorName = value;
  }
  public resetAcceleratorName() {
    this._acceleratorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorNameInput() {
    return this._acceleratorName;
  }

  // accelerator_status - computed: false, optional: true, required: false
  private _acceleratorStatus?: string; 
  public get acceleratorStatus() {
    return this.getStringAttribute('accelerator_status');
  }
  public set acceleratorStatus(value: string) {
    this._acceleratorStatus = value;
  }
  public resetAcceleratorStatus() {
    this._acceleratorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorStatusInput() {
    return this._acceleratorStatus;
  }

  // accelerators - computed: true, optional: false, required: false
  private _accelerators = new DataZenlayercloudZgaAcceleratorsAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_region_id - computed: false, optional: true, required: false
  private _originRegionId?: string; 
  public get originRegionId() {
    return this.getStringAttribute('origin_region_id');
  }
  public set originRegionId(value: string) {
    this._originRegionId = value;
  }
  public resetOriginRegionId() {
    this._originRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRegionIdInput() {
    return this._originRegionId;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerate_region_id: cdktf.stringToTerraform(this._accelerateRegionId),
      accelerator_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acceleratorIds),
      accelerator_name: cdktf.stringToTerraform(this._acceleratorName),
      accelerator_status: cdktf.stringToTerraform(this._acceleratorStatus),
      cname: cdktf.stringToTerraform(this._cname),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      origin: cdktf.stringToTerraform(this._origin),
      origin_region_id: cdktf.stringToTerraform(this._originRegionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      vip: cdktf.stringToTerraform(this._vip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerate_region_id: {
        value: cdktf.stringToHclTerraform(this._accelerateRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accelerator_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acceleratorIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      accelerator_name: {
        value: cdktf.stringToHclTerraform(this._acceleratorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accelerator_status: {
        value: cdktf.stringToHclTerraform(this._acceleratorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_region_id: {
        value: cdktf.stringToHclTerraform(this._originRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
