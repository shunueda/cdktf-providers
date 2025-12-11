// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGuardAdhocQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#compartment_id CloudGuardAdhocQuery#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#defined_tags CloudGuardAdhocQuery#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#freeform_tags CloudGuardAdhocQuery#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#id CloudGuardAdhocQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * adhoc_query_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#adhoc_query_details CloudGuardAdhocQuery#adhoc_query_details}
  */
  readonly adhocQueryDetails: CloudGuardAdhocQueryAdhocQueryDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#timeouts CloudGuardAdhocQuery#timeouts}
  */
  readonly timeouts?: CloudGuardAdhocQueryTimeouts;
}
export interface CloudGuardAdhocQueryAdhocQueryRegionalDetails {
}

export function cloudGuardAdhocQueryAdhocQueryRegionalDetailsToTerraform(struct?: CloudGuardAdhocQueryAdhocQueryRegionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardAdhocQueryAdhocQueryRegionalDetailsToHclTerraform(struct?: CloudGuardAdhocQueryAdhocQueryRegionalDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardAdhocQueryAdhocQueryRegionalDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardAdhocQueryAdhocQueryRegionalDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expected_count - computed: true, optional: false, required: false
  public get expectedCount() {
    return this.getStringAttribute('expected_count');
  }

  // expired_count - computed: true, optional: false, required: false
  public get expiredCount() {
    return this.getStringAttribute('expired_count');
  }

  // failed_count - computed: true, optional: false, required: false
  public get failedCount() {
    return this.getStringAttribute('failed_count');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // regional_error - computed: true, optional: false, required: false
  public get regionalError() {
    return this.getStringAttribute('regional_error');
  }

  // regional_status - computed: true, optional: false, required: false
  public get regionalStatus() {
    return this.getStringAttribute('regional_status');
  }

  // succeeded_count - computed: true, optional: false, required: false
  public get succeededCount() {
    return this.getStringAttribute('succeeded_count');
  }
}

export class CloudGuardAdhocQueryAdhocQueryRegionalDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference {
    return new CloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#region CloudGuardAdhocQuery#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#resource_ids CloudGuardAdhocQuery#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#resource_type CloudGuardAdhocQuery#resource_type}
  */
  readonly resourceType?: string;
}

export function cloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesToTerraform(struct?: CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function cloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesToHclTerraform(struct?: CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._resourceIds = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._resourceIds = value.resourceIds;
      this._resourceType = value.resourceType;
    }
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

  // resource_ids - computed: true, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference {
    return new CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardAdhocQueryAdhocQueryDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#query CloudGuardAdhocQuery#query}
  */
  readonly query: string;
  /**
  * adhoc_query_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#adhoc_query_resources CloudGuardAdhocQuery#adhoc_query_resources}
  */
  readonly adhocQueryResources: CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources[] | cdktf.IResolvable;
}

export function cloudGuardAdhocQueryAdhocQueryDetailsToTerraform(struct?: CloudGuardAdhocQueryAdhocQueryDetailsOutputReference | CloudGuardAdhocQueryAdhocQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    adhoc_query_resources: cdktf.listMapper(cloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesToTerraform, true)(struct!.adhocQueryResources),
  }
}


export function cloudGuardAdhocQueryAdhocQueryDetailsToHclTerraform(struct?: CloudGuardAdhocQueryAdhocQueryDetailsOutputReference | CloudGuardAdhocQueryAdhocQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adhoc_query_resources: {
      value: cdktf.listMapperHcl(cloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesToHclTerraform, true)(struct!.adhocQueryResources),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardAdhocQueryAdhocQueryDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardAdhocQueryAdhocQueryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._adhocQueryResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adhocQueryResources = this._adhocQueryResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardAdhocQueryAdhocQueryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._adhocQueryResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._adhocQueryResources.internalValue = value.adhocQueryResources;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // adhoc_query_resources - computed: false, optional: false, required: true
  private _adhocQueryResources = new CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList(this, "adhoc_query_resources", false);
  public get adhocQueryResources() {
    return this._adhocQueryResources;
  }
  public putAdhocQueryResources(value: CloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources[] | cdktf.IResolvable) {
    this._adhocQueryResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocQueryResourcesInput() {
    return this._adhocQueryResources.internalValue;
  }
}
export interface CloudGuardAdhocQueryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#create CloudGuardAdhocQuery#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#delete CloudGuardAdhocQuery#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#update CloudGuardAdhocQuery#update}
  */
  readonly update?: string;
}

export function cloudGuardAdhocQueryTimeoutsToTerraform(struct?: CloudGuardAdhocQueryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudGuardAdhocQueryTimeoutsToHclTerraform(struct?: CloudGuardAdhocQueryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardAdhocQueryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGuardAdhocQueryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardAdhocQueryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query}
*/
export class CloudGuardAdhocQuery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_adhoc_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGuardAdhocQuery to import
  * @param importFromId The id of the existing CloudGuardAdhocQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGuardAdhocQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_adhoc_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGuardAdhocQueryConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGuardAdhocQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_adhoc_query',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._adhocQueryDetails.internalValue = config.adhocQueryDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adhoc_query_regional_details - computed: true, optional: false, required: false
  private _adhocQueryRegionalDetails = new CloudGuardAdhocQueryAdhocQueryRegionalDetailsList(this, "adhoc_query_regional_details", false);
  public get adhocQueryRegionalDetails() {
    return this._adhocQueryRegionalDetails;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // adhoc_query_details - computed: false, optional: false, required: true
  private _adhocQueryDetails = new CloudGuardAdhocQueryAdhocQueryDetailsOutputReference(this, "adhoc_query_details");
  public get adhocQueryDetails() {
    return this._adhocQueryDetails;
  }
  public putAdhocQueryDetails(value: CloudGuardAdhocQueryAdhocQueryDetails) {
    this._adhocQueryDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adhocQueryDetailsInput() {
    return this._adhocQueryDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudGuardAdhocQueryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudGuardAdhocQueryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      adhoc_query_details: cloudGuardAdhocQueryAdhocQueryDetailsToTerraform(this._adhocQueryDetails.internalValue),
      timeouts: cloudGuardAdhocQueryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adhoc_query_details: {
        value: cloudGuardAdhocQueryAdhocQueryDetailsToHclTerraform(this._adhocQueryDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGuardAdhocQueryAdhocQueryDetailsList",
      },
      timeouts: {
        value: cloudGuardAdhocQueryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGuardAdhocQueryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
