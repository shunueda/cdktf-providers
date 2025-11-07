// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegionalPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * By default summary entries are added to all VPCs and VNETs onboarded to Prosimo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#all_regions RegionalPrefix#all_regions}
  */
  readonly allRegions: boolean | cdktf.IResolvable;
  /**
  * Region Level IP Prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#cidr RegionalPrefix#cidr}
  */
  readonly cidr: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#overwrite_route RegionalPrefix#overwrite_route}
  */
  readonly overwriteRoute?: boolean | cdktf.IResolvable;
  /**
  * selected_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#selected_regions RegionalPrefix#selected_regions}
  */
  readonly selectedRegions?: RegionalPrefixSelectedRegions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#timeouts RegionalPrefix#timeouts}
  */
  readonly timeouts?: RegionalPrefixTimeouts;
}
export interface RegionalPrefixSelectedRegions {
  /**
  * List of Cloud Regions: e.g: us-east-1, eastus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#cloud_region RegionalPrefix#cloud_region}
  */
  readonly cloudRegion: string[];
  /**
  * CSP Details: E.G: AZURE/GCP/AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#cloud_type RegionalPrefix#cloud_type}
  */
  readonly cloudType: string;
}

export function regionalPrefixSelectedRegionsToTerraform(struct?: RegionalPrefixSelectedRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_region: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudRegion),
    cloud_type: cdktf.stringToTerraform(struct!.cloudType),
  }
}


export function regionalPrefixSelectedRegionsToHclTerraform(struct?: RegionalPrefixSelectedRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_region: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudRegion),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cloud_type: {
      value: cdktf.stringToHclTerraform(struct!.cloudType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegionalPrefixSelectedRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RegionalPrefixSelectedRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRegion = this._cloudRegion;
    }
    if (this._cloudType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegionalPrefixSelectedRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudRegion = undefined;
      this._cloudType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudRegion = value.cloudRegion;
      this._cloudType = value.cloudType;
    }
  }

  // cloud_region - computed: false, optional: false, required: true
  private _cloudRegion?: string[]; 
  public get cloudRegion() {
    return this.getListAttribute('cloud_region');
  }
  public set cloudRegion(value: string[]) {
    this._cloudRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: string; 
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }
  public set cloudType(value: string) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }
}

export class RegionalPrefixSelectedRegionsList extends cdktf.ComplexList {
  public internalValue? : RegionalPrefixSelectedRegions[] | cdktf.IResolvable

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
  public get(index: number): RegionalPrefixSelectedRegionsOutputReference {
    return new RegionalPrefixSelectedRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RegionalPrefixTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#create RegionalPrefix#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#delete RegionalPrefix#delete}
  */
  readonly delete?: string;
}

export function regionalPrefixTimeoutsToTerraform(struct?: RegionalPrefixTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function regionalPrefixTimeoutsToHclTerraform(struct?: RegionalPrefixTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegionalPrefixTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RegionalPrefixTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegionalPrefixTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix prosimo_regional_prefix}
*/
export class RegionalPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_regional_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RegionalPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RegionalPrefix to import
  * @param importFromId The id of the existing RegionalPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RegionalPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_regional_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/regional_prefix prosimo_regional_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegionalPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: RegionalPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_regional_prefix',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allRegions = config.allRegions;
    this._cidr = config.cidr;
    this._overwriteRoute = config.overwriteRoute;
    this._selectedRegions.internalValue = config.selectedRegions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_regions - computed: false, optional: false, required: true
  private _allRegions?: boolean | cdktf.IResolvable; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions');
  }
  public set allRegions(value: boolean | cdktf.IResolvable) {
    this._allRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string[]; 
  public get cidr() {
    return this.getListAttribute('cidr');
  }
  public set cidr(value: string[]) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // overwrite_route - computed: false, optional: true, required: false
  private _overwriteRoute?: boolean | cdktf.IResolvable; 
  public get overwriteRoute() {
    return this.getBooleanAttribute('overwrite_route');
  }
  public set overwriteRoute(value: boolean | cdktf.IResolvable) {
    this._overwriteRoute = value;
  }
  public resetOverwriteRoute() {
    this._overwriteRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteRouteInput() {
    return this._overwriteRoute;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // selected_regions - computed: false, optional: true, required: false
  private _selectedRegions = new RegionalPrefixSelectedRegionsList(this, "selected_regions", false);
  public get selectedRegions() {
    return this._selectedRegions;
  }
  public putSelectedRegions(value: RegionalPrefixSelectedRegions[] | cdktf.IResolvable) {
    this._selectedRegions.internalValue = value;
  }
  public resetSelectedRegions() {
    this._selectedRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRegionsInput() {
    return this._selectedRegions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RegionalPrefixTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RegionalPrefixTimeouts) {
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
      all_regions: cdktf.booleanToTerraform(this._allRegions),
      cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidr),
      overwrite_route: cdktf.booleanToTerraform(this._overwriteRoute),
      selected_regions: cdktf.listMapper(regionalPrefixSelectedRegionsToTerraform, true)(this._selectedRegions.internalValue),
      timeouts: regionalPrefixTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_regions: {
        value: cdktf.booleanToHclTerraform(this._allRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cidr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      overwrite_route: {
        value: cdktf.booleanToHclTerraform(this._overwriteRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      selected_regions: {
        value: cdktf.listMapperHcl(regionalPrefixSelectedRegionsToHclTerraform, true)(this._selectedRegions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RegionalPrefixSelectedRegionsList",
      },
      timeouts: {
        value: regionalPrefixTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RegionalPrefixTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
