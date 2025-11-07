// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MlbPolicyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#algorithm MlbPolicyV1#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#backup_target_group_id MlbPolicyV1#backup_target_group_id}
  */
  readonly backupTargetGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#certificate_id MlbPolicyV1#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#default_target_group_id MlbPolicyV1#default_target_group_id}
  */
  readonly defaultTargetGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#description MlbPolicyV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#health_monitor_id MlbPolicyV1#health_monitor_id}
  */
  readonly healthMonitorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#id MlbPolicyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#idle_timeout MlbPolicyV1#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#listener_id MlbPolicyV1#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#load_balancer_id MlbPolicyV1#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#name MlbPolicyV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#persistence MlbPolicyV1#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#persistence_timeout MlbPolicyV1#persistence_timeout}
  */
  readonly persistenceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#sorry_page_url MlbPolicyV1#sorry_page_url}
  */
  readonly sorryPageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#source_nat MlbPolicyV1#source_nat}
  */
  readonly sourceNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#tags MlbPolicyV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#tenant_id MlbPolicyV1#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#tls_policy_id MlbPolicyV1#tls_policy_id}
  */
  readonly tlsPolicyId?: string;
  /**
  * server_name_indications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#server_name_indications MlbPolicyV1#server_name_indications}
  */
  readonly serverNameIndications?: MlbPolicyV1ServerNameIndications[] | cdktf.IResolvable;
}
export interface MlbPolicyV1ServerNameIndications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#certificate_id MlbPolicyV1#certificate_id}
  */
  readonly certificateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#input_type MlbPolicyV1#input_type}
  */
  readonly inputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#priority MlbPolicyV1#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#server_name MlbPolicyV1#server_name}
  */
  readonly serverName: string;
}

export function mlbPolicyV1ServerNameIndicationsToTerraform(struct?: MlbPolicyV1ServerNameIndications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    input_type: cdktf.stringToTerraform(struct!.inputType),
    priority: cdktf.numberToTerraform(struct!.priority),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function mlbPolicyV1ServerNameIndicationsToHclTerraform(struct?: MlbPolicyV1ServerNameIndications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_type: {
      value: cdktf.stringToHclTerraform(struct!.inputType),
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
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MlbPolicyV1ServerNameIndicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MlbPolicyV1ServerNameIndications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._inputType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputType = this._inputType;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MlbPolicyV1ServerNameIndications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
      this._inputType = undefined;
      this._priority = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
      this._inputType = value.inputType;
      this._priority = value.priority;
      this._serverName = value.serverName;
    }
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // input_type - computed: false, optional: true, required: false
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  public resetInputType() {
    this._inputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class MlbPolicyV1ServerNameIndicationsList extends cdktf.ComplexList {
  public internalValue? : MlbPolicyV1ServerNameIndications[] | cdktf.IResolvable

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
  public get(index: number): MlbPolicyV1ServerNameIndicationsOutputReference {
    return new MlbPolicyV1ServerNameIndicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1 ecl_mlb_policy_v1}
*/
export class MlbPolicyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_policy_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MlbPolicyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MlbPolicyV1 to import
  * @param importFromId The id of the existing MlbPolicyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MlbPolicyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_policy_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/mlb_policy_v1 ecl_mlb_policy_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MlbPolicyV1Config
  */
  public constructor(scope: Construct, id: string, config: MlbPolicyV1Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_policy_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._backupTargetGroupId = config.backupTargetGroupId;
    this._certificateId = config.certificateId;
    this._defaultTargetGroupId = config.defaultTargetGroupId;
    this._description = config.description;
    this._healthMonitorId = config.healthMonitorId;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._listenerId = config.listenerId;
    this._loadBalancerId = config.loadBalancerId;
    this._name = config.name;
    this._persistence = config.persistence;
    this._persistenceTimeout = config.persistenceTimeout;
    this._sorryPageUrl = config.sorryPageUrl;
    this._sourceNat = config.sourceNat;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._tlsPolicyId = config.tlsPolicyId;
    this._serverNameIndications.internalValue = config.serverNameIndications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // backup_target_group_id - computed: false, optional: true, required: false
  private _backupTargetGroupId?: string; 
  public get backupTargetGroupId() {
    return this.getStringAttribute('backup_target_group_id');
  }
  public set backupTargetGroupId(value: string) {
    this._backupTargetGroupId = value;
  }
  public resetBackupTargetGroupId() {
    this._backupTargetGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTargetGroupIdInput() {
    return this._backupTargetGroupId;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // default_target_group_id - computed: false, optional: false, required: true
  private _defaultTargetGroupId?: string; 
  public get defaultTargetGroupId() {
    return this.getStringAttribute('default_target_group_id');
  }
  public set defaultTargetGroupId(value: string) {
    this._defaultTargetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetGroupIdInput() {
    return this._defaultTargetGroupId;
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

  // health_monitor_id - computed: false, optional: false, required: true
  private _healthMonitorId?: string; 
  public get healthMonitorId() {
    return this.getStringAttribute('health_monitor_id');
  }
  public set healthMonitorId(value: string) {
    this._healthMonitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorIdInput() {
    return this._healthMonitorId;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
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

  // persistence - computed: false, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // persistence_timeout - computed: false, optional: true, required: false
  private _persistenceTimeout?: number; 
  public get persistenceTimeout() {
    return this.getNumberAttribute('persistence_timeout');
  }
  public set persistenceTimeout(value: number) {
    this._persistenceTimeout = value;
  }
  public resetPersistenceTimeout() {
    this._persistenceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTimeoutInput() {
    return this._persistenceTimeout;
  }

  // sorry_page_url - computed: false, optional: true, required: false
  private _sorryPageUrl?: string; 
  public get sorryPageUrl() {
    return this.getStringAttribute('sorry_page_url');
  }
  public set sorryPageUrl(value: string) {
    this._sorryPageUrl = value;
  }
  public resetSorryPageUrl() {
    this._sorryPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorryPageUrlInput() {
    return this._sorryPageUrl;
  }

  // source_nat - computed: false, optional: true, required: false
  private _sourceNat?: string; 
  public get sourceNat() {
    return this.getStringAttribute('source_nat');
  }
  public set sourceNat(value: string) {
    this._sourceNat = value;
  }
  public resetSourceNat() {
    this._sourceNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tls_policy_id - computed: false, optional: true, required: false
  private _tlsPolicyId?: string; 
  public get tlsPolicyId() {
    return this.getStringAttribute('tls_policy_id');
  }
  public set tlsPolicyId(value: string) {
    this._tlsPolicyId = value;
  }
  public resetTlsPolicyId() {
    this._tlsPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsPolicyIdInput() {
    return this._tlsPolicyId;
  }

  // server_name_indications - computed: false, optional: true, required: false
  private _serverNameIndications = new MlbPolicyV1ServerNameIndicationsList(this, "server_name_indications", false);
  public get serverNameIndications() {
    return this._serverNameIndications;
  }
  public putServerNameIndications(value: MlbPolicyV1ServerNameIndications[] | cdktf.IResolvable) {
    this._serverNameIndications.internalValue = value;
  }
  public resetServerNameIndications() {
    this._serverNameIndications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameIndicationsInput() {
    return this._serverNameIndications.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      backup_target_group_id: cdktf.stringToTerraform(this._backupTargetGroupId),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      default_target_group_id: cdktf.stringToTerraform(this._defaultTargetGroupId),
      description: cdktf.stringToTerraform(this._description),
      health_monitor_id: cdktf.stringToTerraform(this._healthMonitorId),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      name: cdktf.stringToTerraform(this._name),
      persistence: cdktf.stringToTerraform(this._persistence),
      persistence_timeout: cdktf.numberToTerraform(this._persistenceTimeout),
      sorry_page_url: cdktf.stringToTerraform(this._sorryPageUrl),
      source_nat: cdktf.stringToTerraform(this._sourceNat),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      tls_policy_id: cdktf.stringToTerraform(this._tlsPolicyId),
      server_name_indications: cdktf.listMapper(mlbPolicyV1ServerNameIndicationsToTerraform, true)(this._serverNameIndications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_target_group_id: {
        value: cdktf.stringToHclTerraform(this._backupTargetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_target_group_id: {
        value: cdktf.stringToHclTerraform(this._defaultTargetGroupId),
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
      health_monitor_id: {
        value: cdktf.stringToHclTerraform(this._healthMonitorId),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
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
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_timeout: {
        value: cdktf.numberToHclTerraform(this._persistenceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sorry_page_url: {
        value: cdktf.stringToHclTerraform(this._sorryPageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_nat: {
        value: cdktf.stringToHclTerraform(this._sourceNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_policy_id: {
        value: cdktf.stringToHclTerraform(this._tlsPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name_indications: {
        value: cdktf.listMapperHcl(mlbPolicyV1ServerNameIndicationsToHclTerraform, true)(this._serverNameIndications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MlbPolicyV1ServerNameIndicationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
