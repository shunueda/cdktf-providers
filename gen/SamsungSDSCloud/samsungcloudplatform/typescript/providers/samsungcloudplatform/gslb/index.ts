// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbConfig extends cdktf.TerraformMetaArguments {
  /**
  * GSLB Algorithm. One of RATIO, RTT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_algorithm Gslb#gslb_algorithm}
  */
  readonly gslbAlgorithm: string;
  /**
  * GSLB Environment Usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_env_usage Gslb#gslb_env_usage}
  */
  readonly gslbEnvUsage: string;
  /**
  * GSLB Health Check Interval. (5 to 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_health_check_interval Gslb#gslb_health_check_interval}
  */
  readonly gslbHealthCheckInterval: number;
  /**
  * GSLB Health Check Timeout. (5 to 300, greater than gslb_health_check_interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_health_check_timeout Gslb#gslb_health_check_timeout}
  */
  readonly gslbHealthCheckTimeout: number;
  /**
  * GSLB Health Check User Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_health_check_user_id Gslb#gslb_health_check_user_id}
  */
  readonly gslbHealthCheckUserId?: string;
  /**
  * GSLB Health Check User Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_health_check_user_password Gslb#gslb_health_check_user_password}
  */
  readonly gslbHealthCheckUserPassword?: string;
  /**
  * GSLB Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_name Gslb#gslb_name}
  */
  readonly gslbName: string;
  /**
  * GSLB Health Check Response String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_response_string Gslb#gslb_response_string}
  */
  readonly gslbResponseString?: string;
  /**
  * GSLB Health Check Send String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_send_string Gslb#gslb_send_string}
  */
  readonly gslbSendString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#id Gslb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * GSLB Health Check Probe Timeout. (5 to 300),  It must be greater than the Heath Check Interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#probe_timeout Gslb#probe_timeout}
  */
  readonly probeTimeout: number;
  /**
  * GSLB Health Check Protocol. One of ICMP, TCP, HTTP, HTTPS, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#protocol Gslb#protocol}
  */
  readonly protocol: string;
  /**
  * GSLB Health Check Service Port. (5 to 300),  It must be greater than the Heath Check Interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#service_port Gslb#service_port}
  */
  readonly servicePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#tags Gslb#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * gslb_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_resources Gslb#gslb_resources}
  */
  readonly gslbResources: GslbGslbResources[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#timeouts Gslb#timeouts}
  */
  readonly timeouts?: GslbTimeouts;
}
export interface GslbGslbResources {
  /**
  * Gslb Resource Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_destination Gslb#gslb_destination}
  */
  readonly gslbDestination: string;
  /**
  * Gslb Resource Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_region Gslb#gslb_region}
  */
  readonly gslbRegion: string;
  /**
  * Gslb Resource Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_resource_description Gslb#gslb_resource_description}
  */
  readonly gslbResourceDescription?: string;
  /**
  * Gslb Resource Disabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_resource_disable Gslb#gslb_resource_disable}
  */
  readonly gslbResourceDisable?: boolean | cdktf.IResolvable;
  /**
  * Gslb Resource Weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#gslb_resource_weight Gslb#gslb_resource_weight}
  */
  readonly gslbResourceWeight?: number;
}

export function gslbGslbResourcesToTerraform(struct?: GslbGslbResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_destination: cdktf.stringToTerraform(struct!.gslbDestination),
    gslb_region: cdktf.stringToTerraform(struct!.gslbRegion),
    gslb_resource_description: cdktf.stringToTerraform(struct!.gslbResourceDescription),
    gslb_resource_disable: cdktf.booleanToTerraform(struct!.gslbResourceDisable),
    gslb_resource_weight: cdktf.numberToTerraform(struct!.gslbResourceWeight),
  }
}


export function gslbGslbResourcesToHclTerraform(struct?: GslbGslbResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_destination: {
      value: cdktf.stringToHclTerraform(struct!.gslbDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_region: {
      value: cdktf.stringToHclTerraform(struct!.gslbRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_resource_description: {
      value: cdktf.stringToHclTerraform(struct!.gslbResourceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_resource_disable: {
      value: cdktf.booleanToHclTerraform(struct!.gslbResourceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gslb_resource_weight: {
      value: cdktf.numberToHclTerraform(struct!.gslbResourceWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbGslbResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbGslbResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDestination = this._gslbDestination;
    }
    if (this._gslbRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbRegion = this._gslbRegion;
    }
    if (this._gslbResourceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResourceDescription = this._gslbResourceDescription;
    }
    if (this._gslbResourceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResourceDisable = this._gslbResourceDisable;
    }
    if (this._gslbResourceWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbResourceWeight = this._gslbResourceWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbGslbResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gslbDestination = undefined;
      this._gslbRegion = undefined;
      this._gslbResourceDescription = undefined;
      this._gslbResourceDisable = undefined;
      this._gslbResourceWeight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gslbDestination = value.gslbDestination;
      this._gslbRegion = value.gslbRegion;
      this._gslbResourceDescription = value.gslbResourceDescription;
      this._gslbResourceDisable = value.gslbResourceDisable;
      this._gslbResourceWeight = value.gslbResourceWeight;
    }
  }

  // gslb_destination - computed: false, optional: false, required: true
  private _gslbDestination?: string; 
  public get gslbDestination() {
    return this.getStringAttribute('gslb_destination');
  }
  public set gslbDestination(value: string) {
    this._gslbDestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDestinationInput() {
    return this._gslbDestination;
  }

  // gslb_region - computed: false, optional: false, required: true
  private _gslbRegion?: string; 
  public get gslbRegion() {
    return this.getStringAttribute('gslb_region');
  }
  public set gslbRegion(value: string) {
    this._gslbRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbRegionInput() {
    return this._gslbRegion;
  }

  // gslb_resource_description - computed: false, optional: true, required: false
  private _gslbResourceDescription?: string; 
  public get gslbResourceDescription() {
    return this.getStringAttribute('gslb_resource_description');
  }
  public set gslbResourceDescription(value: string) {
    this._gslbResourceDescription = value;
  }
  public resetGslbResourceDescription() {
    this._gslbResourceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResourceDescriptionInput() {
    return this._gslbResourceDescription;
  }

  // gslb_resource_disable - computed: false, optional: true, required: false
  private _gslbResourceDisable?: boolean | cdktf.IResolvable; 
  public get gslbResourceDisable() {
    return this.getBooleanAttribute('gslb_resource_disable');
  }
  public set gslbResourceDisable(value: boolean | cdktf.IResolvable) {
    this._gslbResourceDisable = value;
  }
  public resetGslbResourceDisable() {
    this._gslbResourceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResourceDisableInput() {
    return this._gslbResourceDisable;
  }

  // gslb_resource_weight - computed: false, optional: true, required: false
  private _gslbResourceWeight?: number; 
  public get gslbResourceWeight() {
    return this.getNumberAttribute('gslb_resource_weight');
  }
  public set gslbResourceWeight(value: number) {
    this._gslbResourceWeight = value;
  }
  public resetGslbResourceWeight() {
    this._gslbResourceWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResourceWeightInput() {
    return this._gslbResourceWeight;
  }
}

export class GslbGslbResourcesList extends cdktf.ComplexList {
  public internalValue? : GslbGslbResources[] | cdktf.IResolvable

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
  public get(index: number): GslbGslbResourcesOutputReference {
    return new GslbGslbResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#create Gslb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#delete Gslb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#update Gslb#update}
  */
  readonly update?: string;
}

export function gslbTimeoutsToTerraform(struct?: GslbTimeouts | cdktf.IResolvable): any {
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


export function gslbTimeoutsToHclTerraform(struct?: GslbTimeouts | cdktf.IResolvable): any {
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

export class GslbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GslbTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb samsungcloudplatform_gslb}
*/
export class Gslb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_gslb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslb to import
  * @param importFromId The id of the existing Gslb that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_gslb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/gslb samsungcloudplatform_gslb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbConfig
  */
  public constructor(scope: Construct, id: string, config: GslbConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_gslb',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gslbAlgorithm = config.gslbAlgorithm;
    this._gslbEnvUsage = config.gslbEnvUsage;
    this._gslbHealthCheckInterval = config.gslbHealthCheckInterval;
    this._gslbHealthCheckTimeout = config.gslbHealthCheckTimeout;
    this._gslbHealthCheckUserId = config.gslbHealthCheckUserId;
    this._gslbHealthCheckUserPassword = config.gslbHealthCheckUserPassword;
    this._gslbName = config.gslbName;
    this._gslbResponseString = config.gslbResponseString;
    this._gslbSendString = config.gslbSendString;
    this._id = config.id;
    this._probeTimeout = config.probeTimeout;
    this._protocol = config.protocol;
    this._servicePort = config.servicePort;
    this._tags = config.tags;
    this._gslbResources.internalValue = config.gslbResources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gslb_algorithm - computed: false, optional: false, required: true
  private _gslbAlgorithm?: string; 
  public get gslbAlgorithm() {
    return this.getStringAttribute('gslb_algorithm');
  }
  public set gslbAlgorithm(value: string) {
    this._gslbAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbAlgorithmInput() {
    return this._gslbAlgorithm;
  }

  // gslb_env_usage - computed: false, optional: false, required: true
  private _gslbEnvUsage?: string; 
  public get gslbEnvUsage() {
    return this.getStringAttribute('gslb_env_usage');
  }
  public set gslbEnvUsage(value: string) {
    this._gslbEnvUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbEnvUsageInput() {
    return this._gslbEnvUsage;
  }

  // gslb_health_check_interval - computed: false, optional: false, required: true
  private _gslbHealthCheckInterval?: number; 
  public get gslbHealthCheckInterval() {
    return this.getNumberAttribute('gslb_health_check_interval');
  }
  public set gslbHealthCheckInterval(value: number) {
    this._gslbHealthCheckInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbHealthCheckIntervalInput() {
    return this._gslbHealthCheckInterval;
  }

  // gslb_health_check_timeout - computed: false, optional: false, required: true
  private _gslbHealthCheckTimeout?: number; 
  public get gslbHealthCheckTimeout() {
    return this.getNumberAttribute('gslb_health_check_timeout');
  }
  public set gslbHealthCheckTimeout(value: number) {
    this._gslbHealthCheckTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbHealthCheckTimeoutInput() {
    return this._gslbHealthCheckTimeout;
  }

  // gslb_health_check_user_id - computed: false, optional: true, required: false
  private _gslbHealthCheckUserId?: string; 
  public get gslbHealthCheckUserId() {
    return this.getStringAttribute('gslb_health_check_user_id');
  }
  public set gslbHealthCheckUserId(value: string) {
    this._gslbHealthCheckUserId = value;
  }
  public resetGslbHealthCheckUserId() {
    this._gslbHealthCheckUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbHealthCheckUserIdInput() {
    return this._gslbHealthCheckUserId;
  }

  // gslb_health_check_user_password - computed: false, optional: true, required: false
  private _gslbHealthCheckUserPassword?: string; 
  public get gslbHealthCheckUserPassword() {
    return this.getStringAttribute('gslb_health_check_user_password');
  }
  public set gslbHealthCheckUserPassword(value: string) {
    this._gslbHealthCheckUserPassword = value;
  }
  public resetGslbHealthCheckUserPassword() {
    this._gslbHealthCheckUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbHealthCheckUserPasswordInput() {
    return this._gslbHealthCheckUserPassword;
  }

  // gslb_name - computed: false, optional: false, required: true
  private _gslbName?: string; 
  public get gslbName() {
    return this.getStringAttribute('gslb_name');
  }
  public set gslbName(value: string) {
    this._gslbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbNameInput() {
    return this._gslbName;
  }

  // gslb_response_string - computed: false, optional: true, required: false
  private _gslbResponseString?: string; 
  public get gslbResponseString() {
    return this.getStringAttribute('gslb_response_string');
  }
  public set gslbResponseString(value: string) {
    this._gslbResponseString = value;
  }
  public resetGslbResponseString() {
    this._gslbResponseString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResponseStringInput() {
    return this._gslbResponseString;
  }

  // gslb_send_string - computed: false, optional: true, required: false
  private _gslbSendString?: string; 
  public get gslbSendString() {
    return this.getStringAttribute('gslb_send_string');
  }
  public set gslbSendString(value: string) {
    this._gslbSendString = value;
  }
  public resetGslbSendString() {
    this._gslbSendString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSendStringInput() {
    return this._gslbSendString;
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

  // probe_timeout - computed: false, optional: false, required: true
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_port - computed: false, optional: true, required: false
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  public resetServicePort() {
    this._servicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
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

  // gslb_resources - computed: false, optional: false, required: true
  private _gslbResources = new GslbGslbResourcesList(this, "gslb_resources", true);
  public get gslbResources() {
    return this._gslbResources;
  }
  public putGslbResources(value: GslbGslbResources[] | cdktf.IResolvable) {
    this._gslbResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbResourcesInput() {
    return this._gslbResources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GslbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GslbTimeouts) {
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
      gslb_algorithm: cdktf.stringToTerraform(this._gslbAlgorithm),
      gslb_env_usage: cdktf.stringToTerraform(this._gslbEnvUsage),
      gslb_health_check_interval: cdktf.numberToTerraform(this._gslbHealthCheckInterval),
      gslb_health_check_timeout: cdktf.numberToTerraform(this._gslbHealthCheckTimeout),
      gslb_health_check_user_id: cdktf.stringToTerraform(this._gslbHealthCheckUserId),
      gslb_health_check_user_password: cdktf.stringToTerraform(this._gslbHealthCheckUserPassword),
      gslb_name: cdktf.stringToTerraform(this._gslbName),
      gslb_response_string: cdktf.stringToTerraform(this._gslbResponseString),
      gslb_send_string: cdktf.stringToTerraform(this._gslbSendString),
      id: cdktf.stringToTerraform(this._id),
      probe_timeout: cdktf.numberToTerraform(this._probeTimeout),
      protocol: cdktf.stringToTerraform(this._protocol),
      service_port: cdktf.numberToTerraform(this._servicePort),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      gslb_resources: cdktf.listMapper(gslbGslbResourcesToTerraform, true)(this._gslbResources.internalValue),
      timeouts: gslbTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gslb_algorithm: {
        value: cdktf.stringToHclTerraform(this._gslbAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_env_usage: {
        value: cdktf.stringToHclTerraform(this._gslbEnvUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_health_check_interval: {
        value: cdktf.numberToHclTerraform(this._gslbHealthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_health_check_timeout: {
        value: cdktf.numberToHclTerraform(this._gslbHealthCheckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb_health_check_user_id: {
        value: cdktf.stringToHclTerraform(this._gslbHealthCheckUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_health_check_user_password: {
        value: cdktf.stringToHclTerraform(this._gslbHealthCheckUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_name: {
        value: cdktf.stringToHclTerraform(this._gslbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_response_string: {
        value: cdktf.stringToHclTerraform(this._gslbResponseString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_send_string: {
        value: cdktf.stringToHclTerraform(this._gslbSendString),
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
      probe_timeout: {
        value: cdktf.numberToHclTerraform(this._probeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_port: {
        value: cdktf.numberToHclTerraform(this._servicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gslb_resources: {
        value: cdktf.listMapperHcl(gslbGslbResourcesToHclTerraform, true)(this._gslbResources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbGslbResourcesList",
      },
      timeouts: {
        value: gslbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GslbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
