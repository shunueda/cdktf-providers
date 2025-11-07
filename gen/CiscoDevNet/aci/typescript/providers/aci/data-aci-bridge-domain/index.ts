// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciBridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain#name DataAciBridgeDomain#name}
  */
  readonly name: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain#parent_dn DataAciBridgeDomain#parent_dn}
  */
  readonly parentDn: string;
  /**
  * relation_fv_rs_bd_to_netflow_monitor_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain#relation_fv_rs_bd_to_netflow_monitor_pol DataAciBridgeDomain#relation_fv_rs_bd_to_netflow_monitor_pol}
  */
  readonly relationFvRsBdToNetflowMonitorPol?: DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol[] | cdktf.IResolvable;
}
export interface DataAciBridgeDomainAnnotations {
}

export function dataAciBridgeDomainAnnotationsToTerraform(struct?: DataAciBridgeDomainAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainAnnotationsToHclTerraform(struct?: DataAciBridgeDomainAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainAnnotations | undefined) {
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

export class DataAciBridgeDomainAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainAnnotationsOutputReference {
    return new DataAciBridgeDomainAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainLegacyModeAnnotations {
}

export function dataAciBridgeDomainLegacyModeAnnotationsToTerraform(struct?: DataAciBridgeDomainLegacyModeAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainLegacyModeAnnotationsToHclTerraform(struct?: DataAciBridgeDomainLegacyModeAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainLegacyModeAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainLegacyModeAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainLegacyModeAnnotations | undefined) {
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

export class DataAciBridgeDomainLegacyModeAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainLegacyModeAnnotationsOutputReference {
    return new DataAciBridgeDomainLegacyModeAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainLegacyModeTags {
}

export function dataAciBridgeDomainLegacyModeTagsToTerraform(struct?: DataAciBridgeDomainLegacyModeTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainLegacyModeTagsToHclTerraform(struct?: DataAciBridgeDomainLegacyModeTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainLegacyModeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainLegacyModeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainLegacyModeTags | undefined) {
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

export class DataAciBridgeDomainLegacyModeTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainLegacyModeTagsOutputReference {
    return new DataAciBridgeDomainLegacyModeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainLegacyMode {
}

export function dataAciBridgeDomainLegacyModeToTerraform(struct?: DataAciBridgeDomainLegacyMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainLegacyModeToHclTerraform(struct?: DataAciBridgeDomainLegacyMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainLegacyModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainLegacyMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainLegacyMode | undefined) {
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
  private _annotations = new DataAciBridgeDomainLegacyModeAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encapsulation - computed: true, optional: false, required: false
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // owner_key - computed: true, optional: false, required: false
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }

  // owner_tag - computed: true, optional: false, required: false
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainLegacyModeTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotations {
}

export function dataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToDhcpRelayPolicyTags {
}

export function dataAciBridgeDomainRelationToDhcpRelayPolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToDhcpRelayPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToDhcpRelayPolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToDhcpRelayPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToDhcpRelayPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToDhcpRelayPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToDhcpRelayPolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToDhcpRelayPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToDhcpRelayPolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToDhcpRelayPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToDhcpRelayPolicy {
}

export function dataAciBridgeDomainRelationToDhcpRelayPolicyToTerraform(struct?: DataAciBridgeDomainRelationToDhcpRelayPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToDhcpRelayPolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToDhcpRelayPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToDhcpRelayPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToDhcpRelayPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToDhcpRelayPolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToDhcpRelayPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // dhcp_relay_policy_name - computed: true, optional: false, required: false
  public get dhcpRelayPolicyName() {
    return this.getStringAttribute('dhcp_relay_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToDhcpRelayPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotations {
}

export function dataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToEndPointRetentionPolicyTags {
}

export function dataAciBridgeDomainRelationToEndPointRetentionPolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToEndPointRetentionPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToEndPointRetentionPolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToEndPointRetentionPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToEndPointRetentionPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToEndPointRetentionPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToEndPointRetentionPolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToEndPointRetentionPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToEndPointRetentionPolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToEndPointRetentionPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToEndPointRetentionPolicy {
}

export function dataAciBridgeDomainRelationToEndPointRetentionPolicyToTerraform(struct?: DataAciBridgeDomainRelationToEndPointRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToEndPointRetentionPolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToEndPointRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToEndPointRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToEndPointRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToEndPointRetentionPolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToEndPointRetentionPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // end_point_retention_policy_name - computed: true, optional: false, required: false
  public get endPointRetentionPolicyName() {
    return this.getStringAttribute('end_point_retention_policy_name');
  }

  // resolve_action - computed: true, optional: false, required: false
  public get resolveAction() {
    return this.getStringAttribute('resolve_action');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToEndPointRetentionPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotations {
}

export function dataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToFirstHopSecurityPolicyTags {
}

export function dataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToFirstHopSecurityPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToFirstHopSecurityPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToFirstHopSecurityPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToFirstHopSecurityPolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToFirstHopSecurityPolicy {
}

export function dataAciBridgeDomainRelationToFirstHopSecurityPolicyToTerraform(struct?: DataAciBridgeDomainRelationToFirstHopSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToFirstHopSecurityPolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToFirstHopSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToFirstHopSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToFirstHopSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToFirstHopSecurityPolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToFirstHopSecurityPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // first_hop_security_policy_name - computed: true, optional: false, required: false
  public get firstHopSecurityPolicyName() {
    return this.getStringAttribute('first_hop_security_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToFirstHopSecurityPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotations {
}

export function dataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToIgmpSnoopingPolicyTags {
}

export function dataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToIgmpSnoopingPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToIgmpSnoopingPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToIgmpSnoopingPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToIgmpSnoopingPolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToIgmpSnoopingPolicy {
}

export function dataAciBridgeDomainRelationToIgmpSnoopingPolicyToTerraform(struct?: DataAciBridgeDomainRelationToIgmpSnoopingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToIgmpSnoopingPolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToIgmpSnoopingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToIgmpSnoopingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToIgmpSnoopingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToIgmpSnoopingPolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToIgmpSnoopingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // igmp_snooping_policy_name - computed: true, optional: false, required: false
  public get igmpSnoopingPolicyName() {
    return this.getStringAttribute('igmp_snooping_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToIgmpSnoopingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToL3OutsidesAnnotations {
}

export function dataAciBridgeDomainRelationToL3OutsidesAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToL3OutsidesAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToL3OutsidesAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToL3OutsidesAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToL3OutsidesAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToL3OutsidesAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToL3OutsidesAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToL3OutsidesAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToL3OutsidesAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToL3OutsidesAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToL3OutsidesTags {
}

export function dataAciBridgeDomainRelationToL3OutsidesTagsToTerraform(struct?: DataAciBridgeDomainRelationToL3OutsidesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToL3OutsidesTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToL3OutsidesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToL3OutsidesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToL3OutsidesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToL3OutsidesTags | undefined) {
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

export class DataAciBridgeDomainRelationToL3OutsidesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToL3OutsidesTagsOutputReference {
    return new DataAciBridgeDomainRelationToL3OutsidesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToL3Outsides {
}

export function dataAciBridgeDomainRelationToL3OutsidesToTerraform(struct?: DataAciBridgeDomainRelationToL3Outsides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToL3OutsidesToHclTerraform(struct?: DataAciBridgeDomainRelationToL3Outsides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToL3OutsidesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToL3Outsides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToL3Outsides | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToL3OutsidesAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // l3_outside_name - computed: true, optional: false, required: false
  public get l3OutsideName() {
    return this.getStringAttribute('l3_outside_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToL3OutsidesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciBridgeDomainRelationToL3OutsidesList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToL3OutsidesOutputReference {
    return new DataAciBridgeDomainRelationToL3OutsidesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotations {
}

export function dataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToMldSnoopingPolicyTags {
}

export function dataAciBridgeDomainRelationToMldSnoopingPolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToMldSnoopingPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToMldSnoopingPolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToMldSnoopingPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToMldSnoopingPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToMldSnoopingPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToMldSnoopingPolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToMldSnoopingPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToMldSnoopingPolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToMldSnoopingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToMldSnoopingPolicy {
}

export function dataAciBridgeDomainRelationToMldSnoopingPolicyToTerraform(struct?: DataAciBridgeDomainRelationToMldSnoopingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToMldSnoopingPolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToMldSnoopingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToMldSnoopingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToMldSnoopingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToMldSnoopingPolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToMldSnoopingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // mld_snooping_policy_name - computed: true, optional: false, required: false
  public get mldSnoopingPolicyName() {
    return this.getStringAttribute('mld_snooping_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToMldSnoopingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToMonitoringPolicyAnnotations {
}

export function dataAciBridgeDomainRelationToMonitoringPolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToMonitoringPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToMonitoringPolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToMonitoringPolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToMonitoringPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToMonitoringPolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToMonitoringPolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToMonitoringPolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToMonitoringPolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToMonitoringPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToMonitoringPolicyTags {
}

export function dataAciBridgeDomainRelationToMonitoringPolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToMonitoringPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToMonitoringPolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToMonitoringPolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToMonitoringPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToMonitoringPolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToMonitoringPolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToMonitoringPolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToMonitoringPolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToMonitoringPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToMonitoringPolicy {
}

export function dataAciBridgeDomainRelationToMonitoringPolicyToTerraform(struct?: DataAciBridgeDomainRelationToMonitoringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToMonitoringPolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToMonitoringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToMonitoringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToMonitoringPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToMonitoringPolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToMonitoringPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // monitoring_policy_name - computed: true, optional: false, required: false
  public get monitoringPolicyName() {
    return this.getStringAttribute('monitoring_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToMonitoringPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations {
}

export function dataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags {
}

export function dataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsToTerraform(struct?: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTags | undefined) {
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

export class DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsOutputReference {
    return new DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicy {
}

export function dataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyToTerraform(struct?: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyToHclTerraform(struct?: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicy | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // neighbor_discovery_interface_policy_name - computed: true, optional: false, required: false
  public get neighborDiscoveryInterfacePolicyName() {
    return this.getStringAttribute('neighbor_discovery_interface_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotations {
}

export function dataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToNetflowMonitorPoliciesTags {
}

export function dataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsToTerraform(struct?: DataAciBridgeDomainRelationToNetflowMonitorPoliciesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToNetflowMonitorPoliciesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToNetflowMonitorPoliciesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToNetflowMonitorPoliciesTags | undefined) {
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

export class DataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsOutputReference {
    return new DataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToNetflowMonitorPolicies {
}

export function dataAciBridgeDomainRelationToNetflowMonitorPoliciesToTerraform(struct?: DataAciBridgeDomainRelationToNetflowMonitorPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToNetflowMonitorPoliciesToHclTerraform(struct?: DataAciBridgeDomainRelationToNetflowMonitorPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToNetflowMonitorPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToNetflowMonitorPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToNetflowMonitorPolicies | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToNetflowMonitorPoliciesAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // netflow_monitor_policy_name - computed: true, optional: false, required: false
  public get netflowMonitorPolicyName() {
    return this.getStringAttribute('netflow_monitor_policy_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToNetflowMonitorPoliciesTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciBridgeDomainRelationToNetflowMonitorPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToNetflowMonitorPoliciesOutputReference {
    return new DataAciBridgeDomainRelationToNetflowMonitorPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToRouteControlProfileAnnotations {
}

export function dataAciBridgeDomainRelationToRouteControlProfileAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToRouteControlProfileAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToRouteControlProfileAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToRouteControlProfileAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToRouteControlProfileAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToRouteControlProfileAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToRouteControlProfileAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToRouteControlProfileAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToRouteControlProfileAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToRouteControlProfileAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToRouteControlProfileTags {
}

export function dataAciBridgeDomainRelationToRouteControlProfileTagsToTerraform(struct?: DataAciBridgeDomainRelationToRouteControlProfileTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToRouteControlProfileTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToRouteControlProfileTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToRouteControlProfileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToRouteControlProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToRouteControlProfileTags | undefined) {
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

export class DataAciBridgeDomainRelationToRouteControlProfileTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToRouteControlProfileTagsOutputReference {
    return new DataAciBridgeDomainRelationToRouteControlProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToRouteControlProfile {
}

export function dataAciBridgeDomainRelationToRouteControlProfileToTerraform(struct?: DataAciBridgeDomainRelationToRouteControlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToRouteControlProfileToHclTerraform(struct?: DataAciBridgeDomainRelationToRouteControlProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToRouteControlProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToRouteControlProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToRouteControlProfile | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToRouteControlProfileAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // l3_outside_name - computed: true, optional: false, required: false
  public get l3OutsideName() {
    return this.getStringAttribute('l3_outside_name');
  }

  // route_control_profile_name - computed: true, optional: false, required: false
  public get routeControlProfileName() {
    return this.getStringAttribute('route_control_profile_name');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToRouteControlProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}
export interface DataAciBridgeDomainRelationToVrfAnnotations {
}

export function dataAciBridgeDomainRelationToVrfAnnotationsToTerraform(struct?: DataAciBridgeDomainRelationToVrfAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToVrfAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRelationToVrfAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToVrfAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToVrfAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToVrfAnnotations | undefined) {
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

export class DataAciBridgeDomainRelationToVrfAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToVrfAnnotationsOutputReference {
    return new DataAciBridgeDomainRelationToVrfAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToVrfTags {
}

export function dataAciBridgeDomainRelationToVrfTagsToTerraform(struct?: DataAciBridgeDomainRelationToVrfTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToVrfTagsToHclTerraform(struct?: DataAciBridgeDomainRelationToVrfTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToVrfTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationToVrfTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToVrfTags | undefined) {
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

export class DataAciBridgeDomainRelationToVrfTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRelationToVrfTagsOutputReference {
    return new DataAciBridgeDomainRelationToVrfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationToVrf {
}

export function dataAciBridgeDomainRelationToVrfToTerraform(struct?: DataAciBridgeDomainRelationToVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationToVrfToHclTerraform(struct?: DataAciBridgeDomainRelationToVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationToVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAciBridgeDomainRelationToVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationToVrf | undefined) {
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
  private _annotations = new DataAciBridgeDomainRelationToVrfAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRelationToVrfTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}
export interface DataAciBridgeDomainRogueCoopExceptionsAnnotations {
}

export function dataAciBridgeDomainRogueCoopExceptionsAnnotationsToTerraform(struct?: DataAciBridgeDomainRogueCoopExceptionsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRogueCoopExceptionsAnnotationsToHclTerraform(struct?: DataAciBridgeDomainRogueCoopExceptionsAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRogueCoopExceptionsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRogueCoopExceptionsAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRogueCoopExceptionsAnnotations | undefined) {
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

export class DataAciBridgeDomainRogueCoopExceptionsAnnotationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRogueCoopExceptionsAnnotationsOutputReference {
    return new DataAciBridgeDomainRogueCoopExceptionsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRogueCoopExceptionsTags {
}

export function dataAciBridgeDomainRogueCoopExceptionsTagsToTerraform(struct?: DataAciBridgeDomainRogueCoopExceptionsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRogueCoopExceptionsTagsToHclTerraform(struct?: DataAciBridgeDomainRogueCoopExceptionsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRogueCoopExceptionsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRogueCoopExceptionsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRogueCoopExceptionsTags | undefined) {
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

export class DataAciBridgeDomainRogueCoopExceptionsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRogueCoopExceptionsTagsOutputReference {
    return new DataAciBridgeDomainRogueCoopExceptionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRogueCoopExceptions {
}

export function dataAciBridgeDomainRogueCoopExceptionsToTerraform(struct?: DataAciBridgeDomainRogueCoopExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRogueCoopExceptionsToHclTerraform(struct?: DataAciBridgeDomainRogueCoopExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRogueCoopExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRogueCoopExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRogueCoopExceptions | undefined) {
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
  private _annotations = new DataAciBridgeDomainRogueCoopExceptionsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_alias - computed: true, optional: false, required: false
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainRogueCoopExceptionsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
}

export class DataAciBridgeDomainRogueCoopExceptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainRogueCoopExceptionsOutputReference {
    return new DataAciBridgeDomainRogueCoopExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainTags {
}

export function dataAciBridgeDomainTagsToTerraform(struct?: DataAciBridgeDomainTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainTagsToHclTerraform(struct?: DataAciBridgeDomainTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainTags | undefined) {
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

export class DataAciBridgeDomainTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataAciBridgeDomainTagsOutputReference {
    return new DataAciBridgeDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol {
}

export function dataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolToTerraform(struct?: DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolToHclTerraform(struct?: DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol | cdktf.IResolvable | undefined) {
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

  // flt_type - computed: true, optional: false, required: false
  public get fltType() {
    return this.getStringAttribute('flt_type');
  }

  // tn_netflow_monitor_pol_name - computed: true, optional: false, required: false
  public get tnNetflowMonitorPolName() {
    return this.getStringAttribute('tn_netflow_monitor_pol_name');
  }
}

export class DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolList extends cdktf.ComplexList {
  public internalValue? : DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol[] | cdktf.IResolvable

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
  public get(index: number): DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolOutputReference {
    return new DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain aci_bridge_domain}
*/
export class DataAciBridgeDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciBridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciBridgeDomain to import
  * @param importFromId The id of the existing DataAciBridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciBridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/bridge_domain aci_bridge_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciBridgeDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciBridgeDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bridge_domain',
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
    this._relationFvRsBdToNetflowMonitorPol.internalValue = config.relationFvRsBdToNetflowMonitorPol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_host_routes - computed: true, optional: false, required: false
  public get advertiseHostRoutes() {
    return this.getStringAttribute('advertise_host_routes');
  }

  // annotation - computed: true, optional: false, required: false
  public get annotation() {
    return this.getStringAttribute('annotation');
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new DataAciBridgeDomainAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }

  // arp_flood - computed: true, optional: false, required: false
  public get arpFlood() {
    return this.getStringAttribute('arp_flood');
  }

  // arp_flooding - computed: true, optional: false, required: false
  public get arpFlooding() {
    return this.getStringAttribute('arp_flooding');
  }

  // bridge_domain_type - computed: true, optional: false, required: false
  public get bridgeDomainType() {
    return this.getStringAttribute('bridge_domain_type');
  }

  // clear_remote_mac_entries - computed: true, optional: false, required: false
  public get clearRemoteMacEntries() {
    return this.getStringAttribute('clear_remote_mac_entries');
  }

  // custom_mac_address - computed: true, optional: false, required: false
  public get customMacAddress() {
    return this.getStringAttribute('custom_mac_address');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // drop_arp_with_multicast_smac - computed: true, optional: false, required: false
  public get dropArpWithMulticastSmac() {
    return this.getStringAttribute('drop_arp_with_multicast_smac');
  }

  // enable_intersite_bum_traffic - computed: true, optional: false, required: false
  public get enableIntersiteBumTraffic() {
    return this.getStringAttribute('enable_intersite_bum_traffic');
  }

  // enable_rogue_exception_mac - computed: true, optional: false, required: false
  public get enableRogueExceptionMac() {
    return this.getStringAttribute('enable_rogue_exception_mac');
  }

  // endpoint_move_detection_mode - computed: true, optional: false, required: false
  public get endpointMoveDetectionMode() {
    return this.getStringAttribute('endpoint_move_detection_mode');
  }

  // ep_clear - computed: true, optional: false, required: false
  public get epClear() {
    return this.getStringAttribute('ep_clear');
  }

  // ep_move_detect_mode - computed: true, optional: false, required: false
  public get epMoveDetectMode() {
    return this.getStringAttribute('ep_move_detect_mode');
  }

  // host_based_routing - computed: true, optional: false, required: false
  public get hostBasedRouting() {
    return this.getStringAttribute('host_based_routing');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intersite_bum_traffic_allow - computed: true, optional: false, required: false
  public get intersiteBumTrafficAllow() {
    return this.getStringAttribute('intersite_bum_traffic_allow');
  }

  // intersite_l2_stretch - computed: true, optional: false, required: false
  public get intersiteL2Stretch() {
    return this.getStringAttribute('intersite_l2_stretch');
  }

  // ip_learning - computed: true, optional: false, required: false
  public get ipLearning() {
    return this.getStringAttribute('ip_learning');
  }

  // ipv6_l3_unknown_multicast_flooding - computed: true, optional: false, required: false
  public get ipv6L3UnknownMulticastFlooding() {
    return this.getStringAttribute('ipv6_l3_unknown_multicast_flooding');
  }

  // ipv6_mcast_allow - computed: true, optional: false, required: false
  public get ipv6McastAllow() {
    return this.getStringAttribute('ipv6_mcast_allow');
  }

  // l2_unknown_unicast_flooding - computed: true, optional: false, required: false
  public get l2UnknownUnicastFlooding() {
    return this.getStringAttribute('l2_unknown_unicast_flooding');
  }

  // l3_unknown_multicast_flooding - computed: true, optional: false, required: false
  public get l3UnknownMulticastFlooding() {
    return this.getStringAttribute('l3_unknown_multicast_flooding');
  }

  // legacy_mode - computed: true, optional: false, required: false
  private _legacyMode = new DataAciBridgeDomainLegacyModeOutputReference(this, "legacy_mode");
  public get legacyMode() {
    return this._legacyMode;
  }

  // limit_ip_learn_to_subnets - computed: true, optional: false, required: false
  public get limitIpLearnToSubnets() {
    return this.getStringAttribute('limit_ip_learn_to_subnets');
  }

  // link_local_ipv6_address - computed: true, optional: false, required: false
  public get linkLocalIpv6Address() {
    return this.getStringAttribute('link_local_ipv6_address');
  }

  // ll_addr - computed: true, optional: false, required: false
  public get llAddr() {
    return this.getStringAttribute('ll_addr');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mcast_allow - computed: true, optional: false, required: false
  public get mcastAllow() {
    return this.getStringAttribute('mcast_allow');
  }

  // multi_destination_flooding - computed: true, optional: false, required: false
  public get multiDestinationFlooding() {
    return this.getStringAttribute('multi_destination_flooding');
  }

  // multi_dst_pkt_act - computed: true, optional: false, required: false
  public get multiDstPktAct() {
    return this.getStringAttribute('multi_dst_pkt_act');
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

  // optimize_wan_bandwidth - computed: true, optional: false, required: false
  public get optimizeWanBandwidth() {
    return this.getStringAttribute('optimize_wan_bandwidth');
  }

  // owner_key - computed: true, optional: false, required: false
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }

  // owner_tag - computed: true, optional: false, required: false
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
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

  // pc_tag - computed: true, optional: false, required: false
  public get pcTag() {
    return this.getStringAttribute('pc_tag');
  }

  // pim - computed: true, optional: false, required: false
  public get pim() {
    return this.getStringAttribute('pim');
  }

  // pim_ipv6 - computed: true, optional: false, required: false
  public get pimIpv6() {
    return this.getStringAttribute('pim_ipv6');
  }

  // relation_fv_rs_abd_pol_mon_pol - computed: true, optional: false, required: false
  public get relationFvRsAbdPolMonPol() {
    return this.getStringAttribute('relation_fv_rs_abd_pol_mon_pol');
  }

  // relation_fv_rs_bd_flood_to - computed: true, optional: false, required: false
  public get relationFvRsBdFloodTo() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_bd_flood_to'));
  }

  // relation_fv_rs_bd_to_ep_ret - computed: true, optional: false, required: false
  public get relationFvRsBdToEpRet() {
    return this.getStringAttribute('relation_fv_rs_bd_to_ep_ret');
  }

  // relation_fv_rs_bd_to_fhs - computed: true, optional: false, required: false
  public get relationFvRsBdToFhs() {
    return this.getStringAttribute('relation_fv_rs_bd_to_fhs');
  }

  // relation_fv_rs_bd_to_nd_p - computed: true, optional: false, required: false
  public get relationFvRsBdToNdP() {
    return this.getStringAttribute('relation_fv_rs_bd_to_nd_p');
  }

  // relation_fv_rs_bd_to_out - computed: true, optional: false, required: false
  public get relationFvRsBdToOut() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_bd_to_out'));
  }

  // relation_fv_rs_bd_to_profile - computed: true, optional: false, required: false
  public get relationFvRsBdToProfile() {
    return this.getStringAttribute('relation_fv_rs_bd_to_profile');
  }

  // relation_fv_rs_bd_to_relay_p - computed: true, optional: false, required: false
  public get relationFvRsBdToRelayP() {
    return this.getStringAttribute('relation_fv_rs_bd_to_relay_p');
  }

  // relation_fv_rs_ctx - computed: true, optional: false, required: false
  public get relationFvRsCtx() {
    return this.getStringAttribute('relation_fv_rs_ctx');
  }

  // relation_fv_rs_igmpsn - computed: true, optional: false, required: false
  public get relationFvRsIgmpsn() {
    return this.getStringAttribute('relation_fv_rs_igmpsn');
  }

  // relation_fv_rs_mldsn - computed: true, optional: false, required: false
  public get relationFvRsMldsn() {
    return this.getStringAttribute('relation_fv_rs_mldsn');
  }

  // relation_to_dhcp_relay_policy - computed: true, optional: false, required: false
  private _relationToDhcpRelayPolicy = new DataAciBridgeDomainRelationToDhcpRelayPolicyOutputReference(this, "relation_to_dhcp_relay_policy");
  public get relationToDhcpRelayPolicy() {
    return this._relationToDhcpRelayPolicy;
  }

  // relation_to_end_point_retention_policy - computed: true, optional: false, required: false
  private _relationToEndPointRetentionPolicy = new DataAciBridgeDomainRelationToEndPointRetentionPolicyOutputReference(this, "relation_to_end_point_retention_policy");
  public get relationToEndPointRetentionPolicy() {
    return this._relationToEndPointRetentionPolicy;
  }

  // relation_to_first_hop_security_policy - computed: true, optional: false, required: false
  private _relationToFirstHopSecurityPolicy = new DataAciBridgeDomainRelationToFirstHopSecurityPolicyOutputReference(this, "relation_to_first_hop_security_policy");
  public get relationToFirstHopSecurityPolicy() {
    return this._relationToFirstHopSecurityPolicy;
  }

  // relation_to_igmp_snooping_policy - computed: true, optional: false, required: false
  private _relationToIgmpSnoopingPolicy = new DataAciBridgeDomainRelationToIgmpSnoopingPolicyOutputReference(this, "relation_to_igmp_snooping_policy");
  public get relationToIgmpSnoopingPolicy() {
    return this._relationToIgmpSnoopingPolicy;
  }

  // relation_to_l3_outsides - computed: true, optional: false, required: false
  private _relationToL3Outsides = new DataAciBridgeDomainRelationToL3OutsidesList(this, "relation_to_l3_outsides", true);
  public get relationToL3Outsides() {
    return this._relationToL3Outsides;
  }

  // relation_to_mld_snooping_policy - computed: true, optional: false, required: false
  private _relationToMldSnoopingPolicy = new DataAciBridgeDomainRelationToMldSnoopingPolicyOutputReference(this, "relation_to_mld_snooping_policy");
  public get relationToMldSnoopingPolicy() {
    return this._relationToMldSnoopingPolicy;
  }

  // relation_to_monitoring_policy - computed: true, optional: false, required: false
  private _relationToMonitoringPolicy = new DataAciBridgeDomainRelationToMonitoringPolicyOutputReference(this, "relation_to_monitoring_policy");
  public get relationToMonitoringPolicy() {
    return this._relationToMonitoringPolicy;
  }

  // relation_to_neighbor_discovery_interface_policy - computed: true, optional: false, required: false
  private _relationToNeighborDiscoveryInterfacePolicy = new DataAciBridgeDomainRelationToNeighborDiscoveryInterfacePolicyOutputReference(this, "relation_to_neighbor_discovery_interface_policy");
  public get relationToNeighborDiscoveryInterfacePolicy() {
    return this._relationToNeighborDiscoveryInterfacePolicy;
  }

  // relation_to_netflow_monitor_policies - computed: true, optional: false, required: false
  private _relationToNetflowMonitorPolicies = new DataAciBridgeDomainRelationToNetflowMonitorPoliciesList(this, "relation_to_netflow_monitor_policies", true);
  public get relationToNetflowMonitorPolicies() {
    return this._relationToNetflowMonitorPolicies;
  }

  // relation_to_route_control_profile - computed: true, optional: false, required: false
  private _relationToRouteControlProfile = new DataAciBridgeDomainRelationToRouteControlProfileOutputReference(this, "relation_to_route_control_profile");
  public get relationToRouteControlProfile() {
    return this._relationToRouteControlProfile;
  }

  // relation_to_vrf - computed: true, optional: false, required: false
  private _relationToVrf = new DataAciBridgeDomainRelationToVrfOutputReference(this, "relation_to_vrf");
  public get relationToVrf() {
    return this._relationToVrf;
  }

  // rogue_coop_exceptions - computed: true, optional: false, required: false
  private _rogueCoopExceptions = new DataAciBridgeDomainRogueCoopExceptionsList(this, "rogue_coop_exceptions", true);
  public get rogueCoopExceptions() {
    return this._rogueCoopExceptions;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // segment - computed: true, optional: false, required: false
  public get segment() {
    return this.getStringAttribute('segment');
  }

  // service_bd_routing_disable - computed: true, optional: false, required: false
  public get serviceBdRoutingDisable() {
    return this.getStringAttribute('service_bd_routing_disable');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAciBridgeDomainTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // tenant_dn - computed: true, optional: false, required: false
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }

  // unicast_route - computed: true, optional: false, required: false
  public get unicastRoute() {
    return this.getStringAttribute('unicast_route');
  }

  // unicast_routing - computed: true, optional: false, required: false
  public get unicastRouting() {
    return this.getStringAttribute('unicast_routing');
  }

  // unk_mac_ucast_act - computed: true, optional: false, required: false
  public get unkMacUcastAct() {
    return this.getStringAttribute('unk_mac_ucast_act');
  }

  // unk_mcast_act - computed: true, optional: false, required: false
  public get unkMcastAct() {
    return this.getStringAttribute('unk_mcast_act');
  }

  // v6unk_mcast_act - computed: true, optional: false, required: false
  public get v6UnkMcastAct() {
    return this.getStringAttribute('v6unk_mcast_act');
  }

  // virtual_mac_address - computed: true, optional: false, required: false
  public get virtualMacAddress() {
    return this.getStringAttribute('virtual_mac_address');
  }

  // vmac - computed: true, optional: false, required: false
  public get vmac() {
    return this.getStringAttribute('vmac');
  }

  // relation_fv_rs_bd_to_netflow_monitor_pol - computed: false, optional: true, required: false
  private _relationFvRsBdToNetflowMonitorPol = new DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolList(this, "relation_fv_rs_bd_to_netflow_monitor_pol", true);
  public get relationFvRsBdToNetflowMonitorPol() {
    return this._relationFvRsBdToNetflowMonitorPol;
  }
  public putRelationFvRsBdToNetflowMonitorPol(value: DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPol[] | cdktf.IResolvable) {
    this._relationFvRsBdToNetflowMonitorPol.internalValue = value;
  }
  public resetRelationFvRsBdToNetflowMonitorPol() {
    this._relationFvRsBdToNetflowMonitorPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdToNetflowMonitorPolInput() {
    return this._relationFvRsBdToNetflowMonitorPol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      relation_fv_rs_bd_to_netflow_monitor_pol: cdktf.listMapper(dataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolToTerraform, true)(this._relationFvRsBdToNetflowMonitorPol.internalValue),
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
      relation_fv_rs_bd_to_netflow_monitor_pol: {
        value: cdktf.listMapperHcl(dataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolToHclTerraform, true)(this._relationFvRsBdToNetflowMonitorPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciBridgeDomainRelationFvRsBdToNetflowMonitorPolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
