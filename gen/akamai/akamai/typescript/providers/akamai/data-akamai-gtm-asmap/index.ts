// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiGtmAsmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive label for the AS map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap#domain DataAkamaiGtmAsmap#domain}
  */
  readonly domain: string;
  /**
  * A descriptive label for the AS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap#map_name DataAkamaiGtmAsmap#map_name}
  */
  readonly mapName: string;
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap#assignments DataAkamaiGtmAsmap#assignments}
  */
  readonly assignments?: DataAkamaiGtmAsmapAssignments[] | cdktf.IResolvable;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap#links DataAkamaiGtmAsmap#links}
  */
  readonly links?: DataAkamaiGtmAsmapLinks[] | cdktf.IResolvable;
}
export interface DataAkamaiGtmAsmapAssignments {
}

export function dataAkamaiGtmAsmapAssignmentsToTerraform(struct?: DataAkamaiGtmAsmapAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmAsmapAssignmentsToHclTerraform(struct?: DataAkamaiGtmAsmapAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmAsmapAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmAsmapAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmAsmapAssignments | cdktf.IResolvable | undefined) {
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

export class DataAkamaiGtmAsmapAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmAsmapAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmAsmapAssignmentsOutputReference {
    return new DataAkamaiGtmAsmapAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmAsmapDefaultDatacenter {
}

export function dataAkamaiGtmAsmapDefaultDatacenterToTerraform(struct?: DataAkamaiGtmAsmapDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmAsmapDefaultDatacenterToHclTerraform(struct?: DataAkamaiGtmAsmapDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmAsmapDefaultDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiGtmAsmapDefaultDatacenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmAsmapDefaultDatacenter | cdktf.IResolvable | undefined) {
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
export interface DataAkamaiGtmAsmapLinks {
}

export function dataAkamaiGtmAsmapLinksToTerraform(struct?: DataAkamaiGtmAsmapLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmAsmapLinksToHclTerraform(struct?: DataAkamaiGtmAsmapLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmAsmapLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmAsmapLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmAsmapLinks | cdktf.IResolvable | undefined) {
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

export class DataAkamaiGtmAsmapLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmAsmapLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmAsmapLinksOutputReference {
    return new DataAkamaiGtmAsmapLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap akamai_gtm_asmap}
*/
export class DataAkamaiGtmAsmap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_asmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiGtmAsmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiGtmAsmap to import
  * @param importFromId The id of the existing DataAkamaiGtmAsmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiGtmAsmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_asmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_asmap akamai_gtm_asmap} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiGtmAsmapConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiGtmAsmapConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_asmap',
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
    this._domain = config.domain;
    this._mapName = config.mapName;
    this._assignments.internalValue = config.assignments;
    this._links.internalValue = config.links;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // map_name - computed: false, optional: false, required: true
  private _mapName?: string; 
  public get mapName() {
    return this.getStringAttribute('map_name');
  }
  public set mapName(value: string) {
    this._mapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapNameInput() {
    return this._mapName;
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments = new DataAkamaiGtmAsmapAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: DataAkamaiGtmAsmapAssignments[] | cdktf.IResolvable) {
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
  private _defaultDatacenter = new DataAkamaiGtmAsmapDefaultDatacenterOutputReference(this, "default_datacenter");
  public get defaultDatacenter() {
    return this._defaultDatacenter;
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmAsmapLinksList(this, "links", false);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmAsmapLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      map_name: cdktf.stringToTerraform(this._mapName),
      assignments: cdktf.listMapper(dataAkamaiGtmAsmapAssignmentsToTerraform, true)(this._assignments.internalValue),
      links: cdktf.listMapper(dataAkamaiGtmAsmapLinksToTerraform, true)(this._links.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map_name: {
        value: cdktf.stringToHclTerraform(this._mapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignments: {
        value: cdktf.listMapperHcl(dataAkamaiGtmAsmapAssignmentsToHclTerraform, true)(this._assignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiGtmAsmapAssignmentsList",
      },
      links: {
        value: cdktf.listMapperHcl(dataAkamaiGtmAsmapLinksToHclTerraform, true)(this._links.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiGtmAsmapLinksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
