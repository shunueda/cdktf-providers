// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationPriorityQosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#description ApplicationPriorityQosPolicy#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#feature_profile_id ApplicationPriorityQosPolicy#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#name ApplicationPriorityQosPolicy#name}
  */
  readonly name: string;
  /**
  * qosSchedulers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#qos_schedulers ApplicationPriorityQosPolicy#qos_schedulers}
  */
  readonly qosSchedulers?: ApplicationPriorityQosPolicyQosSchedulers[] | cdktf.IResolvable;
  /**
  * interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#target_interfaces ApplicationPriorityQosPolicy#target_interfaces}
  */
  readonly targetInterfaces?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#target_interfaces_variable ApplicationPriorityQosPolicy#target_interfaces_variable}
  */
  readonly targetInterfacesVariable?: string;
}
export interface ApplicationPriorityQosPolicyQosSchedulers {
  /**
  * bandwidthPercent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#bandwidth ApplicationPriorityQosPolicy#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#drops ApplicationPriorityQosPolicy#drops}
  */
  readonly drops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#forwarding_class_id ApplicationPriorityQosPolicy#forwarding_class_id}
  */
  readonly forwardingClassId?: string;
  /**
  * queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#queue ApplicationPriorityQosPolicy#queue}
  */
  readonly queue?: string;
  /**
  * scheduling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#scheduling_type ApplicationPriorityQosPolicy#scheduling_type}
  */
  readonly schedulingType?: string;
}

export function applicationPriorityQosPolicyQosSchedulersToTerraform(struct?: ApplicationPriorityQosPolicyQosSchedulers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    drops: cdktf.stringToTerraform(struct!.drops),
    forwarding_class_id: cdktf.stringToTerraform(struct!.forwardingClassId),
    queue: cdktf.stringToTerraform(struct!.queue),
    scheduling_type: cdktf.stringToTerraform(struct!.schedulingType),
  }
}


export function applicationPriorityQosPolicyQosSchedulersToHclTerraform(struct?: ApplicationPriorityQosPolicyQosSchedulers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drops: {
      value: cdktf.stringToHclTerraform(struct!.drops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_class_id: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClassId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduling_type: {
      value: cdktf.stringToHclTerraform(struct!.schedulingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPriorityQosPolicyQosSchedulersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPriorityQosPolicyQosSchedulers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._drops !== undefined) {
      hasAnyValues = true;
      internalValueResult.drops = this._drops;
    }
    if (this._forwardingClassId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClassId = this._forwardingClassId;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._schedulingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingType = this._schedulingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPriorityQosPolicyQosSchedulers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._drops = undefined;
      this._forwardingClassId = undefined;
      this._queue = undefined;
      this._schedulingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._drops = value.drops;
      this._forwardingClassId = value.forwardingClassId;
      this._queue = value.queue;
      this._schedulingType = value.schedulingType;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // drops - computed: false, optional: true, required: false
  private _drops?: string; 
  public get drops() {
    return this.getStringAttribute('drops');
  }
  public set drops(value: string) {
    this._drops = value;
  }
  public resetDrops() {
    this._drops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropsInput() {
    return this._drops;
  }

  // forwarding_class_id - computed: false, optional: true, required: false
  private _forwardingClassId?: string; 
  public get forwardingClassId() {
    return this.getStringAttribute('forwarding_class_id');
  }
  public set forwardingClassId(value: string) {
    this._forwardingClassId = value;
  }
  public resetForwardingClassId() {
    this._forwardingClassId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassIdInput() {
    return this._forwardingClassId;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // scheduling_type - computed: false, optional: true, required: false
  private _schedulingType?: string; 
  public get schedulingType() {
    return this.getStringAttribute('scheduling_type');
  }
  public set schedulingType(value: string) {
    this._schedulingType = value;
  }
  public resetSchedulingType() {
    this._schedulingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTypeInput() {
    return this._schedulingType;
  }
}

export class ApplicationPriorityQosPolicyQosSchedulersList extends cdktf.ComplexList {
  public internalValue? : ApplicationPriorityQosPolicyQosSchedulers[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPriorityQosPolicyQosSchedulersOutputReference {
    return new ApplicationPriorityQosPolicyQosSchedulersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy sdwan_application_priority_qos_policy}
*/
export class ApplicationPriorityQosPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_application_priority_qos_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationPriorityQosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationPriorityQosPolicy to import
  * @param importFromId The id of the existing ApplicationPriorityQosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationPriorityQosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_application_priority_qos_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/application_priority_qos_policy sdwan_application_priority_qos_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationPriorityQosPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationPriorityQosPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_application_priority_qos_policy',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._qosSchedulers.internalValue = config.qosSchedulers;
    this._targetInterfaces = config.targetInterfaces;
    this._targetInterfacesVariable = config.targetInterfacesVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // qos_schedulers - computed: false, optional: true, required: false
  private _qosSchedulers = new ApplicationPriorityQosPolicyQosSchedulersList(this, "qos_schedulers", false);
  public get qosSchedulers() {
    return this._qosSchedulers;
  }
  public putQosSchedulers(value: ApplicationPriorityQosPolicyQosSchedulers[] | cdktf.IResolvable) {
    this._qosSchedulers.internalValue = value;
  }
  public resetQosSchedulers() {
    this._qosSchedulers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosSchedulersInput() {
    return this._qosSchedulers.internalValue;
  }

  // target_interfaces - computed: false, optional: true, required: false
  private _targetInterfaces?: string[]; 
  public get targetInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('target_interfaces'));
  }
  public set targetInterfaces(value: string[]) {
    this._targetInterfaces = value;
  }
  public resetTargetInterfaces() {
    this._targetInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInterfacesInput() {
    return this._targetInterfaces;
  }

  // target_interfaces_variable - computed: false, optional: true, required: false
  private _targetInterfacesVariable?: string; 
  public get targetInterfacesVariable() {
    return this.getStringAttribute('target_interfaces_variable');
  }
  public set targetInterfacesVariable(value: string) {
    this._targetInterfacesVariable = value;
  }
  public resetTargetInterfacesVariable() {
    this._targetInterfacesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInterfacesVariableInput() {
    return this._targetInterfacesVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      qos_schedulers: cdktf.listMapper(applicationPriorityQosPolicyQosSchedulersToTerraform, false)(this._qosSchedulers.internalValue),
      target_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetInterfaces),
      target_interfaces_variable: cdktf.stringToTerraform(this._targetInterfacesVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      qos_schedulers: {
        value: cdktf.listMapperHcl(applicationPriorityQosPolicyQosSchedulersToHclTerraform, false)(this._qosSchedulers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationPriorityQosPolicyQosSchedulersList",
      },
      target_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_interfaces_variable: {
        value: cdktf.stringToHclTerraform(this._targetInterfacesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
