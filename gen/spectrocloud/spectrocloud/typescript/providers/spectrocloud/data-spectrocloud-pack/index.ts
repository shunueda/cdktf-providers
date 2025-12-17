// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpectrocloudPackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter results by cloud type. If not provided, all cloud types are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#cloud DataSpectrocloudPack#cloud}
  */
  readonly cloud?: string[];
  /**
  * Filters to apply when searching for a pack. This is a string of the form 'key1=value1' with 'AND', 'OR` operators. Refer to the Palette API [pack search API endpoint documentation](https://docs.spectrocloud.com/api/v1/v-1-packs-search/) for filter examples. The filter attribute will be deprecated soon; use `advance_filter` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#filters DataSpectrocloudPack#filters}
  */
  readonly filters?: string;
  /**
  * The UID of the pack returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#id DataSpectrocloudPack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the pack to search for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#name DataSpectrocloudPack#name}
  */
  readonly name?: string;
  /**
  * The unique identifier (UID) of the registry where the pack is located. Specify `registry_uid` to search within a specific registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#registry_uid DataSpectrocloudPack#registry_uid}
  */
  readonly registryUid?: string;
  /**
  * The type of pack to search for. Supported values are `helm`, `manifest`, `container`, `operator-instance`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#type DataSpectrocloudPack#type}
  */
  readonly type?: string;
  /**
  * Specify the version of the pack to search for. If not set, the latest available version from the specified registry will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#version DataSpectrocloudPack#version}
  */
  readonly version?: string;
  /**
  * advance_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#advance_filters DataSpectrocloudPack#advance_filters}
  */
  readonly advanceFilters?: DataSpectrocloudPackAdvanceFilters;
}
export interface DataSpectrocloudPackAdvanceFilters {
  /**
  * Defines the type of add-on pack. Allowed values are `load balancer`, `ingress`, `logging`, `monitoring`, `security`, `authentication`, `servicemesh`, `system app`, `app services`, `registry` and `integration`. If not specified, all options will be set by default. For `storage` and `network` addon_type set `csi` or `cni` respectively in pack_layer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#addon_type DataSpectrocloudPack#addon_type}
  */
  readonly addonType?: string[];
  /**
  * Defines the environment where the pack will be deployed. Options include `all`, `aws`, `eks`, `azure`, `aks`, `gcp`, `gke`, `vsphere`, `maas`, `openstack` and `edge-native`. If not specified, all options will be set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#environment DataSpectrocloudPack#environment}
  */
  readonly environment?: string[];
  /**
  * Indicates whether the pack is FIPS-compliant. If `true`, only FIPS-compliant components will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#is_fips DataSpectrocloudPack#is_fips}
  */
  readonly isFips?: boolean | cdktf.IResolvable;
  /**
  * Indicates the pack layer, such as `kernel`, `os`, `k8s`, `cni`, `csi`, or `addon`. If not specified, all options will be set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#pack_layer DataSpectrocloudPack#pack_layer}
  */
  readonly packLayer?: string[];
  /**
  * Specify the source of the pack. Allowed values are `spectrocloud` and `community`. If not specified, all options will be set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#pack_source DataSpectrocloudPack#pack_source}
  */
  readonly packSource?: string[];
  /**
  * Specify the type of pack. Allowed values are `helm`, `spectro`, `oci`, and `manifest`. If not specified, all options will be set by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#pack_type DataSpectrocloudPack#pack_type}
  */
  readonly packType?: string[];
}

export function dataSpectrocloudPackAdvanceFiltersToTerraform(struct?: DataSpectrocloudPackAdvanceFiltersOutputReference | DataSpectrocloudPackAdvanceFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addonType),
    environment: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environment),
    is_fips: cdktf.booleanToTerraform(struct!.isFips),
    pack_layer: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packLayer),
    pack_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packSource),
    pack_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packType),
  }
}


export function dataSpectrocloudPackAdvanceFiltersToHclTerraform(struct?: DataSpectrocloudPackAdvanceFiltersOutputReference | DataSpectrocloudPackAdvanceFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addonType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environment),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_fips: {
      value: cdktf.booleanToHclTerraform(struct!.isFips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pack_layer: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packLayer),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pack_source: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packSource),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pack_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpectrocloudPackAdvanceFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpectrocloudPackAdvanceFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonType = this._addonType;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._isFips !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFips = this._isFips;
    }
    if (this._packLayer !== undefined) {
      hasAnyValues = true;
      internalValueResult.packLayer = this._packLayer;
    }
    if (this._packSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.packSource = this._packSource;
    }
    if (this._packType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packType = this._packType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpectrocloudPackAdvanceFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonType = undefined;
      this._environment = undefined;
      this._isFips = undefined;
      this._packLayer = undefined;
      this._packSource = undefined;
      this._packType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonType = value.addonType;
      this._environment = value.environment;
      this._isFips = value.isFips;
      this._packLayer = value.packLayer;
      this._packSource = value.packSource;
      this._packType = value.packType;
    }
  }

  // addon_type - computed: false, optional: true, required: false
  private _addonType?: string[]; 
  public get addonType() {
    return cdktf.Fn.tolist(this.getListAttribute('addon_type'));
  }
  public set addonType(value: string[]) {
    this._addonType = value;
  }
  public resetAddonType() {
    this._addonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonTypeInput() {
    return this._addonType;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string[]; 
  public get environment() {
    return cdktf.Fn.tolist(this.getListAttribute('environment'));
  }
  public set environment(value: string[]) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // is_fips - computed: false, optional: true, required: false
  private _isFips?: boolean | cdktf.IResolvable; 
  public get isFips() {
    return this.getBooleanAttribute('is_fips');
  }
  public set isFips(value: boolean | cdktf.IResolvable) {
    this._isFips = value;
  }
  public resetIsFips() {
    this._isFips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFipsInput() {
    return this._isFips;
  }

  // pack_layer - computed: false, optional: true, required: false
  private _packLayer?: string[]; 
  public get packLayer() {
    return cdktf.Fn.tolist(this.getListAttribute('pack_layer'));
  }
  public set packLayer(value: string[]) {
    this._packLayer = value;
  }
  public resetPackLayer() {
    this._packLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packLayerInput() {
    return this._packLayer;
  }

  // pack_source - computed: false, optional: true, required: false
  private _packSource?: string[]; 
  public get packSource() {
    return cdktf.Fn.tolist(this.getListAttribute('pack_source'));
  }
  public set packSource(value: string[]) {
    this._packSource = value;
  }
  public resetPackSource() {
    this._packSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packSourceInput() {
    return this._packSource;
  }

  // pack_type - computed: false, optional: true, required: false
  private _packType?: string[]; 
  public get packType() {
    return cdktf.Fn.tolist(this.getListAttribute('pack_type'));
  }
  public set packType(value: string[]) {
    this._packType = value;
  }
  public resetPackType() {
    this._packType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packTypeInput() {
    return this._packType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack spectrocloud_pack}
*/
export class DataSpectrocloudPack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpectrocloudPack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpectrocloudPack to import
  * @param importFromId The id of the existing DataSpectrocloudPack that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpectrocloudPack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/data-sources/pack spectrocloud_pack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpectrocloudPackConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpectrocloudPackConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_pack',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.1',
        providerVersionConstraint: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud = config.cloud;
    this._filters = config.filters;
    this._id = config.id;
    this._name = config.name;
    this._registryUid = config.registryUid;
    this._type = config.type;
    this._version = config.version;
    this._advanceFilters.internalValue = config.advanceFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: true, optional: true, required: false
  private _cloud?: string[]; 
  public get cloud() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud'));
  }
  public set cloud(value: string[]) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string; 
  public get filters() {
    return this.getStringAttribute('filters');
  }
  public set filters(value: string) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // name - computed: true, optional: true, required: false
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

  // registry_uid - computed: true, optional: true, required: false
  private _registryUid?: string; 
  public get registryUid() {
    return this.getStringAttribute('registry_uid');
  }
  public set registryUid(value: string) {
    this._registryUid = value;
  }
  public resetRegistryUid() {
    this._registryUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryUidInput() {
    return this._registryUid;
  }

  // type - computed: true, optional: true, required: false
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getStringAttribute('values');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // advance_filters - computed: false, optional: true, required: false
  private _advanceFilters = new DataSpectrocloudPackAdvanceFiltersOutputReference(this, "advance_filters");
  public get advanceFilters() {
    return this._advanceFilters;
  }
  public putAdvanceFilters(value: DataSpectrocloudPackAdvanceFilters) {
    this._advanceFilters.internalValue = value;
  }
  public resetAdvanceFilters() {
    this._advanceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceFiltersInput() {
    return this._advanceFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloud),
      filters: cdktf.stringToTerraform(this._filters),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      registry_uid: cdktf.stringToTerraform(this._registryUid),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      advance_filters: dataSpectrocloudPackAdvanceFiltersToTerraform(this._advanceFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloud),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filters: {
        value: cdktf.stringToHclTerraform(this._filters),
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
      registry_uid: {
        value: cdktf.stringToHclTerraform(this._registryUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advance_filters: {
        value: dataSpectrocloudPackAdvanceFiltersToHclTerraform(this._advanceFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpectrocloudPackAdvanceFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
