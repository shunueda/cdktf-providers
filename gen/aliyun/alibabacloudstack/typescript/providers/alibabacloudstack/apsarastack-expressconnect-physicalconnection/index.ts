// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackExpressconnectPhysicalconnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#access_point_id ApsarastackExpressconnectPhysicalconnection#access_point_id}
  */
  readonly accessPointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#bandwidth ApsarastackExpressconnectPhysicalconnection#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#circuit_code ApsarastackExpressconnectPhysicalconnection#circuit_code}
  */
  readonly circuitCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#description ApsarastackExpressconnectPhysicalconnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#device_name ApsarastackExpressconnectPhysicalconnection#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#id ApsarastackExpressconnectPhysicalconnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#line_operator ApsarastackExpressconnectPhysicalconnection#line_operator}
  */
  readonly lineOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#peer_location ApsarastackExpressconnectPhysicalconnection#peer_location}
  */
  readonly peerLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#physical_connection_name ApsarastackExpressconnectPhysicalconnection#physical_connection_name}
  */
  readonly physicalConnectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#port_type ApsarastackExpressconnectPhysicalconnection#port_type}
  */
  readonly portType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#redundant_physical_connection_id ApsarastackExpressconnectPhysicalconnection#redundant_physical_connection_id}
  */
  readonly redundantPhysicalConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#status ApsarastackExpressconnectPhysicalconnection#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#type ApsarastackExpressconnectPhysicalconnection#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#timeouts ApsarastackExpressconnectPhysicalconnection#timeouts}
  */
  readonly timeouts?: ApsarastackExpressconnectPhysicalconnectionTimeouts;
}
export interface ApsarastackExpressconnectPhysicalconnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#create ApsarastackExpressconnectPhysicalconnection#create}
  */
  readonly create?: string;
}

export function apsarastackExpressconnectPhysicalconnectionTimeoutsToTerraform(struct?: ApsarastackExpressconnectPhysicalconnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function apsarastackExpressconnectPhysicalconnectionTimeoutsToHclTerraform(struct?: ApsarastackExpressconnectPhysicalconnectionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackExpressconnectPhysicalconnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackExpressconnectPhysicalconnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackExpressconnectPhysicalconnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection apsarastack_expressconnect_physicalconnection}
*/
export class ApsarastackExpressconnectPhysicalconnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_expressconnect_physicalconnection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackExpressconnectPhysicalconnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackExpressconnectPhysicalconnection to import
  * @param importFromId The id of the existing ApsarastackExpressconnectPhysicalconnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackExpressconnectPhysicalconnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_expressconnect_physicalconnection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_expressconnect_physicalconnection apsarastack_expressconnect_physicalconnection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackExpressconnectPhysicalconnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackExpressconnectPhysicalconnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_expressconnect_physicalconnection',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPointId = config.accessPointId;
    this._bandwidth = config.bandwidth;
    this._circuitCode = config.circuitCode;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._lineOperator = config.lineOperator;
    this._peerLocation = config.peerLocation;
    this._physicalConnectionName = config.physicalConnectionName;
    this._portType = config.portType;
    this._redundantPhysicalConnectionId = config.redundantPhysicalConnectionId;
    this._status = config.status;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_id - computed: false, optional: false, required: true
  private _accessPointId?: string; 
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId;
  }

  // bandwidth - computed: true, optional: true, required: false
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

  // circuit_code - computed: false, optional: true, required: false
  private _circuitCode?: string; 
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }
  public set circuitCode(value: string) {
    this._circuitCode = value;
  }
  public resetCircuitCode() {
    this._circuitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitCodeInput() {
    return this._circuitCode;
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

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // line_operator - computed: false, optional: false, required: true
  private _lineOperator?: string; 
  public get lineOperator() {
    return this.getStringAttribute('line_operator');
  }
  public set lineOperator(value: string) {
    this._lineOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineOperatorInput() {
    return this._lineOperator;
  }

  // peer_location - computed: false, optional: false, required: true
  private _peerLocation?: string; 
  public get peerLocation() {
    return this.getStringAttribute('peer_location');
  }
  public set peerLocation(value: string) {
    this._peerLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerLocationInput() {
    return this._peerLocation;
  }

  // physical_connection_name - computed: false, optional: true, required: false
  private _physicalConnectionName?: string; 
  public get physicalConnectionName() {
    return this.getStringAttribute('physical_connection_name');
  }
  public set physicalConnectionName(value: string) {
    this._physicalConnectionName = value;
  }
  public resetPhysicalConnectionName() {
    this._physicalConnectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalConnectionNameInput() {
    return this._physicalConnectionName;
  }

  // port_type - computed: false, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // redundant_physical_connection_id - computed: false, optional: true, required: false
  private _redundantPhysicalConnectionId?: string; 
  public get redundantPhysicalConnectionId() {
    return this.getStringAttribute('redundant_physical_connection_id');
  }
  public set redundantPhysicalConnectionId(value: string) {
    this._redundantPhysicalConnectionId = value;
  }
  public resetRedundantPhysicalConnectionId() {
    this._redundantPhysicalConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantPhysicalConnectionIdInput() {
    return this._redundantPhysicalConnectionId;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackExpressconnectPhysicalconnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackExpressconnectPhysicalconnectionTimeouts) {
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
      access_point_id: cdktf.stringToTerraform(this._accessPointId),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      circuit_code: cdktf.stringToTerraform(this._circuitCode),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      line_operator: cdktf.stringToTerraform(this._lineOperator),
      peer_location: cdktf.stringToTerraform(this._peerLocation),
      physical_connection_name: cdktf.stringToTerraform(this._physicalConnectionName),
      port_type: cdktf.stringToTerraform(this._portType),
      redundant_physical_connection_id: cdktf.stringToTerraform(this._redundantPhysicalConnectionId),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      timeouts: apsarastackExpressconnectPhysicalconnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_id: {
        value: cdktf.stringToHclTerraform(this._accessPointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circuit_code: {
        value: cdktf.stringToHclTerraform(this._circuitCode),
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      line_operator: {
        value: cdktf.stringToHclTerraform(this._lineOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_location: {
        value: cdktf.stringToHclTerraform(this._peerLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_connection_name: {
        value: cdktf.stringToHclTerraform(this._physicalConnectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_type: {
        value: cdktf.stringToHclTerraform(this._portType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redundant_physical_connection_id: {
        value: cdktf.stringToHclTerraform(this._redundantPhysicalConnectionId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apsarastackExpressconnectPhysicalconnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackExpressconnectPhysicalconnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
