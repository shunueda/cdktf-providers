// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiGtmDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * The full GTM domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#name DataAkamaiGtmDomain#name}
  */
  readonly name: string;
  /**
  * as_maps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#as_maps DataAkamaiGtmDomain#as_maps}
  */
  readonly asMaps?: DataAkamaiGtmDomainAsMaps[] | cdktf.IResolvable;
  /**
  * cidr_maps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#cidr_maps DataAkamaiGtmDomain#cidr_maps}
  */
  readonly cidrMaps?: DataAkamaiGtmDomainCidrMaps[] | cdktf.IResolvable;
  /**
  * datacenters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#datacenters DataAkamaiGtmDomain#datacenters}
  */
  readonly datacenters?: DataAkamaiGtmDomainDatacenters[] | cdktf.IResolvable;
  /**
  * geographic_maps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#geographic_maps DataAkamaiGtmDomain#geographic_maps}
  */
  readonly geographicMaps?: DataAkamaiGtmDomainGeographicMaps[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainLinks[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#properties DataAkamaiGtmDomain#properties}
  */
  readonly properties?: DataAkamaiGtmDomainProperties[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#resources DataAkamaiGtmDomain#resources}
  */
  readonly resources?: DataAkamaiGtmDomainResources[] | cdktf.IResolvable;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#status DataAkamaiGtmDomain#status}
  */
  readonly status?: DataAkamaiGtmDomainStatus;
}
export interface DataAkamaiGtmDomainAsMapsAssignments {
}

export function dataAkamaiGtmDomainAsMapsAssignmentsToTerraform(struct?: DataAkamaiGtmDomainAsMapsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainAsMapsAssignmentsToHclTerraform(struct?: DataAkamaiGtmDomainAsMapsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainAsMapsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainAsMapsAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainAsMapsAssignments | cdktf.IResolvable | undefined) {
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

  // as_numbers - computed: true, optional: false, required: false
  public get asNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('as_numbers')));
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
}

export class DataAkamaiGtmDomainAsMapsAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainAsMapsAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainAsMapsAssignmentsOutputReference {
    return new DataAkamaiGtmDomainAsMapsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainAsMapsDefaultDatacenter {
}

export function dataAkamaiGtmDomainAsMapsDefaultDatacenterToTerraform(struct?: DataAkamaiGtmDomainAsMapsDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainAsMapsDefaultDatacenterToHclTerraform(struct?: DataAkamaiGtmDomainAsMapsDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainAsMapsDefaultDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiGtmDomainAsMapsDefaultDatacenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainAsMapsDefaultDatacenter | cdktf.IResolvable | undefined) {
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

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
}
export interface DataAkamaiGtmDomainAsMapsLinks {
}

export function dataAkamaiGtmDomainAsMapsLinksToTerraform(struct?: DataAkamaiGtmDomainAsMapsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainAsMapsLinksToHclTerraform(struct?: DataAkamaiGtmDomainAsMapsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainAsMapsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainAsMapsLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainAsMapsLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainAsMapsLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainAsMapsLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainAsMapsLinksOutputReference {
    return new DataAkamaiGtmDomainAsMapsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainAsMaps {
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#assignments DataAkamaiGtmDomain#assignments}
  */
  readonly assignments?: DataAkamaiGtmDomainAsMapsAssignments[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainAsMapsLinks[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainAsMapsToTerraform(struct?: DataAkamaiGtmDomainAsMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignments: cdktf.listMapper(dataAkamaiGtmDomainAsMapsAssignmentsToTerraform, true)(struct!.assignments),
    links: cdktf.listMapper(dataAkamaiGtmDomainAsMapsLinksToTerraform, true)(struct!.links),
  }
}


export function dataAkamaiGtmDomainAsMapsToHclTerraform(struct?: DataAkamaiGtmDomainAsMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignments: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainAsMapsAssignmentsToHclTerraform, true)(struct!.assignments),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainAsMapsAssignmentsList",
    },
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainAsMapsLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainAsMapsLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainAsMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainAsMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignments = this._assignments?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainAsMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignments.internalValue = undefined;
      this._links.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignments.internalValue = value.assignments;
      this._links.internalValue = value.links;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments = new DataAkamaiGtmDomainAsMapsAssignmentsList(this, "assignments", true);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: DataAkamaiGtmDomainAsMapsAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }

  // default_datacenter - computed: false, optional: false, required: false
  private _defaultDatacenter = new DataAkamaiGtmDomainAsMapsDefaultDatacenterOutputReference(this, "default_datacenter");
  public get defaultDatacenter() {
    return this._defaultDatacenter;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainAsMapsLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainAsMapsLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}

export class DataAkamaiGtmDomainAsMapsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainAsMaps[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainAsMapsOutputReference {
    return new DataAkamaiGtmDomainAsMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainCidrMapsAssignments {
}

export function dataAkamaiGtmDomainCidrMapsAssignmentsToTerraform(struct?: DataAkamaiGtmDomainCidrMapsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainCidrMapsAssignmentsToHclTerraform(struct?: DataAkamaiGtmDomainCidrMapsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainCidrMapsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainCidrMapsAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainCidrMapsAssignments | cdktf.IResolvable | undefined) {
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

  // blocks - computed: true, optional: false, required: false
  public get blocks() {
    return cdktf.Fn.tolist(this.getListAttribute('blocks'));
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
}

export class DataAkamaiGtmDomainCidrMapsAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainCidrMapsAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainCidrMapsAssignmentsOutputReference {
    return new DataAkamaiGtmDomainCidrMapsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainCidrMapsDefaultDatacenter {
}

export function dataAkamaiGtmDomainCidrMapsDefaultDatacenterToTerraform(struct?: DataAkamaiGtmDomainCidrMapsDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainCidrMapsDefaultDatacenterToHclTerraform(struct?: DataAkamaiGtmDomainCidrMapsDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainCidrMapsDefaultDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiGtmDomainCidrMapsDefaultDatacenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainCidrMapsDefaultDatacenter | cdktf.IResolvable | undefined) {
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

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
}
export interface DataAkamaiGtmDomainCidrMapsLinks {
}

export function dataAkamaiGtmDomainCidrMapsLinksToTerraform(struct?: DataAkamaiGtmDomainCidrMapsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainCidrMapsLinksToHclTerraform(struct?: DataAkamaiGtmDomainCidrMapsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainCidrMapsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainCidrMapsLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainCidrMapsLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainCidrMapsLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainCidrMapsLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainCidrMapsLinksOutputReference {
    return new DataAkamaiGtmDomainCidrMapsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainCidrMaps {
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#assignments DataAkamaiGtmDomain#assignments}
  */
  readonly assignments?: DataAkamaiGtmDomainCidrMapsAssignments[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainCidrMapsLinks[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainCidrMapsToTerraform(struct?: DataAkamaiGtmDomainCidrMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignments: cdktf.listMapper(dataAkamaiGtmDomainCidrMapsAssignmentsToTerraform, true)(struct!.assignments),
    links: cdktf.listMapper(dataAkamaiGtmDomainCidrMapsLinksToTerraform, true)(struct!.links),
  }
}


export function dataAkamaiGtmDomainCidrMapsToHclTerraform(struct?: DataAkamaiGtmDomainCidrMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignments: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainCidrMapsAssignmentsToHclTerraform, true)(struct!.assignments),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainCidrMapsAssignmentsList",
    },
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainCidrMapsLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainCidrMapsLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainCidrMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainCidrMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignments = this._assignments?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainCidrMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignments.internalValue = undefined;
      this._links.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignments.internalValue = value.assignments;
      this._links.internalValue = value.links;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments = new DataAkamaiGtmDomainCidrMapsAssignmentsList(this, "assignments", true);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: DataAkamaiGtmDomainCidrMapsAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }

  // default_datacenter - computed: false, optional: false, required: false
  private _defaultDatacenter = new DataAkamaiGtmDomainCidrMapsDefaultDatacenterOutputReference(this, "default_datacenter");
  public get defaultDatacenter() {
    return this._defaultDatacenter;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainCidrMapsLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainCidrMapsLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}

export class DataAkamaiGtmDomainCidrMapsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainCidrMaps[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainCidrMapsOutputReference {
    return new DataAkamaiGtmDomainCidrMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainDatacentersDefaultLoadObject {
}

export function dataAkamaiGtmDomainDatacentersDefaultLoadObjectToTerraform(struct?: DataAkamaiGtmDomainDatacentersDefaultLoadObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainDatacentersDefaultLoadObjectToHclTerraform(struct?: DataAkamaiGtmDomainDatacentersDefaultLoadObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainDatacentersDefaultLoadObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainDatacentersDefaultLoadObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainDatacentersDefaultLoadObject | cdktf.IResolvable | undefined) {
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

  // load_object - computed: true, optional: false, required: false
  public get loadObject() {
    return this.getStringAttribute('load_object');
  }

  // load_object_port - computed: true, optional: false, required: false
  public get loadObjectPort() {
    return this.getNumberAttribute('load_object_port');
  }

  // load_servers - computed: true, optional: false, required: false
  public get loadServers() {
    return this.getListAttribute('load_servers');
  }
}

export class DataAkamaiGtmDomainDatacentersDefaultLoadObjectList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainDatacentersDefaultLoadObject[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainDatacentersDefaultLoadObjectOutputReference {
    return new DataAkamaiGtmDomainDatacentersDefaultLoadObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainDatacentersLinks {
}

export function dataAkamaiGtmDomainDatacentersLinksToTerraform(struct?: DataAkamaiGtmDomainDatacentersLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainDatacentersLinksToHclTerraform(struct?: DataAkamaiGtmDomainDatacentersLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainDatacentersLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainDatacentersLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainDatacentersLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainDatacentersLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainDatacentersLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainDatacentersLinksOutputReference {
    return new DataAkamaiGtmDomainDatacentersLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainDatacenters {
  /**
  * default_load_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#default_load_object DataAkamaiGtmDomain#default_load_object}
  */
  readonly defaultLoadObject?: DataAkamaiGtmDomainDatacentersDefaultLoadObject[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainDatacentersLinks[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainDatacentersToTerraform(struct?: DataAkamaiGtmDomainDatacenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_load_object: cdktf.listMapper(dataAkamaiGtmDomainDatacentersDefaultLoadObjectToTerraform, true)(struct!.defaultLoadObject),
    links: cdktf.listMapper(dataAkamaiGtmDomainDatacentersLinksToTerraform, true)(struct!.links),
  }
}


export function dataAkamaiGtmDomainDatacentersToHclTerraform(struct?: DataAkamaiGtmDomainDatacenters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_load_object: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainDatacentersDefaultLoadObjectToHclTerraform, true)(struct!.defaultLoadObject),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainDatacentersDefaultLoadObjectList",
    },
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainDatacentersLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainDatacentersLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainDatacentersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainDatacenters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLoadObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoadObject = this._defaultLoadObject?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainDatacenters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultLoadObject.internalValue = undefined;
      this._links.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultLoadObject.internalValue = value.defaultLoadObject;
      this._links.internalValue = value.links;
    }
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // clone_of - computed: true, optional: false, required: false
  public get cloneOf() {
    return this.getNumberAttribute('clone_of');
  }

  // cloud_server_host_header_override - computed: true, optional: false, required: false
  public get cloudServerHostHeaderOverride() {
    return this.getBooleanAttribute('cloud_server_host_header_override');
  }

  // cloud_server_targeting - computed: true, optional: false, required: false
  public get cloudServerTargeting() {
    return this.getBooleanAttribute('cloud_server_targeting');
  }

  // continent - computed: true, optional: false, required: false
  public get continent() {
    return this.getStringAttribute('continent');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }

  // score_penalty - computed: true, optional: false, required: false
  public get scorePenalty() {
    return this.getNumberAttribute('score_penalty');
  }

  // server_monitor_pool - computed: true, optional: false, required: false
  public get serverMonitorPool() {
    return this.getStringAttribute('server_monitor_pool');
  }

  // state_or_province - computed: true, optional: false, required: false
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // default_load_object - computed: false, optional: true, required: false
  private _defaultLoadObject = new DataAkamaiGtmDomainDatacentersDefaultLoadObjectList(this, "default_load_object", true);
  public get defaultLoadObject() {
    return this._defaultLoadObject;
  }
  public putDefaultLoadObject(value: DataAkamaiGtmDomainDatacentersDefaultLoadObject[] | cdktf.IResolvable) {
    this._defaultLoadObject.internalValue = value;
  }
  public resetDefaultLoadObject() {
    this._defaultLoadObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadObjectInput() {
    return this._defaultLoadObject.internalValue;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainDatacentersLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainDatacentersLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}

export class DataAkamaiGtmDomainDatacentersList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainDatacenters[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainDatacentersOutputReference {
    return new DataAkamaiGtmDomainDatacentersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainGeographicMapsAssignments {
}

export function dataAkamaiGtmDomainGeographicMapsAssignmentsToTerraform(struct?: DataAkamaiGtmDomainGeographicMapsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainGeographicMapsAssignmentsToHclTerraform(struct?: DataAkamaiGtmDomainGeographicMapsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainGeographicMapsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainGeographicMapsAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainGeographicMapsAssignments | cdktf.IResolvable | undefined) {
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

  // countries - computed: true, optional: false, required: false
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
}

export class DataAkamaiGtmDomainGeographicMapsAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainGeographicMapsAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainGeographicMapsAssignmentsOutputReference {
    return new DataAkamaiGtmDomainGeographicMapsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainGeographicMapsDefaultDatacenter {
}

export function dataAkamaiGtmDomainGeographicMapsDefaultDatacenterToTerraform(struct?: DataAkamaiGtmDomainGeographicMapsDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainGeographicMapsDefaultDatacenterToHclTerraform(struct?: DataAkamaiGtmDomainGeographicMapsDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainGeographicMapsDefaultDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiGtmDomainGeographicMapsDefaultDatacenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainGeographicMapsDefaultDatacenter | cdktf.IResolvable | undefined) {
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

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
}
export interface DataAkamaiGtmDomainGeographicMapsLinks {
}

export function dataAkamaiGtmDomainGeographicMapsLinksToTerraform(struct?: DataAkamaiGtmDomainGeographicMapsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainGeographicMapsLinksToHclTerraform(struct?: DataAkamaiGtmDomainGeographicMapsLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainGeographicMapsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainGeographicMapsLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainGeographicMapsLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainGeographicMapsLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainGeographicMapsLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainGeographicMapsLinksOutputReference {
    return new DataAkamaiGtmDomainGeographicMapsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainGeographicMaps {
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#assignments DataAkamaiGtmDomain#assignments}
  */
  readonly assignments?: DataAkamaiGtmDomainGeographicMapsAssignments[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainGeographicMapsLinks[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainGeographicMapsToTerraform(struct?: DataAkamaiGtmDomainGeographicMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignments: cdktf.listMapper(dataAkamaiGtmDomainGeographicMapsAssignmentsToTerraform, true)(struct!.assignments),
    links: cdktf.listMapper(dataAkamaiGtmDomainGeographicMapsLinksToTerraform, true)(struct!.links),
  }
}


export function dataAkamaiGtmDomainGeographicMapsToHclTerraform(struct?: DataAkamaiGtmDomainGeographicMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignments: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainGeographicMapsAssignmentsToHclTerraform, true)(struct!.assignments),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainGeographicMapsAssignmentsList",
    },
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainGeographicMapsLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainGeographicMapsLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainGeographicMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainGeographicMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignments = this._assignments?.internalValue;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainGeographicMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignments.internalValue = undefined;
      this._links.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignments.internalValue = value.assignments;
      this._links.internalValue = value.links;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments = new DataAkamaiGtmDomainGeographicMapsAssignmentsList(this, "assignments", true);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: DataAkamaiGtmDomainGeographicMapsAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }

  // default_datacenter - computed: false, optional: false, required: false
  private _defaultDatacenter = new DataAkamaiGtmDomainGeographicMapsDefaultDatacenterOutputReference(this, "default_datacenter");
  public get defaultDatacenter() {
    return this._defaultDatacenter;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainGeographicMapsLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainGeographicMapsLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}

export class DataAkamaiGtmDomainGeographicMapsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainGeographicMaps[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainGeographicMapsOutputReference {
    return new DataAkamaiGtmDomainGeographicMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainLinks {
}

export function dataAkamaiGtmDomainLinksToTerraform(struct?: DataAkamaiGtmDomainLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainLinksToHclTerraform(struct?: DataAkamaiGtmDomainLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainLinksOutputReference {
    return new DataAkamaiGtmDomainLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainPropertiesLinks {
}

export function dataAkamaiGtmDomainPropertiesLinksToTerraform(struct?: DataAkamaiGtmDomainPropertiesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainPropertiesLinksToHclTerraform(struct?: DataAkamaiGtmDomainPropertiesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainPropertiesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainPropertiesLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainPropertiesLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainPropertiesLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainPropertiesLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainPropertiesLinksOutputReference {
    return new DataAkamaiGtmDomainPropertiesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders {
}

export function dataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersToTerraform(struct?: DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersToHclTerraform(struct?: DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersOutputReference {
    return new DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainPropertiesLivenessTests {
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#http_headers DataAkamaiGtmDomain#http_headers}
  */
  readonly httpHeaders?: DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainPropertiesLivenessTestsToTerraform(struct?: DataAkamaiGtmDomainPropertiesLivenessTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.listMapper(dataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function dataAkamaiGtmDomainPropertiesLivenessTestsToHclTerraform(struct?: DataAkamaiGtmDomainPropertiesLivenessTests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_headers: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainPropertiesLivenessTestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainPropertiesLivenessTests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainPropertiesLivenessTests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders.internalValue = value.httpHeaders;
    }
  }

  // alternate_ca_certificates - computed: true, optional: false, required: false
  public get alternateCaCertificates() {
    return this.getListAttribute('alternate_ca_certificates');
  }

  // answers_required - computed: true, optional: false, required: false
  public get answersRequired() {
    return this.getBooleanAttribute('answers_required');
  }

  // disable_nonstandard_port_warning - computed: true, optional: false, required: false
  public get disableNonstandardPortWarning() {
    return this.getBooleanAttribute('disable_nonstandard_port_warning');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // error_penalty - computed: true, optional: false, required: false
  public get errorPenalty() {
    return this.getNumberAttribute('error_penalty');
  }

  // http_error3xx - computed: true, optional: false, required: false
  public get httpError3Xx() {
    return this.getBooleanAttribute('http_error3xx');
  }

  // http_error4xx - computed: true, optional: false, required: false
  public get httpError4Xx() {
    return this.getBooleanAttribute('http_error4xx');
  }

  // http_error5xx - computed: true, optional: false, required: false
  public get httpError5Xx() {
    return this.getBooleanAttribute('http_error5xx');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // http_request_body - computed: true, optional: false, required: false
  public get httpRequestBody() {
    return this.getStringAttribute('http_request_body');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_certificate_verification - computed: true, optional: false, required: false
  public get peerCertificateVerification() {
    return this.getBooleanAttribute('peer_certificate_verification');
  }

  // pre_2023_security_posture - computed: true, optional: false, required: false
  public get pre2023SecurityPosture() {
    return this.getBooleanAttribute('pre_2023_security_posture');
  }

  // recursion_requested - computed: true, optional: false, required: false
  public get recursionRequested() {
    return this.getBooleanAttribute('recursion_requested');
  }

  // request_string - computed: true, optional: false, required: false
  public get requestString() {
    return this.getStringAttribute('request_string');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // response_string - computed: true, optional: false, required: false
  public get responseString() {
    return this.getStringAttribute('response_string');
  }

  // ssl_client_certificate - computed: true, optional: false, required: false
  public get sslClientCertificate() {
    return this.getStringAttribute('ssl_client_certificate');
  }

  // ssl_client_private_key - computed: true, optional: false, required: false
  public get sslClientPrivateKey() {
    return this.getStringAttribute('ssl_client_private_key');
  }

  // test_interval - computed: true, optional: false, required: false
  public get testInterval() {
    return this.getNumberAttribute('test_interval');
  }

  // test_object - computed: true, optional: false, required: false
  public get testObject() {
    return this.getStringAttribute('test_object');
  }

  // test_object_password - computed: true, optional: false, required: false
  public get testObjectPassword() {
    return this.getStringAttribute('test_object_password');
  }

  // test_object_port - computed: true, optional: false, required: false
  public get testObjectPort() {
    return this.getNumberAttribute('test_object_port');
  }

  // test_object_protocol - computed: true, optional: false, required: false
  public get testObjectProtocol() {
    return this.getStringAttribute('test_object_protocol');
  }

  // test_object_username - computed: true, optional: false, required: false
  public get testObjectUsername() {
    return this.getStringAttribute('test_object_username');
  }

  // test_timeout - computed: true, optional: false, required: false
  public get testTimeout() {
    return this.getNumberAttribute('test_timeout');
  }

  // timeout_penalty - computed: true, optional: false, required: false
  public get timeoutPenalty() {
    return this.getNumberAttribute('timeout_penalty');
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeadersList(this, "http_headers", true);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataAkamaiGtmDomainPropertiesLivenessTestsHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}

export class DataAkamaiGtmDomainPropertiesLivenessTestsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainPropertiesLivenessTests[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainPropertiesLivenessTestsOutputReference {
    return new DataAkamaiGtmDomainPropertiesLivenessTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainPropertiesStaticRrSets {
}

export function dataAkamaiGtmDomainPropertiesStaticRrSetsToTerraform(struct?: DataAkamaiGtmDomainPropertiesStaticRrSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainPropertiesStaticRrSetsToHclTerraform(struct?: DataAkamaiGtmDomainPropertiesStaticRrSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainPropertiesStaticRrSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainPropertiesStaticRrSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainPropertiesStaticRrSets | cdktf.IResolvable | undefined) {
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

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getListAttribute('rdata');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAkamaiGtmDomainPropertiesStaticRrSetsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainPropertiesStaticRrSets[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainPropertiesStaticRrSetsOutputReference {
    return new DataAkamaiGtmDomainPropertiesStaticRrSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainPropertiesTrafficTargets {
}

export function dataAkamaiGtmDomainPropertiesTrafficTargetsToTerraform(struct?: DataAkamaiGtmDomainPropertiesTrafficTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainPropertiesTrafficTargetsToHclTerraform(struct?: DataAkamaiGtmDomainPropertiesTrafficTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainPropertiesTrafficTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainPropertiesTrafficTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainPropertiesTrafficTargets | cdktf.IResolvable | undefined) {
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

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // handout_cname - computed: true, optional: false, required: false
  public get handoutCname() {
    return this.getStringAttribute('handout_cname');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getListAttribute('servers');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAkamaiGtmDomainPropertiesTrafficTargetsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainPropertiesTrafficTargets[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainPropertiesTrafficTargetsOutputReference {
    return new DataAkamaiGtmDomainPropertiesTrafficTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainProperties {
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainPropertiesLinks[] | cdktf.IResolvable;
  /**
  * liveness_tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#liveness_tests DataAkamaiGtmDomain#liveness_tests}
  */
  readonly livenessTests?: DataAkamaiGtmDomainPropertiesLivenessTests[] | cdktf.IResolvable;
  /**
  * static_rr_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#static_rr_sets DataAkamaiGtmDomain#static_rr_sets}
  */
  readonly staticRrSets?: DataAkamaiGtmDomainPropertiesStaticRrSets[] | cdktf.IResolvable;
  /**
  * traffic_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#traffic_targets DataAkamaiGtmDomain#traffic_targets}
  */
  readonly trafficTargets?: DataAkamaiGtmDomainPropertiesTrafficTargets[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainPropertiesToTerraform(struct?: DataAkamaiGtmDomainProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    links: cdktf.listMapper(dataAkamaiGtmDomainPropertiesLinksToTerraform, true)(struct!.links),
    liveness_tests: cdktf.listMapper(dataAkamaiGtmDomainPropertiesLivenessTestsToTerraform, true)(struct!.livenessTests),
    static_rr_sets: cdktf.listMapper(dataAkamaiGtmDomainPropertiesStaticRrSetsToTerraform, true)(struct!.staticRrSets),
    traffic_targets: cdktf.listMapper(dataAkamaiGtmDomainPropertiesTrafficTargetsToTerraform, true)(struct!.trafficTargets),
  }
}


export function dataAkamaiGtmDomainPropertiesToHclTerraform(struct?: DataAkamaiGtmDomainProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainPropertiesLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainPropertiesLinksList",
    },
    liveness_tests: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainPropertiesLivenessTestsToHclTerraform, true)(struct!.livenessTests),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainPropertiesLivenessTestsList",
    },
    static_rr_sets: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainPropertiesStaticRrSetsToHclTerraform, true)(struct!.staticRrSets),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainPropertiesStaticRrSetsList",
    },
    traffic_targets: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainPropertiesTrafficTargetsToHclTerraform, true)(struct!.trafficTargets),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainPropertiesTrafficTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._livenessTests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessTests = this._livenessTests?.internalValue;
    }
    if (this._staticRrSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRrSets = this._staticRrSets?.internalValue;
    }
    if (this._trafficTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTargets = this._trafficTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._links.internalValue = undefined;
      this._livenessTests.internalValue = undefined;
      this._staticRrSets.internalValue = undefined;
      this._trafficTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._links.internalValue = value.links;
      this._livenessTests.internalValue = value.livenessTests;
      this._staticRrSets.internalValue = value.staticRrSets;
      this._trafficTargets.internalValue = value.trafficTargets;
    }
  }

  // backup_cname - computed: true, optional: false, required: false
  public get backupCname() {
    return this.getStringAttribute('backup_cname');
  }

  // backup_ip - computed: true, optional: false, required: false
  public get backupIp() {
    return this.getStringAttribute('backup_ip');
  }

  // balance_by_download_score - computed: true, optional: false, required: false
  public get balanceByDownloadScore() {
    return this.getBooleanAttribute('balance_by_download_score');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // dynamic_ttl - computed: true, optional: false, required: false
  public get dynamicTtl() {
    return this.getNumberAttribute('dynamic_ttl');
  }

  // failback_delay - computed: true, optional: false, required: false
  public get failbackDelay() {
    return this.getNumberAttribute('failback_delay');
  }

  // failover_delay - computed: true, optional: false, required: false
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }

  // ghost_demand_reporting - computed: true, optional: false, required: false
  public get ghostDemandReporting() {
    return this.getBooleanAttribute('ghost_demand_reporting');
  }

  // handout_limit - computed: true, optional: false, required: false
  public get handoutLimit() {
    return this.getNumberAttribute('handout_limit');
  }

  // handout_mode - computed: true, optional: false, required: false
  public get handoutMode() {
    return this.getStringAttribute('handout_mode');
  }

  // health_max - computed: true, optional: false, required: false
  public get healthMax() {
    return this.getNumberAttribute('health_max');
  }

  // health_multiplier - computed: true, optional: false, required: false
  public get healthMultiplier() {
    return this.getNumberAttribute('health_multiplier');
  }

  // health_threshold - computed: true, optional: false, required: false
  public get healthThreshold() {
    return this.getNumberAttribute('health_threshold');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // load_imbalance_percentage - computed: true, optional: false, required: false
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }

  // map_name - computed: true, optional: false, required: false
  public get mapName() {
    return this.getStringAttribute('map_name');
  }

  // max_unreachable_penalty - computed: true, optional: false, required: false
  public get maxUnreachablePenalty() {
    return this.getNumberAttribute('max_unreachable_penalty');
  }

  // min_live_fraction - computed: true, optional: false, required: false
  public get minLiveFraction() {
    return this.getNumberAttribute('min_live_fraction');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // score_aggregation_type - computed: true, optional: false, required: false
  public get scoreAggregationType() {
    return this.getStringAttribute('score_aggregation_type');
  }

  // static_ttl - computed: true, optional: false, required: false
  public get staticTtl() {
    return this.getNumberAttribute('static_ttl');
  }

  // stickness_bonus_constant - computed: true, optional: false, required: false
  public get sticknessBonusConstant() {
    return this.getNumberAttribute('stickness_bonus_constant');
  }

  // stickness_bonus_percentage - computed: true, optional: false, required: false
  public get sticknessBonusPercentage() {
    return this.getNumberAttribute('stickness_bonus_percentage');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unreachable_threshold - computed: true, optional: false, required: false
  public get unreachableThreshold() {
    return this.getNumberAttribute('unreachable_threshold');
  }

  // use_computed_targets - computed: true, optional: false, required: false
  public get useComputedTargets() {
    return this.getBooleanAttribute('use_computed_targets');
  }

  // weighted_hash_bits_for_ipv4 - computed: true, optional: false, required: false
  public get weightedHashBitsForIpv4() {
    return this.getNumberAttribute('weighted_hash_bits_for_ipv4');
  }

  // weighted_hash_bits_for_ipv6 - computed: true, optional: false, required: false
  public get weightedHashBitsForIpv6() {
    return this.getNumberAttribute('weighted_hash_bits_for_ipv6');
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainPropertiesLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainPropertiesLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // liveness_tests - computed: false, optional: true, required: false
  private _livenessTests = new DataAkamaiGtmDomainPropertiesLivenessTestsList(this, "liveness_tests", true);
  public get livenessTests() {
    return this._livenessTests;
  }
  public putLivenessTests(value: DataAkamaiGtmDomainPropertiesLivenessTests[] | cdktf.IResolvable) {
    this._livenessTests.internalValue = value;
  }
  public resetLivenessTests() {
    this._livenessTests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessTestsInput() {
    return this._livenessTests.internalValue;
  }

  // static_rr_sets - computed: false, optional: true, required: false
  private _staticRrSets = new DataAkamaiGtmDomainPropertiesStaticRrSetsList(this, "static_rr_sets", true);
  public get staticRrSets() {
    return this._staticRrSets;
  }
  public putStaticRrSets(value: DataAkamaiGtmDomainPropertiesStaticRrSets[] | cdktf.IResolvable) {
    this._staticRrSets.internalValue = value;
  }
  public resetStaticRrSets() {
    this._staticRrSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRrSetsInput() {
    return this._staticRrSets.internalValue;
  }

  // traffic_targets - computed: false, optional: true, required: false
  private _trafficTargets = new DataAkamaiGtmDomainPropertiesTrafficTargetsList(this, "traffic_targets", true);
  public get trafficTargets() {
    return this._trafficTargets;
  }
  public putTrafficTargets(value: DataAkamaiGtmDomainPropertiesTrafficTargets[] | cdktf.IResolvable) {
    this._trafficTargets.internalValue = value;
  }
  public resetTrafficTargets() {
    this._trafficTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTargetsInput() {
    return this._trafficTargets.internalValue;
  }
}

export class DataAkamaiGtmDomainPropertiesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainProperties[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainPropertiesOutputReference {
    return new DataAkamaiGtmDomainPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainResourcesLinks {
}

export function dataAkamaiGtmDomainResourcesLinksToTerraform(struct?: DataAkamaiGtmDomainResourcesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainResourcesLinksToHclTerraform(struct?: DataAkamaiGtmDomainResourcesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainResourcesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainResourcesLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainResourcesLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainResourcesLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainResourcesLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainResourcesLinksOutputReference {
    return new DataAkamaiGtmDomainResourcesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainResourcesResourceInstances {
}

export function dataAkamaiGtmDomainResourcesResourceInstancesToTerraform(struct?: DataAkamaiGtmDomainResourcesResourceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainResourcesResourceInstancesToHclTerraform(struct?: DataAkamaiGtmDomainResourcesResourceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainResourcesResourceInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainResourcesResourceInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainResourcesResourceInstances | cdktf.IResolvable | undefined) {
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

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }

  // load_object - computed: true, optional: false, required: false
  public get loadObject() {
    return this.getStringAttribute('load_object');
  }

  // load_object_port - computed: true, optional: false, required: false
  public get loadObjectPort() {
    return this.getNumberAttribute('load_object_port');
  }

  // load_servers - computed: true, optional: false, required: false
  public get loadServers() {
    return this.getListAttribute('load_servers');
  }

  // use_default_load_object - computed: true, optional: false, required: false
  public get useDefaultLoadObject() {
    return this.getBooleanAttribute('use_default_load_object');
  }
}

export class DataAkamaiGtmDomainResourcesResourceInstancesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainResourcesResourceInstances[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainResourcesResourceInstancesOutputReference {
    return new DataAkamaiGtmDomainResourcesResourceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainResources {
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainResourcesLinks[] | cdktf.IResolvable;
  /**
  * resource_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#resource_instances DataAkamaiGtmDomain#resource_instances}
  */
  readonly resourceInstances?: DataAkamaiGtmDomainResourcesResourceInstances[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainResourcesToTerraform(struct?: DataAkamaiGtmDomainResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    links: cdktf.listMapper(dataAkamaiGtmDomainResourcesLinksToTerraform, true)(struct!.links),
    resource_instances: cdktf.listMapper(dataAkamaiGtmDomainResourcesResourceInstancesToTerraform, true)(struct!.resourceInstances),
  }
}


export function dataAkamaiGtmDomainResourcesToHclTerraform(struct?: DataAkamaiGtmDomainResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainResourcesLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainResourcesLinksList",
    },
    resource_instances: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainResourcesResourceInstancesToHclTerraform, true)(struct!.resourceInstances),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainResourcesResourceInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._resourceInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceInstances = this._resourceInstances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._links.internalValue = undefined;
      this._resourceInstances.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._links.internalValue = value.links;
      this._resourceInstances.internalValue = value.resourceInstances;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // constrained_property - computed: true, optional: false, required: false
  public get constrainedProperty() {
    return this.getStringAttribute('constrained_property');
  }

  // decay_rate - computed: true, optional: false, required: false
  public get decayRate() {
    return this.getNumberAttribute('decay_rate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // leader_string - computed: true, optional: false, required: false
  public get leaderString() {
    return this.getStringAttribute('leader_string');
  }

  // least_squares_decay - computed: true, optional: false, required: false
  public get leastSquaresDecay() {
    return this.getNumberAttribute('least_squares_decay');
  }

  // load_imbalance_percentage - computed: true, optional: false, required: false
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }

  // max_u_multiplicative_increment - computed: true, optional: false, required: false
  public get maxUMultiplicativeIncrement() {
    return this.getNumberAttribute('max_u_multiplicative_increment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainResourcesLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainResourcesLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // resource_instances - computed: false, optional: true, required: false
  private _resourceInstances = new DataAkamaiGtmDomainResourcesResourceInstancesList(this, "resource_instances", true);
  public get resourceInstances() {
    return this._resourceInstances;
  }
  public putResourceInstances(value: DataAkamaiGtmDomainResourcesResourceInstances[] | cdktf.IResolvable) {
    this._resourceInstances.internalValue = value;
  }
  public resetResourceInstances() {
    this._resourceInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInstancesInput() {
    return this._resourceInstances.internalValue;
  }
}

export class DataAkamaiGtmDomainResourcesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainResources[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainResourcesOutputReference {
    return new DataAkamaiGtmDomainResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainStatusLinks {
}

export function dataAkamaiGtmDomainStatusLinksToTerraform(struct?: DataAkamaiGtmDomainStatusLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDomainStatusLinksToHclTerraform(struct?: DataAkamaiGtmDomainStatusLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDomainStatusLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDomainStatusLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainStatusLinks | cdktf.IResolvable | undefined) {
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataAkamaiGtmDomainStatusLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmDomainStatusLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmDomainStatusLinksOutputReference {
    return new DataAkamaiGtmDomainStatusLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDomainStatus {
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#links DataAkamaiGtmDomain#links}
  */
  readonly links?: DataAkamaiGtmDomainStatusLinks[] | cdktf.IResolvable;
}

export function dataAkamaiGtmDomainStatusToTerraform(struct?: DataAkamaiGtmDomainStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    links: cdktf.listMapper(dataAkamaiGtmDomainStatusLinksToTerraform, true)(struct!.links),
  }
}


export function dataAkamaiGtmDomainStatusToHclTerraform(struct?: DataAkamaiGtmDomainStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmDomainStatusLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmDomainStatusLinksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmDomainStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiGtmDomainStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDomainStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._links.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._links.internalValue = value.links;
    }
  }

  // change_id - computed: true, optional: false, required: false
  public get changeId() {
    return this.getStringAttribute('change_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // passing_validation - computed: true, optional: false, required: false
  public get passingValidation() {
    return this.getBooleanAttribute('passing_validation');
  }

  // propagation_status - computed: true, optional: false, required: false
  public get propagationStatus() {
    return this.getStringAttribute('propagation_status');
  }

  // propagation_status_date - computed: true, optional: false, required: false
  public get propagationStatusDate() {
    return this.getStringAttribute('propagation_status_date');
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainStatusLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainStatusLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain akamai_gtm_domain}
*/
export class DataAkamaiGtmDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiGtmDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiGtmDomain to import
  * @param importFromId The id of the existing DataAkamaiGtmDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiGtmDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_domain akamai_gtm_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiGtmDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiGtmDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_domain',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
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
    this._asMaps.internalValue = config.asMaps;
    this._cidrMaps.internalValue = config.cidrMaps;
    this._datacenters.internalValue = config.datacenters;
    this._geographicMaps.internalValue = config.geographicMaps;
    this._links.internalValue = config.links;
    this._properties.internalValue = config.properties;
    this._resources.internalValue = config.resources;
    this._status.internalValue = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_coalescing_enabled - computed: true, optional: false, required: false
  public get cnameCoalescingEnabled() {
    return this.getBooleanAttribute('cname_coalescing_enabled');
  }

  // default_error_penalty - computed: true, optional: false, required: false
  public get defaultErrorPenalty() {
    return this.getNumberAttribute('default_error_penalty');
  }

  // default_health_max - computed: true, optional: false, required: false
  public get defaultHealthMax() {
    return this.getNumberAttribute('default_health_max');
  }

  // default_health_multiplier - computed: true, optional: false, required: false
  public get defaultHealthMultiplier() {
    return this.getNumberAttribute('default_health_multiplier');
  }

  // default_health_threshold - computed: true, optional: false, required: false
  public get defaultHealthThreshold() {
    return this.getNumberAttribute('default_health_threshold');
  }

  // default_max_unreachable_penalty - computed: true, optional: false, required: false
  public get defaultMaxUnreachablePenalty() {
    return this.getNumberAttribute('default_max_unreachable_penalty');
  }

  // default_ssl_client_certificate - computed: true, optional: false, required: false
  public get defaultSslClientCertificate() {
    return this.getStringAttribute('default_ssl_client_certificate');
  }

  // default_ssl_client_private_key - computed: true, optional: false, required: false
  public get defaultSslClientPrivateKey() {
    return this.getStringAttribute('default_ssl_client_private_key');
  }

  // default_timeout_penalty - computed: true, optional: false, required: false
  public get defaultTimeoutPenalty() {
    return this.getNumberAttribute('default_timeout_penalty');
  }

  // default_unreachable_threshold - computed: true, optional: false, required: false
  public get defaultUnreachableThreshold() {
    return this.getNumberAttribute('default_unreachable_threshold');
  }

  // email_notification_list - computed: true, optional: false, required: false
  public get emailNotificationList() {
    return this.getListAttribute('email_notification_list');
  }

  // end_user_mapping_enabled - computed: true, optional: false, required: false
  public get endUserMappingEnabled() {
    return this.getBooleanAttribute('end_user_mapping_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // load_feedback - computed: true, optional: false, required: false
  public get loadFeedback() {
    return this.getBooleanAttribute('load_feedback');
  }

  // load_imbalance_percentage - computed: true, optional: false, required: false
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }

  // map_update_interval - computed: true, optional: false, required: false
  public get mapUpdateInterval() {
    return this.getNumberAttribute('map_update_interval');
  }

  // max_properties - computed: true, optional: false, required: false
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }

  // max_resources - computed: true, optional: false, required: false
  public get maxResources() {
    return this.getNumberAttribute('max_resources');
  }

  // max_test_timeout - computed: true, optional: false, required: false
  public get maxTestTimeout() {
    return this.getNumberAttribute('max_test_timeout');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_pingable_region_fraction - computed: true, optional: false, required: false
  public get minPingableRegionFraction() {
    return this.getNumberAttribute('min_pingable_region_fraction');
  }

  // min_test_interval - computed: true, optional: false, required: false
  public get minTestInterval() {
    return this.getNumberAttribute('min_test_interval');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }

  // modification_comments - computed: true, optional: false, required: false
  public get modificationComments() {
    return this.getStringAttribute('modification_comments');
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

  // round_robin_prefix - computed: true, optional: false, required: false
  public get roundRobinPrefix() {
    return this.getStringAttribute('round_robin_prefix');
  }

  // server_monitor_pool - computed: true, optional: false, required: false
  public get serverMonitorPool() {
    return this.getStringAttribute('server_monitor_pool');
  }

  // sign_and_serve - computed: true, optional: false, required: false
  public get signAndServe() {
    return this.getBooleanAttribute('sign_and_serve');
  }

  // sign_and_serve_algorithm - computed: true, optional: false, required: false
  public get signAndServeAlgorithm() {
    return this.getStringAttribute('sign_and_serve_algorithm');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // as_maps - computed: false, optional: true, required: false
  private _asMaps = new DataAkamaiGtmDomainAsMapsList(this, "as_maps", true);
  public get asMaps() {
    return this._asMaps;
  }
  public putAsMaps(value: DataAkamaiGtmDomainAsMaps[] | cdktf.IResolvable) {
    this._asMaps.internalValue = value;
  }
  public resetAsMaps() {
    this._asMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asMapsInput() {
    return this._asMaps.internalValue;
  }

  // cidr_maps - computed: false, optional: true, required: false
  private _cidrMaps = new DataAkamaiGtmDomainCidrMapsList(this, "cidr_maps", true);
  public get cidrMaps() {
    return this._cidrMaps;
  }
  public putCidrMaps(value: DataAkamaiGtmDomainCidrMaps[] | cdktf.IResolvable) {
    this._cidrMaps.internalValue = value;
  }
  public resetCidrMaps() {
    this._cidrMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMapsInput() {
    return this._cidrMaps.internalValue;
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters = new DataAkamaiGtmDomainDatacentersList(this, "datacenters", true);
  public get datacenters() {
    return this._datacenters;
  }
  public putDatacenters(value: DataAkamaiGtmDomainDatacenters[] | cdktf.IResolvable) {
    this._datacenters.internalValue = value;
  }
  public resetDatacenters() {
    this._datacenters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters.internalValue;
  }

  // geographic_maps - computed: false, optional: true, required: false
  private _geographicMaps = new DataAkamaiGtmDomainGeographicMapsList(this, "geographic_maps", true);
  public get geographicMaps() {
    return this._geographicMaps;
  }
  public putGeographicMaps(value: DataAkamaiGtmDomainGeographicMaps[] | cdktf.IResolvable) {
    this._geographicMaps.internalValue = value;
  }
  public resetGeographicMaps() {
    this._geographicMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geographicMapsInput() {
    return this._geographicMaps.internalValue;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmDomainLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmDomainLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataAkamaiGtmDomainPropertiesList(this, "properties", true);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataAkamaiGtmDomainProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataAkamaiGtmDomainResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataAkamaiGtmDomainResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new DataAkamaiGtmDomainStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DataAkamaiGtmDomainStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      as_maps: cdktf.listMapper(dataAkamaiGtmDomainAsMapsToTerraform, true)(this._asMaps.internalValue),
      cidr_maps: cdktf.listMapper(dataAkamaiGtmDomainCidrMapsToTerraform, true)(this._cidrMaps.internalValue),
      datacenters: cdktf.listMapper(dataAkamaiGtmDomainDatacentersToTerraform, true)(this._datacenters.internalValue),
      geographic_maps: cdktf.listMapper(dataAkamaiGtmDomainGeographicMapsToTerraform, true)(this._geographicMaps.internalValue),
      links: cdktf.listMapper(dataAkamaiGtmDomainLinksToTerraform, true)(this._links.internalValue),
      properties: cdktf.listMapper(dataAkamaiGtmDomainPropertiesToTerraform, true)(this._properties.internalValue),
      resources: cdktf.listMapper(dataAkamaiGtmDomainResourcesToTerraform, true)(this._resources.internalValue),
      status: dataAkamaiGtmDomainStatusToTerraform(this._status.internalValue),
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
      as_maps: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainAsMapsToHclTerraform, true)(this._asMaps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainAsMapsList",
      },
      cidr_maps: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainCidrMapsToHclTerraform, true)(this._cidrMaps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainCidrMapsList",
      },
      datacenters: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainDatacentersToHclTerraform, true)(this._datacenters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainDatacentersList",
      },
      geographic_maps: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainGeographicMapsToHclTerraform, true)(this._geographicMaps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainGeographicMapsList",
      },
      links: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainLinksToHclTerraform, true)(this._links.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainLinksList",
      },
      properties: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainPropertiesToHclTerraform, true)(this._properties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainPropertiesList",
      },
      resources: {
        value: cdktf.listMapperHcl(dataAkamaiGtmDomainResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmDomainResourcesList",
      },
      status: {
        value: dataAkamaiGtmDomainStatusToHclTerraform(this._status.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAkamaiGtmDomainStatus",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
