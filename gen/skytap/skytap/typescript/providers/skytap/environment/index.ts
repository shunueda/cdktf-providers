// https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined description of the environment. Limited to 1000 characters. UTF-8 character type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#description Environment#description}
  */
  readonly description: string;
  /**
  * If true, outbound internet is disabled for VMs in this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#disable_internet Environment#disable_internet}
  */
  readonly disableInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined name of the environment. Limited to 255 characters. UTF-8 character type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Indicates whether networks in the environment can send outbound traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#outbound_traffic Environment#outbound_traffic}
  */
  readonly outboundTraffic?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether networks within the environment can route traffic to one another
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#routable Environment#routable}
  */
  readonly routable?: boolean | cdktf.IResolvable;
  /**
  * The date and time that the environment will be automatically shut down. Format: yyyy/mm/dd hh:mm:ss. By default, the suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#shutdown_at_time Environment#shutdown_at_time}
  */
  readonly shutdownAtTime?: string;
  /**
  * The number of seconds an environment can be idle before it is automatically shut down. Valid range: 300 to 86400 seconds (5 minutes to 1 day)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#shutdown_on_idle Environment#shutdown_on_idle}
  */
  readonly shutdownOnIdle?: number;
  /**
  * The date and time that the environment will be automatically suspended. Format: yyyy/mm/dd hh:mm:ss. By default, the suspend time uses the UTC offset for the time zone defined in your user account settings. Optionally, a different UTC offset can be supplied (for example: 2018/07/20 14:20:00 -0000). The value in the API response is converted to your time zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#suspend_at_time Environment#suspend_at_time}
  */
  readonly suspendAtTime?: string;
  /**
  * The number of seconds an environment can be idle before it is automatically suspended. Valid range: 300 to 86400 seconds (5 minutes to 1 day)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#suspend_on_idle Environment#suspend_on_idle}
  */
  readonly suspendOnIdle?: number;
  /**
  * Set of environment tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#tags Environment#tags}
  */
  readonly tags?: string[];
  /**
  * ID of the template you want to create the environment from. If updated with a new ID, the environment will be recreated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#template_id Environment#template_id}
  */
  readonly templateId: string;
  /**
  * Environment user data, available from the metadata server and the Skytap API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#user_data Environment#user_data}
  */
  readonly userData?: string;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#label Environment#label}
  */
  readonly label?: EnvironmentLabel[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#timeouts Environment#timeouts}
  */
  readonly timeouts?: EnvironmentTimeouts;
}
export interface EnvironmentLabel {
  /**
  * Label category that provides contextual meaning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#category Environment#category}
  */
  readonly category: string;
  /**
  * Label valueto be used for reporting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#value Environment#value}
  */
  readonly value: string;
}

export function environmentLabelToTerraform(struct?: EnvironmentLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function environmentLabelToHclTerraform(struct?: EnvironmentLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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

export class EnvironmentLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._value = value.value;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

export class EnvironmentLabelList extends cdktf.ComplexList {
  public internalValue? : EnvironmentLabel[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentLabelOutputReference {
    return new EnvironmentLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#create Environment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#delete Environment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#update Environment#update}
  */
  readonly update?: string;
}

export function environmentTimeoutsToTerraform(struct?: EnvironmentTimeouts | cdktf.IResolvable): any {
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


export function environmentTimeoutsToHclTerraform(struct?: EnvironmentTimeouts | cdktf.IResolvable): any {
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

export class EnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment skytap_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "skytap_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "skytap_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/skytap/skytap/0.15.1/docs/resources/environment skytap_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'skytap_environment',
      terraformGeneratorMetadata: {
        providerName: 'skytap',
        providerVersion: '0.15.1',
        providerVersionConstraint: '0.15.1'
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
    this._disableInternet = config.disableInternet;
    this._id = config.id;
    this._name = config.name;
    this._outboundTraffic = config.outboundTraffic;
    this._routable = config.routable;
    this._shutdownAtTime = config.shutdownAtTime;
    this._shutdownOnIdle = config.shutdownOnIdle;
    this._suspendAtTime = config.suspendAtTime;
    this._suspendOnIdle = config.suspendOnIdle;
    this._tags = config.tags;
    this._templateId = config.templateId;
    this._userData = config.userData;
    this._label.internalValue = config.label;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_internet - computed: true, optional: true, required: false
  private _disableInternet?: boolean | cdktf.IResolvable; 
  public get disableInternet() {
    return this.getBooleanAttribute('disable_internet');
  }
  public set disableInternet(value: boolean | cdktf.IResolvable) {
    this._disableInternet = value;
  }
  public resetDisableInternet() {
    this._disableInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetInput() {
    return this._disableInternet;
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

  // outbound_traffic - computed: true, optional: true, required: false
  private _outboundTraffic?: boolean | cdktf.IResolvable; 
  public get outboundTraffic() {
    return this.getBooleanAttribute('outbound_traffic');
  }
  public set outboundTraffic(value: boolean | cdktf.IResolvable) {
    this._outboundTraffic = value;
  }
  public resetOutboundTraffic() {
    this._outboundTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTrafficInput() {
    return this._outboundTraffic;
  }

  // routable - computed: true, optional: true, required: false
  private _routable?: boolean | cdktf.IResolvable; 
  public get routable() {
    return this.getBooleanAttribute('routable');
  }
  public set routable(value: boolean | cdktf.IResolvable) {
    this._routable = value;
  }
  public resetRoutable() {
    this._routable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routableInput() {
    return this._routable;
  }

  // shutdown_at_time - computed: false, optional: true, required: false
  private _shutdownAtTime?: string; 
  public get shutdownAtTime() {
    return this.getStringAttribute('shutdown_at_time');
  }
  public set shutdownAtTime(value: string) {
    this._shutdownAtTime = value;
  }
  public resetShutdownAtTime() {
    this._shutdownAtTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownAtTimeInput() {
    return this._shutdownAtTime;
  }

  // shutdown_on_idle - computed: false, optional: true, required: false
  private _shutdownOnIdle?: number; 
  public get shutdownOnIdle() {
    return this.getNumberAttribute('shutdown_on_idle');
  }
  public set shutdownOnIdle(value: number) {
    this._shutdownOnIdle = value;
  }
  public resetShutdownOnIdle() {
    this._shutdownOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownOnIdleInput() {
    return this._shutdownOnIdle;
  }

  // suspend_at_time - computed: false, optional: true, required: false
  private _suspendAtTime?: string; 
  public get suspendAtTime() {
    return this.getStringAttribute('suspend_at_time');
  }
  public set suspendAtTime(value: string) {
    this._suspendAtTime = value;
  }
  public resetSuspendAtTime() {
    this._suspendAtTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendAtTimeInput() {
    return this._suspendAtTime;
  }

  // suspend_on_idle - computed: false, optional: true, required: false
  private _suspendOnIdle?: number; 
  public get suspendOnIdle() {
    return this.getNumberAttribute('suspend_on_idle');
  }
  public set suspendOnIdle(value: number) {
    this._suspendOnIdle = value;
  }
  public resetSuspendOnIdle() {
    this._suspendOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendOnIdleInput() {
    return this._suspendOnIdle;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // label - computed: false, optional: true, required: false
  private _label = new EnvironmentLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: EnvironmentLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EnvironmentTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      disable_internet: cdktf.booleanToTerraform(this._disableInternet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      outbound_traffic: cdktf.booleanToTerraform(this._outboundTraffic),
      routable: cdktf.booleanToTerraform(this._routable),
      shutdown_at_time: cdktf.stringToTerraform(this._shutdownAtTime),
      shutdown_on_idle: cdktf.numberToTerraform(this._shutdownOnIdle),
      suspend_at_time: cdktf.stringToTerraform(this._suspendAtTime),
      suspend_on_idle: cdktf.numberToTerraform(this._suspendOnIdle),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template_id: cdktf.stringToTerraform(this._templateId),
      user_data: cdktf.stringToTerraform(this._userData),
      label: cdktf.listMapper(environmentLabelToTerraform, true)(this._label.internalValue),
      timeouts: environmentTimeoutsToTerraform(this._timeouts.internalValue),
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
      disable_internet: {
        value: cdktf.booleanToHclTerraform(this._disableInternet),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_traffic: {
        value: cdktf.booleanToHclTerraform(this._outboundTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routable: {
        value: cdktf.booleanToHclTerraform(this._routable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_at_time: {
        value: cdktf.stringToHclTerraform(this._shutdownAtTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown_on_idle: {
        value: cdktf.numberToHclTerraform(this._shutdownOnIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suspend_at_time: {
        value: cdktf.stringToHclTerraform(this._suspendAtTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspend_on_idle: {
        value: cdktf.numberToHclTerraform(this._suspendOnIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.listMapperHcl(environmentLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnvironmentLabelList",
      },
      timeouts: {
        value: environmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
