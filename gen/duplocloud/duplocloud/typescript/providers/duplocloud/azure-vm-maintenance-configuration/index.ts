// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureVmMaintenanceConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#id AzureVmMaintenanceConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GUID of the tenant that the azure vm feature will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#tenant_id AzureVmMaintenanceConfiguration#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The visibility of the Maintenance Configuration. The only allowable value is Custom. Defaults to `Custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#visiblity AzureVmMaintenanceConfiguration#visiblity}
  */
  readonly visiblity?: string;
  /**
  * The name of the virtual machine where maintenance configuration need to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#vm_name AzureVmMaintenanceConfiguration#vm_name}
  */
  readonly vmName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#timeouts AzureVmMaintenanceConfiguration#timeouts}
  */
  readonly timeouts?: AzureVmMaintenanceConfigurationTimeouts;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#window AzureVmMaintenanceConfiguration#window}
  */
  readonly window?: AzureVmMaintenanceConfigurationWindow;
}
export interface AzureVmMaintenanceConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#create AzureVmMaintenanceConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#delete AzureVmMaintenanceConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#update AzureVmMaintenanceConfiguration#update}
  */
  readonly update?: string;
}

export function azureVmMaintenanceConfigurationTimeoutsToTerraform(struct?: AzureVmMaintenanceConfigurationTimeouts | cdktf.IResolvable): any {
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


export function azureVmMaintenanceConfigurationTimeoutsToHclTerraform(struct?: AzureVmMaintenanceConfigurationTimeouts | cdktf.IResolvable): any {
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

export class AzureVmMaintenanceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureVmMaintenanceConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVmMaintenanceConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
export interface AzureVmMaintenanceConfigurationWindow {
  /**
  * The duration of the maintenance window in HH:mm format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#duration AzureVmMaintenanceConfiguration#duration}
  */
  readonly duration?: string;
  /**
  * Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#expiration_time AzureVmMaintenanceConfiguration#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * he rate at which a maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#recur_every AzureVmMaintenanceConfiguration#recur_every}
  */
  readonly recurEvery?: string;
  /**
  * Effective start date of the maintenance window in YYYY-MM-DD HH:MM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#start_time AzureVmMaintenanceConfiguration#start_time}
  */
  readonly startTime: string;
  /**
  * The timezone on which maintenance should be scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#time_zone AzureVmMaintenanceConfiguration#time_zone}
  */
  readonly timeZone: string;
}

export function azureVmMaintenanceConfigurationWindowToTerraform(struct?: AzureVmMaintenanceConfigurationWindowOutputReference | AzureVmMaintenanceConfigurationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    recur_every: cdktf.stringToTerraform(struct!.recurEvery),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function azureVmMaintenanceConfigurationWindowToHclTerraform(struct?: AzureVmMaintenanceConfigurationWindowOutputReference | AzureVmMaintenanceConfigurationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.expirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recur_every: {
      value: cdktf.stringToHclTerraform(struct!.recurEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVmMaintenanceConfigurationWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVmMaintenanceConfigurationWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._recurEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurEvery = this._recurEvery;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVmMaintenanceConfigurationWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._expirationTime = undefined;
      this._recurEvery = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._expirationTime = value.expirationTime;
      this._recurEvery = value.recurEvery;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // recur_every - computed: true, optional: true, required: false
  private _recurEvery?: string; 
  public get recurEvery() {
    return this.getStringAttribute('recur_every');
  }
  public set recurEvery(value: string) {
    this._recurEvery = value;
  }
  public resetRecurEvery() {
    this._recurEvery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurEveryInput() {
    return this._recurEvery;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration duplocloud_azure_vm_maintenance_configuration}
*/
export class AzureVmMaintenanceConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_vm_maintenance_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureVmMaintenanceConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureVmMaintenanceConfiguration to import
  * @param importFromId The id of the existing AzureVmMaintenanceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureVmMaintenanceConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_vm_maintenance_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_vm_maintenance_configuration duplocloud_azure_vm_maintenance_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureVmMaintenanceConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AzureVmMaintenanceConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_vm_maintenance_configuration',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._tenantId = config.tenantId;
    this._visiblity = config.visiblity;
    this._vmName = config.vmName;
    this._timeouts.internalValue = config.timeouts;
    this._window.internalValue = config.window;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // visiblity - computed: false, optional: true, required: false
  private _visiblity?: string; 
  public get visiblity() {
    return this.getStringAttribute('visiblity');
  }
  public set visiblity(value: string) {
    this._visiblity = value;
  }
  public resetVisiblity() {
    this._visiblity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visiblityInput() {
    return this._visiblity;
  }

  // vm_name - computed: false, optional: false, required: true
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureVmMaintenanceConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureVmMaintenanceConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // window - computed: false, optional: true, required: false
  private _window = new AzureVmMaintenanceConfigurationWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: AzureVmMaintenanceConfigurationWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      visiblity: cdktf.stringToTerraform(this._visiblity),
      vm_name: cdktf.stringToTerraform(this._vmName),
      timeouts: azureVmMaintenanceConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      window: azureVmMaintenanceConfigurationWindowToTerraform(this._window.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visiblity: {
        value: cdktf.stringToHclTerraform(this._visiblity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_name: {
        value: cdktf.stringToHclTerraform(this._vmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: azureVmMaintenanceConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureVmMaintenanceConfigurationTimeouts",
      },
      window: {
        value: azureVmMaintenanceConfigurationWindowToHclTerraform(this._window.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVmMaintenanceConfigurationWindowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
