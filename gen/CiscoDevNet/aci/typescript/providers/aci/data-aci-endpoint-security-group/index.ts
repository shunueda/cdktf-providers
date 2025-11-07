// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEndpointSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Endpoint Security Group object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group#name DataAciEndpointSecurityGroup#name}
  */
  readonly name: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group#parent_dn DataAciEndpointSecurityGroup#parent_dn}
  */
  readonly parentDn: string;
  /**
  * relation_fv_rs_cons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group#relation_fv_rs_cons DataAciEndpointSecurityGroup#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: DataAciEndpointSecurityGroupRelationFvRsCons[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_cons_if block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group#relation_fv_rs_cons_if DataAciEndpointSecurityGroup#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: DataAciEndpointSecurityGroupRelationFvRsConsIf[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_prov block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group#relation_fv_rs_prov DataAciEndpointSecurityGroup#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: DataAciEndpointSecurityGroupRelationFvRsProv[] | cdktf.IResolvable;
}
export interface DataAciEndpointSecurityGroupAnnotations {
}

export function dataAciEndpointSecurityGroupAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotations {
}

export function dataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToConsumedContractsTags {
}

export function dataAciEndpointSecurityGroupRelationToConsumedContractsTagsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToConsumedContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToConsumedContractsTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToConsumedContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToConsumedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToConsumedContractsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToConsumedContractsTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToConsumedContractsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToConsumedContractsTagsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToConsumedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToConsumedContracts {
}

export function dataAciEndpointSecurityGroupRelationToConsumedContractsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToConsumedContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToConsumedContractsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToConsumedContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToConsumedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToConsumedContracts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToConsumedContracts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupRelationToConsumedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // contract_name - computed: true, optional: false, required: false
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupRelationToConsumedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciEndpointSecurityGroupRelationToConsumedContractsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToConsumedContractsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToConsumedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToContractMastersAnnotations {
}

export function dataAciEndpointSecurityGroupRelationToContractMastersAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToContractMastersAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToContractMastersAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToContractMastersAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToContractMastersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToContractMastersAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToContractMastersAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToContractMastersAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToContractMastersAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToContractMastersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToContractMastersTags {
}

export function dataAciEndpointSecurityGroupRelationToContractMastersTagsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToContractMastersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToContractMastersTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToContractMastersTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToContractMastersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToContractMastersTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToContractMastersTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToContractMastersTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToContractMastersTagsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToContractMastersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToContractMasters {
}

export function dataAciEndpointSecurityGroupRelationToContractMastersToTerraform(struct?: DataAciEndpointSecurityGroupRelationToContractMasters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToContractMastersToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToContractMasters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToContractMastersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToContractMasters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToContractMasters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupRelationToContractMastersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupRelationToContractMastersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciEndpointSecurityGroupRelationToContractMastersList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToContractMastersOutputReference {
    return new DataAciEndpointSecurityGroupRelationToContractMastersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToImportedContractsAnnotations {
}

export function dataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToImportedContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToImportedContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToImportedContractsAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToImportedContractsAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToImportedContractsTags {
}

export function dataAciEndpointSecurityGroupRelationToImportedContractsTagsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToImportedContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToImportedContractsTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToImportedContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToImportedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToImportedContractsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToImportedContractsTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToImportedContractsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToImportedContractsTagsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToImportedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToImportedContracts {
}

export function dataAciEndpointSecurityGroupRelationToImportedContractsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToImportedContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToImportedContractsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToImportedContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToImportedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToImportedContracts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToImportedContracts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupRelationToImportedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // imported_contract_name - computed: true, optional: false, required: false
  public get importedContractName() {
    return this.getStringAttribute('imported_contract_name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupRelationToImportedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciEndpointSecurityGroupRelationToImportedContractsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToImportedContractsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToImportedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotations {
}

export function dataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToIntraEpgContractsTags {
}

export function dataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToIntraEpgContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToIntraEpgContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToIntraEpgContractsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToIntraEpgContractsTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToIntraEpgContracts {
}

export function dataAciEndpointSecurityGroupRelationToIntraEpgContractsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToIntraEpgContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToIntraEpgContractsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToIntraEpgContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToIntraEpgContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToIntraEpgContracts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToIntraEpgContracts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupRelationToIntraEpgContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // contract_name - computed: true, optional: false, required: false
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupRelationToIntraEpgContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciEndpointSecurityGroupRelationToIntraEpgContractsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToIntraEpgContractsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToIntraEpgContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotations {
}

export function dataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToProvidedContractsTags {
}

export function dataAciEndpointSecurityGroupRelationToProvidedContractsTagsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToProvidedContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToProvidedContractsTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToProvidedContractsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToProvidedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToProvidedContractsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToProvidedContractsTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToProvidedContractsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToProvidedContractsTagsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToProvidedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToProvidedContracts {
}

export function dataAciEndpointSecurityGroupRelationToProvidedContractsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToProvidedContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToProvidedContractsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToProvidedContracts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToProvidedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToProvidedContracts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToProvidedContracts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupRelationToProvidedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // contract_name - computed: true, optional: false, required: false
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupRelationToProvidedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciEndpointSecurityGroupRelationToProvidedContractsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToProvidedContractsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToProvidedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToVrfAnnotations {
}

export function dataAciEndpointSecurityGroupRelationToVrfAnnotationsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToVrfAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToVrfAnnotationsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToVrfAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToVrfAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToVrfAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToVrfAnnotations | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToVrfAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToVrfAnnotationsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToVrfAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToVrfTags {
}

export function dataAciEndpointSecurityGroupRelationToVrfTagsToTerraform(struct?: DataAciEndpointSecurityGroupRelationToVrfTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToVrfTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToVrfTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToVrfTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationToVrfTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToVrfTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupRelationToVrfTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupRelationToVrfTagsOutputReference {
    return new DataAciEndpointSecurityGroupRelationToVrfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationToVrf {
}

export function dataAciEndpointSecurityGroupRelationToVrfToTerraform(struct?: DataAciEndpointSecurityGroupRelationToVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationToVrfToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationToVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationToVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciEndpointSecurityGroupRelationToVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationToVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupRelationToVrfAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupRelationToVrfTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}
export interface DataAciEndpointSecurityGroupTags {
}

export function dataAciEndpointSecurityGroupTagsToTerraform(struct?: DataAciEndpointSecurityGroupTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupTagsToHclTerraform(struct?: DataAciEndpointSecurityGroupTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupTags | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAciEndpointSecurityGroupTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciEndpointSecurityGroupTagsOutputReference {
    return new DataAciEndpointSecurityGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationFvRsCons {
}

export function dataAciEndpointSecurityGroupRelationFvRsConsToTerraform(struct?: DataAciEndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationFvRsConsToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationFvRsConsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable | undefined) {
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

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciEndpointSecurityGroupRelationFvRsConsList extends cdktf.ComplexList {
  public internalValue? : DataAciEndpointSecurityGroupRelationFvRsCons[] | cdktf.IResolvable

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
  public get(index: number): DataAciEndpointSecurityGroupRelationFvRsConsOutputReference {
    return new DataAciEndpointSecurityGroupRelationFvRsConsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationFvRsConsIf {
}

export function dataAciEndpointSecurityGroupRelationFvRsConsIfToTerraform(struct?: DataAciEndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationFvRsConsIfToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationFvRsConsIfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable | undefined) {
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

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciEndpointSecurityGroupRelationFvRsConsIfList extends cdktf.ComplexList {
  public internalValue? : DataAciEndpointSecurityGroupRelationFvRsConsIf[] | cdktf.IResolvable

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
  public get(index: number): DataAciEndpointSecurityGroupRelationFvRsConsIfOutputReference {
    return new DataAciEndpointSecurityGroupRelationFvRsConsIfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciEndpointSecurityGroupRelationFvRsProv {
}

export function dataAciEndpointSecurityGroupRelationFvRsProvToTerraform(struct?: DataAciEndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciEndpointSecurityGroupRelationFvRsProvToHclTerraform(struct?: DataAciEndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciEndpointSecurityGroupRelationFvRsProvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciEndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciEndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable | undefined) {
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

  // match_t - computed: true, optional: false, required: false
  public get matchT() {
    return this.getStringAttribute('match_t');
  }

  // prio - computed: true, optional: false, required: false
  public get prio() {
    return this.getStringAttribute('prio');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
}

export class DataAciEndpointSecurityGroupRelationFvRsProvList extends cdktf.ComplexList {
  public internalValue? : DataAciEndpointSecurityGroupRelationFvRsProv[] | cdktf.IResolvable

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
  public get(index: number): DataAciEndpointSecurityGroupRelationFvRsProvOutputReference {
    return new DataAciEndpointSecurityGroupRelationFvRsProvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group aci_endpoint_security_group}
*/
export class DataAciEndpointSecurityGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_endpoint_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEndpointSecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEndpointSecurityGroup to import
  * @param importFromId The id of the existing DataAciEndpointSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEndpointSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_endpoint_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_security_group aci_endpoint_security_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEndpointSecurityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEndpointSecurityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_endpoint_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parentDn = config.parentDn;
    this._relationFvRsCons.internalValue = config.relationFvRsCons;
    this._relationFvRsConsIf.internalValue = config.relationFvRsConsIf;
    this._relationFvRsProv.internalValue = config.relationFvRsProv;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciEndpointSecurityGroupAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // application_profile_dn - computed: true, optional: false, required: false
  public get applicationProfileDn() {
    return this.getStringAttribute('application_profile_dn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exception_tag - computed: true, optional: false, required: false
  public get exceptionTag() {
    return this.getStringAttribute('exception_tag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intra_esg_isolation - computed: true, optional: false, required: false
  public get intraEsgIsolation() {
    return this.getStringAttribute('intra_esg_isolation');
  }

  // match_criteria - computed: true, optional: false, required: false
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }

  // match_t - computed: true, optional: false, required: false
  public get matchT() {
    return this.getStringAttribute('match_t');
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

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // pc_enf_pref - computed: true, optional: false, required: false
  public get pcEnfPref() {
    return this.getStringAttribute('pc_enf_pref');
  }

  // pc_tag - computed: true, optional: false, required: false
  public get pcTag() {
    return this.getStringAttribute('pc_tag');
  }

  // pref_gr_memb - computed: true, optional: false, required: false
  public get prefGrMemb() {
    return this.getStringAttribute('pref_gr_memb');
  }

  // preferred_group_member - computed: true, optional: false, required: false
  public get preferredGroupMember() {
    return this.getStringAttribute('preferred_group_member');
  }

  // relation_fv_rs_cust_qos_pol - computed: true, optional: false, required: false
  public get relationFvRsCustQosPol() {
    return this.getStringAttribute('relation_fv_rs_cust_qos_pol');
  }

  // relation_fv_rs_intra_epg - computed: true, optional: false, required: false
  public get relationFvRsIntraEpg() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_intra_epg'));
  }

  // relation_fv_rs_prot_by - computed: true, optional: false, required: false
  public get relationFvRsProtBy() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prot_by'));
  }

  // relation_fv_rs_scope - computed: true, optional: false, required: false
  public get relationFvRsScope() {
    return this.getStringAttribute('relation_fv_rs_scope');
  }

  // relation_fv_rs_sec_inherited - computed: true, optional: false, required: false
  public get relationFvRsSecInherited() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_sec_inherited'));
  }

  // relation_to_consumed_contracts - computed: true, optional: false, required: false
  private _relationToConsumedContracts = new DataAciEndpointSecurityGroupRelationToConsumedContractsList(this, "relation_to_consumed_contracts", true);
  public get relationToConsumedContracts() {
    return this._relationToConsumedContracts;
  }

  // relation_to_contract_masters - computed: true, optional: false, required: false
  private _relationToContractMasters = new DataAciEndpointSecurityGroupRelationToContractMastersList(this, "relation_to_contract_masters", true);
  public get relationToContractMasters() {
    return this._relationToContractMasters;
  }

  // relation_to_imported_contracts - computed: true, optional: false, required: false
  private _relationToImportedContracts = new DataAciEndpointSecurityGroupRelationToImportedContractsList(this, "relation_to_imported_contracts", true);
  public get relationToImportedContracts() {
    return this._relationToImportedContracts;
  }

  // relation_to_intra_epg_contracts - computed: true, optional: false, required: false
  private _relationToIntraEpgContracts = new DataAciEndpointSecurityGroupRelationToIntraEpgContractsList(this, "relation_to_intra_epg_contracts", true);
  public get relationToIntraEpgContracts() {
    return this._relationToIntraEpgContracts;
  }

  // relation_to_provided_contracts - computed: true, optional: false, required: false
  private _relationToProvidedContracts = new DataAciEndpointSecurityGroupRelationToProvidedContractsList(this, "relation_to_provided_contracts", true);
  public get relationToProvidedContracts() {
    return this._relationToProvidedContracts;
  }

  // relation_to_vrf - computed: true, optional: false, required: false
  private _relationToVrf = new DataAciEndpointSecurityGroupRelationToVrfOutputReference(this, "relation_to_vrf");
  public get relationToVrf() {
    return this._relationToVrf;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciEndpointSecurityGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // relation_fv_rs_cons - computed: false, optional: true, required: false
  private _relationFvRsCons = new DataAciEndpointSecurityGroupRelationFvRsConsList(this, "relation_fv_rs_cons", true);
  public get relationFvRsCons() {
    return this._relationFvRsCons;
  }
  public putRelationFvRsCons(value: DataAciEndpointSecurityGroupRelationFvRsCons[] | cdktf.IResolvable) {
    this._relationFvRsCons.internalValue = value;
  }
  public resetRelationFvRsCons() {
    this._relationFvRsCons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsInput() {
    return this._relationFvRsCons.internalValue;
  }

  // relation_fv_rs_cons_if - computed: false, optional: true, required: false
  private _relationFvRsConsIf = new DataAciEndpointSecurityGroupRelationFvRsConsIfList(this, "relation_fv_rs_cons_if", true);
  public get relationFvRsConsIf() {
    return this._relationFvRsConsIf;
  }
  public putRelationFvRsConsIf(value: DataAciEndpointSecurityGroupRelationFvRsConsIf[] | cdktf.IResolvable) {
    this._relationFvRsConsIf.internalValue = value;
  }
  public resetRelationFvRsConsIf() {
    this._relationFvRsConsIf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsIfInput() {
    return this._relationFvRsConsIf.internalValue;
  }

  // relation_fv_rs_prov - computed: false, optional: true, required: false
  private _relationFvRsProv = new DataAciEndpointSecurityGroupRelationFvRsProvList(this, "relation_fv_rs_prov", true);
  public get relationFvRsProv() {
    return this._relationFvRsProv;
  }
  public putRelationFvRsProv(value: DataAciEndpointSecurityGroupRelationFvRsProv[] | cdktf.IResolvable) {
    this._relationFvRsProv.internalValue = value;
  }
  public resetRelationFvRsProv() {
    this._relationFvRsProv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvInput() {
    return this._relationFvRsProv.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      relation_fv_rs_cons: cdktf.listMapper(dataAciEndpointSecurityGroupRelationFvRsConsToTerraform, true)(this._relationFvRsCons.internalValue),
      relation_fv_rs_cons_if: cdktf.listMapper(dataAciEndpointSecurityGroupRelationFvRsConsIfToTerraform, true)(this._relationFvRsConsIf.internalValue),
      relation_fv_rs_prov: cdktf.listMapper(dataAciEndpointSecurityGroupRelationFvRsProvToTerraform, true)(this._relationFvRsProv.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_cons: {
        value: cdktf.listMapperHcl(dataAciEndpointSecurityGroupRelationFvRsConsToHclTerraform, true)(this._relationFvRsCons.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciEndpointSecurityGroupRelationFvRsConsList",
      },
      relation_fv_rs_cons_if: {
        value: cdktf.listMapperHcl(dataAciEndpointSecurityGroupRelationFvRsConsIfToHclTerraform, true)(this._relationFvRsConsIf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciEndpointSecurityGroupRelationFvRsConsIfList",
      },
      relation_fv_rs_prov: {
        value: cdktf.listMapperHcl(dataAciEndpointSecurityGroupRelationFvRsProvToHclTerraform, true)(this._relationFvRsProv.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciEndpointSecurityGroupRelationFvRsProvList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
