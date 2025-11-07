// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GtmResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#aggregation_type GtmResource#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#constrained_property GtmResource#constrained_property}
  */
  readonly constrainedProperty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#decay_rate GtmResource#decay_rate}
  */
  readonly decayRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#description GtmResource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#domain GtmResource#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#host_header GtmResource#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#id GtmResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#leader_string GtmResource#leader_string}
  */
  readonly leaderString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#least_squares_decay GtmResource#least_squares_decay}
  */
  readonly leastSquaresDecay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#load_imbalance_percentage GtmResource#load_imbalance_percentage}
  */
  readonly loadImbalancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#max_u_multiplicative_increment GtmResource#max_u_multiplicative_increment}
  */
  readonly maxUMultiplicativeIncrement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#name GtmResource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#type GtmResource#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#upper_bound GtmResource#upper_bound}
  */
  readonly upperBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#wait_on_complete GtmResource#wait_on_complete}
  */
  readonly waitOnComplete?: boolean | cdktf.IResolvable;
  /**
  * resource_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#resource_instance GtmResource#resource_instance}
  */
  readonly resourceInstance?: GtmResourceResourceInstance[] | cdktf.IResolvable;
}
export interface GtmResourceResourceInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#datacenter_id GtmResource#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#load_object GtmResource#load_object}
  */
  readonly loadObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#load_object_port GtmResource#load_object_port}
  */
  readonly loadObjectPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#load_servers GtmResource#load_servers}
  */
  readonly loadServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#use_default_load_object GtmResource#use_default_load_object}
  */
  readonly useDefaultLoadObject?: boolean | cdktf.IResolvable;
}

export function gtmResourceResourceInstanceToTerraform(struct?: GtmResourceResourceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter_id: cdktf.numberToTerraform(struct!.datacenterId),
    load_object: cdktf.stringToTerraform(struct!.loadObject),
    load_object_port: cdktf.numberToTerraform(struct!.loadObjectPort),
    load_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loadServers),
    use_default_load_object: cdktf.booleanToTerraform(struct!.useDefaultLoadObject),
  }
}


export function gtmResourceResourceInstanceToHclTerraform(struct?: GtmResourceResourceInstance | cdktf.IResolvable): any {
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
    load_object: {
      value: cdktf.stringToHclTerraform(struct!.loadObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_object_port: {
      value: cdktf.numberToHclTerraform(struct!.loadObjectPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loadServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    use_default_load_object: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultLoadObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GtmResourceResourceInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GtmResourceResourceInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterId = this._datacenterId;
    }
    if (this._loadObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadObject = this._loadObject;
    }
    if (this._loadObjectPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadObjectPort = this._loadObjectPort;
    }
    if (this._loadServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadServers = this._loadServers;
    }
    if (this._useDefaultLoadObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultLoadObject = this._useDefaultLoadObject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GtmResourceResourceInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenterId = undefined;
      this._loadObject = undefined;
      this._loadObjectPort = undefined;
      this._loadServers = undefined;
      this._useDefaultLoadObject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenterId = value.datacenterId;
      this._loadObject = value.loadObject;
      this._loadObjectPort = value.loadObjectPort;
      this._loadServers = value.loadServers;
      this._useDefaultLoadObject = value.useDefaultLoadObject;
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

  // load_object - computed: false, optional: true, required: false
  private _loadObject?: string; 
  public get loadObject() {
    return this.getStringAttribute('load_object');
  }
  public set loadObject(value: string) {
    this._loadObject = value;
  }
  public resetLoadObject() {
    this._loadObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadObjectInput() {
    return this._loadObject;
  }

  // load_object_port - computed: false, optional: true, required: false
  private _loadObjectPort?: number; 
  public get loadObjectPort() {
    return this.getNumberAttribute('load_object_port');
  }
  public set loadObjectPort(value: number) {
    this._loadObjectPort = value;
  }
  public resetLoadObjectPort() {
    this._loadObjectPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadObjectPortInput() {
    return this._loadObjectPort;
  }

  // load_servers - computed: false, optional: true, required: false
  private _loadServers?: string[]; 
  public get loadServers() {
    return cdktf.Fn.tolist(this.getListAttribute('load_servers'));
  }
  public set loadServers(value: string[]) {
    this._loadServers = value;
  }
  public resetLoadServers() {
    this._loadServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadServersInput() {
    return this._loadServers;
  }

  // use_default_load_object - computed: false, optional: true, required: false
  private _useDefaultLoadObject?: boolean | cdktf.IResolvable; 
  public get useDefaultLoadObject() {
    return this.getBooleanAttribute('use_default_load_object');
  }
  public set useDefaultLoadObject(value: boolean | cdktf.IResolvable) {
    this._useDefaultLoadObject = value;
  }
  public resetUseDefaultLoadObject() {
    this._useDefaultLoadObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultLoadObjectInput() {
    return this._useDefaultLoadObject;
  }
}

export class GtmResourceResourceInstanceList extends cdktf.ComplexList {
  public internalValue? : GtmResourceResourceInstance[] | cdktf.IResolvable

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
  public get(index: number): GtmResourceResourceInstanceOutputReference {
    return new GtmResourceResourceInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource akamai_gtm_resource}
*/
export class GtmResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GtmResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GtmResource to import
  * @param importFromId The id of the existing GtmResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GtmResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_resource akamai_gtm_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GtmResourceConfig
  */
  public constructor(scope: Construct, id: string, config: GtmResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_resource',
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
    this._aggregationType = config.aggregationType;
    this._constrainedProperty = config.constrainedProperty;
    this._decayRate = config.decayRate;
    this._description = config.description;
    this._domain = config.domain;
    this._hostHeader = config.hostHeader;
    this._id = config.id;
    this._leaderString = config.leaderString;
    this._leastSquaresDecay = config.leastSquaresDecay;
    this._loadImbalancePercentage = config.loadImbalancePercentage;
    this._maxUMultiplicativeIncrement = config.maxUMultiplicativeIncrement;
    this._name = config.name;
    this._type = config.type;
    this._upperBound = config.upperBound;
    this._waitOnComplete = config.waitOnComplete;
    this._resourceInstance.internalValue = config.resourceInstance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_type - computed: false, optional: false, required: true
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // constrained_property - computed: false, optional: true, required: false
  private _constrainedProperty?: string; 
  public get constrainedProperty() {
    return this.getStringAttribute('constrained_property');
  }
  public set constrainedProperty(value: string) {
    this._constrainedProperty = value;
  }
  public resetConstrainedProperty() {
    this._constrainedProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constrainedPropertyInput() {
    return this._constrainedProperty;
  }

  // decay_rate - computed: false, optional: true, required: false
  private _decayRate?: number; 
  public get decayRate() {
    return this.getNumberAttribute('decay_rate');
  }
  public set decayRate(value: number) {
    this._decayRate = value;
  }
  public resetDecayRate() {
    this._decayRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decayRateInput() {
    return this._decayRate;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
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

  // leader_string - computed: false, optional: true, required: false
  private _leaderString?: string; 
  public get leaderString() {
    return this.getStringAttribute('leader_string');
  }
  public set leaderString(value: string) {
    this._leaderString = value;
  }
  public resetLeaderString() {
    this._leaderString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderStringInput() {
    return this._leaderString;
  }

  // least_squares_decay - computed: false, optional: true, required: false
  private _leastSquaresDecay?: number; 
  public get leastSquaresDecay() {
    return this.getNumberAttribute('least_squares_decay');
  }
  public set leastSquaresDecay(value: number) {
    this._leastSquaresDecay = value;
  }
  public resetLeastSquaresDecay() {
    this._leastSquaresDecay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leastSquaresDecayInput() {
    return this._leastSquaresDecay;
  }

  // load_imbalance_percentage - computed: false, optional: true, required: false
  private _loadImbalancePercentage?: number; 
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }
  public set loadImbalancePercentage(value: number) {
    this._loadImbalancePercentage = value;
  }
  public resetLoadImbalancePercentage() {
    this._loadImbalancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadImbalancePercentageInput() {
    return this._loadImbalancePercentage;
  }

  // max_u_multiplicative_increment - computed: false, optional: true, required: false
  private _maxUMultiplicativeIncrement?: number; 
  public get maxUMultiplicativeIncrement() {
    return this.getNumberAttribute('max_u_multiplicative_increment');
  }
  public set maxUMultiplicativeIncrement(value: number) {
    this._maxUMultiplicativeIncrement = value;
  }
  public resetMaxUMultiplicativeIncrement() {
    this._maxUMultiplicativeIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUMultiplicativeIncrementInput() {
    return this._maxUMultiplicativeIncrement;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // upper_bound - computed: false, optional: true, required: false
  private _upperBound?: number; 
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }
  public set upperBound(value: number) {
    this._upperBound = value;
  }
  public resetUpperBound() {
    this._upperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound;
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

  // resource_instance - computed: false, optional: true, required: false
  private _resourceInstance = new GtmResourceResourceInstanceList(this, "resource_instance", false);
  public get resourceInstance() {
    return this._resourceInstance;
  }
  public putResourceInstance(value: GtmResourceResourceInstance[] | cdktf.IResolvable) {
    this._resourceInstance.internalValue = value;
  }
  public resetResourceInstance() {
    this._resourceInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInstanceInput() {
    return this._resourceInstance.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_type: cdktf.stringToTerraform(this._aggregationType),
      constrained_property: cdktf.stringToTerraform(this._constrainedProperty),
      decay_rate: cdktf.numberToTerraform(this._decayRate),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      host_header: cdktf.stringToTerraform(this._hostHeader),
      id: cdktf.stringToTerraform(this._id),
      leader_string: cdktf.stringToTerraform(this._leaderString),
      least_squares_decay: cdktf.numberToTerraform(this._leastSquaresDecay),
      load_imbalance_percentage: cdktf.numberToTerraform(this._loadImbalancePercentage),
      max_u_multiplicative_increment: cdktf.numberToTerraform(this._maxUMultiplicativeIncrement),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      upper_bound: cdktf.numberToTerraform(this._upperBound),
      wait_on_complete: cdktf.booleanToTerraform(this._waitOnComplete),
      resource_instance: cdktf.listMapper(gtmResourceResourceInstanceToTerraform, true)(this._resourceInstance.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_type: {
        value: cdktf.stringToHclTerraform(this._aggregationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constrained_property: {
        value: cdktf.stringToHclTerraform(this._constrainedProperty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decay_rate: {
        value: cdktf.numberToHclTerraform(this._decayRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_header: {
        value: cdktf.stringToHclTerraform(this._hostHeader),
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
      leader_string: {
        value: cdktf.stringToHclTerraform(this._leaderString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      least_squares_decay: {
        value: cdktf.numberToHclTerraform(this._leastSquaresDecay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_imbalance_percentage: {
        value: cdktf.numberToHclTerraform(this._loadImbalancePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_u_multiplicative_increment: {
        value: cdktf.numberToHclTerraform(this._maxUMultiplicativeIncrement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      upper_bound: {
        value: cdktf.numberToHclTerraform(this._upperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wait_on_complete: {
        value: cdktf.booleanToHclTerraform(this._waitOnComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_instance: {
        value: cdktf.listMapperHcl(gtmResourceResourceInstanceToHclTerraform, true)(this._resourceInstance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GtmResourceResourceInstanceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
