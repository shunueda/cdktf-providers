// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#enable_monitoring_template_on_given_resources StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#enable_monitoring_template_on_given_resources}
  */
  readonly enableMonitoringTemplateOnGivenResources: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#id StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#monitoring_template_id StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#monitoring_template_id}
  */
  readonly monitoringTemplateId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#timeouts StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#timeouts}
  */
  readonly timeouts?: StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts;
}
export interface StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#create StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#delete StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#update StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement#update}
  */
  readonly update?: string;
}

export function stackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeoutsToTerraform(struct?: StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts | cdktf.IResolvable): any {
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


export function stackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeoutsToHclTerraform(struct?: StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management oci_stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management}
*/
export class StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement to import
  * @param importFromId The id of the existing StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management oci_stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitoring_template_monitoring_template_on_given_resources_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableMonitoringTemplateOnGivenResources = config.enableMonitoringTemplateOnGivenResources;
    this._id = config.id;
    this._monitoringTemplateId = config.monitoringTemplateId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_monitoring_template_on_given_resources - computed: false, optional: false, required: true
  private _enableMonitoringTemplateOnGivenResources?: boolean | cdktf.IResolvable; 
  public get enableMonitoringTemplateOnGivenResources() {
    return this.getBooleanAttribute('enable_monitoring_template_on_given_resources');
  }
  public set enableMonitoringTemplateOnGivenResources(value: boolean | cdktf.IResolvable) {
    this._enableMonitoringTemplateOnGivenResources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringTemplateOnGivenResourcesInput() {
    return this._enableMonitoringTemplateOnGivenResources;
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

  // monitoring_template_id - computed: false, optional: false, required: true
  private _monitoringTemplateId?: string; 
  public get monitoringTemplateId() {
    return this.getStringAttribute('monitoring_template_id');
  }
  public set monitoringTemplateId(value: string) {
    this._monitoringTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringTemplateIdInput() {
    return this._monitoringTemplateId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts) {
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
      enable_monitoring_template_on_given_resources: cdktf.booleanToTerraform(this._enableMonitoringTemplateOnGivenResources),
      id: cdktf.stringToTerraform(this._id),
      monitoring_template_id: cdktf.stringToTerraform(this._monitoringTemplateId),
      timeouts: stackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_monitoring_template_on_given_resources: {
        value: cdktf.booleanToHclTerraform(this._enableMonitoringTemplateOnGivenResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_template_id: {
        value: cdktf.stringToHclTerraform(this._monitoringTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: stackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMonitoringTemplateMonitoringTemplateOnGivenResourcesManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
