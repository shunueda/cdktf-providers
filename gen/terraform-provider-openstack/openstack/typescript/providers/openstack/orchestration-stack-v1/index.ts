// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrchestrationStackV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#capabilities OrchestrationStackV1#capabilities}
  */
  readonly capabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#creation_time OrchestrationStackV1#creation_time}
  */
  readonly creationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#disable_rollback OrchestrationStackV1#disable_rollback}
  */
  readonly disableRollback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#environment_opts OrchestrationStackV1#environment_opts}
  */
  readonly environmentOpts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#id OrchestrationStackV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#name OrchestrationStackV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#notification_topics OrchestrationStackV1#notification_topics}
  */
  readonly notificationTopics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#parameters OrchestrationStackV1#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#region OrchestrationStackV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#status OrchestrationStackV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#status_reason OrchestrationStackV1#status_reason}
  */
  readonly statusReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#tags OrchestrationStackV1#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#template_description OrchestrationStackV1#template_description}
  */
  readonly templateDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#template_opts OrchestrationStackV1#template_opts}
  */
  readonly templateOpts: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#timeout OrchestrationStackV1#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#updated_time OrchestrationStackV1#updated_time}
  */
  readonly updatedTime?: string;
  /**
  * outputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#outputs OrchestrationStackV1#outputs}
  */
  readonly outputs?: OrchestrationStackV1Outputs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#timeouts OrchestrationStackV1#timeouts}
  */
  readonly timeouts?: OrchestrationStackV1Timeouts;
}
export interface OrchestrationStackV1Outputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#description OrchestrationStackV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#output_key OrchestrationStackV1#output_key}
  */
  readonly outputKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#output_value OrchestrationStackV1#output_value}
  */
  readonly outputValue: string;
}

export function orchestrationStackV1OutputsToTerraform(struct?: OrchestrationStackV1Outputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    output_key: cdktf.stringToTerraform(struct!.outputKey),
    output_value: cdktf.stringToTerraform(struct!.outputValue),
  }
}


export function orchestrationStackV1OutputsToHclTerraform(struct?: OrchestrationStackV1Outputs | cdktf.IResolvable): any {
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
    output_key: {
      value: cdktf.stringToHclTerraform(struct!.outputKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_value: {
      value: cdktf.stringToHclTerraform(struct!.outputValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrchestrationStackV1OutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrchestrationStackV1Outputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._outputKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputKey = this._outputKey;
    }
    if (this._outputValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputValue = this._outputValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrchestrationStackV1Outputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._outputKey = undefined;
      this._outputValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._outputKey = value.outputKey;
      this._outputValue = value.outputValue;
    }
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

  // output_key - computed: false, optional: false, required: true
  private _outputKey?: string; 
  public get outputKey() {
    return this.getStringAttribute('output_key');
  }
  public set outputKey(value: string) {
    this._outputKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputKeyInput() {
    return this._outputKey;
  }

  // output_value - computed: false, optional: false, required: true
  private _outputValue?: string; 
  public get outputValue() {
    return this.getStringAttribute('output_value');
  }
  public set outputValue(value: string) {
    this._outputValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputValueInput() {
    return this._outputValue;
  }
}

export class OrchestrationStackV1OutputsList extends cdktf.ComplexList {
  public internalValue? : OrchestrationStackV1Outputs[] | cdktf.IResolvable

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
  public get(index: number): OrchestrationStackV1OutputsOutputReference {
    return new OrchestrationStackV1OutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrchestrationStackV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#create OrchestrationStackV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#delete OrchestrationStackV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#update OrchestrationStackV1#update}
  */
  readonly update?: string;
}

export function orchestrationStackV1TimeoutsToTerraform(struct?: OrchestrationStackV1Timeouts | cdktf.IResolvable): any {
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


export function orchestrationStackV1TimeoutsToHclTerraform(struct?: OrchestrationStackV1Timeouts | cdktf.IResolvable): any {
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

export class OrchestrationStackV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrchestrationStackV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrchestrationStackV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1 openstack_orchestration_stack_v1}
*/
export class OrchestrationStackV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_orchestration_stack_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrchestrationStackV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrchestrationStackV1 to import
  * @param importFromId The id of the existing OrchestrationStackV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrchestrationStackV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_orchestration_stack_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.4.0/docs/resources/orchestration_stack_v1 openstack_orchestration_stack_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrchestrationStackV1Config
  */
  public constructor(scope: Construct, id: string, config: OrchestrationStackV1Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_orchestration_stack_v1',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capabilities = config.capabilities;
    this._creationTime = config.creationTime;
    this._description = config.description;
    this._disableRollback = config.disableRollback;
    this._environmentOpts = config.environmentOpts;
    this._id = config.id;
    this._name = config.name;
    this._notificationTopics = config.notificationTopics;
    this._parameters = config.parameters;
    this._region = config.region;
    this._status = config.status;
    this._statusReason = config.statusReason;
    this._tags = config.tags;
    this._templateDescription = config.templateDescription;
    this._templateOpts = config.templateOpts;
    this._timeout = config.timeout;
    this._updatedTime = config.updatedTime;
    this._outputs.internalValue = config.outputs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // creation_time - computed: true, optional: true, required: false
  private _creationTime?: string; 
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }
  public set creationTime(value: string) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
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

  // disable_rollback - computed: true, optional: true, required: false
  private _disableRollback?: boolean | cdktf.IResolvable; 
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback');
  }
  public set disableRollback(value: boolean | cdktf.IResolvable) {
    this._disableRollback = value;
  }
  public resetDisableRollback() {
    this._disableRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRollbackInput() {
    return this._disableRollback;
  }

  // environment_opts - computed: false, optional: true, required: false
  private _environmentOpts?: { [key: string]: string }; 
  public get environmentOpts() {
    return this.getStringMapAttribute('environment_opts');
  }
  public set environmentOpts(value: { [key: string]: string }) {
    this._environmentOpts = value;
  }
  public resetEnvironmentOpts() {
    this._environmentOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentOptsInput() {
    return this._environmentOpts;
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

  // notification_topics - computed: true, optional: true, required: false
  private _notificationTopics?: string[]; 
  public get notificationTopics() {
    return this.getListAttribute('notification_topics');
  }
  public set notificationTopics(value: string[]) {
    this._notificationTopics = value;
  }
  public resetNotificationTopics() {
    this._notificationTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicsInput() {
    return this._notificationTopics;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_reason - computed: true, optional: true, required: false
  private _statusReason?: string; 
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }
  public set statusReason(value: string) {
    this._statusReason = value;
  }
  public resetStatusReason() {
    this._statusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusReasonInput() {
    return this._statusReason;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // template_description - computed: true, optional: true, required: false
  private _templateDescription?: string; 
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }
  public set templateDescription(value: string) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_opts - computed: false, optional: false, required: true
  private _templateOpts?: { [key: string]: string }; 
  public get templateOpts() {
    return this.getStringMapAttribute('template_opts');
  }
  public set templateOpts(value: { [key: string]: string }) {
    this._templateOpts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateOptsInput() {
    return this._templateOpts;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // updated_time - computed: true, optional: true, required: false
  private _updatedTime?: string; 
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }
  public set updatedTime(value: string) {
    this._updatedTime = value;
  }
  public resetUpdatedTime() {
    this._updatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedTimeInput() {
    return this._updatedTime;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new OrchestrationStackV1OutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: OrchestrationStackV1Outputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrchestrationStackV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrchestrationStackV1Timeouts) {
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
      capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capabilities),
      creation_time: cdktf.stringToTerraform(this._creationTime),
      description: cdktf.stringToTerraform(this._description),
      disable_rollback: cdktf.booleanToTerraform(this._disableRollback),
      environment_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentOpts),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationTopics),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      status_reason: cdktf.stringToTerraform(this._statusReason),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_description: cdktf.stringToTerraform(this._templateDescription),
      template_opts: cdktf.hashMapper(cdktf.stringToTerraform)(this._templateOpts),
      timeout: cdktf.numberToTerraform(this._timeout),
      updated_time: cdktf.stringToTerraform(this._updatedTime),
      outputs: cdktf.listMapper(orchestrationStackV1OutputsToTerraform, true)(this._outputs.internalValue),
      timeouts: orchestrationStackV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      creation_time: {
        value: cdktf.stringToHclTerraform(this._creationTime),
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
      disable_rollback: {
        value: cdktf.booleanToHclTerraform(this._disableRollback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_opts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentOpts),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_topics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationTopics),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_reason: {
        value: cdktf.stringToHclTerraform(this._statusReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template_description: {
        value: cdktf.stringToHclTerraform(this._templateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_opts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._templateOpts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updated_time: {
        value: cdktf.stringToHclTerraform(this._updatedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs: {
        value: cdktf.listMapperHcl(orchestrationStackV1OutputsToHclTerraform, true)(this._outputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrchestrationStackV1OutputsList",
      },
      timeouts: {
        value: orchestrationStackV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrchestrationStackV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
