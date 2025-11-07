// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/data-sources/versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataChainguardVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the package to lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/data-sources/versions#package DataChainguardVersions#package}
  */
  readonly package: string;
  /**
  * A package variant (e.g. fips).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/data-sources/versions#variant DataChainguardVersions#variant}
  */
  readonly variant?: string;
}
export interface DataChainguardVersionsVersionMap {
}

export function dataChainguardVersionsVersionMapToTerraform(struct?: DataChainguardVersionsVersionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataChainguardVersionsVersionMapToHclTerraform(struct?: DataChainguardVersionsVersionMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataChainguardVersionsVersionMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataChainguardVersionsVersionMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataChainguardVersionsVersionMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eol - computed: true, optional: false, required: false
  public get eol() {
    return this.getBooleanAttribute('eol');
  }

  // eol_date - computed: true, optional: false, required: false
  public get eolDate() {
    return this.getStringAttribute('eol_date');
  }

  // exists - computed: true, optional: false, required: false
  public get exists() {
    return this.getBooleanAttribute('exists');
  }

  // fips - computed: true, optional: false, required: false
  public get fips() {
    return this.getBooleanAttribute('fips');
  }

  // is_latest - computed: true, optional: false, required: false
  public get isLatest() {
    return this.getBooleanAttribute('is_latest');
  }

  // lts - computed: true, optional: false, required: false
  public get lts() {
    return this.getStringAttribute('lts');
  }

  // main - computed: true, optional: false, required: false
  public get main() {
    return this.getStringAttribute('main');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataChainguardVersionsVersionMapMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataChainguardVersionsVersionMapOutputReference {
    return new DataChainguardVersionsVersionMapOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataChainguardVersionsVersionsEolVersions {
}

export function dataChainguardVersionsVersionsEolVersionsToTerraform(struct?: DataChainguardVersionsVersionsEolVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataChainguardVersionsVersionsEolVersionsToHclTerraform(struct?: DataChainguardVersionsVersionsEolVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataChainguardVersionsVersionsEolVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataChainguardVersionsVersionsEolVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataChainguardVersionsVersionsEolVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eol_broken - computed: true, optional: false, required: false
  public get eolBroken() {
    return this.getBooleanAttribute('eol_broken');
  }

  // eol_date - computed: true, optional: false, required: false
  public get eolDate() {
    return this.getStringAttribute('eol_date');
  }

  // exists - computed: true, optional: false, required: false
  public get exists() {
    return this.getBooleanAttribute('exists');
  }

  // fips - computed: true, optional: false, required: false
  public get fips() {
    return this.getBooleanAttribute('fips');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataChainguardVersionsVersionsEolVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataChainguardVersionsVersionsEolVersionsOutputReference {
    return new DataChainguardVersionsVersionsEolVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataChainguardVersionsVersionsVersions {
}

export function dataChainguardVersionsVersionsVersionsToTerraform(struct?: DataChainguardVersionsVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataChainguardVersionsVersionsVersionsToHclTerraform(struct?: DataChainguardVersionsVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataChainguardVersionsVersionsVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataChainguardVersionsVersionsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataChainguardVersionsVersionsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exists - computed: true, optional: false, required: false
  public get exists() {
    return this.getBooleanAttribute('exists');
  }

  // fips - computed: true, optional: false, required: false
  public get fips() {
    return this.getBooleanAttribute('fips');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataChainguardVersionsVersionsVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataChainguardVersionsVersionsVersionsOutputReference {
    return new DataChainguardVersionsVersionsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataChainguardVersionsVersions {
}

export function dataChainguardVersionsVersionsToTerraform(struct?: DataChainguardVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataChainguardVersionsVersionsToHclTerraform(struct?: DataChainguardVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataChainguardVersionsVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataChainguardVersionsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataChainguardVersionsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eol_versions - computed: true, optional: false, required: false
  private _eolVersions = new DataChainguardVersionsVersionsEolVersionsList(this, "eol_versions", false);
  public get eolVersions() {
    return this._eolVersions;
  }

  // grace_period_months - computed: true, optional: false, required: false
  public get gracePeriodMonths() {
    return this.getNumberAttribute('grace_period_months');
  }

  // last_updated_timestamp - computed: true, optional: false, required: false
  public get lastUpdatedTimestamp() {
    return this.getStringAttribute('last_updated_timestamp');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataChainguardVersionsVersionsVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/data-sources/versions chainguard_versions}
*/
export class DataChainguardVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataChainguardVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataChainguardVersions to import
  * @param importFromId The id of the existing DataChainguardVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/data-sources/versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataChainguardVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/data-sources/versions chainguard_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataChainguardVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataChainguardVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_versions',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._package = config.package;
    this._variant = config.variant;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ordered_keys - computed: true, optional: false, required: false
  public get orderedKeys() {
    return this.getListAttribute('ordered_keys');
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }

  // version_map - computed: true, optional: false, required: false
  private _versionMap = new DataChainguardVersionsVersionMapMap(this, "version_map");
  public get versionMap() {
    return this._versionMap;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataChainguardVersionsVersionsOutputReference(this, "versions");
  public get versions() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      package: cdktf.stringToTerraform(this._package),
      variant: cdktf.stringToTerraform(this._variant),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variant: {
        value: cdktf.stringToHclTerraform(this._variant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
