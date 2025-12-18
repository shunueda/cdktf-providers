// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMarketplacePublicationPackagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#id DataOciMarketplacePublicationPackages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#package_type DataOciMarketplacePublicationPackages#package_type}
  */
  readonly packageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#package_version DataOciMarketplacePublicationPackages#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#publication_id DataOciMarketplacePublicationPackages#publication_id}
  */
  readonly publicationId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#filter DataOciMarketplacePublicationPackages#filter}
  */
  readonly filter?: DataOciMarketplacePublicationPackagesFilter[] | cdktf.IResolvable;
}
export interface DataOciMarketplacePublicationPackagesPublicationPackages {
}

export function dataOciMarketplacePublicationPackagesPublicationPackagesToTerraform(struct?: DataOciMarketplacePublicationPackagesPublicationPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMarketplacePublicationPackagesPublicationPackagesToHclTerraform(struct?: DataOciMarketplacePublicationPackagesPublicationPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMarketplacePublicationPackagesPublicationPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMarketplacePublicationPackagesPublicationPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMarketplacePublicationPackagesPublicationPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // listing_id - computed: true, optional: false, required: false
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciMarketplacePublicationPackagesPublicationPackagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMarketplacePublicationPackagesPublicationPackagesOutputReference {
    return new DataOciMarketplacePublicationPackagesPublicationPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMarketplacePublicationPackagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#name DataOciMarketplacePublicationPackages#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#regex DataOciMarketplacePublicationPackages#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#values DataOciMarketplacePublicationPackages#values}
  */
  readonly values: string[];
}

export function dataOciMarketplacePublicationPackagesFilterToTerraform(struct?: DataOciMarketplacePublicationPackagesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciMarketplacePublicationPackagesFilterToHclTerraform(struct?: DataOciMarketplacePublicationPackagesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciMarketplacePublicationPackagesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMarketplacePublicationPackagesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMarketplacePublicationPackagesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciMarketplacePublicationPackagesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciMarketplacePublicationPackagesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciMarketplacePublicationPackagesFilterOutputReference {
    return new DataOciMarketplacePublicationPackagesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages oci_marketplace_publication_packages}
*/
export class DataOciMarketplacePublicationPackages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_marketplace_publication_packages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMarketplacePublicationPackages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMarketplacePublicationPackages to import
  * @param importFromId The id of the existing DataOciMarketplacePublicationPackages that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMarketplacePublicationPackages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_marketplace_publication_packages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/marketplace_publication_packages oci_marketplace_publication_packages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMarketplacePublicationPackagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMarketplacePublicationPackagesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_publication_packages',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._packageType = config.packageType;
    this._packageVersion = config.packageVersion;
    this._publicationId = config.publicationId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_version - computed: false, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // publication_id - computed: false, optional: false, required: true
  private _publicationId?: string; 
  public get publicationId() {
    return this.getStringAttribute('publication_id');
  }
  public set publicationId(value: string) {
    this._publicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationIdInput() {
    return this._publicationId;
  }

  // publication_packages - computed: true, optional: false, required: false
  private _publicationPackages = new DataOciMarketplacePublicationPackagesPublicationPackagesList(this, "publication_packages", false);
  public get publicationPackages() {
    return this._publicationPackages;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciMarketplacePublicationPackagesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciMarketplacePublicationPackagesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      publication_id: cdktf.stringToTerraform(this._publicationId),
      filter: cdktf.listMapper(dataOciMarketplacePublicationPackagesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publication_id: {
        value: cdktf.stringToHclTerraform(this._publicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciMarketplacePublicationPackagesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciMarketplacePublicationPackagesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
