// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVtapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#capture_filter_id CoreVtap#capture_filter_id}
  */
  readonly captureFilterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#compartment_id CoreVtap#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#defined_tags CoreVtap#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#display_name CoreVtap#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#encapsulation_protocol CoreVtap#encapsulation_protocol}
  */
  readonly encapsulationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#freeform_tags CoreVtap#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#id CoreVtap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#is_vtap_enabled CoreVtap#is_vtap_enabled}
  */
  readonly isVtapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#max_packet_size CoreVtap#max_packet_size}
  */
  readonly maxPacketSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#source_id CoreVtap#source_id}
  */
  readonly sourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#source_private_endpoint_ip CoreVtap#source_private_endpoint_ip}
  */
  readonly sourcePrivateEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#source_private_endpoint_subnet_id CoreVtap#source_private_endpoint_subnet_id}
  */
  readonly sourcePrivateEndpointSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#source_type CoreVtap#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#target_id CoreVtap#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#target_ip CoreVtap#target_ip}
  */
  readonly targetIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#target_type CoreVtap#target_type}
  */
  readonly targetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#traffic_mode CoreVtap#traffic_mode}
  */
  readonly trafficMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#vcn_id CoreVtap#vcn_id}
  */
  readonly vcnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#vxlan_network_identifier CoreVtap#vxlan_network_identifier}
  */
  readonly vxlanNetworkIdentifier?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#timeouts CoreVtap#timeouts}
  */
  readonly timeouts?: CoreVtapTimeouts;
}
export interface CoreVtapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#create CoreVtap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#delete CoreVtap#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#update CoreVtap#update}
  */
  readonly update?: string;
}

export function coreVtapTimeoutsToTerraform(struct?: CoreVtapTimeouts | cdktf.IResolvable): any {
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


export function coreVtapTimeoutsToHclTerraform(struct?: CoreVtapTimeouts | cdktf.IResolvable): any {
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

export class CoreVtapTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVtapTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreVtapTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap oci_core_vtap}
*/
export class CoreVtap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_vtap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreVtap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreVtap to import
  * @param importFromId The id of the existing CoreVtap that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreVtap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_vtap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vtap oci_core_vtap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVtapConfig
  */
  public constructor(scope: Construct, id: string, config: CoreVtapConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vtap',
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
    this._captureFilterId = config.captureFilterId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._encapsulationProtocol = config.encapsulationProtocol;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isVtapEnabled = config.isVtapEnabled;
    this._maxPacketSize = config.maxPacketSize;
    this._sourceId = config.sourceId;
    this._sourcePrivateEndpointIp = config.sourcePrivateEndpointIp;
    this._sourcePrivateEndpointSubnetId = config.sourcePrivateEndpointSubnetId;
    this._sourceType = config.sourceType;
    this._targetId = config.targetId;
    this._targetIp = config.targetIp;
    this._targetType = config.targetType;
    this._trafficMode = config.trafficMode;
    this._vcnId = config.vcnId;
    this._vxlanNetworkIdentifier = config.vxlanNetworkIdentifier;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_filter_id - computed: false, optional: false, required: true
  private _captureFilterId?: string; 
  public get captureFilterId() {
    return this.getStringAttribute('capture_filter_id');
  }
  public set captureFilterId(value: string) {
    this._captureFilterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureFilterIdInput() {
    return this._captureFilterId;
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

  // encapsulation_protocol - computed: true, optional: true, required: false
  private _encapsulationProtocol?: string; 
  public get encapsulationProtocol() {
    return this.getStringAttribute('encapsulation_protocol');
  }
  public set encapsulationProtocol(value: string) {
    this._encapsulationProtocol = value;
  }
  public resetEncapsulationProtocol() {
    this._encapsulationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationProtocolInput() {
    return this._encapsulationProtocol;
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

  // is_vtap_enabled - computed: true, optional: true, required: false
  private _isVtapEnabled?: boolean | cdktf.IResolvable; 
  public get isVtapEnabled() {
    return this.getBooleanAttribute('is_vtap_enabled');
  }
  public set isVtapEnabled(value: boolean | cdktf.IResolvable) {
    this._isVtapEnabled = value;
  }
  public resetIsVtapEnabled() {
    this._isVtapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVtapEnabledInput() {
    return this._isVtapEnabled;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // max_packet_size - computed: true, optional: true, required: false
  private _maxPacketSize?: number; 
  public get maxPacketSize() {
    return this.getNumberAttribute('max_packet_size');
  }
  public set maxPacketSize(value: number) {
    this._maxPacketSize = value;
  }
  public resetMaxPacketSize() {
    this._maxPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketSizeInput() {
    return this._maxPacketSize;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_private_endpoint_ip - computed: true, optional: true, required: false
  private _sourcePrivateEndpointIp?: string; 
  public get sourcePrivateEndpointIp() {
    return this.getStringAttribute('source_private_endpoint_ip');
  }
  public set sourcePrivateEndpointIp(value: string) {
    this._sourcePrivateEndpointIp = value;
  }
  public resetSourcePrivateEndpointIp() {
    this._sourcePrivateEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrivateEndpointIpInput() {
    return this._sourcePrivateEndpointIp;
  }

  // source_private_endpoint_subnet_id - computed: true, optional: true, required: false
  private _sourcePrivateEndpointSubnetId?: string; 
  public get sourcePrivateEndpointSubnetId() {
    return this.getStringAttribute('source_private_endpoint_subnet_id');
  }
  public set sourcePrivateEndpointSubnetId(value: string) {
    this._sourcePrivateEndpointSubnetId = value;
  }
  public resetSourcePrivateEndpointSubnetId() {
    this._sourcePrivateEndpointSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrivateEndpointSubnetIdInput() {
    return this._sourcePrivateEndpointSubnetId;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_ip - computed: true, optional: true, required: false
  private _targetIp?: string; 
  public get targetIp() {
    return this.getStringAttribute('target_ip');
  }
  public set targetIp(value: string) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }

  // target_type - computed: true, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // traffic_mode - computed: true, optional: true, required: false
  private _trafficMode?: string; 
  public get trafficMode() {
    return this.getStringAttribute('traffic_mode');
  }
  public set trafficMode(value: string) {
    this._trafficMode = value;
  }
  public resetTrafficMode() {
    this._trafficMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficModeInput() {
    return this._trafficMode;
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // vxlan_network_identifier - computed: true, optional: true, required: false
  private _vxlanNetworkIdentifier?: string; 
  public get vxlanNetworkIdentifier() {
    return this.getStringAttribute('vxlan_network_identifier');
  }
  public set vxlanNetworkIdentifier(value: string) {
    this._vxlanNetworkIdentifier = value;
  }
  public resetVxlanNetworkIdentifier() {
    this._vxlanNetworkIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanNetworkIdentifierInput() {
    return this._vxlanNetworkIdentifier;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVtapTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVtapTimeouts) {
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
      capture_filter_id: cdktf.stringToTerraform(this._captureFilterId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      encapsulation_protocol: cdktf.stringToTerraform(this._encapsulationProtocol),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_vtap_enabled: cdktf.booleanToTerraform(this._isVtapEnabled),
      max_packet_size: cdktf.numberToTerraform(this._maxPacketSize),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_private_endpoint_ip: cdktf.stringToTerraform(this._sourcePrivateEndpointIp),
      source_private_endpoint_subnet_id: cdktf.stringToTerraform(this._sourcePrivateEndpointSubnetId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_ip: cdktf.stringToTerraform(this._targetIp),
      target_type: cdktf.stringToTerraform(this._targetType),
      traffic_mode: cdktf.stringToTerraform(this._trafficMode),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      vxlan_network_identifier: cdktf.stringToTerraform(this._vxlanNetworkIdentifier),
      timeouts: coreVtapTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_filter_id: {
        value: cdktf.stringToHclTerraform(this._captureFilterId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation_protocol: {
        value: cdktf.stringToHclTerraform(this._encapsulationProtocol),
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
      is_vtap_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVtapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_packet_size: {
        value: cdktf.numberToHclTerraform(this._maxPacketSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_private_endpoint_ip: {
        value: cdktf.stringToHclTerraform(this._sourcePrivateEndpointIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_private_endpoint_subnet_id: {
        value: cdktf.stringToHclTerraform(this._sourcePrivateEndpointSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ip: {
        value: cdktf.stringToHclTerraform(this._targetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_mode: {
        value: cdktf.stringToHclTerraform(this._trafficMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_network_identifier: {
        value: cdktf.stringToHclTerraform(this._vxlanNetworkIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: coreVtapTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreVtapTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
