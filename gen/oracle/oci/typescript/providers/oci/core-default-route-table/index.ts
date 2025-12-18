// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreDefaultRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#compartment_id CoreDefaultRouteTable#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#defined_tags CoreDefaultRouteTable#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#display_name CoreDefaultRouteTable#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#freeform_tags CoreDefaultRouteTable#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#id CoreDefaultRouteTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#manage_default_resource_id CoreDefaultRouteTable#manage_default_resource_id}
  */
  readonly manageDefaultResourceId: string;
  /**
  * route_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#route_rules CoreDefaultRouteTable#route_rules}
  */
  readonly routeRules?: CoreDefaultRouteTableRouteRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#timeouts CoreDefaultRouteTable#timeouts}
  */
  readonly timeouts?: CoreDefaultRouteTableTimeouts;
}
export interface CoreDefaultRouteTableRouteRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#cidr_block CoreDefaultRouteTable#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#description CoreDefaultRouteTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#destination CoreDefaultRouteTable#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#destination_type CoreDefaultRouteTable#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#network_entity_id CoreDefaultRouteTable#network_entity_id}
  */
  readonly networkEntityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#route_type CoreDefaultRouteTable#route_type}
  */
  readonly routeType?: string;
}

export function coreDefaultRouteTableRouteRulesToTerraform(struct?: CoreDefaultRouteTableRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    description: cdktf.stringToTerraform(struct!.description),
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    network_entity_id: cdktf.stringToTerraform(struct!.networkEntityId),
    route_type: cdktf.stringToTerraform(struct!.routeType),
  }
}


export function coreDefaultRouteTableRouteRulesToHclTerraform(struct?: CoreDefaultRouteTableRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.networkEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreDefaultRouteTableRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreDefaultRouteTableRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._networkEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkEntityId = this._networkEntityId;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDefaultRouteTableRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._description = undefined;
      this._destination = undefined;
      this._destinationType = undefined;
      this._networkEntityId = undefined;
      this._routeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._description = value.description;
      this._destination = value.destination;
      this._destinationType = value.destinationType;
      this._networkEntityId = value.networkEntityId;
      this._routeType = value.routeType;
    }
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // description - computed: true, optional: true, required: false
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

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // network_entity_id - computed: false, optional: false, required: true
  private _networkEntityId?: string; 
  public get networkEntityId() {
    return this.getStringAttribute('network_entity_id');
  }
  public set networkEntityId(value: string) {
    this._networkEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkEntityIdInput() {
    return this._networkEntityId;
  }

  // route_type - computed: true, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }
}

export class CoreDefaultRouteTableRouteRulesList extends cdktf.ComplexList {
  public internalValue? : CoreDefaultRouteTableRouteRules[] | cdktf.IResolvable

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
  public get(index: number): CoreDefaultRouteTableRouteRulesOutputReference {
    return new CoreDefaultRouteTableRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreDefaultRouteTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#create CoreDefaultRouteTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#delete CoreDefaultRouteTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#update CoreDefaultRouteTable#update}
  */
  readonly update?: string;
}

export function coreDefaultRouteTableTimeoutsToTerraform(struct?: CoreDefaultRouteTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreDefaultRouteTableTimeoutsToHclTerraform(struct?: CoreDefaultRouteTableTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreDefaultRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreDefaultRouteTableTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDefaultRouteTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table oci_core_default_route_table}
*/
export class CoreDefaultRouteTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_default_route_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreDefaultRouteTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreDefaultRouteTable to import
  * @param importFromId The id of the existing CoreDefaultRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreDefaultRouteTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_default_route_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_default_route_table oci_core_default_route_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreDefaultRouteTableConfig
  */
  public constructor(scope: Construct, id: string, config: CoreDefaultRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_default_route_table',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._manageDefaultResourceId = config.manageDefaultResourceId;
    this._routeRules.internalValue = config.routeRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // manage_default_resource_id - computed: false, optional: false, required: true
  private _manageDefaultResourceId?: string; 
  public get manageDefaultResourceId() {
    return this.getStringAttribute('manage_default_resource_id');
  }
  public set manageDefaultResourceId(value: string) {
    this._manageDefaultResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manageDefaultResourceIdInput() {
    return this._manageDefaultResourceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // route_rules - computed: false, optional: true, required: false
  private _routeRules = new CoreDefaultRouteTableRouteRulesList(this, "route_rules", true);
  public get routeRules() {
    return this._routeRules;
  }
  public putRouteRules(value: CoreDefaultRouteTableRouteRules[] | cdktf.IResolvable) {
    this._routeRules.internalValue = value;
  }
  public resetRouteRules() {
    this._routeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRulesInput() {
    return this._routeRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreDefaultRouteTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreDefaultRouteTableTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      manage_default_resource_id: cdktf.stringToTerraform(this._manageDefaultResourceId),
      route_rules: cdktf.listMapper(coreDefaultRouteTableRouteRulesToTerraform, true)(this._routeRules.internalValue),
      timeouts: coreDefaultRouteTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_default_resource_id: {
        value: cdktf.stringToHclTerraform(this._manageDefaultResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_rules: {
        value: cdktf.listMapperHcl(coreDefaultRouteTableRouteRulesToHclTerraform, true)(this._routeRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CoreDefaultRouteTableRouteRulesList",
      },
      timeouts: {
        value: coreDefaultRouteTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreDefaultRouteTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
