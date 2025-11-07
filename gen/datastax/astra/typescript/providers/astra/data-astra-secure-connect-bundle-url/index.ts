// https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstraSecureConnectBundleUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Astra database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url#database_id DataAstraSecureConnectBundleUrl#database_id}
  */
  readonly databaseId: string;
  /**
  * The ID of the Astra datacenter. If omitted, all bundles will be fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url#datacenter_id DataAstraSecureConnectBundleUrl#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url#id DataAstraSecureConnectBundleUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundles {
}

export function dataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesToTerraform(struct?: DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesToHclTerraform(struct?: DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_fqdn - computed: true, optional: false, required: false
  public get apiFqdn() {
    return this.getStringAttribute('api_fqdn');
  }

  // cql_fqdn - computed: true, optional: false, required: false
  public get cqlFqdn() {
    return this.getStringAttribute('cql_fqdn');
  }

  // dashboard_fqdn - computed: true, optional: false, required: false
  public get dashboardFqdn() {
    return this.getStringAttribute('dashboard_fqdn');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesOutputReference {
    return new DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstraSecureConnectBundleUrlSecureBundles {
}

export function dataAstraSecureConnectBundleUrlSecureBundlesToTerraform(struct?: DataAstraSecureConnectBundleUrlSecureBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstraSecureConnectBundleUrlSecureBundlesToHclTerraform(struct?: DataAstraSecureConnectBundleUrlSecureBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstraSecureConnectBundleUrlSecureBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstraSecureConnectBundleUrlSecureBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstraSecureConnectBundleUrlSecureBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_domain_bundles - computed: true, optional: false, required: false
  private _customDomainBundles = new DataAstraSecureConnectBundleUrlSecureBundlesCustomDomainBundlesList(this, "custom_domain_bundles", false);
  public get customDomainBundles() {
    return this._customDomainBundles;
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }

  // internal_migration_proxy_url - computed: true, optional: false, required: false
  public get internalMigrationProxyUrl() {
    return this.getStringAttribute('internal_migration_proxy_url');
  }

  // internal_url - computed: true, optional: false, required: false
  public get internalUrl() {
    return this.getStringAttribute('internal_url');
  }

  // migration_proxy_url - computed: true, optional: false, required: false
  public get migrationProxyUrl() {
    return this.getStringAttribute('migration_proxy_url');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAstraSecureConnectBundleUrlSecureBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstraSecureConnectBundleUrlSecureBundlesOutputReference {
    return new DataAstraSecureConnectBundleUrlSecureBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url astra_secure_connect_bundle_url}
*/
export class DataAstraSecureConnectBundleUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_secure_connect_bundle_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstraSecureConnectBundleUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstraSecureConnectBundleUrl to import
  * @param importFromId The id of the existing DataAstraSecureConnectBundleUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstraSecureConnectBundleUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_secure_connect_bundle_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.3.18/docs/data-sources/secure_connect_bundle_url astra_secure_connect_bundle_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstraSecureConnectBundleUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataAstraSecureConnectBundleUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_secure_connect_bundle_url',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.3.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._datacenterId = config.datacenterId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // datacenter_id - computed: false, optional: true, required: false
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // secure_bundles - computed: true, optional: false, required: false
  private _secureBundles = new DataAstraSecureConnectBundleUrlSecureBundlesList(this, "secure_bundles", false);
  public get secureBundles() {
    return this._secureBundles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
