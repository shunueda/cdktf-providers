// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdTaskSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AD attribute that defines an IP address or DNS name for a server. This is used by the Gateway to connect to discovered servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#access_address_attribute AdTaskSettings#access_address_attribute}
  */
  readonly accessAddressAttribute?: string;
  /**
  * The AD attribute that defines alternative hostnames or DNS entries. These are used to resolve discovered servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#alt_names_attributes AdTaskSettings#alt_names_attributes}
  */
  readonly altNamesAttributes?: string[];
  /**
  * The AD attribute that defines the bastion host for a server. Clients use this bastion to tunnel traffic to discovered servers..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#bastion_attribute AdTaskSettings#bastion_attribute}
  */
  readonly bastionAttribute?: string;
  /**
  * The UUID of an associated AD connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#connection_id AdTaskSettings#connection_id}
  */
  readonly connectionId: string;
  /**
  * Indicates how often the server sync job runs. Possible values: `1`, `6`, `12`, `24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#frequency AdTaskSettings#frequency}
  */
  readonly frequency: number;
  /**
  * The AD attribute that defines the hostname for a server. This is used to identify discovered servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#host_name_attribute AdTaskSettings#host_name_attribute}
  */
  readonly hostNameAttribute: string;
  /**
  * If `true`, the AD server sync job is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#is_active AdTaskSettings#is_active}
  */
  readonly isActive: boolean | cdktf.IResolvable;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#name AdTaskSettings#name}
  */
  readonly name: string;
  /**
  * The AD attribute that defines the operating system of discovered servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#os_attribute AdTaskSettings#os_attribute}
  */
  readonly osAttribute: string;
  /**
  * If `true`, performs a test run for the server sync job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#run_test AdTaskSettings#run_test}
  */
  readonly runTest?: boolean | cdktf.IResolvable;
  /**
  * A UTC timestamp that indicates the hour range when the server sync job runs. Only used if `frequency` is set to 24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#start_hour_utc AdTaskSettings#start_hour_utc}
  */
  readonly startHourUtc?: number;
  /**
  * additional_attribute_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#additional_attribute_mapping AdTaskSettings#additional_attribute_mapping}
  */
  readonly additionalAttributeMapping?: AdTaskSettingsAdditionalAttributeMapping[] | cdktf.IResolvable;
  /**
  * rule_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#rule_assignments AdTaskSettings#rule_assignments}
  */
  readonly ruleAssignments: AdTaskSettingsRuleAssignments[] | cdktf.IResolvable;
}
export interface AdTaskSettingsAdditionalAttributeMapping {
  /**
  * If `true`, the AD attribute is identified as a Globally Unique Identifier (GUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#is_guid AdTaskSettings#is_guid}
  */
  readonly isGuid?: boolean | cdktf.IResolvable;
  /**
  * An existing ASA label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#label AdTaskSettings#label}
  */
  readonly label: string;
  /**
  * The AD attribute to map to the specified ASA label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#value AdTaskSettings#value}
  */
  readonly value: string;
}

export function adTaskSettingsAdditionalAttributeMappingToTerraform(struct?: AdTaskSettingsAdditionalAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_guid: cdktf.booleanToTerraform(struct!.isGuid),
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function adTaskSettingsAdditionalAttributeMappingToHclTerraform(struct?: AdTaskSettingsAdditionalAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_guid: {
      value: cdktf.booleanToHclTerraform(struct!.isGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdTaskSettingsAdditionalAttributeMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdTaskSettingsAdditionalAttributeMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGuid = this._isGuid;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdTaskSettingsAdditionalAttributeMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isGuid = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isGuid = value.isGuid;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // is_guid - computed: false, optional: true, required: false
  private _isGuid?: boolean | cdktf.IResolvable; 
  public get isGuid() {
    return this.getBooleanAttribute('is_guid');
  }
  public set isGuid(value: boolean | cdktf.IResolvable) {
    this._isGuid = value;
  }
  public resetIsGuid() {
    this._isGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGuidInput() {
    return this._isGuid;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AdTaskSettingsAdditionalAttributeMappingList extends cdktf.ComplexList {
  public internalValue? : AdTaskSettingsAdditionalAttributeMapping[] | cdktf.IResolvable

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
  public get(index: number): AdTaskSettingsAdditionalAttributeMappingOutputReference {
    return new AdTaskSettingsAdditionalAttributeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdTaskSettingsRuleAssignments {
  /**
  * The domain to search for servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#base_dn AdTaskSettings#base_dn}
  */
  readonly baseDn: string;
  /**
  * The criteria used to filter discovered servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#ldap_query_filter AdTaskSettings#ldap_query_filter}
  */
  readonly ldapQueryFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#priority AdTaskSettings#priority}
  */
  readonly priority: number;
  /**
  * The UUID for an existing Project. Discovered servers that match the rules are assigned to this Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#project_id AdTaskSettings#project_id}
  */
  readonly projectId: string;
}

export function adTaskSettingsRuleAssignmentsToTerraform(struct?: AdTaskSettingsRuleAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    ldap_query_filter: cdktf.stringToTerraform(struct!.ldapQueryFilter),
    priority: cdktf.numberToTerraform(struct!.priority),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function adTaskSettingsRuleAssignmentsToHclTerraform(struct?: AdTaskSettingsRuleAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_query_filter: {
      value: cdktf.stringToHclTerraform(struct!.ldapQueryFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdTaskSettingsRuleAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdTaskSettingsRuleAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._ldapQueryFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapQueryFilter = this._ldapQueryFilter;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdTaskSettingsRuleAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._ldapQueryFilter = undefined;
      this._priority = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._ldapQueryFilter = value.ldapQueryFilter;
      this._priority = value.priority;
      this._projectId = value.projectId;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ldap_query_filter - computed: false, optional: false, required: true
  private _ldapQueryFilter?: string; 
  public get ldapQueryFilter() {
    return this.getStringAttribute('ldap_query_filter');
  }
  public set ldapQueryFilter(value: string) {
    this._ldapQueryFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapQueryFilterInput() {
    return this._ldapQueryFilter;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

export class AdTaskSettingsRuleAssignmentsList extends cdktf.ComplexList {
  public internalValue? : AdTaskSettingsRuleAssignments[] | cdktf.IResolvable

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
  public get(index: number): AdTaskSettingsRuleAssignmentsOutputReference {
    return new AdTaskSettingsRuleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings oktapam_ad_task_settings}
*/
export class AdTaskSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_ad_task_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdTaskSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdTaskSettings to import
  * @param importFromId The id of the existing AdTaskSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdTaskSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_ad_task_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/ad_task_settings oktapam_ad_task_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdTaskSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AdTaskSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_ad_task_settings',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessAddressAttribute = config.accessAddressAttribute;
    this._altNamesAttributes = config.altNamesAttributes;
    this._bastionAttribute = config.bastionAttribute;
    this._connectionId = config.connectionId;
    this._frequency = config.frequency;
    this._hostNameAttribute = config.hostNameAttribute;
    this._isActive = config.isActive;
    this._name = config.name;
    this._osAttribute = config.osAttribute;
    this._runTest = config.runTest;
    this._startHourUtc = config.startHourUtc;
    this._additionalAttributeMapping.internalValue = config.additionalAttributeMapping;
    this._ruleAssignments.internalValue = config.ruleAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_address_attribute - computed: false, optional: true, required: false
  private _accessAddressAttribute?: string; 
  public get accessAddressAttribute() {
    return this.getStringAttribute('access_address_attribute');
  }
  public set accessAddressAttribute(value: string) {
    this._accessAddressAttribute = value;
  }
  public resetAccessAddressAttribute() {
    this._accessAddressAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAddressAttributeInput() {
    return this._accessAddressAttribute;
  }

  // alt_names_attributes - computed: false, optional: true, required: false
  private _altNamesAttributes?: string[]; 
  public get altNamesAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('alt_names_attributes'));
  }
  public set altNamesAttributes(value: string[]) {
    this._altNamesAttributes = value;
  }
  public resetAltNamesAttributes() {
    this._altNamesAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesAttributesInput() {
    return this._altNamesAttributes;
  }

  // bastion_attribute - computed: false, optional: true, required: false
  private _bastionAttribute?: string; 
  public get bastionAttribute() {
    return this.getStringAttribute('bastion_attribute');
  }
  public set bastionAttribute(value: string) {
    this._bastionAttribute = value;
  }
  public resetBastionAttribute() {
    this._bastionAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionAttributeInput() {
    return this._bastionAttribute;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // host_name_attribute - computed: false, optional: false, required: true
  private _hostNameAttribute?: string; 
  public get hostNameAttribute() {
    return this.getStringAttribute('host_name_attribute');
  }
  public set hostNameAttribute(value: string) {
    this._hostNameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameAttributeInput() {
    return this._hostNameAttribute;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: false, optional: false, required: true
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // os_attribute - computed: false, optional: false, required: true
  private _osAttribute?: string; 
  public get osAttribute() {
    return this.getStringAttribute('os_attribute');
  }
  public set osAttribute(value: string) {
    this._osAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osAttributeInput() {
    return this._osAttribute;
  }

  // run_test - computed: false, optional: true, required: false
  private _runTest?: boolean | cdktf.IResolvable; 
  public get runTest() {
    return this.getBooleanAttribute('run_test');
  }
  public set runTest(value: boolean | cdktf.IResolvable) {
    this._runTest = value;
  }
  public resetRunTest() {
    this._runTest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTestInput() {
    return this._runTest;
  }

  // start_hour_utc - computed: false, optional: true, required: false
  private _startHourUtc?: number; 
  public get startHourUtc() {
    return this.getNumberAttribute('start_hour_utc');
  }
  public set startHourUtc(value: number) {
    this._startHourUtc = value;
  }
  public resetStartHourUtc() {
    this._startHourUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourUtcInput() {
    return this._startHourUtc;
  }

  // additional_attribute_mapping - computed: false, optional: true, required: false
  private _additionalAttributeMapping = new AdTaskSettingsAdditionalAttributeMappingList(this, "additional_attribute_mapping", true);
  public get additionalAttributeMapping() {
    return this._additionalAttributeMapping;
  }
  public putAdditionalAttributeMapping(value: AdTaskSettingsAdditionalAttributeMapping[] | cdktf.IResolvable) {
    this._additionalAttributeMapping.internalValue = value;
  }
  public resetAdditionalAttributeMapping() {
    this._additionalAttributeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributeMappingInput() {
    return this._additionalAttributeMapping.internalValue;
  }

  // rule_assignments - computed: false, optional: false, required: true
  private _ruleAssignments = new AdTaskSettingsRuleAssignmentsList(this, "rule_assignments", true);
  public get ruleAssignments() {
    return this._ruleAssignments;
  }
  public putRuleAssignments(value: AdTaskSettingsRuleAssignments[] | cdktf.IResolvable) {
    this._ruleAssignments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleAssignmentsInput() {
    return this._ruleAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_address_attribute: cdktf.stringToTerraform(this._accessAddressAttribute),
      alt_names_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNamesAttributes),
      bastion_attribute: cdktf.stringToTerraform(this._bastionAttribute),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      frequency: cdktf.numberToTerraform(this._frequency),
      host_name_attribute: cdktf.stringToTerraform(this._hostNameAttribute),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      os_attribute: cdktf.stringToTerraform(this._osAttribute),
      run_test: cdktf.booleanToTerraform(this._runTest),
      start_hour_utc: cdktf.numberToTerraform(this._startHourUtc),
      additional_attribute_mapping: cdktf.listMapper(adTaskSettingsAdditionalAttributeMappingToTerraform, true)(this._additionalAttributeMapping.internalValue),
      rule_assignments: cdktf.listMapper(adTaskSettingsRuleAssignmentsToTerraform, true)(this._ruleAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_address_attribute: {
        value: cdktf.stringToHclTerraform(this._accessAddressAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_names_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._altNamesAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bastion_attribute: {
        value: cdktf.stringToHclTerraform(this._bastionAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_name_attribute: {
        value: cdktf.stringToHclTerraform(this._hostNameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_attribute: {
        value: cdktf.stringToHclTerraform(this._osAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_test: {
        value: cdktf.booleanToHclTerraform(this._runTest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_hour_utc: {
        value: cdktf.numberToHclTerraform(this._startHourUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_attribute_mapping: {
        value: cdktf.listMapperHcl(adTaskSettingsAdditionalAttributeMappingToHclTerraform, true)(this._additionalAttributeMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AdTaskSettingsAdditionalAttributeMappingList",
      },
      rule_assignments: {
        value: cdktf.listMapperHcl(adTaskSettingsRuleAssignmentsToHclTerraform, true)(this._ruleAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AdTaskSettingsRuleAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
