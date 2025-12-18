// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudBridgeAssetSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#are_historical_metrics_collected CloudBridgeAssetSource#are_historical_metrics_collected}
  */
  readonly areHistoricalMetricsCollected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#are_realtime_metrics_collected CloudBridgeAssetSource#are_realtime_metrics_collected}
  */
  readonly areRealtimeMetricsCollected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#assets_compartment_id CloudBridgeAssetSource#assets_compartment_id}
  */
  readonly assetsCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#compartment_id CloudBridgeAssetSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#defined_tags CloudBridgeAssetSource#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#discovery_schedule_id CloudBridgeAssetSource#discovery_schedule_id}
  */
  readonly discoveryScheduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#display_name CloudBridgeAssetSource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#environment_id CloudBridgeAssetSource#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#freeform_tags CloudBridgeAssetSource#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#id CloudBridgeAssetSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#inventory_id CloudBridgeAssetSource#inventory_id}
  */
  readonly inventoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#system_tags CloudBridgeAssetSource#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#vcenter_endpoint CloudBridgeAssetSource#vcenter_endpoint}
  */
  readonly vcenterEndpoint: string;
  /**
  * discovery_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#discovery_credentials CloudBridgeAssetSource#discovery_credentials}
  */
  readonly discoveryCredentials: CloudBridgeAssetSourceDiscoveryCredentials;
  /**
  * replication_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#replication_credentials CloudBridgeAssetSource#replication_credentials}
  */
  readonly replicationCredentials?: CloudBridgeAssetSourceReplicationCredentials;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#timeouts CloudBridgeAssetSource#timeouts}
  */
  readonly timeouts?: CloudBridgeAssetSourceTimeouts;
}
export interface CloudBridgeAssetSourceDiscoveryCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}
  */
  readonly type: string;
}

export function cloudBridgeAssetSourceDiscoveryCredentialsToTerraform(struct?: CloudBridgeAssetSourceDiscoveryCredentialsOutputReference | CloudBridgeAssetSourceDiscoveryCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudBridgeAssetSourceDiscoveryCredentialsToHclTerraform(struct?: CloudBridgeAssetSourceDiscoveryCredentialsOutputReference | CloudBridgeAssetSourceDiscoveryCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
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

export class CloudBridgeAssetSourceDiscoveryCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetSourceDiscoveryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetSourceDiscoveryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
      this._type = value.type;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // type - computed: false, optional: false, required: true
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
export interface CloudBridgeAssetSourceReplicationCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#secret_id CloudBridgeAssetSource#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#type CloudBridgeAssetSource#type}
  */
  readonly type: string;
}

export function cloudBridgeAssetSourceReplicationCredentialsToTerraform(struct?: CloudBridgeAssetSourceReplicationCredentialsOutputReference | CloudBridgeAssetSourceReplicationCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudBridgeAssetSourceReplicationCredentialsToHclTerraform(struct?: CloudBridgeAssetSourceReplicationCredentialsOutputReference | CloudBridgeAssetSourceReplicationCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
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

export class CloudBridgeAssetSourceReplicationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudBridgeAssetSourceReplicationCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudBridgeAssetSourceReplicationCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
      this._type = value.type;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // type - computed: false, optional: false, required: true
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
export interface CloudBridgeAssetSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#create CloudBridgeAssetSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#delete CloudBridgeAssetSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#update CloudBridgeAssetSource#update}
  */
  readonly update?: string;
}

export function cloudBridgeAssetSourceTimeoutsToTerraform(struct?: CloudBridgeAssetSourceTimeouts | cdktf.IResolvable): any {
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


export function cloudBridgeAssetSourceTimeoutsToHclTerraform(struct?: CloudBridgeAssetSourceTimeouts | cdktf.IResolvable): any {
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

export class CloudBridgeAssetSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudBridgeAssetSourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudBridgeAssetSourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source oci_cloud_bridge_asset_source}
*/
export class CloudBridgeAssetSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_bridge_asset_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudBridgeAssetSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudBridgeAssetSource to import
  * @param importFromId The id of the existing CloudBridgeAssetSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudBridgeAssetSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_bridge_asset_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/cloud_bridge_asset_source oci_cloud_bridge_asset_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudBridgeAssetSourceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudBridgeAssetSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_bridge_asset_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areHistoricalMetricsCollected = config.areHistoricalMetricsCollected;
    this._areRealtimeMetricsCollected = config.areRealtimeMetricsCollected;
    this._assetsCompartmentId = config.assetsCompartmentId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._discoveryScheduleId = config.discoveryScheduleId;
    this._displayName = config.displayName;
    this._environmentId = config.environmentId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._inventoryId = config.inventoryId;
    this._systemTags = config.systemTags;
    this._type = config.type;
    this._vcenterEndpoint = config.vcenterEndpoint;
    this._discoveryCredentials.internalValue = config.discoveryCredentials;
    this._replicationCredentials.internalValue = config.replicationCredentials;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_historical_metrics_collected - computed: true, optional: true, required: false
  private _areHistoricalMetricsCollected?: boolean | cdktf.IResolvable; 
  public get areHistoricalMetricsCollected() {
    return this.getBooleanAttribute('are_historical_metrics_collected');
  }
  public set areHistoricalMetricsCollected(value: boolean | cdktf.IResolvable) {
    this._areHistoricalMetricsCollected = value;
  }
  public resetAreHistoricalMetricsCollected() {
    this._areHistoricalMetricsCollected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areHistoricalMetricsCollectedInput() {
    return this._areHistoricalMetricsCollected;
  }

  // are_realtime_metrics_collected - computed: true, optional: true, required: false
  private _areRealtimeMetricsCollected?: boolean | cdktf.IResolvable; 
  public get areRealtimeMetricsCollected() {
    return this.getBooleanAttribute('are_realtime_metrics_collected');
  }
  public set areRealtimeMetricsCollected(value: boolean | cdktf.IResolvable) {
    this._areRealtimeMetricsCollected = value;
  }
  public resetAreRealtimeMetricsCollected() {
    this._areRealtimeMetricsCollected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areRealtimeMetricsCollectedInput() {
    return this._areRealtimeMetricsCollected;
  }

  // assets_compartment_id - computed: false, optional: false, required: true
  private _assetsCompartmentId?: string; 
  public get assetsCompartmentId() {
    return this.getStringAttribute('assets_compartment_id');
  }
  public set assetsCompartmentId(value: string) {
    this._assetsCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetsCompartmentIdInput() {
    return this._assetsCompartmentId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // discovery_schedule_id - computed: true, optional: true, required: false
  private _discoveryScheduleId?: string; 
  public get discoveryScheduleId() {
    return this.getStringAttribute('discovery_schedule_id');
  }
  public set discoveryScheduleId(value: string) {
    this._discoveryScheduleId = value;
  }
  public resetDiscoveryScheduleId() {
    this._discoveryScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryScheduleIdInput() {
    return this._discoveryScheduleId;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // inventory_id - computed: false, optional: false, required: true
  private _inventoryId?: string; 
  public get inventoryId() {
    return this.getStringAttribute('inventory_id');
  }
  public set inventoryId(value: string) {
    this._inventoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryIdInput() {
    return this._inventoryId;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: false, optional: false, required: true
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

  // vcenter_endpoint - computed: false, optional: false, required: true
  private _vcenterEndpoint?: string; 
  public get vcenterEndpoint() {
    return this.getStringAttribute('vcenter_endpoint');
  }
  public set vcenterEndpoint(value: string) {
    this._vcenterEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterEndpointInput() {
    return this._vcenterEndpoint;
  }

  // discovery_credentials - computed: false, optional: false, required: true
  private _discoveryCredentials = new CloudBridgeAssetSourceDiscoveryCredentialsOutputReference(this, "discovery_credentials");
  public get discoveryCredentials() {
    return this._discoveryCredentials;
  }
  public putDiscoveryCredentials(value: CloudBridgeAssetSourceDiscoveryCredentials) {
    this._discoveryCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryCredentialsInput() {
    return this._discoveryCredentials.internalValue;
  }

  // replication_credentials - computed: false, optional: true, required: false
  private _replicationCredentials = new CloudBridgeAssetSourceReplicationCredentialsOutputReference(this, "replication_credentials");
  public get replicationCredentials() {
    return this._replicationCredentials;
  }
  public putReplicationCredentials(value: CloudBridgeAssetSourceReplicationCredentials) {
    this._replicationCredentials.internalValue = value;
  }
  public resetReplicationCredentials() {
    this._replicationCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationCredentialsInput() {
    return this._replicationCredentials.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudBridgeAssetSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudBridgeAssetSourceTimeouts) {
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
      are_historical_metrics_collected: cdktf.booleanToTerraform(this._areHistoricalMetricsCollected),
      are_realtime_metrics_collected: cdktf.booleanToTerraform(this._areRealtimeMetricsCollected),
      assets_compartment_id: cdktf.stringToTerraform(this._assetsCompartmentId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      discovery_schedule_id: cdktf.stringToTerraform(this._discoveryScheduleId),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      inventory_id: cdktf.stringToTerraform(this._inventoryId),
      system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemTags),
      type: cdktf.stringToTerraform(this._type),
      vcenter_endpoint: cdktf.stringToTerraform(this._vcenterEndpoint),
      discovery_credentials: cloudBridgeAssetSourceDiscoveryCredentialsToTerraform(this._discoveryCredentials.internalValue),
      replication_credentials: cloudBridgeAssetSourceReplicationCredentialsToTerraform(this._replicationCredentials.internalValue),
      timeouts: cloudBridgeAssetSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_historical_metrics_collected: {
        value: cdktf.booleanToHclTerraform(this._areHistoricalMetricsCollected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      are_realtime_metrics_collected: {
        value: cdktf.booleanToHclTerraform(this._areRealtimeMetricsCollected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assets_compartment_id: {
        value: cdktf.stringToHclTerraform(this._assetsCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      discovery_schedule_id: {
        value: cdktf.stringToHclTerraform(this._discoveryScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
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
      inventory_id: {
        value: cdktf.stringToHclTerraform(this._inventoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_endpoint: {
        value: cdktf.stringToHclTerraform(this._vcenterEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_credentials: {
        value: cloudBridgeAssetSourceDiscoveryCredentialsToHclTerraform(this._discoveryCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBridgeAssetSourceDiscoveryCredentialsList",
      },
      replication_credentials: {
        value: cloudBridgeAssetSourceReplicationCredentialsToHclTerraform(this._replicationCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudBridgeAssetSourceReplicationCredentialsList",
      },
      timeouts: {
        value: cloudBridgeAssetSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudBridgeAssetSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
