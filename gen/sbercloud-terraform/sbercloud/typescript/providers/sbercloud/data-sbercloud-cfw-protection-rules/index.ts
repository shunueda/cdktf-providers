// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSbercloudCfwProtectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the rule action type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#action_type DataSbercloudCfwProtectionRules#action_type}
  */
  readonly actionType?: string;
  /**
  * Specifies the destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#destination DataSbercloudCfwProtectionRules#destination}
  */
  readonly destination?: string;
  /**
  * Specifies the rule direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#direction DataSbercloudCfwProtectionRules#direction}
  */
  readonly direction?: string;
  /**
  * Specifies the firewall instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#fw_instance_id DataSbercloudCfwProtectionRules#fw_instance_id}
  */
  readonly fwInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#id DataSbercloudCfwProtectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#name DataSbercloudCfwProtectionRules#name}
  */
  readonly name?: string;
  /**
  * Specifies the protected object ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#object_id DataSbercloudCfwProtectionRules#object_id}
  */
  readonly objectId: string;
  /**
  * Specifies the region in which to query the resource. If omitted, the provider-level region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#region DataSbercloudCfwProtectionRules#region}
  */
  readonly region?: string;
  /**
  * Specifies the rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#rule_id DataSbercloudCfwProtectionRules#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Specifies the source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#source DataSbercloudCfwProtectionRules#source}
  */
  readonly source?: string;
  /**
  * Specifies the rule status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#status DataSbercloudCfwProtectionRules#status}
  */
  readonly status?: string;
  /**
  * Specifies the key/value pairs to associate with the protection rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#tags DataSbercloudCfwProtectionRules#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Specifies the rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#type DataSbercloudCfwProtectionRules#type}
  */
  readonly type?: string;
}
export interface DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStruct {
}

export function dataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructToTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description_cn - computed: true, optional: false, required: false
  public get descriptionCn() {
    return this.getStringAttribute('description_cn');
  }

  // description_en - computed: true, optional: false, required: false
  public get descriptionEn() {
    return this.getStringAttribute('description_en');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_type - computed: true, optional: false, required: false
  public get regionType() {
    return this.getNumberAttribute('region_type');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwProtectionRulesRecordsDestination {
}

export function dataSbercloudCfwProtectionRulesRecordsDestinationToTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsDestinationToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecordsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecordsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_group - computed: true, optional: false, required: false
  public get addressGroup() {
    return this.getListAttribute('address_group');
  }

  // address_set_id - computed: true, optional: false, required: false
  public get addressSetId() {
    return this.getStringAttribute('address_set_id');
  }

  // address_set_name - computed: true, optional: false, required: false
  public get addressSetName() {
    return this.getStringAttribute('address_set_name');
  }

  // address_set_type - computed: true, optional: false, required: false
  public get addressSetType() {
    return this.getNumberAttribute('address_set_type');
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }

  // domain_address_name - computed: true, optional: false, required: false
  public get domainAddressName() {
    return this.getStringAttribute('domain_address_name');
  }

  // domain_set_id - computed: true, optional: false, required: false
  public get domainSetId() {
    return this.getStringAttribute('domain_set_id');
  }

  // domain_set_name - computed: true, optional: false, required: false
  public get domainSetName() {
    return this.getStringAttribute('domain_set_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }

  // region_list - computed: true, optional: false, required: false
  private _regionList = new DataSbercloudCfwProtectionRulesRecordsDestinationRegionListStructList(this, "region_list", false);
  public get regionList() {
    return this._regionList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsDestinationOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwProtectionRulesRecordsServiceCustomService {
}

export function dataSbercloudCfwProtectionRulesRecordsServiceCustomServiceToTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsServiceCustomService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsServiceCustomServiceToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsServiceCustomService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsServiceCustomServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecordsServiceCustomService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecordsServiceCustomService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsServiceCustomServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsServiceCustomServiceOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsServiceCustomServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwProtectionRulesRecordsService {
}

export function dataSbercloudCfwProtectionRulesRecordsServiceToTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsServiceToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecordsService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecordsService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_service - computed: true, optional: false, required: false
  private _customService = new DataSbercloudCfwProtectionRulesRecordsServiceCustomServiceList(this, "custom_service", false);
  public get customService() {
    return this._customService;
  }

  // dest_port - computed: true, optional: false, required: false
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getNumberListAttribute('protocols');
  }

  // service_group - computed: true, optional: false, required: false
  public get serviceGroup() {
    return this.getListAttribute('service_group');
  }

  // service_set_id - computed: true, optional: false, required: false
  public get serviceSetId() {
    return this.getStringAttribute('service_set_id');
  }

  // service_set_name - computed: true, optional: false, required: false
  public get serviceSetName() {
    return this.getStringAttribute('service_set_name');
  }

  // service_set_type - computed: true, optional: false, required: false
  public get serviceSetType() {
    return this.getNumberAttribute('service_set_type');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsServiceList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsServiceOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwProtectionRulesRecordsSourceRegionListStruct {
}

export function dataSbercloudCfwProtectionRulesRecordsSourceRegionListStructToTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsSourceRegionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsSourceRegionListStructToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsSourceRegionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsSourceRegionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecordsSourceRegionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecordsSourceRegionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description_cn - computed: true, optional: false, required: false
  public get descriptionCn() {
    return this.getStringAttribute('description_cn');
  }

  // description_en - computed: true, optional: false, required: false
  public get descriptionEn() {
    return this.getStringAttribute('description_en');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // region_type - computed: true, optional: false, required: false
  public get regionType() {
    return this.getNumberAttribute('region_type');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsSourceRegionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsSourceRegionListStructOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsSourceRegionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwProtectionRulesRecordsSource {
}

export function dataSbercloudCfwProtectionRulesRecordsSourceToTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsSourceToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecordsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecordsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecordsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_group - computed: true, optional: false, required: false
  public get addressGroup() {
    return this.getListAttribute('address_group');
  }

  // address_set_id - computed: true, optional: false, required: false
  public get addressSetId() {
    return this.getStringAttribute('address_set_id');
  }

  // address_set_name - computed: true, optional: false, required: false
  public get addressSetName() {
    return this.getStringAttribute('address_set_name');
  }

  // address_set_type - computed: true, optional: false, required: false
  public get addressSetType() {
    return this.getNumberAttribute('address_set_type');
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }

  // domain_address_name - computed: true, optional: false, required: false
  public get domainAddressName() {
    return this.getStringAttribute('domain_address_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }

  // region_list - computed: true, optional: false, required: false
  private _regionList = new DataSbercloudCfwProtectionRulesRecordsSourceRegionListStructList(this, "region_list", false);
  public get regionList() {
    return this._regionList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsSourceOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudCfwProtectionRulesRecords {
}

export function dataSbercloudCfwProtectionRulesRecordsToTerraform(struct?: DataSbercloudCfwProtectionRulesRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudCfwProtectionRulesRecordsToHclTerraform(struct?: DataSbercloudCfwProtectionRulesRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudCfwProtectionRulesRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSbercloudCfwProtectionRulesRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudCfwProtectionRulesRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getNumberAttribute('address_type');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataSbercloudCfwProtectionRulesRecordsDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // last_open_time - computed: true, optional: false, required: false
  public get lastOpenTime() {
    return this.getStringAttribute('last_open_time');
  }

  // long_connect_enable - computed: true, optional: false, required: false
  public get longConnectEnable() {
    return this.getNumberAttribute('long_connect_enable');
  }

  // long_connect_time - computed: true, optional: false, required: false
  public get longConnectTime() {
    return this.getNumberAttribute('long_connect_time');
  }

  // long_connect_time_hour - computed: true, optional: false, required: false
  public get longConnectTimeHour() {
    return this.getNumberAttribute('long_connect_time_hour');
  }

  // long_connect_time_minute - computed: true, optional: false, required: false
  public get longConnectTimeMinute() {
    return this.getNumberAttribute('long_connect_time_minute');
  }

  // long_connect_time_second - computed: true, optional: false, required: false
  public get longConnectTimeSecond() {
    return this.getNumberAttribute('long_connect_time_second');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // service - computed: true, optional: false, required: false
  private _service = new DataSbercloudCfwProtectionRulesRecordsServiceList(this, "service", false);
  public get service() {
    return this._service;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataSbercloudCfwProtectionRulesRecordsSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSbercloudCfwProtectionRulesRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudCfwProtectionRulesRecordsOutputReference {
    return new DataSbercloudCfwProtectionRulesRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules sbercloud_cfw_protection_rules}
*/
export class DataSbercloudCfwProtectionRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_cfw_protection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSbercloudCfwProtectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSbercloudCfwProtectionRules to import
  * @param importFromId The id of the existing DataSbercloudCfwProtectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSbercloudCfwProtectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_cfw_protection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/data-sources/cfw_protection_rules sbercloud_cfw_protection_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSbercloudCfwProtectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSbercloudCfwProtectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_cfw_protection_rules',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionType = config.actionType;
    this._destination = config.destination;
    this._direction = config.direction;
    this._fwInstanceId = config.fwInstanceId;
    this._id = config.id;
    this._name = config.name;
    this._objectId = config.objectId;
    this._region = config.region;
    this._ruleId = config.ruleId;
    this._source = config.source;
    this._status = config.status;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // direction - computed: false, optional: true, required: false
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

  // fw_instance_id - computed: false, optional: true, required: false
  private _fwInstanceId?: string; 
  public get fwInstanceId() {
    return this.getStringAttribute('fw_instance_id');
  }
  public set fwInstanceId(value: string) {
    this._fwInstanceId = value;
  }
  public resetFwInstanceId() {
    this._fwInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwInstanceIdInput() {
    return this._fwInstanceId;
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

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // records - computed: true, optional: false, required: false
  private _records = new DataSbercloudCfwProtectionRulesRecordsList(this, "records", false);
  public get records() {
    return this._records;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_type: cdktf.stringToTerraform(this._actionType),
      destination: cdktf.stringToTerraform(this._destination),
      direction: cdktf.stringToTerraform(this._direction),
      fw_instance_id: cdktf.stringToTerraform(this._fwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      object_id: cdktf.stringToTerraform(this._objectId),
      region: cdktf.stringToTerraform(this._region),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      source: cdktf.stringToTerraform(this._source),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
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
      fw_instance_id: {
        value: cdktf.stringToHclTerraform(this._fwInstanceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
