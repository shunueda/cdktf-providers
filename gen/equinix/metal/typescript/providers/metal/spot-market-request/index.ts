// https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpotMarketRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number devices to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#devices_max SpotMarketRequest#devices_max}
  */
  readonly devicesMax: number;
  /**
  * Miniumum number devices to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#devices_min SpotMarketRequest#devices_min}
  */
  readonly devicesMin: number;
  /**
  * Facility IDs where devices should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#facilities SpotMarketRequest#facilities}
  */
  readonly facilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#id SpotMarketRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum price user is willing to pay per hour per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#max_bid_price SpotMarketRequest#max_bid_price}
  */
  readonly maxBidPrice: number;
  /**
  * Metro where devices should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#metro SpotMarketRequest#metro}
  */
  readonly metro?: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#project_id SpotMarketRequest#project_id}
  */
  readonly projectId: string;
  /**
  * On resource creation - wait until all desired devices are active, on resource destruction - wait until devices are removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#wait_for_devices SpotMarketRequest#wait_for_devices}
  */
  readonly waitForDevices?: boolean | cdktf.IResolvable;
  /**
  * instance_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#instance_parameters SpotMarketRequest#instance_parameters}
  */
  readonly instanceParameters: SpotMarketRequestInstanceParameters;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#timeouts SpotMarketRequest#timeouts}
  */
  readonly timeouts?: SpotMarketRequestTimeouts;
}
export interface SpotMarketRequestInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#always_pxe SpotMarketRequest#always_pxe}
  */
  readonly alwaysPxe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#billing_cycle SpotMarketRequest#billing_cycle}
  */
  readonly billingCycle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#customdata SpotMarketRequest#customdata}
  */
  readonly customdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#description SpotMarketRequest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#features SpotMarketRequest#features}
  */
  readonly features?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#hostname SpotMarketRequest#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#ipxe_script_url SpotMarketRequest#ipxe_script_url}
  */
  readonly ipxeScriptUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#locked SpotMarketRequest#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#operating_system SpotMarketRequest#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#plan SpotMarketRequest#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#project_ssh_keys SpotMarketRequest#project_ssh_keys}
  */
  readonly projectSshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#tags SpotMarketRequest#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#user_ssh_keys SpotMarketRequest#user_ssh_keys}
  */
  readonly userSshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#userdata SpotMarketRequest#userdata}
  */
  readonly userdata?: string;
}

export function spotMarketRequestInstanceParametersToTerraform(struct?: SpotMarketRequestInstanceParametersOutputReference | SpotMarketRequestInstanceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_pxe: cdktf.booleanToTerraform(struct!.alwaysPxe),
    billing_cycle: cdktf.stringToTerraform(struct!.billingCycle),
    customdata: cdktf.stringToTerraform(struct!.customdata),
    description: cdktf.stringToTerraform(struct!.description),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ipxe_script_url: cdktf.stringToTerraform(struct!.ipxeScriptUrl),
    locked: cdktf.booleanToTerraform(struct!.locked),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    plan: cdktf.stringToTerraform(struct!.plan),
    project_ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectSshKeys),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    user_ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userSshKeys),
    userdata: cdktf.stringToTerraform(struct!.userdata),
  }
}


export function spotMarketRequestInstanceParametersToHclTerraform(struct?: SpotMarketRequestInstanceParametersOutputReference | SpotMarketRequestInstanceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_pxe: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysPxe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    billing_cycle: {
      value: cdktf.stringToHclTerraform(struct!.billingCycle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customdata: {
      value: cdktf.stringToHclTerraform(struct!.customdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipxe_script_url: {
      value: cdktf.stringToHclTerraform(struct!.ipxeScriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectSshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userSshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    userdata: {
      value: cdktf.stringToHclTerraform(struct!.userdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpotMarketRequestInstanceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpotMarketRequestInstanceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysPxe !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysPxe = this._alwaysPxe;
    }
    if (this._billingCycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingCycle = this._billingCycle;
    }
    if (this._customdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.customdata = this._customdata;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipxeScriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipxeScriptUrl = this._ipxeScriptUrl;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._projectSshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectSshKeys = this._projectSshKeys;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userSshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSshKeys = this._userSshKeys;
    }
    if (this._userdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdata = this._userdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpotMarketRequestInstanceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysPxe = undefined;
      this._billingCycle = undefined;
      this._customdata = undefined;
      this._description = undefined;
      this._features = undefined;
      this._hostname = undefined;
      this._ipxeScriptUrl = undefined;
      this._locked = undefined;
      this._operatingSystem = undefined;
      this._plan = undefined;
      this._projectSshKeys = undefined;
      this._tags = undefined;
      this._userSshKeys = undefined;
      this._userdata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysPxe = value.alwaysPxe;
      this._billingCycle = value.billingCycle;
      this._customdata = value.customdata;
      this._description = value.description;
      this._features = value.features;
      this._hostname = value.hostname;
      this._ipxeScriptUrl = value.ipxeScriptUrl;
      this._locked = value.locked;
      this._operatingSystem = value.operatingSystem;
      this._plan = value.plan;
      this._projectSshKeys = value.projectSshKeys;
      this._tags = value.tags;
      this._userSshKeys = value.userSshKeys;
      this._userdata = value.userdata;
    }
  }

  // always_pxe - computed: false, optional: true, required: false
  private _alwaysPxe?: boolean | cdktf.IResolvable; 
  public get alwaysPxe() {
    return this.getBooleanAttribute('always_pxe');
  }
  public set alwaysPxe(value: boolean | cdktf.IResolvable) {
    this._alwaysPxe = value;
  }
  public resetAlwaysPxe() {
    this._alwaysPxe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysPxeInput() {
    return this._alwaysPxe;
  }

  // billing_cycle - computed: false, optional: false, required: true
  private _billingCycle?: string; 
  public get billingCycle() {
    return this.getStringAttribute('billing_cycle');
  }
  public set billingCycle(value: string) {
    this._billingCycle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCycleInput() {
    return this._billingCycle;
  }

  // customdata - computed: false, optional: true, required: false
  private _customdata?: string; 
  public get customdata() {
    return this.getStringAttribute('customdata');
  }
  public set customdata(value: string) {
    this._customdata = value;
  }
  public resetCustomdata() {
    this._customdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customdataInput() {
    return this._customdata;
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

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ipxe_script_url - computed: false, optional: true, required: false
  private _ipxeScriptUrl?: string; 
  public get ipxeScriptUrl() {
    return this.getStringAttribute('ipxe_script_url');
  }
  public set ipxeScriptUrl(value: string) {
    this._ipxeScriptUrl = value;
  }
  public resetIpxeScriptUrl() {
    this._ipxeScriptUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipxeScriptUrlInput() {
    return this._ipxeScriptUrl;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // project_ssh_keys - computed: false, optional: true, required: false
  private _projectSshKeys?: string[]; 
  public get projectSshKeys() {
    return this.getListAttribute('project_ssh_keys');
  }
  public set projectSshKeys(value: string[]) {
    this._projectSshKeys = value;
  }
  public resetProjectSshKeys() {
    this._projectSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSshKeysInput() {
    return this._projectSshKeys;
  }

  // tags - computed: false, optional: true, required: false
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

  // termintation_time - computed: true, optional: false, required: false
  public get termintationTime() {
    return this.getStringAttribute('termintation_time');
  }

  // user_ssh_keys - computed: false, optional: true, required: false
  private _userSshKeys?: string[]; 
  public get userSshKeys() {
    return this.getListAttribute('user_ssh_keys');
  }
  public set userSshKeys(value: string[]) {
    this._userSshKeys = value;
  }
  public resetUserSshKeys() {
    this._userSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSshKeysInput() {
    return this._userSshKeys;
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }
}
export interface SpotMarketRequestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#create SpotMarketRequest#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#delete SpotMarketRequest#delete}
  */
  readonly delete?: string;
}

export function spotMarketRequestTimeoutsToTerraform(struct?: SpotMarketRequestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function spotMarketRequestTimeoutsToHclTerraform(struct?: SpotMarketRequestTimeouts | cdktf.IResolvable): any {
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

export class SpotMarketRequestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpotMarketRequestTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpotMarketRequestTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request metal_spot_market_request}
*/
export class SpotMarketRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "metal_spot_market_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpotMarketRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpotMarketRequest to import
  * @param importFromId The id of the existing SpotMarketRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpotMarketRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "metal_spot_market_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/metal/3.3.0/docs/resources/spot_market_request metal_spot_market_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpotMarketRequestConfig
  */
  public constructor(scope: Construct, id: string, config: SpotMarketRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'metal_spot_market_request',
      terraformGeneratorMetadata: {
        providerName: 'metal',
        providerVersion: '3.3.0',
        providerVersionConstraint: '3.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._devicesMax = config.devicesMax;
    this._devicesMin = config.devicesMin;
    this._facilities = config.facilities;
    this._id = config.id;
    this._maxBidPrice = config.maxBidPrice;
    this._metro = config.metro;
    this._projectId = config.projectId;
    this._waitForDevices = config.waitForDevices;
    this._instanceParameters.internalValue = config.instanceParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // devices_max - computed: false, optional: false, required: true
  private _devicesMax?: number; 
  public get devicesMax() {
    return this.getNumberAttribute('devices_max');
  }
  public set devicesMax(value: number) {
    this._devicesMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesMaxInput() {
    return this._devicesMax;
  }

  // devices_min - computed: false, optional: false, required: true
  private _devicesMin?: number; 
  public get devicesMin() {
    return this.getNumberAttribute('devices_min');
  }
  public set devicesMin(value: number) {
    this._devicesMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesMinInput() {
    return this._devicesMin;
  }

  // facilities - computed: true, optional: true, required: false
  private _facilities?: string[]; 
  public get facilities() {
    return this.getListAttribute('facilities');
  }
  public set facilities(value: string[]) {
    this._facilities = value;
  }
  public resetFacilities() {
    this._facilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilitiesInput() {
    return this._facilities;
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

  // max_bid_price - computed: false, optional: false, required: true
  private _maxBidPrice?: number; 
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number) {
    this._maxBidPrice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBidPriceInput() {
    return this._maxBidPrice;
  }

  // metro - computed: false, optional: true, required: false
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  public resetMetro() {
    this._metro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // wait_for_devices - computed: false, optional: true, required: false
  private _waitForDevices?: boolean | cdktf.IResolvable; 
  public get waitForDevices() {
    return this.getBooleanAttribute('wait_for_devices');
  }
  public set waitForDevices(value: boolean | cdktf.IResolvable) {
    this._waitForDevices = value;
  }
  public resetWaitForDevices() {
    this._waitForDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDevicesInput() {
    return this._waitForDevices;
  }

  // instance_parameters - computed: false, optional: false, required: true
  private _instanceParameters = new SpotMarketRequestInstanceParametersOutputReference(this, "instance_parameters");
  public get instanceParameters() {
    return this._instanceParameters;
  }
  public putInstanceParameters(value: SpotMarketRequestInstanceParameters) {
    this._instanceParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceParametersInput() {
    return this._instanceParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpotMarketRequestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpotMarketRequestTimeouts) {
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
      devices_max: cdktf.numberToTerraform(this._devicesMax),
      devices_min: cdktf.numberToTerraform(this._devicesMin),
      facilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._facilities),
      id: cdktf.stringToTerraform(this._id),
      max_bid_price: cdktf.numberToTerraform(this._maxBidPrice),
      metro: cdktf.stringToTerraform(this._metro),
      project_id: cdktf.stringToTerraform(this._projectId),
      wait_for_devices: cdktf.booleanToTerraform(this._waitForDevices),
      instance_parameters: spotMarketRequestInstanceParametersToTerraform(this._instanceParameters.internalValue),
      timeouts: spotMarketRequestTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      devices_max: {
        value: cdktf.numberToHclTerraform(this._devicesMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      devices_min: {
        value: cdktf.numberToHclTerraform(this._devicesMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      facilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._facilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_bid_price: {
        value: cdktf.numberToHclTerraform(this._maxBidPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_devices: {
        value: cdktf.booleanToHclTerraform(this._waitForDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_parameters: {
        value: spotMarketRequestInstanceParametersToHclTerraform(this._instanceParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpotMarketRequestInstanceParametersList",
      },
      timeouts: {
        value: spotMarketRequestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpotMarketRequestTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
