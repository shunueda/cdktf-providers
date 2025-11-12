// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicationAssurancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a connection criteria used to indicate which operations from clients matching this criteria use this policy. If both a connection criteria and a request criteria are specified for a policy, then both must match an operation for the policy to be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#connection_criteria ReplicationAssurancePolicy#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * Description of the Replication Assurance Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#description ReplicationAssurancePolicy#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this Replication Assurance Policy is enabled for use in the server. If a Replication Assurance Policy is disabled, then no new operations will be associated with it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#enabled ReplicationAssurancePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When multiple Replication Assurance Policies are defined, this property determines the evaluation order for finding a Replication Assurance Policy match against an operation. Policies are evaluated based on this index from least to greatest. Values of this property must be unique but not necessarily contiguous.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#evaluation_order_index ReplicationAssurancePolicy#evaluation_order_index}
  */
  readonly evaluationOrderIndex: number;
  /**
  * Specifies the assurance level used to replicate to local servers. A local server is defined as one with the same value for the location setting in the global configuration.  The local-level must be set to an assurance level at least as strict as the remote-level. In other words, if remote-level is set to "received-any-remote-location" or "received-all-remote-locations", then local-level must be either "received-any-server" or "processed-all-servers". If remote-level is "processed-all-remote-servers", then local-level must be "processed-all-servers".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#local_level ReplicationAssurancePolicy#local_level}
  */
  readonly localLevel?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#name ReplicationAssurancePolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the assurance level used to replicate to remote servers. A remote server is defined as one with a different value for the location setting in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#remote_level ReplicationAssurancePolicy#remote_level}
  */
  readonly remoteLevel?: string;
  /**
  * Specifies a request criteria used to indicate which operations from clients matching this criteria use this policy. If both a connection criteria and a request criteria are specified for a policy, then both must match an operation for the policy to be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#request_criteria ReplicationAssurancePolicy#request_criteria}
  */
  readonly requestCriteria?: string;
  /**
  * Specifies the maximum length of time to wait for the replication assurance requirements to be met before timing out and replying to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#timeout ReplicationAssurancePolicy#timeout}
  */
  readonly timeout: string;
  /**
  * The type of Replication Assurance Policy resource. Options are ['replication-assurance-policy']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#type ReplicationAssurancePolicy#type}
  */
  readonly type?: string;
}
export interface ReplicationAssurancePolicyRequiredActions {
}

export function replicationAssurancePolicyRequiredActionsToTerraform(struct?: ReplicationAssurancePolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function replicationAssurancePolicyRequiredActionsToHclTerraform(struct?: ReplicationAssurancePolicyRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReplicationAssurancePolicyRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReplicationAssurancePolicyRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReplicationAssurancePolicyRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ReplicationAssurancePolicyRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): ReplicationAssurancePolicyRequiredActionsOutputReference {
    return new ReplicationAssurancePolicyRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy pingdirectory_replication_assurance_policy}
*/
export class ReplicationAssurancePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_replication_assurance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReplicationAssurancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReplicationAssurancePolicy to import
  * @param importFromId The id of the existing ReplicationAssurancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReplicationAssurancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_replication_assurance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/replication_assurance_policy pingdirectory_replication_assurance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicationAssurancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicationAssurancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_replication_assurance_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionCriteria = config.connectionCriteria;
    this._description = config.description;
    this._enabled = config.enabled;
    this._evaluationOrderIndex = config.evaluationOrderIndex;
    this._localLevel = config.localLevel;
    this._name = config.name;
    this._remoteLevel = config.remoteLevel;
    this._requestCriteria = config.requestCriteria;
    this._timeout = config.timeout;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_criteria - computed: false, optional: true, required: false
  private _connectionCriteria?: string; 
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }
  public set connectionCriteria(value: string) {
    this._connectionCriteria = value;
  }
  public resetConnectionCriteria() {
    this._connectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCriteriaInput() {
    return this._connectionCriteria;
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

  // enabled - computed: true, optional: true, required: false
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

  // evaluation_order_index - computed: false, optional: false, required: true
  private _evaluationOrderIndex?: number; 
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
  }
  public set evaluationOrderIndex(value: number) {
    this._evaluationOrderIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationOrderIndexInput() {
    return this._evaluationOrderIndex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_level - computed: true, optional: true, required: false
  private _localLevel?: string; 
  public get localLevel() {
    return this.getStringAttribute('local_level');
  }
  public set localLevel(value: string) {
    this._localLevel = value;
  }
  public resetLocalLevel() {
    this._localLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLevelInput() {
    return this._localLevel;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // remote_level - computed: true, optional: true, required: false
  private _remoteLevel?: string; 
  public get remoteLevel() {
    return this.getStringAttribute('remote_level');
  }
  public set remoteLevel(value: string) {
    this._remoteLevel = value;
  }
  public resetRemoteLevel() {
    this._remoteLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLevelInput() {
    return this._remoteLevel;
  }

  // request_criteria - computed: false, optional: true, required: false
  private _requestCriteria?: string; 
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }
  public set requestCriteria(value: string) {
    this._requestCriteria = value;
  }
  public resetRequestCriteria() {
    this._requestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCriteriaInput() {
    return this._requestCriteria;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new ReplicationAssurancePolicyRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation_order_index: cdktf.numberToTerraform(this._evaluationOrderIndex),
      local_level: cdktf.stringToTerraform(this._localLevel),
      name: cdktf.stringToTerraform(this._name),
      remote_level: cdktf.stringToTerraform(this._remoteLevel),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
      timeout: cdktf.stringToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_criteria: {
        value: cdktf.stringToHclTerraform(this._connectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      evaluation_order_index: {
        value: cdktf.numberToHclTerraform(this._evaluationOrderIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_level: {
        value: cdktf.stringToHclTerraform(this._localLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_level: {
        value: cdktf.stringToHclTerraform(this._remoteLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_criteria: {
        value: cdktf.stringToHclTerraform(this._requestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
