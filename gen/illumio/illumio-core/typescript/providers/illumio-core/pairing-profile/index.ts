// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PairingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Agent software release associated with this paring profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#agent_software_release PairingProfile#agent_software_release}
  */
  readonly agentSoftwareRelease?: string;
  /**
  * The number of times pairing profile keys can be usedd. Allowed values are range(1-2147483647) and "unlimited". Default value: "unlimited"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#allowed_uses_per_key PairingProfile#allowed_uses_per_key}
  */
  readonly allowedUsesPerKey?: string;
  /**
  * Flag that controls whether app label can be overridden from pairing script. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#app_label_lock PairingProfile#app_label_lock}
  */
  readonly appLabelLock?: boolean | cdktf.IResolvable;
  /**
  * The long description of the pairing profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#description PairingProfile#description}
  */
  readonly description?: string;
  /**
  * The enabled flag of the pairing profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#enabled PairingProfile#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Flag that controls whether mode can be overridden from pairing script. Allowed values are "idle", "visibility_only", "full" and "selective". Default value: "visibility_only"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#enforcement_mode PairingProfile#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * Flag that controls whether enforcement mode can be overridden from pairing script, Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#enforcement_mode_lock PairingProfile#enforcement_mode_lock}
  */
  readonly enforcementModeLock?: boolean | cdktf.IResolvable;
  /**
  * Flag that controls whether env label can be overridden from pairing script. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#env_label_lock PairingProfile#env_label_lock}
  */
  readonly envLabelLock?: boolean | cdktf.IResolvable;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#external_data_reference PairingProfile#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#external_data_set PairingProfile#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#id PairingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of seconds pairing profile keys will be valid for. Allowed values are range(1-2147483647) and "unlimited". Default value: "unlimited"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#key_lifespan PairingProfile#key_lifespan}
  */
  readonly keyLifespan?: string;
  /**
  * Flag that controls whether loc label can be overridden from pairing script. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#loc_label_lock PairingProfile#loc_label_lock}
  */
  readonly locLabelLock?: boolean | cdktf.IResolvable;
  /**
  * Status of VEN(alternative of status). Default value: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#log_traffic PairingProfile#log_traffic}
  */
  readonly logTraffic?: boolean | cdktf.IResolvable;
  /**
  * Flag that controls whether log_traffic can be overridden from pairing script. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#log_traffic_lock PairingProfile#log_traffic_lock}
  */
  readonly logTrafficLock?: boolean | cdktf.IResolvable;
  /**
  * The short friendly name of the pairing profile. The name should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#name PairingProfile#name}
  */
  readonly name: string;
  /**
  * Flag that controls whether role label can be overridden from pairing script. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#role_label_lock PairingProfile#role_label_lock}
  */
  readonly roleLabelLock?: boolean | cdktf.IResolvable;
  /**
  * Visibility level of the agent. Allowed values are "flow_full_detail", "flow_summary", "flow_drops", "flow_off" and "enhanced_data_collection". Default value: "flow_summary"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#visibility_level PairingProfile#visibility_level}
  */
  readonly visibilityLevel?: string;
  /**
  * Flag that controls whether visibility_level can be overridden from pairing script. Default value: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#visibility_level_lock PairingProfile#visibility_level_lock}
  */
  readonly visibilityLevelLock?: boolean | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#labels PairingProfile#labels}
  */
  readonly labels?: PairingProfileLabels[] | cdktf.IResolvable;
}
export interface PairingProfileLabels {
  /**
  * Label URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#href PairingProfile#href}
  */
  readonly href: string;
}

export function pairingProfileLabelsToTerraform(struct?: PairingProfileLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function pairingProfileLabelsToHclTerraform(struct?: PairingProfileLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PairingProfileLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PairingProfileLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PairingProfileLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class PairingProfileLabelsList extends cdktf.ComplexList {
  public internalValue? : PairingProfileLabels[] | cdktf.IResolvable

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
  public get(index: number): PairingProfileLabelsOutputReference {
    return new PairingProfileLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile illumio-core_pairing_profile}
*/
export class PairingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_pairing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PairingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PairingProfile to import
  * @param importFromId The id of the existing PairingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PairingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_pairing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_profile illumio-core_pairing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PairingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PairingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_pairing_profile',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentSoftwareRelease = config.agentSoftwareRelease;
    this._allowedUsesPerKey = config.allowedUsesPerKey;
    this._appLabelLock = config.appLabelLock;
    this._description = config.description;
    this._enabled = config.enabled;
    this._enforcementMode = config.enforcementMode;
    this._enforcementModeLock = config.enforcementModeLock;
    this._envLabelLock = config.envLabelLock;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._keyLifespan = config.keyLifespan;
    this._locLabelLock = config.locLabelLock;
    this._logTraffic = config.logTraffic;
    this._logTrafficLock = config.logTrafficLock;
    this._name = config.name;
    this._roleLabelLock = config.roleLabelLock;
    this._visibilityLevel = config.visibilityLevel;
    this._visibilityLevelLock = config.visibilityLevelLock;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_software_release - computed: true, optional: true, required: false
  private _agentSoftwareRelease?: string; 
  public get agentSoftwareRelease() {
    return this.getStringAttribute('agent_software_release');
  }
  public set agentSoftwareRelease(value: string) {
    this._agentSoftwareRelease = value;
  }
  public resetAgentSoftwareRelease() {
    this._agentSoftwareRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSoftwareReleaseInput() {
    return this._agentSoftwareRelease;
  }

  // allowed_uses_per_key - computed: false, optional: true, required: false
  private _allowedUsesPerKey?: string; 
  public get allowedUsesPerKey() {
    return this.getStringAttribute('allowed_uses_per_key');
  }
  public set allowedUsesPerKey(value: string) {
    this._allowedUsesPerKey = value;
  }
  public resetAllowedUsesPerKey() {
    this._allowedUsesPerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsesPerKeyInput() {
    return this._allowedUsesPerKey;
  }

  // app_label_lock - computed: false, optional: true, required: false
  private _appLabelLock?: boolean | cdktf.IResolvable; 
  public get appLabelLock() {
    return this.getBooleanAttribute('app_label_lock');
  }
  public set appLabelLock(value: boolean | cdktf.IResolvable) {
    this._appLabelLock = value;
  }
  public resetAppLabelLock() {
    this._appLabelLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelLockInput() {
    return this._appLabelLock;
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // enforcement_mode_lock - computed: false, optional: true, required: false
  private _enforcementModeLock?: boolean | cdktf.IResolvable; 
  public get enforcementModeLock() {
    return this.getBooleanAttribute('enforcement_mode_lock');
  }
  public set enforcementModeLock(value: boolean | cdktf.IResolvable) {
    this._enforcementModeLock = value;
  }
  public resetEnforcementModeLock() {
    this._enforcementModeLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeLockInput() {
    return this._enforcementModeLock;
  }

  // env_label_lock - computed: false, optional: true, required: false
  private _envLabelLock?: boolean | cdktf.IResolvable; 
  public get envLabelLock() {
    return this.getBooleanAttribute('env_label_lock');
  }
  public set envLabelLock(value: boolean | cdktf.IResolvable) {
    this._envLabelLock = value;
  }
  public resetEnvLabelLock() {
    this._envLabelLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envLabelLockInput() {
    return this._envLabelLock;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // key_lifespan - computed: false, optional: true, required: false
  private _keyLifespan?: string; 
  public get keyLifespan() {
    return this.getStringAttribute('key_lifespan');
  }
  public set keyLifespan(value: string) {
    this._keyLifespan = value;
  }
  public resetKeyLifespan() {
    this._keyLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLifespanInput() {
    return this._keyLifespan;
  }

  // last_pairing_at - computed: true, optional: false, required: false
  public get lastPairingAt() {
    return this.getStringAttribute('last_pairing_at');
  }

  // loc_label_lock - computed: false, optional: true, required: false
  private _locLabelLock?: boolean | cdktf.IResolvable; 
  public get locLabelLock() {
    return this.getBooleanAttribute('loc_label_lock');
  }
  public set locLabelLock(value: boolean | cdktf.IResolvable) {
    this._locLabelLock = value;
  }
  public resetLocLabelLock() {
    this._locLabelLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locLabelLockInput() {
    return this._locLabelLock;
  }

  // log_traffic - computed: false, optional: true, required: false
  private _logTraffic?: boolean | cdktf.IResolvable; 
  public get logTraffic() {
    return this.getBooleanAttribute('log_traffic');
  }
  public set logTraffic(value: boolean | cdktf.IResolvable) {
    this._logTraffic = value;
  }
  public resetLogTraffic() {
    this._logTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficInput() {
    return this._logTraffic;
  }

  // log_traffic_lock - computed: false, optional: true, required: false
  private _logTrafficLock?: boolean | cdktf.IResolvable; 
  public get logTrafficLock() {
    return this.getBooleanAttribute('log_traffic_lock');
  }
  public set logTrafficLock(value: boolean | cdktf.IResolvable) {
    this._logTrafficLock = value;
  }
  public resetLogTrafficLock() {
    this._logTrafficLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTrafficLockInput() {
    return this._logTrafficLock;
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

  // role_label_lock - computed: false, optional: true, required: false
  private _roleLabelLock?: boolean | cdktf.IResolvable; 
  public get roleLabelLock() {
    return this.getBooleanAttribute('role_label_lock');
  }
  public set roleLabelLock(value: boolean | cdktf.IResolvable) {
    this._roleLabelLock = value;
  }
  public resetRoleLabelLock() {
    this._roleLabelLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleLabelLockInput() {
    return this._roleLabelLock;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_lock - computed: true, optional: false, required: false
  public get statusLock() {
    return this.getBooleanAttribute('status_lock');
  }

  // total_use_count - computed: true, optional: false, required: false
  public get totalUseCount() {
    return this.getNumberAttribute('total_use_count');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // visibility_level - computed: false, optional: true, required: false
  private _visibilityLevel?: string; 
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }
  public set visibilityLevel(value: string) {
    this._visibilityLevel = value;
  }
  public resetVisibilityLevel() {
    this._visibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityLevelInput() {
    return this._visibilityLevel;
  }

  // visibility_level_lock - computed: false, optional: true, required: false
  private _visibilityLevelLock?: boolean | cdktf.IResolvable; 
  public get visibilityLevelLock() {
    return this.getBooleanAttribute('visibility_level_lock');
  }
  public set visibilityLevelLock(value: boolean | cdktf.IResolvable) {
    this._visibilityLevelLock = value;
  }
  public resetVisibilityLevelLock() {
    this._visibilityLevelLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityLevelLockInput() {
    return this._visibilityLevelLock;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new PairingProfileLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: PairingProfileLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_software_release: cdktf.stringToTerraform(this._agentSoftwareRelease),
      allowed_uses_per_key: cdktf.stringToTerraform(this._allowedUsesPerKey),
      app_label_lock: cdktf.booleanToTerraform(this._appLabelLock),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      enforcement_mode_lock: cdktf.booleanToTerraform(this._enforcementModeLock),
      env_label_lock: cdktf.booleanToTerraform(this._envLabelLock),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      key_lifespan: cdktf.stringToTerraform(this._keyLifespan),
      loc_label_lock: cdktf.booleanToTerraform(this._locLabelLock),
      log_traffic: cdktf.booleanToTerraform(this._logTraffic),
      log_traffic_lock: cdktf.booleanToTerraform(this._logTrafficLock),
      name: cdktf.stringToTerraform(this._name),
      role_label_lock: cdktf.booleanToTerraform(this._roleLabelLock),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
      visibility_level_lock: cdktf.booleanToTerraform(this._visibilityLevelLock),
      labels: cdktf.listMapper(pairingProfileLabelsToTerraform, true)(this._labels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_software_release: {
        value: cdktf.stringToHclTerraform(this._agentSoftwareRelease),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_uses_per_key: {
        value: cdktf.stringToHclTerraform(this._allowedUsesPerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_label_lock: {
        value: cdktf.booleanToHclTerraform(this._appLabelLock),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._enforcementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_mode_lock: {
        value: cdktf.booleanToHclTerraform(this._enforcementModeLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env_label_lock: {
        value: cdktf.booleanToHclTerraform(this._envLabelLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      key_lifespan: {
        value: cdktf.stringToHclTerraform(this._keyLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loc_label_lock: {
        value: cdktf.booleanToHclTerraform(this._locLabelLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_traffic: {
        value: cdktf.booleanToHclTerraform(this._logTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_traffic_lock: {
        value: cdktf.booleanToHclTerraform(this._logTrafficLock),
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
      role_label_lock: {
        value: cdktf.booleanToHclTerraform(this._roleLabelLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      visibility_level: {
        value: cdktf.stringToHclTerraform(this._visibilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility_level_lock: {
        value: cdktf.booleanToHclTerraform(this._visibilityLevelLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(pairingProfileLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PairingProfileLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
