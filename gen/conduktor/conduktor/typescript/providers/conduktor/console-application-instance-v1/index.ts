// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleApplicationInstanceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the application this instance belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#application ConsoleApplicationInstanceV1#application}
  */
  readonly application: string;
  /**
  * Application Instance name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#name ConsoleApplicationInstanceV1#name}
  */
  readonly name: string;
  /**
  * Application Instance specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#spec ConsoleApplicationInstanceV1#spec}
  */
  readonly spec: ConsoleApplicationInstanceV1Spec;
}
export interface ConsoleApplicationInstanceV1SpecResources {
  /**
  * Valid Connect Cluster linked to the Kafka Cluster `spec.cluster`. Only mandatory when type is CONNECTOR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#connect_cluster ConsoleApplicationInstanceV1#connect_cluster}
  */
  readonly connectCluster?: string;
  /**
  * Name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#name ConsoleApplicationInstanceV1#name}
  */
  readonly name: string;
  /**
  * Ownership mode for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#ownership_mode ConsoleApplicationInstanceV1#ownership_mode}
  */
  readonly ownershipMode?: string;
  /**
  * Pattern type for the resource, valid values are: LITERAL, PREFIXED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#pattern_type ConsoleApplicationInstanceV1#pattern_type}
  */
  readonly patternType: string;
  /**
  * Type of the resource, valid values are: TOPIC, CONSUMER_GROUP, SUBJECT, CONNECTOR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#type ConsoleApplicationInstanceV1#type}
  */
  readonly type: string;
}

export function consoleApplicationInstanceV1SpecResourcesToTerraform(struct?: ConsoleApplicationInstanceV1SpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_cluster: cdktf.stringToTerraform(struct!.connectCluster),
    name: cdktf.stringToTerraform(struct!.name),
    ownership_mode: cdktf.stringToTerraform(struct!.ownershipMode),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function consoleApplicationInstanceV1SpecResourcesToHclTerraform(struct?: ConsoleApplicationInstanceV1SpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_cluster: {
      value: cdktf.stringToHclTerraform(struct!.connectCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ownership_mode: {
      value: cdktf.stringToHclTerraform(struct!.ownershipMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
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

export class ConsoleApplicationInstanceV1SpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsoleApplicationInstanceV1SpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectCluster = this._connectCluster;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownershipMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownershipMode = this._ownershipMode;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleApplicationInstanceV1SpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectCluster = undefined;
      this._name = undefined;
      this._ownershipMode = undefined;
      this._patternType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectCluster = value.connectCluster;
      this._name = value.name;
      this._ownershipMode = value.ownershipMode;
      this._patternType = value.patternType;
      this._type = value.type;
    }
  }

  // connect_cluster - computed: true, optional: true, required: false
  private _connectCluster?: string; 
  public get connectCluster() {
    return this.getStringAttribute('connect_cluster');
  }
  public set connectCluster(value: string) {
    this._connectCluster = value;
  }
  public resetConnectCluster() {
    this._connectCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterInput() {
    return this._connectCluster;
  }

  // name - computed: true, optional: false, required: true
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

  // ownership_mode - computed: true, optional: true, required: false
  private _ownershipMode?: string; 
  public get ownershipMode() {
    return this.getStringAttribute('ownership_mode');
  }
  public set ownershipMode(value: string) {
    this._ownershipMode = value;
  }
  public resetOwnershipMode() {
    this._ownershipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipModeInput() {
    return this._ownershipMode;
  }

  // pattern_type - computed: true, optional: false, required: true
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // type - computed: true, optional: false, required: true
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

export class ConsoleApplicationInstanceV1SpecResourcesList extends cdktf.ComplexList {
  public internalValue? : ConsoleApplicationInstanceV1SpecResources[] | cdktf.IResolvable

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
  public get(index: number): ConsoleApplicationInstanceV1SpecResourcesOutputReference {
    return new ConsoleApplicationInstanceV1SpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsoleApplicationInstanceV1Spec {
  /**
  * If set to true, the service account ACLs will be managed by the Application owners directly instead of being synchronized by the ApplicationInstance component. See [documentation](https://docs.conduktor.io/platform/reference/resource-reference/self-service/#application-managed-service-account) for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#application_managed_service_account ConsoleApplicationInstanceV1#application_managed_service_account}
  */
  readonly applicationManagedServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Valid Console Cluster. It's immutable (update will require the resource to be recreated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#cluster ConsoleApplicationInstanceV1#cluster}
  */
  readonly cluster: string;
  /**
  * Default catalog visibility for the application instance, valid values are: PRIVATE, PUBLIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#default_catalog_visibility ConsoleApplicationInstanceV1#default_catalog_visibility}
  */
  readonly defaultCatalogVisibility?: string;
  /**
  * Reference to the resource policy to apply to this instance. NOTE: this field has been introduced with Console `1.34.0` and it will not work with previous versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#policy_ref ConsoleApplicationInstanceV1#policy_ref}
  */
  readonly policyRef?: string[];
  /**
  * Set of all resources associated with this application instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#resources ConsoleApplicationInstanceV1#resources}
  */
  readonly resources?: ConsoleApplicationInstanceV1SpecResources[] | cdktf.IResolvable;
  /**
  * Service account associated with this application instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#service_account ConsoleApplicationInstanceV1#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Reference to the topic policy to apply to this instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#topic_policy_ref ConsoleApplicationInstanceV1#topic_policy_ref}
  */
  readonly topicPolicyRef?: string[];
}

export function consoleApplicationInstanceV1SpecToTerraform(struct?: ConsoleApplicationInstanceV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_managed_service_account: cdktf.booleanToTerraform(struct!.applicationManagedServiceAccount),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    default_catalog_visibility: cdktf.stringToTerraform(struct!.defaultCatalogVisibility),
    policy_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyRef),
    resources: cdktf.listMapper(consoleApplicationInstanceV1SpecResourcesToTerraform, false)(struct!.resources),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    topic_policy_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topicPolicyRef),
  }
}


export function consoleApplicationInstanceV1SpecToHclTerraform(struct?: ConsoleApplicationInstanceV1Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_managed_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.applicationManagedServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_catalog_visibility: {
      value: cdktf.stringToHclTerraform(struct!.defaultCatalogVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyRef),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(consoleApplicationInstanceV1SpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "ConsoleApplicationInstanceV1SpecResourcesList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_policy_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topicPolicyRef),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleApplicationInstanceV1SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleApplicationInstanceV1Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationManagedServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationManagedServiceAccount = this._applicationManagedServiceAccount;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._defaultCatalogVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCatalogVisibility = this._defaultCatalogVisibility;
    }
    if (this._policyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRef = this._policyRef;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._topicPolicyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicPolicyRef = this._topicPolicyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleApplicationInstanceV1Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationManagedServiceAccount = undefined;
      this._cluster = undefined;
      this._defaultCatalogVisibility = undefined;
      this._policyRef = undefined;
      this._resources.internalValue = undefined;
      this._serviceAccount = undefined;
      this._topicPolicyRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationManagedServiceAccount = value.applicationManagedServiceAccount;
      this._cluster = value.cluster;
      this._defaultCatalogVisibility = value.defaultCatalogVisibility;
      this._policyRef = value.policyRef;
      this._resources.internalValue = value.resources;
      this._serviceAccount = value.serviceAccount;
      this._topicPolicyRef = value.topicPolicyRef;
    }
  }

  // application_managed_service_account - computed: true, optional: true, required: false
  private _applicationManagedServiceAccount?: boolean | cdktf.IResolvable; 
  public get applicationManagedServiceAccount() {
    return this.getBooleanAttribute('application_managed_service_account');
  }
  public set applicationManagedServiceAccount(value: boolean | cdktf.IResolvable) {
    this._applicationManagedServiceAccount = value;
  }
  public resetApplicationManagedServiceAccount() {
    this._applicationManagedServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationManagedServiceAccountInput() {
    return this._applicationManagedServiceAccount;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // default_catalog_visibility - computed: false, optional: true, required: false
  private _defaultCatalogVisibility?: string; 
  public get defaultCatalogVisibility() {
    return this.getStringAttribute('default_catalog_visibility');
  }
  public set defaultCatalogVisibility(value: string) {
    this._defaultCatalogVisibility = value;
  }
  public resetDefaultCatalogVisibility() {
    this._defaultCatalogVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCatalogVisibilityInput() {
    return this._defaultCatalogVisibility;
  }

  // policy_ref - computed: false, optional: true, required: false
  private _policyRef?: string[]; 
  public get policyRef() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_ref'));
  }
  public set policyRef(value: string[]) {
    this._policyRef = value;
  }
  public resetPolicyRef() {
    this._policyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefInput() {
    return this._policyRef;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new ConsoleApplicationInstanceV1SpecResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ConsoleApplicationInstanceV1SpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // topic_policy_ref - computed: false, optional: true, required: false
  private _topicPolicyRef?: string[]; 
  public get topicPolicyRef() {
    return cdktf.Fn.tolist(this.getListAttribute('topic_policy_ref'));
  }
  public set topicPolicyRef(value: string[]) {
    this._topicPolicyRef = value;
  }
  public resetTopicPolicyRef() {
    this._topicPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPolicyRefInput() {
    return this._topicPolicyRef;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1 conduktor_console_application_instance_v1}
*/
export class ConsoleApplicationInstanceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_application_instance_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleApplicationInstanceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleApplicationInstanceV1 to import
  * @param importFromId The id of the existing ConsoleApplicationInstanceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleApplicationInstanceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_application_instance_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_application_instance_v1 conduktor_console_application_instance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleApplicationInstanceV1Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleApplicationInstanceV1Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_application_instance_v1',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleApplicationInstanceV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleApplicationInstanceV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleApplicationInstanceV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
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
      spec: {
        value: consoleApplicationInstanceV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleApplicationInstanceV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
