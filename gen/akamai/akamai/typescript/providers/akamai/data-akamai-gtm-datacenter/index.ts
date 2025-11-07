// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiGtmDatacenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for an existing data center in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter#datacenter_id DataAkamaiGtmDatacenter#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * GTM domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter#domain DataAkamaiGtmDatacenter#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter#id DataAkamaiGtmDatacenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAkamaiGtmDatacenterDefaultLoadObject {
}

export function dataAkamaiGtmDatacenterDefaultLoadObjectToTerraform(struct?: DataAkamaiGtmDatacenterDefaultLoadObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDatacenterDefaultLoadObjectToHclTerraform(struct?: DataAkamaiGtmDatacenterDefaultLoadObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDatacenterDefaultLoadObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDatacenterDefaultLoadObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDatacenterDefaultLoadObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return cdktf.Fn.tolist(this.getListAttribute('load_servers'));
  }
}

export class DataAkamaiGtmDatacenterDefaultLoadObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiGtmDatacenterDefaultLoadObjectOutputReference {
    return new DataAkamaiGtmDatacenterDefaultLoadObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmDatacenterLinks {
}

export function dataAkamaiGtmDatacenterLinksToTerraform(struct?: DataAkamaiGtmDatacenterLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmDatacenterLinksToHclTerraform(struct?: DataAkamaiGtmDatacenterLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmDatacenterLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmDatacenterLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmDatacenterLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataAkamaiGtmDatacenterLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiGtmDatacenterLinksOutputReference {
    return new DataAkamaiGtmDatacenterLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter akamai_gtm_datacenter}
*/
export class DataAkamaiGtmDatacenter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_datacenter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiGtmDatacenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiGtmDatacenter to import
  * @param importFromId The id of the existing DataAkamaiGtmDatacenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiGtmDatacenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_datacenter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_datacenter akamai_gtm_datacenter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiGtmDatacenterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiGtmDatacenterConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_datacenter',
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
    this._datacenterId = config.datacenterId;
    this._domain = config.domain;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_load_object - computed: true, optional: false, required: false
  private _defaultLoadObject = new DataAkamaiGtmDatacenterDefaultLoadObjectList(this, "default_load_object", false);
  public get defaultLoadObject() {
    return this._defaultLoadObject;
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

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataAkamaiGtmDatacenterLinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // servermonitor_pool - computed: true, optional: false, required: false
  public get servermonitorPool() {
    return this.getStringAttribute('servermonitor_pool');
  }

  // state_or_province - computed: true, optional: false, required: false
  public get stateOrProvince() {
    return this.getStringAttribute('state_or_province');
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter_id: cdktf.numberToTerraform(this._datacenterId),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter_id: {
        value: cdktf.numberToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
