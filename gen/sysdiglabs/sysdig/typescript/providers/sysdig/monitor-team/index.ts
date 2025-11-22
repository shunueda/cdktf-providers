// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#can_see_infrastructure_events MonitorTeam#can_see_infrastructure_events}
  */
  readonly canSeeInfrastructureEvents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#can_use_agent_cli MonitorTeam#can_use_agent_cli}
  */
  readonly canUseAgentCli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#can_use_aws_data MonitorTeam#can_use_aws_data}
  */
  readonly canUseAwsData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#can_use_sysdig_capture MonitorTeam#can_use_sysdig_capture}
  */
  readonly canUseSysdigCapture?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#default_team MonitorTeam#default_team}
  */
  readonly defaultTeam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#description MonitorTeam#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#enable_ibm_platform_metrics MonitorTeam#enable_ibm_platform_metrics}
  */
  readonly enableIbmPlatformMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#filter MonitorTeam#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#ibm_platform_metrics MonitorTeam#ibm_platform_metrics}
  */
  readonly ibmPlatformMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#id MonitorTeam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#name MonitorTeam#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#prometheus_remote_write_metrics_filter MonitorTeam#prometheus_remote_write_metrics_filter}
  */
  readonly prometheusRemoteWriteMetricsFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#scope_by MonitorTeam#scope_by}
  */
  readonly scopeBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#theme MonitorTeam#theme}
  */
  readonly theme?: string;
  /**
  * entrypoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#entrypoint MonitorTeam#entrypoint}
  */
  readonly entrypoint: MonitorTeamEntrypoint[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#timeouts MonitorTeam#timeouts}
  */
  readonly timeouts?: MonitorTeamTimeouts;
  /**
  * user_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#user_roles MonitorTeam#user_roles}
  */
  readonly userRoles?: MonitorTeamUserRoles[] | cdktf.IResolvable;
}
export interface MonitorTeamEntrypoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#selection MonitorTeam#selection}
  */
  readonly selection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#type MonitorTeam#type}
  */
  readonly type: string;
}

export function monitorTeamEntrypointToTerraform(struct?: MonitorTeamEntrypoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selection: cdktf.stringToTerraform(struct!.selection),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function monitorTeamEntrypointToHclTerraform(struct?: MonitorTeamEntrypoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selection: {
      value: cdktf.stringToHclTerraform(struct!.selection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTeamEntrypointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTeamEntrypoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTeamEntrypoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selection = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selection = value.selection;
      this._type = value.type;
    }
  }

  // selection - computed: false, optional: true, required: false
  private _selection?: string; 
  public get selection() {
    return this.getStringAttribute('selection');
  }
  public set selection(value: string) {
    this._selection = value;
  }
  public resetSelection() {
    this._selection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
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
}

export class MonitorTeamEntrypointList extends cdktf.ComplexList {
  public internalValue? : MonitorTeamEntrypoint[] | cdktf.IResolvable

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
  public get(index: number): MonitorTeamEntrypointOutputReference {
    return new MonitorTeamEntrypointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTeamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#create MonitorTeam#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#delete MonitorTeam#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#read MonitorTeam#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#update MonitorTeam#update}
  */
  readonly update?: string;
}

export function monitorTeamTimeoutsToTerraform(struct?: MonitorTeamTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function monitorTeamTimeoutsToHclTerraform(struct?: MonitorTeamTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MonitorTeamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorTeamTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTeamTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface MonitorTeamUserRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#email MonitorTeam#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#role MonitorTeam#role}
  */
  readonly role?: string;
}

export function monitorTeamUserRolesToTerraform(struct?: MonitorTeamUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function monitorTeamUserRolesToHclTerraform(struct?: MonitorTeamUserRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTeamUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTeamUserRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTeamUserRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._role = value.role;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class MonitorTeamUserRolesList extends cdktf.ComplexList {
  public internalValue? : MonitorTeamUserRoles[] | cdktf.IResolvable

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
  public get(index: number): MonitorTeamUserRolesOutputReference {
    return new MonitorTeamUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team sysdig_monitor_team}
*/
export class MonitorTeam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_monitor_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTeam to import
  * @param importFromId The id of the existing MonitorTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_monitor_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/monitor_team sysdig_monitor_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTeamConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTeamConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_monitor_team',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canSeeInfrastructureEvents = config.canSeeInfrastructureEvents;
    this._canUseAgentCli = config.canUseAgentCli;
    this._canUseAwsData = config.canUseAwsData;
    this._canUseSysdigCapture = config.canUseSysdigCapture;
    this._defaultTeam = config.defaultTeam;
    this._description = config.description;
    this._enableIbmPlatformMetrics = config.enableIbmPlatformMetrics;
    this._filter = config.filter;
    this._ibmPlatformMetrics = config.ibmPlatformMetrics;
    this._id = config.id;
    this._name = config.name;
    this._prometheusRemoteWriteMetricsFilter = config.prometheusRemoteWriteMetricsFilter;
    this._scopeBy = config.scopeBy;
    this._theme = config.theme;
    this._entrypoint.internalValue = config.entrypoint;
    this._timeouts.internalValue = config.timeouts;
    this._userRoles.internalValue = config.userRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_see_infrastructure_events - computed: false, optional: true, required: false
  private _canSeeInfrastructureEvents?: boolean | cdktf.IResolvable; 
  public get canSeeInfrastructureEvents() {
    return this.getBooleanAttribute('can_see_infrastructure_events');
  }
  public set canSeeInfrastructureEvents(value: boolean | cdktf.IResolvable) {
    this._canSeeInfrastructureEvents = value;
  }
  public resetCanSeeInfrastructureEvents() {
    this._canSeeInfrastructureEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canSeeInfrastructureEventsInput() {
    return this._canSeeInfrastructureEvents;
  }

  // can_use_agent_cli - computed: false, optional: true, required: false
  private _canUseAgentCli?: boolean | cdktf.IResolvable; 
  public get canUseAgentCli() {
    return this.getBooleanAttribute('can_use_agent_cli');
  }
  public set canUseAgentCli(value: boolean | cdktf.IResolvable) {
    this._canUseAgentCli = value;
  }
  public resetCanUseAgentCli() {
    this._canUseAgentCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseAgentCliInput() {
    return this._canUseAgentCli;
  }

  // can_use_aws_data - computed: false, optional: true, required: false
  private _canUseAwsData?: boolean | cdktf.IResolvable; 
  public get canUseAwsData() {
    return this.getBooleanAttribute('can_use_aws_data');
  }
  public set canUseAwsData(value: boolean | cdktf.IResolvable) {
    this._canUseAwsData = value;
  }
  public resetCanUseAwsData() {
    this._canUseAwsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseAwsDataInput() {
    return this._canUseAwsData;
  }

  // can_use_sysdig_capture - computed: false, optional: true, required: false
  private _canUseSysdigCapture?: boolean | cdktf.IResolvable; 
  public get canUseSysdigCapture() {
    return this.getBooleanAttribute('can_use_sysdig_capture');
  }
  public set canUseSysdigCapture(value: boolean | cdktf.IResolvable) {
    this._canUseSysdigCapture = value;
  }
  public resetCanUseSysdigCapture() {
    this._canUseSysdigCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseSysdigCaptureInput() {
    return this._canUseSysdigCapture;
  }

  // default_team - computed: false, optional: true, required: false
  private _defaultTeam?: boolean | cdktf.IResolvable; 
  public get defaultTeam() {
    return this.getBooleanAttribute('default_team');
  }
  public set defaultTeam(value: boolean | cdktf.IResolvable) {
    this._defaultTeam = value;
  }
  public resetDefaultTeam() {
    this._defaultTeam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTeamInput() {
    return this._defaultTeam;
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

  // enable_ibm_platform_metrics - computed: false, optional: true, required: false
  private _enableIbmPlatformMetrics?: boolean | cdktf.IResolvable; 
  public get enableIbmPlatformMetrics() {
    return this.getBooleanAttribute('enable_ibm_platform_metrics');
  }
  public set enableIbmPlatformMetrics(value: boolean | cdktf.IResolvable) {
    this._enableIbmPlatformMetrics = value;
  }
  public resetEnableIbmPlatformMetrics() {
    this._enableIbmPlatformMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIbmPlatformMetricsInput() {
    return this._enableIbmPlatformMetrics;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // ibm_platform_metrics - computed: false, optional: true, required: false
  private _ibmPlatformMetrics?: string; 
  public get ibmPlatformMetrics() {
    return this.getStringAttribute('ibm_platform_metrics');
  }
  public set ibmPlatformMetrics(value: string) {
    this._ibmPlatformMetrics = value;
  }
  public resetIbmPlatformMetrics() {
    this._ibmPlatformMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmPlatformMetricsInput() {
    return this._ibmPlatformMetrics;
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

  // prometheus_remote_write_metrics_filter - computed: false, optional: true, required: false
  private _prometheusRemoteWriteMetricsFilter?: string; 
  public get prometheusRemoteWriteMetricsFilter() {
    return this.getStringAttribute('prometheus_remote_write_metrics_filter');
  }
  public set prometheusRemoteWriteMetricsFilter(value: string) {
    this._prometheusRemoteWriteMetricsFilter = value;
  }
  public resetPrometheusRemoteWriteMetricsFilter() {
    this._prometheusRemoteWriteMetricsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusRemoteWriteMetricsFilterInput() {
    return this._prometheusRemoteWriteMetricsFilter;
  }

  // scope_by - computed: false, optional: true, required: false
  private _scopeBy?: string; 
  public get scopeBy() {
    return this.getStringAttribute('scope_by');
  }
  public set scopeBy(value: string) {
    this._scopeBy = value;
  }
  public resetScopeBy() {
    this._scopeBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeByInput() {
    return this._scopeBy;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint = new MonitorTeamEntrypointList(this, "entrypoint", false);
  public get entrypoint() {
    return this._entrypoint;
  }
  public putEntrypoint(value: MonitorTeamEntrypoint[] | cdktf.IResolvable) {
    this._entrypoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorTeamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorTeamTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_roles - computed: false, optional: true, required: false
  private _userRoles = new MonitorTeamUserRolesList(this, "user_roles", true);
  public get userRoles() {
    return this._userRoles;
  }
  public putUserRoles(value: MonitorTeamUserRoles[] | cdktf.IResolvable) {
    this._userRoles.internalValue = value;
  }
  public resetUserRoles() {
    this._userRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRolesInput() {
    return this._userRoles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_see_infrastructure_events: cdktf.booleanToTerraform(this._canSeeInfrastructureEvents),
      can_use_agent_cli: cdktf.booleanToTerraform(this._canUseAgentCli),
      can_use_aws_data: cdktf.booleanToTerraform(this._canUseAwsData),
      can_use_sysdig_capture: cdktf.booleanToTerraform(this._canUseSysdigCapture),
      default_team: cdktf.booleanToTerraform(this._defaultTeam),
      description: cdktf.stringToTerraform(this._description),
      enable_ibm_platform_metrics: cdktf.booleanToTerraform(this._enableIbmPlatformMetrics),
      filter: cdktf.stringToTerraform(this._filter),
      ibm_platform_metrics: cdktf.stringToTerraform(this._ibmPlatformMetrics),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prometheus_remote_write_metrics_filter: cdktf.stringToTerraform(this._prometheusRemoteWriteMetricsFilter),
      scope_by: cdktf.stringToTerraform(this._scopeBy),
      theme: cdktf.stringToTerraform(this._theme),
      entrypoint: cdktf.listMapper(monitorTeamEntrypointToTerraform, true)(this._entrypoint.internalValue),
      timeouts: monitorTeamTimeoutsToTerraform(this._timeouts.internalValue),
      user_roles: cdktf.listMapper(monitorTeamUserRolesToTerraform, true)(this._userRoles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_see_infrastructure_events: {
        value: cdktf.booleanToHclTerraform(this._canSeeInfrastructureEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_agent_cli: {
        value: cdktf.booleanToHclTerraform(this._canUseAgentCli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_aws_data: {
        value: cdktf.booleanToHclTerraform(this._canUseAwsData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_sysdig_capture: {
        value: cdktf.booleanToHclTerraform(this._canUseSysdigCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_team: {
        value: cdktf.booleanToHclTerraform(this._defaultTeam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ibm_platform_metrics: {
        value: cdktf.booleanToHclTerraform(this._enableIbmPlatformMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_platform_metrics: {
        value: cdktf.stringToHclTerraform(this._ibmPlatformMetrics),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prometheus_remote_write_metrics_filter: {
        value: cdktf.stringToHclTerraform(this._prometheusRemoteWriteMetricsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_by: {
        value: cdktf.stringToHclTerraform(this._scopeBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrypoint: {
        value: cdktf.listMapperHcl(monitorTeamEntrypointToHclTerraform, true)(this._entrypoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTeamEntrypointList",
      },
      timeouts: {
        value: monitorTeamTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorTeamTimeouts",
      },
      user_roles: {
        value: cdktf.listMapperHcl(monitorTeamUserRolesToHclTerraform, true)(this._userRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorTeamUserRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
