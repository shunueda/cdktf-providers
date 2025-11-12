// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiGtmResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * GTM domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource#domain DataAkamaiGtmResource#domain}
  */
  readonly domain: string;
  /**
  * A descriptive label for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource#resource_name DataAkamaiGtmResource#resource_name}
  */
  readonly resourceName: string;
  /**
  * links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource#links DataAkamaiGtmResource#links}
  */
  readonly links?: DataAkamaiGtmResourceLinks[] | cdktf.IResolvable;
  /**
  * resource_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource#resource_instances DataAkamaiGtmResource#resource_instances}
  */
  readonly resourceInstances?: DataAkamaiGtmResourceResourceInstances[] | cdktf.IResolvable;
}
export interface DataAkamaiGtmResourceLinks {
}

export function dataAkamaiGtmResourceLinksToTerraform(struct?: DataAkamaiGtmResourceLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmResourceLinksToHclTerraform(struct?: DataAkamaiGtmResourceLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmResourceLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmResourceLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmResourceLinks | cdktf.IResolvable | undefined) {
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

export class DataAkamaiGtmResourceLinksList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmResourceLinks[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmResourceLinksOutputReference {
    return new DataAkamaiGtmResourceLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiGtmResourceResourceInstances {
}

export function dataAkamaiGtmResourceResourceInstancesToTerraform(struct?: DataAkamaiGtmResourceResourceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiGtmResourceResourceInstancesToHclTerraform(struct?: DataAkamaiGtmResourceResourceInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiGtmResourceResourceInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiGtmResourceResourceInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiGtmResourceResourceInstances | cdktf.IResolvable | undefined) {
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

export class DataAkamaiGtmResourceResourceInstancesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiGtmResourceResourceInstances[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiGtmResourceResourceInstancesOutputReference {
    return new DataAkamaiGtmResourceResourceInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource akamai_gtm_resource}
*/
export class DataAkamaiGtmResource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiGtmResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiGtmResource to import
  * @param importFromId The id of the existing DataAkamaiGtmResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiGtmResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/gtm_resource akamai_gtm_resource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiGtmResourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiGtmResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_resource',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._resourceName = config.resourceName;
    this._links.internalValue = config.links;
    this._resourceInstances.internalValue = config.resourceInstances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host_header - computed: true, optional: false, required: false
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
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
  private _links = new DataAkamaiGtmResourceLinksList(this, "links", true);
  public get links() {
    return this._links;
  }
  public putLinks(value: DataAkamaiGtmResourceLinks[] | cdktf.IResolvable) {
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
  private _resourceInstances = new DataAkamaiGtmResourceResourceInstancesList(this, "resource_instances", true);
  public get resourceInstances() {
    return this._resourceInstances;
  }
  public putResourceInstances(value: DataAkamaiGtmResourceResourceInstances[] | cdktf.IResolvable) {
    this._resourceInstances.internalValue = value;
  }
  public resetResourceInstances() {
    this._resourceInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInstancesInput() {
    return this._resourceInstances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      links: cdktf.listMapper(dataAkamaiGtmResourceLinksToTerraform, true)(this._links.internalValue),
      resource_instances: cdktf.listMapper(dataAkamaiGtmResourceResourceInstancesToTerraform, true)(this._resourceInstances.internalValue),
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
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      links: {
        value: cdktf.listMapperHcl(dataAkamaiGtmResourceLinksToHclTerraform, true)(this._links.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmResourceLinksList",
      },
      resource_instances: {
        value: cdktf.listMapperHcl(dataAkamaiGtmResourceResourceInstancesToHclTerraform, true)(this._resourceInstances.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiGtmResourceResourceInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
