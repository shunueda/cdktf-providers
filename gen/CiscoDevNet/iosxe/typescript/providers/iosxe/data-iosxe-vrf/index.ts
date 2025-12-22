// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/vrf#device DataIosxeVrf#device}
  */
  readonly device?: string;
  /**
  * WORD;;VRF name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/vrf#name DataIosxeVrf#name}
  */
  readonly name: string;
}
export interface DataIosxeVrfIpv4MdtDataMulticast {
}

export function dataIosxeVrfIpv4MdtDataMulticastToTerraform(struct?: DataIosxeVrfIpv4MdtDataMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv4MdtDataMulticastToHclTerraform(struct?: DataIosxeVrfIpv4MdtDataMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv4MdtDataMulticastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv4MdtDataMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv4MdtDataMulticast | undefined) {
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

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getStringAttribute('list');
  }

  // wildcard - computed: true, optional: false, required: false
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
}

export class DataIosxeVrfIpv4MdtDataMulticastList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv4MdtDataMulticastOutputReference {
    return new DataIosxeVrfIpv4MdtDataMulticastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv4RouteReplicate {
}

export function dataIosxeVrfIpv4RouteReplicateToTerraform(struct?: DataIosxeVrfIpv4RouteReplicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv4RouteReplicateToHclTerraform(struct?: DataIosxeVrfIpv4RouteReplicate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv4RouteReplicateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv4RouteReplicate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv4RouteReplicate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unicast_all - computed: true, optional: false, required: false
  public get unicastAll() {
    return this.getBooleanAttribute('unicast_all');
  }

  // unicast_all_route_map - computed: true, optional: false, required: false
  public get unicastAllRouteMap() {
    return this.getStringAttribute('unicast_all_route_map');
  }
}

export class DataIosxeVrfIpv4RouteReplicateList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv4RouteReplicateOutputReference {
    return new DataIosxeVrfIpv4RouteReplicateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv4RouteTargetExport {
}

export function dataIosxeVrfIpv4RouteTargetExportToTerraform(struct?: DataIosxeVrfIpv4RouteTargetExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv4RouteTargetExportToHclTerraform(struct?: DataIosxeVrfIpv4RouteTargetExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv4RouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv4RouteTargetExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv4RouteTargetExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv4RouteTargetExportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv4RouteTargetExportOutputReference {
    return new DataIosxeVrfIpv4RouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv4RouteTargetExportStitching {
}

export function dataIosxeVrfIpv4RouteTargetExportStitchingToTerraform(struct?: DataIosxeVrfIpv4RouteTargetExportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv4RouteTargetExportStitchingToHclTerraform(struct?: DataIosxeVrfIpv4RouteTargetExportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv4RouteTargetExportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv4RouteTargetExportStitching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv4RouteTargetExportStitching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv4RouteTargetExportStitchingList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv4RouteTargetExportStitchingOutputReference {
    return new DataIosxeVrfIpv4RouteTargetExportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv4RouteTargetImport {
}

export function dataIosxeVrfIpv4RouteTargetImportToTerraform(struct?: DataIosxeVrfIpv4RouteTargetImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv4RouteTargetImportToHclTerraform(struct?: DataIosxeVrfIpv4RouteTargetImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv4RouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv4RouteTargetImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv4RouteTargetImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv4RouteTargetImportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv4RouteTargetImportOutputReference {
    return new DataIosxeVrfIpv4RouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv4RouteTargetImportStitching {
}

export function dataIosxeVrfIpv4RouteTargetImportStitchingToTerraform(struct?: DataIosxeVrfIpv4RouteTargetImportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv4RouteTargetImportStitchingToHclTerraform(struct?: DataIosxeVrfIpv4RouteTargetImportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv4RouteTargetImportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv4RouteTargetImportStitching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv4RouteTargetImportStitching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv4RouteTargetImportStitchingList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv4RouteTargetImportStitchingOutputReference {
    return new DataIosxeVrfIpv4RouteTargetImportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv6RouteTargetExport {
}

export function dataIosxeVrfIpv6RouteTargetExportToTerraform(struct?: DataIosxeVrfIpv6RouteTargetExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv6RouteTargetExportToHclTerraform(struct?: DataIosxeVrfIpv6RouteTargetExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv6RouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv6RouteTargetExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv6RouteTargetExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv6RouteTargetExportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv6RouteTargetExportOutputReference {
    return new DataIosxeVrfIpv6RouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv6RouteTargetExportStitching {
}

export function dataIosxeVrfIpv6RouteTargetExportStitchingToTerraform(struct?: DataIosxeVrfIpv6RouteTargetExportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv6RouteTargetExportStitchingToHclTerraform(struct?: DataIosxeVrfIpv6RouteTargetExportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv6RouteTargetExportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv6RouteTargetExportStitching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv6RouteTargetExportStitching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv6RouteTargetExportStitchingList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv6RouteTargetExportStitchingOutputReference {
    return new DataIosxeVrfIpv6RouteTargetExportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv6RouteTargetImport {
}

export function dataIosxeVrfIpv6RouteTargetImportToTerraform(struct?: DataIosxeVrfIpv6RouteTargetImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv6RouteTargetImportToHclTerraform(struct?: DataIosxeVrfIpv6RouteTargetImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv6RouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv6RouteTargetImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv6RouteTargetImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv6RouteTargetImportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv6RouteTargetImportOutputReference {
    return new DataIosxeVrfIpv6RouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfIpv6RouteTargetImportStitching {
}

export function dataIosxeVrfIpv6RouteTargetImportStitchingToTerraform(struct?: DataIosxeVrfIpv6RouteTargetImportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfIpv6RouteTargetImportStitchingToHclTerraform(struct?: DataIosxeVrfIpv6RouteTargetImportStitching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfIpv6RouteTargetImportStitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfIpv6RouteTargetImportStitching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfIpv6RouteTargetImportStitching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfIpv6RouteTargetImportStitchingList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfIpv6RouteTargetImportStitchingOutputReference {
    return new DataIosxeVrfIpv6RouteTargetImportStitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfRouteTargetExport {
}

export function dataIosxeVrfRouteTargetExportToTerraform(struct?: DataIosxeVrfRouteTargetExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfRouteTargetExportToHclTerraform(struct?: DataIosxeVrfRouteTargetExport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfRouteTargetExportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfRouteTargetExport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfRouteTargetExport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfRouteTargetExportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfRouteTargetExportOutputReference {
    return new DataIosxeVrfRouteTargetExportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfRouteTargetImport {
}

export function dataIosxeVrfRouteTargetImportToTerraform(struct?: DataIosxeVrfRouteTargetImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfRouteTargetImportToHclTerraform(struct?: DataIosxeVrfRouteTargetImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfRouteTargetImportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfRouteTargetImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfRouteTargetImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // stitching - computed: true, optional: false, required: false
  public get stitching() {
    return this.getBooleanAttribute('stitching');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeVrfRouteTargetImportList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfRouteTargetImportOutputReference {
    return new DataIosxeVrfRouteTargetImportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfVnidsEvpnInstanceVnis {
}

export function dataIosxeVrfVnidsEvpnInstanceVnisToTerraform(struct?: DataIosxeVrfVnidsEvpnInstanceVnis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfVnidsEvpnInstanceVnisToHclTerraform(struct?: DataIosxeVrfVnidsEvpnInstanceVnis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfVnidsEvpnInstanceVnisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfVnidsEvpnInstanceVnis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfVnidsEvpnInstanceVnis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_vlan - computed: true, optional: false, required: false
  public get coreVlan() {
    return this.getNumberAttribute('core_vlan');
  }

  // vni - computed: true, optional: false, required: false
  public get vni() {
    return this.getNumberAttribute('vni');
  }
}

export class DataIosxeVrfVnidsEvpnInstanceVnisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfVnidsEvpnInstanceVnisOutputReference {
    return new DataIosxeVrfVnidsEvpnInstanceVnisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeVrfVnids {
}

export function dataIosxeVrfVnidsToTerraform(struct?: DataIosxeVrfVnids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeVrfVnidsToHclTerraform(struct?: DataIosxeVrfVnids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeVrfVnidsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeVrfVnids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeVrfVnids | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evpn_instance_vnis - computed: true, optional: false, required: false
  private _evpnInstanceVnis = new DataIosxeVrfVnidsEvpnInstanceVnisList(this, "evpn_instance_vnis", false);
  public get evpnInstanceVnis() {
    return this._evpnInstanceVnis;
  }

  // vnid - computed: true, optional: false, required: false
  public get vnid() {
    return this.getNumberAttribute('vnid');
  }
}

export class DataIosxeVrfVnidsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeVrfVnidsOutputReference {
    return new DataIosxeVrfVnidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/vrf iosxe_vrf}
*/
export class DataIosxeVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeVrf to import
  * @param importFromId The id of the existing DataIosxeVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/vrf iosxe_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family_ipv4 - computed: true, optional: false, required: false
  public get addressFamilyIpv4() {
    return this.getBooleanAttribute('address_family_ipv4');
  }

  // address_family_ipv6 - computed: true, optional: false, required: false
  public get addressFamilyIpv6() {
    return this.getBooleanAttribute('address_family_ipv6');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_evpn_mcast_anycast - computed: true, optional: false, required: false
  public get ipv4EvpnMcastAnycast() {
    return this.getStringAttribute('ipv4_evpn_mcast_anycast');
  }

  // ipv4_evpn_mcast_data_address - computed: true, optional: false, required: false
  public get ipv4EvpnMcastDataAddress() {
    return this.getStringAttribute('ipv4_evpn_mcast_data_address');
  }

  // ipv4_evpn_mcast_data_mask_bits - computed: true, optional: false, required: false
  public get ipv4EvpnMcastDataMaskBits() {
    return this.getStringAttribute('ipv4_evpn_mcast_data_mask_bits');
  }

  // ipv4_evpn_mcast_mdt_default_address - computed: true, optional: false, required: false
  public get ipv4EvpnMcastMdtDefaultAddress() {
    return this.getStringAttribute('ipv4_evpn_mcast_mdt_default_address');
  }

  // ipv4_export_map - computed: true, optional: false, required: false
  public get ipv4ExportMap() {
    return this.getStringAttribute('ipv4_export_map');
  }

  // ipv4_import_map - computed: true, optional: false, required: false
  public get ipv4ImportMap() {
    return this.getStringAttribute('ipv4_import_map');
  }

  // ipv4_mdt_auto_discovery_interworking_vxlan_pim - computed: true, optional: false, required: false
  public get ipv4MdtAutoDiscoveryInterworkingVxlanPim() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_interworking_vxlan_pim');
  }

  // ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as - computed: true, optional: false, required: false
  public get ipv4MdtAutoDiscoveryInterworkingVxlanPimInterAs() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_interworking_vxlan_pim_inter_as');
  }

  // ipv4_mdt_auto_discovery_vxlan - computed: true, optional: false, required: false
  public get ipv4MdtAutoDiscoveryVxlan() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_vxlan');
  }

  // ipv4_mdt_auto_discovery_vxlan_inter_as - computed: true, optional: false, required: false
  public get ipv4MdtAutoDiscoveryVxlanInterAs() {
    return this.getBooleanAttribute('ipv4_mdt_auto_discovery_vxlan_inter_as');
  }

  // ipv4_mdt_data_multicast - computed: true, optional: false, required: false
  private _ipv4MdtDataMulticast = new DataIosxeVrfIpv4MdtDataMulticastList(this, "ipv4_mdt_data_multicast", false);
  public get ipv4MdtDataMulticast() {
    return this._ipv4MdtDataMulticast;
  }

  // ipv4_mdt_data_threshold - computed: true, optional: false, required: false
  public get ipv4MdtDataThreshold() {
    return this.getNumberAttribute('ipv4_mdt_data_threshold');
  }

  // ipv4_mdt_default_address - computed: true, optional: false, required: false
  public get ipv4MdtDefaultAddress() {
    return this.getStringAttribute('ipv4_mdt_default_address');
  }

  // ipv4_mdt_overlay_use_bgp - computed: true, optional: false, required: false
  public get ipv4MdtOverlayUseBgp() {
    return this.getBooleanAttribute('ipv4_mdt_overlay_use_bgp');
  }

  // ipv4_mdt_overlay_use_bgp_spt_only - computed: true, optional: false, required: false
  public get ipv4MdtOverlayUseBgpSptOnly() {
    return this.getBooleanAttribute('ipv4_mdt_overlay_use_bgp_spt_only');
  }

  // ipv4_route_replicate - computed: true, optional: false, required: false
  private _ipv4RouteReplicate = new DataIosxeVrfIpv4RouteReplicateList(this, "ipv4_route_replicate", false);
  public get ipv4RouteReplicate() {
    return this._ipv4RouteReplicate;
  }

  // ipv4_route_target_export - computed: true, optional: false, required: false
  private _ipv4RouteTargetExport = new DataIosxeVrfIpv4RouteTargetExportList(this, "ipv4_route_target_export", true);
  public get ipv4RouteTargetExport() {
    return this._ipv4RouteTargetExport;
  }

  // ipv4_route_target_export_stitching - computed: true, optional: false, required: false
  private _ipv4RouteTargetExportStitching = new DataIosxeVrfIpv4RouteTargetExportStitchingList(this, "ipv4_route_target_export_stitching", true);
  public get ipv4RouteTargetExportStitching() {
    return this._ipv4RouteTargetExportStitching;
  }

  // ipv4_route_target_import - computed: true, optional: false, required: false
  private _ipv4RouteTargetImport = new DataIosxeVrfIpv4RouteTargetImportList(this, "ipv4_route_target_import", true);
  public get ipv4RouteTargetImport() {
    return this._ipv4RouteTargetImport;
  }

  // ipv4_route_target_import_stitching - computed: true, optional: false, required: false
  private _ipv4RouteTargetImportStitching = new DataIosxeVrfIpv4RouteTargetImportStitchingList(this, "ipv4_route_target_import_stitching", true);
  public get ipv4RouteTargetImportStitching() {
    return this._ipv4RouteTargetImportStitching;
  }

  // ipv6_evpn_mcast_anycast - computed: true, optional: false, required: false
  public get ipv6EvpnMcastAnycast() {
    return this.getStringAttribute('ipv6_evpn_mcast_anycast');
  }

  // ipv6_evpn_mcast_data_address - computed: true, optional: false, required: false
  public get ipv6EvpnMcastDataAddress() {
    return this.getStringAttribute('ipv6_evpn_mcast_data_address');
  }

  // ipv6_evpn_mcast_data_mask_bits - computed: true, optional: false, required: false
  public get ipv6EvpnMcastDataMaskBits() {
    return this.getStringAttribute('ipv6_evpn_mcast_data_mask_bits');
  }

  // ipv6_evpn_mcast_mdt_default_address - computed: true, optional: false, required: false
  public get ipv6EvpnMcastMdtDefaultAddress() {
    return this.getStringAttribute('ipv6_evpn_mcast_mdt_default_address');
  }

  // ipv6_export_map - computed: true, optional: false, required: false
  public get ipv6ExportMap() {
    return this.getStringAttribute('ipv6_export_map');
  }

  // ipv6_import_map - computed: true, optional: false, required: false
  public get ipv6ImportMap() {
    return this.getStringAttribute('ipv6_import_map');
  }

  // ipv6_route_target_export - computed: true, optional: false, required: false
  private _ipv6RouteTargetExport = new DataIosxeVrfIpv6RouteTargetExportList(this, "ipv6_route_target_export", true);
  public get ipv6RouteTargetExport() {
    return this._ipv6RouteTargetExport;
  }

  // ipv6_route_target_export_stitching - computed: true, optional: false, required: false
  private _ipv6RouteTargetExportStitching = new DataIosxeVrfIpv6RouteTargetExportStitchingList(this, "ipv6_route_target_export_stitching", true);
  public get ipv6RouteTargetExportStitching() {
    return this._ipv6RouteTargetExportStitching;
  }

  // ipv6_route_target_import - computed: true, optional: false, required: false
  private _ipv6RouteTargetImport = new DataIosxeVrfIpv6RouteTargetImportList(this, "ipv6_route_target_import", true);
  public get ipv6RouteTargetImport() {
    return this._ipv6RouteTargetImport;
  }

  // ipv6_route_target_import_stitching - computed: true, optional: false, required: false
  private _ipv6RouteTargetImportStitching = new DataIosxeVrfIpv6RouteTargetImportStitchingList(this, "ipv6_route_target_import_stitching", true);
  public get ipv6RouteTargetImportStitching() {
    return this._ipv6RouteTargetImportStitching;
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

  // rd - computed: true, optional: false, required: false
  public get rd() {
    return this.getStringAttribute('rd');
  }

  // rd_auto - computed: true, optional: false, required: false
  public get rdAuto() {
    return this.getBooleanAttribute('rd_auto');
  }

  // route_target_export - computed: true, optional: false, required: false
  private _routeTargetExport = new DataIosxeVrfRouteTargetExportList(this, "route_target_export", true);
  public get routeTargetExport() {
    return this._routeTargetExport;
  }

  // route_target_import - computed: true, optional: false, required: false
  private _routeTargetImport = new DataIosxeVrfRouteTargetImportList(this, "route_target_import", true);
  public get routeTargetImport() {
    return this._routeTargetImport;
  }

  // vnids - computed: true, optional: false, required: false
  private _vnids = new DataIosxeVrfVnidsList(this, "vnids", false);
  public get vnids() {
    return this._vnids;
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
