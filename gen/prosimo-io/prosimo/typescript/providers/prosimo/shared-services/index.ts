// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SharedServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set this to true if you would like to decommission an already onboarded Shared Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#decommission SharedServices#decommission}
  */
  readonly decommission: boolean | cdktf.IResolvable;
  /**
  * Name of the Shared Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#name SharedServices#name}
  */
  readonly name: string;
  /**
  * Set this to true if you would like to onboard  a saved Shared Service with out any config changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#onboard SharedServices#onboard}
  */
  readonly onboard: boolean | cdktf.IResolvable;
  /**
  * Type of Shared Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#service_type SharedServices#service_type}
  */
  readonly serviceType?: string;
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#wait_for_rollout SharedServices#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * region block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#region SharedServices#region}
  */
  readonly region?: SharedServicesRegion[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#timeouts SharedServices#timeouts}
  */
  readonly timeouts?: SharedServicesTimeouts;
}
export interface SharedServicesRegion {
  /**
  * cloud account under which application is hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#cloud_creds_name SharedServices#cloud_creds_name}
  */
  readonly cloudCredsName: string;
  /**
  * EX: us-west-2, eu-east-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#cloud_region SharedServices#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Gateway Load Balance Service Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#gateway_lb SharedServices#gateway_lb}
  */
  readonly gatewayLb: string;
  /**
  * Resource group name, applicable only for AZURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#resource_group SharedServices#resource_group}
  */
  readonly resourceGroup?: string;
}

export function sharedServicesRegionToTerraform(struct?: SharedServicesRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_creds_name: cdktf.stringToTerraform(struct!.cloudCredsName),
    cloud_region: cdktf.stringToTerraform(struct!.cloudRegion),
    gateway_lb: cdktf.stringToTerraform(struct!.gatewayLb),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function sharedServicesRegionToHclTerraform(struct?: SharedServicesRegion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_creds_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudCredsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_region: {
      value: cdktf.stringToHclTerraform(struct!.cloudRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_lb: {
      value: cdktf.stringToHclTerraform(struct!.gatewayLb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedServicesRegionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SharedServicesRegion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudCredsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCredsName = this._cloudCredsName;
    }
    if (this._cloudRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRegion = this._cloudRegion;
    }
    if (this._gatewayLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayLb = this._gatewayLb;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedServicesRegion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudCredsName = undefined;
      this._cloudRegion = undefined;
      this._gatewayLb = undefined;
      this._resourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudCredsName = value.cloudCredsName;
      this._cloudRegion = value.cloudRegion;
      this._gatewayLb = value.gatewayLb;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // cloud_creds_name - computed: false, optional: false, required: true
  private _cloudCredsName?: string; 
  public get cloudCredsName() {
    return this.getStringAttribute('cloud_creds_name');
  }
  public set cloudCredsName(value: string) {
    this._cloudCredsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsNameInput() {
    return this._cloudCredsName;
  }

  // cloud_region - computed: false, optional: false, required: true
  private _cloudRegion?: string; 
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }
  public set cloudRegion(value: string) {
    this._cloudRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // gateway_lb - computed: false, optional: false, required: true
  private _gatewayLb?: string; 
  public get gatewayLb() {
    return this.getStringAttribute('gateway_lb');
  }
  public set gatewayLb(value: string) {
    this._gatewayLb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayLbInput() {
    return this._gatewayLb;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}

export class SharedServicesRegionList extends cdktf.ComplexList {
  public internalValue? : SharedServicesRegion[] | cdktf.IResolvable

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
  public get(index: number): SharedServicesRegionOutputReference {
    return new SharedServicesRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SharedServicesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#create SharedServices#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#delete SharedServices#delete}
  */
  readonly delete?: string;
}

export function sharedServicesTimeoutsToTerraform(struct?: SharedServicesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function sharedServicesTimeoutsToHclTerraform(struct?: SharedServicesTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SharedServicesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SharedServicesTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SharedServicesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services prosimo_shared_services}
*/
export class SharedServices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_shared_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SharedServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SharedServices to import
  * @param importFromId The id of the existing SharedServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SharedServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_shared_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/shared_services prosimo_shared_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SharedServicesConfig
  */
  public constructor(scope: Construct, id: string, config: SharedServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_shared_services',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._decommission = config.decommission;
    this._name = config.name;
    this._onboard = config.onboard;
    this._serviceType = config.serviceType;
    this._waitForRollout = config.waitForRollout;
    this._region.internalValue = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decommission - computed: false, optional: false, required: true
  private _decommission?: boolean | cdktf.IResolvable; 
  public get decommission() {
    return this.getBooleanAttribute('decommission');
  }
  public set decommission(value: boolean | cdktf.IResolvable) {
    this._decommission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionInput() {
    return this._decommission;
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

  // onboard - computed: false, optional: false, required: true
  private _onboard?: boolean | cdktf.IResolvable; 
  public get onboard() {
    return this.getBooleanAttribute('onboard');
  }
  public set onboard(value: boolean | cdktf.IResolvable) {
    this._onboard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardInput() {
    return this._onboard;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // region - computed: false, optional: true, required: false
  private _region = new SharedServicesRegionList(this, "region", true);
  public get region() {
    return this._region;
  }
  public putRegion(value: SharedServicesRegion[] | cdktf.IResolvable) {
    this._region.internalValue = value;
  }
  public resetRegion() {
    this._region.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SharedServicesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SharedServicesTimeouts) {
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
      decommission: cdktf.booleanToTerraform(this._decommission),
      name: cdktf.stringToTerraform(this._name),
      onboard: cdktf.booleanToTerraform(this._onboard),
      service_type: cdktf.stringToTerraform(this._serviceType),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      region: cdktf.listMapper(sharedServicesRegionToTerraform, true)(this._region.internalValue),
      timeouts: sharedServicesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      decommission: {
        value: cdktf.booleanToHclTerraform(this._decommission),
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
      onboard: {
        value: cdktf.booleanToHclTerraform(this._onboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.listMapperHcl(sharedServicesRegionToHclTerraform, true)(this._region.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SharedServicesRegionList",
      },
      timeouts: {
        value: sharedServicesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SharedServicesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
