// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudDdoscooDomainResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources#id DataAlicloudDdoscooDomainResources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources#ids DataAlicloudDdoscooDomainResources#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources#instance_ids DataAlicloudDdoscooDomainResources#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources#output_file DataAlicloudDdoscooDomainResources#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources#query_domain_pattern DataAlicloudDdoscooDomainResources#query_domain_pattern}
  */
  readonly queryDomainPattern?: string;
}
export interface DataAlicloudDdoscooDomainResourcesResourcesProxyTypes {
}

export function dataAlicloudDdoscooDomainResourcesResourcesProxyTypesToTerraform(struct?: DataAlicloudDdoscooDomainResourcesResourcesProxyTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDdoscooDomainResourcesResourcesProxyTypesToHclTerraform(struct?: DataAlicloudDdoscooDomainResourcesResourcesProxyTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDdoscooDomainResourcesResourcesProxyTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDdoscooDomainResourcesResourcesProxyTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDdoscooDomainResourcesResourcesProxyTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // proxy_ports - computed: true, optional: false, required: false
  public get proxyPorts() {
    return this.getNumberListAttribute('proxy_ports');
  }

  // proxy_type - computed: true, optional: false, required: false
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
}

export class DataAlicloudDdoscooDomainResourcesResourcesProxyTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDdoscooDomainResourcesResourcesProxyTypesOutputReference {
    return new DataAlicloudDdoscooDomainResourcesResourcesProxyTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudDdoscooDomainResourcesResources {
}

export function dataAlicloudDdoscooDomainResourcesResourcesToTerraform(struct?: DataAlicloudDdoscooDomainResourcesResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudDdoscooDomainResourcesResourcesToHclTerraform(struct?: DataAlicloudDdoscooDomainResourcesResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudDdoscooDomainResourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudDdoscooDomainResourcesResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudDdoscooDomainResourcesResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // black_list - computed: true, optional: false, required: false
  public get blackList() {
    return this.getListAttribute('black_list');
  }

  // cc_enabled - computed: true, optional: false, required: false
  public get ccEnabled() {
    return this.getBooleanAttribute('cc_enabled');
  }

  // cc_rule_enabled - computed: true, optional: false, required: false
  public get ccRuleEnabled() {
    return this.getBooleanAttribute('cc_rule_enabled');
  }

  // cc_template - computed: true, optional: false, required: false
  public get ccTemplate() {
    return this.getStringAttribute('cc_template');
  }

  // cert_name - computed: true, optional: false, required: false
  public get certName() {
    return this.getStringAttribute('cert_name');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // http2_enable - computed: true, optional: false, required: false
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable');
  }

  // https_ext - computed: true, optional: false, required: false
  public get httpsExt() {
    return this.getStringAttribute('https_ext');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // policy_mode - computed: true, optional: false, required: false
  public get policyMode() {
    return this.getStringAttribute('policy_mode');
  }

  // proxy_enabled - computed: true, optional: false, required: false
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled');
  }

  // proxy_types - computed: true, optional: false, required: false
  private _proxyTypes = new DataAlicloudDdoscooDomainResourcesResourcesProxyTypesList(this, "proxy_types", false);
  public get proxyTypes() {
    return this._proxyTypes;
  }

  // real_servers - computed: true, optional: false, required: false
  public get realServers() {
    return this.getListAttribute('real_servers');
  }

  // rs_type - computed: true, optional: false, required: false
  public get rsType() {
    return this.getNumberAttribute('rs_type');
  }

  // ssl_ciphers - computed: true, optional: false, required: false
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }

  // ssl_protocols - computed: true, optional: false, required: false
  public get sslProtocols() {
    return this.getStringAttribute('ssl_protocols');
  }

  // white_list - computed: true, optional: false, required: false
  public get whiteList() {
    return this.getListAttribute('white_list');
  }
}

export class DataAlicloudDdoscooDomainResourcesResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudDdoscooDomainResourcesResourcesOutputReference {
    return new DataAlicloudDdoscooDomainResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources alicloud_ddoscoo_domain_resources}
*/
export class DataAlicloudDdoscooDomainResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ddoscoo_domain_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudDdoscooDomainResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudDdoscooDomainResources to import
  * @param importFromId The id of the existing DataAlicloudDdoscooDomainResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudDdoscooDomainResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ddoscoo_domain_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ddoscoo_domain_resources alicloud_ddoscoo_domain_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudDdoscooDomainResourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudDdoscooDomainResourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ddoscoo_domain_resources',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._ids = config.ids;
    this._instanceIds = config.instanceIds;
    this._outputFile = config.outputFile;
    this._queryDomainPattern = config.queryDomainPattern;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // query_domain_pattern - computed: false, optional: true, required: false
  private _queryDomainPattern?: string; 
  public get queryDomainPattern() {
    return this.getStringAttribute('query_domain_pattern');
  }
  public set queryDomainPattern(value: string) {
    this._queryDomainPattern = value;
  }
  public resetQueryDomainPattern() {
    this._queryDomainPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDomainPatternInput() {
    return this._queryDomainPattern;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAlicloudDdoscooDomainResourcesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      output_file: cdktf.stringToTerraform(this._outputFile),
      query_domain_pattern: cdktf.stringToTerraform(this._queryDomainPattern),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_domain_pattern: {
        value: cdktf.stringToHclTerraform(this._queryDomainPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
