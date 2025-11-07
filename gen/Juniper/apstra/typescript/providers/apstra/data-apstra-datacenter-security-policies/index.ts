// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterSecurityPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#blueprint_id DataApstraDatacenterSecurityPolicies#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * List of filters used to select only desired node IDs. For a node to match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned node IDs represent the nodes matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#filters DataApstraDatacenterSecurityPolicies#filters}
  */
  readonly filters?: DataApstraDatacenterSecurityPoliciesFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPorts {
}

export function dataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsToTerraform(struct?: DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsToHclTerraform(struct?: DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsOutputReference {
    return new DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePorts {
}

export function dataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsToTerraform(struct?: DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsToHclTerraform(struct?: DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from_port - computed: true, optional: false, required: false
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }

  // to_port - computed: true, optional: false, required: false
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
}

export class DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsOutputReference {
    return new DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraDatacenterSecurityPoliciesFiltersRules {
}

export function dataApstraDatacenterSecurityPoliciesFiltersRulesToTerraform(struct?: DataApstraDatacenterSecurityPoliciesFiltersRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterSecurityPoliciesFiltersRulesToHclTerraform(struct?: DataApstraDatacenterSecurityPoliciesFiltersRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterSecurityPoliciesFiltersRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterSecurityPoliciesFiltersRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterSecurityPoliciesFiltersRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_ports - computed: true, optional: false, required: false
  private _destinationPorts = new DataApstraDatacenterSecurityPoliciesFiltersRulesDestinationPortsList(this, "destination_ports", true);
  public get destinationPorts() {
    return this._destinationPorts;
  }

  // established - computed: true, optional: false, required: false
  public get established() {
    return this.getBooleanAttribute('established');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_ports - computed: true, optional: false, required: false
  private _sourcePorts = new DataApstraDatacenterSecurityPoliciesFiltersRulesSourcePortsList(this, "source_ports", true);
  public get sourcePorts() {
    return this._sourcePorts;
  }
}

export class DataApstraDatacenterSecurityPoliciesFiltersRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraDatacenterSecurityPoliciesFiltersRulesOutputReference {
    return new DataApstraDatacenterSecurityPoliciesFiltersRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraDatacenterSecurityPoliciesFilters {
  /**
  * Security Policy description, as seen in the Web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#description DataApstraDatacenterSecurityPolicies#description}
  */
  readonly description?: string;
  /**
  * Graph node ID of the destination Application Point (Virtual Network ID, Routing Zone ID, etc...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#destination_application_point_id DataApstraDatacenterSecurityPolicies#destination_application_point_id}
  */
  readonly destinationApplicationPointId?: string;
  /**
  * Indicates whether the Security Policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#enabled DataApstraDatacenterSecurityPolicies#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Security Policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#name DataApstraDatacenterSecurityPolicies#name}
  */
  readonly name?: string;
  /**
  * Graph node ID of the source Application Point (Virtual Network ID, Routing Zone ID, etc...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#source_application_point_id DataApstraDatacenterSecurityPolicies#source_application_point_id}
  */
  readonly sourceApplicationPointId?: string;
  /**
  * Set of Tags. All tags supplied here are used to match the Security Policy, but a matching Security Policy may have additional tags not enumerated in this set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#tags DataApstraDatacenterSecurityPolicies#tags}
  */
  readonly tags?: string[];
}

export function dataApstraDatacenterSecurityPoliciesFiltersToTerraform(struct?: DataApstraDatacenterSecurityPoliciesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_application_point_id: cdktf.stringToTerraform(struct!.destinationApplicationPointId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    source_application_point_id: cdktf.stringToTerraform(struct!.sourceApplicationPointId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataApstraDatacenterSecurityPoliciesFiltersToHclTerraform(struct?: DataApstraDatacenterSecurityPoliciesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_application_point_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationApplicationPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_application_point_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceApplicationPointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterSecurityPoliciesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterSecurityPoliciesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationApplicationPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationApplicationPointId = this._destinationApplicationPointId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceApplicationPointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceApplicationPointId = this._sourceApplicationPointId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterSecurityPoliciesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destinationApplicationPointId = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._sourceApplicationPointId = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destinationApplicationPointId = value.destinationApplicationPointId;
      this._enabled = value.enabled;
      this._name = value.name;
      this._sourceApplicationPointId = value.sourceApplicationPointId;
      this._tags = value.tags;
    }
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
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

  // destination_application_point_id - computed: false, optional: true, required: false
  private _destinationApplicationPointId?: string; 
  public get destinationApplicationPointId() {
    return this.getStringAttribute('destination_application_point_id');
  }
  public set destinationApplicationPointId(value: string) {
    this._destinationApplicationPointId = value;
  }
  public resetDestinationApplicationPointId() {
    this._destinationApplicationPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationApplicationPointIdInput() {
    return this._destinationApplicationPointId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataApstraDatacenterSecurityPoliciesFiltersRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // source_application_point_id - computed: false, optional: true, required: false
  private _sourceApplicationPointId?: string; 
  public get sourceApplicationPointId() {
    return this.getStringAttribute('source_application_point_id');
  }
  public set sourceApplicationPointId(value: string) {
    this._sourceApplicationPointId = value;
  }
  public resetSourceApplicationPointId() {
    this._sourceApplicationPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApplicationPointIdInput() {
    return this._sourceApplicationPointId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataApstraDatacenterSecurityPoliciesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterSecurityPoliciesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterSecurityPoliciesFiltersOutputReference {
    return new DataApstraDatacenterSecurityPoliciesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies apstra_datacenter_security_policies}
*/
export class DataApstraDatacenterSecurityPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_security_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterSecurityPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterSecurityPolicies to import
  * @param importFromId The id of the existing DataApstraDatacenterSecurityPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterSecurityPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_security_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_security_policies apstra_datacenter_security_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterSecurityPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterSecurityPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_security_policies',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraDatacenterSecurityPoliciesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterSecurityPoliciesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // graph_queries - computed: true, optional: false, required: false
  public get graphQueries() {
    return this.getListAttribute('graph_queries');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      filters: cdktf.listMapper(dataApstraDatacenterSecurityPoliciesFiltersToTerraform, false)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterSecurityPoliciesFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterSecurityPoliciesFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
