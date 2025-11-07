// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiGtmResourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * GTM domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources#domain DataAkamaiGtmResources#domain}
  */
  readonly domain: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources#resources DataAkamaiGtmResources#resources}
  */
  readonly resources?: DataAkamaiGtmResourcesResources[] | cdktf.IResolvable;
}
export interface DataAkamaiGtmResourcesResourcesLinks {
}

export function dataAkamaiGtmResourcesResourcesLinksToTerraform(struct?: DataAkamaiGtmResourcesResourcesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmResourcesResourcesLinksToHclTerraform(struct?: DataAkamaiGtmResourcesResourcesLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmResourcesResourcesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmResourcesResourcesLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmResourcesResourcesLinks | cdktf.IResolvable | undefined) {
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

export class DataAkamaiGtmResourcesResourcesLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmResourcesResourcesLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmResourcesResourcesLinksOutputReference {
    return new DataAkamaiGtmResourcesResourcesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmResourcesResourcesResourceInstances {
}

export function dataAkamaiGtmResourcesResourcesResourceInstancesToTerraform(struct?: DataAkamaiGtmResourcesResourcesResourceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmResourcesResourcesResourceInstancesToHclTerraform(struct?: DataAkamaiGtmResourcesResourcesResourceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmResourcesResourcesResourceInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmResourcesResourcesResourceInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmResourcesResourcesResourceInstances | cdktf.IResolvable | undefined) {
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

  // use_default_load_object - computed: true, optional: false, required: false
  public get useDefaultLoadObject() {
    return this.getBooleanAttribute('use_default_load_object');
  }
}

export class DataAkamaiGtmResourcesResourcesResourceInstancesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmResourcesResourcesResourceInstances[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmResourcesResourcesResourceInstancesOutputReference {
    return new DataAkamaiGtmResourcesResourcesResourceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmResourcesResources {
  /**
  * A descriptive label for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources#name DataAkamaiGtmResources#name}
  */
  readonly name: string;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources#links DataAkamaiGtmResources#links}
  */
  readonly links?: DataAkamaiGtmResourcesResourcesLinks[] | cdktf.IResolvable;
  /**
  * resource_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources#resource_instances DataAkamaiGtmResources#resource_instances}
  */
  readonly resourceInstances?: DataAkamaiGtmResourcesResourcesResourceInstances[] | cdktf.IResolvable;
}

export function dataAkamaiGtmResourcesResourcesToTerraform(struct?: DataAkamaiGtmResourcesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    links: cdktf.listMapper(dataAkamaiGtmResourcesResourcesLinksToTerraform, true)(struct!.links),
    resource_instances: cdktf.listMapper(dataAkamaiGtmResourcesResourcesResourceInstancesToTerraform, true)(struct!.resourceInstances),
  }
}


export function dataAkamaiGtmResourcesResourcesToHclTerraform(struct?: DataAkamaiGtmResourcesResources | cdktf.IResolvable): any {
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
    links: {
      value: cdktf.listMapperHcl(dataAkamaiGtmResourcesResourcesLinksToHclTerraform, true)(struct!.links),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmResourcesResourcesLinksList",
    },
    resource_instances: {
      value: cdktf.listMapperHcl(dataAkamaiGtmResourcesResourcesResourceInstancesToHclTerraform, true)(struct!.resourceInstances),
      isBlock: true,
      type: "set",
      storageClassType: "DataAkamaiGtmResourcesResourcesResourceInstancesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiGtmResourcesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmResourcesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._links?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.links = this._links?.internalValue;
    }
    if (this._resourceInstances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceInstances = this._resourceInstances?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmResourcesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._links.internalValue = undefined;
      this._resourceInstances.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._links.internalValue = value.links;
      this._resourceInstances.internalValue = value.resourceInstances;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // constrained_property - computed: true, optional: false, required: false
  public get constrainedProperty() {
    return this.getStringAttribute('constrained_property');
  }

  // decay_rate - computed: true, optional: false, required: false
  public get decayRate() {
    return this.getNumberAttribute('decay_rate');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // leader_string - computed: true, optional: false, required: false
  public get leaderString() {
    return this.getStringAttribute('leader_string');
  }

  // least_squares_decay - computed: true, optional: false, required: false
  public get leastSquaresDecay() {
    return this.getNumberAttribute('least_squares_decay');
  }

  // load_imbalance_percentage - computed: true, optional: false, required: false
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }

  // max_u_multiplicative_increment - computed: true, optional: false, required: false
  public get maxUMultiplicativeIncrement() {
    return this.getNumberAttribute('max_u_multiplicative_increment');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }

  // links - computed: false, optional: true, required: false
  private _links = new DataAkamaiGtmResourcesResourcesLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmResourcesResourcesLinks[] | cdktf.IResolvable) {
    this._links.internalValue = value;
  }
  public resetLinks() {
    this._links.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links.internalValue;
  }

  // resource_instances - computed: false, optional: true, required: false
  private _resourceInstances = new DataAkamaiGtmResourcesResourcesResourceInstancesList(this, "resource_instances", true);
  public get resourceInstances() {
    return this._resourceInstances;
  }
  public putResourceInstances(value: DataAkamaiGtmResourcesResourcesResourceInstances[] | cdktf.IResolvable) {
    this._resourceInstances.internalValue = value;
  }
  public resetResourceInstances() {
    this._resourceInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInstancesInput() {
    return this._resourceInstances.internalValue;
  }
}

export class DataAkamaiGtmResourcesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmResourcesResources[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmResourcesResourcesOutputReference {
    return new DataAkamaiGtmResourcesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources akamai_gtm_resources}
*/
export class DataAkamaiGtmResources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiGtmResources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiGtmResources to import
  * @param importFromId The id of the existing DataAkamaiGtmResources that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiGtmResources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resources akamai_gtm_resources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiGtmResourcesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiGtmResourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_resources',
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
    this._resources.internalValue = config.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataAkamaiGtmResourcesResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataAkamaiGtmResourcesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      resources: cdktf.listMapper(dataAkamaiGtmResourcesResourcesToTerraform, true)(this._resources.internalValue),
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
      resources: {
        value: cdktf.listMapperHcl(dataAkamaiGtmResourcesResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmResourcesResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
