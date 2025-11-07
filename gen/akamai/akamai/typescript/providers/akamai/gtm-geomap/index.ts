// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GtmGeomapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#default_datacenter GtmGeomap#default_datacenter}
  */
  readonly defaultDatacenter: GtmGeomapDefaultDatacenter[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#domain GtmGeomap#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#id GtmGeomap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#name GtmGeomap#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#wait_on_complete GtmGeomap#wait_on_complete}
  */
  readonly waitOnComplete?: boolean | cdktf.IResolvable;
  /**
  * assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#assignment GtmGeomap#assignment}
  */
  readonly assignment?: GtmGeomapAssignment[] | cdktf.IResolvable;
}
export interface GtmGeomapDefaultDatacenter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#datacenter_id GtmGeomap#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#nickname GtmGeomap#nickname}
  */
  readonly nickname: string;
}

export function gtmGeomapDefaultDatacenterToTerraform(struct?: GtmGeomapDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
    nickname: cdktf.stringToTerraform(struct!.nickname),
  }
}


export function gtmGeomapDefaultDatacenterToHclTerraform(struct?: GtmGeomapDefaultDatacenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter_id: {
      value: cdktf.numberToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nickname: {
      value: cdktf.stringToHclTerraform(struct!.nickname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmGeomapDefaultDatacenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmGeomapDefaultDatacenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._nickname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickname = this._nickname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmGeomapDefaultDatacenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenterId = undefined;
      this._nickname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenterId = value.datacenterId;
      this._nickname = value.nickname;
    }
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }
}

export class GtmGeomapDefaultDatacenterList extends cdktf.ComplexList {
  public internalValue? : GtmGeomapDefaultDatacenter[] | cdktf.IResolvable

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
  public get(index: number): GtmGeomapDefaultDatacenterOutputReference {
    return new GtmGeomapDefaultDatacenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GtmGeomapAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#countries GtmGeomap#countries}
  */
  readonly countries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#datacenter_id GtmGeomap#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#nickname GtmGeomap#nickname}
  */
  readonly nickname: string;
}

export function gtmGeomapAssignmentToTerraform(struct?: GtmGeomapAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
    nickname: cdktf.stringToTerraform(struct!.nickname),
  }
}


export function gtmGeomapAssignmentToHclTerraform(struct?: GtmGeomapAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    datacenter_id: {
      value: cdktf.numberToHclTerraform(struct!.datacenterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nickname: {
      value: cdktf.stringToHclTerraform(struct!.nickname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmGeomapAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmGeomapAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._nickname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickname = this._nickname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmGeomapAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._datacenterId = undefined;
      this._nickname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._datacenterId = value.datacenterId;
      this._nickname = value.nickname;
    }
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }
}

export class GtmGeomapAssignmentList extends cdktf.ComplexList {
  public internalValue? : GtmGeomapAssignment[] | cdktf.IResolvable

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
  public get(index: number): GtmGeomapAssignmentOutputReference {
    return new GtmGeomapAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap akamai_gtm_geomap}
*/
export class GtmGeomap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_geomap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GtmGeomap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GtmGeomap to import
  * @param importFromId The id of the existing GtmGeomap that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GtmGeomap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_geomap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_geomap akamai_gtm_geomap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GtmGeomapConfig
  */
  public constructor(scope: Construct, id: string, config: GtmGeomapConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_geomap',
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
    this._defaultDatacenter.internalValue = config.defaultDatacenter;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._waitOnComplete = config.waitOnComplete;
    this._assignment.internalValue = config.assignment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_datacenter - computed: false, optional: false, required: true
  private _defaultDatacenter = new GtmGeomapDefaultDatacenterList(this, "default_datacenter", false);
  public get defaultDatacenter() {
    return this._defaultDatacenter;
  }
  public putDefaultDatacenter(value: GtmGeomapDefaultDatacenter[] | cdktf.IResolvable) {
    this._defaultDatacenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatacenterInput() {
    return this._defaultDatacenter.internalValue;
  }

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

  // wait_on_complete - computed: false, optional: true, required: false
  private _waitOnComplete?: boolean | cdktf.IResolvable; 
  public get waitOnComplete() {
    return this.getBooleanAttribute('wait_on_complete');
  }
  public set waitOnComplete(value: boolean | cdktf.IResolvable) {
    this._waitOnComplete = value;
  }
  public resetWaitOnComplete() {
    this._waitOnComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitOnCompleteInput() {
    return this._waitOnComplete;
  }

  // assignment - computed: false, optional: true, required: false
  private _assignment = new GtmGeomapAssignmentList(this, "assignment", false);
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: GtmGeomapAssignment[] | cdktf.IResolvable) {
    this._assignment.internalValue = value;
  }
  public resetAssignment() {
    this._assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_datacenter: cdktf.listMapper(gtmGeomapDefaultDatacenterToTerraform, false)(this._defaultDatacenter.internalValue),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      wait_on_complete: cdktf.booleanToTerraform(this._waitOnComplete),
      assignment: cdktf.listMapper(gtmGeomapAssignmentToTerraform, true)(this._assignment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_datacenter: {
        value: cdktf.listMapperHcl(gtmGeomapDefaultDatacenterToHclTerraform, false)(this._defaultDatacenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmGeomapDefaultDatacenterList",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_on_complete: {
        value: cdktf.booleanToHclTerraform(this._waitOnComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assignment: {
        value: cdktf.listMapperHcl(gtmGeomapAssignmentToHclTerraform, true)(this._assignment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmGeomapAssignmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
